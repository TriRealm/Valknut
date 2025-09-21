# Valknut 🛡️

![Discord](https://img.shields.io/discord/1383009209196613675?color=7289DA&label=Discord)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://github.com/TriRealm/Valknut/blob/main/LICENSE)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

**Valknut** is a specialized Discord moderation bot, built to protect communities from ban-evading users and maintain safe spaces across mutual servers. Originally designed for a group of closely-knit communities, Valknut ensures problematic users cannot disrupt your servers.

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
| `/config raidlogs <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the channel where Raid Mode logs will be sent. |
| `/config modlogs <channel>` | **Server Owner** <br> Permission:<br> `Administrator` | Sets the channel where moderation logs will be sent. |
| `/config antispam` | **Server Owner** <br> Permission:<br> `Administrator` | Configure the anti-spam system. |
| `/config antiraid` | **Server Owner** <br> Permission:<br> `Administrator` | Configure the automatic anti-raid system. |
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

### `/config raidlogs <channel>`
- **Purpose:** Set the text channel where Raid Mode logs will be sent.  
- **Usage:** `/config raidlogs #raid-logs`  
- **Note:** The bot only logs raid events to this channel after it’s configured.

### `/config modlogs <channel>`
- **Purpose:** Set the text channel where moderation logs (bans, kicks, role protection changes, etc.) will be sent.  
- **Usage:** `/config modlogs #mod-logs`  

### `/config antispam`
- **Purpose:** Configure the anti-spam system.  
- **Options:**
  - `maxmessages` – Number of messages to store in memory (0–20). 0 disables.  
  - `threshold` – How many similar messages trigger spam detection (0–20).  
  - `similarity` – Similarity threshold between messages (0.1–1.0, default 0.8).  
  - `duration` – How long messages are kept in memory (seconds, 5–300).  
- **Example:** `/config antispam maxmessages 10 threshold 3 similarity 0.85 duration 60`  

### `/config antiraid`
- **Purpose:** Configure automatic anti-raid settings.  
- **Options:**
  - `joins` – Number of joins in the window that triggers raid mode (0 = disable).  
  - `window` – Time window in seconds (5–300).  
  - `duration` – How long raid mode stays active (e.g., 30s, 10m, 1h, 1d).  
- **Example:** `/config antiraid joins 5 window 10 duration 1h`  

### `/config 18plus_server <enabled>`
- **Purpose:** Mark the guild as 18+ for filtering global bans and other 18+ content.  
- **Usage:** `/config 18plus_server true` → Enables 18+ mode  
- **Usage:** `/config 18plus_server false` → Disables 18+ mode  

### `/config invite <url>`
- **Purpose:** Set a permanent Discord invite link used in temporary ban messages.  
- **Requirements:** Must start with `https://discord.gg/`.  
- **Example:** `/config invite https://discord.gg/example`  

### `/config globalcommands <enabled>`
- **Purpose:** Opt the server in or out of the global command system (global bans, global purges, etc.).  
- **Usage:** `/config globalcommands true` → Opt-in  
- **Usage:** `/config globalcommands false` → Opt-out  

### `/config roleprotect add <role>`
- **Purpose:** Add a role to the protected roles list (staff or owner roles).  
- **Usage:** `/config roleprotect add @Moderator`  
- **Notes:** Users with protected roles cannot be banned by Valknut.  

### `/config roleprotect delete <role>`
- **Purpose:** Remove a role from the protected roles list.  
- **Usage:** `/config roleprotect delete @Moderator`  

### `/config roleprotect list`
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
| `/unban <USER> <REASON>`                    | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Locally un-bans a user in your server. Requires tagging the user and providing a reason. |
| `/kick <USER> <REASON>`                     | **Moderator/Staff** <br> Permission:<br> `Kick Members`     | Locally kicks a user from your server. Requires tagging the user and providing a reason. |
| `/modcomment <VIEW/ADD/DELETE/EDIT> <USER>` | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Manages global notes on a user: VIEW existing comments, ADD a comment, DELETE a comment, EDIT an existing comment. |
| `/globalban <USER> <REASON> <True/False>`   | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Globally bans a user in all servers Valknut is in. True = bans only in 18+ registered servers; False = bans in all servers. |
| `/globalunban <USER> <REASON> <True/False>` | **Moderator/Staff** <br> Permission:<br> `Ban Members`     | Globally un-bans a user in all servers Valknut is in. True = un-bans in 18+ registered servers only; False = un-bans in all servers. |

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

## 📥 Usage Example

```bash
# Remove a user from all mutual servers with the reason "GFX/Scam Artist"
/globalban @troublesomeUser GFX/Scam Artist
