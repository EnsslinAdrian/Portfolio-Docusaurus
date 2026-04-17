---
title: DABubble
sidebar_position: 3
---

# DABubble — Real-Time Chat App

**DABubble** ist der Abschluss meiner Frontend-Weiterbildung — ein Discord-inspirierter
Echtzeit-Chat, der im Team zu dritt geplant und umgesetzt wurde. Es war das erste
größere Angular-Projekt und das komplexeste Frontend-Projekt das ich bisher gebaut habe.

## Was ist DABubble?

Eine vollständige Chat-Applikation mit Server- und Kanalstruktur, Direktnachrichten
und Echtzeit-Kommunikation — angelehnt an Discord. Nutzer können Kanäle erstellen,
anderen beitreten, Nachrichten senden und ihr Profil verwalten.
Alle Daten werden live über Firebase synchronisiert.

## Features

- **Channel-System** — Kanäle erstellen, beitreten und verwalten
- **Echtzeit-Messaging** — Nachrichten erscheinen sofort ohne Neuladen
- **Direktnachrichten** — Private Konversationen zwischen einzelnen Nutzern
- **User Authentication** — Registrierung, Login und Profilverwaltung über Firebase
- **Profilbilder** — Upload und Verwaltung von Nutzer-Avataren
- **Responsive Design** — Optimiert für Desktop und mobile Geräte

## Tech Stack

`Angular` `TypeScript` `Firebase` `Firestore` `HTML` `CSS`

## Projektstruktur
```
DABubble/
├── 📁 src/              # Angular App (Components, Services, Models)
├── 📁 public/           # Statische Assets & Profilbilder
├── 🌐 index.html        # Einstiegspunkt
├── ⚙️ angular.json      # Angular Konfiguration
├── ⚙️ firebase.json     # Firebase Konfiguration
├── ⚙️ package.json      # Dependencies
└── ⚙️ tsconfig.json     # TypeScript Konfiguration
```

## Was ich dabei gelernt habe

DABubble war mein Sprung von Vanilla JavaScript zu einem richtigen Framework.
Die Komplexität eines Angular-Projekts im Team zu managen war eine komplett neue Erfahrung:

- **Angular** — Components, Services, Routing, Reactive Forms und Dependency Injection
- **TypeScript** — Typisierung, Interfaces und OOP in einer skalierbaren Codebasis
- **Firebase Firestore** — Echtzeit-Datenbank mit Live-Subscriptions über Observables
- **RxJS** — Reaktive Programmierung und Umgang mit asynchronen Datenströmen
- **Team-Entwicklung im Framework** — Feature-Branches, klare Komponentengrenzen
  und Absprachen über gemeinsam genutzte Services

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/DABubble)