import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TargetAudience from "./components/TargetAudience";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Interviews from "./components/Interviews";
import CheckoutModal from "./components/CheckoutModal";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StudentPortal from "./components/StudentPortal";

interface UserProfile {
  name: string;
  email: string;
  isPremium: boolean;
}

export default function App() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTier, setCheckoutTier] = useState<"free" | "premium">("premium");

  // Load user session on startup
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("agrovendas_user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error("Error loading user from localStorage", e);
    } finally {
      setIsInitializing(false);
    }
  }, []);

  const handleSubscribeSuccess = (name: string, email: string, isPremium: boolean) => {
    const newUser: UserProfile = {
      name,
      email,
      isPremium
    };
    setUser(newUser);
    localStorage.setItem("agrovendas_user", JSON.stringify(newUser));
    setIsCheckoutOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("agrovendas_user");
  };

  const handleUpgrade = (planId?: string) => {
    if (user) {
      const updatedUser: UserProfile = {
        ...user,
        isPremium: true
      };
      setUser(updatedUser);
      localStorage.setItem("agrovendas_user", JSON.stringify(updatedUser));
    }
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-[#191c3d] flex items-center justify-center font-sans">
        <div className="text-center space-y-4">
          <div className="h-10 w-10 border-4 border-agro-green border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-white text-xs font-semibold uppercase tracking-widest">Carregando AgroVendas Academy...</p>
        </div>
      </div>
    );
  }

  // If student is logged in, show the immersive EAD Student Portal
  if (user) {
    return (
      <div className="relative min-h-screen bg-[#fafafa]">
        <StudentPortal 
          user={user} 
          onLogout={handleLogout} 
          onUpgrade={handleUpgrade} 
        />
        <WhatsAppButton />
      </div>
    );
  }

  const handleOpenCheckout = (tier: "free" | "premium") => {
    setCheckoutTier(tier);
    setIsCheckoutOpen(true);
  };

  const handleScrollToPlanos = () => {
    const targetElement = document.getElementById("planos");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Default Landing Page layout for guest visitors
  return (
    <div className="relative min-h-screen bg-[#fafafa] flex flex-col font-sans select-none antialiased">
      {/* Primary Header Navbar */}
      <Navbar onSubscribe={handleScrollToPlanos} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Dobra 1: Hero Section */}
        <Hero onSubscribe={handleScrollToPlanos} />

        {/* Dobra 2: Para quem é esta plataforma? */}
        <TargetAudience />

        {/* Dobra 3: Depoimentos */}
        <Testimonials />

        {/* Dobra 4: Como funciona a plataforma (Trilhas de conteúdo) */}
        <HowItWorks onSubscribe={handleScrollToPlanos} />

        {/* Dobra 4.2: Sessão de entrevistas exclusivas */}
        <Interviews />

        {/* Dobra 5: Valores de assinaturas */}
        <Pricing onSubscribe={handleOpenCheckout} />

        {/* Dobra 6: FAQ */}
        <FAQ />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        onSuccess={handleSubscribeSuccess} 
        initialTier={checkoutTier}
      />

      {/* Support floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
}
