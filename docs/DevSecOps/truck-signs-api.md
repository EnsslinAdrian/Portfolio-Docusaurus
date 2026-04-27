---
title: Truck Signs API
sidebar_position: 5
---

# Truck Signs API: Django REST Backend with Docker

**Truck Signs API** is a Django REST Framework backend for managing truck sign designs. Built as part of a DevSecOps training, the focus is on running the application and its PostgreSQL database in separate containers connected via a Docker network — without Docker Compose — and configuring everything through environment variables.

## Tech Stack

`Django` `Django REST Framework` `Python` `Docker` `PostgreSQL` `Gunicorn`

## Project Structure
```
truck_signs_api/
├── 📁 backend/
│   ├── 📄 admin.py
│   ├── 📄 models.py
│   ├── 📄 serializers.py
│   ├── 📄 views.py
│   └── 📄 urls.py
├── 📁 templates/
│   ├── 📁 admin/
│   │   └── 📄 base_site.html
│   ├── 📄 base.html
│   └── 📄 purchase-made.html
├── 📁 truck_signs_desing/
│   ├── 📁 settings/
│   │   ├── ⚙️ .env
│   │   ├── ⚙️ .env.template
│   │   ├── 📄 base.py
│   │   ├── 📄 dev.py
│   │   ├── 📄 production.py
│   │   └── 📄 test_docker.py
│   ├── 📄 urls.py
│   └── 📄 wsgi.py
├── ⚙️ Dockerfile
├── ⚙️ entrypoint.sh
├── 📄 manage.py
├── 📄 Procfile
└── 📄 requirements.txt
```

## Quickstart

```bash
# Clone repository
git clone git@github.com:EnsslinAdrian/truck_signs_api.git
cd truck_signs_api

# Create .env file
cd truck_signs_designs/settings
cp .env.template .env
```

Generate a Django secret key and paste it into `.env`:
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

```bash
# Create Docker network
docker network create truck_signs

# Start PostgreSQL container
docker run -d \
  --name db \
  --network truck_signs \
  -e POSTGRES_DB=<DB_NAME> \
  -e POSTGRES_USER=<DB_USER> \
  -e POSTGRES_PASSWORD=<DB_PASSWORD> \
  -v db_data:/var/lib/postgresql/data \
  --restart on-failure:5 \
  postgres:15-alpine

# Build backend image
docker build -t truck-signs-backend .

# Run backend container
docker run -d \
  --name backend \
  --network truck_signs \
  --env-file <PATH_TO_ENV_FILE> \
  -p 8020:8000 \
  -v backend_media:/app/media \
  --restart on-failure:5 \
  truck-signs-backend
```

API available at: `http://<YOUR_IP>:8020`  
Django Admin available at: `http://<YOUR_IP>:8020/admin/`

## Environment Variables

Required:

| Variable | Description |
|---|---|
| `SECRET_KEY` | Django secret key |
| `DB_NAME` | PostgreSQL database name |
| `DB_USER` | PostgreSQL user |
| `DB_PASSWORD` | PostgreSQL password |
| `DB_HOST` | Database host (container name on the network) |
| `DB_PORT` | Database port |
| `SUPERUSER_USERNAME` | Admin username |
| `SUPERUSER_EMAIL` | Admin email |
| `SUPERUSER_PASSWORD` | Admin password |

Optional: Stripe, Email, and Cloudinary configuration.

## Architecture

### Two Containers, One Network

Instead of Docker Compose, both containers are connected manually via a shared Docker network:

| Container | Image | Role |
|---|---|---|
| `db` | `postgres:15-alpine` | Persistent PostgreSQL database with volume |
| `backend` | `truck-signs-backend` | Django API served by Gunicorn |

The backend resolves the database by its container name (`db`) as the `DB_HOST` value.

### Automated Startup via entrypoint.sh

On every container start, `entrypoint.sh` runs automatically:

1. Wait for database to become available
2. Run `collectstatic`
3. Run `makemigrations` and `migrate`
4. Create superuser non-interactively
5. Start app with **Gunicorn** (WSGI)

### Split Settings

The settings are split across multiple files for different environments:

| File | Purpose |
|---|---|
| `base.py` | Shared configuration |
| `dev.py` | Local development |
| `production.py` | Production deployment |
| `test_docker.py` | Docker-based tests |

## Docker Commands

```bash
# Stop containers
docker stop backend db

# Remove containers
docker rm backend db

# Remove containers and volumes
docker rm -f backend db
docker volume rm db_data backend_media

# Restart containers
docker restart backend db

# Check running containers
docker ps

# View logs
docker logs <container-name>

# Follow logs live
docker logs -f <container-name>

# Save logs to file
docker logs <container-name> > <container-name>-logs.txt
```

## What I Learned

- **Manual Docker networking** — Connecting containers via a shared network without Docker Compose
- **PostgreSQL in Docker** — Running a database container with persistent volumes
- **Split Django settings** — Separate config files for dev, production, and testing
- **entrypoint.sh automation** — Handling migrations, static files, and superuser creation on startup
- **Django REST Framework** — Building a REST API with serializers, views, and URL routing
- **Gunicorn** — Running Django behind a production-grade WSGI server

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/truck_signs_api)
