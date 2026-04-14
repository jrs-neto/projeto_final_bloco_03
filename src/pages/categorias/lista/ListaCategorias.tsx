import { useEffect, useState } from "react";
import { Pill, MagnifyingGlass, X } from "phosphor-react";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategorias from "../CardCategoria";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [carregando, setCarregando] = useState(true);

  async function buscarCategorias() {
    setCarregando(true);
    try {
      await buscar("/categorias", setCategorias);
    } catch (e) {
      console.error(e);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  const categoriasFiltradas = categorias.filter(cat => 
    cat.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-slate-50 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12 animate-fade-in-up">
          <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-600 mb-4 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Pill size={32} weight="fill" />
          </div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight text-center">
            Categorias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Produtos</span>
          </h1>
          <p className="mt-2 text-slate-500 text-center max-w-md">
            Gerencie as classificações do sistema organizando seus itens de forma otimizada.
          </p>

          <div className="mt-8 relative w-full max-w-md group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-cyan-500 transition-colors">
              <MagnifyingGlass size={20} weight="bold" />
            </div>
            <input
              type="text"
              placeholder="Buscar categoria..."
              value={termoPesquisa}
              onChange={(e) => setTermoPesquisa(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all font-medium text-slate-700"
            />
            {termoPesquisa && (
              <button 
                onClick={() => setTermoPesquisa("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-rose-500 transition-colors"
              >
                <X size={18} weight="bold" />
              </button>
            )}
          </div>
        </div>

        {carregando ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 rounded-full border-4 border-cyan-200 border-t-cyan-600 animate-spin"></div>
          </div>
        ) : categoriasFiltradas.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-slate-400 gap-4">
            <MagnifyingGlass size={48} weight="light" />
            <p className="text-lg font-medium">Nenhuma categoria encontrada</p>
            {termoPesquisa && (
              <button onClick={() => setTermoPesquisa("")} className="text-sm text-cyan-600 hover:underline">Limpar busca</button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up animation-delay-200">
            {categoriasFiltradas.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaCategorias;