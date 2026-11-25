/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [heroSubtitle, setHeroSubtitle] = useState(PORTFOLIO_DATA.heroSubtitle);
  const [locationTag, setLocationTag] = useState(PORTFOLIO_DATA.locationTag);
  const [heroIntro, setHeroIntro] = useState(PORTFOLIO_DATA.heroIntro);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileDoc = await getDoc(doc(db, 'portfolio', 'profile'));

        if (profileDoc.exists()) {
          const data = profileDoc.data();

          if (data.role) {
            setHeroSubtitle(data.role);
          }

          if (data.location) {
            setLocationTag(data.location);
          }

          if (data.heroIntro) {
            setHeroIntro(data.heroIntro);
          }
        }
      } catch (error) {
        console.error('Error fetching hero profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const tickerItems = Array.from(
    { length: 6 },
    () => PORTFOLIO_DATA.tickerText
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#171717]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-10 lg:pb-12">

        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#D6D1C4]">
          <span className="font-mono-label text-[11px] tracking-[0.16em] text-[#171717]/80 uppercase">
            {PORTFOLIO_DATA.heroTopLeft}
          </span>

          <span className="font-mono-label text-[11px] tracking-[0.16em] text-[#171717]/80 uppercase">
            {locationTag}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-8 lg:pt-10 items-center">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-block w-5 h-[2px] bg-[#D52E2E]"
                  aria-hidden="true"
                />

                <span className="font-mono-label text-xs tracking-[0.18em] text-[#171717] uppercase font-medium">
                  {heroSubtitle}
                </span>
              </div>

              <h1 className="font-display uppercase leading-[0.88] tracking-tight text-[clamp(4.25rem,11vw,8.75rem)] mb-8">
                <span className="block text-[#171717]">
                  BUSINESS
                </span>

                <span className="block text-outline-ink">
                  WITH
                </span>

                <span className="block text-[#D52E2E]">
                  INSIGHT.
                </span>
              </h1>
            </div>

            <div className="max-w-xl pt-6 border-t border-[#D6D1C4] flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <p className="text-[15px] sm:text-base leading-[1.7] text-[#171717]/85">
                {heroIntro}
              </p>

              <a
                href="#about"
                aria-label="Scroll down to About section"
                className="shrink-0 w-16 h-16 rounded-full border border-[#171717] hover:border-[#D52E2E] hover:bg-[#D52E2E] text-[#171717] hover:text-[#F3F1EA] flex items-center justify-center transition-colors duration-200 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D52E2E]"
              >
                <ArrowDown
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[480px] mx-auto">

              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#D52E2E]" />

              <div className="relative overflow-hidden border border-[#171717] bg-[#E5E0D5]">
                <img
                  src={`${import.meta.env.BASE_URL}images/ashwani-profile.jpg`}
                  alt="Ashwani Chand Katoch"
                  className="w-full aspect-[4/5] object-cover object-center"
                />
              </div>

              <div className="absolute -bottom-4 -right-3 bg-[#D52E2E] text-[#F3F1EA] px-5 py-3">
                <span className="font-mono-label text-xs tracking-widest uppercase">
                  ACK / 2026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 pt-5 border-t border-[#171717] flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono-label text-xs sm:text-[13px] tracking-[0.18em] font-semibold text-[#171717] uppercase">
            {PORTFOLIO_DATA.heroMotto}
          </p>

          <span className="font-mono-label text-[11px] tracking-[0.14em] text-[#52504A] uppercase">
            SCROLL TO EXPLORE ↓
          </span>
        </div>
      </div>

      <div
        className="w-full bg-[#D52E2E] text-[#F3F1EA] border-t border-[#171717] py-2.5 overflow-hidden marquee-wrapper"
        aria-label="Core Areas of Interest"
      >
        <div className="animate-marquee">
          {tickerItems.map((text, index) => (
            <span
              key={index}
              className="font-mono-label text-[11px] sm:text-xs tracking-[0.22em] font-medium uppercase whitespace-nowrap px-4"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}