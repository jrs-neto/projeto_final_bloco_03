import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Pill, MagnifyingGlass, Funnel } from "phosphor-react";
import { buscar } from "../../../services/Service";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import CardProduto from "../CardProduto";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const termoPesquisa = searchParams.get("q") || "";
  const categoriaFiltro = searchParams.get("categoria") || "";

  async function buscarProdutos() {
    setCarregando(true);
    try {
      if (termoPesquisa) {
        await buscar(`/produtos/nome/${encodeURIComponent(termoPesquisa)}`, setProdutos);
      } else {
        await buscar("/produtos", setProdutos);
      }
    } catch {
      setProdutos([]);
    } finally {
      setCarregando(false);
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      console.error("Erro ao carregar categorias", error);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  useEffect(() => {
    buscarProdutos();
  }, [termoPesquisa]);

  const produtosFiltrados = categoriaFiltro
    ? produtos.filter(p => p.categoria?.nome === categoriaFiltro)
    : produtos;

  function handleFiltroCategoria(nome: string) {
    if (nome === "") {
      searchParams.delete("categoria");
    } else {
      searchParams.set("categoria", nome);
    }
    setSearchParams(searchParams);
  }

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-slate-50 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12 animate-fade-in-up">
          <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-600 mb-4 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            {termoPesquisa ? <MagnifyingGlass size={32} weight="fill" /> : <Pill size={32} weight="fill" />}
          </div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight text-center">
            {termoPesquisa ? (
              <>Resultados para <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">"{termoPesquisa}"</span></>
            ) : (
              <>Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Produtos</span></>
            )}
          </h1>
          <p className="mt-2 text-slate-500 text-center max-w-md">
            {termoPesquisa
              ? `${produtosFiltrados.length} produto(s) encontrado(s)`
              : "Encontre medicamentos e itens de cuidado pessoal com os melhores preços."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
              <Funnel size={20} className="text-cyan-500" />
              <span>Filtrar por Categoria:</span>
            </div>

            <select
              value={categoriaFiltro}
              onChange={(e) => handleFiltroCategoria(e.target.value)}
              className="px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all font-medium min-w-[200px] cursor-pointer"
            >
              <option value="">Todas as Categorias</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.nome}>
                  {cat.nome}
                </option>
              ))}
            </select>

            {(termoPesquisa || categoriaFiltro) && (
              <button
                onClick={() => setSearchParams({})}
                className="text-xs text-rose-500 hover:text-rose-600 transition-colors font-bold uppercase tracking-widest flex items-center gap-1 ml-auto"
              >
                Limpar Filtros
              </button>
            )}
          </div>
        </div>

        {carregando ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 rounded-full border-4 border-cyan-200 border-t-cyan-600 animate-spin"></div>
          </div>
        ) : produtosFiltrados.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-slate-400 gap-4">
            <MagnifyingGlass size={48} weight="light" />
            <p className="text-lg font-medium">Nenhum produto encontrado</p>
            <button onClick={() => setSearchParams({})} className="text-sm text-cyan-600 hover:underline font-semibold">Limpar todos os filtros</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up animation-delay-200">
            {produtosFiltrados.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaProdutos;

