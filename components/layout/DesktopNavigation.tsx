'use client';

import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';
import { nav, type SectionId } from '@/lib/site';

const navigationSectionIds: readonly SectionId[] = nav.map((item) => item.sectionId);

type DesktopNavigationProps = {
  initialSectionId: SectionId;
};

export default function DesktopNavigation({ initialSectionId }: DesktopNavigationProps) {
  const activeSectionId = useActiveSection(navigationSectionIds, initialSectionId);

  return (
    <nav aria-label="Navegação principal" className="hidden xl:block">
      <ul className="flex items-center gap-8">
        {nav.map((item) => {
          const isActive = item.sectionId === activeSectionId;

          return (
            <li key={item.sectionId}>
              <Link
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`text-body font-bold whitespace-nowrap transition-colors hover:text-primary-strong ${
                  isActive ? 'text-primary-strong' : 'text-slate'
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
