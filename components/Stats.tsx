import { StarIcon, CheckIcon, TrophyIcon, UserIcon } from './icons';

const stats = [
  { Icon: StarIcon, top: '+20 anos', bottom: 'de experiência' },
  { Icon: CheckIcon, top: '+200 projetos', bottom: 'entregues' },
  { Icon: TrophyIcon, top: 'Marcas reconhecidas', bottom: 'em todo o Brasil' },
  { Icon: UserIcon, top: 'Atendimento próximo', bottom: 'e estratégico' },
];

export default function Stats() {
  return (
    <section aria-label="Números e diferenciais" className="border-t border-line/70">
      <div className="container-page grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ Icon, top, bottom }) => (
          <div key={top} className="flex items-center gap-3.5">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-300/60 text-navy-800">
              <Icon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-semibold text-ink">{top}</span>
              <span className="block text-sm text-muted">{bottom}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
