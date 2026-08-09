'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { site, whatsappUrl } from '@/lib/site';
import { ArrowRight } from './icons';
import HeroBackground from './hero/HeroBackground';
import HeroDock from './hero/HeroDock';

export default function Hero() {
  const [dockIndex, setDockIndex] = useState(0);

  const handlePrevDock = useCallback(() => {
    setDockIndex((current) => (current - 1 + 4) % 4);
  }, []);

  const handleNextDock = useCallback(() => {
    setDockIndex((current) => (current + 1) % 4);
  }, []);

  return (
    <section
      id="inicio"
      data-hero
      className="hero-surface relative flex min-h-svh flex-col overflow-hidden pt-[var(--header-height)] text-white"
    >
      <HeroBackground />

      <div className="container-page relative z-10 flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 items-stretch py-6 sm:py-8 lg:py-10">
          <div className="grid w-full items-center gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-4 xl:gap-8">
            <div className="rise min-w-0 max-w-3xl py-4 lg:py-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <p className="hero-eyebrow max-w-[20rem] sm:max-w-none">
                  Consultoria Gráfica em Materiais e Produção
                </p>
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 max-w-28 bg-white/25 sm:block"
                />
              </div>

              <h1 className="hero-display mt-5 max-w-[14ch] text-[clamp(2rem,8vw,4.8rem)] sm:mt-6 sm:max-w-[12ch]">
                Da demanda ao material pronto.
              </h1>

              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/72 sm:mt-6 sm:text-[1.05rem] lg:text-[1.1rem]">
                Você traz a ideia e as artes. Eu cuido do orçamento, da especificação de materiais e
                de todo o processo de produção — em papel, acrílico, madeira e muito mais.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full sm:w-auto"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#portfolio"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 border-b border-white/35 pb-1 text-sm font-semibold text-white/88 transition-colors hover:border-white hover:text-white sm:w-auto sm:justify-start"
                >
                  Ver projetos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="relative hidden h-full min-h-[22rem] w-full sm:block lg:min-h-0">
              <div className="hero-portrait rise absolute inset-x-0 bottom-0 top-0 flex flex-col items-center justify-end">
                <span
                  aria-hidden="true"
                  className="hero-portrait-glow pointer-events-none absolute bottom-[18%] left-1/2 h-[70%] w-[75%] -translate-x-1/2 rounded-full"
                />
                <Image
                  src="/nilo-hero.png"
                  alt={site.name}
                  width={800}
                  height={1200}
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 50vw, 42vw"
                  className="hero-portrait-img relative z-10 h-[min(58vh,32rem)] w-auto max-w-none object-contain lg:h-[min(62vh,36rem)] xl:h-[min(66vh,40rem)]"
                />
                <div className="hero-portrait-meta relative z-20 mb-1 mt-1 text-center lg:mb-2">
                  <p className="font-display text-sm font-bold tracking-tight text-white lg:text-base">
                    {site.shortName}
                  </p>
                  <p className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/65">
                    {site.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroDock activeIndex={dockIndex} onPrev={handlePrevDock} onNext={handleNextDock} />
      </div>
    </section>
  );
}
