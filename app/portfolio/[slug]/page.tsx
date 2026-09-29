import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import BrandProjectsGrid from '@/components/portfolio/BrandProjectsGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowLeftIcon } from '@/components/ui/icons';
import {
  brandGroups,
  getAllBrandSlugs,
  getBrandBySlug,
  getProjectCountLabel,
} from '@/lib/portfolio';
import { site } from '@/lib/site';

const MAX_RELATED_BRANDS = 4;

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

  const relatedBrands = brandGroups
    .filter((item) => item.slug !== brand.slug)
    .slice(0, MAX_RELATED_BRANDS);

  return (
    <>
      <SiteHeader initialSectionId="projetos" />
      <main>
        <section aria-labelledby="brand-title" className="relative isolate overflow-hidden bg-ink-deep text-white">
          <Image
            src={brand.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-35"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-ink-deep/60 via-ink-deep/80 to-ink-deep" />

          <div className="container-page py-section">
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 text-body font-semibold text-white/75 transition hover:text-white"
            >
              <ArrowLeftIcon className="size-5" />
              Voltar aos projetos
            </Link>

            <div className="mt-8 flex flex-col gap-6 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex h-11 items-center rounded-xl bg-white px-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={160}
                    height={48}
                    className="h-6 w-auto max-w-32 object-contain"
                    unoptimized
                  />
                </span>
                <h1 id="brand-title" className="mt-5 text-display font-semibold">
                  {brand.name}
                </h1>
                <p className="mt-3 text-lead text-white/75">{brand.summary}</p>
              </div>
              <p className="text-caption font-bold tracking-[0.14em] uppercase text-steel">
                {getProjectCountLabel(brand.projects.length)}
              </p>
            </div>
          </div>
        </section>

        <section aria-label={`Projetos ${brand.name}`} className="bg-surface-muted py-section">
          <div className="container-page">
            <BrandProjectsGrid brand={brand} />
          </div>
        </section>

        {relatedBrands.length > 0 && (
          <section aria-labelledby="related-brands-title" className="bg-surface-soft py-section">
            <div className="container-page">
              <SectionHeading eyebrow="Outras marcas" title="Continue explorando" titleId="related-brands-title" />
              <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
                {relatedBrands.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="group relative block aspect-[4/3] overflow-hidden rounded-[20px] bg-ink-deep"
                    >
                      <Image
                        src={item.cover}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-linear-to-t from-ink-deep/85 via-ink-deep/20 to-transparent" />
                      <span className="absolute inset-x-0 bottom-0 p-4 text-heading font-semibold text-white">
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
      <SiteFooter />
    </>
  );
}
