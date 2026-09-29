import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

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
    <footer className="bg-neutral-900 text-neutral-400 py-12 border-t border-neutral-800 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="text-base font-bold text-white tracking-tight">
              {hero.name}
            </div>
            <p className="text-neutral-400 text-xs mt-1 max-w-sm">
              {hero.headline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-neutral-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors underline"
            >
              Resume
            </button>
            <button
              onClick={onOpenEditor}
              className="hover:text-white transition-colors"
            >
              Edit Portfolio Data
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} {hero.name}. Built with React, TypeScript & Tailwind CSS. Ready for Vercel deployment.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors py-1 px-2.5 rounded bg-neutral-800 hover:bg-neutral-700"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
