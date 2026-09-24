import React from 'react';
import { GraduationCap, Code, Compass, Award, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading with quiet typography */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Get to Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mt-1">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl font-bold text-white font-display">
              Building modern web interfaces with precision and intent.
            </h3>

            <p className="text-slate-300 leading-relaxed text-base">
              I am a Bachelor of Technology (<strong className="text-white">B.Tech</strong>) student majoring in <strong className="text-white">Information Technology</strong> from Uttar Pradesh, India. My fascination with software engineering drove me to explore how interactive digital products are designed, architected, and brought to life on the web.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              I am currently honing my expertise in <span className="text-white font-medium">HTML5, CSS3, JavaScript, and Java</span>. My design and development philosophy centers around three priorities: semantic accessibility, lightning-fast responsive layouts, and intuitive user experiences.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              Whether working on an internship task, an academic portal, or responsive landing pages, I strive to write clear, modular code and continually expand my problem-solving capabilities.
            </p>

            {/* Core Values / Engineering Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-3">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Clean Markup</h4>
                <p className="text-xs text-slate-400">Semantic, well-structured HTML & modern styling standards.</p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Responsive UI</h4>
                <p className="text-xs text-slate-400">Adaptive layouts that perform flawlessly across phone, tablet, and desktop.</p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4">
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Continuous Growth</h4>
                <p className="text-xs text-slate-400">Building on strong Java OOP foundations & modern web tooling.</p>
              </div>
            </div>
          </div>

          {/* Structured Data Matrix Column */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Profile Snapshot
                </span>
                <span className="text-xs text-blue-400 font-mono">B.Tech IT</span>
              </div>

              <div className="divide-y divide-slate-800/80">
                <div className="p-4 sm:p-5 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Education</span>
                  <span className="text-sm font-semibold text-white">B.Tech – Information Technology</span>
                  <span className="text-xs text-slate-400">Undergraduate Degree Program</span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Primary Role</span>
                  <span className="text-sm font-semibold text-white">Aspiring Web Developer</span>
                  <span className="text-xs text-slate-400">Frontend Engineering & UI Implementation</span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Core Technical Stack</span>
                  <span className="text-sm font-semibold text-white">HTML5, CSS3, JavaScript, Java</span>
                  <span className="text-xs text-slate-400">Tailwind CSS, Git/GitHub, Responsive Systems</span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Internship Project</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-emerald-400">Level 1 – Task 1 Complete</span>
                    <a href="#internship-task" className="text-xs text-blue-400 hover:underline flex items-center gap-1">
                      <span>View details</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <span className="text-xs text-slate-400">Personal Portfolio Web Application</span>
                </div>

                <div className="p-4 sm:p-5 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Location & Relocation</span>
                  <span className="text-sm font-semibold text-white">{PERSONAL_INFO.contact.location}</span>
                  <span className="text-xs text-slate-400">Open to remote & on-site internships</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950/60 border-t border-slate-800">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>View Full Qualifications & Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
