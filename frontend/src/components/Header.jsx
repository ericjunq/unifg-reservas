import React from "react";
import { Link } from "react-router-dom";
import logoUnifg from "../assets/logo-unifg.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="unifg-header">
      <img src={logoUnifg} alt="UniFG - Centro Universitário" className="unifg-logo" />
      <Link to="/reservar" className="unifg-btn-reservar">
        Reservar
      </Link>
    </header>
  );
}
