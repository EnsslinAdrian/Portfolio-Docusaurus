---
title: Aden UI Platform
sidebar_label: Aden UI Platform
sidebar_position: 3
---

# Aden UI — Component Platform

**Aden UI** ist die offizielle Plattform hinter der Community — eine interaktive
Component Library speziell für Angular-Entwickler. Jede Komponente wird in einem
Live-Playground präsentiert, entspricht den neuesten Angular-Standards und ist
direkt per Copy-Paste einsetzbar. Zusätzlich bietet die Plattform eine wachsende
Sammlung eigener Frontend-Guides als persönliche Referenz.

:::info Live Projekt
Repository ist privat — die Plattform ist live zugänglich.
:::

![Aden UI Hero](/img/projects/aden-ui/hero.png)

---

## Was ist Aden UI?

Eine Component Library Plattform mit drei Kernbereichen:

- **Playground** — Jede Komponente live im Browser testen und den Code direkt kopieren
- **Components** — Kuratierte Angular-Komponenten nach modernem Standard
- **Guides** — Persönliche Frontend-Guides als zentrale Referenz

Die Plattform läuft im Browser und als **Desktop App via Electron** — für Entwickler
die offline auf ihre Komponenten und Guides zugreifen wollen.

![Aden UI Components](/img/projects/aden-ui/components.png)

---

## Tech Stack

`Angular` `Django` `Electron` `Docker` `Nginx` `GitHub Actions` `Dev Container`

---

## Projektstruktur
```
aden-ui/
├── 📁 .devcontainer/           # Dev Container Konfiguration
├── 📁 .github/
│   └── 📁 workflows/           # CI/CD Pipeline
├── 📁 aden-frontend-library/   # Angular App + Playground
├── 📁 aden-backend-library/    # Django Backend
├── ⚙️ docker-compose.yml       # Orchestrierung
├── ⚙️ .env.template            # Umgebungsvariablen Vorlage
└── 📄 .gitignore
```

---

## Component Standards

Alle Komponenten auf Aden UI folgen denselben Qualitätsstandards:

- **Angular Signals** — `input()`, `output()`, `signal()`, `computed()` statt klassischer Dekoratoren
- **Standalone Components** — `standalone: true`, keine NgModules
- **Barrierefreiheit** — ARIA-Attribute, Keyboard-Navigation, semantisches HTML
- **Copy-Paste Ready** — Keine versteckten Dependencies, direkt einsetzbar
- **Responsive** — Funktioniert von 320px bis Desktop

---

## Guides

![Aden UI Guides](/img/projects/aden-ui/guides.png)

Die Guides-Sektion ist eine persönliche Referenz für Konzepte und Patterns die
man sonst immer wieder nachschlagen müsste — an einem Ort, immer verfügbar,
auch offline über die Electron-App.

Themen sind unter anderem:
- Angular Patterns & Best Practices
- RxJS & Signals
- Performance-Optimierungen
- CSS & SCSS Techniken

---

## Electron Desktop App

Aden UI ist nicht nur eine Web-Plattform sondern auch als native Desktop-Applikation
verfügbar. Entwickler können Komponenten und Guides nutzen ohne Browser und ohne
Internetverbindung — ideal für den Einsatz direkt im Code-Editor-Workflow.

---

## Dev Container

Das Projekt nutzt einen **Dev Container** für eine vollständig reproduzierbare
Entwicklungsumgebung. Jeder Entwickler startet mit derselben Konfiguration —
kein "works on my machine".

---

## Was ich dabei gelernt habe

- **Electron** — Eine Web-App in eine Desktop-Applikation überführen und die
  Besonderheiten des Main/Renderer-Process-Modells verstehen
- **Dev Container** — Entwicklungsumgebungen containerisieren damit Onboarding
  auf Sekunden reduziert wird
- **Component API Design** — Komponenten so entwerfen dass sie für andere
  Entwickler intuitiv nutzbar sind ohne Dokumentation lesen zu müssen
- **Platform Thinking** — Den Unterschied zwischen einem Projekt und einer
  Plattform die andere Entwickler nutzen und darauf aufbauen

---

## Links

- 🔒 GitHub Repository — Privat
- 🌐 [Live Website](https://adenui.com)
- 📦 [Community Repository](https://github.com/EnsslinAdrian/Aden-UI-Community)