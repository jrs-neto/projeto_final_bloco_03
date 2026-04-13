import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-blue-600 text-white flex justify-center py-4">
      <div className="container flex justify-between items-center text-lg">
        <Link to="/home" className="text-2xl font-bold uppercase">Farmácia</Link>

        <div className="flex gap-4">
          <Link to="/home">Home</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/cadastroCategoria">Cadastrar Categoria</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;