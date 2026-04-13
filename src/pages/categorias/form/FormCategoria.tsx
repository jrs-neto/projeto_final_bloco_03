import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlusCircle, FloppyDisk, Tag } from "phosphor-react";
import { toast } from "react-toastify";
import { buscar, cadastrar, atualizar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({
    nome: "",
  });

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (e) {
      toast.error("Erro ao carregar a categoria.");
      console.error(e);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar("/categorias", categoria, setCategoria);
        toast.success("Categoria atualizada com sucesso!");
      } else {
        await cadastrar("/categorias", categoria, setCategoria);
        toast.success("Categoria cadastrada com sucesso!");
      }
      navegar();
    } catch (error) {
      toast.error("Houve um erro ao salvar a categoria.");
      console.error("Erro ao salvar", error);
    }
  }

  function navegar() {
    navigate("/categorias");
  }

  const isEdit = id !== undefined;

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl w-full max-w-lg p-8 sm:p-10 relative overflow-hidden animate-fade-in-up">


        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500" />

        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-cyan-100/50">
            {isEdit ? <FloppyDisk size={32} weight="duotone" /> : <PlusCircle size={32} weight="duotone" />}
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            {isEdit ? "Editar Categoria" : "Nova Categoria"}
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            {isEdit ? "Altere o nome da classificação abaixo." : "Crie uma nova classificação para seus produtos."}
          </p>
        </div>

        <form onSubmit={gerarNovaCategoria} className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Tag size={16} className="text-cyan-500" weight="bold" />
              Nome da Categoria
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Ex: Medicamentos, Cosméticos..."
              name="nome"
              required
              value={categoria.nome}
              onChange={atualizarEstado}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={navegar}
              className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-all w-1/3"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={categoria.nome === ""}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-700 shadow-md shadow-cyan-600/20 active:scale-[0.98] transition-all w-2/3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEdit ? "Salvar Alterações" : "Cadastrar"}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default FormCategoria;