import React from 'react';
import { Certification } from '../data/portfolioData';
import { Award, Calendar } from 'lucide-react';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-[#0c0d12] border-b border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
            06. Continuous Learning
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Learning & Certifications
          </h2>
          <div className="h-1 w-12 bg-violet-500 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#12141d] border border-neutral-800/90 rounded-xl p-6 hover:border-violet-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    {cert.date}
                  </span>
                  <Award className="w-4 h-4 text-violet-400" />
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs font-medium text-neutral-400 mb-4">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
