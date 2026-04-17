---
title: F+S GmbH — E-Commerce Shop
sidebar_position: 1
---

# F+S GmbH — E-Commerce Shop

Der F+S GmbH Online-Shop ist ein vollständiger B2C-Onlineshop für einen Großhandel
im Natursteinbetrieb. Das Projekt habe ich über **9 Monate im Angestelltenverhältnis
vollständig alleine** geplant, entwickelt und deployed — von der Architektur über
das Design bis hin zur Serverinfrastruktur.

:::info Live Projekt
Dieses Projekt befindet sich im produktiven Einsatz beim Kunden.
Das Repository ist aus geschäftlichen Gründen nicht öffentlich zugänglich.
:::

![F+S GmbH Startseite](/img/projects/fs-gmbh/hero.png)

---

## Was ist der F+S Shop?

Ein maßgeschneiderter Onlineshop für den Natursteingroßhandel F+S GmbH — mit
vollständiger ERP-Integration, eigenem Authentifizierungssystem, Stripe-Checkout
und automatisierter Produktsynchronisation. Keine fertige Shop-Lösung, sondern
ein von Grund auf individuell entwickeltes System.

---

## Tech Stack

`Angular` `Django` `Docker` `Nginx` `Celery` `PostgreSQL` `Stripe` `Weclapp` `GitHub Actions` `GSAP` `Linux`

---

## Architektur
```
fs-gmbh/
├── 📁 .github/
│   └── 📁 workflows/
│       └── ⚙️ deployment.yml     # CI/CD Pipeline
├── 📁 fs-gmbh-frontend/          # Angular App
├── 📁 fs-gmbh-backend/           # Django + Celery
├── ⚙️ docker-compose.yml         # Orchestrierung
└── 📄 .gitignore
```

Alle Services laufen containerisiert über Docker Compose hinter einem Nginx Reverse
Proxy. GitHub Actions übernimmt den automatisierten Deploy-Prozess auf den V-Server —
kein manuelles Deployment mehr.

---

## Features im Detail

### 🔐 Authentifizierungssystem

Ein vollständiges, produktionsreifes Auth-System das alle Edge Cases berücksichtigt:

- **Login-Methoden** — Eigenes Cookie-Session-System + Google OAuth
- **E-Mail-Verifizierung** — Mit Resend-Option falls die Mail nicht ankommt
- **Passwort zurücksetzen** — Sicherer Reset-Flow per E-Mail
- **Automatische Bereinigung** — Celery-Jobs informieren unverifizierte Nutzer
  nach 24h und löschen den Account nach 48h um die Datenbank sauber zu halten
- **Profilbilder** — Upload, Komprimierung und Optimierung im Backend
- **Re-Authentifizierung** — Bei sensiblen Aktionen (Profil löschen, E-Mail ändern)
  muss sich der Nutzer nach 5 Minuten erneut authentifizieren — je nach Login-Methode
  über Google oder das eigene System
- **Sauberes Account-Löschen** — Alle verknüpften Daten werden kaskadierend entfernt

---

### 🔄 Weclapp ERP-Integration

Einen Monat lang wurden verschiedene ERP-Systeme getestet — Lexware, Sync4, Desk4
und schließlich **Weclapp** als Gewinner. Entscheidend war die REST-API-Qualität:
Nur Weclapp unterstützte Produktvarianten, Staffelpreise und komplexe Produkteigenschaften
ohne Zwischensystem.

Eine **Celery-Automatisierung** synchronisiert alle 30 Minuten:
```
Weclapp REST API
      ↓  (alle 30 min via Celery)
Django Backend
      ↓  (aufbereitet für den Shop)
PostgreSQL
      ↓  (optimiert ausgeliefert)
Angular Frontend
```

Das Frontend weiß nichts von Weclapp — es bekommt immer die aufbereiteten,
gecachten Daten aus der eigenen Datenbank für maximale Performance.

Zusätzlich wurde Weclapp für die **Kundenverwaltung** angebunden: Nach dem Kauf
wird der Kunde automatisch in Weclapp angelegt, die Rechnung erstellt und versendet.
Der Lieferstatus ist für den Kunden live einsehbar.

![Weclapp API Produktansicht](/img/projects/fs-gmbh/products.png)

---

### 🛍️ Produktfilter

Inspiriert von Amazon wurde ein komplexes **Live-Filtersystem** gebaut:

- Mehrere Filter kombinierbar (Kategorie, Eigenschaften, Preis etc.)
- Live-Anzeige wie viele Produkte bei jeder Filterkombination noch verfügbar sind
- Sofortige Ergebnisse ohne Seitenneuladung

![Produkt Filter](/img/projects/fs-gmbh/filter.png)
---

### 💳 Stripe Checkout

![Checkout](/img/projects/fs-gmbh/checkout.png)

Preisberechnungen finden **ausschließlich im Backend** statt — das Frontend zeigt
nur an, berechnet nie. Manipulierte Preise im Frontend werden vom Backend komplett
ignoriert, da es immer gegen die live synchronisierten Weclapp-Preise prüft.

- Warenkorb-Verwaltung serverseitig
- Stripe-Integration für sichere Zahlungsabwicklung
- Preisvalidierung gegen Weclapp-Live-Daten beim Checkout

---

### 📧 E-Mail & Newsletter

- Transaktionale E-Mails (Bestellbestätigung, Versandstatus, Rechnungen)
- Kursanmeldungen über Formulare
- Support-Kontakt per E-Mail
- Newsletter-Anbindung mit Opt-in-System

---

### 🏗️ Infrastruktur

- **V-Server** — Eigenständig eingerichtet und konfiguriert
- **Fail2Ban** — Schutz gegen Brute-Force-Angriffe
- **Nginx Reverse Proxy** — SSL, Routing, Performance
- **GitHub Actions CI/CD** — Vollautomatischer Deploy bei jedem Push
- **Docker Compose** — Alle Services orchestriert und reproduzierbar

---

## Was ich dabei gelernt habe

Dieses Projekt war eine andere Dimension als alle vorherigen — kein Lernprojekt,
sondern ein echtes Produkt für einen echten Kunden mit echten Anforderungen:

- **Zeitmanagement & Planung** — Was geht schnell, was braucht Zeit, wie kommuniziert
  man Fortschritt in täglichen Meetings
- **Architekturentscheidungen** — Die Architektur wurde über 10× überarbeitet weil
  das Projekt immer weiter gewachsen ist. Ich habe gelernt früh modular zu denken
- **ERP-Evaluation** — Einen Monat lang verschiedene Systeme professionell bewerten
  und eine begründete Empfehlung geben
- **Edge Cases in Auth-Systemen** — Was alles passieren kann und abgesichert
  werden muss wenn echte Nutzer ein Login-System benutzen
- **Preissicherheit** — Warum man dem Frontend nie vertrauen darf wenn es ums Geld geht
- **Custom Animationen** — Slider und Confetti-Animation selbst gebaut statt auf
  Libraries zu setzen (GSAP)
- **Barrierefreiheit & Rechtliches** — WCAG, AGBs, Datenschutz als echte Anforderungen

---

## Links

- 🔒 GitHub Repository — Privat (geschäftliches Projekt)
- 🌐 [Live Website](https://fs-schleiftechnik.de/)