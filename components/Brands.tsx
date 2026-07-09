// NOTA: Estes são placeholders textuais. Os logotipos reais das marcas são
// propriedade de seus respectivos donos — substitua por arquivos SVG/PNG oficiais
// (ex.: /public/brands/coca-cola.svg) e use next/image, garantindo autorização de uso.

const brands = ['Boticário', 'BRF', 'Coca-Cola', 'Natura', 'Vivo', 'Petrobras'];

export default function Brands() {
  return (
    <section aria-label="Marcas atendidas" className="border-y border-line/70 bg-paper-2">
      <div className="container-page flex flex-col items-center gap-8 py-8 lg:flex-row lg:gap-12">
        <p className="shrink-0 text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted lg:max-w-[9rem]">
          Algumas marcas que já construí com orgulho
        </p>
        <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
          {brands.map((brand) => (
            <li
              key={brand}
              className="font-display text-lg font-bold tracking-tight text-navy-800/75 grayscale transition-all duration-300 hover:text-navy-800 hover:grayscale-0"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
