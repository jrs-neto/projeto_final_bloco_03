import { Link } from "react-router-dom";
import type Categoria from "../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border flex justify-between items-center p-4 mb-4 rounded shadow">
      <h2 className="text-xl font-semibold">
        {categoria.nome}
      </h2>

      <div className="flex gap-4">
        <Link to={`/editarCategoria/${categoria.id}`}>
          <button className="bg-yellow-400 px-4 py-2 rounded">
            Editar
          </button>
        </Link>

        <Link to={`/deletarCategoria/${categoria.id}`}>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Deletar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;