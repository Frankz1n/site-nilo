'use client';

import { useEffect, useState } from 'react';
import { nav, site, whatsappUrl } from '@/lib/site';
import { ArrowRight, MenuIcon, CloseIcon } from './icons';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const hero = document.querySelector('[data-hero]');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting && entry.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.6] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHeroMode = overHero && !scrolled;
  const shellClass = isHeroMode
    ? 'bg-transparent'
    : scrolled
      ? 'bg-paper-2/85 backdrop-blur-md border-b border-line'
      : 'bg-paper/90 backdrop-blur-sm border-b border-line/70';

  const linkClass = isHeroMode
    ? 'text-white/78 hover:text-white'
    : 'text-ink/80 hover:text-navy-800';

  const activeLinkClass = isHeroMode ? 'text-white' : 'text-navy-800';
  const activeBarClass = isHeroMode ? 'bg-white' : 'bg-navy-800';
  const menuBtnClass = isHeroMode ? 'text-white' : 'text-navy-800';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${shellClass}`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-3 sm:gap-4">
        <a
          href="#inicio"
          className="group block min-w-0 shrink transition-transform duration-300 hover:scale-[1.02]"
          aria-label={`${site.name} — início`}
        >
          <Logo
            size="sm"
            priority
            className={isHeroMode ? 'brightness-0 invert' : undefined}
          />
        </a>

        <nav
          className="hidden items-center justify-center gap-4 xl:gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative whitespace-nowrap text-sm font-medium transition-colors ${linkClass} ${
                i === 0 ? activeLinkClass : ''
              }`}
            >
              {item.label}
              {i === 0 && (
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full ${activeBarClass}`}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 xl:px-5 xl:py-3 lg:inline-flex ${
              isHeroMode
                ? 'glass-panel text-white hover:bg-white/14'
                : 'bg-navy-800 text-white shadow-[var(--shadow-btn)]'
            }`}
          >
            <span className="hidden xl:inline">Solicitar orçamento</span>
            <span className="xl:hidden">Orçamento</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            className={`touch-target inline-flex items-center justify-center rounded-lg lg:hidden ${menuBtnClass}`}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Fechar menu"
          className="fixed inset-0 top-[var(--header-height)] z-40 bg-ink/30 backdrop-blur-[2px] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed inset-x-0 top-[var(--header-height)] z-50 overflow-y-auto border-b border-line bg-paper-2 shadow-[var(--shadow-soft)] lg:hidden ${
          open ? 'visible opacity-100' : 'invisible max-h-0 opacity-0'
        } transition-[max-height,opacity,visibility] duration-300 ease-out`}
        style={{ maxHeight: open ? 'calc(100dvh - var(--header-height))' : '0' }}
      >
        <nav
          className="container-page flex flex-col gap-1 py-4 safe-bottom"
          aria-label="Navegação mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="touch-target rounded-lg px-3 py-3.5 text-base font-medium text-ink/85 transition-colors hover:bg-line/60 hover:text-navy-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-navy-800 px-5 py-3.5 text-sm font-semibold text-white"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
