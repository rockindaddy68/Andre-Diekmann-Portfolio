import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const base = "px-4 py-2 rounded-xl font-bold transition-all duration-300";
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? `${base} border border-gray-300 text-gray-300 hover:bg-gray-300/10 hover:border-gray-200 hover:text-gray-200 hover:shadow-[0_0_15px_-5px_rgba(209,213,219,.4)]` 
      : `${base} border border-gray-400 text-gray-400 hover:bg-gray-300/10 hover:border-gray-300 hover:text-gray-300 hover:shadow-[0_0_15px_-5px_rgba(156,163,175,.4)]`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-dark/90 border-b border-gray-700/50">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-300 hover:text-gray-200 hover:drop-shadow-[0_0_8px_rgba(156,163,175,.4)] transition-all duration-300">
          André Diekmann
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/projects" className={active}>Projekte</NavLink>
          <NavLink to="/about" className={active}>Über mich</NavLink>
        </div>
      </nav>
    </header>
  );
}
