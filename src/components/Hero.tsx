import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, Star, ShieldCheck, Award, Users } from "lucide-react";
import Aurora from "./Aurora";

interface HeroProps {
  onSubscribe: () => void;
}

export default function Hero({ onSubscribe }: HeroProps) {
  const handleScrollToPlanos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#planos");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-16 lg:pb-32">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Aurora
          colorStops={["#c3f5b2", "#f5fdf6", "#aff09a"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>

      {/* Visual background decoration */}
      <div className="absolute top-0 right-0 z-0 w-1/2 h-full opacity-10 bg-radial from-agro-green/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 z-0 w-1/3 h-1/2 opacity-5 bg-radial from-agro-blue/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Left side (Dobra 1 Content) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-agro-blue/5 border border-agro-blue/10 text-agro-blue font-sans text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-agro-green animate-pulse" />
              Lançamento Oficial • EAD Exclusivo para o Agronegócio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-[55px] text-agro-blue leading-[1.1] tracking-tight text-left"
            >
              Domine a Negociação no Agro e Multiplique Suas <span className="text-[#0f593a] relative inline-block">Vendas<span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#0f593a]/25 -z-10 rounded-full" /></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-sans text-base sm:text-lg text-black leading-relaxed max-w-2xl text-left"
            >
              A única plataforma de treinamento desenvolvida exclusivamente para profissionais da área <strong className="font-semibold text-[#0f593a]">comercial</strong> do agronegócio, te ensinando a vender <strong className="font-semibold text-[#0f593a]">mais</strong> e vender <strong className="font-semibold text-[#0f593a]">melhor</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full"
            >
              <button
                onClick={onSubscribe}
                className="inline-flex items-center justify-center gap-3 bg-agro-green hover:bg-agro-green-dark text-white font-sans text-base sm:text-lg font-bold px-8 py-4.5 rounded-2xl shadow-xl shadow-agro-green/25 hover:shadow-2xl hover:shadow-agro-green/35 transition-all hover:translate-y-[-3px] active:translate-y-[1px] group cursor-pointer"
              >
                ASSINAR AGORA
                <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1.5" />
              </button>
            </motion.div>

            {/* Quick trust trustmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 w-full"
            >
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-agro-blue">+2 mil</span>
                <span className="font-sans text-xs text-gray-500">Alunos no campo</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-agro-blue">98.4%</span>
                <span className="font-sans text-xs text-gray-500">De aprovação</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-agro-blue">7 Dias</span>
                <span className="font-sans text-xs text-gray-500">Garantia integral</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Graphic / Right side mockup */}
          <div className="lg:col-span-7 relative w-full flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -14, 0]
              }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.2 },
                scale: { duration: 0.7, delay: 0.2 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative w-full max-w-3xl lg:max-w-none lg:w-[125%] lg:translate-x-16"
            >
              <img
                src="/Design sem nome (92).png"
                alt="Plataforma AgroVendedor no Computador e Celular"
                className="w-full h-auto object-contain drop-shadow-2xl select-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
