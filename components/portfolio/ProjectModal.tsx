'use client';

import { useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import QuoteCtaLink from '@/components/ui/QuoteCtaLink';
import { CloseIcon } from '@/components/ui/icons';
import type { PortfolioItem } from '@/lib/portfolio';

type ProjectModalProps = {
  project: PortfolioItem | null;
  brandName: string;
  brandLogo: string;
  onClose: () => void;
};

export default function ProjectModal({ project, brandName, brandLogo, onClose }: ProjectModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const quoteMessage = `Olá! Gostaria de solicitar um orçamento para um projeto semelhante a "${project.title}" (${brandName}).`;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Fechar detalhes do projeto"
        onClick={onClose}
        className="absolute inset-0 bg-ink-deep/60 backdrop-blur-[4px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[22px] bg-surface shadow-[0_24px_60px_rgba(0,23,50,0.25)] sm:rounded-[22px]"
      >
        <div className="relative aspect-[16/11] w-full shrink-0 bg-ink-deep sm:aspect-[16/10]">
          <Image
            src={project.image}
            alt={`${brandName} — ${project.title}`}
            fill
            priority
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover"
          />

          <span className="absolute top-4 left-4 inline-flex h-10 items-center rounded-xl bg-white/95 px-3 sm:top-5 sm:left-5">
            <Image
              src={brandLogo}
              alt={brandName}
              width={120}
              height={36}
              className="h-6 w-auto max-w-26 object-contain"
              unoptimized
            />
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-white/95 text-ink transition hover:bg-white sm:top-4 sm:right-4"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6 sm:px-8">
          <p className="text-caption font-bold tracking-[0.08em] uppercase text-muted">
            {brandName}
            <span className="mx-2 text-line">·</span>
            {project.tag}
          </p>
          <h2 id={titleId} className="mt-2 text-subtitle font-semibold text-ink">
            {project.title}
          </h2>
          <p className="mt-3 text-body text-stone">{project.description}</p>

          <div className="mt-6 border-t border-line pt-5">
            <QuoteCtaLink
              message={quoteMessage}
              label="Solicitar orçamento semelhante"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
