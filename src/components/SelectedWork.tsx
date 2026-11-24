import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import ProjectVisuals from './ProjectVisuals';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  return (
    <section id="selected-work" className="border-b border-[#171717]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        {/* Top Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D6D1C4] mb-12">
          <span className="font-mono-label text-xs tracking-[0.16em] text-[#171717] uppercase font-semibold">
            {PORTFOLIO_DATA.projects.sectionLabel}
          </span>
          <span className="font-mono-label text-[11px] tracking-[0.18em] text-[#D52E2E] uppercase font-medium">
            4 ACADEMIC & APPLIED STUDIES
          </span>
        </div>

        {/* Heading Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-display uppercase leading-[0.88] tracking-tight text-[clamp(3.5rem,7.5vw,6.75rem)] text-[#171717]">
              <span className="block">THE</span>
              <span className="block text-[#D52E2E]">WORK.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:flex lg:justify-end">
            <p className="text-[15px] sm:text-base leading-[1.7] text-[#171717]/80 max-w-md">
              {PORTFOLIO_DATA.projects.subtitle}
            </p>
          </div>
        </div>

        {/* Two-Column Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PORTFOLIO_DATA.projects.items.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[#171717] bg-[#F3F1EA] flex flex-col justify-between group hover:border-[#D52E2E] transition-colors duration-200"
            >
              {/* Large Rectangular Visual Area */}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="w-full aspect-[16/10] border-b border-[#171717] overflow-hidden relative block text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D52E2E]"
                aria-label={`Explore project ${project.title}`}
              >
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02]">
                  <ProjectVisuals type={project.visualType} />
                </div>
              </button>

              {/* Editorial Card Copy */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono-label text-[11px] tracking-[0.16em] text-[#D52E2E] font-semibold uppercase">
                      {project.category}
                    </span>
                    <span className="font-display text-2xl text-[#171717]/35 group-hover:text-[#D52E2E] transition-colors">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-[#171717] leading-[1.02]">
                    {project.title}
                  </h3>

                  <p className="text-[15px] leading-[1.68] text-[#171717]/80">
                    {project.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#D6D1C4] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold tracking-[0.14em] uppercase text-[#171717] hover:text-[#D52E2E] transition-colors py-1 min-h-[40px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D52E2E]"
                  >
                    <span>EXPLORE PROJECT</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#D52E2E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Editorial Project Dossier Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#171717]/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-3xl bg-[#F3F1EA] border border-[#171717] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="px-6 sm:px-8 py-4 border-b border-[#171717] flex items-center justify-between gap-4 bg-[#EAE6DC]">
              <div className="flex items-center gap-3">
                <span className="font-mono-label text-xs font-semibold tracking-[0.16em] text-[#D52E2E]">
                  PROJECT {selectedProject.number}
                </span>
                <span className="text-[#171717]/30" aria-hidden="true">
                  /
                </span>
                <span className="font-mono-label text-xs tracking-[0.14em] text-[#171717]/80 uppercase">
                  {selectedProject.category}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="w-10 h-10 border border-[#171717]/25 hover:border-[#D52E2E] hover:bg-[#D52E2E] text-[#171717] hover:text-[#F3F1EA] flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D52E2E]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Artwork */}
            <div className="aspect-[16/9] border-b border-[#171717] overflow-hidden">
              <ProjectVisuals type={selectedProject.visualType} />
            </div>

            {/* Project Dossier Details */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3
                  id="project-modal-title"
                  className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#171717] mb-3"
                >
                  {selectedProject.title}
                </h3>
                <p className="text-base leading-[1.7] text-[#171717]/85">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-[#D6D1C4]">
                <div>
                  <span className="block font-mono-label text-[11px] tracking-[0.16em] text-[#D52E2E] font-semibold uppercase mb-3">
                    SCOPE & FOCUS
                  </span>
                  <ul className="space-y-2">
                    {selectedProject.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="text-sm text-[#171717] flex items-center gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 bg-[#D52E2E] shrink-0" aria-hidden="true" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="block font-mono-label text-[11px] tracking-[0.16em] text-[#D52E2E] font-semibold uppercase mb-3">
                    PROJECT APPROACH
                  </span>
                  <p className="text-sm leading-[1.68] text-[#52504A]">
                    {selectedProject.methodologyNote}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D6D1C4] flex items-center justify-between gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold tracking-[0.14em] uppercase text-[#D52E2E] hover:text-[#171717] transition-colors"
                >
                  <span>DISCUSS THIS WORK</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border border-[#171717] font-mono-label text-xs uppercase tracking-[0.14em] text-[#171717] hover:bg-[#171717] hover:text-[#F3F1EA] transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
