const { WebhookClient, EmbedBuilder } = require('discord.js');
const { getCollection } = require('../../src/utils/mongo');
const pk = require('../utils/pluralkit');

const WEBHOOK_URL = 'Discord_Webhook_URL_Here';
const masterWebhook = new WebhookClient({ url: WEBHOOK_URL });
const WEBHOOK_ID = 'Webhooks_ID_Number_Here';

const blacklistedChannels = ['Channel_ID_1', 'Channel_ID_2', 'Channel_ID_3'];

const pkCache = new Map(); // messageId -> { userId, usernameOverride, webhookMessageId }
const pkFetchQueue = new Map();
const deleteQueue = new Map(); // channelId -> [{ message, userId, usernameOverride }]
const deleteTimeouts = new Map(); // channelId -> timeoutId
const DELETE_BATCH_INTERVAL = 1500;

// --- Guild-specific webhook cache ---
const guildWebhookCache = new Map(); // guildId -> WebhookClient

// === Mongo Helpers ===
async function addMessageToStore(userId, entry) {
    const col = await getCollection("messageStore");
    await col.updateOne({ userId }, { $addToSet: { messages: entry } }, { upsert: true });
}

async function removeMessageFromStore(messageId) {
    const col = await getCollection("messageStore");
    await col.updateMany({}, { $pull: { messages: { messageId } } });
}

// === Webhook Logger ===
async function sendWebhookLog(type, message, userId, usernameOverride, webhookMessageId) {
    let avatarURL = message.pkMemberAvatarURL 
        || message.author?.displayAvatarURL?.({ dynamic: true, size: 1024 }) 
        || message.client?.user?.displayAvatarURL({ dynamic: true }) 
        || null;

    let contentLine = message.content ? `\n\n**Content:** ${message.content}` : '';

    const embed = new EmbedBuilder()
        .setTitle(`Message ${type}`)
        .setDescription(`**From:** ${usernameOverride || 'Unknown User'} \`(${userId})\`\n**Channel:** #${message.channel?.name || 'Unknown'}\n**Guild:** ${message.guild?.name || 'DM'}${contentLine}`)
        .setColor(type === 'Stored' ? 0x00ff00 : 0xff0000)
        .setTimestamp(new Date())
        .setThumbnail(avatarURL);

    // Display multiple attachments as a gallery
    if (message.attachments?.size > 0) {
        let firstImageSet = false;
        for (const attachment of message.attachments.values()) {
            if (attachment.contentType?.startsWith('image/')) {
                if (!firstImageSet) {
                    embed.setImage(attachment.url);
                    firstImageSet = true;
                } else {
                    embed.addFields({ name: 'Attachment Image', value: `[Link](${attachment.url})`, inline: false });
                }
            } else {
                embed.addFields({ name: 'Attachment', value: `[${attachment.name}](${attachment.url})`, inline: false });
            }
        }
    }

    // Include any embeds from the original message
    if (message.embeds?.length > 0) {
        for (const e of message.embeds) {
            if (e.title || e.description) {
                embed.addFields({ name: e.title || 'Embed', value: e.description || 'No description', inline: false });
            }
        }
    }

    const embedData = { embeds: [embed] };

    // --- Master/global webhook ---
    if (webhookMessageId) {
        try {
            await masterWebhook.editMessage(webhookMessageId, embedData);
        } catch (err) {
            console.warn('[Master Webhook] Failed to edit message:', err.message);
        }
    } else {
        await masterWebhook.send(embedData);
    }

    // --- Guild-specific webhook ---
    if (message.guild) {
        try {
            const guildConfigsCol = await getCollection('guildConfigs');
            const guildConfig = await guildConfigsCol.findOne({ guildId: message.guild.id });

            if (guildConfig?.messageLog) {
                let guildWebhook = guildWebhookCache.get(message.guild.id);

                if (!guildWebhook) {
                    guildWebhook = new WebhookClient({
                        id: guildConfig.messageLog.webhookId,
                        token: guildConfig.messageLog.webhookToken
                    });
                    guildWebhookCache.set(message.guild.id, guildWebhook);
                }

                await guildWebhook.send(embedData);
            }
        } catch (err) {
            console.warn(`[Guild Webhook] Failed for guild ${message.guild?.id}:`, err.message);
        }
    }

    return webhookMessageId || null;
}

// === PluralKit Robust Fetch ===
async function fetchPKRobust(message) {
    if (pkFetchQueue.has(message.id)) return pkFetchQueue.get(message.id);

    const promise = (async () => {
        let attempt = 0;
        const maxAttempts = 5;
        const backoff = 1000;

        while (attempt < maxAttempts) {
            try {
                const pkMsg = await pk.messages.get(message.id);
                if (!pkMsg) return null;

                const senderId = pkMsg.sender || 'Unknown';
                const memberName = pkMsg.member?.name || 'Unknown Proxy';
                const systemId = pkMsg.system?.id || 'UnknownSystem';

                let senderTag = 'Unknown User';
                let avatarURL = pkMsg.member?.avatar_url || pkMsg.system?.avatar_url || null;

                try {
                    const senderUser = await message.client.users.fetch(senderId);
                    senderTag = senderUser?.username || 'Unknown User';
                    if (!avatarURL) avatarURL = senderUser?.displayAvatarURL() || null;
                } catch { senderTag = 'Unknown User'; }

                const usernameOverride = `${memberName} | via ${senderTag} \n **PK System ID:** \`${systemId}\` \n **User ID:**`;

                message.pkMemberAvatarURL = avatarURL;

                pkCache.set(message.id, { userId: senderId, usernameOverride, avatarURL });
                return { userId: senderId, usernameOverride, avatarURL };
            } catch (err) {
                attempt++;
                await new Promise(res => setTimeout(res, backoff * attempt));
            }
        }

        return null;
    })();

    pkFetchQueue.set(message.id, promise);
    const result = await promise;
    pkFetchQueue.delete(message.id);
    return result;
}

// === Bulk Delete Helper ===
function queueDelete(message, userId, usernameOverride) {
    const channelId = message.channel?.id;
    if (!deleteQueue.has(channelId)) deleteQueue.set(channelId, []);
    deleteQueue.get(channelId).push({ message, userId, usernameOverride });

    if (!deleteTimeouts.has(channelId)) {
        const timeoutId = setTimeout(() => {
            flushDeleteQueue(channelId);
            deleteTimeouts.delete(channelId);
        }, DELETE_BATCH_INTERVAL);
        deleteTimeouts.set(channelId, timeoutId);
    }
}

async function flushDeleteQueue(channelId) {
    const queue = deleteQueue.get(channelId);
    if (!queue || queue.length === 0) return;

    try {
        if (queue.length === 1) {
            const { message, userId, usernameOverride } = queue[0];
            await sendWebhookLog('Deleted', message, userId, usernameOverride);
        } else {
            const embeds = [];
            const maxDescLength = 4000;
            let currentDesc = '';

            for (const q of queue) {
                let contentLine = q.message.content ? `\n**Content:** ${q.message.content}` : '';
                const entryLine = `**From:** ${q.usernameOverride} \`(${q.userId})\`\n**Message ID:** ${q.message.id}\n**Channel:** #${q.message.channel?.name || 'Unknown'}${contentLine}\n`;
                if ((currentDesc + entryLine).length > maxDescLength) {
                    embeds.push({ title: `Messages Deleted (${embeds.length * 50})`, description: currentDesc, color: 0xff0000, timestamp: new Date().toISOString() });
                    currentDesc = entryLine;
                } else {
                    currentDesc += entryLine + '\n';
                }
            }

            if (currentDesc) {
                embeds.push({ title: `Messages Deleted (${queue.length})`, description: currentDesc, color: 0xff0000, timestamp: new Date().toISOString() });
            }

            for (const embedData of embeds) {
                await masterWebhook.send({ embeds: [embedData] });
            }

            const guildId = queue[0]?.message.guild?.id;
            if (guildId) {
                try {
                    const guildConfigsCol = await getCollection('guildConfigs');
                    const guildConfig = await guildConfigsCol.findOne({ guildId });

                    if (guildConfig?.messageLog) {
                        let guildWebhook = guildWebhookCache.get(guildId);

                        if (!guildWebhook) {
                            guildWebhook = new WebhookClient({
                                id: guildConfig.messageLog.webhookId,
                                token: guildConfig.messageLog.webhookToken
                            });
                            guildWebhookCache.set(guildId, guildWebhook);
                        }

                        for (const embedData of embeds) {
                            await guildWebhook.send({ embeds: [embedData] });
                        }
                    }
                } catch (err) {
                    console.warn(`[Guild Webhook] Bulk delete failed for guild ${guildId}:`, err.message);
                }
            }
        }
    } catch (err) {
        console.warn('[Webhook] Bulk delete log failed:', err.message);
    }

    deleteQueue.delete(channelId);
}

// === Event Exports ===
module.exports = {
    name: 'messageCreate',

    async execute(message) {

        //Ignore DM's
        if (!message.guild) return;

        //Guild|Server Message
        const channelId = message.channel?.id;
        if (!message.id || blacklistedChannels.includes(channelId)) return;
        if (message.system || message.webhookId === WEBHOOK_ID) return;

        const entry = { messageId: message.id, channelId, guildId: message.guild.id };
        let pkData = null;

        if (message.webhookId && message.webhookId !== WEBHOOK_ID) {
            pkData = await fetchPKRobust(message);
            if (!pkData) return;
        }

        if (!pkData) {
            if (message.author?.bot) return;
            const userId = message.author?.id || 'Unknown';
            const usernameOverride = message.author?.username || 'Unknown User';
            await addMessageToStore(userId, entry);
            await sendWebhookLog('Stored', message, userId, usernameOverride);
            return;
        }

        const { userId, usernameOverride } = pkData;
        const webhookMessageId = await sendWebhookLog('Stored', message, userId, usernameOverride);
        pkCache.set(message.id, { userId, usernameOverride, webhookMessageId });
        await addMessageToStore(userId, entry);
    },

    async messageDelete(message) {

        //Ignore DM's
        if (!message.guild) return;

        //Guild|Server Message
        const channelId = message.channel?.id;
        if (!message.id || blacklistedChannels.includes(channelId)) return;

        await removeMessageFromStore(message.id);

        let cacheData = pkCache.get(message.id);
        if (!cacheData) {
            if (message.webhookId && message.webhookId !== WEBHOOK_ID) return;
            cacheData = {
                userId: message.author?.id || 'Unknown',
                usernameOverride: message.author?.username || 'Unknown User'
            };
        }

        const userId = cacheData.userId;
        const usernameOverride = cacheData.usernameOverride;

        pkCache.delete(message.id);
        queueDelete(message, userId, usernameOverride);
    }
};
