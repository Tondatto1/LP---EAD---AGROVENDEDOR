import React, { useMemo } from "react";
import LogoLoop from "./LogoLoop";

export default function Interviews() {
  const row1Images = useMemo(() => [
    "/Entrevista 01.png",
    "/Entrevista 02.png",
    "/Entrevista 03.png",
    "/Entrevista 04.png",
  ], []);

  const row2Images = useMemo(() => [
    "/Entrevista 05.png",
    "/Entrevista 06.png",
    "/Entrevista 07.png",
    "/Entrevista 08.png",
  ], []);

  const row1Logos = useMemo(() => row1Images.map((imgSrc, idx) => ({
    node: (
      <div className="perpetual-border-card w-[240px] sm:w-[280px] md:w-[320px] aspect-square rounded-[24px] shadow-md hover:shadow-xl transition-all duration-300">
        <div className="perpetual-border-card-inner overflow-hidden rounded-[21px] flex items-center justify-center bg-white">
          <img
            src={imgSrc}
            alt={`Entrevista ${idx + 1}`}
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    )
  })), [row1Images]);

  const row2Logos = useMemo(() => row2Images.map((imgSrc, idx) => ({
    node: (
      <div className="perpetual-border-card w-[240px] sm:w-[280px] md:w-[320px] aspect-square rounded-[24px] shadow-md hover:shadow-xl transition-all duration-300">
        <div className="perpetual-border-card-inner overflow-hidden rounded-[21px] flex items-center justify-center bg-white">
          <img
            src={imgSrc}
            alt={`Entrevista ${idx + 5}`}
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    )
  })), [row2Images]);

  return (
    <section id="entrevistas" className="bg-[#fafafa] py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-agro-blue tracking-tight">
            Série Especial de Entrevistas no Campo
          </h2>
        </div>
      </div>

      {/* Infinite loop rows */}
      <div className="flex flex-col gap-8 md:gap-10 w-full overflow-hidden py-4">
        {/* Row 1: moves to the right */}
        <div className="w-full relative">
          <LogoLoop
            logos={row1Logos}
            speed={40}
            direction="right"
            logoHeight={320}
            gap={32}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#fafafa"
          />
        </div>

        {/* Row 2: moves to the left */}
        <div className="w-full relative">
          <LogoLoop
            logos={row2Logos}
            speed={40}
            direction="left"
            logoHeight={320}
            gap={32}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="#fafafa"
          />
        </div>
      </div>
    </section>
  );
}


