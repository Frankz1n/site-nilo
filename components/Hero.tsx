import { site, whatsappUrl } from '@/lib/site';
import { ArrowRight } from './icons';
import HeroGraphic from './HeroGraphic';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[84px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_90%_20%,rgba(120,150,232,0.22),transparent_55%)]"
      />
      <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:py-24 xl:gap-24 xl:py-28">
        <div className="rise min-w-0">
          <div className="flex items-center gap-4">
            <p className="eyebrow">Consultoria Gráfica em Materiais e Produção</p>
            <span aria-hidden="true" className="hidden h-px flex-1 max-w-32 bg-navy-300 sm:block" />
          </div>

          <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.98]">
            Da sua demanda ao material pronto — com orçamento e produção sob controle.
          </h1>

          <p className="mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-body lg:text-[1.12rem]">
            Você traz a ideia e as artes. Eu cuido do orçamento, da especificação de materiais e de
            todo o processo de produção — em papel, acrílico, madeira, metais e muito mais.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5 lg:gap-7">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-navy-800 px-7 py-4 text-sm font-semibold text-white shadow-[var(--shadow-btn)] transition-transform hover:-translate-y-0.5"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 border-b-2 border-navy-800 pb-1 text-sm font-semibold text-navy-800"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="rise relative min-w-0 lg:justify-self-end" style={{ animationDelay: '0.1s' }}>
          <div className="relative w-full max-w-none lg:max-w-[640px] lg:ml-auto">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-navy-300/20 blur-3xl"
            />
            <HeroGraphic className="relative h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
