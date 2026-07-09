import { site } from '@/lib/site';
import { LogoMark } from './icons';

const highlights = [
  'Direção gráfica para marcas líderes de mercado',
  'Sistemas de identidade escaláveis e consistentes',
  'Método próprio de padronização visual',
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-line/70 bg-paper-2 py-16 lg:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Retrato / bloco visual — troque por foto real com next/image */}
        <div className="relative order-last lg:order-first">
          <div className="relative mx-auto flex aspect-[4/5] max-w-sm items-center justify-center overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-navy-800 to-navy-950 shadow-[var(--shadow-soft)]">
            <LogoMark className="h-24 w-24 opacity-90" />
            <span className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
              {site.role}
            </span>
          </div>
          <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-line bg-surface px-5 py-4 shadow-[var(--shadow-soft)] sm:block">
            <span className="block font-display text-2xl font-extrabold text-navy-800">+20</span>
            <span className="text-xs text-muted">anos de estrada</span>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="eyebrow">Sobre</p>
          <h2 className="display mt-4 text-[clamp(1.9rem,3.6vw,2.7rem)]">
            Duas décadas traduzindo negócios em imagem
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            Sou Jorge Nilo Pinheiro de Lima, consultor e diretor gráfico. Ao longo de mais de 20
            anos, ajudei marcas de diferentes portes a construir uma presença visual coerente — do
            conceito à aplicação — sempre com foco em estratégia, clareza e resultado.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            Meu trabalho vai além do estético: cada decisão de design nasce de um entendimento
            profundo do negócio, do público e dos objetivos da marca.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-navy-800" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
