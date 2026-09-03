import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";

// TODO: confirme esta lista com a secretaria/site oficial da UniFG —
// usei os cursos mais comuns oferecidos pela instituição em Guanambi/BA
// como ponto de partida, mas pode haver cursos a mais ou a menos.
const CURSOS = [
  "Administração",
  "Arquitetura e Urbanismo",
  "Ciência da Computação e ADS",
  "Ciências Contábeis",
  "Direito",
  "Educação Física",
  "Enfermagem",
  "Engenharia Civil",
  "Fisioterapia",
  "Medicina Veterinária",
  "Nutrição",
  "Odontologia",
  "Pedagogia",
  "Psicologia",
  "Serviço Social",
];

export default function Cadastro() {
  const location = useLocation();
  const raPreenchido = location.state?.ra || "";
  const [form, setForm] = useState({ nome: "", ra: raPreenchido, telefone: "", curso: "" });
  const [showCursos, setShowCursos] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function handleChange(campo, valor) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  function handleTelefoneChange(valor) {
    // mantém só dígitos e formata (xx) xxxxx-xxxx
    const digitos = valor.replace(/\D/g, "").slice(0, 11);
    let formatado = digitos;
    if (digitos.length > 2) formatado = `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
    if (digitos.length > 7) {
      formatado = `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
    }
    handleChange("telefone", formatado);
  }

  function selecionarCurso(curso) {
    handleChange("curso", curso);
    setShowCursos(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: integrar com a API/backend de reservas.
    // Ex.: await fetch("/api/reservas", { method: "POST", body: JSON.stringify(form) })
    console.log("Dados da reserva:", form);
    setEnviado(true);
  }

  const podeEnviar = form.nome.trim() && form.ra.trim() && form.telefone.trim() && form.curso;

  return (
    <div className="w-full min-h-screen overflow-hidden bg-slate-50">
      <Header />

      <section className="px-6 py-10 md:py-16 flex justify-center">
        <div className="w-full max-w-md">
          {/* faixa de destaque */}
          <div className="flex items-center gap-[10px] mb-4" aria-hidden="true">
            <span className="w-[22px] h-[4px] bg-unifg-blue -skew-x-[25deg] shrink-0" />
            <span className="flex-1 h-[2px] bg-[#F5B400]" />
          </div>

          <h1 className="text-2xl md:text-3xl font-black italic text-unifg-blue leading-tight">
            Reserve seu horário
            <br />
            na Quadra UniFG
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Preencha seus dados para poder reservar a quadra.
          </p>
          {raPreenchido && (
            <p className="mt-3 rounded-lg bg-[#F5B400]/15 border border-[#F5B400]/40 px-4 py-2 text-sm text-unifg-blue">
              Não encontramos o RA <strong>{raPreenchido}</strong> cadastrado. Confirme seus dados abaixo para continuar.
            </p>
          )}

          {enviado ? (
            <div className="mt-8 rounded-xl border border-unifg-blue/20 bg-white p-6 text-center shadow-sm">
              <p className="text-unifg-blue font-bold text-lg">Reserva enviada! ✅</p>
              <p className="mt-2 text-sm text-slate-500">
                Confirmamos os dados de {form.nome}. Em breve você recebe a confirmação do horário.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm({ nome: "", ra: "", telefone: "", curso: "" });
                  setEnviado(false);
                }}
                className="mt-5 text-sm font-semibold text-unifg-blue underline underline-offset-4"
              >
                Fazer nova reserva
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-unifg-blue mb-1">
                  Nome completo
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => handleChange("nome", e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-unifg-blue focus:ring-2 focus:ring-unifg-blue/20"
                />
              </div>

              <div>
                <label htmlFor="ra" className="block text-sm font-semibold text-unifg-blue mb-1">
                  RA (matrícula)
                </label>
                <input
                  id="ra"
                  type="text"
                  required
                  value={form.ra}
                  onChange={(e) => handleChange("ra", e.target.value)}
                  placeholder="Ex.: 2024001234"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-unifg-blue focus:ring-2 focus:ring-unifg-blue/20"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-unifg-blue mb-1">
                  Telefone
                </label>
                <input
                  id="telefone"
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) => handleTelefoneChange(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-unifg-blue focus:ring-2 focus:ring-unifg-blue/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-unifg-blue mb-1">Curso</label>
                <button
                  type="button"
                  onClick={() => setShowCursos(true)}
                  className={`w-full flex items-center justify-between rounded-lg border px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-unifg-blue/20 ${
                    form.curso ? "border-slate-300 text-slate-800" : "border-slate-300 text-slate-400"
                  }`}
                >
                  <span>{form.curso || "Selecione seu curso"}</span>
                  <span className="text-unifg-blue" aria-hidden="true">
                    ▾
                  </span>
                </button>
              </div>

              <button
                type="submit"
                disabled={!podeEnviar}
                className="w-full rounded-lg bg-unifg-blue py-3 font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Confirmar reserva
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Popup de seleção de curso */}
      {showCursos && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 px-0 md:px-4"
          onClick={() => setShowCursos(false)}
        >
          <div
            className="w-full md:max-w-sm max-h-[75vh] overflow-hidden rounded-t-2xl md:rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="font-bold text-unifg-blue">Selecione seu curso</h2>
              <button
                type="button"
                onClick={() => setShowCursos(false)}
                aria-label="Fechar"
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
            <ul className="max-h-[60vh] overflow-y-auto py-2">
              {CURSOS.map((curso) => (
                <li key={curso}>
                  <button
                    type="button"
                    onClick={() => selecionarCurso(curso)}
                    className={`w-full text-left px-5 py-3 text-sm transition hover:bg-slate-50 ${
                      form.curso === curso ? "text-unifg-blue font-semibold" : "text-slate-700"
                    }`}
                  >
                    {curso}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 