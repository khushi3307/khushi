import React, { useState } from 'react';
import {
  FileText,
  Mail,
  MapPin,
  ExternalLink,
  ChevronDown,
  User,
} from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface HeroProps {
  data: PortfolioData['hero'];
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  {data.location}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Open to Internships & Roles
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-[1.1] text-balance">
                Hi, I'm {data.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-neutral-700">
                {data.headline}
              </p>
            </div>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {data.introduction}
            </p>

            {/* Actions: Resume, Contact, and External Profiles */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-all transform active:scale-95"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>

            {/* Social Links Row (LinkedIn, GitHub, Kaggle) */}
            <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                Connect
              </span>

              {data.github && (
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-medium text-neutral-700 hover:text-black transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              )}

              {data.linkedin && (
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-medium text-neutral-700 hover:text-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              )}

              {data.kaggle && (
                <a
                  href={data.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-medium text-neutral-700 hover:text-sky-600 transition-colors"
                >
                  <span className="font-mono font-bold text-xs bg-neutral-200 px-1 rounded">K</span>
                  <span>Kaggle</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Profile Photo Placeholder / Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden bg-neutral-100 border-2 border-neutral-200 shadow-md relative">
                {!imageError && data.profilePhoto ? (
                  <img
                    src={data.profilePhoto}
                    alt={`${data.name} headshot`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-400 p-6 text-center">
                    <User className="w-16 h-16 mb-2 text-neutral-300" />
                    <span className="text-sm font-semibold text-neutral-600">{data.name}</span>
                    <span className="text-xs text-neutral-400 mt-1">Profile Photo</span>
                  </div>
                )}
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-3 -right-2 bg-white border border-neutral-200 shadow-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-semibold text-neutral-700">Student Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
