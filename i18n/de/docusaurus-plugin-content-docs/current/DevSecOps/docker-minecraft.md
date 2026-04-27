---
title: Docker Minecraft
sidebar_position: 6
---

# Docker Minecraft: Containerisierter Minecraft-Server

**Docker Minecraft** betreibt einen Minecraft Java Edition Server in einem Docker-Container. Die Konfiguration erfolgt vollständig über Umgebungsvariablen, die Spielwelt wird persistent in einem Docker-Volume gespeichert, und der Server startet reproduzierbar mit einem einzigen Docker Compose Befehl.

## Tech Stack

`Docker` `Docker Compose` `Minecraft Java Edition`

## Projektstruktur
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
# Repository klonen
git clone git@github.com:EnsslinAdrian/Docker-Minecraft.git minecraft_docker
cd minecraft_docker

# .env Datei erstellen und befüllen
cp .env.template .env

# Server starten
docker compose up -d
```

Verbinden via Minecraft Java Edition: `<YOUR_IP>:8888`

## Konfiguration

Das `entrypoint.sh` generiert `server.properties` beim Containerstart automatisch aus den Umgebungsvariablen, die in `compose.yml` definiert sind.

| Variable | Standard | Beschreibung |
|---|---|---|
| `SERVER_MOTD` | `Docker Minecraft Server!` | Nachricht in der Serverliste |
| `SERVER_DIFFICULTY` | `easy` | Schwierigkeitsgrad |
| `SERVER_GAMEMODE` | `survival` | Standard-Spielmodus |
| `SERVER_MAX_PLAYERS` | `20` | Maximale Spieleranzahl |
| `SERVER_PVP` | `on` | PvP aktivieren oder deaktivieren |

Beispiel aus `compose.yml`:
```yaml
environment:
  - SERVER_MOTD=${SERVER_MOTD}
  - SERVER_DIFFICULTY=${SERVER_DIFFICULTY}
  - SERVER_GAMEMODE=${SERVER_GAMEMODE}
  - SERVER_MAX_PLAYERS=${SERVER_MAX_PLAYERS}
  - SERVER_PVP=${SERVER_PVP}
```

## Persistente Daten

Das World-Verzeichnis wird über ein benanntes Volume in den Container gemountet:

```yaml
volumes:
  - world_db:/app/
```

Das stellt sicher:

- Die Welt überlebt Container-Neustarts und Image-Rebuilds
- Die Serverkonfiguration bleibt immer erhalten
- Keine Spieldaten gehen beim Update des Images verloren

Die `.dockerignore` schließt `world/` aus, damit der Build-Kontext schlank bleibt.

## Verwendung

```bash
# Server starten
docker compose up -d

# Server stoppen
docker compose down

# Logs live verfolgen
docker logs -f mc-server

# Welt komplett zurücksetzen
rm -r world/
docker compose up --build
```

## Was ich dabei gelernt habe

- **Docker Compose für Nicht-Web-Workloads** — Einen Game-Server containerisieren statt einer typischen Webanwendung
- **entrypoint.sh als Konfigurations-Generator** — `server.properties` beim Start dynamisch aus Umgebungsvariablen erzeugen
- **Named Volumes** — Spieldaten unabhängig vom Container-Lebenszyklus persistieren
- **.dockerignore** — Große Spieldaten aus dem Build-Kontext heraushalten

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Docker-Minecraft)
