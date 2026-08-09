export type PortfolioItem = {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
};

export type ProjectCategory =
  | 'Todos'
  | 'Acrílico & Iluminação'
  | 'PDV & Expositores'
  | 'Campanhas & Impressão'
  | 'Editorial';

export type FullProjectItem = PortfolioItem & {
  brandName: string;
  brandSlug: string;
  brandLogo: string;
  category: ProjectCategory;
};

export type BrandGroup = {
  slug: string;
  name: string;
  logo: string;
  cover: string;
  summary: string;
  featured?: boolean;
  projects: PortfolioItem[];
};


export const brandGroups: BrandGroup[] = [
  {
    slug: 'jbl',
    name: 'JBL',
    logo: '/brands/jbl.svg',
    cover: '/portfolio/jbl-sound-neon.jpg',
    featured: true,
    summary: 'Displays, letreiros e materiais de PDV para lançamentos e campanhas de áudio.',
    projects: [
      {
        id: 'jbl-sound-neon',
        title: 'Sound by JBL — letreiro luminoso',
        tag: 'Acrílico · Iluminação',
        description:
          'Letreiro luminoso com tipografia e identidade JBL em laranja neon, produzido para ambientação e presença de marca em pontos de venda e eventos.',
        image: '/portfolio/jbl-sound-neon.jpg',
      },
      {
        id: 'jbl-dare-to-listen',
        title: 'Displays Dare to Listen',
        tag: 'Acrílico · PDV',
        description:
          'Displays em acrílico com silhueta de perfil para exposição de fones, reforçando o slogan Dare to Listen em versões branca e laranja.',
        image: '/portfolio/jbl-dare-to-listen.jpg',
      },
      {
        id: 'jbl-flip7',
        title: 'Cubos de lançamento Flip 7',
        tag: 'Papel · Campanha',
        description:
          'Cubos de ponto de venda para o lançamento do JBL Flip 7, com arte de campanha, QR code e hierarquia visual alinhada à identidade da marca.',
        image: '/portfolio/jbl-flip7-cubo.jpg',
      },
      {
        id: 'jbl-flip-charge',
        title: 'Displays Flip 7 e Charge 6',
        tag: 'Papel · Lançamento',
        description:
          'Conjunto de displays cúbicos para Flip 7 e Charge 6, destacando benefícios de produto e linguagem visual de lançamento JBL.',
        image: '/portfolio/jbl-flip-charge.jpg',
      },
      {
        id: 'jbl-80-anos',
        title: 'Catálogo 80 Years Powering Voices',
        tag: 'Editorial · Impressão',
        description:
          'Material gráfico comemorativo dos 80 anos da JBL, com colagem fotográfica e tipografia de impacto para distribuição e apresentações.',
        image: '/portfolio/jbl-80-anos.jpg',
      },
      {
        id: 'jbl-suporte-fone',
        title: 'Suporte de fone em acrílico',
        tag: 'Acrílico · PDV',
        description:
          'Suporte curvado em acrílico transparente com marca JBL, desenvolvido para exposição de headphones em ambiente de varejo.',
        image: '/portfolio/jbl-suporte-fone.jpg',
      },
      {
        id: 'jbl-harman-placa',
        title: 'Placa JBL by Harman',
        tag: 'Acrílico · Iluminação',
        description:
          'Placa luminosa institucional JBL by Harman, com logo recortado e iluminação interna para reforço de marca em balcões e showrooms.',
        image: '/portfolio/jbl-harman-placa.jpg',
      },
    ],
  },
  {
    slug: 'panvel',
    name: 'Panvel',
    logo: '/brands/panvel.svg',
    cover: '/portfolio/panvel-entrada.jpg',
    featured: true,
    summary: 'Comunicação visual de loja e campanhas sazonais para rede de farmácias.',
    projects: [
      {
        id: 'panvel-maes',
        title: 'Campanha Dia das Mães — entrada de loja',
        tag: 'PDV · Rede varejo',
        description:
          'Envelopamento de portais e comunicação de entrada para a campanha Dia das Mães Panvel, com presença de marca e fluxo de loja no varejo.',
        image: '/portfolio/panvel-entrada.jpg',
      },
    ],
  },
  {
    slug: 'coca-cola',
    name: 'Coca-Cola',
    logo: '/brands/coca-cola.svg',
    cover: '/portfolio/cocacola-luminoso.jpg',
    featured: true,
    summary: 'Peças luminosas e expositores para marcas Coca-Cola e Coca-Cola Shoes.',
    projects: [
      {
        id: 'coca-luminoso',
        title: 'Placa luminosa em acrílico',
        tag: 'Acrílico · Marca',
        description:
          'Placa em acrílico iluminada com logo Coca-Cola e silhueta da garrafa, para ambientação e reforço de marca em pontos de contato.',
        image: '/portfolio/cocacola-luminoso.jpg',
      },
      {
        id: 'coca-shoes',
        title: 'Expositor Coca-Cola Shoes',
        tag: 'PDV · Varejo',
        description:
          'Expositor vertical vermelho para chinelos Coca-Cola Shoes, organizado em grades para exposição clara do produto no PDV.',
        image: '/portfolio/cocacola-shoes-display.jpg',
      },
      {
        id: 'coca-cubos',
        title: 'Cubos promocionais de PDV',
        tag: 'Papel · Campanha',
        description:
          'Cubos gráficos de campanha produzidos para o ecossistema Coca-Cola Shoes e ações de ponto de venda.',
        image: '/portfolio/jbl-bibi-cocacola-cubos.jpg',
      },
    ],
  },
  {
    slug: 'aramis',
    name: 'Aramis',
    logo: '/brands/aramis.svg',
    cover: '/portfolio/aramis-luminoso.jpg',
    summary: 'Sinalização e displays de marca para moda masculina.',
    projects: [
      {
        id: 'aramis-luminoso',
        title: 'Caixa luminosa institucional',
        tag: 'Acrílico · Marca',
        description:
          'Caixa luminosa com tipografia Aramis e detalhe vermelho no A, produzida para ambientação institucional e reforço de marca.',
        image: '/portfolio/aramis-luminoso.jpg',
      },
      {
        id: 'aramis-display',
        title: 'Display de ganchos para PDV',
        tag: 'PDV · Varejo',
        description:
          'Display de chão com ganchos laterais e marca Aramis no topo, pensado para exposição de acessórios e peças no varejo.',
        image: '/portfolio/aramis-display.jpg',
      },
    ],
  },
  {
    slug: 'harman',
    name: 'Harman',
    logo: '/brands/harman.svg',
    cover: '/portfolio/harman-acrilico.jpg',
    summary: 'Peças institucionais em acrílico para a marca Harman.',
    projects: [
      {
        id: 'harman-acrilico',
        title: 'Placa institucional em acrílico',
        tag: 'Acrílico · Institucional',
        description:
          'Placa em acrílico transparente com logo Harman e base preta, para uso institucional e de apresentação.',
        image: '/portfolio/harman-acrilico.jpg',
      },
    ],
  },
  {
    slug: 'saccaro',
    name: 'Saccaro',
    logo: '/brands/saccaro.svg',
    cover: '/portfolio/saccaro-luminoso.jpg',
    summary: 'Letreiros e presença de marca para mobiliário de alto padrão.',
    projects: [
      {
        id: 'saccaro-luminoso',
        title: 'Letreiro luminoso de marca',
        tag: 'Acrílico · Iluminação',
        description:
          'Letreiro luminoso com tipografia saccaro em caixa baixa, produzido para showroom e ambientação da marca.',
        image: '/portfolio/saccaro-luminoso.jpg',
      },
      {
        id: 'saccaro-luminoso-2',
        title: 'Letreiro luminoso — produção',
        tag: 'Acrílico · Iluminação',
        description:
          'Registro da peça luminosa Saccaro em ambiente corporativo, após produção e preparação para instalação.',
        image: '/portfolio/saccaro-luminoso-2.jpg',
      },
    ],
  },
  {
    slug: 'termolar',
    name: 'Termolar',
    logo: '/brands/termolar.svg',
    cover: '/portfolio/termolar-display.jpg',
    summary: 'Displays de produto para PDV da linha térmica Termolar.',
    projects: [
      {
        id: 'termolar-display',
        title: 'Display de produto para PDV',
        tag: 'Papelão · Exposição',
        description:
          'Totem de exposição com prateleiras amarelas e identidade Termolar, desenvolvido para apresentar produtos no ponto de venda.',
        image: '/portfolio/termolar-display.jpg',
      },
    ],
  },
  {
    slug: 'bebece',
    name: 'bebecê',
    logo: '/brands/bebece.svg',
    cover: '/portfolio/girando-sol-bebece.jpg',
    summary: 'Totens e campanhas de grande formato para calçados bebecê.',
    projects: [
      {
        id: 'bebece-totem',
        title: 'Totem de campanha para varejo',
        tag: 'Papel · Grande formato',
        description:
          'Totem curvado de campanha bebecê para ponto de venda, com fotografia de produto e presença forte da marca.',
        image: '/portfolio/girando-sol-bebece.jpg',
      },
    ],
  },
  {
    slug: 'girando-sol',
    name: 'Girando Sol',
    logo: '/brands/girando-sol.svg',
    cover: '/portfolio/girando-sol-bebece.jpg',
    summary: 'Materiais promocionais e totens para ações de premiação.',
    projects: [
      {
        id: 'girando-sol-totem',
        title: 'Totem promoção 30 anos',
        tag: 'Papel · Campanha',
        description:
          'Totem promocional da campanha de 30 anos Girando Sol, com mecânica de prêmios, QR code e linguagem visual vibrante.',
        image: '/portfolio/girando-sol-bebece.jpg',
      },
    ],
  },
  {
    slug: 'piccadilly',
    name: 'Piccadilly',
    logo: '/brands/piccadilly.svg',
    cover: '/portfolio/piccadilly-florybal-deca.jpg',
    summary: 'Brindes e materiais impressos de marca.',
    projects: [
      {
        id: 'piccadilly-planner',
        title: 'Planner e materiais de marca',
        tag: 'Papel · Brindes',
        description:
          'Produção de planners e materiais gráficos de marca, com acabamento de capa e identidade Piccadilly.',
        image: '/portfolio/piccadilly-florybal-deca.jpg',
      },
    ],
  },
  {
    slug: 'bibi',
    name: 'bibi',
    logo: '/brands/bibi.svg',
    cover: '/portfolio/jbl-bibi-cocacola-cubos.jpg',
    summary: 'Cubos e peças de PDV para campanhas infantis.',
    projects: [
      {
        id: 'bibi-cubos',
        title: 'Cubos Volta às Aulas',
        tag: 'Papel · Campanha',
        description:
          'Cubos gráficos da campanha Volta às Aulas bibi, com ilustração e tipografia lúdica para o ponto de venda.',
        image: '/portfolio/jbl-bibi-cocacola-cubos.jpg',
      },
    ],
  },
  {
    slug: 'assintecal',
    name: 'Assintecal',
    logo: '/brands/assintecal.svg',
    cover: '/portfolio/assintecal-respira-acre.jpg',
    summary: 'Projetos editoriais e materiais institucionais impressos.',
    projects: [
      {
        id: 'assintecal-acre',
        title: 'Livro Respira Acre',
        tag: 'Editorial · Impressão',
        description:
          'Livro Respira Acre — Floresta Amazônica, produzido em parceria institucional, com acabamento editorial e fotografia de capa.',
        image: '/portfolio/assintecal-respira-acre.jpg',
      },
    ],
  },
];

