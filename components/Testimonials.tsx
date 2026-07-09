import { QuoteIcon } from './icons';

const testimonials = [
  {
    quote:
      'Precisávamos de 100 totens para nossas lojas e o Jorge cuidou de tudo: orçamento detalhado, escolha do papel e acompanhamento da produção. Entregou no prazo e no padrão.',
    name: 'Gerente de Marketing',
    company: 'Rede de varejo',
  },
  {
    quote:
      'A consultoria de materiais fez toda a diferença. Ele indicou o acrílico certo para nossos displays de PDV e gerenciou a produção do início ao fim.',
    name: 'Coordenadora de Trade',
    company: 'Indústria de bens de consumo',
  },
  {
    quote:
      'Trabalhamos com as artes prontas e o Nilo cuidou do resto — orçamento, fornecedores e entrega. Processo transparente e sem surpresas.',
    name: 'Diretor de Operações',
    company: 'Rede de franquias',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-block">
      <div className="container-page">
        <div className="section-head">
          <div>
            <p className="eyebrow">Depoimentos</p>
            <h2 className="display mt-3 max-w-[14ch] text-[clamp(1.75rem,6vw,3.2rem)] sm:mt-4">
              O que dizem sobre o trabalho
            </h2>
          </div>
          <p className="text-base leading-relaxed text-body">
            Clientes que confiaram a produção gráfica do início ao fim — com materiais certos,
            prazos cumpridos e processo transparente.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name + t.company}
              className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-7 lg:p-8"
            >
              <QuoteIcon className="h-8 w-8 text-navy-300" />
              <p className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-ink">{t.quote}</p>
              <div className="mt-8 border-t border-line pt-5">
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
