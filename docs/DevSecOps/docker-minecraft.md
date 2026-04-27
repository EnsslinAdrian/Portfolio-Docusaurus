---
title: Docker Minecraft
sidebar_position: 6
---

# Docker Minecraft: Containerized Minecraft Server

**Docker Minecraft** runs a Minecraft Java Edition server inside a Docker container. Configuration happens entirely via environment variables, the world is stored persistently in a Docker volume, and the server starts reproducibly with a single Docker Compose command.

## Tech Stack

`Docker` `Docker Compose` `Minecraft Java Edition`

## Project Structure
```
Docker-Minecraft/
├── ⚙️ Dockerfile
├── ⚙️ compose.yml
├── ⚙️ entrypoint.sh
├── 📄 server.jar
├── 📄 eula.txt
└── ℹ️ README.md
```

## Quickstart

```bash
# Clone repository
git clone git@github.com:EnsslinAdrian/Docker-Minecraft.git minecraft_docker
cd minecraft_docker

# Create .env file and fill in the variables
cp .env.template .env

# Start server
docker compose up -d
```

Connect via Minecraft Java Edition: `<YOUR_IP>:8888`

## Configuration

The `entrypoint.sh` generates `server.properties` automatically at container startup from the environment variables defined in `compose.yml`.

| Variable | Default | Description |
|---|---|---|
| `SERVER_MOTD` | `Docker Minecraft Server!` | Message shown in the server list |
| `SERVER_DIFFICULTY` | `easy` | Difficulty level |
| `SERVER_GAMEMODE` | `survival` | Default game mode |
| `SERVER_MAX_PLAYERS` | `20` | Maximum number of players |
| `SERVER_PVP` | `on` | Enables or disables PvP |

Example from `compose.yml`:
```yaml
environment:
  - SERVER_MOTD=${SERVER_MOTD}
  - SERVER_DIFFICULTY=${SERVER_DIFFICULTY}
  - SERVER_GAMEMODE=${SERVER_GAMEMODE}
  - SERVER_MAX_PLAYERS=${SERVER_MAX_PLAYERS}
  - SERVER_PVP=${SERVER_PVP}
```

## Persistent Data

The world directory is mounted into the container via a named volume:

```yaml
volumes:
  - world_db:/app/
```

This ensures:

- The world survives container restarts and image rebuilds
- Server configuration is always preserved
- No game data is lost when updating the image

The `.dockerignore` excludes `world/` so the build context stays clean.

## Usage

```bash
# Start server
docker compose up -d

# Stop server
docker compose down

# Follow logs live
docker logs -f mc-server

# Completely reset the world
rm -r world/
docker compose up --build
```

## What I Learned

- **Docker Compose for non-web workloads** — Containerizing a game server instead of a typical web app
- **entrypoint.sh as config generator** — Dynamically writing `server.properties` from environment variables at startup
- **Named volumes** — Persisting world data independently from the container lifecycle
- **.dockerignore** — Keeping large game data out of the build context

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Docker-Minecraft)
