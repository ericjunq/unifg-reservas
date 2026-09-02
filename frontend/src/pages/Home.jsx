import React from "react";
import Header from "../components/Header.jsx";
import logoUnifg from "../assets/logo-unifg.png";
import heroQuadra from "../assets/hero-quadra.jpg";
import "./Home.css";


export default function Home() {
  return (
    <div className="unifg-home">
      <Header />

      <section
        className="unifg-hero"
        style={{ backgroundImage: `url(${heroQuadra})` }}
      >
        <div className="unifg-hero-overlay" />

        {/* pontinhos decorativos no canto superior esquerdo */}
        <svg className="unifg-dots" viewBox="0 0 120 120" aria-hidden="true">
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

        {/* tracinhos diagonais amarelo/azul */}
        <div className="unifg-dashes" aria-hidden="true">
          <span className="dash dash-yellow" />
          <span className="dash dash-yellow" />
          <span className="dash dash-blue" />
          <span className="dash dash-blue" />
        </div>

        <div className="unifg-content">
          <div className="unifg-rule unifg-rule-top" aria-hidden="true">
            <span className="tick" />
            <span className="line" />
            <span className="tick" />
          </div>

          <h1 className="unifg-headline">
            <span className="line-1">REGISTRE</span>
            <span className="line-2">
              SEU <span className="light">HORÁRIO</span>
            </span>
            <span className="line-3">
              <span className="accent-bar" />
              NA <span className="highlight">QUADRA UNIFG</span>
            </span>
          </h1>

          <div className="unifg-rule unifg-rule-bottom" aria-hidden="true" />
        </div>
      </section>
    </div>
  );
}
