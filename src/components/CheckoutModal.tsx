import React, { useState } from "react";
import { X, Sparkles, ShieldCheck, Mail, User, CreditCard, ArrowRight } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (name: string, email: string, isPremium: boolean) => void;
  initialTier: "free" | "premium";
}

export default function CheckoutModal({ isOpen, onClose, onSuccess, initialTier }: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("4444 4444 4444 4444");
  const [cardExpiry, setCardExpiry] = useState("12/29");
  const [cardCvv, setCardCvv] = useState("123");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "pix">("card");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTier, setSelectedTier] = useState<"free" | "premium">(initialTier);

  // Sync state with prop updates
  React.useEffect(() => {
    setSelectedTier(initialTier);
  }, [initialTier]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Por favor, digite seu nome completo.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Por favor, digite um e-mail válido.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(name, email, selectedTier === "premium");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="bg-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-6 max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 font-bold p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Plan Switcher tabs in Modal */}
        <div className="grid grid-cols-2 p-1.5 bg-gray-100 rounded-2xl">
          <button
            type="button"
            onClick={() => setSelectedTier("free")}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedTier === "free"
                ? "bg-white text-gray-800 shadow-xs"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Nível Gratuito
          </button>
          <button
            type="button"
            onClick={() => setSelectedTier("premium")}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedTier === "premium"
                ? "bg-agro-green text-white shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Elite Premium
          </button>
        </div>

        {/* Modal Header */}
        <div className="text-left space-y-2">
          {selectedTier === "premium" ? (
            <>
              <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-600 border border-amber-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-3 w-3 fill-current text-amber-500" />
                Assinatura Premium Elite
              </div>
              <h3 className="font-display font-bold text-2xl text-agro-blue tracking-tight">
                Seja bem-vindo ao AgroVendas Academy
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                Preencha seus dados para concluir sua assinatura de <strong>R$ 47,90 mensal</strong> e liberar acesso instantâneo a todos os treinamentos e mentores virtuais.
              </p>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                🎁 Acesso Nível Gratuito
              </div>
              <h3 className="font-display font-bold text-2xl text-agro-blue tracking-tight">
                Inicie seus estudos sem custos
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                Preencha os campos abaixo para liberar seu cadastro de <strong>Acesso Gratuito</strong> e começar a assistir às aulas e entrevistas liberadas hoje mesmo.
              </p>
            </>
          )}
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-xl text-xs font-medium text-left">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Name */}
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Nome Completo do Aluno
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <User className="h-4.5 w-4.5" />
              </span>
              <input
                type="text"
                required
                placeholder="Ex: João da Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10.5 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-agro-green focus:bg-white transition-all font-sans font-medium"
              />
            </div>
          </div>

          {/* Input Email */}
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
              E-mail de Cadastro
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <Mail className="h-4.5 w-4.5" />
              </span>
              <input
                type="email"
                required
                placeholder="Ex: joao@suaempresa.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10.5 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-agro-green focus:bg-white transition-all font-sans font-medium"
              />
            </div>
          </div>

          {selectedTier === "premium" ? (
            <>
              {/* Payment Method Selector */}
              <div className="space-y-2 text-left">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Método de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === "card"
                        ? "bg-agro-blue/5 border-agro-blue text-agro-blue"
                        : "bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    💳 Cartão de Crédito
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`p-3.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === "pix"
                        ? "bg-agro-blue/5 border-agro-blue text-agro-blue"
                        : "bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    ⚡ Pix Instantâneo
                  </button>
                </div>
              </div>

              {/* Payment Fields Simulator */}
              {paymentMethod === "card" ? (
                <div className="p-4 border border-gray-100 rounded-2xl bg-gray-50/50 space-y-3.5 text-left">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Número do Cartão (Simulação de Sandbox)</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <CreditCard className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        disabled
                        value={cardNumber}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-400 font-mono"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Validade</label>
                      <input
                        type="text"
                        disabled
                        value={cardExpiry}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-400 font-mono"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">CVV</label>
                      <input
                        type="text"
                        disabled
                        value={cardCvv}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-xs text-gray-400 font-mono"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 border border-gray-100 rounded-2xl bg-emerald-50/20 text-left space-y-2">
                  <p className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Desconto de ativação garantido no Pix!
                  </p>
                  <p className="font-sans text-[11px] text-gray-500 leading-normal">
                    Ao clicar em confirmar abaixo, simularemos o faturamento instantâneo com aprovação imediata do seu acesso de estudante.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="p-4 border border-gray-100 rounded-2xl bg-blue-50/30 text-left space-y-2">
              <p className="text-[11px] text-blue-800 font-semibold flex items-center gap-1.5">
                🎉 Zero custo!
              </p>
              <p className="font-sans text-[11px] text-gray-500 leading-normal">
                Nenhum cartão ou forma de faturamento é exigido. Você está criando uma assinatura de nível 100% gratuito.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full inline-flex items-center justify-center gap-2 bg-agro-green hover:bg-agro-green-dark text-white font-sans font-bold text-sm py-4 px-6 rounded-xl shadow-lg shadow-agro-green/20 transition-all cursor-pointer ${
              isLoading ? "opacity-75 cursor-wait" : "hover:translate-y-[-1px] active:translate-y-[1px]"
            }`}
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {selectedTier === "premium" ? "Processando Assinatura..." : "Configurando Acesso Gratuito..."}
              </>
            ) : (
              <>
                {selectedTier === "premium" ? "CONFIRMAR ASSINATURA AGORA" : "CONFIRMAR ASSINATURA AGORA"}
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 text-left">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4.5 w-4.5 text-agro-green shrink-0" />
            <span>Transação 100% segura e garantia de devolução de 7 dias.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
