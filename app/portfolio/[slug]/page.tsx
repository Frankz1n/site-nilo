import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandProjectsGrid from '@/components/portfolio/BrandProjectsGrid';
import { ArrowLeft } from '@/components/icons';
import {
  brandGroups,
  getAllBrandSlugs,
  getBrandBySlug,
  getProjectCountLabel,
} from '@/lib/portfolio';
import { site } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: 'Projeto não encontrado' };

  return {
    title: `${brand.name} — Projetos | ${site.shortName}`,
    description: brand.summary,
    openGraph: {
      title: `${brand.name} — Projetos`,
      description: brand.summary,
      images: [{ url: brand.cover }],
    },
  };
}

export default async function BrandPortfolioPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  const otherBrands = brandGroups.filter((item) => item.slug !== brand.slug).slice(0, 4);

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy-950 pt-[var(--header-height)]">
          <div className="absolute inset-0">
            <Image
              src={brand.cover}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/75 to-paper"
            />
          </div>

          <div className="container-page relative z-10 pb-16 pt-10 sm:pb-20 sm:pt-14">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar aos clientes
            </Link>

            <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex h-11 items-center rounded-lg bg-white px-3 shadow-sm sm:h-12 sm:px-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={160}
                    height={48}
                    className="h-6 w-auto max-w-[8rem] object-contain sm:h-7 sm:max-w-[9rem]"
                    unoptimized
                  />
                </span>
                <h1 className="mt-5 font-display text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-none tracking-tight text-white">
                  {brand.name}
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                  {brand.summary}
                </p>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/65">
                {getProjectCountLabel(brand.projects.length)}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-paper pb-[clamp(3rem,8vw,6.5rem)]">
          <div className="container-page -mt-6 sm:-mt-8">
            <BrandProjectsGrid brand={brand} />
          </div>
        </section>

        {otherBrands.length > 0 && (
          <section className="border-t border-line/70 bg-paper-2 py-12 sm:py-16">
            <div className="container-page">
              <p className="eyebrow">Outras marcas</p>
              <h2 className="display mt-3 text-[clamp(1.4rem,4vw,2rem)]">Continue explorando</h2>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {otherBrands.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="group relative block overflow-hidden rounded-[var(--radius-card)] bg-navy-950 aspect-[4/3]"
                    >
                      <Image
                        src={item.cover}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-navy-950/45" />
                      <span className="absolute inset-x-0 bottom-0 p-3 font-display text-sm font-bold text-white sm:p-4 sm:text-base">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
