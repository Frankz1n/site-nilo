import { site, whatsappUrl } from '@/lib/site';
import { ArrowRight, WhatsappIcon, MailIcon } from './icons';

export default function Contact() {
  return (
    <section id="contato" className="section-block">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-navy-800 to-navy-950 px-8 py-12 sm:px-12 lg:px-16 lg:py-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rotate-45 rounded-3xl bg-white/5"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rotate-45 rounded-3xl bg-white/5"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
                Vamos conversar
              </p>
              <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.02] tracking-tight text-white">
                Tem um projeto em mente? Vamos orçar.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 lg:text-[1.05rem]">
                Conte o que você precisa — peça, quantidade, tamanhos e materiais. Eu preparo o
                orçamento e cuido de toda a produção para você.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-4 sm:flex-row lg:flex-col xl:items-stretch">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-7 py-4 text-sm font-semibold text-navy-800 transition-transform hover:-translate-y-0.5"
              >
                <WhatsappIcon className="h-5 w-5" />
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MailIcon className="h-5 w-5" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
