import React from 'react';
import { Education as EducationType } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookCheck } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-16 md:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            05. Academic Journey
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Education
          </h2>
          <div className="h-1 w-12 bg-neutral-900 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-7 shadow-sm hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <div className="flex items-center gap-1.5 font-semibold text-neutral-600">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{item.duration}</span>
                  </div>
                  {item.score && (
                    <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-xs">
                      {item.score}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  {item.degree}
                </h3>

                <p className="text-sm font-medium text-neutral-600 mb-4">
                  {item.institution}
                </p>

                {item.coursework && item.coursework.length > 0 && (
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                      <BookCheck className="w-3.5 h-3.5" />
                      Relevant Coursework
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-600">
                      {item.coursework.map((course, cIdx) => (
                        <React.Fragment key={cIdx}>
                          <span>{course}</span>
                          {cIdx < item.coursework!.length - 1 && (
                            <span className="text-neutral-300" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
