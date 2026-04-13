import { useNavigate, useParams } from "react-router-dom";
import { deletar } from "../../../services/Service";

function DeleteCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function confirmarDelete() {
    if (id !== undefined) {
      await deletar(`/categorias/${id}`);
    }
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded shadow flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">
          Deseja deletar a categoria?
        </h1>

        <div className="flex gap-4">
          <button
            onClick={confirmarDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sim
          </button>

          <button
            onClick={retornar}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCategoria;