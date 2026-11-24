import { useState, FormEvent } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
    setError(null);
  };

  return (
    <section id="contact" className="border-b border-[#171717]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Statement & Placeholders */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-4 h-[2px] bg-[#D52E2E]" aria-hidden="true" />
                <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] uppercase font-semibold">
                  GET IN TOUCH
                </span>
              </div>

              <h2 className="font-display uppercase leading-[0.88] tracking-tight text-[clamp(3.5rem,8vw,6.75rem)] text-[#171717] mb-6">
                <span className="block">LET’S</span>
                <span className="block text-[#D52E2E]">CONNECT.</span>
              </h2>

              <p className="text-lg sm:text-xl leading-[1.55] text-[#171717]/85 max-w-md">
                {PORTFOLIO_DATA.contact.supportingText}
              </p>
            </div>

            {/* Direct Contact Placeholders (No invented URLs or details) */}
            <div className="pt-8 border-t border-[#171717] space-y-6 max-w-md">
              <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-[#D6D1C4]">
                <div>
                  <span className="block font-mono-label text-[10px] tracking-[0.18em] text-[#D52E2E] uppercase font-semibold mb-1">
                    EMAIL
                  </span>
                  <span className="text-sm sm:text-[15px] text-[#52504A]">
                    {PORTFOLIO_DATA.contact.emailPlaceholder}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#171717]/40 shrink-0" aria-hidden="true" />
              </div>

              <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-[#D6D1C4]">
                <div>
                  <span className="block font-mono-label text-[10px] tracking-[0.18em] text-[#D52E2E] uppercase font-semibold mb-1">
                    LINKEDIN
                  </span>
                  <span className="text-sm sm:text-[15px] text-[#52504A]">
                    {PORTFOLIO_DATA.contact.linkedinPlaceholder}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#171717]/40 shrink-0" aria-hidden="true" />
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#EAE6DC]/65 border border-[#171717] p-6 sm:p-10"
          >
            {submitted ? (
              <div className="py-10 space-y-6">
                <div className="w-12 h-12 bg-[#D52E2E] text-[#F3F1EA] flex items-center justify-center">
                  <Check className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <span className="font-mono-label text-xs tracking-[0.16em] text-[#D52E2E] uppercase font-semibold">
                    MESSAGE PREPARED
                  </span>
                  <h3 className="font-display text-3xl uppercase tracking-wide text-[#171717]">
                    THANK YOU, {form.name.toUpperCase()}.
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-[#171717]/80">
                    Your note has been recorded in this session. Update the email address in the
                    portfolio configuration to route live inquiries directly to your inbox.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-3 border border-[#171717] font-mono-label text-xs tracking-[0.14em] uppercase text-[#171717] hover:bg-[#171717] hover:text-[#F3F1EA] transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#D6D1C4]">
                  <span className="font-mono-label text-xs tracking-[0.16em] text-[#171717] uppercase font-semibold">
                    DIRECT INQUIRY
                  </span>
                  <span className="font-mono-label text-[10px] tracking-[0.14em] text-[#52504A] uppercase">
                    REQUIRED FIELDS *
                  </span>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="p-3.5 border border-[#D52E2E] bg-[#D52E2E]/10 text-sm text-[#171717]"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono-label text-[11px] tracking-[0.14em] uppercase text-[#171717] mb-2"
                    >
                      NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-[#F3F1EA] border border-[#171717]/30 px-4 py-3 text-[15px] text-[#171717] placeholder:text-[#52504A]/65 focus:outline-none focus:border-[#D52E2E]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono-label text-[11px] tracking-[0.14em] uppercase text-[#171717] mb-2"
                    >
                      EMAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full bg-[#F3F1EA] border border-[#171717]/30 px-4 py-3 text-[15px] text-[#171717] placeholder:text-[#52504A]/65 focus:outline-none focus:border-[#D52E2E]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono-label text-[11px] tracking-[0.14em] uppercase text-[#171717] mb-2"
                  >
                    SUBJECT
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Opportunity, collaboration, or conversation"
                    className="w-full bg-[#F3F1EA] border border-[#171717]/30 px-4 py-3 text-[15px] text-[#171717] placeholder:text-[#52504A]/65 focus:outline-none focus:border-[#D52E2E]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono-label text-[11px] tracking-[0.14em] uppercase text-[#171717] mb-2"
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message..."
                    className="w-full bg-[#F3F1EA] border border-[#171717]/30 px-4 py-3 text-[15px] text-[#171717] placeholder:text-[#52504A]/65 focus:outline-none focus:border-[#D52E2E] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#171717] hover:bg-[#D52E2E] text-[#F3F1EA] font-mono-label text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-200 inline-flex items-center justify-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D52E2E]"
                >
                  <span>SEND MESSAGE</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
