export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StepItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
}
