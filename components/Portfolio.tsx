import { ArrowRight } from './icons';

// Substitua por projetos reais e imagens em /public/portfolio (use next/image).
const projects = [
  { title: 'Rebranding corporativo', tag: 'Identidade Visual', tone: 'from-navy-800 to-navy-950' },
  { title: 'Sistema visual de varejo', tag: 'Direção Gráfica', tone: 'from-navy-700 to-navy-900' },
  { title: 'Linha de embalagens', tag: 'Design de Aplicações', tone: 'from-navy-500 to-navy-800' },
  { title: 'Posicionamento de marca', tag: 'Consultoria Estratégica', tone: 'from-navy-900 to-navy-950' },
  { title: 'Manual de marca', tag: 'Identidade Visual', tone: 'from-navy-700 to-navy-950' },
  { title: 'Campanha institucional', tag: 'Direção Gráfica', tone: 'from-navy-500 to-navy-900' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-lg">
            <p className="eyebrow">Portfólio</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,2.7rem)]">
              Projetos que construíram marcas de verdade
            </h2>
          </div>
          <p className="text-sm text-muted">Uma seleção do trabalho desenvolvido.</p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.title} className="group cursor-pointer">
              <div
                className={`relative flex aspect-[4/3] items-end overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br ${p.tone} p-5`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rotate-45 rounded-lg bg-white/10 transition-transform duration-500 group-hover:scale-125"
                />
                <span className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Ver projeto <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-navy-800">
                  {p.tag}
                </span>
                <h3 className="mt-1 font-display text-base font-bold text-ink">{p.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
