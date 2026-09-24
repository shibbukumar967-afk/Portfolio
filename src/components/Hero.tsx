import React from 'react';
import { ArrowRight, Download, Mail, Phone, MapPin, CheckCircle2, Code2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial kicker without pill box */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              <span>{PERSONAL_INFO.education.field}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Web Development</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for Roles
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display text-balance leading-[1.1]">
              Shibbu Kumar
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-semibold text-blue-400">
              Web Developer & Frontend Builder
            </p>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              I am a B.Tech Information Technology student with a strong passion for developing clean, responsive, and intuitive web solutions. Dedicated to writing modular code and bringing visual designs to life.
            </p>

            {/* Quick trust metrics / context */}
            <div className="mt-7 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block text-2xl font-bold text-white font-mono tabular-nums">B.Tech</span>
                <span className="text-xs text-slate-400">IT Student</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-mono tabular-nums">Level 1</span>
                <span className="text-xs text-slate-400">Internship Task 1</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-mono tabular-nums">100%</span>
                <span className="text-xs text-slate-400">Responsive Focus</span>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-md shadow-blue-900/30 active:scale-95 whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all active:scale-95 whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Resume / CV</span>
              </button>

              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-3 text-sm font-medium text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg hover:text-white hover:border-slate-700 transition-all active:scale-95"
                title="Shibbu Kumar's GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-3 text-sm font-medium text-blue-400 bg-blue-950/30 border border-blue-900/60 rounded-lg hover:text-blue-300 hover:bg-blue-900/40 transition-all active:scale-95"
                title="Shibbu Kumar's LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait Card with Context */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative">
              {/* Media Container with fallback */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 mb-5 group">
                <img
                  src="/src/assets/images/shibbu_kumar_portrait_1790228161507.jpg"
                  alt="Portrait of Shibbu Kumar, Web Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Styled graceful fallback if image ever fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-blue-900', 'to-slate-900');
                      const fallback = document.createElement('div');
                      fallback.className = 'text-center p-6';
                      fallback.innerHTML = '<div class="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold text-white mx-auto mb-3">SK</div><p class="text-lg font-semibold text-white">Shibbu Kumar</p><p class="text-xs text-blue-300">Web Developer</p>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200 bg-slate-950/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-slate-800">
                  <span className="flex items-center gap-1.5 font-medium">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    B.Tech IT
                  </span>
                  <span className="text-slate-400 font-mono">2026 Batch</span>
                </div>
              </div>

              {/* Profile Card Body Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Shibbu Kumar</h3>
                    <p className="text-xs text-slate-400 font-medium">Aspiring Frontend Web Developer</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    Active
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.contact.email}`}
                      className="text-blue-400 hover:underline truncate max-w-[200px]"
                    >
                      {PERSONAL_INFO.contact.email}
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Phone className="w-3.5 h-3.5 text-blue-400" />
                      Phone
                    </span>
                    <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="text-slate-200 hover:text-white font-mono">
                      {PERSONAL_INFO.contact.phone}
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      Location
                    </span>
                    <span className="text-slate-300">{PERSONAL_INFO.contact.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-slate-400">Profiles</span>
                    <div className="flex items-center gap-2">
                      <a
                        href={PERSONAL_INFO.contact.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-300 hover:text-white transition-colors"
                        title="GitHub Profile"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                      <a
                        href={PERSONAL_INFO.contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        title="LinkedIn Profile"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-blue-400 bg-blue-950/40 border border-blue-800/50 rounded-lg hover:bg-blue-900/40 transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Send Message or Project Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
