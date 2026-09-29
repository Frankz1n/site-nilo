export type SectionTone = 'light' | 'dark';

type SectionEyebrowProps = {
  children: string;
  tone?: SectionTone;
  className?: string;
};

const toneClassNames: Record<SectionTone, string> = {
  light: 'text-muted',
  dark: 'text-steel',
};

export default function SectionEyebrow({ children, tone = 'light', className = '' }: SectionEyebrowProps) {
  return (
    <p className={`text-caption font-bold tracking-[0.14em] uppercase ${toneClassNames[tone]} ${className}`}>
      {children}
    </p>
  );
}
