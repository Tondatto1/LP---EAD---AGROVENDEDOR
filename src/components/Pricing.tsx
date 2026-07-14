import React from "react";
import { Check, Star, ShieldCheck, ArrowRight } from "lucide-react";
import { pricingPlans } from "../data";

interface PricingProps {
  onSubscribe: (tier: "free" | "premium") => void;
}

export default function Pricing({ onSubscribe }: PricingProps) {
  return (
    <section id="planos" className="bg-white py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight mt-1">
            Escolha seu Plano e Comece Agora
          </h2>
          
          {/* Highlighted 7-Day Guarantee Seal */}
          <div className="mt-8 inline-flex items-center gap-4 bg-agro-green/15 text-agro-green border-2 border-agro-green/30 px-6 py-3.5 rounded-2xl shadow-md hover:scale-102 transition-all duration-300">
            <div className="flex items-center justify-center w-10 h-10 bg-agro-green text-white rounded-xl shadow-inner shrink-0">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="font-sans font-extrabold text-sm sm:text-base uppercase tracking-wider block leading-none">
                Garantia incondicional de 7 dias
              </span>
              <span className="font-sans text-xs text-agro-green/80 mt-1 block">
                Risco zero para sua assinatura do plano Elite
              </span>
            </div>
          </div>
        </div>

        {/* Side-by-Side Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Nível Gratuito */}
          <div className="relative pt-5 flex flex-col">
            <div className="bg-gray-50/50 border border-gray-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between text-left hover:border-gray-300 transition-all duration-300 shadow-md h-full">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-display font-bold text-2xl text-gray-800 tracking-tight">
                    Acesso Gratuito
                  </h3>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-black rounded-lg uppercase tracking-wider">
                    Básico
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline mb-4 min-h-[48px]">
                  <span className="font-display font-black text-4xl sm:text-5xl text-gray-800 leading-none tracking-tight">
                    Gratuito
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 font-sans mb-6 font-medium">
                  Sem necessidade de cartão de crédito. Comece a estudar de graça agora.
                </p>

                {/* Divider */}
                <div className="border-t border-gray-200/60 my-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-gray-200 text-gray-600">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Acesso a todas as entrevistas com profissionais do agro
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-gray-200 text-gray-600">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Navegue e conheça o catálogo de cursos
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-gray-200 text-gray-600">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Suporte de acesso à plataforma
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-gray-200 text-gray-600">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Cadastro gratuito na plataforma
                    </span>
                  </li>
                </ul>
              </div>

              {/* Plan Action CTA */}
              <div>
                <a
                  href="https://agrovendedor.curseduca.pro/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-sans font-bold text-sm py-4 px-6 rounded-xl transition-all text-center shadow-md hover:translate-y-[-1px] active:translate-y-[1px] uppercase tracking-wider cursor-pointer"
                >
                  <span>ACESSAR AGORA</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Assinatura Premium Elite (Perpetual Border Spin style) */}
          <div className="relative pt-5 flex flex-col">
            {/* Popular Badge */}
            <div className="absolute top-5 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-agro-green text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap z-25 uppercase tracking-wider">
              <Star className="h-3 w-3 fill-current text-white animate-pulse" />
              Recomendado
            </div>

            <div className="perpetual-border-card shadow-2xl flex flex-col justify-between h-full">
              <div className="perpetual-border-card-inner p-8 sm:p-10 flex flex-col justify-between text-left h-full">

                <div>
                  <div className="flex justify-between items-start mb-6 mt-2">
                    <h3 className="font-display font-bold text-2xl text-agro-blue tracking-tight">
                      Assinatura
                    </h3>
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-600 border border-amber-200 text-[10px] font-black rounded-lg uppercase tracking-wider">
                      ★ Elite
                    </span>
                  </div>

                {/* Price */}
                <div className="flex items-baseline mb-4">
                  <span className="text-gray-400 font-sans text-sm font-semibold mr-1">R$</span>
                  <span className="font-display font-black text-5xl text-agro-blue leading-none tracking-tight">
                    47,90
                  </span>
                  <span className="text-gray-400 font-sans text-sm font-semibold ml-1.5">
                    / mês
                  </span>
                </div>

                <p className="text-[11px] text-gray-400 font-sans mb-6 font-medium">
                  Assinatura mensal recorrente. Sem taxa de fidelidade ou multa de cancelamento.
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 my-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-agro-green/15 text-agro-green">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 font-semibold leading-tight">
                      Tudo do nível gratuito
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-agro-green/15 text-agro-green">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Acesso a todas as entrevistas com profissionais do agro
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-agro-green/15 text-agro-green">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Acesso a todos os cursos da plataforma
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-agro-green/15 text-agro-green">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Suporte de acesso à plataforma prioritário
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-agro-green/15 text-agro-green">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Novos cursos e conteúdos adicionados continuamente
                    </span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <div className="p-0.5 rounded-full shrink-0 bg-agro-green/15 text-agro-green">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-gray-600 leading-tight">
                      Acesso ilimitado enquanto a assinatura estiver ativa
                    </span>
                  </li>
                </ul>
              </div>

              {/* Plan Action CTA */}
              <div>
                <a
                  href="https://www.asaas.com/c/3rni9bejcla4dz06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-agro-green hover:bg-agro-green-dark text-white font-sans font-bold text-sm py-4 px-6 rounded-xl transition-all text-center shadow-lg shadow-agro-green/20 hover:translate-y-[-1px] active:translate-y-[1px] uppercase tracking-wider cursor-pointer"
                >
                  <span>ASSINAR AGORA</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}
