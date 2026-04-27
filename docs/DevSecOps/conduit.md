---
title: Conduit Orchestrator
sidebar_position: 3
---

# Conduit Orchestrator — Containerized Fullstack App

**Conduit** is a fully containerized full-stack application based on the
RealWorld specification. An Angular frontend communicates via a REST API
with a Django backend — both services run isolated and reproducibly via
Docker and Docker Compose. The project demonstrates how modern applications
are orchestrated, built and automatically deployed.

## Tech Stack

`Docker` `Docker Compose` `Angular` `Django` `Nginx` `Gunicorn` `GitHub Actions` `GHCR`

## Project Structure
```
Conduit-Orchestrator/
├── 📁 .github/
│   └── 📁 workflows/
│       └── ⚙️ docker-image.yml     # CI/CD Pipeline
├── 📁 conduit-backend/
│   ├── 📁 conduit/                 # Django App
│   ├── ⚙️ Dockerfile               # Backend container
│   ⚙️ entrypoint.sh               # Startup script
│   └── 📄 requirements.txt
├── 📁 conduit-frontend/
│   ├── 📁 nginx/
│   │   └── ⚙️ default.conf         # Nginx configuration
│   ├── 📁 src/                     # Angular App
│   └── ⚙️ Dockerfile               # Multi-stage frontend build
├── ⚙️ docker-compose.yml           # Orchestration of both services
├── ⚙️ .env.template                # Environment variables template
└── 📄 .gitignore
```

## Quickstart
```bash
# Clone repository
git clone git@github.com:EnsslinAdrian/Conduit-Orchestrator.git conduit-orchestrator
cd conduit-orchestrator

# Create and fill .env file
cp .env.template .env

# Generate Django secret key and add to .env
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

# Build and start containers
docker compose build
docker compose up -d
```

App available at: `<YOUR_IP>:8000`

## Architecture

### Docker Compose — the Orchestrator

The `docker-compose.yml` connects both services in the same Docker network:

| Configuration | Description |
|---|---|
| `depends_on` | Backend starts before frontend |
| `restart` | Container restarts automatically up to 5× |
| `env_file` | Loads variables from `.env` |
| `volumes` | Persists database and media files outside the container |
| `ports` | Port mapping `<host>:<container>` |

### Backend — Django in a Container

The `entrypoint.sh` handles the entire startup process:

1. Create directories for database and media files
2. Run Django migrations
3. Collect static files
4. Create or update superuser
5. Start app with **Gunicorn** (WSGI)

### Frontend — Multi-Stage Docker Build

The frontend image is built in two stages:

| Stage | Task |
|---|---|
| **Build Stage** | Compile Angular app with Node.js, inject backend URL via build argument |
| **Runtime Stage** | Serve compiled frontend via minimal **Nginx** image |

Node.js and all build tools don't end up in the final image — the result is a
lean, production-ready container image.

### CI/CD — GitHub Actions

The pipeline automates the entire build and deploy process:
```
Code push
    ↓
Checkout repository
    ↓
Login to GitHub Container Registry (GHCR)
    ↓
Build backend + frontend images (Docker Buildx)
    ↓
Push images (latest + commit SHA as tag)
    ↓
Create .env on target server via SSH
    ↓
Transfer docker-compose.yml to server
    ↓
Update containers (pull + recreate)
    ↓
Clean up unused images
```

## Useful Docker Commands
```bash
docker compose up -d          # Start
docker compose down           # Stop
docker compose down -v        # Stop + delete volumes
docker compose restart        # Restart

docker ps                     # Show running containers
docker logs <container>       # Show logs
docker logs -f <container>    # Follow logs live
docker logs <container> > output.txt  # Save logs to file
```

## What I Learned

Conduit was my first step into real container orchestration and CI/CD automation:

- **Docker Compose** — Coordinating multiple services, defining dependencies and networks
- **Multi-Stage Builds** — Lean production images by separating build and runtime
- **GitHub Actions** — Fully automated pipeline from push to deployment on the server
- **Nginx as Reverse Proxy** — Serving an Angular app in production
- **Gunicorn** — Running Django behind a proper WSGI server
- **Secrets & Env Management** — Safely handling sensitive configuration via `.env` and GitHub Secrets

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Conduit-Orchestrator)
