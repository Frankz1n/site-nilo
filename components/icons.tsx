import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

/* Logotipo — três camadas empilhadas (motivo de camadas de papel/impressão) */
export function LogoMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="lm-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f63d4" />
          <stop offset="1" stopColor="#1d3a8c" />
        </linearGradient>
      </defs>
      <path d="M24 4 44 15 24 26 4 15Z" fill="url(#lm-a)" />
      <path d="M24 18 44 29 24 40 4 29Z" fill="#1d3a8c" />
      <path d="M24 24 44 35 24 46 4 35Z" fill="#14275f" />
    </svg>
  );
}

export function ArrowRight({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function StarIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path
        {...base}
        d="M12 4.5l2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 16.98l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76z"
      />
    </svg>
  );
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M5 12.5l4.2 4.2L19 7" />
    </svg>
  );
}

export function TrophyIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M7 4h10v4a5 5 0 0 1-10 0z" />
      <path {...base} d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M9.5 13.5 9 18h6l-.5-4.5M8 21h8M10 18v3M14 18v3" />
    </svg>
  );
}

export function UserIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="8.5" r="3.5" {...base} />
      <path {...base} d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function GemIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M6 3h12l3 6-9 12L3 9z" />
      <path {...base} d="M3 9h18M9 3 6 9l6 12 6-12-3-6M9.5 9 12 3l2.5 6" />
    </svg>
  );
}

export function LayersIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M12 3 21 8l-9 5-9-5z" />
      <path {...base} d="M3 12l9 5 9-5M3 16l9 5 9-5" />
    </svg>
  );
}

export function PencilIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M16.5 4.5l3 3L8 19l-4 1 1-4z" />
      <path {...base} d="M14.5 6.5l3 3" />
    </svg>
  );
}

export function MonitorIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" {...base} />
      <path {...base} d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function CompassIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" {...base} />
      <path {...base} d="M15.5 8.5 13 13l-4.5 2.5L11 11z" />
    </svg>
  );
}

export function GridIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1" {...base} />
      <rect x="13" y="4" width="7" height="7" rx="1" {...base} />
      <rect x="4" y="13" width="7" height="7" rx="1" {...base} />
      <rect x="13" y="13" width="7" height="7" rx="1" {...base} />
    </svg>
  );
}

export function RocketIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M5 15c-1 2-1 4-1 4s2 0 4-1M14.5 5.5C17 3 21 3 21 3s0 4-2.5 6.5L12 16l-4-4z" />
      <circle cx="15" cy="9" r="1.4" {...base} />
      <path {...base} d="M9 12l-2 .5M12 15l-.5 2" />
    </svg>
  );
}

export function QuoteIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M9.5 6C6.4 6 4 8.5 4 11.7 4 14.6 6 16.5 8.4 16.5c.5 0 1-.1 1.3-.2-.6 1.6-2 2.6-3.6 3l.6 1.7c3.5-.9 6-4 6-7.9V6zm9.5 0c-3.1 0-5.5 2.5-5.5 5.7 0 2.9 2 4.8 4.4 4.8.5 0 1-.1 1.3-.2-.6 1.6-2 2.6-3.6 3l.6 1.7c3.5-.9 6-4 6-7.9V6z"
      />
    </svg>
  );
}

export function WhatsappIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2m0 1.8a8.2 8.2 0 0 1 6.9 12.6l.1.2-.8 2.9-3-.8-.2.1A8.2 8.2 0 1 1 12 3.8m-3 3.7c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1-.7-.3-1.4-.6-2.1-1.4-.5-.6-.9-1.3-1-1.5-.1-.2 0-.3.1-.4l.4-.5c.1-.2.2-.3.2-.5s0-.4-.1-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4z"
      />
    </svg>
  );
}

export function MailIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" {...base} />
      <path {...base} d="m4 7 8 5.5L20 7" />
    </svg>
  );
}

export function MenuIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <path {...base} d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
