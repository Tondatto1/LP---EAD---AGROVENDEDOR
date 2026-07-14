import React, { useEffect } from "react";
import { ArrowLeft, Shield, Calendar, BookOpen, Lock } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-gray-50/50 min-h-screen py-16 lg:py-24 font-sans select-none antialiased">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-agro-blue mb-10 transition-colors group cursor-pointer"
          id="back-to-home-btn"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar para a página inicial
        </button>

        {/* Hero Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-gray-100/40 relative overflow-hidden mb-10">
          <div className="absolute top-0 right-0 p-8 text-gray-50">
            <Shield className="h-24 w-24 stroke-[0.5]" />
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-agro-green/10 text-agro-green font-sans font-bold text-xs px-3 py-1.5 rounded-full mb-6">
              <Lock className="h-3.5 w-3.5" />
              Portal de Segurança e Privacidade
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight mb-4">
              Política de Privacidade
            </h1>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Esta política é efetiva a partir de 14 July 2026 21:21</span>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-gray-100/40 space-y-10 leading-relaxed text-gray-600">
          
          <section className="space-y-4">
            <p className="text-sm sm:text-base">
              A sua privacidade é importante para nós. É política do <strong>Plataforma Agrovendedor</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <strong>Plataforma Agrovendedor</strong>, e outros sites que possuímos e operamos.
            </p>
            <p className="text-sm sm:text-base">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p className="text-sm sm:text-base">
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            <p className="text-sm sm:text-base">
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
            <p className="text-sm sm:text-base">
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
            <p className="text-sm sm:text-base">
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>
            <p className="text-sm sm:text-base">
              O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
            </p>
          </section>

          {/* User Commitment Card */}
          <section className="bg-gray-50/50 border border-gray-100 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="font-display font-bold text-lg text-agro-blue flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-agro-green" />
              Compromisso do Usuário
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Plataforma Agrovendedor oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <ul className="space-y-3.5 mt-4">
              <li className="flex gap-3 items-start text-xs sm:text-sm">
                <span className="font-bold text-agro-green shrink-0 bg-white shadow-xs rounded-full h-6 w-6 flex items-center justify-center border border-gray-100">A</span>
                <span className="pt-0.5">Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</span>
              </li>
              <li className="flex gap-3 items-start text-xs sm:text-sm">
                <span className="font-bold text-agro-green shrink-0 bg-white shadow-xs rounded-full h-6 w-6 flex items-center justify-center border border-gray-100">B</span>
                <span className="pt-0.5 font-sans">Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</span>
              </li>
              <li className="flex gap-3 items-start text-xs sm:text-sm">
                <span className="font-bold text-agro-green shrink-0 bg-white shadow-xs rounded-full h-6 w-6 flex items-center justify-center border border-gray-100">C</span>
                <span className="pt-0.5">Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Plataforma Agrovendedor, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</span>
              </li>
            </ul>
          </section>

          {/* More Info */}
          <section className="space-y-3 pt-4 border-t border-gray-100">
            <h2 className="font-display font-bold text-xl text-agro-blue">
              Mais informações
            </h2>
            <p className="text-sm sm:text-base">
              Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
          </section>

        </div>

        {/* Footer actions inside Privacy policy */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-agro-blue hover:bg-agro-blue-light text-white font-sans text-sm font-semibold px-6 py-3 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a Página Principal
          </button>
        </div>

      </div>
    </div>
  );
}
