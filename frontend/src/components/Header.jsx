import React from "react";
import { Link } from "react-router-dom";
import logoUnifg from "../assets/logo-unifg.png";
import Cadastro from "../pages/Cadastro";

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-[18px] 
    py-[7px] bg-unifg-white  border-unifg-blue" b>
      <img 
        src={logoUnifg} 
        alt="UniFG - Centro Universitário" 
        className="h-[30px] w-auto object-contain" 
      />
      <Link 
        to="/Reserva" 
        className="inline-block px-[20px] py-[8px] rounded-full
            color bg-unifg-blue
            border border-[#38bdf8]/50 text-white
            font-bold text-[15px] no-underline cursor-pointer transition-all duration-200 ease-in-out
            hover:brightness-110 hover:-translate-y-[1px]
            focus-visible:outline-3 focus-visible:outline-unifg-yellow focus-visible:outline-offset-2"
              >
        Reservar
      </Link>
    </header>
  );
}   