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
    'Consultoria gráfica especializada em materiais e produção. Orçamento técnico, especificação de papel, acrílico, madeira e metais, e gestão completa do processo produtivo — da demanda do cliente à entrega final.',
  keywords: [
    'consultoria gráfica',
    'produção gráfica',
    'orçamento gráfico',
    'materiais gráficos',
    'totens',
    'displays',
    'papel',
    'acrílico',
    'madeira',
    'metais',
    'gestão de produção',
    'Jorge Nilo Pinheiro de Lima',
  ],
  email: 'nilo@coimpressa.com.br',
  phone: '+55 51 9 9981-9048',
  // Apenas dígitos, com DDI, para link do WhatsApp
  whatsapp: '5551999819048',
  city: 'Porto Alegre',
  region: 'RS',
  country: 'BR',
  ogImage: '/og.png',
  logo: '/logo.png',
  social: {
    instagram: 'https://instagram.com/jorgenilo',
    linkedin: 'https://linkedin.com/in/jorgenilo',
    behance: 'https://behance.net/jorgenilo',
  },
} as const;

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const;

export const whatsappUrl = (msg = 'Olá! Vim pelo site e gostaria de solicitar um orçamento.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
