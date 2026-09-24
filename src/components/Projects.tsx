import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Code, Eye, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Internship Tasks', value: 'internship' },
    { label: 'Landing Pages', value: 'landing' },
    { label: 'Academic Web', value: 'academic' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              My Work & Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mt-1">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Clean implementations built with semantic HTML, modern responsive CSS layouts, and interactive design.
            </p>
          </div>

          {/* Interactive filter controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setSelectedFilter(f.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedFilter === f.value
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Box Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && selectedFilter === 'all';
            return (
              <div
                key={project.id}
                className={`group bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Media Visual Container */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative aspect-video w-full overflow-hidden bg-slate-800 cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-800', 'text-slate-500', 'text-xs');
                          parent.innerText = project.title;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />

                    {/* Quick view overlay icon */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/80 backdrop-blur-sm p-2 rounded-lg text-white">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Unboxed metadata kicker */}
                    <div className="flex items-center gap-2 text-xs text-blue-400 font-medium mb-2">
                      <span>{project.subtitle}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400 capitalize">{project.category}</span>
                    </div>

                    <h3
                      onClick={() => setActiveModalProject(project)}
                      className="text-xl font-bold text-white mb-2 cursor-pointer hover:text-blue-400 transition-colors font-display"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies unboxed list */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="font-mono text-slate-300">{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.codeSnippet && (
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Inspect Code"
                      >
                        <Code className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-slate-400 hover:text-white transition-colors"
                      title="Open Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
