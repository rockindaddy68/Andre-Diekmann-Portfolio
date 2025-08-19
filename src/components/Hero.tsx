import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <>
      {/* Testblock: nur zum Prüfen, ob bg-dark funktioniert */}
      <section className="bg-dark text-light p-10">
        Test Custom Colors: Sollte dunkel mit heller Schrift sein.
      </section>

      {/* deine eigentliche Hero-Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-light">
            Code. Create. Inspire.
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Ich bin André – Full-Stack Developer in Ausbildung. 
            Mein Fokus: Klarheit im Code und starke User Experience.
          </p>
        </div>
      </section>
    </>
  );
}
