'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { BrandGroup, PortfolioItem } from '@/lib/portfolio';
import ProjectModal from './ProjectModal';

type BrandProjectsGridProps = {
  brand: BrandGroup;
};

export default function BrandProjectsGrid({ brand }: BrandProjectsGridProps) {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {brand.projects.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="group block w-full overflow-hidden rounded-[var(--radius-card)] bg-navy-950 text-left shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800"
            >
              <span className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent"
                />
              </span>
              <span className="block bg-surface px-4 py-4 sm:px-5 sm:py-5">
                <span className="block text-[0.68rem] font-semibold uppercase tracking-wider text-muted sm:text-xs">
                  {project.tag}
                </span>
                <span className="mt-1.5 block font-display text-base font-bold leading-snug text-ink sm:text-lg">
                  {project.title}
                </span>
                <span className="mt-2 block text-sm text-navy-800/80 transition group-hover:text-navy-800">
                  Ver detalhes
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <ProjectModal project={selected} brandName={brand.name} onClose={() => setSelected(null)} />
    </>
  );
}
