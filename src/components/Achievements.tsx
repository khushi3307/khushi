import React from 'react';
import { Achievement } from '../data/portfolioData';
import { Trophy, Calendar, Sparkles } from 'lucide-react';

interface AchievementsProps {
  achievements: Achievement[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            07. Honors & Engagement
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Achievements & Activities
          </h2>
          <div className="h-1 w-12 bg-neutral-900 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <span className="font-mono text-neutral-400">
                    {item.date || 'Recognition'}
                  </span>
                  <Trophy className="w-4 h-4 text-amber-600" />
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
