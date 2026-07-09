import { CompassIcon, GridIcon, GemIcon, RocketIcon } from './icons';

const steps = [
  {
    Icon: CompassIcon,
    title: 'Briefing do cliente',
    desc: 'Você apresenta a necessidade: peça, quantidade, tamanhos, cores e referências. As artes são fornecidas por você.',
  },
  {
    Icon: GridIcon,
    title: 'Especificação e orçamento',
    desc: 'Defino os materiais, acabamentos e processos ideais e preparo o orçamento detalhado do projeto.',
  },
  {
    Icon: GemIcon,
    title: 'Aprovação e produção',
    desc: 'Com o OK do cliente, aciono a produção e acompanho cada etapa junto aos fornecedores.',
  },
  {
    Icon: RocketIcon,
    title: 'Entrega e conferência',
    desc: 'Material produzido, conferido e entregue conforme especificado — no prazo e na qualidade acordados.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="section-block border-y border-line/70 bg-paper-2">
      <div className="container-page">
        <div className="section-head">
          <div>
            <p className="eyebrow">Processo</p>
            <h2 className="display mt-3 max-w-[14ch] text-[clamp(1.75rem,6vw,3.2rem)] sm:mt-4">
              Como funciona na prática
            </h2>
          </div>
          <p className="text-base leading-relaxed text-body">
            Um fluxo direto: você traz a demanda e as artes, eu cuido da especificação, do orçamento
            e de toda a produção até a entrega final.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {steps.map(({ Icon, title, desc }, i) => (
            <li
              key={title}
              className="relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-5 sm:p-6 lg:p-7"
            >
              <span className="font-display text-5xl font-extrabold text-navy-800/12">0{i + 1}</span>
              <span className="mt-3 inline-flex text-navy-800">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
