import { TrendingUp, UserCog, Handshake, Megaphone, Wrench, Target } from "lucide-react";

export default function TargetAudience() {
  const targetRoles = [
    {
      title: "Vendedores",
      icon: <TrendingUp className="h-7 w-7" />,
      colorClass: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Gerentes comerciais",
      icon: <UserCog className="h-7 w-7" />,
      colorClass: "bg-blue-50 text-blue-600"
    },
    {
      title: "Representantes comerciais",
      icon: <Handshake className="h-7 w-7" />,
      colorClass: "bg-teal-50 text-teal-600"
    },
    {
      title: "Promotores de vendas",
      icon: <Megaphone className="h-7 w-7" />,
      colorClass: "bg-amber-50 text-amber-600"
    },
    {
      title: "Assistentes técnicos comerciais",
      icon: <Wrench className="h-7 w-7" />,
      colorClass: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Supervisores",
      icon: <Target className="h-7 w-7" />,
      colorClass: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="para-quem-serve" className="bg-gray-50/50 py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative clean background curves */}
      <div className="absolute top-0 inset-x-0 h-16 bg-white rounded-b-[40px] shadow-xs" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight">
            Para quem é esta plataforma?
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-3 max-w-xl mx-auto">
            Desenvolvemos trilhas de aprendizagem focadas nas reais demandas práticas do setor comercial do agronegócio.
          </p>
        </div>

        {/* Large cards grid - no overlaps, with perpetual border beam effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetRoles.map((role, idx) => (
            <div 
              key={idx} 
              className="perpetual-border-card group hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="perpetual-border-card-inner p-8 sm:p-10 flex flex-col items-start gap-5">
                <div className={`p-4 rounded-2xl ${role.colorClass} shadow-inner transition-colors duration-300`}>
                  {role.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-agro-blue tracking-tight leading-snug">
                    {role.title}
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
