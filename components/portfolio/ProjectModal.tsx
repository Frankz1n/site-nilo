'use client';

import { useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import type { FullProjectItem, PortfolioItem } from '@/lib/portfolio';
import { CloseIcon, WhatsappIcon, ArrowRight } from '@/components/icons';
import { whatsappUrl } from '@/lib/site';

type ProjectModalProps = {
  project: (PortfolioItem & { brandName?: string; brandLogo?: string }) | FullProjectItem | null;
  brandName?: string;
  brandLogo?: string;
  onClose: () => void;
};

export default function ProjectModal({ project, brandName, brandLogo, onClose }: ProjectModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const displayBrandName = brandName || (('brandName' in project && project.brandName) ? project.brandName : '');
  const displayBrandLogo = brandLogo || (('brandLogo' in project && project.brandLogo) ? project.brandLogo : '');
  const quoteMsg = `Olá! Gostaria de solicitar um orçamento para um projeto semelhante a "${project.title}"${displayBrandName ? ` (${displayBrandName})` : ''}.`;


  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Fechar detalhes do projeto"
        className="absolute inset-0 bg-navy-950/60 backdrop-blur-[4px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[1.25rem] bg-surface shadow-[var(--shadow-soft)] sm:rounded-[var(--radius-card)]"
      >
        <div className="relative aspect-[16/11] w-full shrink-0 bg-navy-950 sm:aspect-[16/10]">
          <Image
            src={project.image}
            alt={`${displayBrandName} — ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 48rem"
            className="object-cover"
            priority
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent"
          />

          {displayBrandLogo && (
            <span className="absolute left-4 top-4 z-10 inline-flex h-9 items-center rounded-md bg-white/95 px-3 shadow-sm backdrop-blur-sm sm:left-5 sm:top-5 sm:h-10">
              <Image
                src={displayBrandLogo}
                alt={displayBrandName}
                width={120}
                height={36}
                className="h-5 w-auto max-w-[5.5rem] object-contain sm:h-6 sm:max-w-[6.5rem]"
                unoptimized
              />
            </span>
          )}

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-navy-800 shadow-sm backdrop-blur-sm transition hover:bg-white sm:right-4 sm:top-4"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy-800 sm:text-xs">
            {displayBrandName}
            {displayBrandName && <span className="mx-2 text-line">·</span>}
            {project.tag}
          </p>
          <h2
            id={titleId}
            className="mt-2 font-display text-xl font-bold leading-snug text-ink sm:text-2xl"
          >
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-body sm:mt-4 sm:text-base">
            {project.description}
          </p>

          <div className="mt-6 border-t border-line/70 pt-5">
            <a
              href={whatsappUrl(quoteMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-navy-800 px-5 py-3.5 text-center text-sm font-semibold text-white shadow-[var(--shadow-btn)] transition hover:bg-navy-900 sm:w-auto"
            >
              <WhatsappIcon className="h-5 w-5 text-emerald-400" />
              Solicitar orçamento para projeto semelhante
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

