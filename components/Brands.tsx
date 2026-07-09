const brands = ['Panvel', 'Boticário', 'BRF', 'Natura', 'Vivo', 'Petrobras'];

export default function Brands() {
  return (
    <section aria-label="Marcas atendidas" className="border-y border-line/70 bg-paper-2">
      <div className="container-page grid items-center gap-8 py-10 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-12">
        <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted">
          Algumas marcas e redes que já atendi na produção
        </p>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {brands.map((brand) => (
            <li
              key={brand}
              className="font-display text-base font-bold tracking-tight text-navy-800/75 transition-colors duration-300 hover:text-navy-800 lg:text-lg"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
