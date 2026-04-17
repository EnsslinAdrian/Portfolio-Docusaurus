---
title: F+S GmbH — E-Commerce Shop
sidebar_position: 1
---

# F+S GmbH — E-Commerce Shop

The F+S GmbH online shop is a complete B2C e-commerce store for a wholesale company
in the natural stone industry. Over **9 months as a full-time employee I planned,
developed and deployed it entirely on my own** — from the architecture and design
to the server infrastructure.

:::info Live Project
This project is in active production use by the client.
The repository is not publicly accessible for business reasons.
:::

![F+S GmbH Homepage](/img/projects/fs-gmbh/hero.png)

---

## What is the F+S Shop?

A custom-built online shop for the natural stone wholesaler F+S GmbH — with
full ERP integration, a custom authentication system, Stripe checkout
and automated product synchronization. Not an off-the-shelf solution, but
a system built from scratch to meet specific requirements.

---

## Tech Stack

`Angular` `Django` `Docker` `Nginx` `Celery` `PostgreSQL` `Stripe` `Weclapp` `GitHub Actions` `GSAP` `Linux`

---

## Architecture
```
fs-gmbh/
├── 📁 .github/
│   └── 📁 workflows/
│       └── ⚙️ deployment.yml     # CI/CD Pipeline
├── 📁 fs-gmbh-frontend/          # Angular App
├── 📁 fs-gmbh-backend/           # Django + Celery
├── ⚙️ docker-compose.yml         # Orchestration
└── 📄 .gitignore
```

All services run containerized via Docker Compose behind an Nginx reverse proxy.
GitHub Actions handles the automated deploy process to the VPS —
no manual deployment anymore.

---

## Features in Detail

### 🔐 Authentication System

A complete, production-ready auth system that handles all edge cases:

- **Login Methods** — Custom cookie-session system + Google OAuth
- **Email Verification** — With resend option if the email doesn't arrive
- **Password Reset** — Secure reset flow via email
- **Automatic Cleanup** — Celery jobs notify unverified users after 24h
  and delete the account after 48h to keep the database clean
- **Profile Pictures** — Upload, compression and optimization in the backend
- **Re-Authentication** — For sensitive actions (delete profile, change email)
  the user must re-authenticate after 5 minutes — via Google or the custom system
  depending on the login method
- **Clean Account Deletion** — All linked data is removed in cascade

---

### 🔄 Weclapp ERP Integration

For one month different ERP systems were evaluated — Lexware, Sync4, Desk4
and finally **Weclapp** as the winner. The deciding factor was REST API quality:
only Weclapp supported product variants, tiered pricing and complex product properties
without an intermediate system.

A **Celery automation** synchronizes every 30 minutes:
```
Weclapp REST API
      ↓  (every 30 min via Celery)
Django Backend
      ↓  (prepared for the shop)
PostgreSQL
      ↓  (optimally served)
Angular Frontend
```

The frontend knows nothing about Weclapp — it always receives clean,
cached data from the shop's own database for maximum performance.

Additionally, Weclapp was integrated for **customer management**: after a purchase,
the customer is automatically created in Weclapp, the invoice is generated and sent.
The delivery status is visible to the customer in real time.

![Weclapp API Product View](/img/projects/fs-gmbh/products.png)

---

### 🛍️ Product Filter

Inspired by Amazon, a complex **live filter system** was built:

- Multiple filters combinable (category, properties, price, etc.)
- Live display of how many products remain for each filter combination
- Instant results without page reload

![Product Filter](/img/projects/fs-gmbh/filter.png)
---

### 💳 Stripe Checkout

![Checkout](/img/projects/fs-gmbh/checkout.png)

Price calculations happen **exclusively in the backend** — the frontend only displays,
never calculates. Manipulated prices in the frontend are completely ignored by the backend,
as it always validates against the live-synchronized Weclapp prices.

- Server-side cart management
- Stripe integration for secure payment processing
- Price validation against Weclapp live data at checkout

---

### 📧 Email & Newsletter

- Transactional emails (order confirmation, shipping status, invoices)
- Course registrations via forms
- Support contact via email
- Newsletter integration with opt-in system

---

### 🏗️ Infrastructure

- **VPS** — Set up and configured independently
- **Fail2Ban** — Protection against brute-force attacks
- **Nginx Reverse Proxy** — SSL, routing, performance
- **GitHub Actions CI/CD** — Fully automated deploy on every push
- **Docker Compose** — All services orchestrated and reproducible

---

## What I Learned

This project was a different dimension from everything before — not a learning project,
but a real product for a real client with real requirements:

- **Time Management & Planning** — What goes fast, what takes time, how to communicate
  progress in daily meetings
- **Architecture Decisions** — The architecture was reworked 10+ times as the
  project kept growing. I learned to think modular early on
- **ERP Evaluation** — Professionally evaluating different systems over a month
  and providing a reasoned recommendation
- **Edge Cases in Auth Systems** — What can go wrong and what needs to be secured
  when real users use a login system
- **Price Security** — Why you should never trust the frontend when money is involved
- **Custom Animations** — Built slider and confetti animations from scratch instead of
  relying on libraries (GSAP)
- **Accessibility & Legal** — WCAG, terms of service, privacy policy as real requirements

---

## Links

- 🔒 GitHub Repository — Private (commercial project)
- 🌐 [Live Website](https://fs-schleiftechnik.de/)
