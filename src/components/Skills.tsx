import React, { useState } from 'react';
import { SKILLS_DATA, Skill } from '../data/portfolioData';
import { Check, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Languages' | 'Tools & Workflow'>('All');
  const [activeSkill, setActiveSkill] = useState<Skill>(SKILLS_DATA[0]);

  const categories: Array<'All' | 'Frontend' | 'Languages' | 'Tools & Workflow'> = [
    'All',
    'Frontend',
    'Languages',
    'Tools & Workflow',
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              What I Use
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mt-1">
              Technical Skills
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Languages, frameworks, and developer workflows I actively use to construct resilient web applications.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => {
            const isSelected = activeSkill.name === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setActiveSkill(skill)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500/80 shadow-lg shadow-blue-950/50 ring-1 ring-blue-500/30'
                    : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-800/40 flex items-center justify-center font-mono font-bold text-blue-400 text-sm">
                    {skill.name.substring(0, 3).toUpperCase()}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-semibold text-white tabular-nums">
                      {skill.level}%
                    </span>
                    <span className="block text-[11px] text-slate-400">{skill.experience}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Progress track */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-4">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Unboxed metadata tags with separators */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                  {skill.highlights.map((h, i) => (
                    <React.Fragment key={h}>
                      <span>{h}</span>
                      {i < skill.highlights.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Spotlight Card */}
        <div className="mt-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Active Skill Focus
              </span>
            </div>
            <h4 className="text-xl font-bold text-white font-display">
              {activeSkill.name} – {activeSkill.experience}
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              {activeSkill.description}
            </p>
          </div>

          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 shrink-0 w-full md:w-auto min-w-[240px]">
            <span className="block text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">
              Key Competencies
            </span>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {activeSkill.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
