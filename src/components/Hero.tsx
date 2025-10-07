import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dekor: Schlangenlinien-Hintergrund */}
      <svg
        className="pointer-events-none absolute -top-20 left-1/2 h-[120%] -translate-x-1/2 -z-10 opacity-15"
        viewBox="0 0 1200 800"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="subtleGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>

          <pattern id="subtlePattern" width="200" height="120" patternUnits="userSpaceOnUse">
            <path d="M0,60 C50,0 150,120 200,60" fill="none" stroke="url(#subtleGrad)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#subtlePattern)" />
      </svg>

      <div className="mx-auto max-w-6xl px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Textseite */}
        <div>
          <p className="text-gray-400 text-sm tracking-wide font-bold">
            André Diekmann · Web Developer
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Code. Create. Inspire.
          </h1>
          <p className="mt-6 text-lg text-gray-400 font-bold">
            Clean architecture, klare Komponenten & pragmatische Lösungen.
            React/TypeScript, Node & Mongo – mit Fokus auf UX und Performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-2xl border border-gray-400 text-gray-400 font-bold hover:bg-gray-300/10 hover:border-gray-300 hover:text-gray-300 hover:shadow-[0_0_15px_-5px_rgba(156,163,175,.4)] transition-all duration-300"
            >
              Projekte ansehen
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 rounded-2xl border border-gray-400 text-gray-400 font-bold hover:bg-gray-300/10 hover:border-gray-300 hover:text-gray-300 hover:shadow-[0_0_15px_-5px_rgba(156,163,175,.4)] transition-all duration-300"
            >
              Über mich
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2 text-sm text-gray-500 font-bold">
            <li className="px-3 py-1 rounded-xl bg-gray-800/50">React</li>
            <li className="px-3 py-1 rounded-xl bg-gray-800/50">TypeScript</li>
            <li className="px-3 py-1 rounded-xl bg-gray-800/50">Node</li>
            <li className="px-3 py-1 rounded-xl bg-gray-800/50">MongoDB</li>
            <li className="px-3 py-1 rounded-xl bg-gray-800/50">Tailwind</li>
          </ul>
        </div>

        {/* Bild-/Previewseite */}
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[2rem] bg-blue-500/20 blur-3xl opacity-40 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-[2rem] overflow-hidden">
            <img 
              src="/images/André-Art-Blue.jpg" 
              alt="André Diekmann" 
              className="h-full w-full object-cover"
            />
            {/* Fließender Übergang zum Hintergrund */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark/60 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/40 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-dark/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
