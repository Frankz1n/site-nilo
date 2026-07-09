import { QuoteIcon } from './icons';

// Substitua por depoimentos reais e autorizados.
const testimonials = [
  {
    quote:
      'A consultoria trouxe consistência para nossa marca em todos os pontos de contato. O impacto na percepção do público foi imediato.',
    name: 'Diretora de Marketing',
    company: 'Indústria de bens de consumo',
  },
  {
    quote:
      'Profissionalismo do briefing à entrega. Recebemos um sistema visual claro, escalável e fácil de aplicar pelo time interno.',
    name: 'Gerente de Marca',
    company: 'Rede de varejo',
  },
  {
    quote:
      'Muito além do design: uma visão estratégica que elevou o posicionamento da nossa empresa no mercado.',
    name: 'CEO',
    company: 'Empresa de serviços',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="max-w-lg">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,2.7rem)]">
            O que dizem sobre o trabalho
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name + t.company}
              className="flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6"
            >
              <QuoteIcon className="h-8 w-8 text-navy-300" />
              <p className="mt-4 flex-1 leading-relaxed text-ink">{t.quote}</p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold text-navy-800">{t.name}</p>
                <p className="text-sm text-muted">{t.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
