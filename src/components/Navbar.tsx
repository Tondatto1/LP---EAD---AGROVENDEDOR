import React, { useState } from "react";
import { Sprout, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onSubscribe: () => void;
}

export default function Navbar({ onSubscribe }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Público-Alvo", href: "#publico" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Planos", href: "#planos" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav id="app-navbar" className="sticky top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <img
                src="/LOGO - LETRA PRETA - TRANS - HOR.png"
                alt="AgroVendas Academy Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-sans text-sm font-medium text-gray-600 hover:text-agro-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onSubscribe}
              className="inline-flex items-center gap-2 bg-agro-blue hover:bg-agro-blue-light text-white font-sans text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-agro-blue/10 transition-all hover:translate-y-[-1px] active:translate-y-[1px] cursor-pointer"
            >
              ASSINAR AGORA
              <ArrowRight className="h-4 w-4 text-agro-green" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-agro-blue hover:bg-gray-50 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-agro-blue hover:bg-gray-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 px-4 border-t border-gray-50">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onSubscribe();
                }}
                className="w-full flex items-center justify-center gap-2 bg-agro-blue text-white font-sans font-semibold py-3 px-4 rounded-xl shadow-md cursor-pointer"
              >
                ASSINAR AGORA
                <ArrowRight className="h-4 w-4 text-agro-green" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
