import Image from 'next/image';
import { brands } from '@/lib/brands';

function BrandItem({ name, logo }: { name: string; logo?: string }) {
  return (
    <li className="flex h-14 w-40 shrink-0 items-center justify-center px-5 sm:h-16 sm:w-48 sm:px-6 md:h-[4.5rem] md:w-56">
      {logo ? (
        <Image
          src={logo}
          alt={name}
          width={200}
          height={72}
          className="h-8 w-auto max-w-[9rem] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-9 sm:max-w-[10rem] md:h-10"
          unoptimized
        />
      ) : (
        <span className="font-display text-base font-bold tracking-tight text-navy-800/70 sm:text-lg md:text-xl">
          {name}
        </span>
      )}
    </li>
  );
}

export default function Brands() {
  const track = [...brands, ...brands];

  return (
    <section aria-label="Marcas atendidas" className="border-y border-line/70 bg-paper-2 py-8 sm:py-10 lg:py-12">
      <div className="container-page mb-6 sm:mb-8">
        <p className="mx-auto max-w-md text-center text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.12em] text-muted sm:text-xs sm:tracking-[0.14em]">
          Marcas e redes atendidas na produção gráfica
        </p>
      </div>

      <div className="relative overflow-hidden">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-paper-2 to-transparent sm:w-16 md:w-24"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-paper-2 to-transparent sm:w-16 md:w-24"
        />

        <ul className="brands-marquee flex w-max items-center">
          {track.map((brand, index) => (
            <BrandItem key={`${brand.name}-${index}`} name={brand.name} logo={brand.logo} />
          ))}
        </ul>
      </div>
    </section>
  );
}
