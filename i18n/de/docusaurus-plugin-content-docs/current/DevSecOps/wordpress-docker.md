---
title: WordPress Multi-Container
sidebar_position: 2
---

# WordPress Multi-Container Setup

Ein Docker Compose Projekt das WordPress und eine MySQL-Datenbank als zwei isolierte
Container im selben Netzwerk betreibt. Das Projekt diente als praktische Übung
in Container-Orchestrierung und dem Zusammenspiel mehrerer Services über Docker Compose.

## Tech Stack

`Docker` `Docker Compose` `WordPress` `MySQL 8.0` `Apache`

## Projektstruktur
```
Wordpress-Multi-Container-Setup/
├── ⚙️ docker-compose.yml   # Orchestrierung beider Services
├── ⚙️ .env                 # Umgebungsvariablen (nicht im Repo)
├── ⚙️ .env.template        # Vorlage für .env
└── 📄 .gitignore
```

## Quickstart
```bash
# Repository klonen
git clone git@github.com:EnsslinAdrian/Wordpress-Multi-Container-Setup.git
cd Wordpress-Multi-Container-Setup

# .env Datei erstellen und befüllen
cp .env.template .env

# Container starten
docker compose up -d
```

WordPress erreichbar unter: `<YOUR_IP>:8000`

## Architektur

Beide Services laufen im selben Docker-Netzwerk `wp-net` und können sich
gegenseitig über ihren Service-Namen erreichen.

### WordPress Service
```yaml
wordpress:
  image: wordpress:6-php8.4-apache
  restart: on-failure:5
  depends_on:
    - db
  ports:
    - "8000:80"
  networks:
    - wp-net
  environment:
    WORDPRESS_DB_HOST: ${WORDPRESS_DB_HOST}
    WORDPRESS_DB_USER: ${WORDPRESS_DB_USER}
    WORDPRESS_DB_PASSWORD: ${WORDPRESS_DB_PASSWORD}
    WORDPRESS_DB_NAME: ${WORDPRESS_DB_NAME}
  volumes:
    - wordpress_data:/var/www/html
```

| Konfiguration | Beschreibung |
|---|---|
| `depends_on` | Datenbank startet vor WordPress |
| `restart` | Automatischer Neustart bei Fehler, max. 5× |
| `ports` | Host-Port 8000 → Container-Port 80 |
| `volumes` | WordPress-Daten persistent unter `/var/www/html` |

### MySQL Service
```yaml
db:
  image: mysql:8.0
  restart: on-failure:5
  networks:
    - wp-net
  environment:
    MYSQL_DATABASE: ${MYSQL_DATABASE}
    MYSQL_USER: ${MYSQL_USER}
    MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    MYSQL_RANDOM_ROOT_PASSWORD: ${MYSQL_RANDOM_ROOT_PASSWORD}
  volumes:
    - db_data:/var/lib/mysql
```

| Konfiguration | Beschreibung |
|---|---|
| `restart` | Automatischer Neustart bei Fehler, max. 5× |
| `volumes` | Datenbankdaten persistent unter `/var/lib/mysql` |
| `MYSQL_RANDOM_ROOT_PASSWORD` | Root-Passwort wird zufällig generiert |

## Nützliche Docker-Befehle
```bash
docker compose up -d          # Starten
docker compose down           # Stoppen
docker compose down -v        # Stoppen + Volumes löschen
docker compose restart        # Neu starten

docker ps                     # Laufende Container anzeigen
docker logs -f <container>    # Logs live verfolgen
```

## Was ich dabei gelernt habe

- **Multi-Container Orchestrierung** — Mehrere Services gemeinsam starten, stoppen und verwalten
- **Docker Networking** — Services über ein gemeinsames Netzwerk verbinden
- **Volumes** — Datenpersistenz außerhalb des Containers sicherstellen
- **Environment Variables** — Sensible Zugangsdaten sauber über `.env` auslagern
- **depends_on** — Startreihenfolge von Services kontrollieren

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Wordpress-Multi-Container-Setup)