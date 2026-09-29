'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import QuoteCtaLink from '@/components/ui/QuoteCtaLink';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';
import { useActiveSection } from '@/hooks/useActiveSection';
import { nav, type SectionId } from '@/lib/site';

const navigationSectionIds: readonly SectionId[] = nav.map((item) => item.sectionId);

type MobileNavigationProps = {
  initialSectionId: SectionId;
};

export default function MobileNavigation({ initialSectionId }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const activeSectionId = useActiveSection(navigationSectionIds, initialSectionId);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((isCurrentlyOpen) => !isCurrentlyOpen)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="inline-flex size-11 items-center justify-center rounded-lg text-ink transition hover:bg-surface-soft"
      >
        {isOpen ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
      </button>

      {isOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={closeMenu}
          className="absolute inset-x-0 top-full h-dvh bg-ink/30 backdrop-blur-[2px]"
        />
      )}

      <div
        id={panelId}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-t border-line/60 bg-surface shadow-[0_18px_40px_rgba(0,23,58,0.12)]"
      >
        <nav aria-label="Navegação mobile" className="container-page flex flex-col gap-1 py-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          {nav.map((item) => {
            const isActive = item.sectionId === activeSectionId;

            return (
              <Link
                key={item.sectionId}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? 'location' : undefined}
                className={`rounded-lg px-3 py-3 text-base font-bold transition-colors hover:bg-surface-soft ${
                  isActive ? 'text-primary-strong' : 'text-slate'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <QuoteCtaLink className="mt-3 w-full" />
        </nav>
      </div>
    </div>
  );
}
