function Home() {
  return (
    <div className="flex justify-center">
      <div className="container grid grid-cols-2 gap-8 py-10">

        {/* TEXTO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Bem-vindo à Farmácia
          </h2>
          <p className="text-lg">
            Sistema de gerenciamento de categorias e produtos.
          </p>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/pharmacist-concept-illustration_114360-1395.jpg"
            alt="Farmácia"
            className="w-80"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;