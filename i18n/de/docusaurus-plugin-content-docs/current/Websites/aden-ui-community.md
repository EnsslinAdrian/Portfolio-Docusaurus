---
title: Aden UI Community
sidebar_position: 4
---

# Aden UI Community

**Aden UI Community** ist ein zweiteiliges Projekt: Eine persönliche Sammlung von
wiederverwendbaren Angular-Komponenten und Frontend-Guides — und gleichzeitig eine
offene Plattform, auf der andere Entwickler eigene Komponenten einreichen können.

## Idee hinter dem Projekt

Wer länger mit Angular arbeitet, baut dieselben Komponenten immer wieder neu.
Aden UI löst das: Häufig genutzte Komponenten werden einmal sauber gebaut,
dokumentiert und zentral abgelegt. Zusätzlich gibt es eigene Frontend-Guides —
eine persönliche Referenz für Konzepte und Patterns die man sonst immer wieder
nachschlagen müsste.

Der Community-Gedanke geht einen Schritt weiter: Andere Entwickler können eigene
Komponenten einreichen, die nach einem Review auf der offiziellen Plattform
[adenui.com](https://adenui.com) veröffentlicht werden.

## Die Aden UI Workbench

Das Herzstück des Projekts ist die **Workbench** — ein lokales Labor, in dem
Komponenten entwickelt, getestet und visuell vorschaut werden können, bevor
sie eingereicht werden.
```
ng s -o   →   http://localhost:4200
```

Jede Komponente hat im Playground drei Tabs:
- **Preview** — Live-Darstellung der Komponente
- **Code** — Automatisch geladene Quelldateien
- **Docs** — Generierte API-Referenz aus `docs.md`

## Tech Stack

`Angular 18+` `TypeScript` `Angular Signals` `SCSS` `Design Tokens`

## Projektstruktur
```
aden-ui-community/
└── 📁 src/
    ├── 📁 app/
    │   ├── 📁 contributions/        # Dein Arbeitsbereich
    │   │   └── 📁 my-contribution/
    │   │       ├── 📁 interfaces/   # (Optional) Typdefinitionen
    │   │       ├── 📁 services/     # (Optional) Logik-Services
    │   │       ├── 📁 my-component/ # Komponenten-Logik & Templates
    │   │       ├── 📄 docs.md       # Technische Dokumentation
    │   │       ├── 📄 my-contribution.ts   # Playground Bridge
    │   │       └── 📄 my-contribution.html # Visueller Wrapper
    │   ├── 📁 pages/workbench/      # Komponente hier registrieren
    │   └── 📁 shared/               # Internes UI-Engine
    └── 📄 _variables.scss           # Globale Design Tokens
```

## Technische Anforderungen für Beiträge

Komponenten müssen folgende Standards erfüllen um akzeptiert zu werden:

- **Standalone** — `standalone: true` ist Pflicht
- **Signals** — `input()`, `output()`, `signal()`, `computed()` statt klassischer Dekoratoren
- **Responsive** — Funktioniert bis 320px Breite
- **Design Tokens** — Keine hardcodierten Hex-Farben, immer `--aden-` Variablen aus `_variables.scss`
- **Playground** — Templates müssen in `<app-ui-playground>` gewrapped sein
- **Docs** — Technische API-Beschreibung gehört in `docs.md`, nicht als JSDoc-Kommentare

## Beitrag einreichen
```bash
# 1. Repository forken und klonen
git clone https://github.com/YOUR_USERNAME/aden-ui-community.git

# 2. Dependencies installieren
npm install

# 3. Workbench starten
ng s -o

# 4. Komponente entwickeln unter src/app/contributions/

# 5. Committen und pushen
git add .
git commit -m "feat: added [component name]"
git push origin main

# 6. Fork-URL einreichen unter adenui.com/contribution
```

## Was ich dabei gelernt habe

Aden UI ist weniger ein Lernprojekt als ein Effizienzprojekt — der Fokus lag auf
sauberer Architektur, modernen Angular-Patterns und einer Developer Experience
die sich professionell anfühlt:

- **Angular Signals** — Modernes reaktives State-Management ohne `@Input()`/`@Output()`
- **Design Token System** — Konsistentes UI durch zentrale SCSS-Variablen statt Inline-Styles
- **Component API Design** — Komponenten so bauen dass andere sie intuitiv nutzen können
- **Developer Tools bauen** — Eine Workbench zu entwickeln die anderen Entwicklern hilft

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Aden-UI-Community)
- [Offizielle Plattform](https://adenui.com)
- [Komponente einreichen](https://adenui.com/contribution)