export function getCategoryForProject(tag: string): ProjectCategory {
  if (tag.includes('Editorial')) return 'Editorial';
  if (tag.includes('PDV') || tag.includes('Varejo') || tag.includes('Exposição')) return 'PDV & Expositores';
  if (tag.includes('Acrílico') || tag.includes('Iluminação') || tag.includes('Marca') || tag.includes('Institucional')) return 'Acrílico & Iluminação';
  if (tag.includes('Papel') || tag.includes('Campanha') || tag.includes('Lançamento') || tag.includes('Brindes') || tag.includes('Grande formato')) return 'Campanhas & Impressão';
  return 'PDV & Expositores';
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Todos',
  'Acrílico & Iluminação',
  'PDV & Expositores',
  'Campanhas & Impressão',
  'Editorial',
];

export function getAllProjects(): FullProjectItem[] {
  const all: FullProjectItem[] = [];
  for (const group of brandGroups) {
    for (const project of group.projects) {
      all.push({
        ...project,
        brandName: group.name,
        brandSlug: group.slug,
        brandLogo: group.logo,
        category: getCategoryForProject(project.tag),
      });
    }
  }
  return all;
}

export function getBrandBySlug(slug: string): BrandGroup | undefined {
  return brandGroups.find((group) => group.slug === slug);
}

export function getAllBrandSlugs(): string[] {
  return brandGroups.map((group) => group.slug);
}

export function getProjectCountLabel(count: number): string {
  return count === 1 ? '1 projeto' : `${count} projetos`;
}

