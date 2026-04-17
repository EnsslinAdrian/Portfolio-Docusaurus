---
title: Aden Software
sidebar_position: 1
---

# Aden Software — Freelance Business Website

**Aden Software** is my own freelance website — the step into self-employment
after the F+S project. Working with F+S showed me how much I enjoy close client collaboration
and what it means to own a product from start to finish. This website is the starting
point for my freelance work.

:::info Live Project
Repository is not publicly accessible for business reasons.
:::

![Aden Software Hero](/img/projects/aden-business/hero.png)

---

## What is Aden Software?

A business website for my freelance work as a full-stack developer —
self-designed, self-developed, self-deployed. The design deliberately breaks with
static standard layouts and creates a creative 3D space through Three.js
that feels more like art than a typical company website.

---

## Tech Stack

`Angular` `Django` `Three.js` `GLSL Shaders` `Docker` `Nginx` `GitHub Actions`

---

## Project Structure
```
aden-software/
├── 📁 .github/
│   └── 📁 workflows/          # CI/CD Pipeline
├── 📁 aden-business-frontend/ # Angular App + Three.js
├── 📁 aden-business-backend/  # Django Backend
├── ⚙️ docker-compose.yml      # Orchestration
└── 📄 .gitignore
```

Identical infrastructure to the F+S project — Docker, Nginx reverse proxy,
GitHub Actions for automated deployment. What worked for the client
also runs on my own website.
---

## The Starter-Kit System

A key learning from the F+S project was: a lot of hours are lost
before the actual coding begins. The same foundation, rebuilt from scratch every time.

That's why after the DevSecOps training I built my own **starter-kit system**
that I use for every new client project:

### What the Frontend Starter-Kit Includes
- SSR & SEO out of the box
- Sitelinks structure
- Legal pages (imprint, privacy policy)
- Hero section
- Standard components needed in every project
- Configuration fully via `.env`

### What the Backend Starter-Kit Includes
- Everything a Django backend needs to get started
- Auth system pre-configured
- All settings distributed via `.env`

### Starter-Kit Variants
- **Standard** — Frontend + backend, the base for every project
- **With Payment System** — Directly includes Stripe integration for shop projects

A new project is set up within minutes — the focus is
from day one on what makes the client unique, not on infrastructure.

---

## Design & Three.js

The design was a deliberate choice against standard layouts. After an intensive
Three.js course, a creative 3D space was developed that sets the website
apart from typical business pages.

Technical highlights:
- **3D Scene** — Interactive Three.js room as the central design element
- **GLSL Shaders** — Complex visual calculations directly on the GPU instead of JavaScript
- **Performance-First** — Continuous monitoring so the 3D scene doesn't impact
  load time or runtime performance

![Aden Software 3D Room](/img/projects/aden-business/saturn.png)
---

## What I Learned

- **Three.js & WebGL** — 3D in the browser and why shaders are the better choice
  over CPU calculations for complex effects
- **Building Your Own Systems** — The difference between "having built something" and
  "having built a system you use again and again"
- **Freelance Mindset** — When you're ready to take the leap and what you need
  to present yourself professionally

---

## Links

- 🔒 GitHub Repository — Private
- 🌐 [Live Website](https://aden-software.de)
