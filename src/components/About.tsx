export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h2 className="text-3xl font-bold">Über mich</h2>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Ich bin André, Web Developer (Full-Stack in Ausbildung). 
        Mein Fokus liegt auf klarer Architektur, Wiederverwendbarkeit 
        und pragmatischen Lösungen. Derzeit vertiefe ich React/TS, 
        Node/Express und MongoDB.
      </p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-800">
        <li className="rounded-xl border p-4">React • TypeScript • Vite</li>
        <li className="rounded-xl border p-4">Node.js • Express • REST</li>
        <li className="rounded-xl border p-4">MongoDB • Mongoose • ODM</li>
        <li className="rounded-xl border p-4">Tailwind CSS • UI/UX</li>
      </ul>
    </section>
  );
}

