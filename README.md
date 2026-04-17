# Adrian Enßlin – Portfolio

Personal portfolio website built with Docusaurus 3, React and TypeScript. The site showcases projects, expertise and a personal blog – fully containerized and production-ready.

## Table of contents
1. [Prerequisites](#prerequisites)
2. [Quickstart](#quickstart)
3. [Project Structure](#project-structure)
4. [Usage](#usage)
5. [Docker commands](#docker-commands)
6. [Author](#author)

## Prerequisites

- Node.js 20+
- npm
- Docker & Docker Compose (optional, for containerized deployment)

## Quickstart

```bash
# Clone the repository
git clone git@github.com:EnsslinAdrian/portfolio-docs.git
cd portfolio-docs

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`.

## Project Structure

```
|-- 📁 .github
|  |-- 📁 workflows
|  |  |-- ⚙️ docker-image.yml
|
|-- 📁 blog
|  |-- 📄 authors.yml
|  |-- 📄 tags.yml
|  |-- 📁 [blog articles]
|
|-- 📁 docs
|  |-- 📁 Backend
|  |-- 📁 DevSecOps
|  |-- 📁 Frontend
|  |-- 📁 Security
|  |-- 📁 Websites
|
|-- 📁 nginx
|  |-- ⚙️ default.conf
|
|-- 📁 src
|  |-- 📁 components
|  |  |-- 📁 BackgroundGrid
|  |  |-- 📁 Connect
|  |  |-- 📁 Cursor
|  |  |-- 📁 Expertise
|  |  |-- 📁 Hero
|  |  |-- 📁 Projects
|  |-- 📁 css
|  |-- 📁 pages
|  |-- 📁 theme
|
|-- 📁 static
|  |-- 📁 img
|  |-- 📄 Lebenslauf.pdf
|
|-- ⚙️ docusaurus.config.ts
|-- ⚙️ sidebars.ts
|-- ⚙️ tsconfig.json
|-- 📄 Dockerfile
|-- 📄 docker-compose.yml
|-- 📄 package.json
|-- ℹ️ README.md
```

## Usage

```bash
# Start development server
npm start

# Create production build
npm run build

# Preview production build locally
npm run serve

# TypeScript check
npm run typecheck

# Clear cache
npm run clear
```

## Docker commands

Build & Start

```bash
docker compose up -d --build
```

Stop

```bash
docker compose down
```

Remove containers & volumes

```bash
docker compose down -v
```

Restart

```bash
docker compose restart
```

### Useful Docker commands

List running containers

```bash
docker ps
```

View logs

```bash
docker compose logs -f
```

## Author
**Adrian Enßlin**
