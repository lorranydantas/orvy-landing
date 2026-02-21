"use client";

import { useEffect, useMemo, useState } from "react";

/* ────────────────────────────────────────────────────────────
   KEYFRAMES
──────────────────────────────────────────────────────────── */
function GlobalKeyframes() {
  return (
    <style jsx global>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes orbit {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes orbitReverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes counterRotate {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes counterRotateReverse {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  );
}

/* ────────────────────────────────────────────────────────────
   POINTILLISM PATTERNS (SVG dots)
──────────────────────────────────────────────────────────── */
function PointillismPattern({ variant = 0 }: { variant?: number }) {
  // Different dot patterns for variety
  const patterns = [
    // Pattern 0: Circular cluster
    <>
      <circle cx="12" cy="8" r="1.5" fill="#2EE6FF" />
      <circle cx="8" cy="12" r="1" fill="#ffffff" opacity="0.8" />
      <circle cx="16" cy="12" r="1.2" fill="#2EE6FF" opacity="0.9" />
      <circle cx="10" cy="16" r="1" fill="#ffffff" opacity="0.7" />
      <circle cx="14" cy="15" r="1.3" fill="#2EE6FF" opacity="0.8" />
      <circle cx="12" cy="12" r="1.8" fill="#20B8CD" />
      <circle cx="6" cy="10" r="0.8" fill="#ffffff" opacity="0.6" />
      <circle cx="18" cy="14" r="0.8" fill="#2EE6FF" opacity="0.7" />
    </>,
    // Pattern 1: Rising dots
    <>
      <circle cx="12" cy="6" r="1.2" fill="#2EE6FF" />
      <circle cx="10" cy="10" r="1.5" fill="#ffffff" opacity="0.8" />
      <circle cx="14" cy="9" r="1" fill="#2EE6FF" opacity="0.9" />
      <circle cx="8" cy="14" r="1.3" fill="#20B8CD" />
      <circle cx="16" cy="13" r="1.1" fill="#ffffff" opacity="0.7" />
      <circle cx="12" cy="17" r="1.4" fill="#2EE6FF" opacity="0.8" />
      <circle cx="6" cy="12" r="0.9" fill="#2EE6FF" opacity="0.6" />
      <circle cx="18" cy="10" r="0.7" fill="#ffffff" opacity="0.5" />
    </>,
    // Pattern 2: Scattered
    <>
      <circle cx="7" cy="7" r="1.3" fill="#2EE6FF" />
      <circle cx="17" cy="8" r="1.1" fill="#ffffff" opacity="0.8" />
      <circle cx="12" cy="11" r="1.6" fill="#20B8CD" />
      <circle cx="6" cy="15" r="1" fill="#2EE6FF" opacity="0.7" />
      <circle cx="15" cy="16" r="1.2" fill="#ffffff" opacity="0.9" />
      <circle cx="10" cy="14" r="0.9" fill="#2EE6FF" opacity="0.8" />
      <circle cx="18" cy="12" r="0.8" fill="#2EE6FF" opacity="0.6" />
      <circle cx="9" cy="9" r="0.7" fill="#ffffff" opacity="0.5" />
    </>,
    // Pattern 3: Diamond
    <>
      <circle cx="12" cy="5" r="1.2" fill="#2EE6FF" />
      <circle cx="6" cy="12" r="1.3" fill="#ffffff" opacity="0.8" />
      <circle cx="18" cy="12" r="1.1" fill="#2EE6FF" opacity="0.9" />
      <circle cx="12" cy="19" r="1.4" fill="#20B8CD" />
      <circle cx="9" cy="8" r="0.9" fill="#ffffff" opacity="0.7" />
      <circle cx="15" cy="8" r="1" fill="#2EE6FF" opacity="0.8" />
      <circle cx="9" cy="16" r="0.8" fill="#2EE6FF" opacity="0.6" />
      <circle cx="15" cy="16" r="0.9" fill="#ffffff" opacity="0.7" />
    </>,
    // Pattern 4: Spiral
    <>
      <circle cx="12" cy="12" r="1.5" fill="#2EE6FF" />
      <circle cx="15" cy="10" r="1.2" fill="#ffffff" opacity="0.8" />
      <circle cx="16" cy="14" r="1" fill="#20B8CD" />
      <circle cx="13" cy="17" r="1.1" fill="#2EE6FF" opacity="0.9" />
      <circle cx="9" cy="16" r="0.9" fill="#ffffff" opacity="0.7" />
      <circle cx="7" cy="13" r="1.3" fill="#2EE6FF" opacity="0.8" />
      <circle cx="8" cy="9" r="1" fill="#ffffff" opacity="0.6" />
      <circle cx="11" cy="7" r="0.8" fill="#2EE6FF" opacity="0.7" />
    </>,
    // Pattern 5: Wave
    <>
      <circle cx="5" cy="12" r="1.1" fill="#2EE6FF" />
      <circle cx="8" cy="9" r="1.3" fill="#ffffff" opacity="0.8" />
      <circle cx="11" cy="13" r="1.5" fill="#20B8CD" />
      <circle cx="14" cy="10" r="1.2" fill="#2EE6FF" opacity="0.9" />
      <circle cx="17" cy="14" r="1" fill="#ffffff" opacity="0.7" />
      <circle cx="19" cy="11" r="0.9" fill="#2EE6FF" opacity="0.8" />
      <circle cx="10" cy="16" r="0.8" fill="#2EE6FF" opacity="0.6" />
      <circle cx="15" cy="17" r="0.7" fill="#ffffff" opacity="0.5" />
    </>,
    // Pattern 6: Constellation
    <>
      <circle cx="12" cy="6" r="1.4" fill="#2EE6FF" />
      <circle cx="7" cy="10" r="1.1" fill="#ffffff" opacity="0.8" />
      <circle cx="17" cy="9" r="1.2" fill="#20B8CD" />
      <circle cx="5" cy="15" r="1" fill="#2EE6FF" opacity="0.7" />
      <circle cx="12" cy="13" r="1.6" fill="#2EE6FF" opacity="0.9" />
      <circle cx="19" cy="14" r="0.9" fill="#ffffff" opacity="0.8" />
      <circle cx="9" cy="18" r="1.1" fill="#2EE6FF" opacity="0.6" />
      <circle cx="15" cy="18" r="0.8" fill="#ffffff" opacity="0.7" />
    </>,
    // Pattern 7: Dense cluster
    <>
      <circle cx="10" cy="10" r="1.3" fill="#2EE6FF" />
      <circle cx="14" cy="10" r="1.1" fill="#ffffff" opacity="0.8" />
      <circle cx="12" cy="13" r="1.5" fill="#20B8CD" />
      <circle cx="9" cy="14" r="1" fill="#2EE6FF" opacity="0.9" />
      <circle cx="15" cy="14" r="1.2" fill="#ffffff" opacity="0.7" />
      <circle cx="11" cy="16" r="0.9" fill="#2EE6FF" opacity="0.8" />
      <circle cx="13" cy="8" r="1" fill="#2EE6FF" opacity="0.6" />
      <circle cx="8" cy="12" r="0.7" fill="#ffffff" opacity="0.5" />
      <circle cx="16" cy="12" r="0.8" fill="#2EE6FF" opacity="0.7" />
    </>,
  ];

  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      {patterns[variant % patterns.length]}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   ORVY SYMBOL (cyan with ORVY text below)
──────────────────────────────────────────────────────────── */
function OrvySymbol({
  size = 72,
  showText = false,
}: {
  size?: number;
  showText?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient
              id="torusGradCyan"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2EE6FF" />
              <stop offset="50%" stopColor="#20B8CD" />
              <stop offset="100%" stopColor="#0D6A7A" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Outer glow */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#2EE6FF"
            strokeWidth="2"
            opacity="0.3"
          />
          {/* Main ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="url(#torusGradCyan)"
            strokeWidth="12"
            filter="url(#glow)"
          />
          {/* Inner dark */}
          <circle cx="50" cy="50" r="26" fill="#030a10" />
        </svg>
      </div>
      {showText && (
        <span className="text-lg font-semibold tracking-[0.15em] text-[#2EE6FF]">
          ORVY
        </span>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   ORBIT ELEMENT (with pointillism)
──────────────────────────────────────────────────────────── */
interface OrbitElementProps {
  angle: number;
  radius: number;
  size: number;
  orbitDuration: number;
  reverse?: boolean;
  patternVariant: number;
}

function OrbitElement({
  angle,
  radius,
  size,
  orbitDuration,
  reverse,
  patternVariant,
}: OrbitElementProps) {
  const angleRad = (angle * Math.PI) / 180;
  const x = Math.cos(angleRad) * radius;
  const y = Math.sin(angleRad) * radius;

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        marginLeft: x - size / 2,
        marginTop: y - size / 2,
        width: size,
        height: size,
        animation: `${reverse ? "counterRotateReverse" : "counterRotate"} ${orbitDuration}s linear infinite`,
      }}
    >
      <div className="w-full h-full rounded-full border border-white/[0.15] bg-white/[0.03] backdrop-blur-sm flex items-center justify-center p-3">
        <PointillismPattern variant={patternVariant} />
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   HERO ORBITS
──────────────────────────────────────────────────────────── */
function HeroOrbits() {
  const outerRadius = 480;
  const outerDuration = 90;
  const outerElements = [
    { angle: 25, size: 75 },
    { angle: 65, size: 62 },
    { angle: 115, size: 80 },
    { angle: 155, size: 68 },
    { angle: 205, size: 58 },
    { angle: 245, size: 72 },
    { angle: 295, size: 65 },
    { angle: 335, size: 70 },
  ];

  const innerRadius = 320;
  const innerDuration = 70;
  const innerElements = [
    { angle: 10, size: 65 },
    { angle: 60, size: 55 },
    { angle: 105, size: 72 },
    { angle: 155, size: 60 },
    { angle: 210, size: 68 },
    { angle: 260, size: 58 },
    { angle: 310, size: 75 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Outer orbit */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: outerRadius * 2, height: outerRadius * 2 }}
      >
        <div
          className="absolute inset-0 rounded-full border border-white/[0.08]"
          style={{ animation: `orbit ${outerDuration}s linear infinite` }}
        />
        <div
          className="absolute inset-0"
          style={{ animation: `orbit ${outerDuration}s linear infinite` }}
        >
          {outerElements.map((el, i) => (
            <OrbitElement
              key={i}
              angle={el.angle}
              radius={outerRadius}
              size={el.size}
              orbitDuration={outerDuration}
              reverse={false}
              patternVariant={i}
            />
          ))}
        </div>
      </div>

      {/* Inner orbit */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: innerRadius * 2, height: innerRadius * 2 }}
      >
        <div
          className="absolute inset-0 rounded-full border border-white/[0.10]"
          style={{ animation: `orbitReverse ${innerDuration}s linear infinite` }}
        />
        <div
          className="absolute inset-0"
          style={{ animation: `orbitReverse ${innerDuration}s linear infinite` }}
        >
          {innerElements.map((el, i) => (
            <OrbitElement
              key={i}
              angle={el.angle}
              radius={innerRadius}
              size={el.size}
              orbitDuration={innerDuration}
              reverse={true}
              patternVariant={i + 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   ROTATING TEXT (with correct Portuguese gender)
──────────────────────────────────────────────────────────── */
const ROTATING: { word: string; article: string }[] = [
  { word: "dinheiro", article: "seu" },
  { word: "disciplina", article: "sua" },
  { word: "vida", article: "sua" },
];

function useRotatingText(items: typeof ROTATING, ms = 2000) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), ms);
    return () => clearInterval(t);
  }, [items.length, ms]);
  return items[i];
}

/* ────────────────────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────────────────────── */
export default function Home() {
  const current = useRotatingText(ROTATING, 2000);

  const [waitStatus, setWaitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [waitMsg, setWaitMsg] = useState<string>("");

  const faqs = useMemo(
    () => [
      {
        q: "Quando lança?",
        a: "Em breve. Entrando na lista de espera, você recebe prioridade e o aviso assim que o download estiver disponível.",
      },
      {
        q: "É pra quem já entende de finanças?",
        a: "Sim — e principalmente pra quem quer consistência. O Orvy é um sistema de progresso (não uma aula infinita).",
      },
      {
        q: "Vai ter versão gratuita?",
        a: "A ideia é começar com uma experiência acessível e evoluir com planos Pro. Você vai ver tudo primeiro como early user.",
      },
    ],
    [],
  );

  return (
    <main className="min-h-screen bg-[#030a10] text-white overflow-x-hidden">
      <GlobalKeyframes />

      {/* ═══════════════════════════════════════════════════════
          NAV
      ═══════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030a10]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <OrvySymbol size={36} />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#2EE6FF]">
              ORVY
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="hidden sm:block text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Lista de espera
            </a>
            <a
              href="#waitlist"
              className="rounded-full bg-[#2EE6FF] px-5 py-2.5 text-sm font-semibold text-[#030a10] hover:bg-[#20B8CD] transition-colors"
            >
              Quero ser early user
            </a>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background gradient */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 50% 50%, rgba(32, 184, 205, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 30% 40%, rgba(46, 230, 255, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 70% 60%, rgba(32, 184, 205, 0.06) 0%, transparent 50%),
              #030a10
            `,
          }}
        />

        <HeroOrbits />

        {/* Center content */}
        <div className="relative z-10 text-center px-6 max-w-[600px]">
          {/* ORVY Symbol with text */}
          <div className="mx-auto mb-8 flex justify-center">
            <OrvySymbol size={90} showText />
          </div>

          {/* Headline with correct gender */}
          <h1 className="text-[42px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#f5f5f0]">
            Evolua{" "}
            <span
              key={current.word}
              className="inline-block"
              style={{ animation: "fadeUp 400ms ease-out" }}
            >
              {current.article} {current.word}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-[#f5f5f0]/60 leading-relaxed">
            Sistema gamificado de evolução financeira
            <br className="hidden sm:block" /> e disciplina pessoal.
          </p>

          {/* CTA - rounded blue button */}
          <div className="mt-8">
            <a
              href="#waitlist"
              className="inline-flex rounded-full bg-[#2EE6FF] px-8 py-4 text-base font-semibold text-[#030a10] hover:bg-[#20B8CD] transition-colors"
            >
              Entrar na lista de espera
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          COMO FUNCIONA
      ═══════════════════════════════════════════════════════ */}
      <section id="como" className="mx-auto max-w-[1120px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-[32px] sm:text-[42px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#f5f5f0]">
              Pare de deixar seu dinheiro{" "}
              <span className="text-[#f5f5f0]/50">no automático</span>.
            </h2>
            <p className="mt-5 text-base text-[#f5f5f0]/60 leading-relaxed max-w-[55ch]">
              Você não precisa de mais conteúdo. Você precisa de sistema. O Orvy
              transforma disciplina em hábito com uma jornada simples, curta e
              consistente.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { t: "Diagnóstico rápido", d: "Entenda seu momento em minutos." },
                { t: "Jornada diária", d: "Lições curtas + desafios reais." },
                { t: "Carteira de hábitos", d: "Metas, registros e consistência." },
              ].map((item) => (
                <div
                  key={item.t}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4"
                >
                  <div className="text-sm font-semibold text-[#f5f5f0]">
                    {item.t}
                  </div>
                  <div className="mt-1 text-sm text-[#f5f5f0]/50">{item.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-[radial-gradient(400px_300px_at_30%_30%,rgba(46,230,255,0.08),transparent)] grid place-items-center overflow-hidden">
              <img
                src="/mockup.jpg"
                alt="ORVY app mockup"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WAITLIST
      ═══════════════════════════════════════════════════════ */}
      <section id="waitlist" className="mx-auto max-w-[1120px] px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-[28px] sm:text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#f5f5f0]">
                Entre na lista de espera.
              </h2>
              <p className="mt-4 text-[#f5f5f0]/60">
                Você recebe prioridade, atualizações e o aviso quando o download
                estiver disponível.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Acesso antecipado", "Notificações", "Convites beta"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[#f5f5f0]/60"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            <form
              className="rounded-2xl border border-white/10 bg-[#030a10]/60 p-6"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const fd = new FormData(form);
                const email = String(fd.get("email") || "").trim();

                setWaitStatus("loading");
                setWaitMsg("");

                try {
                  const res = await fetch("/api/waitlist", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  });

                  const data = await res.json().catch(() => ({}));

                  if (!res.ok || !data?.ok) {
                    throw new Error(data?.error || "Erro ao enviar");
                  }

                  form.reset();
                  setWaitStatus("success");
                } catch (err: any) {
                  setWaitStatus("error");
                  setWaitMsg(err?.message || "Não foi possível enviar.");
                }
              }}
            >
              <label className="text-sm font-medium text-[#f5f5f0]">
                Seu e-mail
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="voce@exemplo.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#030a10] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#2EE6FF]/50 transition-colors"
              />
              <button
                type="submit"
                disabled={waitStatus === "loading"}
                className="mt-4 w-full rounded-full bg-[#2EE6FF] px-4 py-3 text-sm font-semibold text-[#030a10] hover:bg-[#20B8CD] transition-colors disabled:opacity-60"
              >
                {waitStatus === "loading" ? "Enviando…" : "Quero ser avisado"}
              </button>

              {waitStatus !== "idle" && (
                <p className="mt-3 text-xs text-center text-[#f5f5f0]/55">
                  {waitStatus === "success"
                    ? "Pronto! Você entrou na lista."
                    : waitStatus === "error"
                      ? waitMsg || "Não foi possível enviar. Tente de novo."
                      : ""}
                </p>
              )}

              <p className="mt-3 text-xs text-[#f5f5f0]/40 text-center">
                Sem spam. Só lançamento, beta e atualizações.
              </p>
            </form>
          </div>

          {/* FAQ */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <h3 className="text-xl font-semibold text-[#f5f5f0]">
              Perguntas frequentes
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="text-sm font-semibold text-[#f5f5f0]">
                    {faq.q}
                  </div>
                  <div className="mt-2 text-sm text-[#f5f5f0]/50">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════ */}
      <footer className="mx-auto max-w-[1120px] px-6 pb-10">
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between text-xs text-[#f5f5f0]/40">
          <span suppressHydrationWarning>© {new Date().getFullYear()} ORVY</span>
          <span>Download disponível em breve</span>
        </div>
      </footer>
    </main>
  );
}

import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WEBAPP_URL =
  process.env.GOOGLE_APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbzCm0tfYMSg_rsGWsiANeCIyy6sMa-TBGQwRSeQWR6SBO9A4qPWM0GsifUXSYPWwTw/exec";

function json(data: unknown, status = 200) {
  return NextResponse.json(data, { status });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

export async function GET() {
  return json({ ok: true, hint: "POST { email } to /api/waitlist" });
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let email = "";

    if (contentType.includes("application/json")) {
      const body = (await req.json().catch(() => ({}))) as { email?: string };
      email = String(body?.email || "");
    } else {
      const form = await req.formData();
      email = String(form.get("email") || "");
    }

    email = email.trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return json({ ok: false, error: "invalid_email" }, 400);
    }

    // Send as x-www-form-urlencoded (works with e.parameter on Apps Script)
    const payload = new URLSearchParams({
      email,
      source: "orvy-landing",
      ts: new Date().toISOString(),
    });

    const res = await fetch(WEBAPP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: payload,
      cache: "no-store",
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      return json(
        { ok: false, error: "apps_script_failed", details: txt.slice(0, 300) },
        502,
      );
    }

    return json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return json({ ok: false, error: e?.message ?? "server_error" }, 500);
  }
}