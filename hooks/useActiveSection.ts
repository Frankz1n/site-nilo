'use client';

import { useEffect, useState } from 'react';

const BOTTOM_TOLERANCE_IN_PIXELS = 4;

const isScrolledToPageBottom = (): boolean =>
  window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - BOTTOM_TOLERANCE_IN_PIXELS;

export function useActiveSection<TSectionId extends string>(
  sectionIds: readonly TSectionId[],
  initialSectionId: TSectionId,
): TSectionId {
  const [activeSectionId, setActiveSectionId] = useState<TSectionId>(initialSectionId);

  useEffect(() => {
    const sectionElements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const lastSectionId = sectionElements[sectionElements.length - 1].id as TSectionId;

    // Faixa estreita no meio da viewport: a seção que a cruza é a que o usuário está lendo.
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolledToPageBottom()) return;
        const crossingEntry = entries.find((entry) => entry.isIntersecting);
        if (!crossingEntry) return;
        setActiveSectionId(crossingEntry.target.id as TSectionId);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    // O rodapé é mais baixo que a viewport e nunca alcança a faixa central.
    const handleScroll = () => {
      if (isScrolledToPageBottom()) setActiveSectionId(lastSectionId);
    };

    sectionElements.forEach((element) => observer.observe(element));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSectionId;
}
