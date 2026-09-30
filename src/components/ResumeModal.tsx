import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { X, Printer, Download } from 'lucide-react';

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
GitHub: ${data.hero.github} | LinkedIn: ${data.hero.linkedin}

## About
${data.about.summary.join('\n\n')}

## Education
${data.education.map(e => `* **${e.degree}** - ${e.institution} (${e.duration})${e.score ? ` - ${e.score}` : ''}\n  Key Focus: ${e.coursework?.join(', ') || 'N/A'}`).join('\n')}

## Certification
${data.certifications.map(c => `* **${c.name}** - ${c.issuer} (${c.date})${c.credentialUrl ? `\n  Verification: ${c.credentialUrl}` : ''}`).join('\n')}

## Technical Foundations & Skills
* **Programming:** ${data.skills.programming.join(', ')}
* **Computer Science:** ${(data.skills.computerScience || []).join(', ')}
* **Data & Productivity:** ${(data.skills.dataAndProductivity || []).join(', ')}
* **Tools:** ${data.skills.tools.join(', ')}
* **Currently Exploring:** ${data.skills.currentlyExploring.join(', ')}

## Projects & Hands-On Work
${data.projects.map(p => `### ${p.name}${p.subtitle ? ` — ${p.subtitle}` : ''}\n${p.purpose}\n* Tech: ${p.technologies.join(', ')}\n* Key Points:\n${p.features.map(f => `  - ${f}`).join('\n')}${p.liveDemoUrl ? `\n* Live: ${p.liveDemoUrl}` : ''}${p.githubUrl ? `\n* Code: ${p.githubUrl}` : ''}`).join('\n\n')}

## Experience & Activities
${data.experience.map(e => `### ${e.role}${e.organization ? ` - ${e.organization}` : ''}${e.duration ? ` (${e.duration})` : ''}\n${e.responsibilities.map(r => `* ${r}`).join('\n')}`).join('\n\n')}

## Achievements / Learning
${data.achievements.map(a => `* **${a.title}**: ${a.description}${a.date ? ` (${a.date})` : ''}`).join('\n')}
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      <div className="bg-white text-neutral-900 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh] print:max-h-none print:shadow-none print:rounded-none">
        {/* Modal Header Toolbar (hidden on print) */}
        <div className="px-6 py-4 bg-[#0e1017] text-white flex items-center justify-between print:hidden border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight">Curriculum Vitae</span>
            <span className="text-xs text-neutral-400">· {data.hero.name} (Data Science Student)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded transition-colors"
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
            <p className="text-sm font-semibold text-neutral-700 mt-1">
              {data.hero.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-neutral-600 mt-3">
              <span>{data.hero.email}</span>
              <span aria-hidden="true">·</span>
              <span>{data.hero.location}</span>
              <span aria-hidden="true">·</span>
              <span>github.com/khushi3307</span>
              <span aria-hidden="true">·</span>
              <span>linkedin.com/in/khushi-vishwakarma-a11470384</span>
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
                    <span>{edu.degree}</span>
                    <span className="font-normal text-neutral-600 text-xs">{edu.duration}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-neutral-700">
                    <span>{edu.institution}</span>
                    {edu.score && <span className="font-semibold">{edu.score}</span>}
                  </div>
                  {edu.coursework && (
                    <p className="text-xs text-neutral-600 mt-1">
                      <span className="font-medium text-neutral-700">Core Coursework:</span>{' '}
                      {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          {data.certifications && data.certifications.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-3">
                Certification
              </h2>
              <div className="space-y-2">
                {data.certifications.map((cert) => (
                  <div key={cert.id} className="text-xs">
                    <div className="flex justify-between items-baseline font-bold text-neutral-900 text-sm">
                      <span>{cert.name}</span>
                      <span className="font-normal text-neutral-600 text-xs">{cert.date}</span>
                    </div>
                    <div className="text-neutral-700">
                      <span>{cert.issuer}</span>
                      {cert.credentialUrl && (
                        <span className="text-neutral-500 ml-2">· Verified Credential</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-3">
              Skills & Foundations
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-800">
              <p>
                <span className="font-bold text-neutral-900">Programming:</span>{' '}
                {data.skills.programming.join(', ')}
              </p>
              {data.skills.computerScience && (
                <p>
                  <span className="font-bold text-neutral-900">Computer Science:</span>{' '}
                  {data.skills.computerScience.join(', ')}
                </p>
              )}
              {data.skills.dataAndProductivity && (
                <p>
                  <span className="font-bold text-neutral-900">Data & Productivity:</span>{' '}
                  {data.skills.dataAndProductivity.join(', ')}
                </p>
              )}
              <p>
                <span className="font-bold text-neutral-900">Tools:</span>{' '}
                {data.skills.tools.join(', ')}
              </p>
              <p>
                <span className="font-bold text-neutral-900">Currently Exploring:</span>{' '}
                {data.skills.currentlyExploring.join(', ')}
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-3">
              Projects & Hands-On Work
            </h2>
            <div className="space-y-4">
              {data.projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-neutral-900 text-sm">
                    <span>
                      {proj.name}
                      {proj.subtitle && (
                        <span className="font-normal text-neutral-600 text-xs ml-1.5">
                          · {proj.subtitle}
                        </span>
                      )}
                    </span>
                    <span className="font-normal text-neutral-500 text-xs">
                      {proj.technologies.join(', ')}
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

          {/* Experience & Activities */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-3">
              Experience & Activities
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between items-baseline font-bold text-neutral-900 text-sm">
                    <span>
                      {exp.role}{exp.organization ? ` · ${exp.organization}` : ''}
                    </span>
                    {exp.duration && (
                      <span className="font-normal text-neutral-500 text-xs">{exp.duration}</span>
                    )}
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

          {/* Achievements / Learning */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-800 border-b border-neutral-300 pb-1 mb-2">
              Achievements / Learning
            </h2>
            <ul className="space-y-1.5 text-xs text-neutral-700">
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
  );
};
