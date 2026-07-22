import { GemIcon, LayersIcon, PencilIcon, MonitorIcon } from './icons';

const services = [
  {
    Icon: GemIcon,
    title: 'Orçamento técnico',
    desc: 'Análise da demanda com especificação de peça, quantidade, dimensões, cores e acabamentos para um orçamento preciso.',
  },
  {
    Icon: LayersIcon,
    title: 'Consultoria de materiais',
    desc: 'Orientação sobre o melhor suporte para cada aplicação: papel, acrílico, madeira e outros materiais.',
  },
  {
    Icon: PencilIcon,
    title: 'Gestão de produção',
    desc: 'Coordenação completa do processo produtivo — fornecedores, prazos, qualidade e entrega conforme o combinado.',
  },
  {
    Icon: MonitorIcon,
    title: 'Acompanhamento de projeto',
    desc: 'Do recebimento das artes do cliente à conferência do material final, com transparência em cada etapa.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-block">
      <div className="container-page">
        <div className="section-head">
          <div>
            <p className="eyebrow">O que eu faço</p>
            <h2 className="display mt-3 max-w-[16ch] text-[clamp(1.75rem,6vw,3.2rem)] sm:mt-4">
              Do briefing à entrega, cada etapa coberta
            </h2>
          </div>
          <p className="text-base leading-relaxed text-body lg:text-[1.05rem]">
            Atuo na ponte entre a necessidade do cliente e a produção gráfica — com conhecimento
            técnico de materiais e gestão de ponta a ponta.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
          {services.map(({ Icon, title, desc }) => (
            <li
              key={title}
              className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-[var(--shadow-soft)] sm:p-6 lg:p-7"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-800/8 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
