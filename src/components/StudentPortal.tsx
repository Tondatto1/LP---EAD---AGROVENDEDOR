import React, { useState, useEffect } from "react";
import { 
  BookOpen, Play, CheckCircle2, Award, LogOut, ChevronRight, Sparkles, 
  Lock, ArrowRight, ShieldCheck, Download, Send, CornerDownLeft, Star, Volume2, Maximize, CheckSquare
} from "lucide-react";

interface User {
  name: string;
  email: string;
  isPremium: boolean;
}

interface StudentPortalProps {
  user: User;
  onLogout: () => void;
  onUpgrade: (planId?: string) => void;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
}

interface Course {
  id: string;
  title: string;
  duration: string;
  badge: string;
  lessons: Lesson[];
}

export default function StudentPortal({ user, onLogout, onUpgrade }: StudentPortalProps) {
  // Setup local courses state with simulated progress
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "prospecção",
      title: "Prospecção de Alta Performance e Abordagem na Porteira",
      duration: "15 horas de conteúdo",
      badge: "Iniciando Safra",
      lessons: [
        { id: "p1", title: "Mapeamento inteligente de microrregiões e potencial por hectare", duration: "12:45", isCompleted: true },
        { id: "p2", title: "Técnicas de abordagem na porteira sem parecer vendedor chato", duration: "15:20", isCompleted: false },
        { id: "p3", title: "Investigação de dores reais antes de apresentar qualquer produto", duration: "18:10", isCompleted: false },
        { id: "p4", title: "Como contornar secretários, gerentes e intermediários de compras", duration: "14:15", isCompleted: false },
        { id: "p5", title: "Construção de pitches rápidos e magnéticos focados no ROI", duration: "11:30", isCompleted: false }
      ]
    },
    {
      id: "negociação",
      title: "Negociação de Alto Valor e Defesa de Margem no Agro",
      duration: "25 horas de conteúdo",
      badge: "Mais Vendido",
      lessons: [
        { id: "n1", title: "A matemática do valor: como traduzir investimento em ganho por hectare", duration: "20:15", isCompleted: false },
        { id: "n2", title: "Táticas psicológicas dos produtores na barganha por desconto", duration: "16:40", isCompleted: false },
        { id: "n3", title: "Matriz completa de contorno de objeções de preço das sementes", duration: "19:25", isCompleted: false },
        { id: "n4", title: "Gatilhos de urgência e ancoragem de preço adequados ao ciclo de safras", duration: "15:50", isCompleted: false },
        { id: "n5", title: "Simulações reais de fechamento sob pressão de concorrentes", duration: "22:10", isCompleted: false }
      ]
    },
    {
      id: "barter",
      title: "Operações de Barter e Engenharia Financeira no Campo",
      duration: "20 horas de conteúdo",
      badge: "Módulo Avançado",
      lessons: [
        { id: "b1", title: "Fundamentos do Barter: Troca Física x Troca Financeira", duration: "14:35", isCompleted: false },
        { id: "b2", title: "Cálculo prático de relação de troca considerando bases regionais", duration: "18:50", isCompleted: false },
        { id: "b3", title: "Hedge agrícola e proteção contra oscilação violenta de commodities", duration: "25:10", isCompleted: false },
        { id: "b4", title: "Análise rápida de crédito e saúde financeira da propriedade rural", duration: "16:20", isCompleted: false },
        { id: "b5", title: "Passo a passo jurídico e contratual para garantir a segurança", duration: "19:45", isCompleted: false }
      ]
    },
    {
      id: "fidelizacao",
      title: "Fidelização de Clientes e Crescimento de Share-of-Wallet",
      duration: "18 horas de conteúdo",
      badge: "Estratégico",
      lessons: [
        { id: "f1", title: "Visitas técnicas de validação de resultados de produtividade no campo", duration: "13:10", isCompleted: false },
        { id: "f2", title: "Transformando dados agronômicos e fotos de talhões em relatórios de ROI", duration: "16:35", isCompleted: false },
        { id: "f3", title: "Cronograma estratégico de contatos ao longo de todo o ano agrícola", duration: "14:50", isCompleted: false },
        { id: "f4", title: "Técnicas de Cross-selling para introduzir novas categorias de produtos", duration: "15:20", isCompleted: false },
        { id: "f5", title: "Como estruturar e gerenciar grupos VIPs e dias de campo", duration: "18:40", isCompleted: false }
      ]
    }
  ]);

  // Active training/course selected
  const [activeCourseId, setActiveCourseId] = useState("prospecção");
  const [activeLessonId, setActiveLessonId] = useState("p1");

  // Video Playing simulator states
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoTime, setVideoTime] = useState(0);

  // In-portal interactive states
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("plan-mensal");
  const [checkoutStep, setCheckoutStep] = useState<"plans" | "form" | "success">("plans");
  const [checkoutName, setCheckoutName] = useState(user.name);
  const [checkoutEmail, setCheckoutEmail] = useState(user.email);
  const [isProcessingCheckout, setIsProcessingCheckout] = useState(false);
  
  // Certificate view states
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [certificateCourseTitle, setCertificateCourseTitle] = useState("");
  const [lockFeatureMessage, setLockFeatureMessage] = useState<string | null>(null);

  // AI RTV Mentor chatbot states
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ sender: "user" | "mentor"; text: string }>>([
    { sender: "mentor", text: `Olá, ${user.name}! Sou o mentor RTV Virtual. Estou aqui para ajudar você a contornar as maiores objeções do campo. Qual é a principal dificuldade que você está enfrentando com o produtor rural hoje?` }
  ]);
  const [isTypingMentor, setIsTypingMentor] = useState(false);

  const activeCourse = courses.find(c => c.id === activeCourseId) || courses[0];
  const activeLesson = activeCourse.lessons.find(l => l.id === activeLessonId) || activeCourse.lessons[0];

  // Simulated video playback runner
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            // Auto complete lesson when video finishes
            handleCompleteLesson(activeCourseId, activeLessonId);
            return 0;
          }
          return prev + 1.5;
        });
        setVideoTime(prev => prev + 1);
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeLessonId]);

  // Reset video player when changing lessons
  useEffect(() => {
    setIsPlaying(false);
    setVideoProgress(0);
    setVideoTime(0);
  }, [activeLessonId]);

  const handleCompleteLesson = (courseId: string, lessonId: string) => {
    setCourses(prev => prev.map(course => {
      if (course.id === courseId) {
        return {
          ...course,
          lessons: course.lessons.map(lesson => {
            if (lesson.id === lessonId) {
              return { ...lesson, isCompleted: true };
            }
            return lesson;
          })
        };
      }
      return course;
    }));
  };

  const handleToggleLessonComplete = (courseId: string, lessonId: string) => {
    setCourses(prev => prev.map(course => {
      if (course.id === courseId) {
        return {
          ...course,
          lessons: course.lessons.map(lesson => {
            if (lesson.id === lessonId) {
              return { ...lesson, isCompleted: !lesson.isCompleted };
            }
            return lesson;
          })
        };
      }
      return course;
    }));
  };

  // Chat message submit to Agro Mentor
  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage.trim();
    setChatHistory(prev => [...prev, { sender: "user", text: userMsg }]);
    setChatMessage("");
    setIsTypingMentor(true);

    // Simulate RTV expert reply based on keywords
    setTimeout(() => {
      let reply = "";
      const query = userMsg.toLowerCase();
      if (query.includes("preço") || query.includes("caro") || query.includes("desconto")) {
        reply = "Excelente dúvida! Objeção de preço se combate com retorno financeiro por saca. Faça a seguinte conta com o produtor: se ele investir R$ 120 por hectare em nosso bioestimulante, e isso aumentar a produtividade em apenas 3 sacas extras por hectare (valendo R$ 140 cada), o ganho adicional é de R$ 420. Um retorno sobre investimento de quase 4 para 1! Mostre que o 'caro' é não aplicar.";
      } else if (query.includes("barter") || query.includes("troca") || query.includes("grão")) {
        reply = "As operações de Barter são fantásticas para tempos de crédito escasso. Quando o produtor falar em falta de caixa, sugira pagar com a produção da colheita futura. Faça as contas na saca física: 'Amigo, sua semente custará exatamente 4 sacas por hectare. Você garante o insumo sem desembolsar nenhum real hoje e trava o seu risco de insumos'. Isso costuma desarmar qualquer objeção financeira.";
      } else if (query.includes("concorrente") || query.includes("concorrência") || query.includes("marca")) {
        reply = "Nunca fale mal da concorrência, isso gera desconfiança. Em vez disso, posicione seu portfólio como especialista em entregar resultados consistentes nas piores condições sazonais. Diga: 'A marca X tem um bom produto, mas o nosso diferencial é a assistência técnica exclusiva de pós-venda, garantindo que o seu investimento performe no máximo potencial de germinação'.";
      } else {
        reply = "Essa é uma situação muito comum nas porteiras! O segredo é sempre ouvir primeiro, concordar com a dor do produtor ('Eu entendo perfeitamente, o clima de fato desafiou nossa região este ano') e depois isolar a objeção: 'Se nós provarmos que nossa semente resiste melhor à estiagem do solo, o senhor teria interesse em testar em pelo menos 10% da sua área para validar?'. Tente este roteiro e me conte o resultado!";
      }

      setChatHistory(prev => [...prev, { sender: "mentor", text: reply }]);
      setIsTypingMentor(false);
    }, 1500);
  };

  // Course Progress calc
  const getCourseProgress = (course: Course) => {
    const completed = course.lessons.filter(l => l.isCompleted).length;
    return Math.round((completed / course.lessons.length) * 100);
  };

  const handleCertificateClick = (course: Course) => {
    const progress = getCourseProgress(course);
    if (progress < 100) {
      setLockFeatureMessage(`Você precisa concluir todas as 5 aulas do curso "${course.title}" para emitir seu certificado. Seu progresso atual é de ${progress}%.`);
      return;
    }

    if (!user.isPremium) {
      setLockFeatureMessage(`🔒 O Certificado Oficial de Especialista com QR Code é um recurso exclusivo do Plano Premium. Faça o upgrade hoje para emitir certificados ilimitados!`);
      return;
    }

    setCertificateCourseTitle(course.title);
    setShowCertificateModal(true);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessingCheckout(true);

    setTimeout(() => {
      setIsProcessingCheckout(false);
      setCheckoutStep("success");
      onUpgrade(selectedPlan);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col pb-16">
      
      {/* Top Student Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/LOGO - LETRA PRETA - TRANS - HOR.png"
                alt="AgroVendas Academy Logo"
                className="h-10 sm:h-11 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="hidden sm:inline-block px-2.5 py-1 bg-agro-blue/5 text-agro-blue text-[11px] font-bold rounded-lg uppercase tracking-wider">
                Portal do Aluno
              </span>
            </div>

            {/* Profile & Upgrade Action */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="text-xs font-semibold text-gray-800">Olá, <span className="text-agro-blue-light font-bold">{user.name}</span></p>
                <div className="flex items-center gap-1 justify-end">
                  {user.isPremium ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                      <Star className="h-2.5 w-2.5 fill-current" />
                      PLANO PREMIUM ELITE
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
                      ACESSO GRATUITO
                    </span>
                  )}
                </div>
              </div>

              {!user.isPremium && (
                <button
                  onClick={() => {
                    setSelectedPlan("plan-mensal");
                    setCheckoutStep("plans");
                    setShowUpgradeModal(true);
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-sans text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md shadow-amber-500/15 transition-all animate-pulse"
                >
                  <Sparkles className="h-4 w-4 fill-current text-white" />
                  VIRAR PREMIUM
                </button>
              )}

              <button
                onClick={onLogout}
                className="p-2.5 rounded-xl border border-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-400 transition-colors"
                title="Sair do Portal"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Free User Promo Warning Banner */}
      {!user.isPremium && (
        <div className="bg-[#191c3d] text-white py-3.5 px-4 text-center text-xs sm:text-sm font-semibold">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="flex items-center gap-1 text-amber-400">
              <Sparkles className="h-4 w-4 fill-current" />
              <strong>Aproveite a oportunidade:</strong> Desbloqueie todas as aulas premium, suporte com mentores e certificados!
            </span>
            <button
              onClick={() => {
                setSelectedPlan("plan-mensal");
                setCheckoutStep("plans");
                setShowUpgradeModal(true);
              }}
              className="bg-agro-green hover:bg-agro-green-dark text-white text-[11px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider transition-all"
            >
              Assinar Premium por R$ 47,90/mês
            </button>
          </div>
        </div>
      )}

      {/* Main Student Portal Dashboard Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Course Navigation & Syllabus (Size: 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Header / Instructions */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h2 className="font-display font-bold text-lg text-agro-blue tracking-tight mb-2">
                Suas Trilhas de Vendas
              </h2>
              <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">
                Assista a todas as aulas de cada treinamento. Conclua 100% de uma trilha para liberar o certificado profissional.
              </p>

              {/* Progress summary block */}
              <div className="bg-gray-50 rounded-xl p-3.5 space-y-2">
                <div className="flex justify-between text-xs font-semibold text-gray-700">
                  <span>Sua Capacitação Global</span>
                  <span>
                    {Math.round(courses.reduce((acc, c) => acc + getCourseProgress(c), 0) / courses.length)}% concluída
                  </span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-agro-green h-full transition-all duration-500"
                    style={{ width: `${courses.reduce((acc, c) => acc + getCourseProgress(c), 0) / courses.length}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Courses Navigation List */}
            <div className="space-y-3.5">
              {courses.map((course) => {
                const isActive = course.id === activeCourseId;
                const progress = getCourseProgress(course);

                return (
                  <div
                    key={course.id}
                    onClick={() => {
                      setActiveCourseId(course.id);
                      setActiveLessonId(course.lessons[0].id);
                    }}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer select-none text-left ${
                      isActive
                        ? "bg-white border-agro-blue shadow-lg ring-1 ring-agro-blue"
                        : "bg-white border-gray-100 hover:border-gray-200 shadow-xs"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isActive ? "bg-agro-blue/10 text-agro-blue" : "bg-gray-100 text-gray-500"
                      }`}>
                        {course.badge}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {course.duration}
                      </span>
                    </div>

                    <h3 className={`font-display font-bold text-sm leading-snug tracking-tight mb-3 ${
                      isActive ? "text-agro-blue" : "text-gray-800"
                    }`}>
                      {course.title}
                    </h3>

                    {/* Progress indicator */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-semibold text-gray-500">
                        <span>Progresso da Trilha</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-agro-green h-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* CENTER/RIGHT COLUMN: Player & Lesson Contents (Size: 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Interactive Simulated Video Player Card */}
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg">
              
              {/* Fake player container */}
              <div className="bg-gray-900 aspect-video relative flex flex-col justify-between p-4 group">
                
                {/* Top Overlay details */}
                <div className="relative z-10 flex justify-between items-center text-white text-xs bg-gradient-to-b from-black/80 to-transparent p-2 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="font-semibold tracking-tight truncate max-w-sm">
                    {activeCourse.title} • {activeLesson.title}
                  </span>
                  <span className="font-mono text-gray-300">{activeLesson.duration}</span>
                </div>

                {/* Center Play state overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {isPlaying ? (
                    <div className="relative flex flex-col items-center gap-3">
                      {/* Animated audio wave or progress */}
                      <div className="flex items-end gap-1.5 h-10 w-24">
                        {[1, 2, 3, 4, 5, 4, 3, 5, 2, 4].map((h, i) => (
                          <div 
                            key={i} 
                            className="bg-agro-green w-1 rounded-full animate-pulse" 
                            style={{ 
                              height: `${h * 20}%`, 
                              animationDelay: `${i * 0.15}s`,
                              animationDuration: `${1.2 - (i % 3) * 0.2}s`
                            }} 
                          />
                        ))}
                      </div>
                      <button 
                        onClick={() => setIsPlaying(false)}
                        className="bg-black/60 hover:bg-black/80 border border-white/20 text-white font-sans text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-md transition-all active:scale-95"
                      >
                        Pausar Simulação de Aula
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-18 h-18 bg-agro-green hover:bg-agro-green-light text-white rounded-full flex items-center justify-center shadow-xl shadow-agro-green/30 transform hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      <Play className="h-8 w-8 fill-current text-white translate-x-0.5" />
                    </button>
                  )}
                </div>

                {/* Bottom Video Controls Simulator */}
                <div className="relative z-10 bg-gradient-to-t from-black/90 to-transparent p-3 rounded-xl space-y-2">
                  
                  {/* Timeline bar */}
                  <div 
                    className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer relative"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const percentage = (clickX / rect.width) * 100;
                      setVideoProgress(percentage);
                    }}
                  >
                    <div 
                      className="bg-agro-green h-full"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>

                  {/* Buttons controls bar */}
                  <div className="flex justify-between items-center text-white text-xs">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-agro-green transition-colors font-bold uppercase tracking-wider text-[11px]"
                      >
                        {isPlaying ? "PAUSAR" : "REPRODUZIR"}
                      </button>
                      <span className="font-mono text-gray-300">
                        {Math.floor(videoTime / 60)}:{String(videoTime % 60).padStart(2, "0")} / {activeLesson.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300">
                      <Volume2 className="h-4.5 w-4.5 hover:text-white cursor-pointer" />
                      <Maximize className="h-4.5 w-4.5 hover:text-white cursor-pointer" />
                    </div>
                  </div>

                </div>

              </div>

              {/* Lesson meta & Completion Button */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-100">
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-agro-blue leading-snug">
                    {activeLesson.title}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 mt-1">
                    Trilha: {activeCourse.title} • Duração: {activeLesson.duration}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleToggleLessonComplete(activeCourseId, activeLessonId)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold font-sans transition-all active:scale-95 border ${
                      activeLesson.isCompleted
                        ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                        : "bg-agro-blue hover:bg-agro-blue-light text-white border-transparent"
                    }`}
                  >
                    <CheckCircle2 className="h-4.5 w-4.5" />
                    {activeLesson.isCompleted ? "CONCLUÍDA" : "CONCLUIR AULA"}
                  </button>

                  <button
                    onClick={() => handleCertificateClick(activeCourse)}
                    className="inline-flex items-center gap-1.5 p-2.5 rounded-xl border border-gray-200 hover:border-agro-green hover:text-agro-green text-gray-500 transition-colors"
                    title="Emitir Certificado desta Trilha"
                  >
                    <Award className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Syllabus / Lesson Checklist for Active Course */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h4 className="font-display font-bold text-base text-agro-blue mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-agro-green" />
                Aulas e Conteúdo deste Treinamento
              </h4>

              <div className="space-y-3">
                {activeCourse.lessons.map((lesson, idx) => {
                  const isCurrent = lesson.id === activeLessonId;
                  
                  return (
                    <div
                      key={lesson.id}
                      onClick={() => setActiveLessonId(lesson.id)}
                      className={`p-3.5 rounded-xl flex items-center justify-between gap-4 transition-all cursor-pointer border ${
                        isCurrent 
                          ? "bg-agro-blue/5 border-agro-blue/20 ring-1 ring-agro-blue/10" 
                          : "hover:bg-gray-50 border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 truncate">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleLessonComplete(activeCourseId, lesson.id);
                          }}
                          className={`p-0.5 rounded-full shrink-0 transition-colors ${
                            lesson.isCompleted 
                              ? "text-emerald-500 bg-emerald-50" 
                              : "text-gray-300 hover:text-gray-400"
                          }`}
                        >
                          <CheckCircle2 className="h-5 w-5 fill-current" />
                        </button>
                        
                        <div className="truncate text-left">
                          <p className={`text-xs font-semibold leading-tight truncate ${
                            isCurrent ? "text-agro-blue font-bold" : "text-gray-700"
                          }`}>
                            <span className="font-mono text-gray-400 mr-1.5">Aula {idx + 1}:</span>
                            {lesson.title}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-gray-400 font-mono">
                          {lesson.duration}
                        </span>
                        {isCurrent && (
                          <span className="h-1.5 w-1.5 bg-agro-green rounded-full" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TWO-GRID BONUS/PREMIUM FEATURES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* FEATURE 1: Proposal Templates & Contract Downloads */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                      <Download className="h-5 w-5" />
                    </span>
                    {!user.isPremium && (
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full text-[9px] font-black">
                        <Lock className="h-2.5 w-2.5" />
                        PREMIUM
                      </span>
                    )}
                  </div>
                  
                  <h4 className="font-display font-bold text-base text-agro-blue leading-snug">
                    Templates e Roteiros Comerciais
                  </h4>
                  <p className="font-sans text-xs text-gray-500 mt-2 leading-relaxed">
                    Baixe scripts prontos de prospecção fria para WhatsApp, matrizes de contorno de objeção focado em sementes e insumos, e modelos de proposta em PDF.
                  </p>
                </div>

                <div className="pt-6">
                  {user.isPremium ? (
                    <div className="space-y-2">
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          alert("Download Simulado: Script_Abordagem_WhatsApp_Agro.pdf baixado com sucesso!");
                        }}
                        className="w-full inline-flex items-center justify-between text-xs font-bold text-agro-blue hover:text-agro-green bg-gray-50 hover:bg-gray-100 p-3 rounded-xl transition-all"
                      >
                        <span>📄 Script_WhatsApp_Prospecção.pdf</span>
                        <Download className="h-4 w-4 shrink-0 text-gray-400" />
                      </a>
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          alert("Download Simulado: Planilha_Calculo_Relação_Troca_Barter.xlsx baixado com sucesso!");
                        }}
                        className="w-full inline-flex items-center justify-between text-xs font-bold text-agro-blue hover:text-agro-green bg-gray-50 hover:bg-gray-100 p-3 rounded-xl transition-all"
                      >
                        <span>📊 Calculadora_Barter_Saca.xlsx</span>
                        <Download className="h-4 w-4 shrink-0 text-gray-400" />
                      </a>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setLockFeatureMessage("🔒 O acesso a downloads de PDFs, scripts práticos e planilhas de cálculo de barter é exclusivo para assinantes Premium Elite. Faça o upgrade para desbloquear tudo!");
                      }}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-sans font-bold text-xs py-3 px-4 rounded-xl transition-colors"
                    >
                      <Lock className="h-3.5 w-3.5" />
                      DESBLOQUEAR DOWNLOADS
                    </button>
                  )}
                </div>
              </div>

              {/* FEATURE 2: AI RTV Mentor Chatbox */}
              <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col h-[340px] justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-display font-bold text-base text-agro-blue leading-snug">
                      Plantão de Dúvidas (RTV Mentor)
                    </h4>
                    {!user.isPremium && (
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full text-[9px] font-black">
                        <Lock className="h-2.5 w-2.5" />
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-[10px] text-gray-400 mb-3 leading-tight">
                    Tire dúvidas em tempo real sobre situações difíceis com o produtor rural.
                  </p>
                </div>

                {/* Chat window body */}
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 h-48 overflow-y-auto space-y-2 flex-grow text-left">
                  {chatHistory.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`p-2.5 rounded-xl text-xs max-w-[85%] ${
                        msg.sender === "mentor" 
                          ? "bg-white text-gray-700 border border-gray-100 rounded-tl-none self-start" 
                          : "bg-agro-blue text-white rounded-tr-none ml-auto"
                      }`}
                    >
                      <span className="font-sans leading-relaxed">{msg.text}</span>
                    </div>
                  ))}
                  {isTypingMentor && (
                    <div className="bg-white text-gray-400 border border-gray-100 p-2.5 rounded-xl rounded-tl-none text-[11px] self-start inline-block animate-pulse">
                      Digitando conselho RTV...
                    </div>
                  )}
                </div>

                {/* Send chat form */}
                <form onSubmit={handleSendChatMessage} className="mt-3 flex gap-2">
                  <input
                    type="text"
                    disabled={!user.isPremium}
                    placeholder={user.isPremium ? "Ex: Como vender sementes caras?" : "🔒 Exclusivo para assinantes Premium"}
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-200 rounded-xl text-xs text-gray-800 bg-gray-50 focus:bg-white focus:outline-none focus:border-agro-green transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!user.isPremium || !chatMessage.trim()}
                    className="p-2 bg-agro-blue hover:bg-agro-blue-light disabled:opacity-40 text-white rounded-xl transition-all"
                  >
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </form>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* MODAL 1: PREMIUM LOCKED EXTRAS AND ERROR MESSAGE */}
      {lockFeatureMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white max-w-md w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 text-center space-y-5">
            <div className="h-14 w-14 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center mx-auto text-amber-500">
              <Lock className="h-6 w-6" />
            </div>

            <h3 className="font-display font-bold text-lg text-agro-blue tracking-tight">
              Acesso Restrito / Requisito Necessário
            </h3>
            
            <p className="font-sans text-xs text-gray-600 leading-relaxed">
              {lockFeatureMessage}
            </p>

            <div className="flex gap-3 justify-center pt-2">
              <button
                onClick={() => setLockFeatureMessage(null)}
                className="px-5 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>
              {!user.isPremium && (
                <button
                  onClick={() => {
                    setLockFeatureMessage(null);
                    setSelectedPlan("plan-anual");
                    setCheckoutStep("plans");
                    setShowUpgradeModal(true);
                  }}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-colors shadow-md shadow-amber-500/15 flex items-center gap-1"
                >
                  <Sparkles className="h-4 w-4 fill-current" />
                  Upgrade Premium
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: GORGEOUS PREMIUM UPGRADE IN-APP CHECKOUT */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
          <div className="bg-white max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Modal header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500 fill-current" />
                <h3 className="font-display font-bold text-xl text-agro-blue tracking-tight">
                  Assinar AgroVendas Academy Premium
                </h3>
              </div>
              <button 
                onClick={() => setShowUpgradeModal(false)}
                className="text-gray-400 hover:text-gray-600 font-bold p-1 rounded-lg hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            {/* Checkout flow branches */}
            {checkoutStep === "plans" && (
              <div className="space-y-5">
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Desbloqueie certificados oficiais de conclusão, planilhas inteligentes de barter, simulação de objeções, e suporte integral de mentores agro. Confira sua assinatura abaixo:
                </p>

                {/* Plan Option: Mensal */}
                <div 
                  onClick={() => setSelectedPlan("plan-mensal")}
                  className="p-4.5 rounded-2xl border-2 transition-all cursor-pointer flex justify-between items-center border-agro-green bg-agro-green/5"
                >
                  <div className="text-left">
                    <h4 className="font-display font-bold text-sm text-agro-blue">Assinatura Mensal Completa</h4>
                    <p className="font-sans text-[11px] text-gray-500 mt-0.5">Acesso premium ilimitado a todas as ferramentas.</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-black text-lg text-agro-green">R$ 47,90<span className="text-[10px] text-gray-400 font-sans font-medium">/mês</span></p>
                    <p className="text-[9px] text-gray-400 font-sans mt-0.5 font-medium">Cancelamento grátis a qualquer momento</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                    <ShieldCheck className="h-4.5 w-4.5 text-agro-green" />
                    <span>Transação segura e garantia de 7 dias.</span>
                  </div>
                  <button
                    onClick={() => setCheckoutStep("form")}
                    className="bg-agro-green hover:bg-agro-green-dark text-white font-sans text-xs font-bold px-5 py-3 rounded-xl shadow-md uppercase tracking-wider"
                  >
                    Prosseguir para Pagamento
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === "form" && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl text-left text-xs text-gray-600 space-y-1">
                  <p><strong>Plano Selecionado:</strong> Assinatura Mensal Elite (R$ 47,90/mês)</p>
                  <p><strong>Benefício principal:</strong> Acesso irrestrito a todas as trilhas de estudos, downloads de planilhas e mentoria RTV.</p>
                </div>

                {/* Name */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider">Nome do Assinante</label>
                  <input
                    type="text"
                    required
                    value={checkoutName}
                    onChange={(e) => setCheckoutName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 font-sans font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider">E-mail para Faturamento</label>
                  <input
                    type="email"
                    required
                    value={checkoutEmail}
                    onChange={(e) => setCheckoutEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 font-sans font-medium"
                  />
                </div>

                {/* Payment simulation (Credit card/PIX mockup) */}
                <div className="border border-gray-100 p-4 rounded-2xl bg-white space-y-3.5 text-left">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Dados de Pagamento (Simulação de Sandbox)</span>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-agro-blue/5 border border-agro-blue/10 rounded-xl text-center cursor-pointer text-xs font-semibold text-agro-blue">
                      💳 Cartão de Crédito
                    </div>
                    <div className="p-3 bg-gray-50 border border-transparent rounded-xl text-center cursor-pointer text-xs font-semibold text-gray-500">
                      ⚡ Pix / Depósito
                    </div>
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      disabled
                      placeholder="••••  ••••  ••••  4242  (Simulado)"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep("plans")}
                    className="px-4 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold text-gray-500"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessingCheckout}
                    className="px-5 py-2.5 bg-agro-green hover:bg-agro-green-dark text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5 uppercase"
                  >
                    {isProcessingCheckout ? (
                      <>
                        <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Aprovando Transação...
                      </>
                    ) : (
                      <>
                        CONFIRMAR ASSINATURA AGORA
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {checkoutStep === "success" && (
              <div className="text-center py-6 space-y-5">
                <div className="h-16 w-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-500 animate-bounce">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-bold text-xl text-agro-blue">Parabéns! Sua Assinatura foi Ativada!</h4>
                  <p className="font-sans text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                    Seu acesso foi atualizado para a <strong>Assinatura Mensal Completa</strong>. Todos os certificados de conclusão, templates, scripts práticos e suporte RTV estão 100% liberados!
                  </p>
                </div>

                <button
                  onClick={() => setShowUpgradeModal(false)}
                  className="bg-agro-blue hover:bg-agro-blue-light text-white font-sans text-xs font-bold px-6 py-3 rounded-xl uppercase tracking-wider"
                >
                  Acessar Plataforma Completa
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* MODAL 3: GORGEOUS DYNAMIC OFFICIAL CERTIFICATE */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-400 space-y-6 text-center relative overflow-hidden">
            
            {/* Elegant framing border */}
            <div className="absolute inset-4 border border-amber-200 pointer-events-none rounded-2xl" />

            {/* Cert logo decor */}
            <div className="flex justify-center flex-col items-center gap-1.5 pt-4">
              <img
                src="/LOGO - LETRA PRETA - TRANS - HOR.png"
                alt="AgroVendas Academy Logo"
                className="h-10 sm:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-[10px] tracking-widest text-amber-600 uppercase mt-2">
                CERTIFICADO DE EXCELÊNCIA PROFISSIONAL
              </span>
            </div>

            <div className="space-y-6">
              <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">
                A Diretoria Acadêmica do AgroVendas Academy certifica que
              </p>

              <h4 className="font-display font-black text-2xl sm:text-3xl text-agro-blue border-b-2 border-gray-100 pb-3 inline-block max-w-lg">
                {user.name}
              </h4>

              <p className="font-sans text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                concluiu com êxito todas as aulas e obteve aprovação máxima nas simulações do treinamento prático de:
                <br />
                <strong className="text-agro-blue-light text-base block mt-2 font-bold font-display">
                  "{certificateCourseTitle}"
                </strong>
              </p>

              <p className="font-sans text-xs text-gray-400">
                Registrado sob carga horária oficial de <strong>20 horas letivas</strong> em {new Date().toLocaleDateString("pt-BR")}.
              </p>
            </div>

            {/* Bottom certificate signature / QR Code mock */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-left">
              <div className="space-y-1">
                <p className="font-display font-semibold text-xs text-gray-700">AgroVendas Acadêmico Ltda.</p>
                <p className="font-sans text-[10px] text-gray-400">Autenticador ID: AV-CERT-{Math.floor(Math.random() * 900000 + 100000)}</p>
              </div>

              {/* Mock QR Code */}
              <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl border border-gray-100">
                <div className="h-12 w-12 bg-gray-300 rounded flex items-center justify-center font-mono text-[8px] text-gray-700 text-center leading-none">
                  QR CODE SECURITY
                </div>
                <div className="text-[9px] text-gray-500 font-sans leading-tight">
                  <p className="font-bold">Validação Digital</p>
                  <p>Escaneie no LinkedIn</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-3 justify-center relative z-10">
              <button
                onClick={() => {
                  alert("Impressão / Download em PDF iniciado para " + user.name);
                  setShowCertificateModal(false);
                }}
                className="px-5 py-2.5 bg-agro-green hover:bg-agro-green-dark text-white font-sans text-xs font-bold rounded-xl shadow-md transition-all uppercase"
              >
                Imprimir / Salvar PDF
              </button>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="px-5 py-2.5 border border-gray-200 rounded-xl text-xs font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
