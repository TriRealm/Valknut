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

| Command                 | Description                                                                 | Rank to Use            
|-------------------------|-----------------------------------------------------------------------------|-----------------------------
| `/gonefromall <user>`   | Remove the target user from all mutual servers (ban evasion control).       | Moderator <br>(Ban.Members Permission Needed)
| `/config`               | Configure trusted roles, 18+ filtering, and moderation protections.         | Server Owner <br>(Administrator Permission Needed)
| `/modlogs`              | View actions taken by the bot in a server for transparency and audit.       |

> *Note: Only trusted moderators or creators can use critical commands.*

---

## 📥 Usage Example

```bash
# Remove a user from all mutual servers
/gonefromall @troublesomeUser

# Configure 18+ filtering
/config 18plus true

# View moderation logs
/modlogs
