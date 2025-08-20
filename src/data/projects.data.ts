import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "ai-notes-summarizer",
    title: "AI Notes Summarizer",
    description: "Notizen zusammenfassen, Highlights extrahieren, Export.",
    tech: ["React", "TypeScript", "OpenAI API"],
    repo: "https://github.com/username/ai-notes-summarizer",
    demo: "#",
    image: "/images/ai-notes.jpg",
    status: "featured",
    year: 2025,
  },
  {
    id: "jam",
    title: "Bewerbungsmanager JAM",
    description: "Dokumente verwalten, Anschreiben generieren, Status-Tracking.",
    tech: ["Node.js", "Express", "MongoDB"],
    repo: "https://github.com/username/jam",
    demo: "#",
    status: "featured",
    year: 2024,
  },
  {
    id: "radanor",
    title: "Radanor – Bike Shop",
    description:
      "Abschlussprojekt WebDev-Kurs: Fiktiver Fahrradhersteller mit Produktlisten, Warenkorb und (Mock-)Checkout.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB"],
    image: "/images/radanor.jpg",
    status: "featured",
    year: 2025,
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description:
      "Eigene Portfolio-Seite: Dark Theme, React/TS, Router, Tailwind. Deployment via GitHub Pages.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    repo: "https://github.com/AndreDiekmannWebDev/Andre-Diekmann-Portfolio",
    // demo: "https://andrediekmannwebdev.github.io/Andre-Diekmann-Portfolio/",
    image: "/images/portfolio.jpg",
    status: "featured",
    year: 2025,
  },
  {
    id: "city-guide-js",
    title: "City Guide (Vanilla JS)",
    description:
      "Abschlussprojekt (JS): Stadtführer mit Suche/Filter. Frühes Lernprojekt – zeigt die Schritte bis heute.",
    tech: ["HTML", "CSS", "JavaScript"],
    // repo: "https://github.com/AndreDiekmannWebDev/city-guide",
    // demo: "#",
    image: "/images/city-guide.jpg",
    status: "legacy",
    year: 2023,
  },
];
