import { GemIcon, LayersIcon, PencilIcon, MonitorIcon } from './icons';

const services = [
  {
    Icon: GemIcon,
    title: 'Identidade Visual',
    desc: 'Criação de marcas fortes, memoráveis e alinhadas à essência do negócio.',
  },
  {
    Icon: LayersIcon,
    title: 'Direção Gráfica',
    desc: 'Coordenação de projetos visuais com consistência, padronização e impacto.',
  },
  {
    Icon: PencilIcon,
    title: 'Design de Aplicações',
    desc: 'Materiais gráficos que comunicam com clareza e profissionalismo.',
  },
  {
    Icon: MonitorIcon,
    title: 'Consultoria Estratégica',
    desc: 'Análise, posicionamento e recomendações para elevar sua marca.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="max-w-sm">
            <p className="eyebrow">O que eu faço</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,2.7rem)]">
              Soluções visuais que transformam marcas
            </h2>
            <p className="mt-5 text-body">
              Cada projeto une estratégia e estética para gerar reconhecimento, consistência e
              resultado real para o seu negócio.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {services.map(({ Icon, title, desc }) => (
              <li
                key={title}
                className="group rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy-300 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-800/8 text-navy-800 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
