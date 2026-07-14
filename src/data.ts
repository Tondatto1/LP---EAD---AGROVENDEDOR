import { AudienceItem, Testimonial, StepItem, PricingPlan, FAQItem } from "./types";

export const audienceItems: AudienceItem[] = [
  {
    id: "audience-1",
    title: "Consultores e RTVs (Representantes Técnicos)",
    description: "Para profissionais de campo que precisam contornar a objeção do preço das commodities, destacar o valor técnico de seus produtos e fechar contratos robustos nas fazendas.",
    iconName: "UserCheck"
  },
  {
    id: "audience-2",
    title: "Gerentes Comerciais de Revendas e Cooperativas",
    description: "Lideranças focadas em capacitar sua equipe para defender margens, aumentar o 'share-of-wallet' nos produtores da região e gerenciar carteiras de alta performance.",
    iconName: "Users"
  },
  {
    id: "audience-3",
    title: "Vendedores de Máquinas e Implementos Agro",
    description: "Especialistas que atuam com vendas complexas de bens de capital de alto valor, dependentes de ciclos de safra, safrinha, carência e financiamentos bancários.",
    iconName: "Truck"
  },
  {
    id: "audience-4",
    title: "Profissionais de Biológicos, Nutrição e Tecnologia",
    description: "Profissionais que introduzem inovações no campo e precisam vencer a barreira cultural de adoção, provando o ROI financeiro por hectare de forma incontestável.",
    iconName: "Sprout"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Sandro Bento Silveira",
    role: "RTV Sênior de Sementes e Nutrição",
    company: "AgroForte Distribuidora - Londrina/PR",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
    text: "Depois de aplicar o método de contorno de objeções focado nas dores reais do agricultor, consegui reverter três contas que só compravam da concorrência por preço. O investimento se pagou em uma única venda.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Carla Montenegro",
    role: "Diretora de Desenvolvimento Comercial",
    company: "Grupo TerraViva - Sorriso/MT",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
    text: "Adotamos as trilhas de aprendizado para nossos 45 profissionais de vendas de campo. Pela primeira vez na história da empresa, nossa equipe defendeu o valor do portfólio sem precisar queimar margem na largada do plantio.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Mateus Junqueira",
    role: "Gerente de Contas Especiais",
    company: "Insumos do Triângulo - Uberlândia/MG",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256",
    text: "O módulo focado em operações de Barter e proteção cambial clareou toda a nossa abordagem. Conseguimos traduzir conceitos financeiros complexos em sacas de soja, conectando diretamente com a mente do produtor.",
    rating: 5
  }
];

export const stepItems: StepItem[] = [
  {
    id: "step-1",
    number: "01",
    title: "Aulas Práticas de Microlearning",
    description: "Vídeos focados e dinâmicos de 10 a 15 minutos, gravados por especialistas que vivem o agro. Assista entre uma visita e outra no campo ou diretamente na estrada.",
    iconName: "Tv"
  },
  {
    id: "step-2",
    number: "02",
    title: "Simulador de Objeções Agro",
    description: "Ferramentas interativas e estudos de casos reais sobre como lidar com barganhas de cooperados, quebra de safras, oscilação de commodities e concorrência agressiva.",
    iconName: "MessageSquareText"
  },
  {
    id: "step-3",
    number: "03",
    title: "Mentoria e Casos Reais",
    description: "Encontros online ao vivo para debater cenários reais de negociação trazidos pelos alunos. Uma verdadeira consultoria comercial coletiva para resolver seus gargalos de vendas.",
    iconName: "Compass"
  },
  {
    id: "step-4",
    number: "04",
    title: "Certificação Profissional de Elite",
    description: "Selo de especialista em negociação no agro, reconhecido pelo mercado de revendas e grandes multinacionais, acelerando sua empregabilidade e prestígio profissional.",
    iconName: "Award"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-mensal",
    name: "Assinatura Mensal Completa",
    price: 47.90,
    period: "/ mês",
    description: "Acesso completo e imediato a todas as trilhas, simuladores de objeções, scripts prontos e certificados oficiais de conclusão.",
    features: [
      "Acesso ilimitado a todas as trilhas de treinamento (Prospecção, Negociação, Barter e Fidelização)",
      "Simuladores interativos de objeções de preço e negociação na porteira",
      "Modelos e scripts práticos de prospecção fria prontos para download",
      "Emissão de certificados oficiais de conclusão de especialista",
      "Suporte via comunidade integrada de alunos e RTV Mentor",
      "Sem taxa de adesão ou fidelidade (cancele quando quiser)"
    ],
    popular: true,
    ctaText: "COMEÇAR ASSINATURA AGORA"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como acesso os cursos?",
    answer: "Você pode criar seu cadastro gratuitamente e navegar pela plataforma para conhecer todos os treinamentos. Quando decidir iniciar, basta clicar em qualquer curso bloqueado e fazer sua assinatura para liberar o acesso completo à plataforma. Você também pode realizar a assinatura diretamente pela página da Plataforma EAD Agrovendedor."
  },
  {
    id: "faq-2",
    question: "Posso assistir pelo celular?",
    answer: "Sim. A plataforma funciona em computadores, tablets e smartphones, permitindo que você estude de onde estiver."
  },
  {
    id: "faq-3",
    question: "Os cursos são voltados apenas para o agronegócio?",
    answer: "Os treinamentos têm como foco o agronegócio, mas grande parte das estratégias comerciais também pode ser aplicada em outros segmentos de vendas."
  },
  {
    id: "faq-4",
    question: "Quanto tempo tenho para concluir os cursos?",
    answer: "Enquanto sua assinatura estiver ativa, você pode assistir aos treinamentos no seu ritmo, quantas vezes quiser."
  },
  {
    id: "faq-5",
    question: "Como funciona o cancelamento da assinatura?",
    answer: "Você pode cancelar sua assinatura quando desejar."
  },
  {
    id: "faq-6",
    question: "Preciso pagar para conhecer a plataforma?",
    answer: "Não. Você pode criar seu cadastro gratuitamente, navegar pela plataforma e acessar as entrevistas que estão liberadas de forma gratuita."
  },
  {
    id: "faq-7",
    question: "Posso assistir às aulas quantas vezes quiser?",
    answer: "Sim. Enquanto sua assinatura estiver ativa, você pode acessar os cursos e rever as aulas sempre que desejar."
  },
  {
    id: "faq-8",
    question: "Novos cursos serão adicionados à plataforma?",
    answer: "Sim. A plataforma está em constante evolução e novos conteúdos poderão ser disponibilizados para os assinantes ao longo do tempo."
  },
  {
    id: "faq-9",
    question: "Como funciona a assinatura?",
    answer: "A assinatura é mensal e garante acesso ilimitado aos cursos exclusivos da plataforma enquanto estiver ativa."
  },
  {
    id: "faq-10",
    question: "Existe suporte caso eu tenha alguma dúvida?",
    answer: "Sim. Caso precise de ajuda com acesso ou utilização da plataforma, nossa equipe estará disponível para prestar suporte."
  },
  {
    id: "faq-11",
    question: "Ainda tenho dúvidas. Como entro em contato?",
    answer: "Você pode entrar em contato com nossa equipe pelo Whatsapp disponibilizado na página da Plataforma EAD Agrovendedor."
  }
];
