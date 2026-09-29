import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface ContactProps {
  hero: PortfolioData['hero'];
}

export const Contact: React.FC<ContactProps> = ({ hero }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(hero.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate short submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formState.subject || `Inquiry for ${hero.name}`);
    const body = encodeURIComponent(
      `Hello ${hero.name},\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
    );
    window.location.href = `mailto:${hero.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            08. Inquiries & Collaboration
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Contact
          </h2>
          <div className="h-1 w-12 bg-neutral-900 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Copy Box */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-neutral-600 leading-relaxed">
              I am open to discussions about software engineering internships, technical collaborations,
              or questions about my projects. Feel free to send a message or connect directly.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2 p-2.5 bg-white border border-neutral-200 rounded-lg">
                <span className="font-mono text-xs sm:text-sm text-neutral-800 truncate select-all">
                  {hero.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Online Profiles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {hero.linkedin && (
                  <a
                    href={hero.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
                {hero.github && (
                  <a
                    href={hero.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800 transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
                {hero.kaggle && (
                  <a
                    href={hero.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800 transition-colors"
                  >
                    <span>Kaggle</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">Message Ready</h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Thank you! Would you like to launch your local email client to transmit this message directly to {hero.email}?
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleMailtoDirect}
                      className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg"
                    >
                      Open Email App
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-lg"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Internship inquiry / Project discussion"
                      className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your note here..."
                      className="w-full px-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-neutral-500">
                      Response within 24–48 hours
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-all disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
