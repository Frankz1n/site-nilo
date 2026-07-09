import { site, whatsappUrl } from '@/lib/site';
import { ArrowRight, WhatsappIcon, MailIcon } from './icons';

export default function Contact() {
  return (
    <section id="contato" className="section-block">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 px-5 py-10 sm:rounded-[24px] sm:px-8 sm:py-12 lg:px-16 lg:py-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rotate-45 rounded-3xl bg-white/5"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rotate-45 rounded-3xl bg-white/5"
          />

          <div className="relative grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="min-w-0">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-navy-300 sm:text-xs sm:tracking-[0.16em]">
                Vamos conversar
              </p>
              <h2 className="mt-3 max-w-[14ch] font-display text-[clamp(1.75rem,6.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-tight text-white sm:mt-4">
                Tem um projeto em mente? Vamos orçar.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-base lg:text-[1.05rem]">
                Conte o que você precisa — peça, quantidade, tamanhos e materiais. Eu preparo o
                orçamento e cuido de toda a produção para você.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-white px-6 py-4 text-sm font-semibold text-navy-800 transition-transform hover:-translate-y-0.5 sm:px-7"
              >
                <WhatsappIcon className="h-5 w-5 shrink-0" />
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg border border-white/25 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-7"
              >
                <MailIcon className="h-5 w-5 shrink-0" />
                <span className="break-all text-center sm:break-normal">{site.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
