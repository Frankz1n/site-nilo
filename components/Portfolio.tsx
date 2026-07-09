import { ArrowRight } from './icons';

const projects = [
  { title: 'Totens de papel para rede de varejo', tag: 'Papel · Grande volume', tone: 'from-navy-800 to-navy-950', featured: true },
  { title: 'Displays em acrílico para PDV', tag: 'Acrílico · Varejo', tone: 'from-navy-700 to-navy-900', featured: false },
  { title: 'Sinalização em madeira', tag: 'Madeira · Institucional', tone: 'from-navy-500 to-navy-800', featured: false },
  { title: 'Peças em metal para fachada', tag: 'Metal · Comunicação visual', tone: 'from-navy-900 to-navy-950', featured: false },
  { title: 'Material de ponto de venda', tag: 'Papel · Campanha', tone: 'from-navy-700 to-navy-950', featured: false },
  { title: 'Kit de peças para franquias', tag: 'Multi-material · Rede', tone: 'from-navy-500 to-navy-900', featured: true },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-block">
      <div className="container-page">
        <div className="section-head">
          <div>
            <p className="eyebrow">Projetos</p>
            <h2 className="display mt-3 max-w-[16ch] text-[clamp(1.75rem,6vw,3.2rem)] sm:mt-4">
              Projetos em diferentes materiais e escalas
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-body sm:text-base">
            Produções gráficas conduzidas do orçamento à entrega — em papel, acrílico, madeira,
            metais e combinações para redes e campanhas.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
          {projects.map((p) => (
            <li
              key={p.title}
              className={`group cursor-pointer ${p.featured ? 'sm:col-span-2 lg:col-span-6' : 'lg:col-span-3'}`}
            >
              <div
                className={`relative flex overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br ${p.tone} p-5 sm:p-6 ${
                  p.featured ? 'min-h-[12.5rem] sm:aspect-[2/1] sm:min-h-0' : 'min-h-[11rem] sm:aspect-[4/3] sm:min-h-0'
                } items-end`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rotate-45 rounded-lg bg-white/10 transition-transform duration-500 group-hover:scale-125 sm:h-32 sm:w-32"
                />
                <div className="relative z-10 w-full min-w-0">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-white/80 sm:text-xs">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 max-w-md font-display text-base font-bold text-white sm:text-lg lg:text-xl">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white sm:mt-4 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                    Ver projeto <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
