export default function HeroGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 560"
      className={className}
      role="img"
      aria-label="Camadas gráficas azuis sobrepostas representando direção e consistência visual"
    >
      <defs>
        <linearGradient id="hg-plate-a" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#3f74e0" />
          <stop offset="1" stopColor="#1f47a6" />
        </linearGradient>
        <linearGradient id="hg-plate-b" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#2a58c4" />
          <stop offset="1" stopColor="#183a92" />
        </linearGradient>
        <linearGradient id="hg-plate-c" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#1f47a6" />
          <stop offset="1" stopColor="#132b6e" />
        </linearGradient>

        <radialGradient id="hg-glow" cx="0.72" cy="0.82" r="0.75">
          <stop offset="0" stopColor="#6f97ec" stopOpacity="0.55" />
          <stop offset="0.55" stopColor="#a9c1f2" stopOpacity="0.18" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Textura sutil de papel/impressão */}
        <filter id="hg-tex" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0" result="t" />
          <feComposite in="t" in2="SourceGraphic" operator="over" />
        </filter>

        <filter id="hg-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="26" stdDeviation="22" floodColor="#1b3a8c" floodOpacity="0.20" />
        </filter>
      </defs>

      {/* Brilho de fundo */}
      <rect x="0" y="0" width="520" height="560" fill="url(#hg-glow)" />

      {/* Placa inferior */}
      <g filter="url(#hg-shadow)">
        <path d="M260 300 470 405 260 510 50 405Z" fill="url(#hg-plate-c)" filter="url(#hg-tex)" />
      </g>
      {/* Placa do meio */}
      <g filter="url(#hg-shadow)">
        <path d="M260 205 470 310 260 415 50 310Z" fill="url(#hg-plate-b)" filter="url(#hg-tex)" />
      </g>
      {/* Placa superior */}
      <g filter="url(#hg-shadow)">
        <path d="M260 70 470 175 260 280 50 175Z" fill="url(#hg-plate-a)" filter="url(#hg-tex)" />
        {/* leve brilho de aresta */}
        <path d="M260 70 470 175 260 280Z" fill="#ffffff" opacity="0.06" />
      </g>
    </svg>
  );
}
