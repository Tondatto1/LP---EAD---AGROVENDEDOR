import React, { useState } from "react";
import { Star, ShieldCheck, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const testimonialImages = [
  { id: 1, src: "/depoimento ead 01.jpeg", alt: "Depoimento de aluno EAD 1" },
  { id: 2, src: "/depoimento ead 02.jpeg", alt: "Depoimento de aluno EAD 2" },
  { id: 3, src: "/depoimento ead 03.jpeg", alt: "Depoimento de aluno EAD 3" },
  { id: 4, src: "/depoimento ead 04.jpeg", alt: "Depoimento de aluno EAD 4" },
  { id: 5, src: "/depoimento ead 05.jpeg", alt: "Depoimento de aluno EAD 5" },
];

export default function Testimonials() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="depoimentos" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight">
            Depoimentos de quem vive do campo
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-3">
            Clique em qualquer imagem para ampliar e ler o depoimento completo
          </p>
        </div>

        {/* Testimonials Flex/Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {testimonialImages.map((test) => (
            <div
              key={test.id}
              onClick={() => setActiveImage(test.src)}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm bg-white border border-gray-100 rounded-3xl p-4 shadow-lg shadow-gray-100/50 flex flex-col justify-between hover:border-agro-green/20 hover:shadow-2xl hover:shadow-agro-green/5 transition-all duration-300 group cursor-pointer relative"
              id={`testimonial-card-${test.id}`}
            >
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl bg-[#fafafa] flex items-center justify-center border border-gray-50 aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src={test.src}
                  alt={test.alt}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-agro-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-agro-blue p-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-2 font-sans font-bold text-xs">
                    <ZoomIn className="h-4.5 w-4.5 text-agro-green animate-pulse" />
                    <span>Ampliar depoimento</span>
                  </div>
                </div>
              </div>

              {/* Verified badge + Stars */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5 text-agro-green font-sans font-semibold text-xs">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Depoimento Verificado</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small trust banner underneath */}
        <div className="mt-16 bg-agro-blue/5 border border-agro-blue/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-agro-green text-white text-[9px] font-bold">✓</span>
            <span className="font-sans text-xs sm:text-sm font-semibold text-gray-700">
              Todas as avaliações acima são auditadas e representam resultados reais de profissionais certificados.
            </span>
          </div>
          <span className="text-xs font-bold text-agro-blue whitespace-nowrap bg-white px-3.5 py-1.5 rounded-lg border border-gray-100">
            ⭐ 4.92 / 5 estrelas globais
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={activeImage}
              alt="Depoimento Ampliado"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
