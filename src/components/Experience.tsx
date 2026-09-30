import React from 'react';
import { Experience as ExperienceType } from '../data/portfolioData';
import { Calendar, Building2, Users } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#0c0d12] border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
            04. Extracurricular & Practical Background
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Experience & Activities
          </h2>
          <div className="h-1 w-12 bg-violet-500 mt-3 rounded-full"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#12141d] border border-neutral-800/90 hover:border-violet-500/40 rounded-xl p-6 sm:p-8 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-neutral-800">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  {exp.organization && (
                    <div className="flex items-center gap-2 text-sm text-neutral-400 mt-1">
                      <Building2 className="w-4 h-4 text-violet-400" />
                      <span className="font-medium text-neutral-300">{exp.organization}</span>
                    </div>
                  )}
                </div>

                {exp.duration && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{exp.duration}</span>
                  </div>
                )}
              </div>

              <div>
                <ul className="space-y-2.5 text-sm text-neutral-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
