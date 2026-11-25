import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { NAV_LINKS, PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [monogram, setMonogram] = useState(PORTFOLIO_DATA.monogram);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileDoc = await getDoc(doc(db, 'portfolio', 'profile'));

        if (profileDoc.exists()) {
          const name = profileDoc.data().name;

          if (name) {
            const initials = name
              .trim()
              .split(/\s+/)
              .map((part: string) => part[0])
              .join('')
              .toUpperCase();

            setMonogram(initials);
          }
        }
      } catch (error) {
        console.error('Error fetching navbar profile:', error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#F3F1EA]/95 backdrop-blur-md border-b border-[#171717]/15'
          : 'bg-[#F3F1EA] border-b border-[#D6D1C4]'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-6 lg:gap-8">

        <a
          href="#top"
          className="font-display text-2xl tracking-wider text-[#171717] hover:text-[#D52E2E] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D52E2E]"
          aria-label="Ashwani Chand Katoch — Back to top"
        >
          {monogram}
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-6 2xl:gap-8"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono-label text-[11px] font-medium tracking-[0.14em] text-[#171717]/80 hover:text-[#D52E2E] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#D52E2E] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D52E2E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono-label text-[11px] font-semibold tracking-[0.12em] text-[#171717] hover:text-[#D52E2E] border-b border-[#171717] hover:border-[#D52E2E] pb-0.5 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D52E2E]"
          >
            <span>AVAILABLE FOR OPPORTUNITIES</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D52E2E]" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 border border-[#171717]/20 text-[#171717] hover:border-[#D52E2E] hover:text-[#D52E2E] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D52E2E]"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden bg-[#F3F1EA] border-t border-[#D6D1C4] px-5 sm:px-8 py-6"
        >
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col divide-y divide-[#D6D1C4]"
          >
            {NAV_LINKS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 flex items-center justify-between font-mono-label text-xs tracking-[0.14em] text-[#171717] hover:text-[#D52E2E] transition-colors min-h-[44px]"
              >
                <span>{item.label}</span>
                <span className="text-[#D52E2E] text-[10px]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-5 mt-2 border-t border-[#171717]/15">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 font-mono-label text-xs font-semibold tracking-[0.12em] text-[#D52E2E] min-h-[44px]"
            >
              <span>AVAILABLE FOR OPPORTUNITIES</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}