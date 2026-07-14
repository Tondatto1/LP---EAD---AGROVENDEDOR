import React from "react";
import { Sprout, Mail, Phone, MapPin, Shield } from "lucide-react";

interface FooterProps {
  currentView?: "landing" | "privacy";
  setCurrentView?: (view: "landing" | "privacy") => void;
}

export default function Footer({ currentView = "landing", setCurrentView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (currentView !== "landing" && setCurrentView) {
      setCurrentView("landing");
      setTimeout(() => {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-agro-blue-dark text-white pt-16 pb-24 border-t border-agro-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (setCurrentView) {
                  setCurrentView("landing");
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-block mb-4 group"
            >
              <div className="bg-white px-4 py-2 rounded-xl transition-transform group-hover:scale-[1.02] inline-block">
                <img
                  src="/LOGO - LETRA PRETA - TRANS - HOR.png"
                  alt="AgroVendas Academy Logo"
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>
            <p className="font-sans text-xs text-gray-300 leading-relaxed max-w-sm mb-6">
              A maior plataforma de capacitação comercial e negociações avançadas exclusiva para o mercado do agronegócio.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 px-4 py-2 rounded-xl w-fit border border-white/10">
              <Shield className="h-4 w-4 text-agro-green" />
              <span>Ambiente de ensino criptografado SSL seguro</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-agro-green mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#para-quem-serve"
                  onClick={(e) => handleScroll(e, "#para-quem-serve")}
                  className="font-sans text-xs text-gray-300 hover:text-agro-green transition-colors"
                >
                  Para quem serve
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  onClick={(e) => handleScroll(e, "#depoimentos")}
                  className="font-sans text-xs text-gray-300 hover:text-agro-green transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#treinamentos"
                  onClick={(e) => handleScroll(e, "#treinamentos")}
                  className="font-sans text-xs text-gray-300 hover:text-agro-green transition-colors"
                >
                  Todos treinamentos
                </a>
              </li>
              <li>
                <a
                  href="#entrevistas"
                  onClick={(e) => handleScroll(e, "#entrevistas")}
                  className="font-sans text-xs text-gray-300 hover:text-agro-green transition-colors"
                >
                  Entrevistas
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleScroll(e, "#faq")}
                  className="font-sans text-xs text-gray-300 hover:text-agro-green transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-agro-green mb-4">
              Fale Conosco
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-2.5 items-center">
                <Mail className="h-4 w-4 text-agro-green shrink-0" />
                <span className="font-sans text-xs text-gray-300">comercialagrovendedor@gmail.com</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="h-4 w-4 text-agro-green shrink-0" />
                <span className="font-sans text-xs text-gray-300">67 9 98190294 (seg à sex, 08:00 às 17:00)</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-agro-green shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-gray-300 leading-relaxed">
                  Avenida Marechal Rondon, 2083 - Campo Grande - MS<br />
                  CEP 79002-204
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-10" />

        {/* Legal block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-[10px] text-gray-400">
            @ 2026 AGROVENDEDOR TREINAMENTOS NO AGRONEGOCIO LTDA. Todos os direitos reservados. CNPJ: 59.269.205/0001-10
          </p>
          <div className="flex gap-5 text-[10px] text-gray-400">
            <button
              onClick={() => {
                if (setCurrentView) {
                  setCurrentView("privacy");
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-agro-green transition-colors cursor-pointer"
            >
              Políticas de Privacidade
            </button>
            <span>•</span>
            <a href="#" className="hover:text-agro-green transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
