import React from 'react';
import { Certification } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            06. Verified Credentials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Certifications
          </h2>
          <div className="h-1 w-12 bg-neutral-900 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {cert.date}
                  </span>
                  <Award className="w-4 h-4 text-neutral-500" />
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-1 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs font-medium text-neutral-600 mb-4">
                  {cert.issuer}
                </p>
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 border-t border-neutral-200">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 hover:text-black transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
