---
title: Portfolio
sidebar_position: 2
---

# Portfolio — adrianensslin.de

My personal portfolio — the digital business card presenting me as a
Full-Stack & DevSecOps developer. The focus wasn't on a classic portfolio layout
but on an experience: performance, high-quality animations and an interactive 3D background
created through GLSL shaders and Three.js.

![Portfolio Hero](/img/projects/portfolio/hero.png)

---

## Tech Stack

`Angular 20+` `Three.js` `GSAP` `ScrollTrigger` `GLSL Shaders` `TypeScript` `SCSS` `Simplex-Noise`

---

## Project Structure
```
new_portfolio_frontend/
├── 📁 public/
│   ├── 📁 fonts/          # Fonts
│   ├── 📁 img/            # Images & icons
│   ├── 📁 videos/         # Background videos
│   ├── 🤖 robots.txt
│   └── ⚙️ .htaccess
└── 📁 src/
    └── 📁 app/
        ├── 📁 main-content/   # Main page
        ├── 📁 three-content/  # Three.js Sphere + Shader
        ├── 📁 shader/         # GLSL shader files
        ├── 📁 shared/         # Reusable UI components
        │   ├── 📁 text/       # Typography & headings
        │   └── 📁 gsap-btn/   # GSAP animated button
        └── 📁 imprint/        # Legal notice & privacy policy
    ├── 📁 directive/
    │   └── ⚙️ fade-up.directive.ts  # GSAP scroll animation
    └── 📁 service/
        └── ⚙️ mail.service.ts       # Contact form API
```

---

## Features

### 🌀 Three.js Sphere

The visual centerpiece of the portfolio — an interactive 3D sphere that reacts
to mouse and touch input:

- **ShaderMaterial (GLSL)** — Visual effects calculated directly on the GPU
- **Simplex-Noise** — Organic, flowing deformation of the sphere surface
- **Raycasting** — Interaction with the sphere via mouse and touch
- **UnrealBloom** — Post-processing effect for glowing transitions
- **Orbit Controls** — Smooth camera movement

### 🎨 Animations

- **GSAP ScrollTrigger** — Elements animate as they scroll into the viewport
- **Fade-Up Directive** — Reusable Angular directive for scroll animations
- **GSAP Button** — Custom animated button component
- **Progress Bars** — Dynamically animated skill bars

### 🏗️ Architecture

- **Angular Standalone** — No NgModules, modern Angular architecture
- **Reactive Forms** — Contact form with validation
- **Request Service Layer** — HTTP communication via dedicated services
- **Sitemap Generator** — Automatically generated `sitemap.xml` for SEO

---

## Contact Form

Incoming requests are forwarded to a dedicated mail API:
```
POST https://api.adrianensslin.de/sendMail
```

---

## What I Learned

- **GLSL Shaders** — Writing mathematical calculations for visual effects
  directly on the GPU instead of using JavaScript loops
- **Three.js Post-Processing** — How UnrealBloom and other effects take a
  3D scene from "good" to "exceptional"
- **Simplex-Noise** — Creating organic, non-repetitive animations through
  noise-based deformation
- **Performance with 3D in the Browser** — Where the limits are and how to push them
  with shaders and optimized render loops

---

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/adrian-ensslin-portfolio)
- 🌐 [Live Website](https://adrianensslin.de)
