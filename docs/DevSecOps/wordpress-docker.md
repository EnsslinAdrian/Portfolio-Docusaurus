---
title: WordPress Multi-Container
sidebar_position: 2
---

# WordPress Multi-Container Setup

A Docker Compose project that runs WordPress and a MySQL database as two isolated
containers in the same network. The project served as a hands-on exercise
in container orchestration and the interaction of multiple services via Docker Compose.

## Tech Stack

`Docker` `Docker Compose` `WordPress` `MySQL 8.0` `Apache`

## Project Structure
```
Wordpress-Multi-Container-Setup/
├── ⚙️ docker-compose.yml   # Orchestration of both services
├── ⚙️ .env                 # Environment variables (not in repo)
├── ⚙️ .env.template        # Template for .env
└── 📄 .gitignore
```

## Quickstart
```bash
# Clone repository
git clone git@github.com:EnsslinAdrian/Wordpress-Multi-Container-Setup.git
cd Wordpress-Multi-Container-Setup

# Create and fill .env file
cp .env.template .env

# Start containers
docker compose up -d
```

WordPress available at: `<YOUR_IP>:8000`

## Architecture

Both services run in the same Docker network `wp-net` and can reach each other
via their service names.

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

| Configuration | Description |
|---|---|
| `depends_on` | Database starts before WordPress |
| `restart` | Automatic restart on failure, max. 5× |
| `ports` | Host port 8000 → container port 80 |
| `volumes` | WordPress data persisted at `/var/www/html` |

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

| Configuration | Description |
|---|---|
| `restart` | Automatic restart on failure, max. 5× |
| `volumes` | Database data persisted at `/var/lib/mysql` |
| `MYSQL_RANDOM_ROOT_PASSWORD` | Root password is randomly generated |

## Useful Docker Commands
```bash
docker compose up -d          # Start
docker compose down           # Stop
docker compose down -v        # Stop + delete volumes
docker compose restart        # Restart

docker ps                     # Show running containers
docker logs -f <container>    # Follow logs live
```

## What I Learned

- **Multi-Container Orchestration** — Starting, stopping and managing multiple services together
- **Docker Networking** — Connecting services via a shared network
- **Volumes** — Ensuring data persistence outside of containers
- **Environment Variables** — Safely externalizing sensitive credentials via `.env`
- **depends_on** — Controlling the startup order of services

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Wordpress-Multi-Container-Setup)
