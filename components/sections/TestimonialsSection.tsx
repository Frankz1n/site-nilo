import Image from 'next/image';
import { quoteIcon, testimonialsContent, type Testimonial } from '@/lib/content';

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { companyLogo } = testimonial;

  return (
    <figure className="flex h-full flex-col rounded-[9px] border border-line-strong bg-surface-soft p-6">
      <Image
        src={quoteIcon.src}
        alt={quoteIcon.alt}
        width={quoteIcon.width}
        height={quoteIcon.height}
        className="h-10 w-8 object-contain"
      />
      <blockquote className="mt-3 text-lead font-semibold text-ink-deep/84">
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-6 pt-6">
        <Image
          src={companyLogo.src}
          alt={companyLogo.alt}
          width={companyLogo.width}
          height={companyLogo.height}
          sizes="128px"
          className="h-auto w-28 shrink-0"
        />
        <span className="flex flex-col font-bold">
          <span className="text-body text-ink">{testimonial.authorName}</span>
          <span className="text-sm text-muted">{testimonial.authorRole}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" aria-labelledby="testimonials-title" className="bg-surface py-section">
      <h2 id="testimonials-title" className="sr-only">
        Depoimentos
      </h2>
      <ul className="container-page grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        {testimonialsContent.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </section>
  );
}
