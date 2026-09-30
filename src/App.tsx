/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialPortfolioData, PortfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DataEditorModal } from './components/DataEditorModal';

const LOCAL_STORAGE_KEY = 'khushi_portfolio_data_v7';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.error('Failed to load portfolio data from localStorage', err);
    }
    return initialPortfolioData;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);

  useEffect(() => {
    // Secret shortcut (Ctrl+Shift+E) or query param (?edit=true) keeps admin editing accessible
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'e') {
        setIsEditorModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    if (window.location.search.includes('edit=true')) {
      setIsEditorModalOpen(true);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    } catch (err) {
      console.error('Failed to save portfolio data to localStorage', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-neutral-100 flex flex-col font-sans selection:bg-violet-600 selection:text-white antialiased">
      {/* 3-Zone Top Navigation */}
      <Navbar
        data={data}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenEditor={() => setIsEditorModalOpen(true)}
      />

      <main className="flex-1">
        {/* Section 1: Hero / Introduction */}
        <Hero
          data={data.hero}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* Section 2: About Me */}
        <About
          data={data.about}
          name={data.hero.name}
        />

        {/* Section 3: Skills with distinct Currently Exploring section */}
        <Skills
          skills={data.skills}
        />

        {/* Section 4: Projects & Honest Placeholders */}
        <Projects
          projects={data.projects}
        />

        {/* Section 5: Extracurricular Activities & Experience */}
        <Experience
          experiences={data.experience}
        />

        {/* Section 6: Education */}
        <Education
          education={data.education}
        />

        {/* Section 7: Learning & Certifications */}
        <Certifications
          certifications={data.certifications}
        />

        {/* Section 8: Achievements & Activities */}
        <Achievements
          achievements={data.achievements}
        />

        {/* Section 9: Contact */}
        <Contact
          hero={data.hero}
        />
      </main>

      {/* Footer */}
      <Footer
        hero={data.hero}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenEditor={() => setIsEditorModalOpen(true)}
      />

      {/* Printable / ATS Viewable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        data={data}
      />

      {/* Live Data Editor / Resume Customizer */}
      <DataEditorModal
        isOpen={isEditorModalOpen}
        onClose={() => setIsEditorModalOpen(false)}
        data={data}
        onSave={handleSaveData}
      />
    </div>
  );
}
