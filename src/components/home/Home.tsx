import { ArrowRight, Pill, Heartbeat } from "phosphor-react";
import imagemPaginaInicial from "../../assets/página-inicial.jpg";

function Home() {
  return (
    <main className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-slate-50">


      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-teal-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">


          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-cyan-100 shadow-sm text-cyan-700 text-sm font-semibold mb-8 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              A Nova Era do Cuidado
            </div>

            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-slate-800">
              Cuidar de você é a nossa <br className="hidden lg:block" />
              <span className="hero-gradient-text">especialidade.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
              Descubra um novo conceito em saúde e bem-estar. Medicamentos, dermocosméticos e atenção farmacêutica de excelência, tudo em um só lugar para você.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center group">
                Ver Produtos
                <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-3 rounded-full font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-all duration-300 w-full sm:w-auto shadow-sm flex items-center justify-center gap-2">
                <Heartbeat size={20} className="text-rose-500" />
                Nossos Serviços
              </button>
            </div>


            <div className="mt-16 grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/60 w-full lg:max-w-xl">
              <div>
                <strong className="block text-2xl font-black text-cyan-700">+5k</strong>
                <span className="text-sm text-slate-500 text-nowrap">Produtos Ativos</span>
              </div>
              <div>
                <strong className="block text-2xl font-black text-cyan-700">24/7</strong>
                <span className="text-sm text-slate-500">Atendimento</span>
              </div>
              <div>
                <strong className="block text-2xl font-black text-cyan-700"><Pill size={32} weight="duotone" className="inline-block -mt-1" /></strong>
                <span className="text-sm text-slate-500">Qualidade</span>
              </div>
            </div>
          </div>


          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center animate-fade-in-up animation-delay-200 relative">
            <div className="relative">

              <div className="absolute -top-6 -left-6 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 animate-floating">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                    <Heartbeat size={24} weight="fill" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Saúde em Dia</p>
                    <p className="text-sm font-bold text-slate-800">100% Garantido</p>
                  </div>
                </div>
              </div>


              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 ring-1 ring-slate-100 w-full max-w-sm lg:max-w-md mx-auto transform transition-transform hover:scale-[1.02] duration-500 bg-white">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent mix-blend-overlay z-10 rounded-[2rem]" />
                <img
                  src={imagemPaginaInicial}
                  alt="A farmácia do futuro"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>


              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-cyan-400 to-teal-400 rounded-[2rem] -z-10 translate-x-4 translate-y-4 opacity-50 blur-sm"></div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Home;