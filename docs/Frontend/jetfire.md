---
title: JetFire
sidebar_position: 2
---

# JetFire — 2D Browser Game

**JetFire** is a browser-based 2D game written entirely in Vanilla JavaScript.
The project served as a deep dive into object-oriented programming —
from game logic and animations to collision detection.

## What is JetFire?

An interactive 2D game running directly in the browser — no installation, no framework.
The player controls a character through levels, dodges obstacles and fights enemies.
All game logic, physics and collision detection were implemented manually in JavaScript.

## Features

- **Object-Oriented Architecture** — Every game element is its own class (Player, Enemy, Projectiles, Background)
- **Collision Detection** — Precise calculation of hits between game objects
- **Level System** — Level structure and management via `level.js`
- **Animations** — Smooth sprite animations for all characters
- **Start Screen** — Dedicated start screen with game controls
- **Sound** — Audio feedback via integrated sound files
- **No Dependencies** — Runs directly in the browser without a build step

## Tech Stack

`Vanilla JavaScript` `OOP` `HTML5 Canvas` `CSS` `HTML`

## Project Structure
```
JetFire/
├── 🌐 index.html       # Entry point
├── 🎨 style.css        # Global styles
├── ⚙️ game.js          # Game loop & main logic
├── ⚙️ classes.js       # All game classes (Player, Enemy, ...)
├── ⚙️ level.js         # Level definitions
├── ⚙️ startScreen.js   # Start screen logic
├── 📁 css/             # Additional styles
├── 📁 audio/           # Sound files
└── 📁 fonts/           # Fonts
```

## What I Learned

JetFire was my introduction to real object-oriented programming with JavaScript.
Instead of chaining functions together, I learned to model classes and
separate responsibilities cleanly:

- **OOP Principles** — Inheritance, encapsulation and reusability in practice
- **Game Loop** — How a `requestAnimationFrame` loop works and why it matters
- **Collision Logic** — Mathematical calculation of hitboxes and hit detection
- **Code Structure** — Splitting large projects into meaningful files and classes

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/JetFire)
