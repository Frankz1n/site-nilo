import Logo from './Logo';

const highlights = [
  'Orçamento técnico para projetos em grande volume',
  'Especificação de materiais: papel, acrílico, madeira e metais',
  'Gestão completa da produção — da aprovação à entrega',
];

export default function About() {
  return (
    <section id="sobre" className="section-block border-t border-line/70 bg-paper-2">
      <div className="container-page grid items-stretch gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:gap-20">
        <div className="relative order-last min-w-0 xl:order-first">
          <div className="flex h-full min-h-[320px] items-center justify-center rounded-[var(--radius-card)] border border-line/80 bg-surface px-10 py-12 shadow-[var(--shadow-soft)] lg:min-h-[420px]">
            <Logo size="xl" className="w-full max-w-[560px]" premium />
          </div>
          <div className="absolute -bottom-5 -right-4 hidden rounded-xl border border-line bg-surface px-6 py-5 shadow-[var(--shadow-soft)] sm:block">
            <span className="block font-display text-3xl font-extrabold text-navy-800">+20</span>
            <span className="text-sm text-muted">anos de estrada</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center">
          <p className="eyebrow">Sobre</p>
          <h2 className="display mt-4 max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)]">
            Consultoria gráfica com foco em materiais e produção
          </h2>
          <p className="mt-7 max-w-3xl text-[1.05rem] leading-relaxed text-body">
            Sou Jorge Nilo Pinheiro de Lima, consultor gráfico com mais de 20 anos de experiência.
            Meu trabalho começa quando o cliente chega com uma demanda concreta — por exemplo, 100
            totens de papel para uma rede de lojas, com tamanhos, cores e quantidades definidas.
          </p>
          <p className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-body">
            A partir daí, elaboro o orçamento, especifico os materiais mais adequados e conduzo
            todo o processo de produção até a entrega. As artes e arquivos gráficos são fornecidos
            pelo cliente; minha expertise está em transformar a necessidade em material produzido
            com qualidade, no prazo e dentro do orçamento.
          </p>

          <ul className="mt-10 grid gap-4">
            {highlights.map((h) => (
              <li
                key={h}
                className="rounded-[var(--radius-card)] border border-line bg-surface/70 px-4 py-4 text-sm leading-relaxed text-ink"
              >
                <span className="mb-2 inline-flex h-2 w-2 rounded-full bg-navy-800" />
                <span className="block">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
