import React from "react";
import Header from "../components/Header.jsx";
import heroQuadra from "../assets/hero-quadra.jpg";
import heroQuadraMobile from "../assets/quadra-hero-mobile.png";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between overflow-hidden bg-white">
      <div>
        <Header />

        {/* ---------- HERO DESKTOP ---------- */}
        <section
          className="hidden md:flex relative md:min-h-[680px] bg-cover bg-[center_25%] bg-no-repeat items-center
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[180px]
            before:bg-gradient-to-b before:from-white/65 before:via-white/5 before:to-transparent before:z-[1] before:pointer-events-none"
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

          {/* Degradê na parte inferior para suavizar a transição com o fundo branco */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-[2]" />
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
              className="absolute bottom-0 right-0 w-[65%] h-[110px] bg-[#0D2C6B]"
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

            {/* Degradê inferior no Mobile */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none z-[3]" />
          </div>
        </section>

        {/* ---------- SEÇÃO DE ESPORTES PRATICADOS ---------- */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2C6B]">
              Esportes Praticados
            </h2>
            <p className="text-gray-600 mt-2 max-w-lg mx-auto">
              Nossa quadra poliesportiva possui infraestrutura para receber diversas modalidades acadêmicas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Futsal */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-5 bg-blue-50 text-[#0D2C6B] rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                ⚽
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C6B] mb-2">Futsal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quadra oficial ideal para partidas dinâmicas, jogos de integração e treinos para competições universitárias.
              </p>
            </div>

            {/* Card Vôlei */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-5 bg-blue-50 text-[#0D2C6B] rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                🏐
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C6B] mb-2">Vôlei</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Estrutura completa para montagem de redes, excelente qualidade para saques, cortadas e treinos de equipe.
              </p>
            </div>

            {/* Card Basquete */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-5 bg-blue-50 text-[#0D2C6B] rounded-2xl flex items-center justify-center text-4xl shadow-inner">
                🏀
              </div>
              <h3 className="text-2xl font-bold text-[#0D2C6B] mb-2">Basquete</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tabelas e aros reforçados, garantindo total segurança para dribles, arremessos e partidas de basquetebol.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ---------- FOOTER AZUL MEIA LUA INVERTIDA ---------- */}
      <footer className="relative bg-[#09315c] text-white pt-20 pb-10 px-6 mt-16 overflow-hidden [clip-path:ellipse(150%_100%_at_50%_100%)] md:[clip-path:ellipse(120%_100%_at_50%_100%)]">
        {/* Curvatura Superior (Efeito Arco/Meia Lua) */}
        <div
          className="absolute top-0 left-0 w-full h-12 md:h-16 bg-white"
          style={{ borderRadius: "0 0 50% 50% / 0 0 100% 100%" }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto pt-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left relative z-10">
          {/* Coluna 1: Sobre o Projeto */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-3 tracking-wide border-b-2 border-[#3E7BFA] pb-1 inline-block">
              Sistema de Agendamento
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              Plataforma desenvolvida para organizar e simplificar o uso da quadra poliesportiva acadêmica, promovendo a prática de esportes e a interação entre os estudantes.
            </p>
          </div>

          {/* Coluna 2: Universidade UniFG */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-3 tracking-wide border-b-2 border-[#F5B400] pb-1 inline-block">
              Universidade UniFG
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed max-w-sm">
              Incentivando o esporte, a saúde e a excelência no ensino superior.
            </p>
            <ul className="text-xs text-blue-200 mt-3 space-y-1">
              <li>📍 Campus Universitário - UniFG</li>
              <li>🏀 Centro de Esportes e Convivência</li>
              {/* <li>🎓 Curso de Ciência da Computação</li> */}
            </ul>
          </div>

          {/* Coluna 3: Desenvolvedores */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-3 tracking-wide border-b-2 border-[#3E7BFA] pb-1 inline-block">
              Desenvolvedores
            </h3>
            <div className="space-y-3 text-sm text-blue-100"> 
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm w-full max-w-xs">
                <p className="font-semibold text-white">Welterson Gabriel Meira de Oliveira</p>
                <p className="text-xs text-blue-200">Estudante de Ciência da Computação</p>
              </div>
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm w-full max-w-xs">
                <p className="font-semibold text-white">Eric Junqueira</p>
                <p className="text-xs text-blue-200">Estudante de Análise e Desenvolvimento de Sistemas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor e Copyright */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-blue-800/80 text-center text-xs text-blue-300">
          <p>© {new Date().getFullYear()} UniFG — Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}