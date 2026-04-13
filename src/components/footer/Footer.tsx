import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

function Footer() {
  return (
    <div className="w-full bg-blue-600 text-white flex justify-center py-6 mt-10">
      <div className="container flex flex-col items-center gap-4">
        <p className="text-xl font-bold">Farmácia Generation | Copyright: 2026</p>
        <p className="text-lg">Acesse nossas redes sociais</p>
        <div className="flex gap-4">
          <LinkedinLogo size={48} weight="bold" />
          <InstagramLogo size={48} weight="bold" />
          <FacebookLogo size={48} weight="bold" />
        </div>
      </div>
    </div>
  );
}

export default Footer;