'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  getAllProjects,
  PROJECT_CATEGORIES,
  brandGroups,
  type FullProjectItem,
  type ProjectCategory,
} from '@/lib/portfolio';
import { SearchIcon, CloseIcon, ArrowRight } from './icons';
import ProjectModal from './portfolio/ProjectModal';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Todos');
  const [selectedBrand, setSelectedBrand] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<FullProjectItem | null>(null);

  const allProjects = useMemo(() => getAllProjects(), []);

  // Contadores por categoria
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      Todos: allProjects.length,
    };
    PROJECT_CATEGORIES.forEach((cat) => {
      if (cat !== 'Todos') {
        counts[cat] = allProjects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [allProjects]);

  // Projetos filtrados
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Filtro de categoria
      if (selectedCategory !== 'Todos' && project.category !== selectedCategory) {
        return false;
      }

      // Filtro de marca
      if (selectedBrand !== 'Todas' && project.brandSlug !== selectedBrand) {
        return false;
      }

      // Filtro de busca
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = project.title.toLowerCase().includes(query);
        const matchDesc = project.description.toLowerCase().includes(query);
        const matchTag = project.tag.toLowerCase().includes(query);
        const matchBrand = project.brandName.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchTag && !matchBrand) {
          return false;
        }
      }

      return true;
    });
  }, [allProjects, selectedCategory, selectedBrand, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== 'Todos' || selectedBrand !== 'Todas' || searchQuery.trim() !== '';

  const resetFilters = () => {
    setSelectedCategory('Todos');
    setSelectedBrand('Todas');
    setSearchQuery('');
  };

  return (
    <section id="portfolio" className="section-block bg-paper py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        {/* Cabeçalho da Seção */}
        <div className="section-head max-w-3xl">
          <div>
            <p className="eyebrow">Galeria de Produção</p>
            <h2 className="display mt-3 text-[clamp(1.85rem,6vw,3.2rem)] font-extrabold leading-tight tracking-tight sm:mt-4">
              Todos os projetos & cases gráficos
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-body sm:text-base">
            Explore a diversidade de materiais e peças desenvolvidas para grandes marcas — desde
            displays e acrílicos luminosos até totens de grande formato, campanhas de PDV e edições
            impressas.
          </p>
        </div>

        {/* Barra de Filtros e Busca */}
        <div className="mt-8 flex flex-col gap-5 sm:mt-10">
          {/* Categorias (Pills) */}
          <div className="flex flex-wrap items-center gap-2 border-b border-line/60 pb-5">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                    isActive
                      ? 'bg-navy-800 text-white shadow-md'
                      : 'border border-line bg-surface text-ink/80 hover:border-navy-300 hover:text-navy-800'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.68rem] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-line/60 text-navy-800/70'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Segunda Linha: Busca + Seletor de Marca */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted">
                <SearchIcon className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por projeto, material ou marca..."
                className="w-full rounded-lg border border-line bg-surface py-2.5 pl-10 pr-9 text-sm text-ink placeholder:text-muted/70 shadow-sm transition focus:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-800"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpar busca"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted hover:text-ink"
                >
                  <CloseIcon className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <div className="flex items-center gap-2">
                <label htmlFor="brand-filter" className="text-xs font-semibold text-muted sm:text-sm whitespace-nowrap">
                  Marca:
                </label>
                <select
                  id="brand-filter"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="rounded-lg border border-line bg-surface py-2 px-3 text-xs font-medium text-ink shadow-sm transition focus:border-navy-800 focus:outline-none sm:text-sm"
                >
                  <option value="Todas">Todas as marcas ({brandGroups.length})</option>
                  {brandGroups.map((brand) => (
                    <option key={brand.slug} value={brand.slug}>
                      {brand.name} ({brand.projects.length})
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-semibold text-navy-800 underline underline-offset-2 hover:text-navy-950 sm:text-sm"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="flex items-center justify-between text-xs font-medium text-muted">
            <p>
              Exibindo <span className="font-semibold text-ink">{filteredProjects.length}</span> de{' '}
              {allProjects.length} projetos
            </p>
          </div>
        </div>

        {/* Grid de Projetos */}
        {filteredProjects.length > 0 ? (
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <li key={project.id}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line/70 bg-surface text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-800"
                >
                  {/* Imagem do Projeto */}
                  <span className="relative block aspect-[4/3] w-full overflow-hidden bg-navy-950">
                    <Image
                      src={project.image}
                      alt={`${project.brandName} — ${project.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
                    />
                  </span>

                  {/* Conteúdo do Card */}
                  <span className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-wider text-muted sm:text-xs">
                          {project.brandName}
                        </span>
                        <span className="text-[0.68rem] font-semibold text-navy-800/75 sm:text-xs">
                          {project.tag}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink group-hover:text-navy-800 sm:text-xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-body">
                        {project.description}
                      </p>
                    </div>


                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-800 transition group-hover:translate-x-1 sm:text-sm">
                      Ver detalhes do projeto
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          /* Estado Vazio */
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-paper-2 p-10 text-center">
            <p className="font-display text-lg font-bold text-ink sm:text-xl">
              Nenhum projeto encontrado
            </p>
            <p className="mt-2 max-w-md text-sm text-body">
              Não encontramos projetos com os filtros selecionados. Tente buscar por outros termos
              ou limpar os filtros ativos.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-900"
            >
              Limpar todos os filtros
            </button>
          </div>
        )}
      </div>

      {/* Modal de Detalhes */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
