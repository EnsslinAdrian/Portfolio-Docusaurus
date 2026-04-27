---
title: Baby Tools Shop
sidebar_position: 4
---

# Baby Tools Shop: Django E-Commerce mit Docker

**Baby Tools Shop** ist eine Django-basierte E-Commerce-Anwendung mit Baby-Thema. Das Projekt entstand als praktische Übung, um Docker-Containerisierung und saubere Django-Projektstrukturierung zu lernen, vom Modell-Design bis zum containerisierten Deployment.

## Tech Stack

`Django` `Python` `Docker` `Pillow` `Python-Dotenv` `SQLite`

## Projektstruktur
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

### Option A: Docker (empfohlen)
```bash
# Repository klonen
git clone -b docker-setup git@github.com:EnsslinAdrian/baby-tools-shop.git
cd baby-tools-shop

# .env Datei erstellen
cp .env.template .env

# Image bauen
docker build -t babyshop_app -f Dockerfile .

# Container starten
docker run -d -p 8025:8025 --name babyshop_container babyshop_app

# Migrationen im Container ausführen
docker exec -it babyshop_container python manage.py migrate

# Admin-Nutzer anlegen (optional)
docker exec -it babyshop_container python manage.py createsuperuser
```

App erreichbar unter: `http://localhost:8025`

### Option B: Lokal (ohne Docker)
```bash
# Virtuelle Umgebung erstellen
python -m venv .venv
source .venv/bin/activate       # macOS/Linux
.venv/Scripts/activate          # Windows

# Abhängigkeiten installieren
pip install -r requirements.txt

# .env Datei erstellen
cp .env.template .env

# Migrationen ausführen
python manage.py migrate

# Admin-Nutzer anlegen
python manage.py createsuperuser

# Entwicklungsserver starten
python manage.py runserver
```

## .env Setup

```bash
# Vorlage kopieren
cp .env.template .env

# Django Secret Key generieren
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Den generierten Key in die `.env` eintragen.

## Architektur

Die App ist in zwei Django-Apps innerhalb des `apps/`-Verzeichnisses aufgeteilt:

| App | Aufgabe |
|---|---|
| `products` | Produktlisten, Detailansichten, Bildverwaltung via Pillow |
| `categories` | Kategorieverwaltung und Filterung |

Templates folgen einem Base-Extends-Muster über `base.html`. Statische Dateien werden im Entwicklungsmodus direkt von Django ausgeliefert.

## Was ich dabei gelernt habe

- **Docker-Grundlagen** — Eigenes Image mit Dockerfile bauen und eine containerisierte Django-App betreiben
- **Django App-Struktur** — Funktionalität in wiederverwendbare Apps mit eigenen Models, Views und URLs aufteilen
- **Umgebungsvariablen** — Secrets mit Python-Dotenv und `.env`-Dateien aus dem Code heraushalten
- **Bildverwaltung** — Hochgeladene Produktbilder mit Pillow verwalten
- **Linux-Deployment** — Docker-Container auf einem Remote-Linux-Server betreiben

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/baby-tools-shop)
