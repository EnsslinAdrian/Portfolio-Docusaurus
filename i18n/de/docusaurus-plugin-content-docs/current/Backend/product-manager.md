---
title: ProductSync
sidebar_position: 3
---

# ProductSync — Mini Shop Backend

**ProductSync** ist ein kleines Python-Backend das als Übungsprojekt entstanden ist,
um Python-Kenntnisse zu festigen. Es zeigt wie man ohne Framework eine saubere,
modulare Backend-Architektur aufbaut — mit API-Anbindung, Datenbank, Logging und
Datenexport.

## Was ist ProductSync?

Ein CLI-basiertes Backend-System für einen Mini-Online-Shop. Produkte werden von der
FakeStoreAPI geladen, lokal in einer SQLite-Datenbank gespeichert und können über
ein einfaches Menü verwaltet werden. Alle Aktionen werden geloggt, Daten lassen
sich als JSON oder CSV exportieren.

## Features

- **API Integration** — Produktdaten von der [FakeStoreAPI](https://fakestoreapi.com/products) abrufen
- **SQLite CRUD** — Produkte erstellen, lesen, aktualisieren, löschen und nach Titel suchen
- **OOP Design** — `Product`-Klasse kapselt Felder und Datenbanklogik
- **Logging** — Alle Systemaktionen und Fehler werden in `logs/logs.log` geschrieben
- **Datenexport** — Export aller Produkte als `.json` und `.csv`
- **CLI Interface** — Menügeführte Bedienung direkt im Terminal
- **Kein Framework** — Alles mit Python-Bordmitteln und `sqlite3`

## Tech Stack

`Python` `SQLite` `REST API` `OOP` `dotenv`

## Projektstruktur
```
ProductSync/
├── ⚙️ main_shop.py        # Einstiegspunkt & CLI-Menü
├── ⚙️ config.py           # Konfiguration & Umgebungsvariablen
├── ⚙️ article_request.py  # API-Anbindung (FakeStoreAPI)
├── ⚙️ database.py         # SQLite CRUD-Operationen
├── ⚙️ exports.py          # JSON & CSV Export
├── 📄 .env                # Umgebungsvariablen (nicht im Repo)
├── 📁 classes/
│   └── ⚙️ product_class.py  # Product-Klasse (OOP)
├── 📁 tests/
│   ├── ⚙️ test_api.py       # API Tests (optional)
│   └── ⚙️ test_database.py  # Datenbank Tests (optional)
├── 📁 logs/               # logs.log wird hier abgelegt
└── 📁 backups/            # Exportierte JSON & CSV Dateien
```

## Setup
```bash
# Repository klonen
git clone https://github.com/EnsslinAdrian/product-manager-learning-project
cd product-manager-learning-project

# Virtuelle Umgebung erstellen
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Dependencies installieren
pip install -r requirements.txt
```

`.env` Datei anlegen:
```
URL_ARTICLE=https://fakestoreapi.com/products
DB_NAME=shop.db
```

App starten:
```bash
python main_shop.py
```

## Was ich dabei gelernt habe

ProductSync war meine erste eigenständige Python-Übung nach den Frontend-Projekten —
der bewusste Schritt in Richtung Backend-Entwicklung:

- **Python OOP** — Klassen, Methoden und Kapselung ohne JavaScript-Gewohnheiten
- **SQLite & SQL** — Datenbankoperationen direkt mit `sqlite3` ohne ORM
- **Modulare Architektur** — Code sinnvoll auf Dateien aufteilen statt alles in eine Datei
- **Dotenv & Konfiguration** — Sensible Werte aus dem Code heraushalten
- **Logging** — Strukturiertes Logging statt `print()`-Debugging

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/product-manager-learning-project)