export const site = {
  url: "https://angelstrizioli-portfolio.vercel.app",
  name: "Angel E. Strizioli",
  title: "Senior Full-Stack & Applied AI Engineer",
  location: "Buenos Aires, Argentina",
  email: "astrizioli@gmail.com",
  linkedin: "https://www.linkedin.com/in/angelstrizioli",
  github: "https://github.com/AngelStrizioli",
  summary:
    "8+ years building web, mobile and backend systems across retail, fintech and media/live streaming. I work AI-first: Claude Code and GitHub Copilot are part of my daily production delivery. Currently pursuing a Master's in Artificial Intelligence at UDESA.",
};

// Chronological, oldest first. The map renders newest at the top.
export const levels = [
  {
    id: "maketechnology",
    company: "MakeTechnology",
    role: "Junior Software Developer",
    period: "Jan 2019 – Jul 2019",
    logo: null,
    mono: "MT",
    stack: ["React", "Vue.js"],
    points: [
      "Owned client-facing frontend development with React.js and Vue.js.",
      "Maintained the main company web properties and custom UI component libraries.",
    ],
  },
  {
    id: "fca",
    company: "FCA (Stellantis)",
    role: "Junior Full-Stack Developer",
    period: "Nov 2019 – Nov 2020",
    logo: null,
    mono: "FCA",
    stack: ["React", "React Native", "Node.js"],
    points: [
      "Selected for the internal innovation team of Fiat Chrysler Automobiles (now Stellantis).",
      "Built experimental React, React Native and Node.js solutions for product infrastructure and user-facing performance problems.",
    ],
  },
  {
    id: "openpass",
    company: "Open Pass",
    role: "Frontend Developer",
    period: "Nov 2020 – Jul 2021",
    logo: null,
    mono: "OP",
    stack: ["React Native", "React", "Flutter", "Redux Saga"],
    points: [
      "Built white-label enterprise virtual wallet solutions with React Native, React and Flutter.",
      "Improved codebase modularity and quality through testing architecture and detailed code reviews.",
    ],
  },
  {
    id: "telecom",
    company: "Telecom Argentina",
    role: "Software Developer",
    period: "Jul 2021 – Jan 2022",
    logo: "telecom.webp",
    stack: ["React Native", "React", "Node.js", "Jest"],
    points: [
      "Contributed to the PersonalPay virtual wallet for Android and iOS.",
      "Wrote automated unit tests with Jest; partnered with UI/UX and QA to secure production quality.",
    ],
  },
  {
    id: "leniolabs",
    company: "Leniolabs",
    role: "Senior React Native Developer",
    period: "Jan 2022 – Aug 2022",
    logo: null,
    mono: "LL",
    stack: ["React Native", "Redux Saga", "Jest"],
    points: [
      "Developed a highly regulated loan origination app for the U.S. market (Ellie Mae client).",
      "Wrote compliance-ready unit tests and worked across backend, engineering and regulatory compliance teams.",
    ],
  },
  {
    id: "wibond",
    company: "Wibond",
    role: "Senior Software Engineer / React Native Lead",
    period: "Aug 2022 – Oct 2024 · Integration project Feb – May 2025",
    logo: "wibond.webp",
    stack: ["React Native", "Go", "AWS", "Next.js", "Angular", "Redux Saga"],
    points: [
      "Led the core React Native team that delivered a virtual wallet and a Buy Now Pay Later app for Android and iOS.",
      "Owned technical discovery and product architecture; integrated Metamap, TAPI, TiendaNube, Shopify and Mobbex.",
      "Built Go microservices on AWS, including a production service integrating PayWay (payments) and Koin (fraud prevention).",
      "Built a transactional payment portal (Next.js, Tailwind) and a modular customer portal (Angular).",
    ],
  },
  {
    id: "tenet",
    company: "Tenet Software",
    role: "React Native Team Lead",
    period: "Aug 2023 – Sep 2024",
    logo: null,
    mono: "TS",
    stack: ["React Native", "Roku", "Apple TV", "Android TV"],
    points: [
      "Led development and global store distribution of media streaming apps for Apple TV, Android TV, Android and iOS.",
      "Built a Roku streaming app from scratch and automated release and store-compliance pipelines.",
    ],
  },
  {
    id: "dk",
    company: "Diamond Kinetics",
    role: "Senior Software Engineer, then Consultant",
    period: "Oct 2024 – Present",
    logo: "diamond-kinetics.webp",
    stack: ["React", "React Native", "Python", "Firebase"],
    points: [
      "Full-stack work on the SidelineHD live streaming platform across web and mobile.",
      "Focused on reliability, live-data performance and creator experience; mentored peers and improved test automation.",
      "Continuing as a consultant, applying AI-assisted engineering practices.",
    ],
  },
  {
    id: "fravega",
    company: "Frávega",
    role: "Principal Full-Stack Engineer",
    period: "Aug 2025 – Present",
    logo: "fravega.webp",
    stack: ["Next.js", "Go", "React Native", "Tailwind", "AI-assisted dev"],
    points: [
      "Principal engineer on a large-scale web platform refactor with Next.js and Go.",
      "Earlier, tech lead of a new React Native app for sellers: architecture, shared mobile modules, design system and BFF services.",
      "Introduced Claude Code and GitHub Copilot as the team's core AI toolkit; define architecture standards and mentor engineers.",
    ],
    current: true,
  },
];

export const skills = [
  {
    group: "Applied AI",
    items: ["Claude Code", "GitHub Copilot", "AI-assisted refactoring", "Automated testing", "Machine learning (UDESA)"],
  },
  {
    group: "Frontend & Mobile",
    items: ["React", "React Native", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Flutter", "Vue.js", "Angular"],
  },
  {
    group: "Backend & Infra",
    items: ["Go", "Node.js", "Python", "REST / BFF", "Event-driven", "AWS", "Firebase", "SQL", "MongoDB", "GitLab CI", "Argo CD", "Datadog"],
  },
  {
    group: "Ways of working",
    items: ["Team leadership", "Mentoring", "Agile", "Architecture", "Stakeholder communication"],
  },
];

export const education = [
  { name: "UDESA", detail: "Master's in Artificial Intelligence (in progress): machine learning and intelligent data-driven systems." },
  { name: "UADE", detail: "Informatics Engineering (2017 – 2023); Computer Analyst and Software Development Technician (2017 – 2022)." },
];

export const languages = "Spanish (native) · English (advanced, Cambridge FCE C1) · Italian (intermediate) · Portuguese (basic) · German (basic)";
