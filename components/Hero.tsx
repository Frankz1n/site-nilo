import { site, whatsappUrl } from '@/lib/site';
import { ArrowRight } from './icons';
import HeroGraphic from './HeroGraphic';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[76px]">
      {/* fundo com leve brilho azul à direita */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_75%,rgba(120,150,232,0.20),transparent_60%)]"
      />
      <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Coluna de texto */}
        <div className="rise max-w-xl">
          <div className="flex items-center gap-4">
            <p className="eyebrow">Consultoria e Direção Gráfica</p>
            <span aria-hidden="true" className="h-px w-12 bg-navy-300" />
          </div>

          <h1 className="display mt-6 text-[clamp(2.4rem,6vw,4rem)]">
            Design estratégico que comunica, conecta e gera valor.
          </h1>

          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-body">
            Mais de 20 anos de experiência construindo identidades visuais fortes, consistentes e
            memoráveis para marcas que querem se destacar e crescer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-navy-800 px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-btn)] transition-transform hover:-translate-y-0.5"
            >
              Fale com um especialista
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 border-b-2 border-navy-800 pb-1 text-sm font-semibold text-navy-800"
            >
              Ver portfólio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Coluna do gráfico */}
        <div className="rise relative mx-auto w-full max-w-[520px]" style={{ animationDelay: '0.1s' }}>
          <HeroGraphic className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
