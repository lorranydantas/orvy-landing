const PARTICLES = [
  { x: 18, y: 22, size: 2, delay: 0.1, duration: 6.4 },
  { x: 28, y: 12, size: 3, delay: 0.8, duration: 7.2 },
  { x: 40, y: 18, size: 2, delay: 0.4, duration: 6.8 },
  { x: 58, y: 16, size: 2, delay: 1.1, duration: 7.6 },
  { x: 72, y: 24, size: 3, delay: 0.6, duration: 6.9 },
  { x: 82, y: 36, size: 2, delay: 1.3, duration: 7.4 },
  { x: 14, y: 44, size: 3, delay: 0.2, duration: 7.1 },
  { x: 26, y: 62, size: 2, delay: 1.0, duration: 6.3 },
  { x: 38, y: 72, size: 3, delay: 0.5, duration: 7.0 },
  { x: 52, y: 78, size: 2, delay: 1.2, duration: 6.6 },
  { x: 66, y: 70, size: 3, delay: 0.7, duration: 7.3 },
  { x: 78, y: 58, size: 2, delay: 0.9, duration: 6.8 },
  { x: 50, y: 8, size: 2, delay: 1.4, duration: 7.8 },
  { x: 10, y: 30, size: 2, delay: 1.6, duration: 7.5 },
  { x: 90, y: 30, size: 2, delay: 1.5, duration: 7.7 },
];

export default function ParticleCoin() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="orvyParticleField">
        {PARTICLES.map((p, i) => (
          <span
            key={`particle-${i}`}
            className="orvyParticle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="orvyCoinWrap">
        <div className="orvyCoinGlow" />
        <div className="orvyCoin">
          <div className="orvyCoinInner" />
          <div className="orvyCoinShine" />
        </div>
        <div className="orvyCoinRing" />
      </div>
    </div>
  );
}
