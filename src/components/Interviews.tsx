import React from "react";
import { Building2, Users, Coins, Sprout, Network, Trophy } from "lucide-react";

export default function Interviews() {
  const interviewCards = [
    {
      title: "Diretores Comerciais de Multinacionais",
      icon: <Building2 className="h-7 w-7" />,
      colorClass: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Grandes Produtores e Clientes de Alta Escala",
      icon: <Users className="h-7 w-7" />,
      colorClass: "bg-blue-50 text-blue-600"
    },
    {
      title: "Especialistas Globais em Barter e Finanças",
      icon: <Coins className="h-7 w-7" />,
      colorClass: "bg-teal-50 text-teal-600"
    },
    {
      title: "Consultores de Renome e Agrônomos de Campo",
      icon: <Sprout className="h-7 w-7" />,
      colorClass: "bg-amber-50 text-amber-600"
    },
    {
      title: "Diretores e Gestores de Cooperativas Agrícolas",
      icon: <Network className="h-7 w-7" />,
      colorClass: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Campeões de Vendas (RTVs) Regionais de Elite",
      icon: <Trophy className="h-7 w-7" />,
      colorClass: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="entrevistas" className="bg-white py-20 lg:py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight">
            Série Especial de Entrevistas no Campo
          </h2>
        </div>

        {/* 6 Grid cards designed exactly like Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviewCards.map((card, idx) => (
            <div 
              key={idx} 
              className="perpetual-border-card group hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="perpetual-border-card-inner p-8 sm:p-10 flex flex-col items-start gap-5">
                <div className={`p-4 rounded-2xl ${card.colorClass} shadow-inner transition-colors duration-300`}>
                  {card.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-agro-blue tracking-tight leading-snug">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
