import Image from 'next/image';
import { statsContent } from '@/lib/content';

export default function StatsSection() {
  return (
    <section aria-label="Números" className="bg-surface-soft py-10 xl:py-6">
      <dl className="container-page grid gap-8 sm:grid-cols-2 xl:flex xl:gap-0">
        {statsContent.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 xl:min-h-24 xl:flex-1 xl:justify-center xl:border-l xl:border-line xl:first:border-l-0"
          >
            <Image
              src={stat.icon.src}
              alt={stat.icon.alt}
              width={stat.icon.width}
              height={stat.icon.height}
              className="size-12 shrink-0 xl:size-14"
            />
            <div className="flex flex-col-reverse font-bold text-ink">
              <dt className="text-body">{stat.label}</dt>
              <dd className="text-stat">{stat.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
