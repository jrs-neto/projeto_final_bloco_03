import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Warning, Trash, X, Tag } from "phosphor-react";
import { toast } from "react-toastify";
import { buscar, deletar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function DeleteCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria | null>(null);

  useEffect(() => {
    if (id !== undefined) {
      buscar(`/categorias/${id}`, setCategoria);
    }
  }, [id]);

  async function confirmarDelete() {
    if (id !== undefined) {
      try {
        await deletar(`/categorias/${id}`);
        toast.success("Categoria deletada com sucesso!");
      } catch (error) {
        toast.error("Erro ao deletar a categoria.");
        console.error(error);
      }
    }
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center p-6">

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl w-full max-w-lg overflow-hidden animate-fade-in-up">

        <div className="p-10 flex flex-col items-center text-center">

          <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-6 shadow-inner ring-8 ring-rose-50/50">
            <Warning size={40} weight="duotone" />
          </div>

          <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-3">
            Excluir Categoria
          </h1>
          <p className="text-slate-500">
            Você tem certeza que deseja excluir esta categoria? <br /> Esta ação é irreversível.
          </p>


          <div className="w-full mt-8 bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500 rounded-l-2xl group-hover:bg-rose-500 transition-colors" />

            <div className="flex items-center gap-2 mb-2">
              <Tag size={16} className="text-cyan-600" weight="fill" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Categoria Selecionada</span>
            </div>

            {categoria ? (
              <h2 className="text-xl font-bold text-slate-800 ml-1">
                {categoria.nome}
              </h2>
            ) : (
              <div className="h-7 w-48 bg-slate-200 rounded animate-pulse ml-1" />
            )}
          </div>
        </div>


        <div className="bg-slate-50 border-t border-slate-100 p-6 flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4">
          <button
            onClick={retornar}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 hover:text-slate-800 transition-all"
          >
            <X size={20} weight="bold" />
            Cancelar
          </button>

          <button
            onClick={confirmarDelete}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-rose-500 shadow-md shadow-rose-500/20 hover:bg-rose-600 hover:shadow-rose-600/30 active:scale-[0.98] transition-all"
          >
            <Trash size={20} weight="bold" />
            Excluir Categoria
          </button>
        </div>
      </div>

    </div>
  );
}

export default DeleteCategoria;