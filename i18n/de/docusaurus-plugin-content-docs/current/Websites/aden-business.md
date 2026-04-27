---
title: Aden Software
sidebar_position: 1
---

# Aden Software — Freelance Business Website

**Aden Software** ist meine eigene Freelance-Website — der Schritt in die
Selbstständigkeit nach dem F+S Projekt. Das Projekt bei F+S hat mir gezeigt
wie sehr mir die enge Zusammenarbeit mit Kunden Spaß macht und was es bedeutet
ein Produkt von Anfang bis Ende zu verantworten. Diese Website ist der Startpunkt
für meine Freelance-Tätigkeit.

:::info Live Projekt
Repository ist aus geschäftlichen Gründen nicht öffentlich zugänglich.
:::

![Aden Software Hero](/img/projects/aden-business/hero.png)

---

## Was ist Aden Software?

Eine Business-Website für meine Freelance-Tätigkeit als Full-Stack Entwickler —
selbst designed, selbst entwickelt, selbst deployed. Das Design bricht bewusst mit
statischen Standard-Layouts und schafft durch Three.js einen kreativen 3D-Raum
der eher an Kunst als an eine klassische Unternehmenswebsite erinnert.

---

## Tech Stack

`Angular` `Django` `Three.js` `GLSL Shaders` `Docker` `Nginx` `GitHub Actions`

---

## Projektstruktur
```
aden-software/
├── 📁 .github/
│   └── 📁 workflows/          # CI/CD Pipeline
├── 📁 aden-business-frontend/ # Angular App + Three.js
├── 📁 aden-business-backend/  # Django Backend
├── ⚙️ docker-compose.yml      # Orchestrierung
└── 📄 .gitignore
```

Identische Infrastruktur wie beim F+S Projekt — Docker, Nginx Reverse Proxy,
GitHub Actions für automatisches Deployment. Was beim Kunden funktioniert hat
läuft auch auf der eigenen Website.
---

## Das Starter-Kit System

Ein großes Learning aus dem F+S Projekt war: Viele Stunden gehen verloren
bevor das eigentliche Programmieren beginnt. Dieselbe Basis, immer wieder von null.

Deshalb habe ich mir nach der DevSecOps Weiterbildung ein eigenes **Starter-Kit-System**
gebaut das ich für jedes neue Kundenprojekt einsetze:

### Was das Frontend-Starter-Kit enthält
- SSR & SEO out of the box
- Sitelinks-Struktur
- Rechtliche Seiten (Impressum, Datenschutz)
- Hero-Bereich
- Standard-Komponenten die in jedem Projekt gebraucht werden
- Konfiguration komplett über `.env`

### Was das Backend-Starter-Kit enthält
- Alles was ein Django-Backend zum Start braucht
- Auth-System vorkonfiguriert
- `.env`-basierte Verteilung aller Einstellungen

### Varianten des Starter-Kits
- **Standard** — Frontend + Backend, Basis für jedes Projekt
- **Mit Bezahlsystem** — Direkt mit Stripe-Integration für Shop-Projekte

Ein neues Projekt ist damit in wenigen Minuten aufgesetzt — der Fokus liegt
von Anfang an auf dem was den Kunden unterscheidet, nicht auf der Infrastruktur.

---

## Design & Three.js

Das Design war eine bewusste Entscheidung gegen Standard-Layouts. Nach einem
intensiven Three.js-Kurs wurde ein kreativer 3D-Raum entwickelt der die Website
von klassischen Business-Seiten abhebt.

Technische Besonderheiten:
- **3D-Szene** — Interaktiver Three.js Raum als zentrales Design-Element
- **GLSL Shader** — Komplexere visuelle Berechnungen direkt auf der GPU statt in JavaScript
- **Performance-First** — Kontinuierliches Monitoring damit die 3D-Szene die
  Ladezeit und Laufzeit nicht belastet

![Aden Software 3D Raum](/img/projects/aden-business/saturn.png)
---

## Was ich dabei gelernt habe

- **Three.js & WebGL** — 3D im Browser und warum Shader für komplexe Effekte
  die bessere Wahl gegenüber CPU-Berechnungen sind
- **Eigene Systeme bauen** — Der Unterschied zwischen "etwas gebaut haben" und
  "ein System gebaut haben das man immer wieder einsetzt"
- **Freelance-Mindset** — Wann ist man bereit den Schritt zu wagen und was
  braucht man um professionell aufzutreten

---

## Links

- 🔒 GitHub Repository — Privat
- 🌐 [Live Website](https://aden-software.de)