import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const base = "px-3 py-2 rounded-xl font-medium";
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${base} bg-accent text-dark` : `${base} hover:bg-gray-700`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-dark/90 border-b border-gray-700">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-accent">André Diekmann</Link>
        <div className="flex items-center gap-1">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/projects" className={active}>Projects</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
        </div>
      </nav>
    </header>
  );
}
