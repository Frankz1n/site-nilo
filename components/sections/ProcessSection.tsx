import SectionHeading from '@/components/ui/SectionHeading';
import { processContent } from '@/lib/content';

export default function ProcessSection() {
  const { steps } = processContent;

  return (
    <section aria-labelledby="process-title" className="bg-ink-deep py-section text-white">
      <div className="container-page">
        <SectionHeading
          eyebrow={processContent.eyebrow}
          title={processContent.title}
          titleId="process-title"
          tone="dark"
        />

        <ol className="mt-10 flex flex-col gap-8 [--step-circle-size:clamp(3.25rem,2.8rem+1.2vw,4.25rem)] lg:mt-12 lg:flex-row lg:gap-0 lg:px-14">
          {steps.map((step, index) => {
            const isLastStep = index === steps.length - 1;

            return (
              <li key={step.number} className={`relative flex ${isLastStep ? '' : 'lg:flex-1'}`}>
                <div className="flex gap-5 lg:w-[var(--step-circle-size)] lg:shrink-0 lg:flex-col lg:items-center lg:gap-0">
                  <span className="flex size-[var(--step-circle-size)] shrink-0 items-center justify-center rounded-full bg-white text-subtitle font-bold text-ink-blue">
                    {step.number}
                  </span>
                  <div className="pt-1.5 lg:mt-4 lg:w-56 lg:pt-0 lg:text-center">
                    <h3 className="text-heading font-bold">{step.title}</h3>
                    <p className="mt-1.5 text-body text-white/80 lg:mt-2">{step.description}</p>
                  </div>
                </div>

                {!isLastStep && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[var(--step-circle-size)] left-[calc(var(--step-circle-size)/2)] h-[calc(100%-var(--step-circle-size)+2rem)] w-px bg-white/40 lg:static lg:mt-[calc(var(--step-circle-size)/2)] lg:h-px lg:w-auto lg:flex-1 lg:bg-white/70"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
