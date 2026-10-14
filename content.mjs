export const site = {
  url: "https://angelstrizioli-portfolio.vercel.app",
  name: "Angel E. Strizioli",
  title: "Senior Full-Stack & Applied AI Engineer",
  location: "Buenos Aires, Argentina",
  email: "astrizioli@gmail.com",
  linkedin: "https://www.linkedin.com/in/angelstrizioli",
  github: "https://github.com/AngelStrizioli",
  summary:
    "8+ years building web, mobile and backend systems across retail, fintech and media/live streaming. I lead teams as tech lead and principal engineer, setting architecture and standards and mentoring engineers, and I work AI-first with Claude Code and GitHub Copilot in daily production delivery. Currently pursuing a Master's in Artificial Intelligence at UDESA.",
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
    tracks: [{ type: "Full-time", role: "Junior Software Developer", period: "Jan 2019 – Jul 2019" }],
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
    tracks: [{ type: "Full-time", role: "Junior Full-Stack Developer", period: "Nov 2019 – Nov 2020" }],
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
    tracks: [{ type: "Full-time", role: "Frontend Developer", period: "Nov 2020 – Jul 2021" }],
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
    tracks: [{ type: "Full-time", role: "Software Developer", period: "Jul 2021 – Jan 2022" }],
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
    tracks: [{ type: "Full-time", role: "Senior React Native Developer", period: "Jan 2022 – Aug 2022" }],
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
    period: "Aug 2022 – May 2025",
    logo: "wibond.webp",
    tracks: [{ type: "Full-time", role: "Senior Software Engineer / React Native Lead", period: "Aug 2022 – Oct 2024" }, { type: "Consulting", role: "Senior Software Engineer, integration project", period: "Feb 2025 – May 2025" }],
    stack: ["React Native", "Go", "PostgreSQL", "AWS", "Next.js", "Angular", "Redux Saga"],
    lead: ["Led the core React Native team, owning delivery of the wallet and BNPL apps.", "Owned technical discovery and product architecture across partner integrations.", "Aligned multi-regional stakeholders on requirements, encryption security and incremental rollout plans."],
    points: [
      "Delivered a virtual wallet and a Buy Now Pay Later app for Android and iOS with React Native, Redux and Sagas.",
      "Integrated Metamap, TAPI, TiendaNube, Shopify and Mobbex.",
      "Built Go microservices on AWS, including a production service integrating PayWay (payments) and Koin (fraud prevention).",
      "Built a transactional payment portal (Next.js, Tailwind) and a modular customer portal (Angular).",
      "Designed and automated the test layers (Jest, React Native Testing Library).",
    ],
  },
  {
    id: "tenet",
    company: "Tenet Software",
    role: "React Native Team Lead",
    period: "Aug 2023 – Sep 2024",
    logo: null,
    mono: "TS",
    tracks: [{ type: "Consulting", role: "React Native Team Lead", period: "Aug 2023 – Sep 2024" }],
    stack: ["React Native", "Roku", "Fire OS", "Apple TV", "Android TV"],
    lead: ["Led the team end to end, from delivery planning to global app-store distribution.", "Coordinated release pipelines and store-compliance submissions."],
    points: [
      "Delivered media streaming apps for Apple TV, Android TV, Roku, Amazon Fire TV (Fire OS), Android and iOS.",
      "Built a Roku streaming app from scratch.",
      "Automated release and app-store compliance pipelines.",
    ],
  },
  {
    id: "dk",
    company: "Diamond Kinetics",
    role: "Senior Software Engineer, then AI Engineering Consultant",
    period: "Oct 2024 – Present",
    logo: "diamond-kinetics.webp",
    tracks: [{ type: "Full-time", role: "Senior Software Engineer", period: "Oct 2024 – Mar 2026" }, { type: "Consulting", role: "Software AI Engineering Consultant", period: "Mar 2026 – Present" }],
    stack: ["React", "React Native", "Python", "Firebase", "PostgreSQL"],
    lead: ["Mentored engineering peers and worked closely with product and design owners.", "Improved developer tooling and test automation coverage for the team."],
    points: [
      "Full-stack work on the SidelineHD live streaming platform across web and mobile.",
      "Focused on reliability, live-data performance and creator experience.",
      "As a consultant, building automated workflows with Claude and delivering production full-stack and mobile features with AI-assisted engineering practices.",
    ],
  },
  {
    id: "fravega",
    company: "Frávega",
    role: "Principal Full-Stack Engineer",
    period: "Aug 2025 – Present",
    logo: "fravega.webp",
    tracks: [{ type: "Consulting", role: "React Native Tech Lead", period: "Aug 2025 – Jan 2026" }, { type: "Full-time", role: "Principal Full-Stack Engineer", period: "Mar 2026 – Present" }],
    stack: ["Next.js", "Go", "PostgreSQL", "React Native", "Tailwind", "AI-assisted dev"],
    lead: ["As tech lead, set the technical direction of a cross-functional squad: architecture, standards, delivery timelines and mentoring.", "As principal, define architecture layers and engineering delivery standards across the division.", "Introduced Claude Code and GitHub Copilot as the team's core AI toolkit and mentor engineers hands-on."],
    points: [
      "Principal engineer on a large-scale web platform refactor with Next.js and Go.",
      "Built a new React Native app for sellers: shared mobile modules, a Tailwind design system and BFF services.",
      "Use AI-assisted development to speed up refactoring and raise test coverage.",
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
    items: ["Go", "Node.js", "Python", "REST / BFF", "Event-driven", "AWS", "Firebase", "PostgreSQL", "SQL", "MongoDB", "GitLab CI", "Argo CD", "Datadog"],
  },
  {
    group: "Leadership",
    items: ["Tech lead", "Principal engineer", "Team leadership", "Mentoring & coaching", "Architecture standards", "Technical planning", "Backlog prioritization", "Agile (Scrum / Kanban)", "Stakeholder communication"],
  },
];

export const education = [
  { name: "UDESA", detail: "Master's in Artificial Intelligence (in progress): machine learning and intelligent data-driven systems." },
  { name: "UADE", detail: "Informatics Engineering (2017 – 2023); Computer Analyst and Software Development Technician (2017 – 2022)." },
];

export const languages = "Spanish (native) · English (advanced, Cambridge FCE C1) · Italian (intermediate) · Portuguese (basic) · German (basic)";
