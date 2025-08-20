import { projects } from "../data/projects.data";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header>
        <h2 className="text-4xl font-bold text-accent">Projekte</h2>
        <p className="mt-2 text-gray-400">
          Ausgewählte Arbeiten – mit Fokus auf saubere Architektur & UX.
        </p>
      </header>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group relative rounded-2xl border border-gray-700 bg-gray-900/80 p-6 shadow-lg transition
                       hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)]"
          >
            {/* Glow-Accent */}
            <div
              className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-2xl
                         transition group-hover:opacity-30"
              style={{
                background:
                  "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.25), transparent 40%)",
              }}
              aria-hidden="true"
            />

            {/* Bild / Placeholder */}
            <div className="relative mb-4 overflow-hidden rounded-xl border border-gray-700 bg-gray-800">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-700 grid place-items-center">
                  <span className="text-gray-500 text-sm">Kein Bild · Placeholder</span>
                </div>
              )}
            </div>

            <h3 className="text-xl font-semibold text-light">{p.title}</h3>
            <p className="mt-2 text-gray-400">{p.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              {p.tech.map((t) => (
                <li key={t} className="px-2 py-1 rounded-lg bg-gray-800 text-gray-300">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              {p.demo && (
                <a
                  className="px-4 py-2 rounded-xl border border-accent text-accent hover:bg-accent hover:text-dark transition"
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  className="px-4 py-2 rounded-xl bg-accent text-dark font-semibold hover:brightness-110 transition"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
