import { nav, site } from '@/lib/site';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="container-page grid grid-cols-1 gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16 lg:py-20">
        <div className="max-w-sm">
          <Logo size="sm" />
          <p className="mt-4 text-sm leading-relaxed text-body sm:mt-5">
            Consultoria gráfica em materiais e produção. Orçamento técnico e gestão completa do
            processo — em papel, acrílico, madeira, metais e muito mais.
          </p>
        </div>

        <nav aria-label="Rodapé" className="text-sm">
          <p className="font-semibold text-ink">Navegação</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:mt-4 sm:grid-cols-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-10 items-center text-body transition-colors hover:text-navy-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm md:col-span-2 lg:col-span-1">
          <p className="font-semibold text-ink">Contato</p>
          <ul className="mt-3 space-y-2.5 text-body sm:mt-4">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-navy-800 sm:break-normal"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-navy-800">
                {site.phone}
              </a>
            </li>
            <li>
              {site.city} — {site.region}
            </li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-body sm:mt-5">
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center hover:text-navy-800"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center hover:text-navy-800"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center hover:text-navy-800"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:py-6">
          <p className="max-w-prose">
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>
            Consultoria Gráfica · {site.city}/{site.region}
          </p>
        </div>
      </div>
    </footer>
  );
}
