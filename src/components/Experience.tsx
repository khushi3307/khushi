import React from 'react';
import { Experience as ExperienceType } from '../data/portfolioData';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            04. Practical Background
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Experience & Roles
          </h2>
          <div className="h-1 w-12 bg-neutral-900 mt-3 rounded-full"></div>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 hover:border-neutral-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-neutral-200">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mt-1">
                    <Building2 className="w-4 h-4 text-neutral-400" />
                    <span className="font-medium text-neutral-800">{exp.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Actual Responsibilities & Contributions
                </h4>
                <ul className="space-y-2.5 text-sm text-neutral-700">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0"></span>
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
