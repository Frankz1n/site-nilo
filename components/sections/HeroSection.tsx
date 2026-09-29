import Image from 'next/image';
import QuoteCtaLink from '@/components/ui/QuoteCtaLink';
import { heroContent } from '@/lib/content';

export default function HeroSection() {
  const { background, portrait, metrics } = heroContent;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden xl:h-[var(--hero-height)]"
    >
      <Image
        src={background.src}
        alt={background.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[12%_center] xl:object-right"
      />

      <div className="container-page relative grid gap-8 pt-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end md:gap-6 md:pt-14 xl:static xl:flex xl:h-full xl:items-center xl:pt-0">
        <div className="relative z-10 md:pb-14 xl:max-w-[34rem] xl:pb-0">
          <h1 id="hero-title" className="text-display font-bold text-black">
            <span className="block">{heroContent.titleLead}</span>
            <span className="block text-primary">{heroContent.titleHighlight}</span>
          </h1>

          <p className="mt-5 max-w-[34rem] text-lead font-semibold text-stone">{heroContent.subtitle}</p>

          <QuoteCtaLink className="mt-8" />

          <dl className="mt-10 flex items-center">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="flex items-center">
                {index > 0 && <span aria-hidden="true" className="mx-4 h-9 w-px shrink-0 bg-line sm:mx-6" />}
                <div className="flex flex-col-reverse">
                  <dt className="text-caption font-semibold text-muted">{metric.label}</dt>
                  <dd className="text-metric font-bold text-black">{metric.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* No desktop o retrato acompanha o painel escuro do fundo, que é ancorado à direita */}
        <div className="relative mx-auto w-full max-w-[20rem] md:max-w-[26rem] xl:absolute xl:right-[max(21.45%,calc(var(--hero-height)*0.5808))] xl:bottom-[1.125%] xl:mx-0 xl:h-[94.4%] xl:w-auto xl:max-w-none">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            priority
            sizes="(min-width: 1280px) 26vw, (min-width: 768px) 40vw, 20rem"
            className="h-auto w-full xl:h-full xl:w-auto"
          />
        </div>
      </div>
    </section>
  );
}
