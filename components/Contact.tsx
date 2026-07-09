import { site, whatsappUrl } from '@/lib/site';
import { ArrowRight, WhatsappIcon, MailIcon } from './icons';

export default function Contact() {
  return (
    <section id="contato" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-navy-800 to-navy-950 px-6 py-14 text-center sm:px-12 lg:py-20">
          {/* motivo de camadas ao fundo */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rotate-45 rounded-3xl bg-white/5"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rotate-45 rounded-3xl bg-white/5"
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-300">
              Vamos conversar
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
              Pronto para elevar a imagem da sua marca?
            </h2>
            <p className="mt-5 text-white/70">
              Conte sobre o seu desafio. Vou te mostrar como o design certo pode gerar valor real
              para o seu negócio.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-navy-800 transition-transform hover:-translate-y-0.5"
              >
                <WhatsappIcon className="h-5 w-5" />
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
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
