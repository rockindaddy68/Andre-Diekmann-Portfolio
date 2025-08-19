export default function Footer() {
  return (
    <footer className="border-t border-gray-700 mt-16 bg-dark">
      <div className="mx-auto max-w-6xl px-4 h-20 flex items-center justify-between text-sm text-gray-400">
        <span>© {new Date().getFullYear()} André Diekmann</span>
        <a className="underline hover:text-accent" href="https://github.com/username" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
