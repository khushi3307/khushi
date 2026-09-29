import React from 'react';
import { SkillsGroup } from '../data/portfolioData';
import { Code2, BookOpen, Wrench, Sparkles, Compass } from 'lucide-react';

interface SkillsProps {
  skills: SkillsGroup;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const currentSkillCategories = [
    {
      id: 'programming',
      title: 'Programming',
      icon: Code2,
      items: skills.programming,
      description: 'Languages used for core algorithmic problem solving and programming practice.',
    },
    {
      id: 'core',
      title: 'Core Foundations',
      icon: BookOpen,
      items: skills.core,
      description: 'Foundational concepts in algorithms, data structuring, and data science principles.',
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: Wrench,
      items: skills.tools,
      description: 'Version control, collaborative platforms, and productivity software in active use.',
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#0c0d12] border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
            02. Technical Toolkit
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Skills & Foundations
          </h2>
          <div className="h-1 w-12 bg-violet-500 mt-3 rounded-full"></div>
        </div>

        {/* Current Skills Grid */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            <span>Technologies Currently in Use</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentSkillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-[#12141d] border border-neutral-800/90 rounded-xl p-6 hover:border-violet-500/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-neutral-800/80 flex items-center justify-center text-violet-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">
                          {category.title}
                        </h3>
                        <span className="text-xs text-neutral-400">
                          {category.items.length} competencies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Clean unboxed skill list adhering to Zero-Pill rule and strictly without proficiency numbers */}
                    <ul className="space-y-2.5 border-t border-neutral-800 pt-4">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between text-sm font-medium text-neutral-200 py-0.5"
                        >
                          <span className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                            <span>{item}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visually Distinct "Currently Exploring" Subsection */}
        <div className="bg-gradient-to-br from-[#131322] to-[#161626] border border-violet-800/50 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/30 relative overflow-hidden">
          {/* Subtle violet ambient accent glow */}
          <div
            className="absolute -right-16 -top-16 w-64 h-64 bg-violet-600/10 blur-3xl pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Currently Exploring</span>
                  </h3>
                </div>
              </div>

              <span className="text-xs font-semibold text-violet-300 bg-violet-950/80 border border-violet-700/50 px-3 py-1 rounded-full self-start sm:self-auto">
                Future Learning & In-Progress Study
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6 max-w-2xl leading-relaxed">
              These are areas, technologies, and methodologies I am actively studying, exploring in coursework, and practicing through guided exercises:
            </p>

            {/* List of currently exploring items - clearly distinct */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {skills.currentlyExploring.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f111a] border border-violet-800/30 hover:border-violet-500/60 rounded-xl p-4 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-violet-400/80">0{idx + 1}</span>
                    <span className="text-[10px] uppercase font-semibold text-violet-300/80 tracking-wider">
                      Exploring
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {tech}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
