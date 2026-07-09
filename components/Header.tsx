'use client';

import { useEffect, useState } from 'react';
import { nav, site, whatsappUrl } from '@/lib/site';
import { ArrowRight, LogoMark, MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper-2/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-[76px] items-center justify-between gap-6">
        {/* Marca */}
        <a href="#inicio" className="flex items-center gap-3" aria-label={`${site.name} — início`}>
          <LogoMark className="h-9 w-9 shrink-0" />
          <span className="leading-none">
            <span className="block font-display text-[15px] font-extrabold uppercase tracking-[0.06em] text-navy-800 sm:text-base">
              {site.name}
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
              {site.role}
            </span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium text-ink/80 transition-colors hover:text-navy-800 ${
                i === 0 ? 'text-navy-800' : ''
              }`}
            >
              {item.label}
              {i === 0 && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-navy-800" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-navy-800 px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-btn)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Fale com um especialista
          <ArrowRight className="h-4 w-4" />
        </a>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-800 lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Painel mobile */}
      <div
        className={`overflow-hidden border-line bg-paper-2 lg:hidden ${
          open ? 'max-h-[70vh] border-b' : 'max-h-0'
        } transition-[max-height] duration-300 ease-out`}
      >
        <nav className="container-page flex flex-col gap-1 py-4" aria-label="Navegação mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-ink/85 transition-colors hover:bg-line/60 hover:text-navy-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-navy-800 px-5 py-3.5 text-sm font-semibold text-white"
          >
            Fale com um especialista
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
