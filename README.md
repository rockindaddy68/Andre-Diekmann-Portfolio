# André Diekmann – Portfolio

Modernes, responsives Portfolio mit holografischem Design und personalisierten Farbpaletten.

## ✨ Features

- **Holografische Foto-Integration** - Persönliches Foto mit fließenden Gradient-Übergängen
- **Projekt-Showcase** - Kuratierte Auswahl mit Screenshots und "More"-Buttons
- **Minimalistisches Design** - Clean, ohne Navbar für fokussierte Benutzererfahrung
- **Responsive Layout** - Mobile-first Design mit Tailwind CSS
- **TypeScript** - Typsichere Entwicklung
- **Hot Module Replacement** - Schnelle Entwicklung mit Vite

## 🛠 Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS (PostCSS Build)
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Version Control:** Git
- **Design System:** Custom holographische Farbpalette

## 🚀 Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build

# Preview der Production Build
npm run preview
```

Der Entwicklungsserver läuft auf `http://localhost:5174/`

## 📂 Projektstruktur

```
src/
├── components/
│   ├── Hero.tsx          # Hauptbereich mit Foto und CTA
│   ├── Projects.tsx      # Projekt-Showcase mit Karten
│   ├── About.tsx         # Über-mich Sektion
│   └── Footer.tsx        # Footer mit Links
├── data/
│   └── projects.data.ts  # Projekt-Konfiguration
├── types/
│   └── project.ts        # TypeScript Interfaces
├── App.tsx               # Hauptkomponente
├── main.tsx             # App Entry Point
└── index.css            # Global Styles

public/
├── images/
│   ├── André-Art-Blue.jpg    # Holografisches Porträt
│   ├── melting-pott.jpg      # Projekt Screenshots
│   ├── radanor-shop.jpg
│   └── portfolio.jpg
└── vite.svg
```

## 🎨 Design System

**Holographische Farbpalette:**
- Primäre Farben aus dem persönlichen Foto extrahiert
- Fließende Gradient-Übergänge
- Einheitliche Grau-Töne für Buttons und UI-Elemente
- Responsive Typography

## 📱 Projekte

1. **Melting Pott** - Event-Website mit moderner UI
2. **Radanor** - E-Commerce Platform mit Admin-Dashboard  
3. **Portfolio Website** - Diese Portfolio-Seite (Meta-Projekt)
4. **Words** - Songtexte-Finder für Musikstücke
5. **City Guide** - Location-based Web App

## 🔄 Git Workflow

```bash
# Änderungen committen
git add .
git commit -m "feat: Neue Funktionalität hinzugefügt"

# Zu GitHub pushen
git push origin main
```

## 📈 Aktuelle Features

✅ Holografisches Foto mit Gradient-Overlays  
✅ Projekt-Reordering (Radanor auf Position 2)  
✅ Portfolio als Meta-Projekt integriert  
✅ "More"-Buttons für Screenshot-Demos  
✅ Navbar entfernt für cleanes Design  
✅ Einheitliche Farbgebung  
✅ Responsive Design  
✅ TypeScript Integration

## 🚀 Deployment (GitHub Pages)

### Automatisches Deployment via GitHub Actions

```yaml
# .github/workflows/deploy.yml
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
```

**Setup:**
1. Repository → Settings → Pages → Build from GitHub Actions
2. Push zu `main` Branch triggert automatisches Deployment
3. Portfolio wird verfügbar unter: `https://rockindaddy68.github.io/Andre-Diekmann-Portfolio/`

## 📊 Performance

- **Vite HMR** - Schnelle Entwicklung mit Hot Module Replacement
- **TypeScript** - Compile-time Fehlerprüfung
- **Tailwind CSS** - Optimierte CSS-Bundles
- **React 18** - Moderne React Features

## 🔮 Roadmap

- [ ] GitHub Pages Deployment aktivieren
- [ ] Words (Lyrics-Finder) upgraden und als Demo integrieren
- [ ] City Guide Projekt upgraden und integrieren
- [ ] Animationen und Micro-Interactions
- [ ] SEO-Optimierung
- [ ] Performance-Monitoring

## 🤝 Entwicklung

Dieses Portfolio wurde iterativ entwickelt mit Fokus auf:
- **User Experience** - Intuitive Navigation und ehrliche Button-Labels
- **Design Konsistenz** - Einheitliche Farbpalette und Typography  
- **Code Qualität** - TypeScript, saubere Komponenten-Architektur
- **Git Best Practices** - Aussagekräftige Commits und Branching

## 📄 Lizenz

© 2025 André Diekmann. Persönliches Portfolio-Projekt.

---

**Entwickelt mit ❤️ in React + TypeScript + Tailwind CSS**