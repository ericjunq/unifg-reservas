import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

// A página de Reserva ainda não foi construída — troque este stub
// por src/pages/Reserva.jsx quando formos fazer essa tela.
function Reserva() {
  return <h1 style={{ padding: 48 }}>Página de reserva (em breve)</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reserva />} />
      </Routes>
    </BrowserRouter>
  );
}
