// Language-independent data. Translatable text lives in locales/*.mjs.
export const site = {
  url: "https://angelstrizioli-portfolio.vercel.app",
  name: "Angel E. Strizioli",
  email: "astrizioli@gmail.com",
  linkedin: "https://www.linkedin.com/in/angelstrizioli",
  github: "https://github.com/AngelStrizioli",
};

// Chronological, oldest first. The map renders newest at the top.
// tracks: type "full" | "consult", from/to as "YYYY-MM" (to: null = present)
export const levels = [
  { id: "maketechnology", company: "MakeTechnology", mono: "MT", stack: ["React", "Vue.js"], tracks: [{ type: "full", from: "2019-01", to: "2019-07" }] },
  { id: "fca", company: "FCA (Stellantis)", mono: "FCA", stack: ["React", "React Native", "Node.js"], tracks: [{ type: "full", from: "2019-11", to: "2020-11" }] },
  { id: "openpass", company: "Open Pass", mono: "OP", stack: ["React Native", "React", "Flutter", "Redux Saga"], tracks: [{ type: "full", from: "2020-11", to: "2021-07" }] },
  { id: "telecom", company: "Telecom Argentina", logo: "telecom.webp", stack: ["React Native", "React", "Node.js", "Jest"], tracks: [{ type: "full", from: "2021-07", to: "2022-01" }] },
  { id: "leniolabs", company: "Leniolabs", mono: "LL", stack: ["React Native", "Redux Saga", "Jest"], tracks: [{ type: "full", from: "2022-01", to: "2022-08" }] },
  {
    id: "wibond",
    company: "Wibond",
    logo: "wibond.webp",
    stack: ["React Native", "Go", "PostgreSQL", "AWS", "Next.js", "Angular", "Redux Saga"],
    tracks: [
      { type: "full", from: "2022-08", to: "2024-10" },
      { type: "consult", from: "2025-02", to: "2025-05" },
    ],
  },
  { id: "tenet", company: "Tenet Software", mono: "TS", stack: ["React Native", "Roku", "Fire OS", "Apple TV", "Android TV"], tracks: [{ type: "consult", from: "2023-08", to: "2024-09" }] },
  {
    id: "dk",
    company: "Diamond Kinetics",
    logo: "diamond-kinetics.webp",
    stack: ["React", "React Native", "Python", "Firebase", "PostgreSQL"],
    tracks: [
      { type: "full", from: "2024-10", to: "2026-03" },
      { type: "consult", from: "2026-03", to: null },
    ],
  },
  {
    id: "fravega",
    company: "Frávega",
    logo: "fravega.webp",
    current: true,
    stack: ["Next.js", "Go", "PostgreSQL", "React Native", "Tailwind", "AI-assisted dev"],
    tracks: [
      { type: "consult", from: "2025-08", to: "2026-01" },
      { type: "full", from: "2026-03", to: null },
    ],
  },
];

// Personal projects: live demos only (repos are private).
export const projects = [
  { id: "globalscout", name: "GlobalScout", url: "https://globalscout-chi.vercel.app", stack: ["TypeScript", "PostgreSQL", "pgvector", "Supabase", "Playwright"] },
  { id: "playerrec", name: "playerrec", url: "https://playerrec-demo.vercel.app", stack: ["Python", "Self-supervised learning", "Embeddings", "Uncertainty"] },
  { id: "recommender", name: "Movie & series recommender", url: "https://ingsoft-recomendador-web.vercel.app", stack: ["Hybrid ML model", "Python", "CI/CD", "Vercel", "Fly.io"] },
  { id: "felix", name: "Felix Sandwichería", url: "https://felix-sandwicheria.onrender.com/", stack: ["React", "Node.js", "Supabase", "PostgreSQL", "WhatsApp (Baileys)", "Render"] },
];
