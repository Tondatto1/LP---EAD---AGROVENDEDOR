import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, X } from "lucide-react";

export default function FixedBottomBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling down 400px, if not dismissed
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleScrollToPlanos = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#planos");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      id="fixed-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-agro-blue text-white shadow-2xl border-t border-agro-blue-light/50 backdrop-blur-sm bg-opacity-98 animate-slide-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          
          {/* Promo Text */}
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="hidden sm:flex p-1.5 bg-agro-green/10 rounded-lg text-agro-green">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-tight">
                Garantia de Satisfação de 7 dias • <span className="text-agro-green">Acesso Imediato</span>
              </p>
              <p className="text-[10px] sm:text-xs text-gray-300">
                Torne-se um Negociador de Elite do Agronegócio por apenas <strong className="text-white">R$ 99/mês</strong>.
              </p>
            </div>
          </div>

          {/* Action and Dismiss */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
            <button
              onClick={handleScrollToPlanos}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-agro-green hover:bg-agro-green-dark text-white font-sans text-xs font-bold px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-98"
            >
              ASSINAR AGORA
              <ArrowRight className="h-3.5 w-3.5 text-white" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                setIsDismissed(true);
                setIsVisible(false);
              }}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Fechar aviso promocional"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
