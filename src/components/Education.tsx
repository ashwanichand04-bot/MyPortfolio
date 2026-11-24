import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="qualifications" className="border-b border-[#171717] bg-[#EAE6DC]/55">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#171717]">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-4 h-[2px] bg-[#D52E2E]" aria-hidden="true" />
              <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] uppercase font-semibold">
                {PORTFOLIO_DATA.education.sectionLabel}
              </span>
            </div>
            <h2 className="font-display uppercase leading-[0.9] tracking-tight text-[clamp(3rem,6vw,5.25rem)] text-[#171717]">
              {PORTFOLIO_DATA.education.heading}
            </h2>
          </div>

          <div className="lg:col-span-6 lg:flex lg:items-end lg:justify-end">
            <p className="text-[15px] sm:text-base leading-[1.7] text-[#171717]/80 max-w-md">
              {PORTFOLIO_DATA.education.intro}
            </p>
          </div>
        </div>

        {/* Structured Editorial Timeline (No Bulky Cards) */}
        <div className="divide-y divide-[#171717]/25 border-b border-[#171717]">
          {PORTFOLIO_DATA.education.items.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group"
            >
              {/* Index & Status Label */}
              <div className="md:col-span-4 flex items-baseline gap-4">
                <span className="font-display text-3xl sm:text-4xl text-[#171717]/30 group-hover:text-[#D52E2E] transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="font-mono-label text-[11px] tracking-[0.16em] text-[#D52E2E] font-semibold uppercase">
                  {item.indexLabel}
                </span>
              </div>

              {/* Degree & Institution */}
              <div className="md:col-span-6 space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717]">
                  {item.degree}
                </h3>
                <p className="text-[15px] text-[#52504A] font-medium">
                  {item.institution}
                </p>
              </div>

              {/* Timeline / Year */}
              <div className="md:col-span-2 md:text-right">
                {item.timeline && (
                  <span className="font-mono-label text-xs tracking-[0.14em] uppercase text-[#171717] font-semibold">
                    {item.timeline}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
