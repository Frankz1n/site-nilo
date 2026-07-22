'use client';

import { useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import type { PortfolioItem } from '@/lib/portfolio';
import { CloseIcon } from '@/components/icons';

type ProjectModalProps = {
  project: PortfolioItem | null;
  brandName: string;
  onClose: () => void;
};

export default function ProjectModal({ project, brandName, onClose }: ProjectModalProps) {
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

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Fechar detalhes do projeto"
        className="absolute inset-0 bg-navy-950/55 backdrop-blur-[3px]"
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
            alt={`${brandName} — ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 48rem"
            className="object-cover"
            priority
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
          />
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

        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy-800 sm:text-xs">
            {brandName}
            <span className="mx-2 text-line">·</span>
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
        </div>
      </div>
    </div>
  );
}
