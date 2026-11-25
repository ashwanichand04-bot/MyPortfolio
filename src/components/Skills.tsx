import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type SkillGroup = {
  id: string;
  title: string;
  number: string;
  items: string[];
};

export default function Skills() {
  const [categories, setCategories] = useState<SkillGroup[]>(
    PORTFOLIO_DATA.skills.categories
  );

  useEffect(() => {
    async function loadSkills() {
      try {
        const snapshot = await getDocs(collection(db, 'skills'));

        if (snapshot.empty) return;

        const grouped: Record<string, string[]> = {};

        snapshot.docs.forEach((document) => {
          const data = document.data();
          const name = String(data.name ?? '').trim();
          const category = String(data.category ?? 'Other').trim();

          if (!name) return;

          if (!grouped[category]) {
            grouped[category] = [];
          }

          if (!grouped[category].includes(name)) {
            grouped[category].push(name);
          }
        });

        const firebaseCategories: SkillGroup[] = Object.entries(grouped).map(
          ([title, items], index) => ({
            id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            title,
            number: String(index + 1).padStart(2, '0'),
            items,
          })
        );

        setCategories(firebaseCategories);
      } catch (error) {
        console.error('Skills loading failed:', error);
      }
    }

    loadSkills();
  }, []);

  return (
    <section id="skills" className="border-b border-[#171717] bg-[#EAE6DC]/55">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#171717]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-4 h-[2px] bg-[#D52E2E]" aria-hidden="true" />

              <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] uppercase font-semibold">
                {PORTFOLIO_DATA.skills.sectionLabel}
              </span>
            </div>

            <h2 className="font-display uppercase leading-[0.88] tracking-tight text-[clamp(3.25rem,6.5vw,5.75rem)] text-[#171717]">
              <span className="block">TOOLS &</span>
              <span className="block text-[#D52E2E]">SKILLS.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#171717]">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`py-10 sm:py-12 ${
                idx % 2 === 0
                  ? 'md:pr-10 md:border-r md:border-[#171717]/25'
                  : 'md:pl-10'
              } ${
                idx < 2 ? 'border-b border-[#171717]/25' : ''
              } flex flex-col justify-between gap-6`}
            >
              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] font-semibold">
                    {cat.number}
                  </span>

                  <span className="font-mono-label text-[10px] tracking-[0.16em] text-[#52504A] uppercase">
                    DISCIPLINE
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-[#171717]">
                  {cat.title}
                </h3>

                {cat.items.length > 0 ? (
                  <ul className="pt-2 space-y-2.5 border-t border-[#D6D1C4]">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 py-1 text-[15px] text-[#171717]"
                      >
                        <span className="w-1.5 h-1.5 bg-[#D52E2E] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="pt-3 border-t border-[#D6D1C4] font-mono-label text-xs text-[#52504A]">
                    No skills added yet.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}