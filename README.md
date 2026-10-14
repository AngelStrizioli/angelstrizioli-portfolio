# Angel E. Strizioli: Portfolio

**Live site: https://angelstrizioli-portfolio.vercel.app/**
Languages: [English](https://angelstrizioli-portfolio.vercel.app/) · [Español](https://angelstrizioli-portfolio.vercel.app/es/) · [Português](https://angelstrizioli-portfolio.vercel.app/pt/)
Plain-text CV: [EN](https://angelstrizioli-portfolio.vercel.app/cv.html) · [ES](https://angelstrizioli-portfolio.vercel.app/es/cv.html) · [PT](https://angelstrizioli-portfolio.vercel.app/pt/cv.html) · PDF: [EN](https://angelstrizioli-portfolio.vercel.app/assets/Angel_Strizioli_CV_en.pdf) · [ES](https://angelstrizioli-portfolio.vercel.app/assets/Angel_Strizioli_CV_es.pdf) · [PT](https://angelstrizioli-portfolio.vercel.app/assets/Angel_Strizioli_CV_pt.pdf)

An interactive career quest map: each company is a level, tap it to clear it and read the role, leadership scope and stack. Static, vanilla JS, mobile-first, around 22 KB of HTML.

## Resume

**Senior Full-Stack & Applied AI Engineer** · Buenos Aires, Argentina
[astrizioli@gmail.com](mailto:astrizioli@gmail.com) · [LinkedIn](https://www.linkedin.com/in/angelstrizioli) · [GitHub](https://github.com/AngelStrizioli)

8+ years building web, mobile and backend systems across retail, fintech and media/live streaming. Tech lead and principal engineer: sets architecture and standards, mentors engineers. Works AI-first with Claude Code and GitHub Copilot in daily production delivery. Pursuing a Master's in Artificial Intelligence at UDESA.

### Experience

| Company | Role | Type | Dates |
| --- | --- | --- | --- |
| Frávega | Principal Full-Stack Engineer | Full-time | Mar 2026 – Present |
| Frávega | React Native Tech Lead | Consulting | Aug 2025 – Jan 2026 |
| Diamond Kinetics | Software AI Engineering Consultant | Consulting | Mar 2026 – Present |
| Diamond Kinetics | Senior Software Engineer | Full-time | Oct 2024 – Mar 2026 |
| Wibond | Senior Software Engineer, integration project | Consulting | Feb 2025 – May 2025 |
| Wibond | Senior Software Engineer / React Native Lead | Full-time | Aug 2022 – Oct 2024 |
| Tenet Software | React Native Team Lead | Consulting | Aug 2023 – Sep 2024 |
| Leniolabs | Senior React Native Developer | Full-time | Jan 2022 – Aug 2022 |
| Telecom Argentina | Software Developer | Full-time | Jul 2021 – Jan 2022 |
| Open Pass | Frontend Developer | Full-time | Nov 2020 – Jul 2021 |
| FCA (Stellantis) | Junior Full-Stack Developer | Full-time | Nov 2019 – Nov 2020 |
| MakeTechnology | Junior Software Developer | Full-time | Jan 2019 – Jul 2019 |

### Skills

- **Applied AI:** Claude Code, GitHub Copilot, AI-assisted refactoring, automated testing
- **Frontend & mobile:** React, React Native, Next.js, TypeScript, Redux, Tailwind CSS, Flutter, Vue.js, Angular
- **Backend & infra:** Go, Node.js, Python, PostgreSQL, SQL, MongoDB, REST / BFF, event-driven, AWS, Firebase, GitLab CI, Argo CD, Datadog
- **Leadership:** tech lead, team leadership, mentoring, architecture standards, technical planning, Agile

### Personal projects (live demos)

- **[GlobalScout](https://globalscout-chi.vercel.app)**: multi-sport scouting platform (TypeScript, Postgres + pgvector, Supabase, Playwright).
- **[playerrec](https://playerrec-demo.vercel.app)**: football player recommendation robust to small samples and missing data; UDESA Master's in AI, Machine Learning II.
- **[Movie & series recommender](https://ingsoft-recomendador-web.vercel.app)**: hybrid ML recommendations with explanations; UDESA Software Engineering.
- **[Felix Sandwichería](https://felix-sandwicheria.onrender.com/)**: restaurant CRM with a WhatsApp ordering bot and a live kitchen dashboard (staff login).

### Education & languages

- **UDESA:** Master's in Artificial Intelligence (in progress)
- **UADE:** Informatics Engineering (2017 – 2023)
- Spanish (native) · English (advanced, C1) · Italian (intermediate) · Portuguese, German (basic)

## How it works

- `content.mjs` holds the shared data (companies, dates, projects); `locales/{en,es,pt}.mjs` hold all the text; `src/` holds the styles and the small script.
- `node build.mjs` generates `index.html` and `cv.html` for each language (`/`, `/es/`, `/pt/`) plus `sitemap.xml` (with `hreflang`), `robots.txt` and `llms.txt`. There are no dependencies.
- The language switcher is plain links to separate static pages, so every language is crawlable without JS.
- All CV content is real HTML, so crawlers and AI parsers read it without running JS. The game is progressive enhancement.

```sh
npm run build   # regenerate the static files
npm run pdf     # rebuild + regenerate the 3 PDFs in assets/ (needs Google Chrome)
python3 -m http.server 4173   # preview locally
vercel deploy --prod          # deploy
```
