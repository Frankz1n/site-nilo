import { nav, site } from '@/lib/site';
import { LogoMark } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <LogoMark className="h-9 w-9" />
            <span className="leading-none">
              <span className="block font-display text-sm font-extrabold uppercase tracking-[0.06em] text-navy-800">
                {site.name}
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                {site.role}
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-body">
            Consultoria e direção gráfica para marcas que querem se destacar com uma identidade
            visual forte e consistente.
          </p>
        </div>

        <nav aria-label="Rodapé" className="text-sm">
          <p className="font-semibold text-ink">Navegação</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-body transition-colors hover:text-navy-800">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="font-semibold text-ink">Contato</p>
          <ul className="mt-4 space-y-2.5 text-body">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-navy-800">
                {site.email}
              </a>
            </li>
            <li>{site.phone}</li>
            <li>
              {site.city} — {site.region}
            </li>
          </ul>
          <ul className="mt-5 flex gap-4 text-body">
            <li>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-navy-800">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-navy-800">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.social.behance} target="_blank" rel="noopener noreferrer" className="hover:text-navy-800">
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>Consultoria Gráfica · {site.city}/{site.region}</p>
        </div>
      </div>
    </footer>
  );
}
