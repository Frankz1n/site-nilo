import Image from 'next/image';
import { brandsContent, type BrandLogo } from '@/lib/content';

const DESKTOP_SCALE = 0.62;
const MOBILE_SCALE = 0.4;
const CONTAINER_WIDTH_IN_PIXELS = 1536;

const fluidLogoWidth = ({ designWidth }: BrandLogo): string => {
  const minimumRem = (designWidth * MOBILE_SCALE) / 16;
  const maximumRem = (designWidth * DESKTOP_SCALE) / 16;
  const preferredVw = ((designWidth * DESKTOP_SCALE) / CONTAINER_WIDTH_IN_PIXELS) * 100;
  return `clamp(${minimumRem}rem, ${preferredVw}vw, ${maximumRem}rem)`;
};

export default function BrandsSection() {
  return (
    <section aria-labelledby="brands-title" className="bg-surface py-8 lg:py-10">
      <div className="container-page">
        <h2 id="brands-title" className="text-center text-caption font-semibold tracking-[0.14em] text-mist">
          {brandsContent.title}
        </h2>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:flex-nowrap lg:justify-between lg:gap-6">
          {brandsContent.logos.map((logo) => (
            <li key={logo.name} className="shrink-0" style={{ width: fluidLogoWidth(logo) }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                sizes="(min-width: 1024px) 12vw, 30vw"
                className="h-auto w-full"
              />
            </li>
          ))}
          <li className="shrink-0 text-center text-caption font-semibold tracking-[0.08em] text-mist">
            {brandsContent.closingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
}
