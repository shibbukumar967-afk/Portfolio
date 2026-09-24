import React from 'react';
import { FileText, Download, Printer, Award, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 md:py-24 border-t border-slate-900 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Curriculum Vitae</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>B.Tech IT</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
              Want to know more about my qualifications?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore my academic achievements at B.Tech Information Technology, core competencies in web development, verified internship tasks, and project history.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 font-medium">
              <span>Candidate: <strong className="text-white">{PERSONAL_INFO.name}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Available for Summer Internships</span>
              <span aria-hidden="true">·</span>
              <span>Fast Learner & Team Collaborator</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-950/50 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>View Interactive CV</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 rounded-xl transition-all"
            >
              <Download className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
