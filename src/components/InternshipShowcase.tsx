import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, FileCode, ExternalLink, Terminal, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface InternshipShowcaseProps {
  onOpenResume: () => void;
}

export const InternshipShowcase: React.FC<InternshipShowcaseProps> = ({ onOpenResume }) => {
  const [copiedReadme, setCopiedReadme] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const readmeContent = `# Shibbu Kumar - Web Development Internship Task 1

## Task
Level 1 - Task 1: Personal Portfolio

## Student Info
- Name: Shibbu Kumar
- Education: B.Tech – Information Technology
- Email: ${PERSONAL_INFO.contact.email}
- Phone: ${PERSONAL_INFO.contact.phone}
- Location: ${PERSONAL_INFO.contact.location}

## Technologies
- HTML5 (Semantic Structure)
- CSS3 (Flexbox, CSS Grid & Responsive Queries)
- JavaScript (Interactive Components)

## Verification Checklist
1. Semantic Document Tree (header, nav, main, sections, footer)
2. Fluid Responsive Viewports (360px to 1920px)
3. Working Navigation Bar with Smooth Scrolling
4. Projects Showcase with Case Studies
5. Resume Download & Print Capabilities
6. Verified Contact Details

## Submission Instructions
- Verified live responsive preview
- Ready for internship portal submission`;

  const copyReadme = () => {
    navigator.clipboard.writeText(readmeContent);
    setCopiedReadme(true);
    setTimeout(() => setCopiedReadme(false), 2000);
  };

  return (
    <section id="internship-task" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
            <span>Internship Milestone</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Task Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mt-1">
            Level 1 – Task 1: Personal Portfolio
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Built to fulfill the Web Development Internship criteria: responsive layouts, clean semantic code, dedicated navigation, projects, resume download, and active contact channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Submission Checklist */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Evaluation & Deliverables Checklist</span>
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/60">
                  {Object.values(checkedItems).filter(Boolean).length} / {PERSONAL_INFO.internshipTask.requirements.length} Verified
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-5">
                Click any item below to verify standard internship evaluation requirements:
              </p>

              <div className="space-y-3">
                {PERSONAL_INFO.internshipTask.requirements.map((req, idx) => {
                  const isDone = !!checkedItems[idx];
                  return (
                    <div
                      key={req}
                      onClick={() => toggleCheck(idx)}
                      className={`p-3.5 rounded-xl border text-xs cursor-pointer flex items-start gap-3 transition-colors ${
                        isDone
                          ? 'bg-slate-950/80 border-slate-800 text-slate-200'
                          : 'bg-slate-950/40 border-slate-800/60 text-slate-400 line-through'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-blue-600 focus:ring-0 bg-slate-900 border-slate-700 pointer-events-none"
                      />
                      <span className="leading-relaxed">{req}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">
                Internship Candidate: <strong className="text-white">Shibbu Kumar</strong>
              </span>
              <button
                onClick={onOpenResume}
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
              >
                <span>View Attached Resume</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Submission Documentation / README Inspector */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-400" />
                  <h3 className="text-base font-bold text-white font-mono">
                    submission-README.md
                  </h3>
                </div>

                <button
                  onClick={copyReadme}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  {copiedReadme ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy README</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto max-h-[300px]">
                <pre>{readmeContent}</pre>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-blue-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ready for Task 1 Submission
                </p>
                <p className="text-slate-400">
                  You can capture screenshots directly from this live deployed portfolio or copy the structured README above to submit alongside your internship project files.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href="#projects"
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                ← Back to Projects
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}?subject=Internship%20Task%201%20Submission%20-%20Shibbu%20Kumar`}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Submit via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
