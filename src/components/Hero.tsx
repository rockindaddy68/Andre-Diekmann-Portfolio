import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dekor: Schlangenlinien-Hintergrund */}
      <svg
        className="pointer-events-none absolute -top-20 left-1/2 h-[120%] -translate-x-1/2 -z-10 opacity-25"
        viewBox="0 0 1200 800"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          </linearGradient>

          <pattern id="squiggles" width="200" height="120" patternUnits="userSpaceOnUse">
            <path d="M0,60 C50,0 150,120 200,60" fill="none" stroke="url(#grad)" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#squiggles)" />
      </svg>

      <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Textseite */}
        <div>
          <p className="text-accent/80 text-sm tracking-widest uppercase">
            André Diekmann · Web Developer
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-accent/90 to-white/90 bg-clip-text text-transparent">
            Code. Create. Inspire.
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Clean architecture, klare Komponenten & pragmatische Lösungen.
            React/TypeScript, Node & Mongo – mit Fokus auf UX und Performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-2xl bg-accent text-dark font-semibold shadow-[0_0_30px_-10px_rgba(56,189,248,.8)] hover:brightness-110 transition"
            >
              Projekte ansehen
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-2xl border border-gray-600 hover:bg-gray-800"
            >
              Über mich
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2 text-sm text-gray-400">
            <li className="px-3 py-1 rounded-xl bg-gray-800/70">React</li>
            <li className="px-3 py-1 rounded-xl bg-gray-800/70">TypeScript</li>
            <li className="px-3 py-1 rounded-xl bg-gray-800/70">Node</li>
            <li className="px-3 py-1 rounded-xl bg-gray-800/70">MongoDB</li>
            <li className="px-3 py-1 rounded-xl bg-gray-800/70">Tailwind</li>
          </ul>
        </div>

        {/* Bild-/Previewseite */}
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-3xl opacity-40 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-[2rem] border border-gray-700 bg-gray-900 flex items-center justify-center overflow-hidden">
            {/* Optional: eigenes Bild einblenden */}
            {/* <img src="/avatar.jpg" alt="André Diekmann" className="h-full w-full object-cover" /> */}
            <span className="text-gray-500">[ Platz für Foto / Screenshot ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
