import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { NAV_LINKS, PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const [fullName, setFullName] = useState(PORTFOLIO_DATA.fullName);
  const [location, setLocation] = useState(PORTFOLIO_DATA.locationTag);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileDoc = await getDoc(doc(db, 'portfolio', 'profile'));

        if (profileDoc.exists()) {
          const data = profileDoc.data();

          if (data.name) setFullName(data.name);
          if (data.location) setLocation(data.location);
        }
      } catch (error) {
        console.error('Error fetching footer profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <footer className="bg-[#171717] text-[#F3F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#F3F1EA]/20">

          <div className="lg:col-span-6 space-y-6">
            <a
              href="#top"
              className="inline-block font-display text-5xl sm:text-6xl tracking-wider text-[#F3F1EA] hover:text-[#D52E2E] transition-colors"
            >
              {PORTFOLIO_DATA.monogram}
            </a>

            <div className="font-display text-2xl sm:text-3xl leading-[1.05] uppercase tracking-wide text-[#F3F1EA]/90">
              <span className="block">THINK CLEARLY.</span>
              <span className="block">QUESTION DEEPLY.</span>
              <span className="block text-[#D52E2E]">CREATE VALUE.</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between gap-8 lg:items-end">
            <div className="font-mono-label text-xs tracking-[0.18em] text-[#F3F1EA]/70 uppercase">
              {PORTFOLIO_DATA.heroTopLeft}
            </div>

            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono-label text-[11px] tracking-[0.14em] text-[#F3F1EA]/80 hover:text-[#D52E2E] transition-colors uppercase whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono-label text-[11px] tracking-[0.14em] text-[#F3F1EA]/65 uppercase">
            © {PORTFOLIO_DATA.year} {fullName.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>

          <span className="font-mono-label text-[11px] tracking-[0.14em] text-[#F3F1EA]/65 uppercase">
            {location}
          </span>
        </div>
      </div>
    </footer>
  );
}