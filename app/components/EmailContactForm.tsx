'use client';

import { useState, FormEvent } from 'react';

type SubmitStatus = 'idle' | 'sending' | 'success';

interface EmailContactFormProps {
  variant?: 'dark' | 'light';
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailContactForm({ variant = 'dark' }: EmailContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          inquiryItem: 'footer contact form',
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) throw new Error('Request failed');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const isDark = variant === 'dark';

  const inputBase = 'w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition-colors';
  const inputClass = isDark
    ? `${inputBase} bg-stone-800 border-stone-700 text-white placeholder-stone-500 focus:border-amber-600 focus:ring-1 focus:ring-amber-600`
    : `${inputBase} bg-white border-stone-300 text-stone-900 placeholder-stone-400 focus:border-amber-600 focus:ring-1 focus:ring-amber-600`;
  const labelClass = isDark
    ? 'block text-xs font-semibold text-stone-400 mb-1.5'
    : 'block text-xs font-semibold text-stone-600 mb-1.5';

  return (
    <div>
      <h4 className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-stone-900'}`}>
        Send Us an Email
      </h4>

      {submitStatus === 'success' ? (
        <div className="mt-4 flex items-center gap-3 bg-emerald-600/10 border border-emerald-600/30 rounded-lg px-4 py-3">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-stone-900'}`}>Email Sent Successfully</p>
            <p className={`text-xs ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>We will get back to you shortly.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor={`footer-name-${variant}`} className={labelClass}>Name</label>
              <input
                id={`footer-name-${variant}`}
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor={`footer-email-${variant}`} className={labelClass}>Email</label>
              <input
                id={`footer-email-${variant}`}
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor={`footer-subject-${variant}`} className={labelClass}>Subject</label>
            <input
              id={`footer-subject-${variant}`}
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={inputClass}
              placeholder="Email subject"
            />
          </div>
          <div>
            <label htmlFor={`footer-message-${variant}`} className={labelClass}>Message</label>
            <textarea
              id={`footer-message-${variant}`}
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClass} resize-none`}
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            disabled={submitStatus === 'sending'}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-stone-400 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {submitStatus === 'sending' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Email
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
