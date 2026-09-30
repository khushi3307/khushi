import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { BookOpen, Terminal, Sparkles, Compass } from 'lucide-react';

interface AboutProps {
  data: PortfolioData['about'];
  name: string;
}

export const About: React.FC<AboutProps> = ({ data, name }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#0e1017] border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2 flex items-center gap-1.5">
            <span>01. Academic & Personal Profile</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-violet-500 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Summary Narrative */}
          <div className="lg:col-span-7 space-y-5 text-neutral-300 leading-relaxed text-base sm:text-lg">
            {data.summary.map((para, pIdx) => (
              <p
                key={pIdx}
                className={pIdx === 0 ? "text-neutral-200 font-medium" : "text-neutral-300"}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Key Academic & Learning Interests */}
          <div className="lg:col-span-5">
            <div className="bg-[#12141d] border border-neutral-800 hover:border-violet-500/40 rounded-xl p-6 shadow-md transition-all space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-violet-400" />
                Current Areas of Focus
              </h3>

              <ul className="space-y-3">
                {data.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span>Degree Track</span>
                <span className="font-semibold text-violet-300">B.Tech CSE (Data Science)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
