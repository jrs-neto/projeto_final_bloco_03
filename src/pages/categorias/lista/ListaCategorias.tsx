import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategorias from "../CardCategoria";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias);
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="flex justify-center w-full my-10">
      <div className="container flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-6">
          Lista de Categorias
        </h1>

        {categorias.map((categoria) => (
          <CardCategorias key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}

export default ListaCategorias;