André Diekmann – Portfolio

Aktueller Stand: Vite + React + TypeScript + Tailwind (via CDN)
Dark Theme aktiv (Custom Colors: dark, light, accent). Routing: Home / Projects / About.

🛠 Stack

Vite + React + TypeScript

Tailwind CSS (derzeit über CDN eingebunden)

React Router v6+

▶️ Entwicklung (lokal)
npm run dev -- --host --port 5174 --force


Öffne die URL aus dem Terminal (z. B. http://localhost:5174/).

📂 Struktur
src/
 ├─ components/
 │   ├─ Navbar.tsx
 │   ├─ Hero.tsx
 │   ├─ Projects.tsx
 │   ├─ About.tsx
 │   └─ Footer.tsx
 ├─ data/
 │   └─ projects.data.ts
 ├─ types/
 │   └─ project.ts
 ├─ App.tsx
 ├─ main.tsx
 └─ index.css

🖼 Screenshots (optional)

Hier später ein, zwei Screens (Home, Projects) einfügen.

🧭 Roadmap / Nächste Schritte

Hero veredeln (SVG-Pattern, zentriert, CTA)

Projects: Karten mit Glow, echte Repo-/Demo-Links

Footer finalisieren

Tailwind-Build via PostCSS wieder aktivieren (statt CDN)

🚀 Deployment (GitHub Pages, optional)

Wenn du GitHub Pages nutzen willst, ergänze:

vite.config.ts mit dem korrekten base (Repo-Name einsetzen):

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Andre-Diekmann-Portfolio/", // <- Repo-Name hier eintragen
});


Workflow .github/workflows/deploy.yml:

name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}


In GitHub: Settings → Pages → Build from GitHub Actions (wird durch den Workflow aktiv).

© Lizenz (optional)

Privates Portfolio-Projekt. Keine Wiederverwendung ohne Rücksprache.