import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isBarVisible, setIsBarVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Dynamically check if the fixed bottom bar is in the DOM to avoid overlapping
  useEffect(() => {
    const checkBottomBar = () => {
      const bar = document.getElementById("fixed-bottom-bar");
      setIsBarVisible(!!bar);
    };

    checkBottomBar();
    window.addEventListener("scroll", checkBottomBar);
    
    // Periodically poll in case of state dismissals or manual clicks
    const interval = setInterval(checkBottomBar, 300);

    return () => {
      window.removeEventListener("scroll", checkBottomBar);
      clearInterval(interval);
    };
  }, []);

  // Show tooltip after a small delay on load, then hide it, to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 6000);
      return () => clearTimeout(hideTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/556798190294?text=${encodeURIComponent("Olá! Estou na página da plataforma e tenho uma dúvida.")}`;

  return (
    <div
      className={`fixed right-6 z-50 flex items-center gap-3 transition-all duration-500 ease-out ${
        isBarVisible ? "bottom-24 sm:bottom-28" : "bottom-6 sm:bottom-8"
      }`}
    >
      {/* Interactive Tooltip label */}
      <div
        className={`bg-white text-gray-800 border border-gray-100 text-xs font-semibold px-3.5 py-2 rounded-xl shadow-md pointer-events-none transition-all duration-300 hidden md:block ${
          showTooltip
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-4 scale-95"
        }`}
      >
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
          Suporte via WhatsApp
        </span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300 active:scale-95 group"
        aria-label="Falar com o suporte no WhatsApp"
      >
        {/* Pulsating Radar Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-300" />
        
        {/* Icon wrapper */}
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="h-7 w-7 fill-white/10" />
        </div>

        {/* Small badge/indicator */}
        <span className="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-red-500" />
      </a>
    </div>
  );
}
