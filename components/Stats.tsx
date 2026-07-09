import { StarIcon, CheckIcon, TrophyIcon, UserIcon } from './icons';

const stats = [
  { Icon: StarIcon, top: '+20 anos', bottom: 'em produção gráfica' },
  { Icon: CheckIcon, top: '+200 projetos', bottom: 'produzidos e entregues' },
  { Icon: TrophyIcon, top: 'Multi-materiais', bottom: 'papel, acrílico, madeira e metais' },
  { Icon: UserIcon, top: 'Gestão completa', bottom: 'do orçamento à entrega' },
];

export default function Stats() {
  return (
    <section aria-label="Números e diferenciais" className="border-t border-line/70 bg-surface/50">
      <div className="container-page grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line/80 lg:py-12">
        {stats.map(({ Icon, top, bottom }) => (
          <div key={top} className="flex items-center gap-4 lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy-300/60 text-navy-800">
              <Icon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold text-ink">{top}</span>
              <span className="block text-sm text-muted">{bottom}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
