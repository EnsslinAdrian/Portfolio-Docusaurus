---
title: Conduit Orchestrator
sidebar_position: 3
---

# Conduit Orchestrator — Containerized Fullstack App

**Conduit** ist eine vollständig containerisierte Full-Stack-Anwendung basierend auf
der RealWorld-Spezifikation. Ein Angular-Frontend kommuniziert über eine REST-API
mit einem Django-Backend — beide Services laufen isoliert und reproduzierbar über
Docker und Docker Compose. Das Projekt zeigt wie moderne Applikationen
orchestriert, gebaut und automatisch deployed werden.

## Tech Stack

`Docker` `Docker Compose` `Angular` `Django` `Nginx` `Gunicorn` `GitHub Actions` `GHCR`

## Projektstruktur
```
Conduit-Orchestrator/
├── 📁 .github/
│   └── 📁 workflows/
│       └── ⚙️ docker-image.yml     # CI/CD Pipeline
├── 📁 conduit-backend/
│   ├── 📁 conduit/                 # Django App
│   ├── ⚙️ Dockerfile               # Backend Container
│   ⚙️ entrypoint.sh               # Startup-Skript
│   └── 📄 requirements.txt
├── 📁 conduit-frontend/
│   ├── 📁 nginx/
│   │   └── ⚙️ default.conf         # Nginx Konfiguration
│   ├── 📁 src/                     # Angular App
│   └── ⚙️ Dockerfile               # Multi-Stage Frontend Build
├── ⚙️ docker-compose.yml           # Orchestrierung beider Services
├── ⚙️ .env.template                # Umgebungsvariablen Vorlage
└── 📄 .gitignore
```

## Quickstart
```bash
# Repository klonen
git clone git@github.com:EnsslinAdrian/Conduit-Orchestrator.git conduit-orchestrator
cd conduit-orchestrator

# .env Datei erstellen und befüllen
cp .env.template .env

# Django Secret Key generieren und in .env eintragen
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

# Container bauen und starten
docker compose build
docker compose up -d
```

App erreichbar unter: `<YOUR_IP>:8000`

## Architektur

### Docker Compose — der Orchestrator

Die `docker-compose.yml` verbindet beide Services im selben Docker-Netzwerk:

| Konfiguration | Beschreibung |
|---|---|
| `depends_on` | Backend startet vor dem Frontend |
| `restart` | Container startet bis zu 5× automatisch neu |
| `env_file` | Lädt Variablen aus `.env` |
| `volumes` | Persistiert Datenbank und Mediendateien außerhalb des Containers |
| `ports` | Port-Mapping `<host>:<container>` |

### Backend — Django in einem Container

Das `entrypoint.sh` übernimmt den gesamten Startup-Prozess:

1. Verzeichnisse für Datenbank und Mediendateien anlegen
2. Django-Migrationen ausführen
3. Static Files sammeln
4. Superuser anlegen oder aktualisieren
5. App mit **Gunicorn** (WSGI) starten

### Frontend — Multi-Stage Docker Build

Das Frontend-Image wird in zwei Stufen gebaut:

| Stage | Aufgabe |
|---|---|
| **Build Stage** | Angular-App mit Node.js kompilieren, Backend-URL per Build-Argument injizieren |
| **Runtime Stage** | Kompiliertes Frontend über minimales **Nginx**-Image ausliefern |

Node.js und alle Build-Tools landen nicht im finalen Image — das Ergebnis ist ein
schlankes, produktionsreifes Container-Image.

### CI/CD — GitHub Actions

Die Pipeline automatisiert den gesamten Build- und Deploy-Prozess:
```
Code Push
    ↓
Repository auschecken
    ↓
GitHub Container Registry (GHCR) einloggen
    ↓
Backend + Frontend Images bauen (Docker Buildx)
    ↓
Images pushen (latest + commit SHA als Tag)
    ↓
.env per SSH auf dem Ziel-Server erstellen
    ↓
docker-compose.yml auf Server übertragen
    ↓
Container aktualisieren (pull + recreate)
    ↓
Ungenutzte Images aufräumen
```

## Nützliche Docker-Befehle
```bash
docker compose up -d          # Starten
docker compose down           # Stoppen
docker compose down -v        # Stoppen + Volumes löschen
docker compose restart        # Neu starten

docker ps                     # Laufende Container anzeigen
docker logs <container>       # Logs anzeigen
docker logs -f <container>    # Logs live verfolgen
docker logs <container> > output.txt  # Logs in Datei speichern
```

## Was ich dabei gelernt habe

Conduit war mein erster Schritt in echte Container-Orchestrierung und CI/CD-Automatisierung:

- **Docker Compose** — Mehrere Services koordinieren, Abhängigkeiten und Netzwerke definieren
- **Multi-Stage Builds** — Schlanke Produktions-Images durch Trennung von Build- und Runtime
- **GitHub Actions** — Vollautomatische Pipeline von Push bis Deployment auf dem Server
- **Nginx als Reverse Proxy** — Angular-App produktionsreif ausliefern
- **Gunicorn** — Django hinter einem echten WSGI-Server betreiben
- **Secrets & Env-Management** — Sensible Konfiguration sicher über `.env` und GitHub Secrets verwalten

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Conduit-Orchestrator)