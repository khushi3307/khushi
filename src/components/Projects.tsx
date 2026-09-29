import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ExternalLink, Github, CheckCircle, Search, ArrowUpRight, X } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'ml' | 'web'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (filter === 'featured') return project.featured;
    if (filter === 'ml') {
      return project.technologies.some((t) =>
        ['python', 'scikit-learn', 'pandas', 'tensorflow', 'numpy'].includes(t.toLowerCase())
      );
    }
    if (filter === 'web') {
      return project.technologies.some((t) =>
        ['react', 'javascript', 'typescript', 'node.js', 'html5'].includes(t.toLowerCase())
      );
    }

    return true;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              03. Selected Work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Projects & Implementations
            </h2>
            <div className="h-1 w-12 bg-neutral-900 mt-3 rounded-full"></div>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tech..."
                className="pl-9 pr-3 py-1.5 text-xs bg-white border border-neutral-300 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 w-full sm:w-56"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1 p-1 bg-neutral-200/70 rounded-lg">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  filter === 'all'
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  filter === 'featured'
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Featured
              </button>
              <button
                onClick={() => setFilter('ml')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  filter === 'ml'
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                AI / ML
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  filter === 'web'
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Web
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white border border-neutral-200 rounded-xl p-8">
            <p className="text-neutral-500 text-sm">No projects match the search filter.</p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-neutral-900 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-7 shadow-sm hover:border-neutral-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top metadata line without pill enclosures */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                    <span className="font-mono text-neutral-400">
                      ID: {project.id.toUpperCase()}
                    </span>
                    {project.featured && (
                      <span className="text-neutral-700 font-semibold flex items-center gap-1">
                        ★ Featured Project
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
                    {project.purpose}
                  </p>

                  {/* Clean unboxed technologies list */}
                  <div className="mb-5 pb-5 border-b border-neutral-100">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-700 font-medium">
                      {project.technologies.map((tech, idx) => (
                        <React.Fragment key={idx}>
                          <span>{tech}</span>
                          {idx < project.technologies.length - 1 && (
                            <span className="text-neutral-300" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Main features list */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Core Features
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                      {project.features.slice(0, 3).map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="pt-1">
                          <button
                            onClick={() => setActiveProjectModal(project)}
                            className="text-xs text-neutral-900 font-semibold underline hover:text-neutral-600"
                          >
                            + {project.features.length - 3} more feature details
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Footer links */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-semibold text-neutral-700 hover:text-black transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-semibold text-neutral-900 hover:text-neutral-700 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1"
                  >
                    <span>Overview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for full project details */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-900 p-1"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs text-neutral-500 mb-2">Project Overview</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {activeProjectModal.name}
              </h3>

              <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                {activeProjectModal.purpose}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Complete Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeProjectModal.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  All Implemented Features & Technical Details
                </h4>
                <ul className="space-y-2.5 text-sm text-neutral-700">
                  {activeProjectModal.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-neutral-200 flex items-center justify-end gap-3">
                {activeProjectModal.githubUrl && (
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                  </a>
                )}
                {activeProjectModal.liveDemoUrl && (
                  <a
                    href={activeProjectModal.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
