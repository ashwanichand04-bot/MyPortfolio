import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type Certification = {
  id: string;
  institution: string;
  course: string;
  status: string;
};

export default function Certifications() {
  const [items, setItems] = useState<Certification[]>(
    PORTFOLIO_DATA.certifications.items.map((cert) => ({
      id: cert.id,
      institution: cert.institution,
      course: cert.course,
      status: cert.status,
    }))
  );

  useEffect(() => {
    async function loadCertifications() {
      try {
        const snapshot = await getDocs(collection(db, 'certifications'));

        if (snapshot.empty) return;

        const firebaseItems = snapshot.docs.map((document) => {
          const data = document.data();

          return {
            id: document.id,
            institution: String(
              data.institution ?? 'Learning Programme'
            ),
            course: String(data.title ?? data.course ?? 'Untitled Programme'),
            status: String(data.status ?? 'In Progress'),
          };
        });

        setItems(firebaseItems);
      } catch (error) {
        console.error('Certifications loading failed:', error);
      }
    }

    loadCertifications();
  }, []);

  return (
    <section id="certifications" className="border-b border-[#171717] bg-[#171717] text-[#F3F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-4 h-[2px] bg-[#D52E2E]" aria-hidden="true" />

              <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] uppercase font-semibold">
                {PORTFOLIO_DATA.certifications.sectionLabel}
              </span>
            </div>

            <h2 className="font-display uppercase leading-[0.9] tracking-tight text-[clamp(3rem,6vw,5.25rem)] text-[#F3F1EA]">
              <span className="block">ALWAYS</span>
              <span className="block text-[#D52E2E]">LEARNING.</span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            {items.map((cert, idx) => (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-t border-b border-[#F3F1EA]/25 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="font-mono-label text-[11px] tracking-[0.16em] text-[#F3F1EA]/65 uppercase">
                    {cert.institution}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold leading-[1.35] text-[#F3F1EA]">
                    {cert.course}
                  </h3>
                </div>

                <div className="shrink-0 sm:text-right flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1.5 border border-[#D52E2E] px-4 py-2.5 bg-[#D52E2E]/10">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 bg-[#D52E2E]" aria-hidden="true" />

                    <span className="font-mono-label text-xs tracking-[0.18em] text-[#D52E2E] font-semibold uppercase">
                      STATUS: {cert.status}
                    </span>
                  </div>

                  <span className="font-mono-label text-[10px] tracking-[0.12em] text-[#F3F1EA]/70 uppercase">
                    {cert.status.toLowerCase().includes('progress')
                      ? 'IN PROGRESS'
                      : cert.status.toUpperCase()}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}