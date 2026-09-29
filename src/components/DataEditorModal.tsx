import React, { useState } from 'react';
import { PortfolioData, initialPortfolioData } from '../data/portfolioData';
import { X, Save, RotateCcw, Check, AlertCircle } from 'lucide-react';

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
    }, 800);
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex justify-center p-3 sm:p-6">
      <div className="bg-[#12141d] border border-neutral-800 text-neutral-200 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0a0b10] text-white flex items-center justify-between border-b border-neutral-800">
          <div>
            <h2 className="text-base font-bold tracking-tight">Portfolio Data Editor</h2>
            <p className="text-xs text-neutral-400">
              Update information or paste custom JSON
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded p-0.5 text-xs">
              <button
                onClick={() => {
                  setActiveTab('visual');
                  setJsonText(JSON.stringify(formData, null, 2));
                }}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeTab === 'visual' ? 'bg-violet-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
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
                  activeTab === 'json' ? 'bg-violet-600 text-white font-semibold' : 'text-neutral-400 hover:text-white'
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
            <div className="p-3 bg-violet-950/60 border border-violet-700/50 text-violet-300 rounded-lg flex items-center gap-2 text-xs font-semibold">
              <Check className="w-4 h-4 text-violet-400" />
              <span>Portfolio updated successfully!</span>
            </div>
          )}

          {activeTab === 'json' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-neutral-400">
                <span>Direct JSON data model:</span>
                <span className="font-mono text-violet-400">portfolioData.json</span>
              </div>
              {jsonError && (
                <div className="p-2.5 bg-red-950/50 border border-red-800/60 text-red-300 rounded text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{jsonError}</span>
                </div>
              )}
              <textarea
                value={jsonText}
                onChange={handleJsonChange}
                rows={18}
                className="w-full font-mono text-xs p-3.5 bg-[#0a0b10] text-neutral-200 rounded-lg border border-neutral-800 focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Hero details */}
              <div className="space-y-3 border-b border-neutral-800 pb-5">
                <h3 className="font-bold text-white text-sm">Hero & Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.hero.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, name: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-neutral-800 text-white rounded focus:ring-1 focus:ring-violet-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Headline</label>
                    <input
                      type="text"
                      value={formData.hero.headline}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, headline: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-neutral-800 text-white rounded focus:ring-1 focus:ring-violet-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.hero.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, email: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-neutral-800 text-white rounded focus:ring-1 focus:ring-violet-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Location</label>
                    <input
                      type="text"
                      value={formData.hero.location}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hero: { ...formData.hero, location: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-neutral-800 text-white rounded focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">Introduction</label>
                  <textarea
                    rows={2}
                    value={formData.hero.introduction}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hero: { ...formData.hero, introduction: e.target.value },
                      })
                    }
                    className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-neutral-800 text-white rounded focus:ring-1 focus:ring-violet-500"
                  />
                </div>
              </div>

              {/* Skills breakdown */}
              <div className="space-y-3 border-b border-neutral-800 pb-5">
                <h3 className="font-bold text-white text-sm">Skills (Comma-separated)</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Programming</label>
                    <input
                      type="text"
                      value={formData.skills.programming.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: {
                            ...formData.skills,
                            programming: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-neutral-800 text-white rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Core Foundations</label>
                    <input
                      type="text"
                      value={formData.skills.core.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: {
                            ...formData.skills,
                            core: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-neutral-800 text-white rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Tools</label>
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
                      className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-neutral-800 text-white rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-violet-300 mb-1">Currently Exploring</label>
                    <input
                      type="text"
                      value={formData.skills.currentlyExploring.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: {
                            ...formData.skills,
                            currentlyExploring: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs bg-[#0a0b10] border border-violet-800/60 text-violet-300 rounded focus:border-violet-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#0a0b10] border-t border-neutral-800 flex items-center justify-between">
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-red-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Original</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded hover:bg-neutral-800 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={activeTab === 'json' ? handleJsonSave : handleVisualSave}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded transition-colors"
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
