import { useEffect, useState } from "react";
import { Pill } from "phosphor-react";
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
    <div className="w-full min-h-[calc(100vh-80px)] bg-slate-50 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12 animate-fade-in-up">
          <div className="bg-cyan-100 p-3 rounded-2xl text-cyan-600 mb-4 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Pill size={32} weight="fill" />
          </div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight text-center">
            Categorias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Produtos</span>
          </h1>
          <p className="mt-2 text-slate-500 text-center max-w-md">
            Gerencie as classificações do sistema organizando seus itens de forma otimizada.
          </p>
        </div>

        {categorias.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 rounded-full border-4 border-cyan-200 border-t-cyan-600 animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up animation-delay-200">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListaCategorias;