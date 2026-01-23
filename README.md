# Valknut 🛡️

[![AddValk](https://img.shields.io/badge/Invite%20Valknut-18%20Servers-7289DA)](https://discord.com/oauth2/authorize?client_id=1373066520397348864)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://github.com/TriRealm/Valknut/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/1383009209196613675?color=00FF7F&label=Support%20Server)](https://discord.gg/EvYFUSpbVz)
[![Kofi](https://img.shields.io/badge/Kofi-Support_the_Dev-8755D6)](https://ko-fi.com/trirealm)



![Users](https://img.shields.io/badge/Banned%20Users-47-FA003F)
![Users2](https://img.shields.io/badge/Blocked%20Users-1-FA003F)
![Guilds](https://img.shields.io/badge/Blocked%20Guilds-0-FA003F)
[![Banned](https://img.shields.io/badge/Banned%3F-Appeal_Here-FF4D00)](https://discord.gg/EvYFUSpbVz)

---

**Valknut** is a specialized Discord moderation bot, built to protect communities from ban-evading users and maintain safe spaces across mutual servers.

Originally designed for a group of closely-knit communities, Valknut ensures problematic users cannot disrupt your servers.

---

## 📝 How to Install?

Click the "Invite to Discord" button above OR find us [HERE](https://top.gg/bot/1373066520397348864)

---

## 🌟 Key Features

- **One Command, Gone From All!**  
  One command removes dangerous users from all Global Enabled Servers.

- **Trusted Distribution**  
  Shared only with a controlled group of trusted creators to maintain security and integrity.

- **18+ Filtering**  
  Configurable filters to help mature content creators limit moderation actions to 18+ communties only.

- **Owner & Moderator Protections**  
  Completely integrated safeguards to prevent misuse, including attempts to ban Owners or Moderators.

- **Community Safety**  
  Designed to keep servers and users safe, while ensuring fair, and easily documented, moderation actions.



*Application required for access to global commands, see Configuration Overview below*

---

## ⚙️ /config Command Overview

| Subcommand / Option | Permissions | Description |
|--------------------|------------|-------------|
| `/applyforglobal` | **Server Owner** <br> Permission:<br> `Administrator` | Apply to get your server enabled for global commands (Global Ban/UnBan & Purge). |
| `/catchupbans <all/global/18plus>` | **Server Owner** <br> Permission:<br> `Administrator` | Applies all Global Bans from the bots prior logs with the desired filter they set. |
| `/config botappearance <avatar> <avatar_url> <banner> <banner_url> <reset>` | **Server Owner** <br> Permission:<br> `Administrator` | Allows you to customise the appearance of the bot by uploading files or using links for your server. |
| `/config autojoinrole <set/add/view/remove/clear>` | **Server Owner** <br> Permission:<br> `Administrator` | Allows you set roles applied to users when they first join your server. |
| `/config raidlogs <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the channel where Raid Mode logs will be sent. |
| `/config modlogs <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the channel where Moderation logs will be sent. |
| `/config systemlogs <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the channel where System logs will be sent. (Maintance, Downtime, Changelogs and Documentation Update Notifications) |
| `/config messagelog_webhook <url> Create:<True/False> Update:<True/False> Delete:<True/False>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the webhook where Message logs from your server will be sent which are configurable to turn off/on each event for your server. (Message Create, Message Update & Message Delete) |
| `/config antispam` | **Server Owner** <br> Permission:<br> `Administrator` | Configure the anti-spam system. |
| `/config antiraid` | **Server Owner** <br> Permission:<br> `Administrator` | Configure the automatic anti-raid system. |
| `/config autokick <role> <time> <reason>` | **Server Owner** <br> Permission:<br> `Administrator` | System that auto-kicks users with the desired role after the set time! Intergrated with other bots that have a verification process but lock the auto-kick behind a paywall. (eg. Melpo Verifier) |
| `/config 18plus_server <enabled>` | **Server Owner** <br> Permission:<br> `Administrator` | Enable or disable 18+ server mode for this guild. |
| `/config invite <url>` | **Server Owner** <br> Permission:<br> `Administrator` | Set the permanent Discord invite link used in tempban messages. |
| `/config globalcommands <enabled>` | **Server Owner** <br> Permission:<br> `Administrator` | Enable or disable participation in the global command system. |
| `/config roleprotect add <role>` | **Server Owner** <br> Permission:<br> `Administrator` | Add a role to the protected roles list. |
| `/config roleprotect delete <role>` | **Server Owner** <br> Permission:<br> `Administrator` | Remove a role from the protected roles list. |
| `/config roleprotect list` | **Server Owner** <br> Permission:<br> `Administrator` | List all protected roles in this guild. |
| `/config mute enabled:<true/false> <role>` | **Server Owner** <br> Permission:<br> `Administrator` | Enables/Disables the bot to manage and configure channels for the Mute/Timeout System. |
| `/ticket <setup/panel>` | **Moderator/Staff** <br> Permission:<br> `Manage Guild` | Configure and send ticket system panels for support channels. |
| `/config verify setroles <verified_role> <unverified_role>` | **Server Owner** <br> Permission:<br> `Administrator` | Set the verified and unverified roles for the server. |
| `/config verify addrole <role>` | **Server Owner** <br> Permission:<br> `Administrator` | Set additional roles to applied when a user is verified. |
| `/config verify setchannel <review_channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Set the channel where moderators review verification submissions. |
| `/config verify setquestions <questions>` | **Server Owner** <br> Permission:<br> `Administrator` | Configure up to 10 verification questions. Use comma-separated format. Multiple choice: `Q|option1;option2;option3`. |
| `/config verify view` | **Server Owner** <br> Permission:<br> `Administrator` | View the current verification configuration. |
| `/config verify sendbutton <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Send the verification “Verify” button embed to a channel. |
| `/config verify setstaff <staff_role>` | **Server Owner** <br> Permission:<br> `Administrator` | Set the staff role to ping when a verification is submitted. |
| `/config logging user <webhook_url> <avatar_update> <role_update>` | **Server Owner** <br> Permission:<br> `Administrator` | Configure user logging (avatar/role updates) via a webhook. |
| `/config logging member <join_enabled> <join_channel> <leave_enabled> <leave_channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Configure member join/leave logging. Enable/disable events and set channels. |
| `/config logging voice <enabled> <channel> <webhook>` | **Server Owner** <br> Permission:<br> `Administrator` | Configure voice channel logging. Can send to a channel or webhook. |
| `/ticket setup <channel> <category> <support_role> <log_channel> <panel_id>` | **Moderator/Staff** <br> Permission:<br> `Manage Guild` | Configure the ticket system for this guild, setting up where tickets are created and logged. |
| `/ticket panel <panel_id>` | **Moderator/Staff** <br> Permission:<br> `Manage Guild` | Sends the ticket creation panel embed with a button to open new tickets. |



---

## 📖 "/Config" Command Details

### `/applyforglobal`
- **Permissions:** Server Owner with `Administrator`  
- Sends an application for review to enable your server to run Global commands and have them run in your server.

### `/catchupbans <all/global/18plus>`
- **Permissions:** Server Owner with `Administrator`  
- Applies all Global Bans from the bots prior logs with the desired filter they set.
- **Usage:** `/catchupbans 18plus`  - Only runs the bans from logs that have the 18plus filter as `true`
- **Options:**
  - `all` – Runs **ALL** Global Bans the bot has previously ran to catch the server up with prior bans.  
  - `global` – Runs Only Global Bans Where the **18plus flag is `false`**.  
  - `18plus` – Runs Only Global Bans Where the **18plus flag is `true`**.

 ### `/config botappearance <avatar> <avatar_url> <banner> <banner_url> <reset>`
- **Permissions:** Server Owner with `Administrator`  
- Allows you to customise the appearance of the bot by uploading files or using links for your server.
- **Usage:** `/config botappearance avatar_url:https://pngimg.com/d/discord_PNG18.png banner_url:https://hypeserv.com/file/discord_banner.webp`  - Sets the bots avatar and banner to images those links go to.
- **Options:**
  - `avatar` – Prompts you to attach a file to set as the bots new Avatar.  
  - `avatar_url` – Prompts you to input a url of an image to set as the bots new Avatar. 
  - `banner` – Prompts you to attach a file to set as the bots new Banner.  
  - `banner_url` – Prompts you to input a url of an image to set as the bots new Banner.
  - `reset` – if value is set to `true` it will reset the bots Avatar and Banner to the `GLOBAL`/`Default` ones.
 
 ### `/config autojoinrole <set/add/view/remove/clear>`
- **Permissions:** Server Owner with `Administrator`  
- Allows you set roles applied to users when they first join your server..
- **Usage:** `/config autojoinrole @Unverifies`  - Sets @Unverified to be given to users when they join your server.
- **Options:**
  - `set` – Sets the initial role to be applied.  
  - `add` – Add extra roles you want to be applied to new users. 
  - `view` – View a list of the roles that will be applied.  
  - `remove` – Removes the selected role from the list to no longer be applied.
  - `clear` – clear the configured options entirely for the `autojoinrole` settings.  
  

### `/config raidlogs <channel>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Set the text channel where Raid Mode logs will be sent.  
- **Usage:** `/config raidlogs #raid-logs`  
- **Note:** The bot only logs raid events to this channel after it’s configured.

### `/config modlogs <channel>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Set the text channel where moderation logs (bans, kicks, role protection changes, etc.) will be sent.  
- **Usage:** `/config modlogs #mod-logs`

### `/config systemlogs <channel>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Sets the channel where System logs will be sent. (Maintance, Downtime, Changelogs and Documentation Update Notifications).  
- **Usage:** `/config systemlogs #system-logs`

### `/config messagelog_webhook <url> Create:<True/False> Update:<True/False> Delete:<True/False>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Sets the webhook where Message logs from your server will be sent which are configurable to turn off/on each event for your server. (Message Create, Message Update & Message Delete).  
- **Usage:** `/config messagelog_webhook https://discord.com/api/webhooks/Webhook_ID/Other_Discord_Webhook_Information Create:Fasle Update:True Delete:True` - This will send webhooks for EVERY Update and Delete Message event that triggers in your server.  

### `/config antispam`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Configure the anti-spam system.  
- **Options:**
  - `maxmessages` – Number of messages to store in memory (0–20). 0 disables.  
  - `threshold` – How many similar messages trigger spam detection (0–20).  
  - `similarity` – Similarity threshold between messages (0.1–1.0, default 0.8).  
  - `duration` – How long messages are kept in memory (seconds, 5–300).  
- **Example:** `/config antispam maxmessages 10 threshold 3 similarity 0.85 duration 60`  

### `/config antiraid`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Configure automatic anti-raid settings.  
- **Options:**
  - `joins` – Number of joins in the window that triggers raid mode (0 = disable).  
  - `window` – Time window in seconds (5–300).  
  - `duration` – How long raid mode stays active (e.g., 30s, 10m, 1h, 1d).  
- **Example:** `/config antiraid joins 5 window 10 duration 1h`

### `/config autokick`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Configure the anti-spam system.  
- **Options:**
  - `role` – The role needed to be monitored and timed.  
  - `time` – Duration in **Minutes** - `5760` = `4 Days` - MAX = `10080` - `7 Days` .  
  - `reason` – The Reason/Message used for the kick which will be logged and seen in the `Audit Log` of your server.    
- **Example:** `/config autokick @unverified 5760 [Time-out] Unverified after 4 days.`   

### `/config 18plus_server <enabled>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Mark the guild as 18+ for filtering global bans and other 18+ content.  
- **Usage:** `/config 18plus_server true` → Enables 18+ mode  
- **Usage:** `/config 18plus_server false` → Disables 18+ mode  

### `/config invite <url>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Set a permanent Discord invite link used in temporary ban messages.  
- **Requirements:** Must start with `https://discord.gg/`.  
- **Example:** `/config invite https://discord.gg/example`  

### `/config globalcommands <enabled>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Opt the server in or out of the global command system (global bans, global purges, etc.).  
- **Usage:** `/config globalcommands true` → Opt-in  
- **Usage:** `/config globalcommands false` → Opt-out  

### `/config roleprotect add <role>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Add a role to the protected roles list (staff or owner roles).  
- **Usage:** `/config roleprotect add @Moderator`  
- **Notes:** Users with protected roles cannot be banned by Valknut.  

### `/config roleprotect delete <role>`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Remove a role from the protected roles list.  
- **Usage:** `/config roleprotect delete @Moderator`  

### `/config roleprotect list`
- **Permissions:** Server Owner with `Administrator` 
- **Purpose:** Display all roles currently protected in this guild.  
- **Usage:** `/config roleprotect list`  
- **Example Output:**<br>
`🛡️ Protected Roles:`<br>
`- @Owner`<br>
`- @Admin`<br>
`- @Moderator`<br>

### `/config Mute Enabled:<true/false> <role>`
- **Permissions:** Server Owner with `Administrator`  
- Enables/Disables the bot to manage and configure channels for the Mute/Timeout System..
- **Usage:** `/config mute true @Muted`  - Enabled the Mute/Timeout Functions for the `@Muted` Role
- **Options:**
  - `True` – Turns **ON** the system and Makes the bot go through all `CHANNELS` and applies the configured `Mute` role from speaking/typing in channels **(DOESN'T AFFECT VIEWING PERMISSIONS - ALL INHERITED FROM CURRENT ROLES)**.  
  - `False` – Turns **OFF** the system.  
  - `Role` – The desired Role you want the bot to manage and apply to channels for the Mute/Timeout.
 
### `/ticket <setup/panel>`
- **Permissions:** Moderator/Staff with `Manage Guild`  
- **Purpose:** Full support ticket system configuration and deployment.  

#### Subcommands:
- **`setup`** → Configure where the ticket system operates.
  - `channel` → Channel where the “Create Ticket” embed is posted.
  - `category` → Category for ticket channels.
  - `support_role` → Role that can see and manage tickets.
  - `log_channel` → Channel to send closed ticket logs.
  - `panel_id` *(optional)* → Identifier for different ticket panels (e.g., “billing”, “support”).  
  - ✅ Example:  
    ```
    /ticket setup channel:#tickets category:#open-tickets support_role:@Support log_channel:#ticket-logs panel_id:main
    ```
- **`panel`** → Sends the configured “Create Ticket” panel embed to the chosen channel.
  - ✅ Example: `/ticket panel main`

 
### `/ticket setup <channel> <category> <support_role> <log_channel> <panel_id>`
- **Permissions:** Moderator/Staff with `Manage Guild`  
- **Purpose:** Configures the ticket system for the guild by saving where to post the panel, which category tickets open under, who manages them, and where to log closed tickets.  
- **Usage:**  
  `/ticket setup channel:#ticket-panel category:#tickets support_role:@Support log_channel:#ticket-logs panel_id:main`  
- **Details:**
  - `channel` → The channel where the “Create Ticket” panel will be posted.  
  - `category` → The category where new ticket channels will appear.  
  - `support_role` → The role allowed to view and manage tickets.  
  - `log_channel` → The channel where closed tickets are logged.  
  - `panel_id` *(optional)* → Identifier for multi-panel setups (default = `main`).  

### `/ticket panel <panel_id>`
- **Permissions:** Moderator/Staff with `Manage Guild`  
- **Purpose:** Sends the saved “Create Ticket” panel to the configured channel.  
- **Usage:** `/ticket panel main`  
- **Behavior:** Posts an embed with a “Create Ticket” button that opens a private support channel automatically.

### `/config verify` Subcommand Details
- **Permissions:** Server Owner with `Administrator` 
- **`setroles`** – Assign verified and unverified roles automatically on verification.
- **`setchannel`** – Moderators review submissions here. Embed notifications are sent to this channel.
- **`setquestions`** – Configure questions sent to users in DMs. Supports multiple-choice.
- **`view`** – Displays current settings for roles, review channel, staff ping, and questions.
- **`sendbutton`** – Sends the verification “Verify” button embed to a chosen channel.
- **`setstaff`** – Set a staff role that will be pinged when new verification submissions occur.

### `/config logging` Subcommand Details
- **Permissions:** Server Owner with `Administrator`
#### User Logging
- Logs avatar and role updates to a webhook.
- Options:
  - `webhook_url` → Webhook to receive logs.
  - `avatar_update` → Enable avatar update logging.
  - `role_update` → Enable role update logging.

#### Member Logging
- Logs member joins and leaves.
- Options:
  - `join_enabled` → Enable join logs.
  - `join_channel` → Channel for join logs.
  - `leave_enabled` → Enable leave logs.
  - `leave_channel` → Channel for leave logs.

#### Voice Logging
- Logs voice channel activity (joins, leaves, mutes, etc.).
- Options:
  - `enabled` → Enable or disable logging.
  - `channel` → Text channel to post logs.
  - `webhook` → Webhook to send logs instead of a channel.

---

## ⚔️ Valknut General/Moderation Commands Overview

> *Note: Only trusted moderators or creators can use critical commands.*

| Command                                     | Permissions / Role | Description |
|---------------------------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/botinfo`                                  | **Everyone**                               | Displays the credits of who made and developed the bot. |
| `/help`                                     | **Moderator/Staff** <br> Permission:<br> `Ban Members` | Links to the README to help with commands and initial setup. |
| `/guildscan <LIMIT>`                        | **Moderator/Staff** <br> Permission:<br> `Manage Messages` | Scans messages across every channel in your server up to the specified limit (max 100,000). <br>Stores only `User ID`, `Channel ID`, `Message ID`, and `Guild ID`. <br>No Message Content is ever Stored. |
| `/purgeuser <USER>`                         | **Moderator/Staff** <br> Permission:<br> `Manage Messages` | Deletes every message logged by Valknut from the target user **in your server**. |
| `/globalpurgeuser <USER>`                   | **Moderator/Staff** <br> Permission:<br> `Manage Messages` | Deletes every message logged by Valknut from the target user **across all servers**. |
| `/role <add/remove>` | **Moderator/Staff** <br> Permission:<br> `Manage Roles` | Add or remove a role from a user, respecting Discord role hierarchy limits. |
| `/ban <USER> <REASON>`                      | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Locally bans a user in your server. Requires tagging the user and providing a reason. |
| `/tempban <USER> <DURATION> <REASON>`                      | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Locally & Temporarily bans a user in your server. Requires tagging the user and providing a reason. |
| `/unban <USER> <REASON>`                    | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Locally un-bans a user in your server. Requires tagging the user and providing a reason. |
| `/kick <USER> <REASON>`                     | **Moderator/Staff** <br> Permission:<br> `Kick Members`     | Locally kicks a user from your server. Requires tagging the user and providing a reason. |
| `/modcomment <VIEW/ADD/DELETE/EDIT> <USER>` | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Manages global notes on a user: VIEW existing comments, ADD a comment, DELETE a comment, EDIT an existing comment. |
| `/globalban <USER> <REASON> <True/False>`   | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Globally bans a user in all servers Valknut is in. True = bans only in 18+ registered servers; False = bans in all servers. |
| `/globalunban <USER> <REASON> <True/False>` | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Globally un-bans a user in all servers Valknut is in. True = un-bans in 18+ registered servers only; False = un-bans in all servers. |
| `/raidmode <True/False> <DURATION>` | **Moderator/Staff** <br> Permission:<br> `Kick Members`     | Enables Raid-Mode on your server where everyone who attempts to join while active will be kicked. <br>Will Disable automatically after time has elapsed or with a `false` value in the command. |
| `/twitch ADD/REMOVE/LIST <USERNAME> <CHANNEL> <MESSAGE>`   | **Moderator/Staff** <br> Permission:<br> `Manage Messages`     | Allows you to get livestream notifications from the desired user in a set channel with a custom message. |
| `/youtube ADD/REMOVE/LIST <CHANNEL ID> <CHANNEL> <MESSAGE> <TYPE: VIDEO/LIVE/SHORTS`   | **Moderator/Staff** <br> Permission:<br> `Manage Messages`     | Allows you to get notifcations from the desired user on youtube in a set channel with a custom message. |
| `/reactionrole <create/edit/remove/list/addrole/removerole> <messageid> <emoji> <role> <displayname> <maxroles> <requiredrole> <excludedrole>`   | **Moderator/Staff** <br> Permission:<br> `Manage Messages`     | Allows you to create and manage roles that users can assign by reacting to a message dynamically. |
| `/poll <title> <role> <option1> <option2> <option3> <option4> <option5> <option6> <option7> <option8> <option9> <option10>`   | **Moderator/Staff** <br> Permission:<br> `Manage Messages`     | Allows you to create polls and Optionally mention users for notifications and allow to react to the options. |
| `/mute <user> <reason> <duartion>`   | **Moderator/Staff** <br> Permission:<br> `Time Out Members/Moderate Members`     | Allows you to mute/timeout users indefinitely or for a set amount of time IF SET. |
| `/unmute <user> <reason>`   | **Moderator/Staff** <br> Permission:<br> `Time Out Members/Moderate Members`     | Allows you to un-mute/un-timeout users. |

---

## 📖 Command Details

### `/help`
Provides a link to this README so users can get set up and see all commands.

### `/botinfo`
Displays bot credits and developer information.

### `/guildscan <LIMIT>`
- **Permissions:** Moderator/Staff with `Manage Messages`  
- Scans all messages across all channels in your server up to the specified limit (max 100,000).  
- **Stored data:** User ID, Channel ID, Message ID, Guild ID.  
- **Note:** No message content is logged. Useful for purge commands exceeding the 200-message limit most bots have.

### `/purgeuser <USER>` / `/globalpurgeuser <USER>`
- **Permissions:** Moderator/Staff with `Manage Messages`  
- Deletes every message logged by Valknut from the target user.  
- `/purgeuser` → in your server only.  
- `/globalpurgeuser` → across all servers Valknut is in.

### `/role <add/remove>`
- **Permissions:** Moderator/Staff with `Manage Roles`
- **Purpose:** Allows moderators to manually assign or remove roles from members within the guild.

#### Options:
- **`action`** → Choose whether to `add` or `remove` a role.
- **`user`** → The member whose roles you want to modify.
- **`role`** → The specific role to add or remove.

#### Details:
- Checks role hierarchy:
  - You cannot modify roles equal to or higher than your highest role.
- Responds with an embed confirming the action (green for added, red for removed).

#### Example Usage:
- ✅ `/role action:add user:@User role:@Verified`
- ✅ `/role action:remove user:@User role:@Muted`

### `/ban <USER> <REASON>` / `/unban <USER> <REASON>` / `/kick <USER> <REASON>`
- **Permissions:** Moderator/Staff with `Ban Members`  
- Locally bans, un-bans, or kicks a user from your server.  
- Requires tagging the user and providing a reason.

### `/tempban <USER> <DURATION> <REASON>`
- **Permissions:** Moderator/Staff with `Ban Members`  
- Locally & Temporarily bans a user from your server for the desired amount of time.  
- Requires tagging the user and providing a reason.
- `duration` – How long the user is banned for (e.g., 30s, 10m, 1h, 1d).

### `/modcomment <VIEW/ADD/DELETE/EDIT> <USER>`
- **Permissions:** Moderator/Staff with `Ban Members`  
- Manages global notes for users.  
  - `VIEW` → View comments on a user  
  - `ADD` → Add a comment  
  - `DELETE` → Delete a comment  
  - `EDIT` → Edit an existing comment

### `/globalban <USER> <REASON> <True/False>` / `/globalunban <USER> <REASON> <True/False>`
- **Permissions:** Moderator/Staff with `Ban Members`  
- Bans or un-bans a user globally across all servers Valknut is in.  
- **True** → Only affects 18+ registered servers (e.g., minors in 18+ servers).  
- **False** → Affects all servers Valknut is in, no filtering.  
- Requires tagging the user and providing a reason.

### `/raidmode <True/False> <DURATION>`
- **Permissions:** Moderator/Staff with `Kick Members`  
- Enables Raid-Mode on your server where everyone who attempts to join while active will be kicked.  
- Requires tagging the user and providing a reason.
- `duration` – How long raid mode stays active (e.g., 30s, 10m, 1h, 1d).

### `/twitch <ADD/REMOVE/EDIT/LIST> <USERNAME> <CHANNEL> <MESSAGE>`
- **Permissions:** Moderator/Staff with `Manage Messages`  
- Live Notifications from Twitch users in Channels with Custom Messages.  
  - `ADD` → Add a new Twitch stream to get notificaions/embed for.
  - `REMOVE` → Remove a Twitch stream you are already getting notified for.
  - `EDIT` → Edit the notification settings of a channel.
  - `LIST` → List all followed channels and their settings.

### `/youtube <ADD/REMOVE/EDIT/LIST> <USERNAME> <CHANNEL> <MESSAGE> <TYPE>`
- **Permissions:** Moderator/Staff with `Manage Messages`  
- Live Notifications from Twitch users in Channels with Custom Messages.  
  - `ADD` → Add a new YouTube Channel to get notificaions/embed for.
  - `REMOVE` → Remove a YouTube Channel you are already getting notified for.
  - `EDIT` → Edit the notification settings of a channel.
  - `LIST` → List all followed channels and their settings.

- Flags
  - `USERNAME` → The Twitch Username of the channel you want.
  - `CHANNEL` → The Channel you want the notifications being posted to.
  - `MESSAGE` → Custom message to go with the embed (Supports Tagging and Server Emotes).
 
### `/reactionrole <CREATE/EDIT/LIST/ADDROLE/REMOVEROLE> <MESSAGEID> <EMOJI> <ROLE> <DISPLAYNAME> <MAXROLES> <REQUIREDROLE> <EXCLUDEDROLE>`
- **Permissions:** Moderator/Staff with `Manage Messages`  
- Allows you to create and manage roles that users can assign by reacting to a message dynamically.



#### Subcommands & Parameters:

- **`CREATE`** → Create a new reaction role message.
  - `content` → The message content that users will see.  
  - `maxroles` *(optional)* → Maximum number of roles a user can select.  
  - `requiredrole` *(optional)* → Role a user must have to react.  
  - `excludedrole` *(optional)* → Role a user cannot have to react.

- **`REMOVE`** → Create a new reaction role message.
  - `messageid` → The ID of the message to remove. 

- **`EDIT`** → Edit an existing reaction role message.
  - `messageid` → The ID of the message to edit.  
  - `content` *(optional)* → New message content.  
  - `maxroles` *(optional)* → Update maximum roles a user can select.  
  - `requiredrole` *(optional)* → Update required role for reacting.  
  - `excludedrole` *(optional)* → Update excluded role for reacting.

- **`LIST`** → List all roles for a reaction role message.
  - `messageid` → The ID of the reaction role message.  
  - **Output:** Displays all assigned emojis, roles, and display names.

- **`ADDROLE`** → Add a role to an existing reaction role message.
  - `messageid` → The ID of the message to add the role to.  
  - `role` → The role to assign.  
  - `emoji` → The emoji to react with for this role.  
  - `displayname` *(optional)* → Custom display name for the role.

- **`REMOVEROLE`** → Remove a role from a reaction role message.
  - `messageid` → The ID of the message to remove the role from.  
  - `emoji` → The emoji corresponding to the role to remove.

#### Notes:

- **MessageID:** The ID of the message in the channel containing the reaction roles.  
- **Emoji:** The emoji that users will react with to receive a role.  
- **Role:** The Discord role associated with the reaction.  
- **DisplayName:** Optional custom display name shown in the message.  
- **MaxRoles:** Limits how many roles a user can select from this reaction role message.  
- **RequiredRole:** Users must have this role to react.  
- **ExcludedRole:** Users with this role cannot react.  

> ⚠️ **Important:** Reactions are automatically updated when roles are added/removed. The bot will only react with missing emojis and remove reactions for removed roles dynamically.

### `/poll <title> <role> <option1> <option2> <option3> <option4> <option5> <option6> <option7> <option8> <option9> <option10>`
- **Permissions:** Moderator/Staff with `Manage Messages`  
- Create polls and Optionally mention users for notifications and allow to react to the options.  
  - `TITLE` → Add a title to the poll. EG: What are we playing tonight?
  - `ROLE` → Add a Role to get pinged when the poll is published.
  - `OPTION1-OPTION10` → Input the different options/things for users to vote for on the poll.
 
### `/mute <USER> <REASON> <DURATION>` / `/unmute <USER> <REASON>`
- **Permissions:** Moderator/Staff with `Time Out Members/Moderate Members`  
- Allows you to mute/timeout OR un-mute/un-timeout users indefinitely or for a set amount of time IF SET. 
- `USER` → Target of who you want to mute/timeout.
- `REASON` → Why you're muting/timing this user out.
- `DURATION` (OPTIONAL) → How long you want to mute/timeout this user, IF left blank it will be indefinite.
---



## 📥 Usage Example

```bash
# Remove a user from all mutual servers with the reason "GFX/Scam Artist"
/globalban @troublesomeUser GFX/Scam Artist
