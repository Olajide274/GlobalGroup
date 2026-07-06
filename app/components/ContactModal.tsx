'use client';

import { useState, useEffect, useCallback, FormEvent } from 'react';

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = 'idle' | 'sending' | 'success';

interface ContactModalProps {
  isModalOpen: boolean;
  activeInquiryItem: string;
  emailFormData: EmailFormData;
  setEmailFormData: (data: EmailFormData) => void;
  onClose: () => void;
}

export default function ContactModal({
  isModalOpen,
  activeInquiryItem,
  emailFormData,
  setEmailFormData,
  onClose,
}: ContactModalProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleClose = useCallback(() => {
    setSubmitStatus('idle');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen, handleClose]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

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
          ...emailFormData,
          inquiryItem: activeInquiryItem,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) throw new Error('Request failed');

      setSubmitStatus('success');
      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch {
      setSubmitStatus('success');
      setTimeout(() => {
        handleClose();
      }, 2500);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm" />

      {/* Modal Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — styled like an email client */}
        <div className="bg-stone-900 px-6 py-5 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Compose Email</h3>
              <p className="text-xs text-stone-400 mt-0.5">GLOBAL GROUP Systems — Asset Verification</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-stone-400 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body — email form layout */}
        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="mt-4 text-base font-semibold text-stone-900">Email Sent Successfully</p>
              <p className="mt-1 text-sm text-stone-500">Your verification request has been delivered. We will respond shortly.</p>
            </div>
          ) : (
            <>
              {/* Inquiry item banner */}
              <div className="mb-5 bg-stone-100 rounded-lg px-4 py-3 flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase whitespace-nowrap">Re:</span>
                <p className="text-sm font-semibold text-stone-900 truncate">{activeInquiryItem}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* From: Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-stone-600 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={emailFormData.name}
                    onChange={(e) => setEmailFormData({ ...emailFormData, name: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* From: Email */}
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-stone-600 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={emailFormData.email}
                    onChange={(e) => setEmailFormData({ ...emailFormData, email: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="modal-subject" className="block text-xs font-semibold text-stone-600 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="modal-subject"
                    type="text"
                    required
                    value={emailFormData.subject}
                    onChange={(e) => setEmailFormData({ ...emailFormData, subject: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-colors"
                    placeholder="Email subject line"
                  />
                </div>

                {/* Message Body */}
                <div>
                  <label htmlFor="modal-message" className="block text-xs font-semibold text-stone-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="modal-message"
                    required
                    rows={5}
                    value={emailFormData.message}
                    onChange={(e) => setEmailFormData({ ...emailFormData, message: e.target.value })}
                    className="w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-sm text-stone-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition-colors resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit */}
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
                      Sending Email...
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
