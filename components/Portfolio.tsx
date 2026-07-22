'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { brandGroups, getProjectCountLabel } from '@/lib/portfolio';
import { ArrowLeft, ArrowRight } from './icons';

const AUTO_MS = 4200;

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const syncActiveIndex = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.children) as HTMLElement[];
    if (cards.length === 0) return;

    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let closest = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[index] as HTMLElement | undefined;
    if (!scroller || !card) return;

    scroller.scrollTo({
      left: card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    syncActiveIndex();
    scroller.addEventListener('scroll', syncActiveIndex, { passive: true });
    window.addEventListener('resize', syncActiveIndex);
    return () => {
      scroller.removeEventListener('scroll', syncActiveIndex);
      window.removeEventListener('resize', syncActiveIndex);
    };
  }, [syncActiveIndex]);

  useEffect(() => {
    if (isPaused || brandGroups.length < 2) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      const next = (activeIndexRef.current + 1) % brandGroups.length;
      scrollToIndex(next);
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, scrollToIndex]);

  const goPrev = () => {
    const next = (activeIndex - 1 + brandGroups.length) % brandGroups.length;
    scrollToIndex(next);
  };

  const goNext = () => {
    const next = (activeIndex + 1) % brandGroups.length;
    scrollToIndex(next);
  };

  return (
    <section id="portfolio" className="section-block overflow-hidden">
      <div className="container-page">
        <div className="section-head">
          <div>
            <p className="eyebrow">Clientes & projetos</p>
            <h2 className="display mt-3 max-w-[18ch] text-[clamp(1.75rem,6vw,3.2rem)] sm:mt-4">
              Marcas que confiam na produção
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-body sm:text-base">
            Cada capa abre o portfólio da marca — clique para ver todos os projetos e os detalhes de
            cada peça produzida.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
            <p className="text-sm text-body">
              <span className="font-semibold text-ink">{activeIndex + 1}</span>
              <span className="text-muted"> / {brandGroups.length}</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Marca anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-navy-800 shadow-sm transition hover:border-navy-300"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próxima marca"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-navy-800 shadow-sm transition hover:border-navy-300"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <ul
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:gap-6 [&::-webkit-scrollbar]:hidden"
          >
            {brandGroups.map((brand) => (
              <li
                key={brand.slug}
                className="w-[min(100%,22rem)] shrink-0 snap-center sm:w-[min(85%,34rem)] lg:w-[min(70%,40rem)]"
              >
                <Link
                  href={`/portfolio/${brand.slug}`}
                  className="group relative flex min-h-[22rem] overflow-hidden rounded-[var(--radius-card)] bg-navy-950 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800 sm:min-h-[26rem] sm:aspect-[16/11] sm:min-h-0 lg:min-h-0"
                >
                  <Image
                    src={brand.cover}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 40rem"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/92 via-navy-950/35 to-navy-950/10"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-0 z-10 h-3 w-16 rounded-b-md bg-white/90 sm:left-5 sm:w-20"
                  />

                  <span className="absolute left-4 top-5 z-10 sm:left-5 sm:top-6">
                    <span className="inline-flex h-9 items-center rounded-md bg-white/95 px-2.5 shadow-sm backdrop-blur-sm sm:h-10 sm:px-3">
                      <Image
                        src={brand.logo}
                        alt=""
                        width={120}
                        height={36}
                        className="h-5 w-auto max-w-[5.5rem] object-contain sm:h-6 sm:max-w-[6.5rem]"
                        unoptimized
                      />
                    </span>
                  </span>

                  <span className="relative z-10 mt-auto flex w-full flex-col p-5 sm:p-6 lg:p-8">
                    <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">
                      {getProjectCountLabel(brand.projects.length)}
                    </span>
                    <span className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                      {brand.name}
                    </span>
                    <span className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-white/72 sm:text-base">
                      {brand.summary}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Abrir pasta
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex justify-center gap-2 sm:mt-6">
            {brandGroups.map((brand, index) => (
              <button
                key={brand.slug}
                type="button"
                aria-label={`Ir para ${brand.name}`}
                aria-current={index === activeIndex}
                onClick={() => scrollToIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-7 bg-navy-800' : 'w-2 bg-navy-300/70 hover:bg-navy-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
