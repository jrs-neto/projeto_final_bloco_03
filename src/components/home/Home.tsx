import imagemPaginaInicial from "../../assets/página-inicial.jpg";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="container grid grid-cols-2 gap-8 py-10">

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Bem-vindo à Farmácia
          </h2>
          <p className="text-lg">
            Sua saúde e satisfação é a nossa prioridade.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={imagemPaginaInicial}
            alt="Farmácia"
            className="w-80"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;