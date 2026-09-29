import AmbientVideo from '@/components/ui/AmbientVideo';
import QuoteCtaLink from '@/components/ui/QuoteCtaLink';
import SectionHeading from '@/components/ui/SectionHeading';
import { eventStandsContent } from '@/lib/content';

export default function EventStandsSection() {
  return (
    <section id="servicos" aria-labelledby="event-stands-title" className="bg-surface-muted pb-section">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={eventStandsContent.eyebrow}
            title={eventStandsContent.title}
            titleId="event-stands-title"
          />
          <p className="mt-5 max-w-[34rem] text-lead font-medium text-muted">{eventStandsContent.description}</p>
          <QuoteCtaLink message={eventStandsContent.quoteMessage} className="mt-8" />
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:ml-auto lg:w-full lg:max-w-[40rem]">
          {eventStandsContent.videos.map((video) => (
            <li key={video.id}>
              <figure>
                <AmbientVideo
                  src={video.src}
                  poster={video.poster}
                  label={video.description}
                  className="aspect-[9/16] w-full rounded-[20px] bg-ink-deep object-cover"
                />
                <figcaption className="mt-3 text-body font-semibold text-ink">{video.title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
