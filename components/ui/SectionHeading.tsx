import type { ReactNode } from 'react';
import SectionEyebrow, { type SectionTone } from './SectionEyebrow';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  tone?: SectionTone;
  className?: string;
};

const titleToneClassNames: Record<SectionTone, string> = {
  light: 'text-ink',
  dark: 'text-white',
};

export default function SectionHeading({ eyebrow, title, titleId, tone = 'light', className = '' }: SectionHeadingProps) {
  return (
    <div className={className}>
      <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
      <h2 id={titleId} className={`mt-3 text-title font-semibold ${titleToneClassNames[tone]}`}>
        {title}
      </h2>
    </div>
  );
}
