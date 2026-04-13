import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black text-slate-800 tracking-tight">
              Farma<span className="text-cyan-600">Vida</span>
            </span>
            <p className="text-slate-500 mt-2 text-sm text-center md:text-left max-w-xs">
              Sua saúde em primeiro lugar com os melhores produtos e atendimento dedicado.
            </p>
          </div>

          <div className="flex flex-col items-center flex-1">
            <p className="text-slate-800 font-semibold mb-4 text-sm uppercase tracking-wider">Conecte-se conosco</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                <LinkedinLogo size={20} weight="fill" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                <InstagramLogo size={20} weight="fill" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                <FacebookLogo size={20} weight="fill" />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 FarmaVida. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-cyan-600 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;