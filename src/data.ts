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
    question: "Os cursos servem para quem vende maquinários pesados?",
    answer: "Com certeza! Temos trilhas de aprendizado e materiais didáticos desenhados especialmente para lidar com as especificidades do mercado de máquinas e implementos rurais, cobrindo tópicos como cálculo de depreciação, ROI da automação agrícola, negociações com carência e linhas de financiamento como o Moderfrota."
  },
  {
    id: "faq-2",
    question: "Como funciona a garantia e o reembolso?",
    answer: "Nós confiamos plenamente na qualidade do nosso treinamento. Por isso, oferecemos uma garantia incondicional de 7 dias úteis. Caso você se inscreva e sinta que a plataforma não atende ao seu perfil no dia a dia do campo, basta solicitar o reembolso por e-mail e devolveremos 100% do valor pago, sem burocracias."
  },
  {
    id: "faq-3",
    question: "As aulas são ao vivo ou gravadas? Qual a flexibilidade?",
    answer: "A maior parte das nossas trilhas de treinamento é composta por videoaulas gravadas, o que permite que você assista no seu próprio ritmo, nos horários em que estiver livre na estrada ou nos intervalos de visitas. No entanto, o plano Elite do Agro também conta com mentorias mensais ao vivo, que são gravadas para quem não puder comparecer no dia."
  },
  {
    id: "faq-4",
    question: "Posso acessar a plataforma offline ou no celular?",
    answer: "Sim! Nosso aplicativo web é 100% responsivo para celulares e tablets. No plano anual, os alunos conseguem baixar o material de apoio em PDFs estruturados e checklists práticos para consultar no campo mesmo sem sinal de internet (onde muitas fazendas não possuem cobertura)."
  },
  {
    id: "faq-5",
    question: "O que é abordado sobre Operações de Barter?",
    answer: "Abordamos de maneira prática como estruturar propostas comerciais onde a moeda de troca é o grão ou a fibra (soja, milho, algodão, café). Ensinamos você a calcular com segurança a relação de troca físico/financeiro, demonstrar as vantagens de hedge de mercado para o produtor e quebrar o medo de oscilações cambiais na mesa de negociação."
  }
];
