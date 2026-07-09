import { GemIcon, LayersIcon, MonitorIcon, PencilIcon } from '@/components/icons';
import type { ComponentType, SVGProps } from 'react';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type HeroDockItem = {
  title: string;
  desc: string;
  Icon: IconComponent;
  href: string;
};

export const heroDockItems: HeroDockItem[] = [
  {
    title: 'Orçamento técnico',
    desc: 'Especificação e custo preciso para cada peça.',
    Icon: GemIcon,
    href: '#servicos',
  },
  {
    title: 'Consultoria de materiais',
    desc: 'O suporte ideal para cada aplicação.',
    Icon: LayersIcon,
    href: '#servicos',
  },
  {
    title: 'Gestão de produção',
    desc: 'Fornecedores, prazos e qualidade sob controle.',
    Icon: PencilIcon,
    href: '#processo',
  },
  {
    title: 'Acompanhamento',
    desc: 'Das artes do cliente à entrega final.',
    Icon: MonitorIcon,
    href: '#portfolio',
  },
];
