import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ExternalLink, Github, CheckCircle, Search, ArrowUpRight, X, Clock, Sparkles } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesSearch;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#0e1017] border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
              03. Academic & Hands-On Work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Projects & Work
            </h2>
            <div className="h-1 w-12 bg-violet-500 mt-3 rounded-full"></div>
          </div>

          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="pl-9 pr-3 py-1.5 text-xs bg-[#12141d] border border-neutral-800 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-violet-500 w-full sm:w-60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between ${
                project.isPlaceholder
                  ? 'bg-[#10121a]/80 border border-dashed border-neutral-800 hover:border-violet-500/40'
                  : 'bg-[#12141d] border border-neutral-800 hover:border-violet-500/50 shadow-md shadow-black/20'
              }`}
            >
              <div>
                {/* Status indicator line */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  {project.isPlaceholder ? (
                    <span className="flex items-center gap-1.5 text-violet-400/90 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Upcoming Project Placeholder</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Active Project</span>
                    </span>
                  )}
                  <span className="font-mono text-neutral-500 text-[11px]">
                    {project.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>

                <p className="text-sm text-neutral-300 mb-5 leading-relaxed">
                  {project.purpose}
                </p>

                {/* Clean unboxed technologies list */}
                <div className="mb-5 pb-5 border-b border-neutral-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-violet-300 font-medium">
                    {project.technologies.map((tech, idx) => (
                      <React.Fragment key={idx}>
                        <span>{tech}</span>
                        {idx < project.technologies.length - 1 && (
                          <span className="text-neutral-600" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Main features list */}
                <div className="mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Scope & Features
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer links */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-semibold text-neutral-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Repository</span>
                    </a>
                  ) : (
                    <span className="text-neutral-500 italic text-xs">
                      Repository to be added
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="font-medium text-neutral-400 hover:text-violet-300 flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full project details */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#12141d] border border-neutral-800 text-neutral-200 rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs text-violet-400 font-semibold uppercase tracking-wider mb-2">
                {activeProjectModal.isPlaceholder ? 'Upcoming Project Overview' : 'Project Breakdown'}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {activeProjectModal.name}
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {activeProjectModal.purpose}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeProjectModal.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-800/80 text-violet-300 border border-neutral-700/60 px-2.5 py-1 rounded font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Scope & Documented Points
                </h4>
                <ul className="space-y-2.5 text-sm text-neutral-300">
                  {activeProjectModal.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-neutral-800 flex items-center justify-end gap-3">
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-200 bg-neutral-800 hover:bg-neutral-700 rounded-lg"
                  >
                    <Github className="w-4 h-4" />
                    Visit GitHub
                  </a>
                )}
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
