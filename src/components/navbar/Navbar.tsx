import { Link } from "react-router-dom";
import { Pill } from "phosphor-react";

function Navbar() {
  return (
    <nav className="w-full glass-nav sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/home" className="flex items-center gap-2 group">
          <div className="bg-cyan-600 p-2 rounded-xl text-white group-hover:bg-cyan-700 transition-colors">
            <Pill size={24} weight="fill" />
          </div>
          <span className="text-2xl font-black text-slate-800 tracking-tight">
            Farma<span className="text-cyan-600">Vida</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-8 items-center font-medium text-slate-600 text-sm">
          <Link to="/home" className="hover:text-cyan-600 transition-colors">Início</Link>
          <Link to="/categorias" className="hover:text-cyan-600 transition-colors">Categorias</Link>
          <Link to="/cadastroCategoria" className="px-5 py-2.5 rounded-full border border-slate-200 hover:border-cyan-600 hover:text-cyan-600 transition-all bg-white shadow-sm">
            Nova Categoria
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;