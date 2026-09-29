import Image from 'next/image';
import Link from 'next/link';
import QuoteCtaLink from '@/components/ui/QuoteCtaLink';
import { brandIdentity } from '@/lib/content';
import { site, type SectionId } from '@/lib/site';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

type SiteHeaderProps = {
  initialSectionId?: SectionId;
};

export default function SiteHeader({ initialSectionId = 'inicio' }: SiteHeaderProps) {
  const { headerLogo } = brandIdentity;

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-surface/95 backdrop-blur-md">
      <div className="container-page relative flex h-[4.5rem] items-center justify-between gap-6 xl:h-20">
        <Link
          href="/#inicio"
          aria-label={`${site.name} — página inicial`}
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src={headerLogo.src}
            alt={headerLogo.alt}
            width={headerLogo.width}
            height={headerLogo.height}
            priority
            className="h-auto w-9 xl:w-11"
          />
          <span className="flex flex-col">
            <span className="text-xl leading-tight font-semibold text-ink xl:text-2xl">{brandIdentity.name}</span>
            <span className="text-[0.5625rem] leading-none font-medium tracking-[0.26em] text-black xl:text-[0.625rem]">
              {brandIdentity.tagline}
            </span>
          </span>
        </Link>

        <DesktopNavigation initialSectionId={initialSectionId} />

        <div className="hidden xl:block">
          <QuoteCtaLink />
        </div>

        <MobileNavigation initialSectionId={initialSectionId} />
      </div>
    </header>
  );
}
