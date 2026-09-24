import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Code, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `=====================================================
${PERSONAL_INFO.name.toUpperCase()} - RESUME / CURRICULUM VITAE
${PERSONAL_INFO.role} | B.Tech Information Technology Student
=====================================================

CONTACT INFORMATION:
- Email: ${PERSONAL_INFO.contact.email}
- Phone: ${PERSONAL_INFO.contact.phone}
- Location: ${PERSONAL_INFO.contact.location}
- GitHub: ${PERSONAL_INFO.contact.github}
- LinkedIn: ${PERSONAL_INFO.contact.linkedin}

CAREER OBJECTIVE:
Dedicated and motivated B.Tech Information Technology student with practical skills in HTML5, CSS3, JavaScript, and Java. Eager to contribute to dynamic software engineering teams through responsive web development, clean coding practices, and proactive problem solving.

EDUCATION:
- Degree: ${PERSONAL_INFO.education.degree} in ${PERSONAL_INFO.education.field}
- Status: Undergraduate Student
- Focus: Web Technologies, Data Structures & Algorithms, Object-Oriented Programming

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript, Tailwind CSS, Responsive Web Design
- Programming: Java (OOPs, Basic Data Structures)
- Version Control & Tools: Git, GitHub, VS Code

FEATURED PROJECTS & INTERNSHIP MILESTONES:
1. ${PROJECTS_DATA[0].title}
   - ${PROJECTS_DATA[0].description}
   - Tech: ${PROJECTS_DATA[0].technologies.join(', ')}

2. ${PROJECTS_DATA[1].title}
   - ${PROJECTS_DATA[1].description}
   - Tech: ${PROJECTS_DATA[1].technologies.join(', ')}

3. ${PROJECTS_DATA[2].title}
   - ${PROJECTS_DATA[2].description}
   - Tech: ${PROJECTS_DATA[2].technologies.join(', ')}

INTERNSHIP TASK COMPLETED:
- Level 1 - Task 1: Personal Portfolio Website
- Verification: Fully responsive multi-section web application
=====================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Shibbu_Kumar_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" />
            <h3 id="resume-title" className="text-lg font-bold text-white font-display">
              Resume Preview – Shibbu Kumar
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close resume dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 space-y-8 print:bg-white print:text-black print:p-0">
          {/* Top Title Block */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white font-display print:text-black">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base text-blue-400 font-semibold mt-1 print:text-blue-700">
                  {PERSONAL_INFO.role} · B.Tech Student
                </p>
              </div>

              <div className="text-xs text-slate-400 space-y-1 print:text-black">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="hover:underline">
                    {PERSONAL_INFO.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="font-mono">
                    {PERSONAL_INFO.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{PERSONAL_INFO.contact.location}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={PERSONAL_INFO.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline print:text-black"
                  >
                    GitHub
                  </a>
                  <span aria-hidden="true" className="text-slate-600 print:text-black">·</span>
                  <a
                    href={PERSONAL_INFO.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline print:text-black"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 print:text-blue-800">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-black">
              {PERSONAL_INFO.bio} Focused on front-end web development with proficiency in semantic HTML, modern CSS layouts (Flexbox and Grid), responsive mobile development, and core Java programming logic.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 print:text-blue-800 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 print:bg-transparent print:border-black">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-white print:text-black">
                <span>{PERSONAL_INFO.education.degree} – {PERSONAL_INFO.education.field}</span>
                <span className="text-xs text-blue-400 font-mono font-normal print:text-black">Ongoing</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 print:text-slate-700">
                {PERSONAL_INFO.education.highlights}
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 print:text-blue-800 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILLS_DATA.map((s) => (
                <div key={s.name} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 print:bg-transparent print:border-black">
                  <div className="flex justify-between font-semibold text-white print:text-black">
                    <span>{s.name}</span>
                    <span className="text-slate-400 font-mono">{s.experience}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 print:text-slate-700">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects & Internship Milestone */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 print:text-blue-800 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Key Projects & Experience</span>
            </h4>
            <div className="space-y-4">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 print:bg-transparent print:border-black">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h5 className="text-sm font-bold text-white print:text-black">{p.title}</h5>
                    <span className="text-[11px] text-blue-400 font-mono print:text-black">
                      {p.technologies.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed print:text-slate-800">
                    {p.fullOverview}
                  </p>
                  <ul className="mt-2 text-[11px] text-slate-400 space-y-0.5 list-disc pl-4 print:text-slate-700">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Candidate: Shibbu Kumar · B.Tech IT</span>
          <button
            onClick={onClose}
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
