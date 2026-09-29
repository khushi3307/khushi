import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Settings, ExternalLink } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface NavbarProps {
  data: PortfolioData;
  onOpenResume: () => void;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ data, onOpenResume, onOpenEditor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-neutral-900/90 text-white backdrop-blur-md border-b border-neutral-800 shadow-sm'
          : 'bg-neutral-900 text-white border-b border-neutral-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white hover:text-neutral-300 transition-colors whitespace-nowrap"
        >
          {data.hero.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenEditor}
            title="Edit / Customize Portfolio Data"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-md transition-colors whitespace-nowrap"
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Edit Data</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-900 bg-white hover:bg-neutral-100 rounded-md transition-colors whitespace-nowrap shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-400 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-neutral-800 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-900 bg-white rounded-md"
            >
              <FileText className="w-3.5 h-3.5" />
              View Full Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditor();
              }}
              className="px-3 py-2 text-xs font-semibold text-neutral-300 bg-neutral-800 border border-neutral-700 rounded-md"
            >
              Edit Info
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
