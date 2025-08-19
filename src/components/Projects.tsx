import { projects } from "../data/projects.data";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-4xl font-bold text-accent">Projekte</h2>
      <p className="mt-2 text-gray-400">Ausgewählte Arbeiten & Lernprojekte</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <article key={p.id} className="rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-lg hover:shadow-accent/30 transition">
            <h3 className="text-2xl font-semibold text-light">{p.title}</h3>
            <p className="mt-3 text-gray-400">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2 text-sm">
              {p.tech.map((t) => (
                <li key={t} className="px-2 py-1 rounded-lg bg-gray-800 text-gray-300">{t}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {p.demo && (
                <a className="px-4 py-2 rounded-xl border border-accent text-accent hover:bg-accent hover:text-dark transition" href={p.demo} target="_blank" rel="noreferrer">Demo</a>
              )}
              {p.repo && (
                <a className="px-4 py-2 rounded-xl bg-accent text-dark font-semibold" href={p.repo} target="_blank" rel="noreferrer">Code</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
