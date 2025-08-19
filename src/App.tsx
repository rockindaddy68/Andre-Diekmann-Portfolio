import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark text-light font-sans">
      <Navbar />

      <section className="bg-red-500 text-white p-6">
  Tailwind LIVE Test
</section>
<section className="bg-dark text-light p-6">Custom Colors</section>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
