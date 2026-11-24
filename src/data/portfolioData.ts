export interface EducationItem {
  id: string;
  indexLabel: string;
  degree: string;
  institution: string;
  timeline?: string;
}

export interface LeadershipItem {
  id: string;
  number: string;
  role: string;
  summary: string;
  activitiesLabel?: string;
  activities?: string;
}

export interface CertificationItem {
  id: string;
  course: string;
  institution: string;
  status: 'RUNNING';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  visualType: 'fdi-gdp' | 'irfc-wacc' | 'unibrand' | 'guppy-moms';
  focusAreas: string[];
  methodologyNote: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  items: string[];
}

export const PORTFOLIO_DATA = {
  monogram: 'ACK',
  fullName: 'Ashwani Chand Katoch',
  year: '2026',
  locationTag: 'INDIA · BUSINESS & MANAGEMENT',
  heroTopLeft: 'PERSONAL PORTFOLIO / 2026',
  heroSubtitle: 'MBA STUDENT · CURIOUS BY DESIGN',
  heroIntro:
    'I’m Ashwani Chand Katoch, an MBA student with a keen interest in finance, business analytics and marketing. I enjoy analysing business problems, exploring data and turning ideas into practical insights. I’m continuously developing my skills through academic projects and hands-on learning, with a focus on growth and professional development.',
  heroMotto: 'THINK CLEARLY. QUESTION DEEPLY. CREATE VALUE.',
  tickerText: 'FINANCE ✳ BUSINESS ANALYTICS ✳ STRATEGY ✳ RESEARCH ✳ MANAGEMENT ✳',
  about: {
    sectionNumber: '01 / ABOUT',
    microLabel: 'A LITTLE CONTEXT',
    leadStatement:
      'I believe meaningful business decisions begin with curiosity, critical thinking and a clear understanding of data.',
    body:
      'I am currently pursuing an MBA at Lovely Professional University, with interests in finance, business analytics and marketing. Through academic projects and practical assignments, I am developing my ability to analyse business challenges, interpret information and present meaningful insights. I enjoy exploring new tools, learning from real-world business problems and continuously improving my professional skills.',
  },
  education: {
    sectionLabel: 'ACADEMIC BACKGROUND',
    heading: 'MY EDUCATION.',
    intro:
      'My academic journey reflects my interest in business, management, technology and continuous learning.',
    items: [
      {
        id: 'mba',
        indexLabel: '01 / CURRENTLY PURSUING',
        degree: 'Master of Business Administration (MBA)',
        institution: 'Lovely Professional University, Phagwara',
        timeline: 'Present',
      },
      {
        id: 'bba',
        indexLabel: '02 / COMPLETED – 2026',
        degree: 'Bachelor of Business Administration (BBA)',
        institution: 'Sri Sai University, Palampur',
        timeline: '2026',
      },
      {
        id: 'class-xii',
        indexLabel: '03 / SECONDARY EDUCATION',
        degree: 'Class XII',
        institution: 'Kendriya Vidyalaya, Palampur',
      },
      {
        id: 'class-x',
        indexLabel: '04 / SECONDARY EDUCATION',
        degree: 'Class X',
        institution: 'Kendriya Vidyalaya, Palampur',
      },
    ] as EducationItem[],
  },
  leadership: {
    sectionLabel: 'LEADERSHIP & EXPERIENCE',
    intro:
      'My university journey has given me opportunities to take leadership responsibilities, coordinate events and contribute to meaningful community initiatives.',
    items: [
      {
        id: 'rotaract',
        number: '01',
        role: 'VICE PRESIDENT – ROTARACT CLUB',
        summary:
          'Served as Vice President during my Bachelor’s degree, contributing to the planning and organisation of community service initiatives.',
        activitiesLabel: 'ACTIVITIES',
        activities:
          'Food donation drives, clothing distribution, blood donation camps and cleanliness drives.',
      },
      {
        id: 'business-club',
        number: '02',
        role: 'EVENT COORDINATOR – UNIVERSITY BUSINESS CLUB',
        summary:
          'Served as Event Coordinator during the third year of my Bachelor’s degree, supporting the coordination and organisation of university business club events and activities.',
      },
    ] as LeadershipItem[],
  },
  certifications: {
    sectionLabel: 'PROFESSIONAL LEARNING',
    items: [
      {
        id: 'excel-bi-tableau',
        course: 'Microsoft Excel, Power BI and Tableau – From Basics to Advanced',
        institution: 'Lovely Professional University',
        status: 'RUNNING',
      },
    ] as CertificationItem[],
  },
  projects: {
    sectionLabel: '02 / SELECTED WORK',
    subtitle:
      'A selection of projects that reflect my interest in finance, research and data-led decision-making.',
    items: [
      {
        id: 'fdi-gdp',
        number: '01',
        title: 'FDI & GDP RELATIONSHIP',
        category: 'RESEARCH · ECONOMICS',
        description:
          'Trend analysis of foreign direct investment inflows and their relationship with GDP growth and gross capital formation in India.',
        visualType: 'fdi-gdp',
        focusAreas: [
          'Macroeconomic Trend Analysis',
          'Foreign Direct Investment Inflows',
          'GDP Growth & Gross Capital Formation',
        ],
        methodologyNote:
          'Academic economics research examining multi-year macroeconomic indicators in the Indian context to understand structural relationships between capital inflows and domestic output.',
      },
      {
        id: 'irfc-wacc',
        number: '02',
        title: 'IRFC COST OF CAPITAL',
        category: 'FINANCE · ANALYSIS',
        description:
          'An academic study of cost of debt, cost of equity and weighted average cost of capital using financial data.',
        visualType: 'irfc-wacc',
        focusAreas: [
          'Cost of Debt Estimation',
          'Cost of Equity Evaluation',
          'Weighted Average Cost of Capital (WACC)',
        ],
        methodologyNote:
          'Structured corporate finance study applying standard valuation and capital-structure principles to evaluate financing costs using reported financial data.',
      },
      {
        id: 'unibrand',
        number: '03',
        title: 'UNIBRAND TO BRAND',
        category: 'MARKETING · BRANDING',
        description:
          'A product branding project focused on transforming an unbranded product into a marketable brand through brand identity, positioning and marketing strategies.',
        visualType: 'unibrand',
        focusAreas: [
          'Brand Identity Architecture',
          'Market Positioning Strategy',
          'Go-to-Market Communication',
        ],
        methodologyNote:
          'End-to-end brand creation exercise translating an undifferentiated offering into a cohesive commercial brand proposition with clear audience positioning.',
      },
      {
        id: 'guppy-moms',
        number: '04',
        title: 'GUPPY MOMS AFFILIATE MARKETING',
        category: 'MARKETING · AFFILIATE',
        description:
          'An affiliate marketing project focused on promoting Guppy Moms through brand communication and promotional marketing activities.',
        visualType: 'guppy-moms',
        focusAreas: [
          'Affiliate Marketing Execution',
          'Brand Communication',
          'Promotional Campaign Activities',
        ],
        methodologyNote:
          'Hands-on promotional marketing initiative centered on audience outreach, persuasive brand messaging, and structured affiliate campaign coordination.',
      },
    ] as ProjectItem[],
  },
  skills: {
    sectionLabel: 'CAPABILITIES',
    categories: [
      {
        id: 'finance-business',
        number: '01',
        title: 'FINANCE & BUSINESS',
        items: [],
      },
      {
        id: 'business-analytics',
        number: '02',
        title: 'BUSINESS ANALYTICS',
        items: [],
      },
      {
        id: 'marketing-research',
        number: '03',
        title: 'MARKETING & RESEARCH',
        items: [],
      },
      {
        id: 'technical-digital',
        number: '04',
        title: 'TECHNICAL & DIGITAL TOOLS',
        items: [],
      },
    ] as SkillCategory[],
  },
  contact: {
    supportingText:
      'Open to professional opportunities, collaborations and meaningful conversations.',
    emailPlaceholder: 'Email address (update in portfolio settings)',
    linkedinPlaceholder: 'LinkedIn profile URL (update in portfolio settings)',
  },
};

export const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'QUALIFICATIONS', href: '#qualifications' },
  { label: 'LEADERSHIP', href: '#leadership' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'SELECTED WORK', href: '#selected-work' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
];
