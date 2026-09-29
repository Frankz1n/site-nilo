import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { site } from '@/lib/site';
import './globals.css';

// Fontes self-hospedadas (woff2) — zero requisição externa, zero layout shift.
const inter = localFont({
  variable: '--font-inter-family',
  display: 'swap',
  src: [
    { path: './fonts/inter-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/inter-700.woff2', weight: '700', style: 'normal' },
  ],
});

const montserrat = localFont({
  variable: '--font-montserrat',
  display: 'swap',
  src: [
    { path: './fonts/montserrat-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/montserrat-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/montserrat-700.woff2', weight: '700', style: 'normal' },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role} e Produção Gráfica`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: `${site.name} — ${site.role}`,
  category: 'Design',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.role} e Produção Gráfica`,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.role}`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#012f67',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
};

// Dados estruturados (Schema.org) — melhora a compreensão pelo Google
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#business`,
  name: site.name,
  alternateName: `${site.shortName} — ${site.role}`,
  description: site.description,
  url: site.url,
  image: `${site.url}${site.logo}`,
  logo: `${site.url}${site.logo}`,
  email: site.email,
  telephone: site.phone,
  priceRange: '$$$',
  areaServed: { '@type': 'Country', name: 'Brasil' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  founder: {
    '@type': 'Person',
    name: site.name,
    jobTitle: 'Consultor Gráfico',
  },
  knowsAbout: [
    'Produção Gráfica',
    'Orçamento Gráfico',
    'Materiais Gráficos',
    'Papel',
    'Acrílico',
    'Madeira',
    'Gestão de Produção',
  ],
  sameAs: [site.social.instagram, site.social.linkedin, site.social.behance],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Consultoria Gráfica',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Orçamento Técnico' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoria de Materiais' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestão de Produção' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acompanhamento de Projeto' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
