import { CompassIcon, GridIcon, GemIcon, RocketIcon } from './icons';

// Numeração é apropriada aqui: o processo é uma sequência real.
const steps = [
  {
    Icon: CompassIcon,
    title: 'Imersão e diagnóstico',
    desc: 'Entendo o negócio, o público e os objetivos antes de qualquer traço.',
  },
  {
    Icon: GridIcon,
    title: 'Estratégia visual',
    desc: 'Defino o território de marca, referências e a direção criativa.',
  },
  {
    Icon: GemIcon,
    title: 'Criação e refinamento',
    desc: 'Desenvolvo a identidade e as aplicações, com rodadas de ajuste.',
  },
  {
    Icon: RocketIcon,
    title: 'Entrega e padronização',
    desc: 'Manual de marca e suporte para uma aplicação consistente.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="border-y border-line/70 bg-paper-2 py-16 lg:py-24">
      <div className="container-page">
        <div className="max-w-lg">
          <p className="eyebrow">Processo</p>
          <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,2.7rem)]">
            Um método claro, do briefing à entrega
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ Icon, title, desc }, i) => (
            <li
              key={title}
              className="relative rounded-[var(--radius-card)] border border-line bg-surface p-6"
            >
              <span className="font-display text-4xl font-extrabold text-navy-800/15">
                0{i + 1}
              </span>
              <span className="mt-2 inline-flex text-navy-800">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
