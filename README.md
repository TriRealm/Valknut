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

## ⚡ Commands Overview

## ⚔️ Valknut Commands Overview

> *Note: Only trusted moderators or creators can use critical commands.*

| Command                                     | Permissions / Role | Description |
|---------------------------------------------|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/help`                                     | Everyone                               | Links to the README to help with commands and initial setup. |
| `/botinfo`                                  | Everyone                               | Displays the credits of who made and developed the bot. |
| `/register18plus`                           | Server Owner <br> Permission: `Administrator`      | Flags the server as an 18+ community (helps with ban filtering). |
| `/unregister18plus`                         | Server Owner <br> Permission: `Administrator`    | Removes the server from the 18+ communities list. |
| `/addprotected <TAG ROLE>`                  | Server Owner <br> Permission: `Administrator`      | Adds the tagged role to a protected list so members with that role cannot be banned (staff & owner only). |
| `/removeprotected <TAG ROLE>`               | Server Owner <br> Permission: `Administrator`      | Removes the tagged role from the protection list. |
| `/guildscan <LIMIT>`                        | Moderator/Staff <br> Permission: `Manage Messages` | Scans messages across every channel in your server up to the specified limit (max 100,000). Stores only User ID, Channel ID, Message ID, and Guild ID. |
| `/purgeuser <USER>`                         | Moderator/Staff <br> Permission: `Manage Messages` | Deletes every message logged by Valknut from the target user **in your server**. |
| `/globalpurgeuser <USER>`                   | Moderator/Staff <br> Permission: `Manage Messages` | Deletes every message logged by Valknut from the target user **across all servers**. |
| `/ban <USER> <REASON>`                      | Moderator/Staff <br> Permission: `Ban Members`     | Locally bans a user in your server. Requires tagging the user and providing a reason. |
| `/unban <USER> <REASON>`                    | Moderator/Staff <br> Permission: `Ban Members`     | Locally un-bans a user in your server. Requires tagging the user and providing a reason. |
| `/kick <USER> <REASON>`                     | Moderator/Staff <br> Permission: `Ban Members`     | Locally kicks a user from your server. Requires tagging the user and providing a reason. |
| `/modcomment <VIEW/ADD/DELETE/EDIT> <USER>` | Moderator/Staff <br> Permission: `Ban Members`     | Manages global notes on a user: VIEW existing comments, ADD a comment, DELETE a comment, EDIT an existing comment. |
| `/globalban <USER> <REASON> <True/False>`   | Moderator/Staff <br> Permission: `Ban Members`     | Globally bans a user in all servers Valknut is in. True = bans only in 18+ registered servers; False = bans in all servers. |
| `/globalunban <USER> <REASON> <True/False>` | Moderator/Staff <br> Permission: `Ban Members`     | Globally un-bans a user in all servers Valknut is in. True = un-bans in 18+ registered servers only; False = un-bans in all servers. |

---

## 📖 Command Details

### `/help`
Provides a link to this README so users can get set up and see all commands.

### `/botinfo`
Displays bot credits and developer information.

### `/register18plus` / `/unregister18plus`
- **Permissions:** Server Owner/Admin only  
- Marks or removes the server as an 18+ community, which helps with filtering users during global bans or unbans.

### `/addprotected <TAG ROLE>` / `/removeprotected <TAG ROLE>`
- **Permissions:** Server Owner/Admin only  
- Adds or removes roles to a protected list. Protected roles cannot be banned by Valknut (intended for staff and owner roles).

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

---

## 📥 Usage Example

```bash
# Remove a user from all mutual servers
/gonefromall @troublesomeUser

# Configure 18+ filtering
/config 18plus true

# View moderation logs
/modlogs
