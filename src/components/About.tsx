import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="border-b border-[#171717]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        {/* Section Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D6D1C4] mb-12 lg:mb-16">
          <span className="font-mono-label text-xs tracking-[0.16em] text-[#171717] uppercase font-semibold">
            {PORTFOLIO_DATA.about.sectionNumber}
          </span>
          <span className="font-mono-label text-[11px] tracking-[0.18em] text-[#D52E2E] uppercase font-medium">
            {PORTFOLIO_DATA.about.microLabel}
          </span>
        </div>

        {/* Asymmetric Editorial Two-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h2 className="font-display uppercase leading-[0.9] tracking-tight text-[clamp(3.25rem,7vw,6.25rem)] text-[#171717]">
              <span className="block">CURIOUS</span>
              <span className="block">ABOUT HOW</span>
              <span className="block text-[#D52E2E]">BUSINESS</span>
              <span className="block">WORKS.</span>
            </h2>
          </motion.div>

          {/* Right Column: Editorial Prose & Minimal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:pt-3 flex flex-col justify-between gap-8"
          >
            <div className="space-y-6 max-w-xl">
              <p className="text-xl sm:text-2xl font-semibold leading-[1.4] tracking-tight text-[#171717]">
                {PORTFOLIO_DATA.about.leadStatement}
              </p>

              <div className="w-12 h-[2px] bg-[#D52E2E]" aria-hidden="true" />

              <p className="text-[15px] sm:text-base leading-[1.75] text-[#171717]/80">
                {PORTFOLIO_DATA.about.body}
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold tracking-[0.16em] uppercase text-[#171717] hover:text-[#D52E2E] border-b border-[#171717] hover:border-[#D52E2E] pb-1.5 transition-colors group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D52E2E]"
              >
                <span>LET’S CONNECT</span>
                <ArrowUpRight
                  className="w-4 h-4 text-[#D52E2E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
