---
title: Aden UI Community
sidebar_position: 4
---

# Aden UI Community

**Aden UI Community** is a two-part project: a personal collection of
reusable Angular components and frontend guides — and at the same time an
open platform where other developers can submit their own components.

## The Idea Behind the Project

Anyone who works with Angular for a while ends up rebuilding the same components over and over.
Aden UI solves that: frequently used components are built once, documented cleanly
and stored centrally. On top of that, there are custom frontend guides —
a personal reference for concepts and patterns you'd otherwise have to look up constantly.

The community aspect goes a step further: other developers can submit their own
components, which are reviewed and published on the official platform
[adenui.com](https://adenui.com).

## The Aden UI Workbench

The heart of the project is the **Workbench** — a local lab where
components can be developed, tested and previewed before being submitted.
```
ng s -o   →   http://localhost:4200
```

Each component has three tabs in the playground:
- **Preview** — Live rendering of the component
- **Code** — Automatically loaded source files
- **Docs** — Generated API reference from `docs.md`

## Tech Stack

`Angular 18+` `TypeScript` `Angular Signals` `SCSS` `Design Tokens`

## Project Structure
```
aden-ui-community/
└── 📁 src/
    ├── 📁 app/
    │   ├── 📁 contributions/        # Your workspace
    │   │   └── 📁 my-contribution/
    │   │       ├── 📁 interfaces/   # (Optional) Type definitions
    │   │       ├── 📁 services/     # (Optional) Logic services
    │   │       ├── 📁 my-component/ # Component logic & templates
    │   │       ├── 📄 docs.md       # Technical documentation
    │   │       ├── 📄 my-contribution.ts   # Playground bridge
    │   │       └── 📄 my-contribution.html # Visual wrapper
    │   ├── 📁 pages/workbench/      # Register component here
    │   └── 📁 shared/               # Internal UI engine
    └── 📄 _variables.scss           # Global design tokens
```

## Technical Requirements for Contributions

Components must meet the following standards to be accepted:

- **Standalone** — `standalone: true` is required
- **Signals** — `input()`, `output()`, `signal()`, `computed()` instead of classic decorators
- **Responsive** — Works down to 320px width
- **Design Tokens** — No hardcoded hex colors, always use `--aden-` variables from `_variables.scss`
- **Playground** — Templates must be wrapped in `<app-ui-playground>`
- **Docs** — Technical API description goes in `docs.md`, not as JSDoc comments

## Submitting a Contribution
```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/aden-ui-community.git

# 2. Install dependencies
npm install

# 3. Start the workbench
ng s -o

# 4. Develop your component under src/app/contributions/

# 5. Commit and push
git add .
git commit -m "feat: added [component name]"
git push origin main

# 6. Submit your fork URL at adenui.com/contribution
```

## What I Learned

Aden UI is less of a learning project and more of an efficiency project — the focus was on
clean architecture, modern Angular patterns and a developer experience that feels professional:

- **Angular Signals** — Modern reactive state management without `@Input()`/`@Output()`
- **Design Token System** — Consistent UI through central SCSS variables instead of inline styles
- **Component API Design** — Building components so that others can use them intuitively
- **Building Developer Tools** — Developing a workbench that helps other developers

## Links

- [GitHub Repository](https://github.com/EnsslinAdrian/Aden-UI-Community)
- [Official Platform](https://adenui.com)
- [Submit a Component](https://adenui.com/contribution)
