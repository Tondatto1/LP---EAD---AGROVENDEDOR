import React from "react";
import { Hand } from "lucide-react";
import CircularGallery from "./CircularGallery";

interface HowItWorksProps {
  onSubscribe: () => void;
}

export default function HowItWorks({ onSubscribe }: HowItWorksProps) {
  const galleryItems = [
    {
      image: "/Campeão em vendas no Agro.jpeg",
      text: "Campeão em vendas no Agro"
    },
    {
      image: "/Carteira de clientes.jpeg",
      text: "Carteira de clientes"
    },
    {
      image: "/Chega de crise.jpeg",
      text: "Chega de crise"
    },
    {
      image: "/Da experiência a excelência.jpeg",
      text: "Da experiência a excelência"
    },
    {
      image: "/Negociação de vendas.jpeg",
      text: "Negociações de vendas"
    },
    {
      image: "/Trincheira de vendas.jpeg",
      text: "Trincheira de vendas"
    }
  ];

  return (
    <section id="treinamentos" className="bg-gray-50 py-20 lg:py-24 relative overflow-hidden select-none">
      {/* Decorative clean background bottom curves */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-white rounded-t-[40px] shadow-xs" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight">
            Todos os treinamentos da plataforma
          </h2>
        </div>

        {/* Beautiful Circular Gallery Frame */}
        <div className="relative w-full overflow-visible rounded-3xl" style={{ height: "550px" }}>
          <CircularGallery
            bend={1}
            textColor="#242857"
            borderRadius={0.06}
            scrollEase={0.05}
            fontUrl=""
            font="bold 24px Figtree"
            scrollSpeed={2.2}
            items={galleryItems}
          />
        </div>

        {/* Secondary Call to Action to view plans below */}
        <div className="text-center mt-8">
          <button
            onClick={onSubscribe}
            className="inline-flex items-center justify-center gap-2 bg-agro-green hover:bg-agro-green-dark text-white font-sans font-bold text-xs py-3.5 px-6 rounded-xl transition-all shadow-md hover:translate-y-[-1px] uppercase tracking-wider cursor-pointer"
          >
            ASSINAR AGORA
          </button>
        </div>

      </div>
    </section>
  );
}
