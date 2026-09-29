import React, { useState } from 'react';
import { SkillsGroup } from '../data/portfolioData';
import { Code2, Layers, Cpu, Database, Wrench } from 'lucide-react';

interface SkillsProps {
  skills: SkillsGroup;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      items: skills.languages,
      description: 'Languages used for algorithmic problem solving and software development.',
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Layers,
      items: skills.frameworks,
      description: 'Modern front-end and back-end web frameworks.',
    },
    {
      id: 'aiml',
      title: 'AI / Machine Learning',
      icon: Cpu,
      items: skills.aiMl,
      description: 'Data manipulation, statistical analysis, and machine learning toolkits.',
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      icon: Database,
      items: skills.databases,
      description: 'Relational databases and data modeling tools.',
    },
    {
      id: 'tools',
      title: 'Developer Tools & Platforms',
      icon: Wrench,
      items: skills.tools,
      description: 'Version control, dev environments, API testing, and deployment platforms.',
    },
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              02. Technical Toolkit
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Skills & Proficiencies
            </h2>
            <div className="h-1 w-12 bg-neutral-900 mt-3 rounded-full"></div>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Skills
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-neutral-200/80 flex items-center justify-center text-neutral-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900">
                        {category.title}
                      </h3>
                      <span className="text-xs text-neutral-500">
                        {category.items.length} technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-500 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Clean unboxed skill list adhering to Zero-Pill rule */}
                  <ul className="space-y-2 border-t border-neutral-200/60 pt-4">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between text-sm font-medium text-neutral-800 py-0.5"
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                          <span>{item}</span>
                        </span>
                        <span className="text-xs font-mono text-neutral-400">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
