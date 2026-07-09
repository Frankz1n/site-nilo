// Configuração central do site — usada em metadata, JSON-LD, sitemap e componentes.
// Ajuste estes valores conforme os dados reais do cliente.

export const site = {
  name: 'Jorge Nilo Pinheiro de Lima',
  shortName: 'Jorge Nilo',
  role: 'Consultoria Gráfica',
  // Troque para o domínio de produção
  url: 'https://jorgenilo.com.br',
  locale: 'pt_BR',
  description:
    'Consultoria e direção gráfica com mais de 20 anos de experiência. Design estratégico que constrói identidades visuais fortes, consistentes e memoráveis para marcas que querem se destacar e crescer.',
  keywords: [
    'consultoria gráfica',
    'direção gráfica',
    'identidade visual',
    'design estratégico',
    'branding',
    'design de marca',
    'consultoria de branding',
    'Jorge Nilo Pinheiro de Lima',
  ],
  email: 'contato@jorgenilo.com.br',
  phone: '+55 11 90000-0000',
  // Apenas dígitos, com DDI, para link do WhatsApp
  whatsapp: '5511900000000',
  city: 'São Paulo',
  region: 'SP',
  country: 'BR',
  ogImage: '/og.png',
  social: {
    instagram: 'https://instagram.com/jorgenilo',
    linkedin: 'https://linkedin.com/in/jorgenilo',
    behance: 'https://behance.net/jorgenilo',
  },
} as const;

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const;

export const whatsappUrl = (msg = 'Olá! Vim pelo site e gostaria de falar sobre um projeto.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
