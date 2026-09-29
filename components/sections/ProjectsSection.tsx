import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { arrowRightIcon, projectsContent, type FeaturedProject } from '@/lib/content';

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <Link
      href={project.href}
      className="group flex h-full flex-col rounded-[20px] border border-mist/26 bg-surface transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,23,58,0.08)]"
    >
      <span className="relative mx-2 mt-2 block aspect-[480/343] overflow-hidden rounded-t-[16px]">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </span>

      <span className="flex flex-1 items-end justify-between gap-4 px-5 pt-4 pb-5">
        <span className="flex flex-col">
          <span className="text-heading font-semibold text-ink">{project.title}</span>
          <span className="mt-0.5 text-body font-semibold text-muted">{project.client}</span>
        </span>
        <span
          aria-hidden="true"
          className="flex h-10 w-12 shrink-0 items-center justify-center rounded-[50%] border border-muted/44 bg-surface transition-colors group-hover:border-primary/40"
        >
          <Image
            src={arrowRightIcon.src}
            alt={arrowRightIcon.alt}
            width={arrowRightIcon.width}
            height={arrowRightIcon.height}
            className="h-6 w-7 object-contain transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projetos" aria-labelledby="projects-title" className="bg-surface-muted py-section">
      <div className="container-page">
        <SectionHeading eyebrow={projectsContent.eyebrow} title={projectsContent.title} titleId="projects-title" />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {projectsContent.projects.map((project) => (
            <li key={project.id}>
              <FeaturedProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
