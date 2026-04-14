import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Pill, MagnifyingGlass, ArrowLeft } from "phosphor-react";
import { buscar } from "../../../services/Service";
import type Produto from "../../../models/Produto";
import CardProduto from "../CardProduto";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [searchParams] = useSearchParams();
  const termoPesquisa = searchParams.get("q") || "";

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

  useEffect(() => {
    buscarProdutos();
  }, [termoPesquisa]);

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
              ? `${produtos.length} produto(s) encontrado(s)`
              : "Encontre medicamentos e itens de cuidado pessoal com os melhores preços."}
          </p>
          {termoPesquisa && (
            <Link to="/produtos" className="mt-4 flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              <ArrowLeft size={16} weight="bold" />
              Ver todos os produtos
            </Link>
          )}
        </div>

        {carregando ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 rounded-full border-4 border-cyan-200 border-t-cyan-600 animate-spin"></div>
          </div>
        ) : produtos.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-slate-400 gap-4">
            <MagnifyingGlass size={48} weight="light" />
            <p className="text-lg font-medium">Nenhum produto encontrado para "{termoPesquisa}"</p>
            <Link to="/produtos" className="text-sm text-cyan-600 hover:underline">Limpar pesquisa</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up animation-delay-200">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaProdutos;

