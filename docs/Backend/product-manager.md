---
title: ProductSync
sidebar_position: 3
---

# ProductSync — Mini Shop Backend

**ProductSync** is a small Python backend that was built as a practice project
to solidify Python skills. It demonstrates how to build a clean, modular backend
architecture without a framework — with API integration, a database, logging and
data export.

## What is ProductSync?

A CLI-based backend system for a mini online shop. Products are fetched from the
FakeStoreAPI, stored locally in a SQLite database and can be managed via a simple menu.
All actions are logged and data can be exported as JSON or CSV.

## Features

- **API Integration** — Fetch product data from the [FakeStoreAPI](https://fakestoreapi.com/products)
- **SQLite CRUD** — Create, read, update, delete products and search by title
- **OOP Design** — `Product` class encapsulates fields and database logic
- **Logging** — All system actions and errors are written to `logs/logs.log`
- **Data Export** — Export all products as `.json` and `.csv`
- **CLI Interface** — Menu-driven interaction directly in the terminal
- **No Framework** — Everything built with Python's standard library and `sqlite3`

## Tech Stack

`Python` `SQLite` `REST API` `OOP` `dotenv`

## Project Structure
```
ProductSync/
├── ⚙️ main_shop.py        # Entry point & CLI menu
├── ⚙️ config.py           # Configuration & environment variables
├── ⚙️ article_request.py  # API integration (FakeStoreAPI)
├── ⚙️ database.py         # SQLite CRUD operations
├── ⚙️ exports.py          # JSON & CSV export
├── 📄 .env                # Environment variables (not in repo)
├── 📁 classes/
│   └── ⚙️ product_class.py  # Product class (OOP)
├── 📁 tests/
│   ├── ⚙️ test_api.py       # API tests (optional)
│   └── ⚙️ test_database.py  # Database tests (optional)
├── 📁 logs/               # logs.log is written here
└── 📁 backups/            # Exported JSON & CSV files
```

## Setup
```bash
# Clone repository
git clone https://github.com/EnsslinAdrian/product-manager-learning-project
cd product-manager-learning-project

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt
```

Create `.env` file:
```
URL_ARTICLE=https://fakestoreapi.com/products
DB_NAME=shop.db
```

Start the app:
```bash
python main_shop.py
```

## What I Learned

ProductSync was my first independent Python exercise after the frontend projects —
the deliberate step toward backend development:

- **Python OOP** — Classes, methods and encapsulation without JavaScript habits
- **SQLite & SQL** — Database operations directly with `sqlite3` without an ORM
- **Modular Architecture** — Splitting code meaningfully across files instead of one giant file
- **Dotenv & Configuration** — Keeping sensitive values out of the code
- **Logging** — Structured logging instead of `print()` debugging

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/product-manager-learning-project)
