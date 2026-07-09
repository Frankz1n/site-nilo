'use client';

import { heroDockItems } from '@/lib/hero-content';
import { ArrowLeft, ArrowRight } from '@/components/icons';

type HeroDockProps = {
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
};

function DockCard({
  title,
  desc,
  Icon,
  href,
}: {
  title: string;
  desc: string;
  Icon: (typeof heroDockItems)[number]['Icon'];
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border border-transparent p-1 transition-colors hover:border-white/12 hover:bg-white/5"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/90 transition-colors group-hover:bg-white group-hover:text-navy-800">
          <Icon className="h-4 w-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-white">{title}</span>
          <span className="mt-1 block text-xs leading-relaxed text-white/62">{desc}</span>
        </span>
      </div>
    </a>
  );
}

export default function HeroDock({ activeIndex, onPrev, onNext }: HeroDockProps) {
  const active = heroDockItems[activeIndex % heroDockItems.length];
  const visibleDesktop = [
    active,
    heroDockItems[(activeIndex + 1) % heroDockItems.length],
    heroDockItems[(activeIndex + 2) % heroDockItems.length],
  ];

  return (
    <div className="relative z-20 -mx-[var(--spacing-gutter)] mt-auto w-[calc(100%+2*var(--spacing-gutter))] sm:mx-0 sm:w-full">
      <div className="glass-panel-strong relative overflow-hidden rounded-t-[1.25rem] border-b-0 border-white/16 px-4 py-4 safe-bottom sm:rounded-t-[1.75rem] sm:px-6 sm:py-6 lg:px-8">
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 h-px w-20 bg-gradient-to-l from-paper/70 to-transparent sm:w-28"
        />

        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.4fr)_auto] lg:items-center lg:gap-8">
          <div className="flex items-center justify-between gap-4 lg:justify-start">
            <p className="hero-eyebrow text-white/85">Mais conteúdo</p>
            <div className="flex items-center gap-2.5 lg:hidden">
              <button
                type="button"
                onClick={onPrev}
                aria-label="Item anterior"
                className="touch-target inline-flex items-center justify-center rounded-full bg-white text-navy-800"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Próximo item"
                className="touch-target inline-flex items-center justify-center rounded-full bg-white text-navy-800"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <div className="lg:hidden">
              <DockCard {...active} />
            </div>
            <div className="hidden gap-6 lg:grid lg:grid-cols-3">
              {visibleDesktop.map(({ title, desc, Icon, href }) => (
                <DockCard key={title} title={title} desc={desc} Icon={Icon} href={href} />
              ))}
            </div>
          </div>

          <div className="hidden items-center justify-end gap-3 lg:flex">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Item anterior"
              className="touch-target inline-flex items-center justify-center rounded-full bg-white text-navy-800 transition-transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Próximo item"
              className="touch-target inline-flex items-center justify-center rounded-full bg-white text-navy-800 transition-transform hover:-translate-y-0.5"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
