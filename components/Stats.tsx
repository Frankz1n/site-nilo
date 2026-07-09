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
      <div className="container-page grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 sm:gap-8 sm:py-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-line/80 lg:py-12">
        {stats.map(({ Icon, top, bottom }) => (
          <div
            key={top}
            className="flex items-center gap-4 border-b border-line/60 pb-6 last:border-b-0 last:pb-0 sm:border-b-0 sm:pb-0 lg:px-6 lg:first:pl-0 lg:last:pr-0 xl:px-8"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-300/60 text-navy-800 sm:h-12 sm:w-12">
              <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-sm font-semibold text-ink sm:text-base">{top}</span>
              <span className="block text-xs text-muted sm:text-sm">{bottom}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
