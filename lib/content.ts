import { displayPhone, site } from '@/lib/site';

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type IconMetric = Metric & {
  icon: ImageAsset;
};

export type BrandLogo = ImageAsset & {
  name: string;
  /** Largura do logo no Figma (1920px) — base da escala fluida. */
  designWidth: number;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type FeaturedProject = {
  id: string;
  title: string;
  client: string;
  href: `/portfolio/${string}`;
  image: ImageAsset;
};

export type EventStandVideo = {
  id: string;
  title: string;
  src: string;
  poster: string;
  description: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  companyLogo: ImageAsset;
};

export type ContactChannel = {
  id: 'phone' | 'email' | 'location';
  label: string;
  href?: string;
  icon: ImageAsset;
};

const icon = (fileName: string): ImageAsset => ({
  src: `/figma/${fileName}`,
  width: 90,
  height: 90,
  alt: '',
});

export const arrowRightWhiteIcon = icon('arrow-right-white.png');
export const arrowRightIcon = icon('icon-arrow-right.png');
export const quoteIcon = icon('icon-quote-left.png');

export const brandIdentity = {
  name: 'NILO',
  tagline: 'CONSULTOR GRÁFICO',
  slogan: 'Mais que impressão, soluções para grandes ideias',
  headerLogo: {
    src: '/figma/logo-mark.png',
    width: 186,
    height: 199,
    alt: '',
  },
  footerLogo: {
    src: '/figma/footer-logo.png',
    width: 1254,
    height: 1254,
    alt: '',
  },
} as const satisfies Record<string, string | ImageAsset>;

export const quoteCtaLabel = 'Solicitar Orçamento';

export const heroContent = {
  titleLead: 'Projetos que',
  titleHighlight: 'Ganham Forma.',
  subtitle:
    'Consultoria e administração total em produção gráfica para marcas, agências e empresas que procuram qualidade, rapidez e resultados.',
  background: {
    src: '/figma/hero-background.png',
    width: 2064,
    height: 762,
    alt: '',
  },
  portrait: {
    src: '/figma/nilo-portrait.png',
    width: 1136,
    height: 1385,
    alt: `${site.name}, consultor gráfico`,
  },
  metrics: [
    { value: '+30', label: 'anos de experiência' },
    { value: '+200', label: 'projetos realizados' },
    { value: 'Grandes', label: 'marcas atendidas' },
  ],
} as const satisfies {
  titleLead: string;
  titleHighlight: string;
  subtitle: string;
  background: ImageAsset;
  portrait: ImageAsset;
  metrics: readonly Metric[];
};

export const brandsContent = {
  title: 'MARCAS QUE CONFIAM NO MEU TRABALHO',
  closingLines: ['E MUITAS', 'OUTRAS'],
  logos: [
    { name: 'Coca-Cola', src: '/figma/brand-coca-cola.png', width: 2172, height: 724, designWidth: 260, alt: 'Coca-Cola' },
    { name: 'JBL', src: '/figma/brand-jbl.png', width: 1774, height: 887, designWidth: 164, alt: 'JBL' },
    { name: 'Panvel', src: '/figma/brand-panvel.png', width: 2172, height: 724, designWidth: 238, alt: 'Panvel' },
    { name: 'Aramis', src: '/figma/brand-aramis.png', width: 2172, height: 724, designWidth: 281, alt: 'Aramis' },
    { name: 'Piccadilly', src: '/figma/brand-piccadilly.png', width: 2161, height: 728, designWidth: 301, alt: 'Piccadilly' },
  ],
} as const satisfies { title: string; closingLines: readonly string[]; logos: readonly BrandLogo[] };

export const aboutContent = {
  eyebrow: 'Sobre',
  titleFirstLine: 'Experiência que',
  titleSecondLineLead: 'gera',
  titleHighlight: 'confiança.',
  description:
    'Com mais de 30 anos atuando na área gráfica, conectando marcas aos melhores fornecedores e garantindo resultados com qualidade, prazo e o melhor custo-benefício.',
  image: {
    src: '/figma/about-photo.png',
    width: 2390,
    height: 1792,
    alt: `${site.name} ao lado de uma impressora offset em uma gráfica parceira`,
  },
  highlights: [
    { value: '+30 anos', label: 'de experiência', icon: icon('icon-briefcase.png') },
    { value: '+200 projetos', label: 'realizados', icon: icon('icon-task-completed.png') },
    { value: 'Atendimento em', label: 'todo Brasil', icon: icon('icon-businessman.png') },
  ],
} as const satisfies {
  eyebrow: string;
  titleFirstLine: string;
  titleSecondLineLead: string;
  titleHighlight: string;
  description: string;
  image: ImageAsset;
  highlights: readonly IconMetric[];
};

export const processContent = {
  eyebrow: 'Como funciona',
  title: 'Um processo simples e eficiente.',
  steps: [
    { number: '01', title: 'Briefing', description: 'Entendo sua necessidade e o objetivo do projeto' },
    { number: '02', title: 'Planejamento', description: 'Indico as melhores soluções e meios para realizar o projeto' },
    { number: '03', title: 'Produção', description: 'Acompanhamento de todo o processo de produção' },
    { number: '04', title: 'Entrega', description: 'Você recebe o material com qualidade e no prazo' },
  ],
} as const satisfies { eyebrow: string; title: string; steps: readonly ProcessStep[] };

const placeholderProjectImage: ImageAsset = {
  src: '/figma/project-estande-coca-cola.png',
  width: 228,
  height: 196,
  alt: 'Estande promocional da Coca-Cola',
};

// Conteúdo provisório idêntico ao Figma; será substituído pelos projetos reais.
export const projectsContent = {
  eyebrow: 'Projetos em destaque',
  title: 'Soluções reais para grandes marcas.',
  projects: [
    { id: 'destaque-1', title: 'Estande promocional', client: 'Coca-Cola', href: '/portfolio/coca-cola', image: placeholderProjectImage },
    { id: 'destaque-2', title: 'Estande promocional', client: 'Coca-Cola', href: '/portfolio/coca-cola', image: placeholderProjectImage },
    { id: 'destaque-3', title: 'Estande promocional', client: 'Coca-Cola', href: '/portfolio/coca-cola', image: placeholderProjectImage },
  ],
} as const satisfies { eyebrow: string; title: string; projects: readonly FeaturedProject[] };

export const eventStandsContent = {
  eyebrow: 'Estandes de eventos',
  title: 'Estandes que colocam sua marca em evidência.',
  description:
    'Do projeto à montagem, cuido de cada detalhe do seu estande para feiras e eventos: materiais, acabamentos, fornecedores e prazos, para sua marca se destacar do primeiro ao último dia.',
  quoteMessage: 'Olá! Vim pelo site e gostaria de solicitar um orçamento para um estande de evento.',
  videos: [
    {
      id: 'estande-biri',
      title: 'Estande Biri',
      src: '/videos/estande-evento-1.mp4',
      poster: '/videos/estande-evento-1-poster.jpg',
      description: 'Vídeo do estande da Biri montado em feira de negócios',
    },
    {
      id: 'taquara-summit',
      title: 'Taquara Summit 2026',
      src: '/videos/estande-evento-2.mp4',
      poster: '/videos/estande-evento-2-poster.jpg',
      description: 'Vídeo da montagem oficial do Taquara Summit 2026',
    },
  ],
} as const satisfies {
  eyebrow: string;
  title: string;
  description: string;
  quoteMessage: string;
  videos: readonly EventStandVideo[];
};

export const statsContent = [
  { value: '+30', label: 'anos de experiência', icon: icon('icon-administrator.png') },
  { value: '+200', label: 'projetos realizados', icon: icon('icon-business.png') },
  { value: '+40', label: 'marcas atendidas', icon: icon('icon-permanent-job.png') },
  { value: '100%', label: 'foco no seu atendimento', icon: icon('icon-goal.png') },
] as const satisfies readonly IconMetric[];

const placeholderTestimonialLogo: ImageAsset = {
  src: '/figma/testimonial-coca-cola.png',
  width: 2172,
  height: 724,
  alt: 'Coca-Cola',
};

const placeholderTestimonialQuote =
  '“Profissional extremamente técnico e comprometido. Confiança total em todas as etapas, do briefing à entrega.”';

export const testimonialsContent = [
  { id: 'depoimento-1', quote: placeholderTestimonialQuote, authorName: 'Fulana de tal', authorRole: 'Gerente de Marketing', companyLogo: placeholderTestimonialLogo },
  { id: 'depoimento-2', quote: placeholderTestimonialQuote, authorName: 'Fulana de tal', authorRole: 'Gerente de Marketing', companyLogo: placeholderTestimonialLogo },
  { id: 'depoimento-3', quote: placeholderTestimonialQuote, authorName: 'Fulana de tal', authorRole: 'Gerente de Marketing', companyLogo: placeholderTestimonialLogo },
] as const satisfies readonly Testimonial[];

export const contactChannels: readonly ContactChannel[] = [
  { id: 'phone', label: displayPhone, href: `tel:+${site.whatsapp}`, icon: icon('icon-phone.png') },
  { id: 'email', label: site.email, href: `mailto:${site.email}`, icon: icon('icon-email.png') },
  { id: 'location', label: `${site.city} - ${site.region}`, icon: icon('icon-map.png') },
];

export const copyrightNotice = `© ${new Date().getFullYear()} Nilo Consultor Gráfico. Todos os direitos reservados.`;
