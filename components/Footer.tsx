import { nav, site } from '@/lib/site';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16 lg:py-20">
        <div className="max-w-sm">
          <Logo size="md" />
          <p className="mt-5 text-sm leading-relaxed text-body">
            Consultoria gráfica em materiais e produção. Orçamento técnico e gestão completa do
            processo — em papel, acrílico, madeira, metais e muito mais.
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
