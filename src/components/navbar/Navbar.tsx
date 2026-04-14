import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Pill, MagnifyingGlass } from "phosphor-react";

function Navbar() {
  const navigate = useNavigate();
  const [termoPesquisa, setTermoPesquisa] = useState("");

  function handlePesquisa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (termoPesquisa.trim()) {
      navigate(`/produtos?q=${encodeURIComponent(termoPesquisa.trim())}`);
    } else {
      navigate("/produtos");
    }
  }
  return (
    <nav className="w-full glass-nav sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center gap-6">
        <Link to="/home" className="flex items-center gap-2 group shrink-0">
          <div className="bg-cyan-600 p-2 rounded-xl text-white group-hover:bg-cyan-700 transition-colors">
            <Pill size={24} weight="fill" />
          </div>
          <span className="text-2xl font-black text-slate-800 tracking-tight">
            Farma<span className="text-cyan-600">Vida</span>
          </span>
        </Link>

        <form onSubmit={handlePesquisa} className="flex-1 max-w-xl hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 group-focus-within:text-cyan-600 transition-colors">
              <MagnifyingGlass size={20} weight="bold" />
            </div>
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              value={termoPesquisa}
              onChange={(e) => setTermoPesquisa(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-100/80 border-transparent rounded-full text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all shadow-inner"
            />
          </div>
        </form>

        <div className="hidden md:flex gap-6 items-center font-medium text-slate-600 text-sm shrink-0">
          <Link to="/home" className="hover:text-cyan-600 transition-colors">Início</Link>
          <Link to="/categorias" className="hover:text-cyan-600 transition-colors">Categorias</Link>
          <Link to="/produtos" className="hover:text-cyan-600 transition-colors">Produtos</Link>
          <Link to="/cadastroCategoria" className="px-4 py-2.5 rounded-full border border-slate-200 hover:border-cyan-600 hover:text-cyan-600 transition-all bg-white shadow-sm">
            Nova Categoria
          </Link>
          <Link to="/cadastroProduto" className="px-4 py-2.5 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-all shadow-sm shadow-cyan-600/30">
            Novo Produto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;