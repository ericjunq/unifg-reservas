import React from "react";
import Header from "../components/Header.jsx";
import heroQuadra from "../assets/hero-quadra.jpg";
import heroQuadraMobile from "../assets/quadra-hero-mobile.png";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      {/* ---------- HERO DESKTOP ---------- */}
      <section
        className="hidden md:flex relative md:min-h-[640px] bg-cover bg-[center_25%] bg-no-repeat items-center
          before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[180px]
          before:bg-gradient-to-b before:from-black/65 before:via-black/35 before:to-transparent before:z-[1] before:pointer-events-none"
        style={{ backgroundImage: `url(${heroQuadra})` }}
      >
        {/* Pontinhos decorativos */}
        <svg
          className="absolute top-[90px] left-[24px] w-[110px] h-[110px] z-[2]"
          viewBox="0 0 120 120"
          aria-hidden="true"
        >
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 18 + 6}
                cy={row * 18 + 6}
                r="2.5"
                fill="#0D2C6B"
                opacity={1 - (row + col) * 0.06}
              />
            ))
          )}
        </svg>

        {/* Tracinhos diagonais */}
        <div className="flex absolute top-[108px] left-[46px] items-center gap-[6px] z-[2]" aria-hidden="true">
          <span className="inline-block w-[16px] h-[4px] -skew-x-[25deg] rounded-[1px] bg-unifg-blue" />
          <span className="inline-block w-[16px] h-[4px] -skew-x-[25deg] rounded-[1px] bg-unifg-blue" />
        </div>

        {/* Bloco de texto */}
        
      </section>

      {/* ---------- HERO MOBILE ---------- */}
      <section className="md:hidden relative bg-white pt-8 overflow-hidden">
        {/* pontinhos decorativos no canto superior esquerdo */}
        <svg className="absolute top-3 left-3 w-[70px] h-[70px] z-[2]" viewBox="0 0 90 90" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 16 + 5}
                cy={row * 16 + 5}
                r="2.2"
                fill="#0D2C6B"
                opacity={1 - (row + col) * 0.07}
              />
            ))
          )}
        </svg>

        

        {/* Foto dos atletas */}
        <div className="relative mt-6">
          <img
            src={heroQuadraMobile}
            alt="Atletas da UniFG jogando vôlei, futsal e basquete na quadra"
            className="w-full h-auto object-cover"
          />

          {/* faixa diagonal decorativa no canto inferior direito */}
          <div
            className="absolute bottom-0 right-0 w-[65%] h-[110px] bg-unifg-blue"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
            aria-hidden="true"
          />
          <div className="absolute bottom-[52px] right-8 flex items-center gap-[5px]" aria-hidden="true">
            <span className="w-[16px] h-[4px] -skew-x-[25deg] rounded-[1px] bg-[#3E7BFA]" />
            <span className="w-[16px] h-[4px] -skew-x-[25deg] rounded-[1px] bg-white" />
            <span className="w-[16px] h-[4px] -skew-x-[25deg] rounded-[1px] bg-[#F5B400]" />
            <span className="w-[16px] h-[4px] -skew-x-[25deg] rounded-[1px] bg-white" />
            <span className="flex-1 h-[2px] w-10 bg-[#F5B400] opacity-80" />
          </div>
        </div>
      </section>
    </div>
  );
}