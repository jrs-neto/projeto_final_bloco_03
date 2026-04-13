function Navbar() {
  return (
    <div className="w-full bg-blue-600 text-white flex justify-center py-4">
      <div className="container flex justify-between items-center text-lg">
        <h1 className="text-2xl font-bold">Farmácia</h1>

        <div className="flex gap-4">
          <span>Home</span>
          <span>Categorias</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;