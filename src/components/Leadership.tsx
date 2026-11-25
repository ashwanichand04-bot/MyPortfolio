import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type LeadershipItem = {
  id: string;
  number: string;
  role: string;
  summary: string;
  activities?: string;
  activitiesLabel?: string;
};

export default function Leadership() {
  const [items, setItems] = useState<LeadershipItem[]>(
    PORTFOLIO_DATA.leadership.items
  );

  useEffect(() => {
    const fetchLeadership = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'leadership'));

        if (!snapshot.empty) {
          const firestoreItems: LeadershipItem[] = snapshot.docs.map(
            (doc, index) => {
              const data = doc.data();

              return {
                id: doc.id,
                number: String(index + 1).padStart(2, '0'),
                role: data.role ?? 'Leadership Role',
                summary: data.organization ?? '',
                activities: data.description ?? '',
                activitiesLabel: 'RESPONSIBILITIES & ACTIVITIES',
              };
            }
          );

          setItems(firestoreItems);
        }
      } catch (error) {
        console.error('Error fetching leadership:', error);
      }
    };

    fetchLeadership();
  }, []);

  return (
    <section id="leadership" className="border-b border-[#171717]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-4 h-[2px] bg-[#D52E2E]" aria-hidden="true" />
              <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] uppercase font-semibold">
                {PORTFOLIO_DATA.leadership.sectionLabel}
              </span>
            </div>

            <h2 className="font-display uppercase leading-[0.9] tracking-tight text-[clamp(3rem,6vw,5.5rem)] text-[#171717] mb-6">
              <span className="block">BEYOND</span>
              <span className="block text-[#D52E2E]">ACADEMICS.</span>
            </h2>

            <p className="text-[15px] sm:text-base leading-[1.7] text-[#171717]/80 max-w-md">
              {PORTFOLIO_DATA.leadership.intro}
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[#171717] divide-y divide-[#171717]/25">
            {items.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-10 first:pt-8 last:pb-2 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start"
              >
                <div className="sm:col-span-3">
                  <span className="font-display text-5xl sm:text-6xl leading-none text-[#171717]">
                    {item.number}
                  </span>
                  <div className="mt-2 font-mono-label text-[10px] tracking-[0.18em] text-[#D52E2E] font-semibold uppercase">
                    LEADERSHIP ROLE
                  </div>
                </div>

                <div className="sm:col-span-9 space-y-4">
                  <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-[#171717]">
                    {item.role}
                  </h3>

                  <p className="text-[15px] sm:text-base leading-[1.7] text-[#171717]/85">
                    {item.summary}
                  </p>

                  {item.activities && (
                    <div className="pt-4 border-t border-[#D6D1C4]">
                      <span className="block font-mono-label text-[10px] tracking-[0.18em] text-[#D52E2E] font-semibold uppercase mb-1.5">
                        {item.activitiesLabel ?? 'ACTIVITIES'}
                      </span>
                      <p className="text-sm sm:text-[15px] leading-[1.65] text-[#52504A]">
                        {item.activities}
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}