import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, cadastrar, atualizar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({
    nome: "",
  });

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
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

    if (id !== undefined) {
      await atualizar("/categorias", categoria, setCategoria);
    } else {
      await cadastrar("/categorias", categoria, setCategoria);
    }

    navegar();
  }

  function navegar() {
    navigate("/categorias");
  }

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col w-1/2 gap-4"
        onSubmit={gerarNovaCategoria}
      >
        <h1 className="text-3xl font-bold text-center">
          {id ? "Editar Categoria" : "Cadastrar Categoria"}
        </h1>

        <input
          type="text"
          placeholder="Nome da categoria"
          name="nome"
          value={categoria.nome}
          onChange={atualizarEstado}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded"
        >
          {id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;