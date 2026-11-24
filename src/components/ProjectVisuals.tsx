import { ProjectItem } from '../data/portfolioData';

interface ProjectVisualProps {
  type: ProjectItem['visualType'];
}

export default function ProjectVisuals({ type }: ProjectVisualProps) {
  if (type === 'fdi-gdp') {
    return (
      <svg
        viewBox="0 0 560 340"
        className="w-full h-full object-cover"
        role="img"
        aria-label="Abstract red financial growth chart with geometric bar elements"
      >
        <rect width="560" height="340" fill="#EAE6DC" />
        {/* Architectural coordinate lines */}
        <g stroke="#171717" strokeOpacity="0.14" strokeWidth="1">
          <line x1="40" y1="68" x2="520" y2="68" />
          <line x1="40" y1="128" x2="520" y2="128" />
          <line x1="40" y1="188" x2="520" y2="188" />
          <line x1="40" y1="248" x2="520" y2="248" />
          <line x1="120" y1="40" x2="120" y2="290" />
          <line x1="240" y1="40" x2="240" y2="290" />
          <line x1="360" y1="40" x2="360" y2="290" />
          <line x1="480" y1="40" x2="480" y2="290" />
        </g>

        {/* Geometric vertical bars */}
        <rect x="64" y="218" width="44" height="62" fill="#171717" />
        <rect x="136" y="192" width="44" height="88" fill="#171717" fillOpacity="0.82" />
        <rect x="208" y="158" width="44" height="122" fill="#D52E2E" fillOpacity="0.75" />
        <rect x="280" y="142" width="44" height="138" fill="#171717" />
        <rect x="352" y="102" width="44" height="178" fill="#D52E2E" />
        <rect x="424" y="74" width="44" height="206" fill="#D52E2E" />

        {/* Baseline axis */}
        <line x1="40" y1="280" x2="520" y2="280" stroke="#171717" strokeWidth="2" />

        {/* Trend trajectory line */}
        <polyline
          points="86,200 158,172 230,136 302,122 374,82 446,52"
          fill="none"
          stroke="#171717"
          strokeWidth="2.5"
        />
        <circle cx="86" cy="200" r="4.5" fill="#F3F1EA" stroke="#171717" strokeWidth="2" />
        <circle cx="230" cy="136" r="4.5" fill="#D52E2E" stroke="#171717" strokeWidth="2" />
        <circle cx="446" cy="52" r="6" fill="#D52E2E" stroke="#171717" strokeWidth="2" />

        {/* Top-left editorial label */}
        <text
          x="40"
          y="42"
          fill="#171717"
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', letterSpacing: '0.16em' }}
        >
          FDI · GDP · CAPITAL FORMATION
        </text>
      </svg>
    );
  }

  if (type === 'irfc-wacc') {
    return (
      <svg
        viewBox="0 0 560 340"
        className="w-full h-full object-cover"
        role="img"
        aria-label="Oversized WACC typography with minimal mathematical and financial graphic elements"
      >
        <rect width="560" height="340" fill="#171717" />

        {/* Subtle geometric architectural lines */}
        <rect x="24" y="24" width="512" height="292" fill="none" stroke="#F3F1EA" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="24" y1="230" x2="536" y2="230" stroke="#F3F1EA" strokeOpacity="0.25" strokeWidth="1" />

        {/* Crimson geometric accent block */}
        <rect x="404" y="24" width="132" height="104" fill="#D52E2E" />
        <circle cx="470" cy="76" r="24" fill="none" stroke="#F3F1EA" strokeWidth="1.5" />

        {/* Oversized WACC Typography */}
        <text
          x="40"
          y="186"
          fill="#F3F1EA"
          style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '138px', letterSpacing: '0.02em' }}
        >
          WACC
        </text>

        {/* Minimal Mathematical & Capital Structure Elements */}
        <text
          x="44"
          y="272"
          fill="#F3F1EA"
          fillOpacity="0.85"
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', letterSpacing: '0.12em' }}
        >
          (E / V) · Ke  +  (D / V) · Kd · (1 − Tc)
        </text>

        <rect x="44" y="288" width="160" height="6" fill="#D52E2E" />
        <rect x="212" y="288" width="96" height="6" fill="#F3F1EA" fillOpacity="0.4" />
      </svg>
    );
  }

  if (type === 'unibrand') {
    return (
      <svg
        viewBox="0 0 560 340"
        className="w-full h-full object-cover"
        role="img"
        aria-label="Creative typography-based brand identity composition for Unibrand to Brand"
      >
        <rect width="560" height="340" fill="#EAE6DC" />

        {/* Left Unbranded Monospace Block */}
        <rect x="32" y="36" width="220" height="268" fill="none" stroke="#171717" strokeWidth="1.25" strokeDasharray="5 5" />
        <text
          x="52"
          y="78"
          fill="#52504A"
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', letterSpacing: '0.16em' }}
        >
          STATE 01 / UNBRANDED
        </text>
        <text
          x="52"
          y="176"
          fill="none"
          stroke="#171717"
          strokeWidth="1.5"
          style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '58px', letterSpacing: '0.02em' }}
        >
          UNI
        </text>
        <text
          x="52"
          y="236"
          fill="none"
          stroke="#171717"
          strokeWidth="1.5"
          style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '58px', letterSpacing: '0.02em' }}
        >
          BRAND
        </text>

        {/* Transformation Vector */}
        <line x1="252" y1="170" x2="308" y2="170" stroke="#D52E2E" strokeWidth="2.5" />
        <polygon points="304,162 320,170 304,178" fill="#D52E2E" />

        {/* Right Branded Identity Block */}
        <rect x="320" y="36" width="208" height="268" fill="#171717" />
        <rect x="320" y="36" width="208" height="12" fill="#D52E2E" />
        <circle cx="424" cy="116" r="34" fill="#D52E2E" />
        <rect x="406" y="98" width="36" height="36" fill="none" stroke="#F3F1EA" strokeWidth="2" />
        <text
          x="348"
          y="222"
          fill="#F3F1EA"
          style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '58px', letterSpacing: '0.04em' }}
        >
          BRAND
        </text>
        <text
          x="350"
          y="272"
          fill="#F3F1EA"
          fillOpacity="0.7"
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', letterSpacing: '0.18em' }}
        >
          IDENTITY · POSITIONING
        </text>
      </svg>
    );
  }

  // guppy-moms
  return (
    <svg
      viewBox="0 0 560 340"
      className="w-full h-full object-cover"
      role="img"
      aria-label="Abstract marketing campaign graphic with typography and geometric shapes for Guppy Moms"
    >
      <rect width="560" height="340" fill="#D52E2E" />

      {/* Ivory Geometric Cutouts */}
      <rect x="28" y="28" width="504" height="284" fill="none" stroke="#F3F1EA" strokeWidth="1.5" />
      <circle cx="430" cy="170" r="96" fill="#F3F1EA" />
      <circle cx="430" cy="170" r="56" fill="#171717" />
      <circle cx="430" cy="170" r="18" fill="#D52E2E" />

      {/* Broadcast / Campaign Geometric Arcs */}
      <path d="M 304 104 A 118 118 0 0 0 304 236" fill="none" stroke="#171717" strokeWidth="3" />
      <path d="M 278 82 A 144 144 0 0 0 278 258" fill="none" stroke="#F3F1EA" strokeWidth="2" />

      {/* Bold Typography */}
      <text
        x="48"
        y="80"
        fill="#F3F1EA"
        style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', letterSpacing: '0.18em' }}
      >
        AFFILIATE CAMPAIGN
      </text>
      <text
        x="46"
        y="174"
        fill="#F3F1EA"
        style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '74px', letterSpacing: '0.02em' }}
      >
        GUPPY
      </text>
      <text
        x="46"
        y="246"
        fill="#171717"
        style={{ fontFamily: 'Anton, Impact, sans-serif', fontSize: '74px', letterSpacing: '0.02em' }}
      >
        MOMS
      </text>
      <text
        x="48"
        y="286"
        fill="#F3F1EA"
        style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', letterSpacing: '0.16em' }}
      >
        BRAND COMMUNICATION · PROMOTION
      </text>
    </svg>
  );
}
