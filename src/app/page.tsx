"use client";

import { useEffect, useMemo, useState } from "react";

/* ────────────────────────────────────────────────────────────
   KEYFRAMES
──────────────────────────────────────────────────────────── */
function GlobalKeyframes() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

      * { font-family: 'Inter', sans-serif; }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes orbit {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes orbitReverse {
        from { transform: rotate(360deg); }
        to   { transform: rotate(0deg); }
      }
      @keyframes counterRotate {
        from { transform: rotate(360deg); }
        to   { transform: rotate(0deg); }
      }
      @keyframes counterRotateReverse {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes pulse-dot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50%       { opacity: 0.4; transform: scale(0.75); }
      }
      @keyframes scroll-line {
        0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
        50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
        100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
      }

      /* ── MOBILE RESPONSIVE ── */
      @media (max-width: 768px) {
        .section-grid-2 {
          grid-template-columns: 1fr !important;
          padding: 32px 24px !important;
          gap: 40px !important;
        }
        .waitlist-grid {
          grid-template-columns: 1fr !important;
          padding: 36px 24px !important;
          gap: 36px !important;
        }
        .answers-grid {
          grid-template-columns: 1fr !important;
        }
        .steps-grid-mobile {
          grid-template-columns: 1fr !important;
        }
        .steps-connector {
          display: none !important;
        }
      }
    `}</style>
  );
}

/* ────────────────────────────────────────────────────────────
   POINTILLISM PATTERNS (SVG dots)
──────────────────────────────────────────────────────────── */
function PointillismPattern({ variant = 0 }: { variant?: number }) {
  const patterns = [
    <g key="p0">
      <circle cx="12" cy="8"  r="1.5" fill="#2EE6FF" />
      <circle cx="8"  cy="12" r="1"   fill="#ffffff" opacity="0.8" />
      <circle cx="16" cy="12" r="1.2" fill="#2EE6FF" opacity="0.9" />
      <circle cx="10" cy="16" r="1"   fill="#ffffff" opacity="0.7" />
      <circle cx="14" cy="15" r="1.3" fill="#2EE6FF" opacity="0.8" />
      <circle cx="12" cy="12" r="1.8" fill="#20B8CD" />
      <circle cx="6"  cy="10" r="0.8" fill="#ffffff" opacity="0.6" />
      <circle cx="18" cy="14" r="0.8" fill="#2EE6FF" opacity="0.7" />
    </g>,
    <g key="p1">
      <circle cx="12" cy="6"  r="1.2" fill="#2EE6FF" />
      <circle cx="10" cy="10" r="1.5" fill="#ffffff" opacity="0.8" />
      <circle cx="14" cy="9"  r="1"   fill="#2EE6FF" opacity="0.9" />
      <circle cx="8"  cy="14" r="1.3" fill="#20B8CD" />
      <circle cx="16" cy="13" r="1.1" fill="#ffffff" opacity="0.7" />
      <circle cx="12" cy="17" r="1.4" fill="#2EE6FF" opacity="0.8" />
      <circle cx="6"  cy="12" r="0.9" fill="#2EE6FF" opacity="0.6" />
      <circle cx="18" cy="10" r="0.7" fill="#ffffff" opacity="0.5" />
    </g>,
    <g key="p2">
      <circle cx="7"  cy="7"  r="1.3" fill="#2EE6FF" />
      <circle cx="17" cy="8"  r="1.1" fill="#ffffff" opacity="0.8" />
      <circle cx="12" cy="11" r="1.6" fill="#20B8CD" />
      <circle cx="6"  cy="15" r="1"   fill="#2EE6FF" opacity="0.7" />
      <circle cx="15" cy="16" r="1.2" fill="#ffffff" opacity="0.9" />
      <circle cx="10" cy="14" r="0.9" fill="#2EE6FF" opacity="0.8" />
      <circle cx="18" cy="12" r="0.8" fill="#2EE6FF" opacity="0.6" />
      <circle cx="9"  cy="9"  r="0.7" fill="#ffffff" opacity="0.5" />
    </g>,
    <g key="p3">
      <circle cx="12" cy="5"  r="1.2" fill="#2EE6FF" />
      <circle cx="6"  cy="12" r="1.3" fill="#ffffff" opacity="0.8" />
      <circle cx="18" cy="12" r="1.1" fill="#2EE6FF" opacity="0.9" />
      <circle cx="12" cy="19" r="1.4" fill="#20B8CD" />
      <circle cx="9"  cy="8"  r="0.9" fill="#ffffff" opacity="0.7" />
      <circle cx="15" cy="8"  r="1"   fill="#2EE6FF" opacity="0.8" />
      <circle cx="9"  cy="16" r="0.8" fill="#2EE6FF" opacity="0.6" />
      <circle cx="15" cy="16" r="0.9" fill="#ffffff" opacity="0.7" />
    </g>,
    <g key="p4">
      <circle cx="12" cy="12" r="1.5" fill="#2EE6FF" />
      <circle cx="15" cy="10" r="1.2" fill="#ffffff" opacity="0.8" />
      <circle cx="16" cy="14" r="1"   fill="#20B8CD" />
      <circle cx="13" cy="17" r="1.1" fill="#2EE6FF" opacity="0.9" />
      <circle cx="9"  cy="16" r="0.9" fill="#ffffff" opacity="0.7" />
      <circle cx="7"  cy="13" r="1.3" fill="#2EE6FF" opacity="0.8" />
      <circle cx="8"  cy="9"  r="1"   fill="#ffffff" opacity="0.6" />
      <circle cx="11" cy="7"  r="0.8" fill="#2EE6FF" opacity="0.7" />
    </g>,
    <g key="p5">
      <circle cx="5"  cy="12" r="1.1" fill="#2EE6FF" />
      <circle cx="8"  cy="9"  r="1.3" fill="#ffffff" opacity="0.8" />
      <circle cx="11" cy="13" r="1.5" fill="#20B8CD" />
      <circle cx="14" cy="10" r="1.2" fill="#2EE6FF" opacity="0.9" />
      <circle cx="17" cy="14" r="1"   fill="#ffffff" opacity="0.7" />
      <circle cx="19" cy="11" r="0.9" fill="#2EE6FF" opacity="0.8" />
      <circle cx="10" cy="16" r="0.8" fill="#2EE6FF" opacity="0.6" />
      <circle cx="15" cy="17" r="0.7" fill="#ffffff" opacity="0.5" />
    </g>,
    <g key="p6">
      <circle cx="12" cy="6"  r="1.4" fill="#2EE6FF" />
      <circle cx="7"  cy="10" r="1.1" fill="#ffffff" opacity="0.8" />
      <circle cx="17" cy="9"  r="1.2" fill="#20B8CD" />
      <circle cx="5"  cy="15" r="1"   fill="#2EE6FF" opacity="0.7" />
      <circle cx="12" cy="13" r="1.6" fill="#2EE6FF" opacity="0.9" />
      <circle cx="19" cy="14" r="0.9" fill="#ffffff" opacity="0.8" />
      <circle cx="9"  cy="18" r="1.1" fill="#2EE6FF" opacity="0.6" />
      <circle cx="15" cy="18" r="0.8" fill="#ffffff" opacity="0.7" />
    </g>,
    <g key="p7">
      <circle cx="10" cy="10" r="1.3" fill="#2EE6FF" />
      <circle cx="14" cy="10" r="1.1" fill="#ffffff" opacity="0.8" />
      <circle cx="12" cy="13" r="1.5" fill="#20B8CD" />
      <circle cx="9"  cy="14" r="1"   fill="#2EE6FF" opacity="0.9" />
      <circle cx="15" cy="14" r="1.2" fill="#ffffff" opacity="0.7" />
      <circle cx="11" cy="16" r="0.9" fill="#2EE6FF" opacity="0.8" />
      <circle cx="13" cy="8"  r="1"   fill="#2EE6FF" opacity="0.6" />
      <circle cx="8"  cy="12" r="0.7" fill="#ffffff" opacity="0.5" />
      <circle cx="16" cy="12" r="0.8" fill="#2EE6FF" opacity="0.7" />
    </g>,
  ];
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      {patterns[variant % patterns.length]}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   ORVY SYMBOL
──────────────────────────────────────────────────────────── */
function OrvySymbol({ size = 72, showText = false }: { size?: number; showText?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="torusGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#2EE6FF" />
              <stop offset="50%"  stopColor="#20B8CD" />
              <stop offset="100%" stopColor="#0D6A7A" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <circle cx="50" cy="50" r="40" fill="none" stroke="#2EE6FF" strokeWidth="2" opacity="0.3" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="url(#torusGradCyan)" strokeWidth="12" filter="url(#glow)" />
          <circle cx="50" cy="50" r="26" fill="#030a10" />
        </svg>
      </div>
      {showText && (
        <span className="text-lg font-semibold tracking-[0.15em] text-[#2EE6FF]">ORVY</span>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   ORBIT ELEMENT
──────────────────────────────────────────────────────────── */
interface OrbitElementProps {
  angle: number; radius: number; size: number;
  orbitDuration: number; reverse?: boolean; patternVariant: number;
}
function OrbitElement({ angle, radius, size, orbitDuration, reverse, patternVariant }: OrbitElementProps) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        marginLeft: x - size / 2, marginTop: y - size / 2,
        width: size, height: size,
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
  const outerRadius = 480; const outerDuration = 90;
  const outerElements = [
    { angle: 25, size: 75 }, { angle: 65,  size: 62 }, { angle: 115, size: 80 }, { angle: 155, size: 68 },
    { angle: 205, size: 58 }, { angle: 245, size: 72 }, { angle: 295, size: 65 }, { angle: 335, size: 70 },
  ];
  const innerRadius = 320; const innerDuration = 70;
  const innerElements = [
    { angle: 10, size: 65 }, { angle: 60,  size: 55 }, { angle: 105, size: 72 }, { angle: 155, size: 60 },
    { angle: 210, size: 68 }, { angle: 260, size: 58 }, { angle: 310, size: 75 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: outerRadius * 2, height: outerRadius * 2 }}>
        <div className="absolute inset-0 rounded-full border border-white/[0.08]"
          style={{ animation: `orbit ${outerDuration}s linear infinite` }} />
        <div className="absolute inset-0" style={{ animation: `orbit ${outerDuration}s linear infinite` }}>
          {outerElements.map((el, i) => (
            <OrbitElement key={i} angle={el.angle} radius={outerRadius} size={el.size}
              orbitDuration={outerDuration} reverse={false} patternVariant={i} />
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: innerRadius * 2, height: innerRadius * 2 }}>
        <div className="absolute inset-0 rounded-full border border-white/[0.10]"
          style={{ animation: `orbitReverse ${innerDuration}s linear infinite` }} />
        <div className="absolute inset-0" style={{ animation: `orbitReverse ${innerDuration}s linear infinite` }}>
          {innerElements.map((el, i) => (
            <OrbitElement key={i} angle={el.angle} radius={innerRadius} size={el.size}
              orbitDuration={innerDuration} reverse={true} patternVariant={i + 3} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   ROTATING TEXT
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
   PHONE MOCKUP
──────────────────────────────────────────────────────────── */
function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <div style={{
        width: 248,
        background: "#0D1117",
        border: "1.5px solid #1E2A35",
        borderRadius: 36,
        padding: 14,
        boxShadow: "0 0 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
      }}>
        {/* notch */}
        <div style={{ width: 80, height: 6, background: "#1E2A35", borderRadius: 3, margin: "0 auto 16px" }} />
        {/* screen */}
        <div style={{ background: "#070A0C", borderRadius: 24, padding: "18px 14px", minHeight: 430 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#4A5568", marginBottom: 18 }}>
            <span>9:41</span><span>100%</span>
          </div>
          <p style={{ fontSize: 11, color: "#8A99A8", marginBottom: 2 }}>Olá,</p>
          <p style={{ fontSize: 19, fontWeight: 800, color: "#F0F4F8", marginBottom: 18, letterSpacing: "-0.02em" }}>Lorrany</p>

          {/* main card */}
          <div style={{
            background: "#0D1117", border: "1px solid rgba(32,184,205,0.25)",
            borderRadius: 14, padding: "14px 14px 16px", marginBottom: 10, position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #20B8CD, transparent)" }} />
            <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A5568", marginBottom: 3 }}>Sua semana está</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#22C55E", marginBottom: 8 }}>no verde</div>
            <div style={{ fontSize: 9, color: "#4A5568", marginBottom: 2 }}>Você pode gastar hoje</div>
            <div style={{ fontSize: 30, fontWeight: 900, color: "#F0F4F8", letterSpacing: "-0.02em" }}>R$ 67</div>
          </div>

          {/* two small cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
            {[
              { label: "Sobrou de verdade", value: "R$ 214", sub: "livres até domingo", color: "#F0F4F8" },
              { label: "Próximo risco", value: "4 dias", sub: "aluguel", color: "#F59E0B" },
            ].map((c) => (
              <div key={c.label} style={{ background: "#0D1117", border: "1px solid #1E2A35", borderRadius: 12, padding: "9px 11px" }}>
                <div style={{ fontSize: 7, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4A5568", marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: c.color }}>{c.value}</div>
                <div style={{ fontSize: 8, color: "#8A99A8" }}>{c.sub}</div>
              </div>
            ))}
          </div>

          {/* insight */}
          <div style={{ background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 12, padding: "9px 11px", display: "flex", gap: 8 }}>
            <div style={{ width: 5, height: 5, background: "#F59E0B", borderRadius: "50%", marginTop: 3, flexShrink: 0 }} />
            <div style={{ fontSize: 9, color: "#8A99A8", lineHeight: 1.5 }}>
              <span style={{ color: "#F59E0B", fontWeight: 600 }}>A Orvy percebeu: </span>
              sua renda caiu 18% vs. semana passada. Melhor segurar gastos variáveis até sexta.
            </div>
          </div>

          {/* tabs */}
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: 16, paddingTop: 12, borderTop: "1px solid #1E2A35" }}>
            {["Home", "Radar", "E se?", "Dinheiro"].map((tab, i) => (
              <div key={tab} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={{ width: 18, height: 4, borderRadius: 2, background: i === 0 ? "#20B8CD" : "#1E2A35" }} />
                <div style={{ fontSize: 7, fontWeight: 600, color: i === 0 ? "#20B8CD" : "#4A5568", letterSpacing: "0.05em" }}>{tab}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   SECTION LABEL
──────────────────────────────────────────────────────────── */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#20B8CD] mb-4">{children}</p>
  );
}

/* ────────────────────────────────────────────────────────────
   CHECK ICON
──────────────────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <div style={{ width: 20, height: 20, background: "rgba(32,184,205,0.1)", border: "1px solid rgba(32,184,205,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="#20B8CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────────────────────── */
export default function Home() {
  const current = useRotatingText(ROTATING, 2000);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<"idle" | "ok" | "error">("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = useMemo(() => [
    { q: "Quando lança?", a: "Em breve. Entrando na lista de espera, você recebe prioridade e o aviso assim que o download estiver disponível." },
    { q: "É pra quem já entende de finanças?", a: "Principalmente para quem quer consistência. A Orvy é um sistema de progresso, não uma aula infinita. Você não precisa saber nada de finanças para usar." },
    { q: "Vai ter versão gratuita?", a: "A ideia é começar com uma experiência acessível e evoluir com planos Pro. Você vai ver tudo primeiro como early user." },
    { q: "Preciso conectar meu banco?", a: "Não. Você pode começar 100% manual. A Orvy não é banco, não move seu dinheiro e não exige integração bancária no MVP." },
  ], []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted("idle");
    try {
      const res = await fetch("https://formspree.io/f/xeelrzjq", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      if (!res.ok) throw new Error("Erro");
      setSubmitted("ok");
      setEmail("");
    } catch (err) {
      console.error(err);
      setSubmitted("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#030a10] text-white overflow-x-hidden">
      <GlobalKeyframes />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030a10]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <OrvySymbol size={36} />
            <span className="text-sm font-semibold tracking-[0.2em] text-[#2EE6FF]">ORVY</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#waitlist" className="hidden sm:block text-sm font-medium text-white/60 hover:text-white transition-colors">
              Lista de espera
            </a>
            <a href="#waitlist" className="rounded-full bg-[#2EE6FF] px-5 py-2.5 text-sm font-semibold text-[#030a10] hover:bg-[#20B8CD] transition-colors">
              Quero ser early user
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO (original mantida) ── */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 -z-20" style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 50%, rgba(32,184,205,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 30% 40%, rgba(46,230,255,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 70% 60%, rgba(32,184,205,0.06) 0%, transparent 50%),
            #030a10
          `,
        }} />
        <HeroOrbits />
        <div className="relative z-10 text-center px-6 max-w-[600px]">
          <div className="mx-auto mb-8 flex justify-center">
            <OrvySymbol size={90} showText />
          </div>
          <h1 className="text-[42px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#f5f5f0]">
            Evolua{" "}
            <span key={current.word} className="inline-block" style={{ animation: "fadeUp 400ms ease-out" }}>
              {current.article} {current.word}
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#f5f5f0]/60 leading-relaxed">
            Sistema gamificado de evolução financeira
            <br className="hidden sm:block" /> e disciplina pessoal.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <a href="#waitlist" className="inline-flex rounded-full bg-[#2EE6FF] px-8 py-4 text-base font-semibold text-[#030a10] hover:bg-[#20B8CD] transition-colors">
              Entrar na lista de espera
            </a>
            <a href="#produto" className="inline-flex rounded-full border border-white/10 px-8 py-4 text-base font-medium text-white/60 hover:text-white hover:border-white/20 transition-colors">
              Ver como funciona
            </a>
          </div>
        </div>
        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #20B8CD, transparent)", animation: "scroll-line 1.8s ease-in-out infinite" }} />
        </div>
      </section>

      {/* ── APP MOCKUP ── */}
      <section id="produto" className="mx-auto max-w-[1200px] px-6 pb-28">
        <div className="section-grid-2" style={{
          background: "#0D1117", border: "1px solid #1E2A35", borderRadius: 24, padding: "48px 56px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* top accent line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, #20B8CD, transparent)", opacity: 0.5 }} />

          <div>
            <SectionEyebrow>A tela principal</SectionEyebrow>
            <h2 className="text-[32px] sm:text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F4F8] mb-4">
              A home não é dashboard.<br />É uma resposta.
            </h2>
            <p className="text-[#8A99A8] leading-relaxed mb-8 text-[15px]">
              A tela inicial da Orvy reduz ansiedade em segundos. Sem gráficos para interpretar. Sem jargão financeiro. Só a resposta que você precisa antes de gastar.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { title: "Limite seguro diário", body: "Calculado com base no seu saldo, contas futuras e entradas previstas." },
                { title: "Próximo risco", body: "A Orvy avisa antes do aperto, não depois." },
                { title: "O que sobrou de verdade", body: "Saldo real depois de descontar todas as obrigações futuras." },
                { title: "Status da semana", body: "Verde, amarelo ou vermelho — sem interpretação necessária." },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-[14px] text-[#8A99A8] leading-relaxed">
                    <strong className="text-[#F0F4F8] font-600">{f.title}</strong> — {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <PhoneMockup />
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="mx-auto max-w-[1200px] px-6 pb-28 border-t border-white/[0.06] pt-24">
        <div className="grid gap-16 md:grid-cols-2 items-start mb-16">
          <div>
            <SectionEyebrow>O problema real</SectionEyebrow>
            <h2 className="text-[32px] sm:text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F4F8]">
              O problema não é falta de planilha.<br />É falta de previsibilidade.
            </h2>
          </div>
          <p className="text-[#8A99A8] leading-relaxed text-[16px] pt-2">
            Você recebe por Pix, cliente, diária, freela, venda. O dinheiro entra em pedaços e sai em obrigações fixas. Só percebe que apertou quando já apertou. A Orvy existe para mudar isso.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "→", title: "Não sei quanto posso gastar", body: "Tenho dinheiro na conta, mas não sei se é seguro gastar. Fico na dúvida antes de toda compra." },
            { icon: "→", title: "Misturo pessoal e profissional", body: "Tudo entra na mesma conta. No fim do mês não sei o que é meu e o que é do negócio." },
            { icon: "→", title: "Esqueço contas futuras", body: "Acho que sobrou dinheiro, mas esqueci o boleto da semana que vem." },
            { icon: "→", title: "Clientes atrasam", body: "O pagamento deveria ter caído na segunda. Minha semana inteira vai por água abaixo." },
          ].map((c) => (
            <div key={c.title} style={{ background: "#0D1117", border: "1px solid #1E2A35", borderRadius: 16, padding: "24px 22px" }}
              className="hover:border-[#20B8CD]/25 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[#20B8CD]/10 flex items-center justify-center mb-4">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="#20B8CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[14px] font-700 text-[#F0F4F8] mb-2 font-semibold">{c.title}</div>
              <div className="text-[13px] text-[#8A99A8] leading-relaxed">{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="como-funciona" className="mx-auto max-w-[1200px] px-6 pb-28 border-t border-white/[0.06] pt-24">
        <div className="text-center mb-16">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2 className="text-[32px] sm:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F4F8] mb-4">
            Cinco passos. Uma resposta.
          </h2>
          <p className="text-[#8A99A8] text-[16px] max-w-[480px] mx-auto leading-relaxed">
            A Orvy não pede disciplina. Ela entrega clareza. Você informa os dados, ela faz o cálculo e te diz o que fazer agora.
          </p>
        </div>

        <div className="relative steps-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0 }}>
          {/* connector line */}
          <div className="steps-connector" style={{ position: "absolute", top: 27, left: "calc(10% + 14px)", right: "calc(10% + 14px)", height: 1, background: "linear-gradient(90deg, transparent, #1E2A35, #20B8CD, #1E2A35, transparent)" }} />

          {[
            { n: "01", title: "Você informa como seu dinheiro entra", body: "Pix, clientes, freelas, vendas — do jeito que é na vida real." },
            { n: "02", title: "A Orvy entende suas contas e riscos", body: "Contas fixas, parcelas, boletos, obrigações futuras." },
            { n: "03", title: "Ela calcula quanto você pode gastar hoje", body: "Com margem de segurança e sem comprometer a semana." },
            { n: "04", title: "Te avisa antes do aperto", body: "O Radar de Sufoco prevê quando o dinheiro pode acabar." },
            { n: "05", title: "Você fecha a semana no verde", body: "Com progresso, resumo semanal e próxima missão." },
          ].map((s) => (
            <div key={s.n} className="flex flex-col sm:items-center sm:text-center items-start text-left px-3 gap-4 group">
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#131820", border: "1px solid #1E2A35", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#20B8CD", position: "relative", zIndex: 2, flexShrink: 0 }}
                className="group-hover:border-[#20B8CD] group-hover:shadow-[0_0_20px_rgba(32,184,205,0.2)] transition-all">
                {s.n}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[#F0F4F8] mb-1.5 leading-snug">{s.title}</div>
                <div className="text-[12px] text-[#8A99A8] leading-relaxed">{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section className="mx-auto max-w-[1200px] px-6 pb-28 border-t border-white/[0.06] pt-24">
        <div className="text-center mb-16">
          <SectionEyebrow>Para quem é</SectionEyebrow>
          <h2 className="text-[32px] sm:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F4F8]">
            A Orvy entende dinheiro<br />que não cai todo mês igual.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "MEI e prestadoras de serviço",
              examples: "Manicure, lash designer, social media, designer, personal trainer, terapeuta, fotógrafa, professora particular.",
              pain: "Recebo por cliente, misturo tudo e não sei quanto posso tirar para mim.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="#20B8CD" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              title: "Autônomos com Pix diário",
              examples: "Entregador, motorista, vendedor informal, pequeno comércio, salão, revendedor.",
              pain: "Dinheiro entra todo dia e some todo dia. Não consigo saber se estou bem.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="#20B8CD" strokeWidth="1.5"/>
                  <path d="M10 6v4l3 3" stroke="#20B8CD" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
            },
            {
              title: "Microempreendedor digital",
              examples: "Creator, afiliado, gestor de tráfego, infoprodutor, loja por Instagram ou WhatsApp.",
              pain: "Receita variável, custos de ferramentas, repasses e anúncios. Sempre confuso.",
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="5" width="14" height="10" rx="2" stroke="#20B8CD" strokeWidth="1.5"/>
                  <path d="M7 9h6M7 12h4" stroke="#20B8CD" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
            },
          ].map((c) => (
            <div key={c.title} style={{ background: "#0D1117", border: "1px solid #1E2A35", borderRadius: 20, padding: "30px 26px" }}
              className="hover:border-[#20B8CD]/30 hover:-translate-y-1 transition-all">
              <div style={{ width: 46, height: 46, background: "rgba(32,184,205,0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                {c.icon}
              </div>
              <div className="text-[16px] font-bold text-[#F0F4F8] mb-2">{c.title}</div>
              <div className="text-[13px] text-[#8A99A8] leading-relaxed mb-4">{c.examples}</div>
              <div style={{ borderTop: "1px solid #1E2A35", paddingTop: 14 }}>
                <p className="text-[13px] italic text-[#20B8CD] leading-relaxed">&ldquo;{c.pain}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ANSWERS ── */}
      <section style={{ background: "#0D1117", borderTop: "1px solid #1E2A35", borderBottom: "1px solid #1E2A35" }} className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <SectionEyebrow>O que a Orvy responde</SectionEyebrow>
            <h2 className="text-[32px] sm:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[#F0F4F8]">
              As perguntas que você faz<br />todo dia, respondidas.
            </h2>
          </div>

          <div className="answers-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#1E2A35", border: "1px solid #1E2A35", borderRadius: 20, overflow: "hidden" }}>
            {[
              { q: "Posso comprar isso?", a: "A Orvy simula o impacto do gasto no seu limite seguro e diz se dá, se dá com cuidado, ou se é melhor esperar." },
              { q: "Vai faltar dinheiro?", a: "O Radar de Sufoco projeta os próximos dias e avisa quando e por que o dinheiro pode acabar antes da próxima entrada." },
              { q: "Quanto posso gastar hoje?", a: "Limite seguro diário calculado com saldo atual, entradas previstas, contas futuras e margem de proteção." },
              { q: "E se meu cliente atrasar?", a: "Simule o atraso. A Orvy recalcula e mostra o que você precisa fazer para não apertar." },
              { q: "Quanto posso tirar para mim?", a: "Para MEI e autônomo: separe o caixa profissional do pessoal e saiba o que é seu de verdade." },
              { q: "O que sobrou de verdade?", a: "Saldo real depois de descontar todas as obrigações — não o que aparece no banco, mas o que é livre." },
            ].map((item) => (
              <div key={item.q} style={{ background: "#131820", padding: "28px 26px" }} className="hover:bg-[rgba(32,184,205,0.04)] transition-colors">
                <div className="text-[16px] font-bold text-[#20B8CD] mb-2 leading-snug">{item.q}</div>
                <div className="text-[13px] text-[#8A99A8] leading-relaxed">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-28 text-center border-b border-white/[0.06]">
        <SectionEyebrow>Por que a Orvy existe</SectionEyebrow>
        <p className="text-[28px] sm:text-[40px] font-bold leading-[1.3] tracking-[-0.02em] text-[#F0F4F8] max-w-[720px] mx-auto mb-4">
          A Orvy não organiza o passado.<br />Ela <span className="text-[#20B8CD]">protege o presente.</span>
        </p>
        <p className="text-[#8A99A8] text-[16px] max-w-[520px] mx-auto leading-relaxed mb-20">
          A ideia por trás da Orvy é responder à pergunta que milhões de brasileiros fazem todos os dias, mesmo sem dizer em voz alta: "será que dá?"
        </p>

        <div className="flex justify-center gap-16 flex-wrap pt-12 border-t border-white/[0.06]">
          {[
            { n: "38M+", label: "MEIs e autônomos ativos no Brasil" },
            { n: "62%", label: "dos trabalhadores têm renda variável ou informal" },
            { n: "0", label: "apps financeiros nasceram para eles de verdade" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="text-[44px] font-900 font-black text-[#F0F4F8] tracking-[-0.03em] leading-none mb-2">
                {s.n.replace(/(\d+)(M\+|%|)$/, (_, num, suffix) => num + (suffix ? `<span style="color:#20B8CD">${suffix}</span>` : "")).split("<span").map((part, i) =>
                  i === 0 ? part : <span key={i}><span style={{ color: "#20B8CD" }}>{part.match(/>(.*?)<\/span>/)?.[1]}</span>{part.split("</span>")[1]}</span>
                )}
              </div>
              <div className="text-[13px] text-[#8A99A8] max-w-[160px] mx-auto leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WAITLIST ── */}
      <section id="waitlist" className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="waitlist-grid" style={{ background: "#0D1117", border: "1px solid #1E2A35", borderRadius: 28, padding: "64px 72px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", overflow: "hidden" }}>
          {/* top line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #20B8CD 50%, transparent)", opacity: 0.6 }} />
          {/* glow */}
          <div style={{ position: "absolute", bottom: -100, right: -100, width: 400, height: 400, background: "radial-gradient(circle, rgba(32,184,205,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative" }}>
            <h2 className="text-[32px] sm:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-[#F0F4F8] mb-4">
              Entre na lista de espera.
            </h2>
            <p className="text-[#8A99A8] text-[16px] leading-relaxed mb-7">
              Você recebe prioridade no acesso, atualizações de produto e o aviso quando o download estiver disponível.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Acesso antecipado", "Notificações", "Convites beta"].map((tag) => (
                <span key={tag} style={{ fontSize: 12, fontWeight: 600, color: "#8A99A8", padding: "5px 13px", border: "1px solid #1E2A35", borderRadius: 100 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit} style={{ position: "relative" }}>
            <input
              type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail"
              style={{ width: "100%", background: "#070A0C", border: "1px solid #1E2A35", borderRadius: 10, padding: "13px 16px", fontSize: 15, color: "#F0F4F8", outline: "none" }}
              className="placeholder:text-[#4A5568] focus:border-[#20B8CD] transition-colors"
            />
            <button type="submit" disabled={submitting}
              style={{ width: "100%", background: "#20B8CD", color: "#000", border: "none", borderRadius: 10, padding: 15, fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 0 24px rgba(32,184,205,0.3)" }}
              className="hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-60">
              {submitting ? "Enviando…" : "Quero ser avisado →"}
            </button>
            {submitted === "ok" && <p className="text-xs text-[#20B8CD] text-center">Entrou! Te avisamos assim que abrir.</p>}
            {submitted === "error" && <p className="text-xs text-red-400 text-center">Ops! Não deu. Tenta de novo.</p>}
            <p className="text-xs text-[#4A5568] text-center">Sem spam. Só lançamento, beta e atualizações.</p>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-[800px] px-6 pb-24">
        <div className="text-center mb-10">
          <SectionEyebrow>Perguntas frequentes</SectionEyebrow>
          <h2 className="text-[28px] font-bold tracking-[-0.02em] text-[#F0F4F8]">Dúvidas comuns</h2>
        </div>
        <div style={{ border: "1px solid #1E2A35", borderRadius: 16, overflow: "hidden" }}>
          {faqs.map((faq, i) => (
            <div key={faq.q} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #1E2A35" : "none" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", background: "#0D1117", border: "none", padding: "20px 26px", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, cursor: "pointer" }}
                className="hover:bg-[#131820] transition-colors"
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: "#F0F4F8" }}>{faq.q}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A5568" strokeWidth="2"
                  style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {openFaq === i && (
                <div style={{ background: "#131820", padding: "0 26px 20px", fontSize: 14, color: "#8A99A8", lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 py-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <OrvySymbol size={24} />
            <span className="text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">Orvy</span>
          </div>
          <span className="text-xs text-white/30" suppressHydrationWarning>
            © {new Date().getFullYear()} ORVY — Clareza financeira para quem corre atrás.
          </span>
          <div className="flex gap-5">
            {["Privacidade", "Termos", "Suporte"].map((l) => (
              <a key={l} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}