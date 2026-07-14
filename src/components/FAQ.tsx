import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqItems } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Open first item by default

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20 lg:py-28 relative">
      {/* Decorative background visual */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 bg-radial from-agro-green/50 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-agro-green uppercase tracking-wider bg-agro-green/10 px-3.5 py-1.5 rounded-full mb-3 inline-block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight mt-1">
            FAQ • Respostas Rápidas
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-agro-green shadow-lg shadow-gray-200/50"
                    : "border-gray-100 shadow-sm hover:border-gray-200"
                }`}
              >
                {/* Question trigger button */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex justify-between items-center p-5 text-left gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex gap-3.5 items-center">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? "text-agro-green" : "text-gray-400"}`} />
                    <span className={`font-display font-bold text-sm sm:text-base ${isOpen ? "text-agro-blue" : "text-gray-700"}`}>
                      {item.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-lg ${isOpen ? "bg-agro-green/10 text-agro-green" : "bg-gray-100 text-gray-500"}`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Answer pane */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[500px] border-t border-gray-50" : "max-h-0"
                  }`}
                >
                  <div className="p-5 font-sans text-xs sm:text-sm text-gray-600 leading-relaxed bg-white">
                    {item.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer info tip */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs text-gray-500">
            Ainda tem alguma dúvida específica? Fale diretamente com nossa equipe de suporte comercial.
          </p>
          <a
            href="mailto:comercialagrovendedor@gmail.com"
            className="mt-3 inline-flex items-center gap-2 font-sans font-bold text-xs text-agro-blue hover:text-agro-green transition-colors bg-white px-5 py-2.5 rounded-full border border-gray-200/60 shadow-xs"
          >
            📧 comercialagrovendedor@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
}
