import { Link } from "react-router-dom";
import { PencilSimple, Trash, Tag } from "phosphor-react";
import type Categoria from "../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group">

      <div className="p-6 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-cyan-50 text-cyan-600 p-1.5 rounded-lg">
            <Tag size={18} weight="fill" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Categoria</span>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 break-words group-hover:text-cyan-700 transition-colors">
          {categoria.nome}
        </h2>
      </div>


      <div className="border-t border-slate-50 bg-slate-50/50 p-4 flex justify-between gap-3">
        <Link to={`/editarCategoria/${categoria.id}`} className="flex-1">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800 transition-colors border border-transparent hover:border-cyan-100">
            <PencilSimple size={18} weight="bold" />
            Editar
          </button>
        </Link>

        <div className="w-[1px] bg-slate-200" />

        <Link to={`/deletarCategoria/${categoria.id}`} className="flex-1">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors border border-transparent hover:border-rose-100">
            <Trash size={18} weight="bold" />
            Excluir
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;