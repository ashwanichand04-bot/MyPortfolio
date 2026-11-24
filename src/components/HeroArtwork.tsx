import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function HeroArtwork() {
  return (
    <div className="relative w-full h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] bg-[#EAE6DC] border border-[#171717] overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none group">
      {/* Architectural Diagonal Line Pattern Layer */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="hero-diagonal-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="28" stroke="#171717" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect x="52%" y="0" width="48%" height="58%" fill="url(#hero-diagonal-grid)" />
      </svg>

      {/* Hairline Grid Crosshairs */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 h-[1px] bg-[#171717]/15 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 w-[1px] bg-[#171717]/15 pointer-events-none"
      />

      {/* Top Poster Metadata Bar */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono-label text-[10px] tracking-[0.18em] text-[#171717]/70 uppercase">
            FOLIO EDITION · 01
          </span>
          <span className="font-mono-label text-[10px] tracking-[0.18em] text-[#D52E2E] font-semibold uppercase">
            FINANCE / ANALYTICS / STRATEGY
          </span>
        </div>

        {/* Geometric Red Square Accent */}
        <div
          aria-hidden="true"
          className="w-8 h-8 bg-[#D52E2E] transition-transform duration-300 group-hover:rotate-90"
        />
      </div>

      {/* Central Geometric + Oversized ACK Typography Composition */}
      <div className="relative z-10 my-auto py-8 flex items-center justify-center">
        {/* Background Geometric Ring & Architectural Planes */}
        <svg
          viewBox="0 0 360 280"
          className="w-full max-w-[380px] h-auto"
          role="img"
          aria-label="Abstract geometric editorial poster composition featuring the ACK monogram"
        >
          {/* Outer architectural frame */}
          <rect
            x="16"
            y="16"
            width="328"
            height="248"
            fill="none"
            stroke="#171717"
            strokeWidth="1.25"
          />

          {/* Crimson geometric block */}
          <rect x="218" y="28" width="114" height="114" fill="#D52E2E" />

          {/* Diagonal architectural slash */}
          <line x1="16" y1="264" x2="218" y2="28" stroke="#171717" strokeWidth="1.5" />
          <line x1="64" y1="264" x2="266" y2="28" stroke="#171717" strokeWidth="0.75" strokeDasharray="4 4" />

          {/* Crisp Circle Intersection */}
          <circle
            cx="132"
            cy="144"
            r="74"
            fill="#F3F1EA"
            stroke="#171717"
            strokeWidth="1.5"
          />
          <circle cx="132" cy="144" r="14" fill="#D52E2E" />

          {/* Minimal Bar / Equilibrium Graphic */}
          <rect x="218" y="160" width="22" height="84" fill="#171717" />
          <rect x="248" y="184" width="22" height="60" fill="#171717" />
          <rect x="278" y="148" width="22" height="96" fill="#D52E2E" />
          <rect x="308" y="202" width="24" height="42" fill="none" stroke="#171717" strokeWidth="1.25" />

          {/* Oversized ACK Typography */}
          <text
            x="28"
            y="188"
            fill="#171717"
            style={{
              fontFamily: 'Anton, Impact, sans-serif',
              fontSize: '124px',
              letterSpacing: '0.02em',
            }}
          >
            {PORTFOLIO_DATA.monogram}
          </text>
        </svg>
      </div>

      {/* Bottom Poster Legend */}
      <div className="relative z-10 pt-4 border-t border-[#171717] flex items-center justify-between gap-4">
        <span className="font-mono-label text-[10px] tracking-[0.16em] text-[#171717] uppercase">
          ASHWANI CHAND KATOCH
        </span>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-[2px] bg-[#D52E2E]" aria-hidden="true" />
          <span className="font-mono-label text-[10px] tracking-[0.16em] text-[#171717]/75 uppercase">
            PORTFOLIO ARCHIVE · {PORTFOLIO_DATA.year}
          </span>
        </div>
      </div>
    </div>
  );
}
