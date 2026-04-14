import { Link } from "react-router-dom";
import { PencilSimple, Trash, FirstAidKit, CurrencyDollar } from "phosphor-react";
import type Produto from "../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group">
      
      {produto.foto && (
        <div className="h-48 overflow-hidden bg-slate-50 flex items-center justify-center">
          <img src={produto.foto} alt={produto.nome} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-cyan-50 text-cyan-600 p-1.5 rounded-lg">
            <FirstAidKit size={18} weight="fill" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {produto.categoria?.nome || 'Sem Categoria'}
          </span>
        </div>

        <h2 className="text-xl font-bold text-slate-800 break-words group-hover:text-cyan-700 transition-colors line-clamp-2 mb-2">
          {produto.nome}
        </h2>
        
        <div className="mt-auto pt-4 flex items-center gap-2 text-cyan-600 font-bold text-lg">
          <CurrencyDollar size={24} weight="bold" />
          <span>
            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}
          </span>
        </div>
      </div>

      <div className="border-t border-slate-50 bg-slate-50/50 p-4 flex justify-between gap-3">
        <Link to={`/editarProduto/${produto.id}`} className="flex-1">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800 transition-colors border border-transparent hover:border-cyan-100">
            <PencilSimple size={18} weight="bold" />
            Editar
          </button>
        </Link>

        <div className="w-[1px] bg-slate-200" />

        <Link to={`/deletarProduto/${produto.id}`} className="flex-1">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors border border-transparent hover:border-rose-100">
            <Trash size={18} weight="bold" />
            Excluir
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduto;
