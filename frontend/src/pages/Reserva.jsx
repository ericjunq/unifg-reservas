import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

const RAS_CADASTRADOS_DEMO = ["123456", "654321"];

function checkRaCadastrado(ra) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RAS_CADASTRADOS_DEMO.includes(ra.trim()));
    }, 600);
  });
}

const DIAS_SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"];

const MESES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const HORARIOS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

function ehMesmoDia(a, b) {
  if (!a || !b) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function ehPassado(data) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const dataComparada = new Date(data);
  dataComparada.setHours(0, 0, 0, 0);

  return dataComparada < hoje;
}

function horariosOcupados(data) {
  const seed = data.getDate() + data.getMonth() * 31;

  return HORARIOS.filter((_, i) => (seed * (i + 3)) % 7 === 0);
}

export default function Reserva() {
  const navigate = useNavigate();

  const hoje = useMemo(() => {
    const data = new Date();
    data.setHours(0, 0, 0, 0);
    return data;
  }, []);

  const [mesAtual, setMesAtual] = useState(
    new Date(hoje.getFullYear(), hoje.getMonth(), 1)
  );

  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [ra, setRa] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [reservado, setReservado] = useState(false);

  const ocupadosDoDia = dataSelecionada
    ? horariosOcupados(dataSelecionada)
    : [];

  const diasDoGrid = useMemo(() => {
    const ano = mesAtual.getFullYear();
    const mes = mesAtual.getMonth();

    const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
    const totalDias = new Date(ano, mes + 1, 0).getDate();

    const dias = [];

    for (let i = 0; i < primeiroDiaSemana; i++) {
      dias.push(null);
    }

    for (let dia = 1; dia <= totalDias; dia++) {
      dias.push(new Date(ano, mes, dia));
    }

    return dias;
  }, [mesAtual]);

  function mudarMes(delta) {
    setMesAtual((prev) => {
      const novoMes = new Date(
        prev.getFullYear(),
        prev.getMonth() + delta,
        1
      );

      // Não permite navegar para antes do mês atual
      const primeiroMesPermitido = new Date(
        hoje.getFullYear(),
        hoje.getMonth(),
        1
      );

      if (novoMes < primeiroMesPermitido) {
        return primeiroMesPermitido;
      }

      return novoMes;
    });

    setDataSelecionada(null);
    setHorarioSelecionado(null);
    setErro("");
  }

  function selecionarData(dia) {
    if (!dia || ehPassado(dia)) return;

    setDataSelecionada(dia);
    setHorarioSelecionado(null);
    setErro("");
  }

  async function handleReservar() {
    setErro("");

    if (!ra.trim()) {
      setErro("Informe seu RA para continuar.");
      return;
    }

    if (!dataSelecionada) {
      setErro("Selecione uma data.");
      return;
    }

    if (!horarioSelecionado) {
      setErro("Selecione um horário.");
      return;
    }

    setCarregando(true);

    const cadastrado = await checkRaCadastrado(ra);

    setCarregando(false);

    if (!cadastrado) {
      navigate("/cadastro", {
        state: { ra: ra.trim() },
      });

      return;
    }

    // Reserva confirmada
    setReservado(true);
  }

  function novaReserva() {
    setReservado(false);
    setDataSelecionada(null);
    setHorarioSelecionado(null);
    setRa("");
    setErro("");
  }

  const podeVoltarMes =
    mesAtual.getFullYear() > hoje.getFullYear() ||
    (
      mesAtual.getFullYear() === hoje.getFullYear() &&
      mesAtual.getMonth() > hoje.getMonth()
    );

  return (
    <div className="w-full min-h-screen bg-slate-50">
      <Header />

      {/* FAIXA DE TOPO */}
      <section className="relative overflow-hidden bg-unifg-blue">
        {/* Decoração esquerda */}
        <svg
          className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none"
          viewBox="0 0 90 90"
          aria-hidden="true"
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 16 + 5}
                cy={row * 16 + 5}
                r="2.2"
                fill="#FFFFFF"
              />
            ))
          )}
        </svg>

        {/* Decoração direita */}
        <div
          className="absolute right-6 bottom-5 flex items-center gap-[5px] opacity-80 pointer-events-none"
          aria-hidden="true"
        >
          <span className="w-4 h-1 -skew-x-[25deg] bg-[#F5B400]" />
          <span className="w-4 h-1 -skew-x-[25deg] bg-white" />
          <span className="w-4 h-1 -skew-x-[25deg] bg-[#F5B400]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-10 md:py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-black italic text-white leading-tight">
            Reserve seu horário na quadra
          </h1>

          <p className="mt-2 text-white/80 text-sm md:text-base">
            Informe seu RA, escolha o dia e o horário. É rápido.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-6 pt-8 md:pt-10 pb-16">
        <div className="max-w-4xl mx-auto">
          {reservado ? (
            <div className="rounded-2xl bg-white shadow-lg p-8 text-center max-w-md mx-auto">
              <div className="mx-auto w-14 h-14 rounded-full bg-[#F5B400]/20 flex items-center justify-center text-2xl">
                🏀
              </div>

              <p className="mt-4 text-unifg-blue font-black text-xl italic">
                Horário reservado!
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {dataSelecionada?.toLocaleDateString("pt-BR", {
                  weekday: "long",
                  day: "2-digit",
                  month: "long",
                })}
                {" às "}
                {horarioSelecionado}
              </p>

              <button
                type="button"
                onClick={novaReserva}
                className="mt-6 text-sm font-semibold text-unifg-blue underline underline-offset-4"
              >
                Fazer outra reserva
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-6">
              {/* CALENDÁRIO + HORÁRIOS */}
              <div className="rounded-2xl bg-white shadow-lg p-5 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={() => mudarMes(-1)}
                    disabled={!podeVoltarMes}
                    aria-label="Mês anterior"
                    className={[
                      "w-9 h-9 rounded-full flex items-center justify-center transition",
                      podeVoltarMes
                        ? "text-unifg-blue hover:bg-slate-100"
                        : "text-slate-300 cursor-not-allowed",
                    ].join(" ")}
                  >
                    ‹
                  </button>

                  <p className="font-bold text-unifg-blue">
                    {MESES[mesAtual.getMonth()]} {mesAtual.getFullYear()}
                  </p>

                  <button
                    type="button"
                    onClick={() => mudarMes(1)}
                    aria-label="Próximo mês"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-unifg-blue hover:bg-slate-100 transition"
                  >
                    ›
                  </button>
                </div>

                {/* DIAS DA SEMANA */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-400 mb-2">
                  {DIAS_SEMANA.map((dia, i) => (
                    <span key={i}>{dia}</span>
                  ))}
                </div>

                {/* DIAS */}
                <div className="grid grid-cols-7 gap-1">
                  {diasDoGrid.map((dia, i) => {
                    if (!dia) {
                      return <span key={`vazio-${i}`} />;
                    }

                    const passado = ehPassado(dia);
                    const selecionado = ehMesmoDia(
                      dia,
                      dataSelecionada
                    );
                    const ehHoje = ehMesmoDia(dia, hoje);

                    return (
                      <button
                        key={dia.toISOString()}
                        type="button"
                        disabled={passado}
                        onClick={() => selecionarData(dia)}
                        className={[
                          "aspect-square rounded-lg text-sm font-semibold transition",
                          passado
                            ? "text-slate-300 cursor-not-allowed"
                            : selecionado
                            ? "bg-unifg-blue text-white shadow-md"
                            : ehHoje
                            ? "text-unifg-blue border border-[#F5B400] hover:bg-slate-50"
                            : "text-slate-700 hover:bg-slate-100",
                        ].join(" ")}
                      >
                        {dia.getDate()}
                      </button>
                    );
                  })}
                </div>

                {/* HORÁRIOS */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-unifg-blue mb-3">
                    {dataSelecionada
                      ? `Horários em ${dataSelecionada.toLocaleDateString(
                          "pt-BR",
                          {
                            day: "2-digit",
                            month: "2-digit",
                          }
                        )}`
                      : "Selecione uma data para ver os horários"}
                  </p>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {HORARIOS.map((h) => {
                      const ocupado =
                        dataSelecionada &&
                        ocupadosDoDia.includes(h);

                      const selecionado =
                        horarioSelecionado === h;

                      return (
                        <button
                          key={h}
                          type="button"
                          disabled={!dataSelecionada || ocupado}
                          onClick={() =>
                            setHorarioSelecionado(h)
                          }
                          className={[
                            "rounded-full py-2 text-sm font-semibold transition border",
                            !dataSelecionada
                              ? "border-slate-200 text-slate-300 cursor-not-allowed"
                              : ocupado
                              ? "border-slate-200 text-slate-300 line-through cursor-not-allowed bg-slate-50"
                              : selecionado
                              ? "border-[#F5B400] bg-[#F5B400] text-unifg-blue"
                              : "border-unifg-blue/30 text-unifg-blue hover:bg-unifg-blue/5",
                          ].join(" ")}
                        >
                          {h}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RESUMO + RA */}
              <div className="rounded-2xl bg-white shadow-lg p-5 md:p-6 h-fit md:sticky md:top-6">
                <p className="font-bold text-unifg-blue mb-4">
                  Sua reserva
                </p>

                <label
                  htmlFor="ra"
                  className="block text-sm font-semibold text-unifg-blue mb-1"
                >
                  RA (matrícula)
                </label>

                <input
                  id="ra"
                  type="text"
                  value={ra}
                  onChange={(e) => setRa(e.target.value)}
                  placeholder="Digite seu RA"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-unifg-blue focus:ring-2 focus:ring-unifg-blue/20"
                />

                <div className="mt-5 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      Data
                    </span>

                    <span className="font-semibold text-slate-700">
                      {dataSelecionada
                        ? dataSelecionada.toLocaleDateString(
                            "pt-BR",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )
                        : "—"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400 color-unifg-blue-dark">
                      Horário
                    </span>

                    <span className="font-semibold text-slate-700">
                      {horarioSelecionado || "—"}
                    </span>
                  </div>
                </div>

                {erro && (
                  <p className="mt-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">
                    {erro}
                  </p>
                )}

                <button
                  type="button"
                  onClick={handleReservar}
                  disabled={carregando}
                  className="mt-5 w-full rounded-lg bg-unifg-blue py-3 font-bold text-white transition hover:brightness-110 disabled:opacity-60"
                >
                  {carregando
                    ? "Verificando..."
                    : "Reservar horário"}
                </button>

                <p className="mt-3 text-xs text-slate-400 text-center">
                  Se o seu RA ainda não estiver cadastrado, vamos te
                  levar para o cadastro.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
