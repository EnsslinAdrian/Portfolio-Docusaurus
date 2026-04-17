---
title: JetFire
sidebar_position: 2
---

# JetFire — 2D Browser Game

**JetFire** ist ein browserbasiertes 2D-Spiel, das vollständig in Vanilla JavaScript
geschrieben wurde. Das Projekt diente als tiefer Einstieg in objektorientierte 
Programmierung — von der Spiellogik über Animationen bis hin zu Kollisionsberechnungen.

## Was ist JetFire?

Ein interaktives 2D-Spiel direkt im Browser — keine Installation, kein Framework.
Der Spieler steuert einen Charakter durch Level, weicht Hindernissen aus und kämpft
gegen Gegner. Die gesamte Spiellogik, Physik und Kollisionserkennung wurde manuell
in JavaScript implementiert.

## Features

- **Objektorientierte Architektur** — Jedes Spielelement ist eine eigene Klasse (Spieler, Gegner, Projektile, Hintergrund)
- **Kollisionserkennung** — Präzise Berechnung von Treffern zwischen Spielobjekten
- **Level-System** — Aufbau und Verwaltung von Spielleveln über `level.js`
- **Animationen** — Flüssige Sprite-Animationen für alle Charaktere
- **Startbildschirm** — Eigener Start-Screen mit Spielsteuerung
- **Sound** — Audio-Feedback über eingebundene Sounddateien
- **Keine Dependencies** — Läuft direkt im Browser ohne Build-Step

## Tech Stack

`Vanilla JavaScript` `OOP` `HTML5 Canvas` `CSS` `HTML`

## Projektstruktur
```
JetFire/
├── 🌐 index.html       # Einstiegspunkt
├── 🎨 style.css        # Globale Styles
├── ⚙️ game.js          # Spielschleife & Hauptlogik
├── ⚙️ classes.js       # Alle Spielklassen (Player, Enemy, ...)
├── ⚙️ level.js         # Level-Definitionen
├── ⚙️ startScreen.js   # Startbildschirm-Logik
├── 📁 css/             # Weitere Styles
├── 📁 audio/           # Sound-Dateien
└── 📁 fonts/           # Schriftarten
```

## Was ich dabei gelernt habe

JetFire war mein Einstieg in echte objektorientierte Programmierung mit JavaScript.
Anstatt Funktionen aneinanderzureihen, habe ich gelernt Klassen zu modellieren und
Verantwortlichkeiten sauber zu trennen:

- **OOP-Prinzipien** — Vererbung, Kapselung und Wiederverwendbarkeit in der Praxis
- **Spielschleife** — Wie ein `requestAnimationFrame`-Loop funktioniert und warum er wichtig ist
- **Kollisionslogik** — Mathematische Berechnung von Hitboxen und Treffererkennung
- **Code-Struktur** — Große Projekte in sinnvolle Dateien und Klassen aufteilen

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/JetFire)