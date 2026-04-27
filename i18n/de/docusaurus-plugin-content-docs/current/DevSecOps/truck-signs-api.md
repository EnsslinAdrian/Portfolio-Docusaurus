---
title: Truck Signs API
sidebar_position: 5
---

# Truck Signs API: Django REST Backend mit Docker

**Truck Signs API** ist ein Django REST Framework Backend zur Verwaltung von LKW-Schilderdesigns. Das Projekt entstand im Rahmen einer DevSecOps-Schulung. Der Fokus liegt auf dem Betrieb der Anwendung und der PostgreSQL-Datenbank in getrennten Containern, die über ein Docker-Netzwerk verbunden sind, ohne Docker Compose, und vollständig über Umgebungsvariablen konfiguriert werden.

## Tech Stack

`Django` `Django REST Framework` `Python` `Docker` `PostgreSQL` `Gunicorn`

## Projektstruktur
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
# Repository klonen
git clone git@github.com:EnsslinAdrian/truck_signs_api.git
cd truck_signs_api

# .env Datei erstellen
cd truck_signs_designs/settings
cp .env.template .env
```

Django Secret Key generieren und in `.env` eintragen:
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

```bash
# Docker-Netzwerk erstellen
docker network create truck_signs

# PostgreSQL-Container starten
docker run -d \
  --name db \
  --network truck_signs \
  -e POSTGRES_DB=<DB_NAME> \
  -e POSTGRES_USER=<DB_USER> \
  -e POSTGRES_PASSWORD=<DB_PASSWORD> \
  -v db_data:/var/lib/postgresql/data \
  --restart on-failure:5 \
  postgres:15-alpine

# Backend-Image bauen
docker build -t truck-signs-backend .

# Backend-Container starten
docker run -d \
  --name backend \
  --network truck_signs \
  --env-file <PATH_TO_ENV_FILE> \
  -p 8020:8000 \
  -v backend_media:/app/media \
  --restart on-failure:5 \
  truck-signs-backend
```

API erreichbar unter: `http://<YOUR_IP>:8020`  
Django Admin erreichbar unter: `http://<YOUR_IP>:8020/admin/`

## Umgebungsvariablen

Pflichtfelder:

| Variable | Beschreibung |
|---|---|
| `SECRET_KEY` | Django Secret Key |
| `DB_NAME` | PostgreSQL Datenbankname |
| `DB_USER` | PostgreSQL Benutzer |
| `DB_PASSWORD` | PostgreSQL Passwort |
| `DB_HOST` | Datenbankhost (Containername im Netzwerk) |
| `DB_PORT` | Datenbankport |
| `SUPERUSER_USERNAME` | Admin-Benutzername |
| `SUPERUSER_EMAIL` | Admin-E-Mail |
| `SUPERUSER_PASSWORD` | Admin-Passwort |

Optional: Stripe-, E-Mail- und Cloudinary-Konfiguration.

## Architektur

### Zwei Container, ein Netzwerk

Anstelle von Docker Compose werden beide Container manuell über ein gemeinsames Docker-Netzwerk verbunden:

| Container | Image | Rolle |
|---|---|---|
| `db` | `postgres:15-alpine` | Persistente PostgreSQL-Datenbank mit Volume |
| `backend` | `truck-signs-backend` | Django API, bereitgestellt von Gunicorn |

Das Backend erreicht die Datenbank über den Containernamen (`db`) als `DB_HOST`-Wert.

### Automatischer Start via entrypoint.sh

Bei jedem Containerstart wird `entrypoint.sh` automatisch ausgeführt:

1. Warten bis die Datenbank erreichbar ist
2. `collectstatic` ausführen
3. `makemigrations` und `migrate` ausführen
4. Superuser nicht-interaktiv anlegen
5. App mit **Gunicorn** (WSGI) starten

### Geteilte Settings

Die Konfiguration ist auf mehrere Dateien für verschiedene Umgebungen aufgeteilt:

| Datei | Zweck |
|---|---|
| `base.py` | Gemeinsame Konfiguration |
| `dev.py` | Lokale Entwicklung |
| `production.py` | Produktionsbetrieb |
| `test_docker.py` | Docker-basierte Tests |

## Docker-Befehle

```bash
# Container stoppen
docker stop backend db

# Container entfernen
docker rm backend db

# Container und Volumes entfernen
docker rm -f backend db
docker volume rm db_data backend_media

# Container neu starten
docker restart backend db

# Laufende Container anzeigen
docker ps

# Logs anzeigen
docker logs <container-name>

# Logs live verfolgen
docker logs -f <container-name>

# Logs in Datei speichern
docker logs <container-name> > <container-name>-logs.txt
```

## Was ich dabei gelernt habe

- **Manuelles Docker-Networking** — Container ohne Docker Compose über ein gemeinsames Netzwerk verbinden
- **PostgreSQL in Docker** — Datenbank-Container mit persistenten Volumes betreiben
- **Geteilte Django-Settings** — Separate Konfigurationsdateien fur Dev, Production und Tests
- **entrypoint.sh Automatisierung** — Migrationen, Static Files und Superuser-Anlage beim Start
- **Django REST Framework** — REST-API mit Serializers, Views und URL-Routing aufbauen
- **Gunicorn** — Django hinter einem produktionsreifen WSGI-Server betreiben

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/truck_signs_api)
