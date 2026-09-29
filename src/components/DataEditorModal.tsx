import React, { useState } from 'react';
import { PortfolioData, initialPortfolioData } from '../data/portfolioData';
import { X, Save, RotateCcw, Copy, Check, Download, AlertCircle } from 'lucide-react';

interface DataEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
}

export const DataEditorModal: React.FC<DataEditorModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'visual' | 'json'>('visual');
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [jsonText, setJsonText] = useState<string>(() => JSON.stringify(data, null, 2));
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setJsonText(val);
    try {
      const parsed = JSON.parse(val);
      setFormData(parsed);
      setJsonError(null);
    } catch (err: any) {
      setJsonError(err.message || 'Invalid JSON syntax');
    }
  };

  const handleVisualSave = () => {
    onSave(formData);
    setJsonText(JSON.stringify(formData, null, 2));
    triggerSuccess();
  };

  const handleJsonSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setFormData(parsed);
      onSave(parsed);
      setJsonError(null);
      triggerSuccess();
    } catch (err: any) {
      setJsonError('Please fix JSON syntax errors before saving.');
    }
  };

  const triggerSuccess = () => {
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all portfolio details back to default values?')) {
      setFormData(initialPortfolioData);
      setJsonText(JSON.stringify(initialPortfolioData, null, 2));
      onSave(initialPortfolioData);
      triggerSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center p-3 sm:p-6">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-neutral-900 text-white flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold tracking-tight">Portfolio Resume Data Editor</h2>
            <p className="text-xs text-neutral-400">
              Customize or paste exact information from your resume
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-neutral-800 rounded p-0.5 text-xs">
              <button
                onClick={() => {
                  setActiveTab('visual');
                  setJsonText(JSON.stringify(formData, null, 2));
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'visual' ? 'bg-white text-neutral-900 font-semibold' : 'text-neutral-300'
                }`}
              >
                Form Fields
              </button>
              <button
                onClick={() => {
                  setActiveTab('json');
                  setJsonText(JSON.stringify(formData, null, 2));
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'json' ? 'bg-white text-neutral-900 font-semibold' : 'text-neutral-300'
                }`}
              >
                Raw JSON
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
          {savedSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg flex items-center gap-2 text-xs font-semibold">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Portfolio updated successfully!</span>
            </div>
          )}

          {activeTab === 'json' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>Paste or edit your complete portfolio JSON payload below:</span>
                <span className="font-mono">portfolioData.json</span>
              </div>
              {jsonError && (
                <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 rounded text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{jsonError}</span>
                </div>
              )}
              <textarea
                value={jsonText}
                onChange={handleJsonChange}
                rows={18}
                className="w-full font-mono text-xs p-3.5 bg-neutral-900 text-neutral-100 rounded-lg border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Hero details */}
              <div className="space-y-3 border-b border-neutral-200 pb-5">
                <h3 className="font-bold text-neutral-900 text-sm">Hero & Contact Info</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.hero.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, name: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Headline</label>
                    <input
                      type="text"
                      value={formData.hero.headline}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, headline: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.hero.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, email: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Location</label>
                    <input
                      type="text"
                      value={formData.hero.location}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, location: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">GitHub URL</label>
                    <input
                      type="text"
                      value={formData.hero.github}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, github: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">LinkedIn URL</label>
                    <input
                      type="text"
                      value={formData.hero.linkedin}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, linkedin: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-1">Kaggle URL</label>
                    <input
                      type="text"
                      value={formData.hero.kaggle}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, kaggle: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Introduction</label>
                  <textarea
                    rows={3}
                    value={formData.hero.introduction}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: { ...formData.hero, introduction: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded focus:ring-1 focus:ring-neutral-900"
                  />
                </div>
              </div>

              {/* Skills summary input */}
              <div className="space-y-3 border-b border-neutral-200 pb-5">
                <h3 className="font-bold text-neutral-900 text-sm">Key Skills (Comma-separated)</h3>
                <div className="space-y-2.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-0.5">Languages</label>
                    <input
                      type="text"
                      value={formData.skills.languages.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: {
                            ...formData.skills,
                            languages: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-0.5">Frameworks</label>
                    <input
                      type="text"
                      value={formData.skills.frameworks.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: {
                            ...formData.skills,
                            frameworks: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-0.5">AI / ML</label>
                    <input
                      type="text"
                      value={formData.skills.aiMl.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: {
                            ...formData.skills,
                            aiMl: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-0.5">Databases</label>
                    <input
                      type="text"
                      value={formData.skills.databases.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: {
                            ...formData.skills,
                            databases: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-600 mb-0.5">Tools</label>
                    <input
                      type="text"
                      value={formData.skills.tools.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: {
                            ...formData.skills,
                            tools: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs border border-neutral-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-neutral-100 border-t border-neutral-200 flex items-center justify-between">
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 hover:text-red-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded hover:bg-neutral-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={activeTab === 'json' ? handleJsonSave : handleVisualSave}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
