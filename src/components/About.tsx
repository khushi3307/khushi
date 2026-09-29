import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { CheckCircle2, BookOpen, Sparkles, Terminal } from 'lucide-react';

interface AboutProps {
  data: PortfolioData['about'];
  name: string;
}

export const About: React.FC<AboutProps> = ({ data, name }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            01. Background
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-neutral-900 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Summary Narrative */}
          <div className="lg:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-base sm:text-lg">
            {data.summary.map((para, idx) => (
              <p key={idx} className="text-neutral-600">
                {para}
              </p>
            ))}
          </div>

          {/* Key Academic & Technical Focus */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-neutral-700" />
                Key Focus & Highlights
              </h3>
              <ul className="space-y-3">
                {data.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>Undergraduate Focus</span>
                <span className="font-semibold text-neutral-700">B.Tech CSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
