import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlusCircle, FloppyDisk, FirstAidKit, CurrencyDollar, Image, Tag } from "phosphor-react";
import { toast } from "react-toastify";
import { buscar, cadastrar, atualizar } from "../../../services/Service";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    foto: "",
    categoria: null
  });

  async function buscarProdutoPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (e) {
      toast.error("Erro ao carregar o produto.");
      console.error(e);
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error) {
      console.error("Erro ao carregar as categorias.", error);
    }
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    
    if (name === "categoria") {
      const categoriaEncontrada = categorias.find((cat) => cat.id === Number(value));
      setProduto({
        ...produto,
        categoria: categoriaEncontrada || null
      });
    } else {
      setProduto({
        ...produto,
        [name]: name === "preco" ? Number(value) : value,
      });
    }
  }

  async function gerarNovoProduto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!produto.categoria?.id) {
      toast.error("Selecione uma categoria para o produto!");
      return;
    }

    try {
      if (id !== undefined) {
        await atualizar("/produtos", produto, setProduto);
        toast.success("Produto atualizado com sucesso!");
      } else {
        await cadastrar("/produtos", produto, setProduto);
        toast.success("Produto cadastrado com sucesso!");
      }
      navegar();
    } catch (error) {
      toast.error("Houve um erro ao salvar o produto.");
      console.error("Erro ao salvar", error);
    }
  }

  function navegar() {
    navigate("/produtos");
  }

  const isEdit = id !== undefined;

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl w-full max-w-2xl p-8 sm:p-10 relative overflow-hidden animate-fade-in-up">
        
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500" />

        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-cyan-100/50">
            {isEdit ? <FloppyDisk size={32} weight="duotone" /> : <PlusCircle size={32} weight="duotone" />}
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            {isEdit ? "Editar Produto" : "Novo Produto"}
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            {isEdit ? "Altere as informações do produto abaixo." : "Cadastre um novo produto na farmácia."}
          </p>
        </div>

        <form onSubmit={gerarNovoProduto} className="flex flex-col gap-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <FirstAidKit size={16} className="text-cyan-500" weight="bold" />
                Nome do Produto
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Ex: Tylenol 750mg"
                name="nome"
                required
                value={produto.nome}
                onChange={atualizarEstado}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="preco" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <CurrencyDollar size={16} className="text-cyan-500" weight="bold" />
                Preço (R$)
              </label>
              <input
                type="number"
                id="preco"
                step="0.01"
                min="0"
                placeholder="0.00"
                name="preco"
                required
                value={produto.preco || ''}
                onChange={atualizarEstado}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="foto" className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Image size={16} className="text-cyan-500" weight="bold" />
              URL da Foto
            </label>
            <input
              type="text"
              id="foto"
              placeholder="https://..."
              name="foto"
              value={produto.foto}
              onChange={atualizarEstado}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="categoria" className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Tag size={16} className="text-cyan-500" weight="bold" />
              Categoria
            </label>
            <select
              id="categoria"
              name="categoria"
              required
              value={produto.categoria?.id || ""}
              onChange={atualizarEstado}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
            >
              <option value="" disabled>Selecione uma categoria</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 mt-4 md:col-span-2">
            <button
              type="button"
              onClick={navegar}
              className="px-6 py-3 rounded-xl font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-all w-1/3"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={produto.nome === "" || produto.preco <= 0}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-700 shadow-md shadow-cyan-600/20 active:scale-[0.98] transition-all w-2/3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEdit ? "Salvar Alterações" : "Cadastrar Produto"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default FormProduto;
