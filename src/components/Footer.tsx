import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  hero: PortfolioData['hero'];
  onOpenResume: () => void;
  onOpenEditor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ hero, onOpenResume, onOpenEditor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] text-neutral-400 py-12 border-t border-neutral-800/80 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800/60">
          <div>
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>{hero.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block"></span>
            </div>
            <p className="text-neutral-400 text-xs mt-1 max-w-sm">
              {hero.headline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-400">
            <a href="#about" className="hover:text-violet-300 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-violet-300 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-violet-300 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-violet-300 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-violet-300 transition-colors">
              Education
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-violet-300 transition-colors underline"
            >
              Resume
            </button>
            <button
              onClick={onOpenEditor}
              className="hover:text-violet-300 transition-colors"
            >
              Edit Data
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} {hero.name} · B.Tech CSE (Data Science)
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors py-1.5 px-3 rounded-md bg-neutral-900 border border-neutral-800 hover:border-violet-500/40"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-violet-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
