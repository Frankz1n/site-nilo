'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import type { BrandGroup, PortfolioItem } from '@/lib/portfolio';
import ProjectModal from './ProjectModal';

type BrandProjectsGridProps = {
  brand: BrandGroup;
};

export default function BrandProjectsGrid({ brand }: BrandProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {brand.projects.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group flex h-full w-full flex-col rounded-[20px] border border-mist/26 bg-surface text-left transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,23,58,0.08)]"
            >
              <span className="relative mx-2 mt-2 block aspect-[4/3] overflow-hidden rounded-t-[16px]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </span>
              <span className="flex flex-1 flex-col px-5 pt-4 pb-5">
                <span className="text-caption font-semibold tracking-[0.08em] uppercase text-muted">{project.tag}</span>
                <span className="mt-1.5 text-heading font-semibold text-ink">{project.title}</span>
                <span className="mt-3 text-body font-semibold text-primary">Ver detalhes</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <ProjectModal
        project={selectedProject}
        brandName={brand.name}
        brandLogo={brand.logo}
        onClose={closeModal}
      />
    </>
  );
}
