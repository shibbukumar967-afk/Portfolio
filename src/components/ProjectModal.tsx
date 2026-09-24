import React, { useState } from 'react';
import { X, Check, Code, ExternalLink, Copy, CheckCheck, Eye, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'specs'>('overview');

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-start justify-between bg-slate-900/90">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-1">
              <span>{project.subtitle}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 capitalize">{project.category}</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white font-display">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-800/80 bg-slate-950/50">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'overview'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Overview & Features</span>
          </button>

          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'code'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Source Structure</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('specs')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'specs'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Tech Stack Specs</span>
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'overview' && (
            <>
              {/* Media Preview banner */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Detailed Project Description
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Key Capabilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-200"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies unboxed list */}
              <div className="pt-2 border-t border-slate-800">
                <span className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                  Technologies Employed
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  {project.technologies.map((t, i) => (
                    <React.Fragment key={t}>
                      <span className="font-mono text-blue-300">{t}</span>
                      {i < project.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {project.codeSnippet.language.toUpperCase()} Architecture Snippet
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>

              <p className="text-xs text-slate-400">
                This architecture was crafted following semantic HTML5 guidelines and modular CSS layout rules.
              </p>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Engineering Specifications</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Viewport Target:</span>
                  <span className="text-white font-medium">Mobile 360px up to 4K Ultra-wide</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Accessibility Standards:</span>
                  <span className="text-emerald-400 font-medium">WCAG AA Contrast Compliant</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Layout Engine:</span>
                  <span className="text-white font-medium">CSS Grid & Flexbox Hybrid</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Internship Requirement:</span>
                  <span className="text-blue-400 font-medium">Level 1 - Task 1 (Personal Portfolio)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Viewer
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
