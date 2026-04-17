---
title: Portfolio
sidebar_position: 2
---

# Portfolio — adrianensslin.de

Mein persönliches Portfolio — die digitale Visitenkarte die mich als
Full-Stack & DevSecOps Entwickler präsentiert. Der Fokus lag nicht auf einem
klassischen Portfolio-Layout sondern auf einer Erfahrung: Performance,
hochwertige Animationen und ein interaktiver 3D-Hintergrund der durch
GLSL Shader und Three.js entsteht.

![Portfolio Hero](/img/projects/portfolio/hero.png)

---

## Tech Stack

`Angular 20+` `Three.js` `GSAP` `ScrollTrigger` `GLSL Shaders` `TypeScript` `SCSS` `Simplex-Noise`

---

## Projektstruktur
```
new_portfolio_frontend/
├── 📁 public/
│   ├── 📁 fonts/          # Schriftarten
│   ├── 📁 img/            # Bilder & Icons
│   ├── 📁 videos/         # Hintergrundvideos
│   ├── 🤖 robots.txt
│   └── ⚙️ .htaccess
└── 📁 src/
    └── 📁 app/
        ├── 📁 main-content/   # Hauptseite
        ├── 📁 three-content/  # Three.js Sphere + Shader
        ├── 📁 shader/         # GLSL Shader Dateien
        ├── 📁 shared/         # Wiederverwendbare UI Komponenten
        │   ├── 📁 text/       # Typography & Headings
        │   └── 📁 gsap-btn/   # GSAP animierter Button
        └── 📁 imprint/        # Impressum & Datenschutz
    ├── 📁 directive/
    │   └── ⚙️ fade-up.directive.ts  # GSAP Scroll Animation
    └── 📁 service/
        └── ⚙️ mail.service.ts       # Kontaktformular API
```

---

## Features

### 🌀 Three.js Sphere

Das visuelle Herzstück des Portfolios — eine interaktive 3D-Kugel die auf
Maus- und Touch-Eingaben reagiert:

- **ShaderMaterial (GLSL)** — Visuelle Effekte direkt auf der GPU berechnet
- **Simplex-Noise** — Organische, fließende Deformation der Kugeloberfläche
- **Raycasting** — Interaktion mit der Sphere über Maus und Touch
- **UnrealBloom** — Post-Processing Effekt für leuchtende Übergänge
- **Orbit Controls** — Sanfte Kamerabewegung

### 🎨 Animationen

- **GSAP ScrollTrigger** — Elemente animieren beim Einschalten in den Viewport
- **Fade-Up Directive** — Wiederverwendbare Angular-Direktive für Scroll-Animationen
- **GSAP Button** — Eigene animierte Button-Komponente
- **Progress Bars** — Dynamisch animierte Skill-Balken

### 🏗️ Architektur

- **Angular Standalone** — Keine NgModules, moderne Angular-Architektur
- **Reactive Forms** — Kontaktformular mit Validierung
- **Request Service Layer** — HTTP-Kommunikation über dedizierte Services
- **Sitemap Generator** — Automatisch generierte `sitemap.xml` für SEO

---

## Kontaktformular

Eingehende Anfragen werden an eine eigene Mail-API weitergeleitet:
```
POST https://api.adrianensslin.de/sendMail
```

---

## Was ich dabei gelernt habe

- **GLSL Shaders** — Mathematische Berechnungen für visuelle Effekte direkt
  auf der GPU schreiben statt JavaScript-Schleifen zu nutzen
- **Three.js Post-Processing** — Wie UnrealBloom und andere Effekte eine
  3D-Szene von "gut" auf "außergewöhnlich" heben
- **Simplex-Noise** — Organische, nicht-repetitive Animationen durch
  rauschbasierte Deformation erzeugen
- **Performance bei 3D im Browser** — Wo die Grenzen liegen und wie man
  sie mit Shadern und optimierten Render-Loops verschiebt

---

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/adrian-ensslin-portfolio)
- 🌐 [Live Website](https://adrianensslin.de)