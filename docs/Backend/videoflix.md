---
title: Videoflix
sidebar_label: Videoflix
sidebar_position: 1
---

# Videoflix — Containerized Streaming App

**Videoflix** is a fully containerized Netflix clone — Angular frontend,
Django backend, HLS video streaming, background workers for video processing and
automated deployment via GitHub Actions. All services run isolated and
reproducibly via Docker Compose.

## Tech Stack

`Angular` `Django` `PostgreSQL` `Redis` `RQ Worker` `FFmpeg` `HLS` `Docker` `Nginx` `GitHub Actions` `GHCR`

## Project Structure
```
Videoflix/
├── 📁 .github/
│   └── 📁 workflows/
│       └── ❕ deployment.yml          # CI/CD Pipeline
├── 📁 videoflix_backend/
│   ├── 📁 auth_app/                   # Authentication
│   ├── 📁 movie_app/                  # Movie management & API
│   ├── 📁 videoflix_config/           # Django configuration
│   ├── ⚙️ backend.entrypoint.sh       # Startup script
│   ├── ⚙️ Dockerfile                  # Two-stage build
│   └── 📄 requirements.txt
├── 📁 videoflix_frontend/
│   ├── 📁 nginx/
│   │   └── ⚙️ default.conf            # SPA routing + security
│   ├── 📁 src/                        # Angular App
│   └── ⚙️ Dockerfile                  # Multi-stage build
├── ⚙️ docker-compose.yml              # Orchestration of all services
├── ⚙️ .env.template
└── 📄 README.md
```

## Quickstart
```bash
# Clone repository
git clone git@github.com:EnsslinAdrian/Videoflix.git videoflix
cd videoflix

# Create and fill .env
cp .env.template .env

# Generate Django secret key
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

# Build and start images
docker compose build
docker compose up -d
```

## Architecture

All services share the same internal Docker network:

| Service | Description |
|---|---|
| `frontend` | Angular app served via Nginx, API_URL injected at build time |
| `backend` | Django REST API via Gunicorn on port 8000 |
| `db` | PostgreSQL 16 with health check |
| `redis` | Redis 7 cache with password protection |
| `rq-worker` | Background worker for HLS video processing via FFmpeg |

---

### Backend — Two-Stage Dockerfile
```
Builder Stage   # Install Python dependencies (gcc, libpq-dev)
      ↓
Runtime Stage   # Copy packages into a slim Python 3.12 image
      ↓
FFmpeg          # For server-side HLS conversion
      ↓
Entrypoint      # backend.entrypoint.sh starts the app
```

**`backend.entrypoint.sh` handles on startup:**
- Run migrations
- Collect static files
- Create superuser from `.env`
- Start Django via Gunicorn

---

### Frontend — Multi-Stage Dockerfile
```
Build Stage     # Compile Angular app with Node.js 22 Alpine
      ↓
API_URL         # Backend URL injected at build time via ARG/ENV
      ↓
Runtime Stage   # Compiled output into minimal Nginx Alpine image
      ↓
Nginx           # SPA with try_files fallback for Angular routing
```

**Nginx configuration:**
- Port 80
- `try_files` → Fallback to `index.html` for client-side routing
- `server_tokens off` → Nginx version hidden

---

### CI/CD — GitHub Actions
```
Push to main
      ↓
Checkout repository
      ↓
GHCR login (GITHUB_TOKEN)
      ↓
Build & push frontend image (API_URL injected)
      ↓
Build & push backend image (latest + commit SHA)
      ↓
Create & secure .env on VM via SSH
      ↓
Transfer docker-compose.yml via SCP
      ↓
Pull images + restart containers
      ↓
Clean up unused images
```

---

## Useful Docker Commands
```bash
docker compose up -d                    # Start
docker compose down                     # Stop
docker compose down -v                  # Stop + delete volumes
docker compose build --no-cache         # Rebuild images
docker compose restart                  # Restart

docker ps                               # Running containers
docker compose logs -f                  # All logs live
docker compose logs -f backend          # Backend logs only
docker compose logs -f rq-worker        # Worker logs only
docker compose exec <service> sh        # Enter container

# Clear Redis cache
docker compose exec redis redis-cli -a <REDIS_PASSWORD> FLUSHDB
```

## What I Learned

- **HLS Streaming** — Converting videos server-side with FFmpeg into HLS segments
  and processing them asynchronously via a background worker
- **RQ Worker** — Offloading long-running tasks (video processing) out of the request cycle
  to keep the API responsive
- **Two-Stage Docker Builds** — Separating build dependencies from the runtime image
  for lean, secure production images
- **Redis as Cache** — Password-protected cache for performance-critical data
- **PostgreSQL Health Check** — Starting dependent services only when the database is truly
  ready, not just started

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Videoflix)
- 🌐 [Live Website](https://videoflix.adrianensslin.de/)
