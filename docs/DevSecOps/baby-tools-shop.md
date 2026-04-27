---
title: Baby Tools Shop
sidebar_position: 4
---

# Baby Tools Shop: Django E-Commerce with Docker

**Baby Tools Shop** is a baby-themed e-commerce application built with Django. The project was created as a hands-on exercise to learn Docker containerization and clean Django project structuring, covering everything from model design to containerized deployment.

## Tech Stack

`Django` `Python` `Docker` `Pillow` `Python-Dotenv` `SQLite`

## Project Structure
```
baby-tools-shop/
├── 📁 babyshop/
│   ├── 📄 settings.py
│   ├── 📄 urls.py
│   └── 📄 wsgi.py
├── 📁 apps/
│   ├── 📁 products/
│   │   ├── 📁 migrations/
│   │   ├── 📄 models.py
│   │   ├── 📄 views.py
│   │   └── 📄 urls.py
│   └── 📁 categories/
│       ├── 📁 migrations/
│       ├── 📄 models.py
│       ├── 📄 views.py
│       └── 📄 urls.py
├── 📁 static/
│   ├── 📁 css/
│   ├── 📁 js/
│   └── 📁 images/
├── 📁 templates/
│   ├── 📄 base.html
│   ├── 📁 products/
│   └── 📁 categories/
├── ⚙️ Dockerfile
├── ⚙️ .env.template
├── 📄 requirements.txt
└── 📄 manage.py
```

## Quickstart

### Option A: Docker (recommended)
```bash
# Clone repository
git clone -b docker-setup git@github.com:EnsslinAdrian/baby-tools-shop.git
cd baby-tools-shop

# Create .env file
cp .env.template .env

# Build image
docker build -t babyshop_app -f Dockerfile .

# Run container
docker run -d -p 8025:8025 --name babyshop_container babyshop_app

# Run migrations inside the container
docker exec -it babyshop_container python manage.py migrate

# Create admin user (optional)
docker exec -it babyshop_container python manage.py createsuperuser
```

App available at: `http://localhost:8025`

### Option B: Local (without Docker)
```bash
# Create virtual environment
python -m venv .venv
source .venv/bin/activate       # macOS/Linux
.venv/Scripts/activate          # Windows

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.template .env

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

## .env Setup

```bash
# Copy template
cp .env.template .env

# Generate Django secret key
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Paste the generated key into `.env`.

## Architecture

The app is split into two Django apps inside the `apps/` directory:

| App | Responsibility |
|---|---|
| `products` | Product listings, detail views, image handling via Pillow |
| `categories` | Category management and filtering |

Templates follow a base-extends pattern via `base.html`. Static files are served directly by Django in development.

## What I Learned

- **Docker basics** — Building a custom image with a Dockerfile and running a containerized Django app
- **Django app structure** — Splitting functionality into reusable apps with their own models, views, and URLs
- **Environment variables** — Keeping secrets out of the codebase with Python-Dotenv and `.env` files
- **Image handling** — Managing uploaded product images with Pillow
- **Linux deployment** — Running a Docker container on a remote Linux server

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/baby-tools-shop)
