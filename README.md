# Valknut 🛡️

![Version](https://img.shields.io/badge/Version-0.0.9-blue)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://github.com/TriRealm/Valknut/blob/main/LICENSE)
![Discord](https://img.shields.io/discord/1383009209196613675?color=7289DA&label=Discord)
[![Kofi](https://img.shields.io/badge/Kofi-Support_the_Dev-8755D6)](https://ko-fi.com/trirealm)

**Valknut** is a specialized Discord moderation bot, built to protect communities from ban-evading users and maintain safe spaces across mutual servers.

Originally designed for a group of closely-knit communities, Valknut ensures problematic users cannot disrupt your servers.

---

## 🌟 Key Features

- **One Command, Gone From All!**  
  Instantly remove a user from all mutual servers to prevent ban evasion.

- **Trusted Distribution**  
  Shared only with a controlled group of trusted creators to maintain security and integrity.

- **18+ Filtering**  
  Configurable filters to handle adult content or restrict actions to 18+ communities.

- **Owner & Moderator Protections**  
  Built-in safeguards prevent misuse, including attempts to ban server owners or moderators.

- **Community Safety**  
  Designed to keep servers safe while ensuring fair control over moderation actions.

---

## ⚙️ /config Command Overview

| Subcommand / Option | Permissions | Description |
|--------------------|------------|-------------|
| `/applyforglobal` | **Server Owner** <br> Permission:<br> `Administrator` | Apply to get your server enabled for global commands (Global Ban/UnBan & Purge). |
| `/catchupbans <all/global/18plus>` | **Server Owner** <br> Permission:<br> `Administrator` | Applies all Global Bans from the bots prior logs with the desired filter they set. |
| `/config raidlogs <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the channel where Raid Mode logs will be sent. |
| `/config modlogs <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the channel where Moderation logs will be sent. |
| `/config systemlogs <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the channel where System logs will be sent. (Maintance, Downtime, Changelogs and Documentation Update Notifications) |
| `/config antispam` | **Server Owner** <br> Permission:<br> `Administrator` | Configure the anti-spam system. |
| `/config antiraid` | **Server Owner** <br> Permission:<br> `Administrator` | Configure the automatic anti-raid system. |
| `/config autokick <role> <time> <reason>` | **Server Owner** <br> Permission:<br> `Administrator` | System that auto-kicks users with the desired role after the set time! Intergrated with other bots that have a verification process but lock the auto-kick behind a paywall. (eg. Melpo Verifier) |
| `/config 18plus_server <enabled>` | **Server Owner** <br> Permission:<br> `Administrator` | Enable or disable 18+ server mode for this guild. |
| `/config invite <url>` | **Server Owner** <br> Permission:<br> `Administrator` | Set the permanent Discord invite link used in tempban messages. |
| `/config globalcommands <enabled>` | **Server Owner** <br> Permission:<br> `Administrator` | Enable or disable participation in the global command system. |
| `/config roleprotect add <role>` | **Server Owner** <br> Permission:<br> `Administrator` | Add a role to the protected roles list. |
| `/config roleprotect delete <role>` | **Server Owner** <br> Permission:<br> `Administrator` | Remove a role from the protected roles list. |
| `/config roleprotect list` | **Server Owner** <br> Permission:<br> `Administrator` | List all protected roles in this guild. |

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
- **Usage:** `/config modlogs #systemlogs`  

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
---

## ⚔️ Valknut General/Moderation Commands Overview

> *Note: Only trusted moderators or creators can use critical commands.*

| Command                                     | Permissions / Role | Description |
|---------------------------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/botinfo`                                  | **Everyone**                               | Displays the credits of who made and developed the bot. |
| `/help`                                     | **Moderator/Staff** <br> Permission:<br> `ban Members` | Links to the README to help with commands and initial setup. |
| `/guildscan <LIMIT>`                        | **Moderator/Staff** <br> Permission:<br> `Manage Messages` | Scans messages across every channel in your server up to the specified limit (max 100,000). <br>Stores only `User ID`, `Channel ID`, `Message ID`, and `Guild ID`. <br>No Message Content is ever Stored. |
| `/purgeuser <USER>`                         | **Moderator/Staff** <br> Permission:<br> `Manage Messages` | Deletes every message logged by Valknut from the target user **in your server**. |
| `/globalpurgeuser <USER>`                   | **Moderator/Staff** <br> Permission:<br> `Manage Messages` | Deletes every message logged by Valknut from the target user **across all servers**. |
| `/ban <USER> <REASON>`                      | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Locally bans a user in your server. Requires tagging the user and providing a reason. |
| `/tempban <USER> <DURATION> <REASON>`                      | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Locally & Temporarily bans a user in your server. Requires tagging the user and providing a reason. |
| `/unban <USER> <REASON>`                    | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Locally un-bans a user in your server. Requires tagging the user and providing a reason. |
| `/kick <USER> <REASON>`                     | **Moderator/Staff** <br> Permission:<br> `Kick Members`     | Locally kicks a user from your server. Requires tagging the user and providing a reason. |
| `/modcomment <VIEW/ADD/DELETE/EDIT> <USER>` | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Manages global notes on a user: VIEW existing comments, ADD a comment, DELETE a comment, EDIT an existing comment. |
| `/globalban <USER> <REASON> <True/False>`   | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Globally bans a user in all servers Valknut is in. True = bans only in 18+ registered servers; False = bans in all servers. |
| `/globalunban <USER> <REASON> <True/False>` | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Globally un-bans a user in all servers Valknut is in. True = un-bans in 18+ registered servers only; False = un-bans in all servers. |
| `/raidmode <True/False> <DURATION>` | **Moderator/Staff** <br> Permission:<br> `Kick Members`     | Enables Raid-Mode on your server where everyone who attempts to join while active will be kicked. <br>Will Disable automatically after time has elapsed or with a `false` value in the command. |
| `/twitch <USERNAME> <CHANNEL> <MESSAGE>`   | **Moderator/Staff** <br> Permission:<br> `Manage Guild`     | Allows you to get livestream notifications from the desired user in a set channel with a custom message. |
| `/reactionrole <create/edit/list/addrole/removerole> <messageid> <emoji> <role> <displayname> <maxroles> <requiredrole> <excludedrole>`   | **Moderator/Staff** <br> Permission:<br> `Manage Guild`     | Allows you to create and manage roles that users can assign by reacting to a message dynamically. |

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
- **Permissions:** Moderator/Staff with `Manage Guild`  
- Live Notifications from Twitch users in Channels with Custom Messages.  
  - `ADD` → Add a new Twitch stream to get notificaions/embed for.
  - `REMOVE` → Remove a Twitch stream you are already getting notified for.
  - `EDIT` → Edit the notification settings of a channel.
  - `LIST` → List all followed channels and their settings.

- Flags
  - `USERNAME` → The Twitch Username of the channel you want.
  - `CHANNEL` → The Channel you want the notifications being posted to.
  - `MESSAGE` → Custom message to go with the embed (Supports Tagging and Server Emotes).
 
### `/reactionrole <CREATE/EDIT/LIST/ADDROLE/REMOVEROLE> <MESSAGEID> <EMOJI> <ROLE> <DISPLAYNAME> <MAXROLES> <REQUIREDROLE> <EXCLUDEDROLE>`
- **Permissions:** Moderator/Staff with `Manage Guild`  
- Allows you to create and manage roles that users can assign by reacting to a message dynamically.



#### Subcommands & Parameters:

- **`CREATE`** → Create a new reaction role message.
  - `content` → The message content that users will see.  
  - `maxroles` *(optional)* → Maximum number of roles a user can select.  
  - `requiredrole` *(optional)* → Role a user must have to react.  
  - `excludedrole` *(optional)* → Role a user cannot have to react.

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

---



## 📥 Usage Example

```bash
# Remove a user from all mutual servers with the reason "GFX/Scam Artist"
/globalban @troublesomeUser GFX/Scam Artist
