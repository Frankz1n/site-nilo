import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutContent } from '@/lib/content';

export default function AboutSection() {
  const { image, highlights } = aboutContent;

  return (
    <section id="sobre" aria-labelledby="about-title" className="bg-surface-soft py-section">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            titleId="about-title"
            title={
              <>
                <span className="block">{aboutContent.titleFirstLine}</span>
                {aboutContent.titleSecondLineLead}{' '}
                <span className="text-primary">{aboutContent.titleHighlight}</span>
              </>
            }
          />
          <p className="mt-5 max-w-[36rem] text-lead font-medium text-muted">{aboutContent.description}</p>
        </div>

        <div className="relative lg:pr-6">
          <div className="relative aspect-[812/465] overflow-hidden rounded-[10px]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="absolute top-0 left-0 h-[148.6%] w-[113.48%] max-w-none"
            />
          </div>

          <ul className="relative mt-4 flex flex-col gap-4 rounded-[11px] border border-line/60 bg-surface p-5 sm:flex-row sm:justify-between lg:absolute lg:top-[17.85%] lg:-right-4 lg:mt-0 lg:w-60 lg:flex-col lg:justify-start lg:border-0 lg:shadow-[0_12px_32px_rgba(0,23,58,0.08)]">
            {highlights.map((highlight) => (
              <li key={highlight.value} className="flex items-center gap-3">
                <Image
                  src={highlight.icon.src}
                  alt={highlight.icon.alt}
                  width={highlight.icon.width}
                  height={highlight.icon.height}
                  className="size-9 shrink-0"
                />
                <p className="text-sm leading-snug font-semibold">
                  <span className="block text-black">{highlight.value}</span>
                  <span className="block text-muted">{highlight.label}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
