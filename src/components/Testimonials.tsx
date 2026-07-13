import { Star, Quote } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight">
            Depoimentos de quem vive do campo
          </h2>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg shadow-gray-100/50 flex flex-col justify-between hover:border-agro-green/20 hover:shadow-xl transition-all group"
            >
              {/* Decorative quote icon */}
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-agro-green/10 transition-colors">
                <Quote className="h-10 w-10 rotate-180" />
              </div>

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="font-sans text-sm text-gray-600 leading-relaxed italic mb-8 relative z-10">
                  "{test.text}"
                </p>
              </div>

              {/* Profile Card */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={test.image}
                  alt={test.name}
                  className="h-12 w-12 rounded-full object-cover border border-gray-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-agro-blue">
                    {test.name}
                  </h4>
                  <p className="font-sans text-[11px] font-medium text-gray-500">
                    {test.role}
                  </p>
                  <p className="font-sans text-[10px] font-bold text-agro-green">
                    {test.company}
                  </p>
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
    </section>
  );
}
