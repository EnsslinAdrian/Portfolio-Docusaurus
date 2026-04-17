---
title: Videoflix
sidebar_label: Videoflix
sidebar_position: 1
---

# Videoflix — Containerized Streaming App

**Videoflix** ist ein vollständig containerisierter Netflix-Clone — Angular-Frontend,
Django-Backend, HLS-Videostreaming, Background-Worker für Videoverarbeitung und
automatisiertes Deployment via GitHub Actions. Alle Services laufen isoliert und
reproduzierbar über Docker Compose.

## Tech Stack

`Angular` `Django` `PostgreSQL` `Redis` `RQ Worker` `FFmpeg` `HLS` `Docker` `Nginx` `GitHub Actions` `GHCR`

## Projektstruktur
```
Videoflix/
├── 📁 .github/
│   └── 📁 workflows/
│       └── ❕ deployment.yml          # CI/CD Pipeline
├── 📁 videoflix_backend/
│   ├── 📁 auth_app/                   # Authentifizierung
│   ├── 📁 movie_app/                  # Film-Management & API
│   ├── 📁 videoflix_config/           # Django Konfiguration
│   ├── ⚙️ backend.entrypoint.sh       # Startup-Skript
│   ├── ⚙️ Dockerfile                  # Two-Stage Build
│   └── 📄 requirements.txt
├── 📁 videoflix_frontend/
│   ├── 📁 nginx/
│   │   └── ⚙️ default.conf            # SPA Routing + Security
│   ├── 📁 src/                        # Angular App
│   └── ⚙️ Dockerfile                  # Multi-Stage Build
├── ⚙️ docker-compose.yml              # Orchestrierung aller Services
├── ⚙️ .env.template
└── 📄 README.md
```

## Quickstart
```bash
# Repository klonen
git clone git@github.com:EnsslinAdrian/Videoflix.git videoflix
cd videoflix

# .env erstellen und befüllen
cp .env.template .env

# Django Secret Key generieren
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

# Images bauen und starten
docker compose build
docker compose up -d
```

## Architektur

Alle Services teilen dasselbe interne Docker-Netzwerk:

| Service | Beschreibung |
|---|---|
| `frontend` | Angular App, via Nginx ausgeliefert, API_URL wird zur Build-Zeit injiziert |
| `backend` | Django REST API via Gunicorn auf Port 8000 |
| `db` | PostgreSQL 16 mit Healthcheck |
| `redis` | Redis 7 Cache mit Passwortschutz |
| `rq-worker` | Background Worker für HLS-Videoverarbeitung via FFmpeg |

---

### Backend — Two-Stage Dockerfile
```
Builder Stage   # Python Dependencies installieren (gcc, libpq-dev)
      ↓
Runtime Stage   # Packages in schlankes Python 3.12 Slim Image kopieren
      ↓
FFmpeg          # Für serverseitige HLS-Konvertierung
      ↓
Entrypoint      # backend.entrypoint.sh startet die App
```

**`backend.entrypoint.sh` übernimmt beim Start:**
- Migrationen ausführen
- Static Files sammeln
- Superuser aus `.env` anlegen
- Django via Gunicorn starten

---

### Frontend — Multi-Stage Dockerfile
```
Build Stage     # Angular App mit Node.js 22 Alpine kompilieren
      ↓
API_URL         # Backend URL zur Build-Zeit via ARG/ENV injiziert
      ↓
Runtime Stage   # Kompiliertes Output in minimales Nginx Alpine Image
      ↓
Nginx           # SPA mit try_files Fallback für Angular Routing
```

**Nginx Konfiguration:**
- Port 80
- `try_files` → Fallback auf `index.html` für Client-Side Routing
- `server_tokens off` → Nginx-Version versteckt

---

### CI/CD — GitHub Actions
```
Push auf main
      ↓
Repository auschecken
      ↓
GHCR Login (GITHUB_TOKEN)
      ↓
Frontend Image bauen + pushen (API_URL injiziert)
      ↓
Backend Image bauen + pushen (latest + commit SHA)
      ↓
.env per SSH auf VM erstellen & absichern
      ↓
docker-compose.yml per SCP übertragen
      ↓
Images pullen + Container neu starten
      ↓
Ungenutzte Images aufräumen
```

---

## Nützliche Docker-Befehle
```bash
docker compose up -d                    # Starten
docker compose down                     # Stoppen
docker compose down -v                  # Stoppen + Volumes löschen
docker compose build --no-cache         # Images neu bauen
docker compose restart                  # Neu starten

docker ps                               # Laufende Container
docker compose logs -f                  # Alle Logs live
docker compose logs -f backend          # Nur Backend Logs
docker compose logs -f rq-worker        # Nur Worker Logs
docker compose exec <service> sh        # In Container einsteigen

# Redis Cache leeren
docker compose exec redis redis-cli -a <REDIS_PASSWORD> FLUSHDB
```

## Was ich dabei gelernt habe

- **HLS Streaming** — Videos serverseitig mit FFmpeg in HLS-Segmente konvertieren
  und über einen Background Worker asynchron verarbeiten
- **RQ Worker** — Langläufige Tasks (Videoverarbeitung) aus dem Request-Cycle
  auslagern damit die API responsiv bleibt
- **Two-Stage Docker Builds** — Build-Dependencies vom Runtime-Image trennen
  für schlanke, sichere Produktions-Images
- **Redis als Cache** — Passwortgeschützter Cache für Performance-kritische Daten
- **PostgreSQL Healthcheck** — Services erst starten wenn die Datenbank wirklich
  bereit ist, nicht nur gestartet

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Videoflix)
- 🌐 [Live Website](https://videoflix.adrianensslin.de/)