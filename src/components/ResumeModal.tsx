import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { X, Printer, Download, ExternalLink, Mail, MapPin, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# ${data.hero.name}
${data.hero.headline}
Email: ${data.hero.email} | Location: ${data.hero.location}
GitHub: ${data.hero.github} | LinkedIn: ${data.hero.linkedin} | Kaggle: ${data.hero.kaggle}

## About Me
${data.about.summary.join('\n\n')}

## Education
${data.education.map(e => `* **${e.degree}** - ${e.institution} (${e.duration}) - ${e.score || ''}\n  Coursework: ${e.coursework?.join(', ')}`).join('\n')}

## Technical Skills
* **Languages:** ${data.skills.languages.join(', ')}
* **Frameworks & Web:** ${data.skills.frameworks.join(', ')}
* **AI & Machine Learning:** ${data.skills.aiMl.join(', ')}
* **Databases:** ${data.skills.databases.join(', ')}
* **Tools & Platforms:** ${data.skills.tools.join(', ')}

## Projects
${data.projects.map(p => `### ${p.name}\n${p.purpose}\n* Tech: ${p.technologies.join(', ')}\n* Features:\n${p.features.map(f => `  - ${f}`).join('\n')}\n* Link: ${p.githubUrl || ''}`).join('\n\n')}

## Experience
${data.experience.map(e => `### ${e.role} - ${e.organization} (${e.duration})\n${e.responsibilities.map(r => `* ${r}`).join('\n')}`).join('\n\n')}

## Certifications
${data.certifications.map(c => `* **${c.name}** - ${c.issuer} (${c.date})`).join('\n')}

## Achievements
${data.achievements.map(a => `* **${a.title}**: ${a.description} (${a.date || ''})`).join('\n')}
`;

    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.hero.name.replace(/[^a-zA-Z0-9]/g, '_')}_Resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh] print:max-h-none print:shadow-none print:rounded-none">
        {/* Modal Header Toolbar (hidden on print) */}
        <div className="px-6 py-4 bg-neutral-900 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight">Curriculum Vitae</span>
            <span className="text-xs text-neutral-400">· {data.hero.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded transition-colors"
              title="Download Markdown Version"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download MD</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS-Friendly Resume Content */}
        <div className="p-8 sm:p-12 overflow-y-auto print:overflow-visible space-y-7 text-neutral-900 leading-normal text-sm font-sans bg-white">
          {/* Header */}
          <div className="border-b border-neutral-300 pb-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
              {data.hero.name}
            </h1>
            <p className="text-sm font-medium text-neutral-600 mt-1">
              {data.hero.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-600 mt-3">
              <span>{data.hero.email}</span>
              <span aria-hidden="true">·</span>
              <span>{data.hero.location}</span>
              <span aria-hidden="true">·</span>
              <span>github.com/vkhushi3307</span>
              <span aria-hidden="true">·</span>
              <span>linkedin.com/in/khushi-v-developer</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-neutral-900">
                    <span>{edu.institution}</span>
                    <span className="font-normal text-neutral-600 text-xs">{edu.duration}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-neutral-700">
                    <span>{edu.degree}</span>
                    {edu.score && <span className="font-semibold">{edu.score}</span>}
                  </div>
                  {edu.coursework && (
                    <p className="text-xs text-neutral-600 mt-1">
                      <span className="font-medium text-neutral-700">Relevant Coursework:</span>{' '}
                      {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-800">
              <p>
                <span className="font-bold text-neutral-900">Languages:</span>{' '}
                {data.skills.languages.join(', ')}
              </p>
              <p>
                <span className="font-bold text-neutral-900">Frameworks & Web:</span>{' '}
                {data.skills.frameworks.join(', ')}
              </p>
              <p>
                <span className="font-bold text-neutral-900">AI / Machine Learning:</span>{' '}
                {data.skills.aiMl.join(', ')}
              </p>
              <p>
                <span className="font-bold text-neutral-900">Databases:</span>{' '}
                {data.skills.databases.join(', ')}
              </p>
              <p>
                <span className="font-bold text-neutral-900">Tools & Platforms:</span>{' '}
                {data.skills.tools.join(', ')}
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-neutral-900 text-sm">
                    <span>{proj.name}</span>
                    <span className="font-normal text-neutral-500 text-xs">
                      {proj.technologies.slice(0, 3).join(', ')}
                    </span>
                  </div>
                  <p className="text-neutral-700 mt-0.5">{proj.purpose}</p>
                  <ul className="list-disc list-inside mt-1.5 text-neutral-600 space-y-0.5">
                    {proj.features.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-neutral-900 text-sm">
                    <span>
                      {exp.role} · <span className="font-normal">{exp.organization}</span>
                    </span>
                    <span className="font-normal text-neutral-500 text-xs">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 text-neutral-600 space-y-0.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="space-y-1 text-xs text-neutral-700">
                {data.certifications.map((c) => (
                  <li key={c.id}>
                    <span className="font-semibold text-neutral-900">{c.name}</span> — {c.issuer} ({c.date})
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-2">
                Achievements
              </h2>
              <ul className="space-y-1 text-xs text-neutral-700">
                {data.achievements.map((a) => (
                  <li key={a.id}>
                    <span className="font-semibold text-neutral-900">{a.title}</span>: {a.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
