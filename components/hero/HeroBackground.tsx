export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-wave-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2f63d4" stopOpacity="0.45" />
            <stop offset="1" stopColor="#1d3a8c" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="hero-wave-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7d9de6" stopOpacity="0.35" />
            <stop offset="1" stopColor="#14275f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-ribbon" x1="0" y1="0.5" x2="1" y2="0.5">
            <stop offset="0" stopColor="#f1f0ed" stopOpacity="0" />
            <stop offset="0.35" stopColor="#f1f0ed" stopOpacity="0.12" />
            <stop offset="0.65" stopColor="#e8e6e1" stopOpacity="0.08" />
            <stop offset="1" stopColor="#f1f0ed" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M-120 620 C 220 520, 420 760, 760 680 C 1080 610, 1260 500, 1560 560 L 1560 920 L -120 920 Z"
          fill="url(#hero-wave-a)"
        />
        <path
          d="M-80 700 C 280 600, 520 820, 900 740 C 1180 680, 1320 590, 1580 650 L 1580 920 L -80 920 Z"
          fill="url(#hero-wave-b)"
        />
        <path
          d="M0 480 C 360 420, 520 360, 900 390 C 1140 410, 1280 450, 1440 430 L 1440 520 C 1280 540, 1100 500, 900 490 C 560 470, 320 520, 0 560 Z"
          fill="url(#hero-ribbon)"
        />

        <g opacity="0.18" stroke="rgba(255,255,255,0.32)" strokeWidth="1">
          <circle cx="1080" cy="380" r="110" />
          <circle cx="1080" cy="380" r="175" />
          <circle cx="1080" cy="380" r="240" />
          <circle cx="1080" cy="380" r="305" />
        </g>
      </svg>

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-navy-500/20 blur-3xl" />
      <div className="absolute bottom-32 right-0 h-80 w-80 rounded-full bg-navy-300/15 blur-3xl" />
    </div>
  );
}
