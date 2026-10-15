// Zero-dependency static build.
// content.mjs (shared data) + locales/*.mjs (text) + src/* -> index.html, cv.html (EN),
// es/ and pt/ copies, sitemap.xml, robots.txt, llms.txt
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { site, levels, projects } from "./content.mjs";
import en from "./locales/en.mjs";
import es from "./locales/es.mjs";
import pt from "./locales/pt.mjs";

const locales = [en, es, pt];
const prefix = (L) => (L.code === "en" ? "" : `/${L.code}`);
const indexPath = (L) => `${prefix(L)}/`;
const cvPath = (L) => `${prefix(L)}/cv.html`;
const pdfPath = (L) => `/assets/Angel_Strizioli_CV_${L.code}.pdf`;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const css = readFileSync("src/styles.css", "utf8");
const js = readFileSync("src/app.js", "utf8");
const ordered = [...levels].reverse(); // newest first
const total = ordered.length;

const fmt = (L, ym) => {
  if (!ym) return L.present;
  const [y, m] = ym.split("-");
  return `${L.months[+m - 1]} ${y}`;
};
const range = (L, from, to) => `${fmt(L, from)} – ${fmt(L, to)}`;
const overall = (L, l) => {
  const from = l.tracks.map((t) => t.from).sort()[0];
  const open = l.tracks.some((t) => t.to === null);
  const to = open ? null : l.tracks.map((t) => t.to).sort().at(-1);
  return range(L, from, to);
};
const mixLabel = (L, l) => {
  const types = new Set(l.tracks.map((t) => t.type));
  return types.size > 1 ? L.types.mixed : L.types[l.tracks[0].type];
};

const jsonLd = (L) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: L.site.title,
  description: L.site.summary,
  url: site.url + indexPath(L),
  inLanguage: L.code,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
  sameAs: [site.linkedin, site.github],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad de San Andrés (UDESA)" },
    { "@type": "CollegeOrUniversity", name: "UADE" },
  ],
  worksFor: [
    { "@type": "Organization", name: "Frávega" },
    { "@type": "Organization", name: "Diamond Kinetics" },
  ],
  knowsAbout: [...new Set(L.skills.flatMap((s) => s.items))],
  knowsLanguage: ["es", "en", "it", "pt", "de"],
});

const alternates = (pathFn) =>
  [...locales.map((X) => `<link rel="alternate" hreflang="${X.htmlLang}" href="${site.url}${pathFn(X)}">`), `<link rel="alternate" hreflang="x-default" href="${site.url}${pathFn(en)}">`].join("\n");

const head = (L, title, desc, pathFn) => `<!doctype html>
<html lang="${L.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#0e1116">
<link rel="canonical" href="${site.url}${pathFn(L)}">
${alternates(pathFn)}
<meta property="og:type" content="profile">
<meta property="og:locale" content="${L.ogLocale}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${site.url}${pathFn(L)}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230e1116'/%3E%3Ctext x='16' y='22' font-size='17' font-family='monospace' font-weight='700' text-anchor='middle' fill='%2339ff9c'%3EAS%3C/text%3E%3C/svg%3E">
<script type="application/ld+json">${JSON.stringify(jsonLd(L))}</script>
<style>${css}</style>
<script>window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)}</script>
<script defer src="/_vercel/insights/script.js"></script>
</head>`;

const langNav = (L, pathFn) =>
  `<nav class="lang" aria-label="${esc(L.ui.ariaLang)}">${locales
    .map((X) => (X.code === L.code ? `<a href="${pathFn(X)}" hreflang="${X.htmlLang}" lang="${X.htmlLang}" aria-current="true">${X.code.toUpperCase()}</a>` : `<a href="${pathFn(X)}" hreflang="${X.htmlLang}" lang="${X.htmlLang}">${X.code.toUpperCase()}</a>`))
    .join("")}</nav>`;

const badge = (l) =>
  l.logo
    ? `<img class="coin-img" src="/assets/logos/${l.logo}" alt="${esc(l.company)} logo" width="48" height="48" loading="lazy" decoding="async">`
    : `<span class="coin-mono" aria-hidden="true">${esc(l.mono)}</span>`;

const contact = (L) => `<nav class="cta" aria-label="${esc(L.ui.ariaContact)}">
  <a class="btn primary" href="mailto:${site.email}">${site.email}</a>
  <a class="btn" href="${site.linkedin}" rel="me noopener">LinkedIn</a>
  <a class="btn" href="${site.github}" rel="me noopener">GitHub</a>
  <a class="btn" href="${pdfPath(L)}">${esc(L.ui.pdf)}</a>
</nav>`;

const levelHtml = (L) =>
  ordered
    .map((l, i) => {
      const t = L.levels[l.id];
      const n = total - i;
      const tracks = l.tracks
        .map((tr, k) => `<li><b class="tag ${tr.type === "consult" ? "consult" : "full"}">${esc(L.types[tr.type])}</b><span>${esc(t.trackRoles[k])}<small>${esc(range(L, tr.from, tr.to))}</small></span></li>`)
        .join("");
      return `<li class="level${l.current ? " current" : ""}" id="${l.id}">
  <details name="quest">
    <summary>
      <span class="coin">${badge(l)}<span class="star" aria-hidden="true">★</span></span>
      <span class="head">
        <span class="lvl">${esc(L.ui.level)} ${n}${l.current ? " · " + esc(L.ui.here) : ""}</span>
        <span class="company">${esc(l.company)}</span>
        <span class="role">${esc(t.role)}</span>
        <span class="period">${esc(overall(L, l))}</span>
        <span class="mix${l.tracks.every((x) => x.type === "full") ? " full" : ""}">${esc(mixLabel(L, l))}</span>
      </span>
      <span class="chev" aria-hidden="true"></span>
    </summary>
    <div class="body"><div class="inner">
      <ul class="tracks" aria-label="${esc(L.ui.ariaDates)}">${tracks}</ul>
      <ul class="points">${t.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      ${t.lead ? `<div class="lead"><h4>${esc(L.ui.leadership)}</h4><ul>${t.lead.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div>` : ""}
      <ul class="chips" aria-label="${esc(L.ui.ariaTech)}">${l.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    </div></div>
  </details>
</li>`;
    })
    .join("\n");

const projectsHtml = (L) =>
  projects
    .map((p) => {
      const t = L.projects[p.id];
      const name = t.name || p.name;
      return `<li class="proj">
  <p class="ptag">${esc(t.tag)}</p>
  <h3>${esc(name)}</h3>
  <p class="pblurb">${esc(t.blurb)}</p>
  <ul class="chips" aria-label="${esc(L.ui.ariaTech)}">${p.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
  ${t.note ? `<p class="pnote">${esc(t.note)}</p>` : ""}
  <a class="btn demo" href="${p.url}" rel="noopener" target="_blank">${esc(L.ui.openDemo)} ↗<span class="sr"> — ${esc(name)}</span></a>
</li>`;
    })
    .join("\n");

const skillsHtml = (L) =>
  L.skills.map((g) => `<section class="skill-group"><h3>${esc(g.group)}</h3><ul class="chips">${g.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></section>`).join("\n");
const eduHtml = (L) => L.education.map((e) => `<li><strong>${esc(e.name)}</strong> — ${esc(e.detail)}</li>`).join("");

const indexPage = (L) => `${head(L, `${site.name} — ${L.site.title}`, L.site.summary, indexPath)}
<body>
<a class="skip" href="#cv-link">${esc(L.ui.skip)}</a>
<div class="hud">
  <span class="hud-name">AS</span>
  <div class="bar" aria-hidden="true"><i id="xp"></i></div>
  <span class="hud-count" role="status" aria-live="polite"><b id="cleared">0</b>/${total} ${esc(L.ui.cleared)}</span>
  ${langNav(L, indexPath)}
</div>
<header class="hero">
  <p class="eyebrow">${esc(L.ui.eyebrow)}</p>
  <h1>${esc(site.name)}</h1>
  <p class="title">${esc(L.site.title)}</p>
  <p class="summary">${esc(L.site.summary)}</p>
  ${contact(L)}
  <p class="hint">${esc(L.ui.hintBefore)} <a id="cv-link" href="${cvPath(L)}">${esc(L.ui.hintLink)}</a></p>
</header>
<main>
  <h2 class="sec">${esc(L.ui.career)}</h2>
  <ol class="map">
${levelHtml(L)}
  </ol>
  <h2 class="sec">${esc(L.ui.projects)}</h2>
  <p class="sec-sub">${esc(L.ui.projectsHint)}</p>
  <ul class="projects">
${projectsHtml(L)}
  </ul>
  <h2 class="sec">${esc(L.ui.skills)}</h2>
  <div class="skills">${skillsHtml(L)}</div>
  <h2 class="sec">${esc(L.ui.edu)}</h2>
  <ul class="edu">${eduHtml(L)}</ul>
  <p class="langs">${esc(L.languages)}</p>
</main>
<footer>
  <p>${esc(L.ui.footer)}</p>
  ${contact(L)}
</footer>
<script>${js}</script>
</body>
</html>
`;

const cvPage = (L) => {
  const jobs = ordered
    .map((l) => {
      const t = L.levels[l.id];
      return `<section class="job"><h3>${esc(l.company)} — ${esc(t.role)}</h3>${l.tracks
        .map((tr, k) => `<p class="period"><strong>${esc(L.types[tr.type])}:</strong> ${esc(t.trackRoles[k])}, ${esc(range(L, tr.from, tr.to))}</p>`)
        .join("")}<ul>${t.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>${t.lead ? `<p><strong>${esc(L.ui.leadership)}:</strong> ${esc(t.lead.join(" "))}</p>` : ""}<p class="tech">${esc(L.ui.tech)}: ${esc(l.stack.join(", "))}</p></section>`;
    })
    .join("\n");
  const projs = projects
    .map((p) => {
      const t = L.projects[p.id];
      return `<section class="job"><h3>${esc(t.name || p.name)} — <a href="${p.url}">${p.url}</a></h3><p class="period">${esc(t.tag)}</p><p>${esc(t.blurb)}${t.note ? " " + esc(t.note) : ""}</p><p class="tech">${esc(L.ui.tech)}: ${esc(p.stack.join(", "))}</p></section>`;
    })
    .join("\n");
  return `${head(L, `${site.name} — ${L.ui.cvTitle}`, `${L.ui.cvTitle}: ${site.name}, ${L.site.title}.`, cvPath)}
<body class="cv">
<main class="cv-page">
  <p><a href="${indexPath(L)}">${esc(L.ui.back)}</a> · ${langNav(L, cvPath)}</p>
  <h1>${esc(site.name)}</h1>
  <p class="title">${esc(L.site.title)}</p>
  <p>${esc(L.site.location)} · <a href="mailto:${site.email}">${site.email}</a> · <a href="${site.linkedin}">LinkedIn</a> · <a href="${site.github}">GitHub</a></p>
  <h2>${esc(L.ui.cvSummary)}</h2><p>${esc(L.site.summary)}</p>
  <h2>${esc(L.ui.cvSkills)}</h2>
  ${L.skills.map((g) => `<p><strong>${esc(g.group)}:</strong> ${esc(g.items.join(", "))}</p>`).join("\n")}
  <h2>${esc(L.ui.cvExperience)}</h2>
  ${jobs}
  <h2>${esc(L.ui.cvProjects)}</h2>
  ${projs}
  <h2>${esc(L.ui.cvEducation)}</h2><ul>${eduHtml(L)}</ul>
  <h2>${esc(L.ui.cvLanguages)}</h2><p>${esc(L.languages)}</p>
</main>
</body>
</html>
`;
};

for (const L of locales) {
  const dir = L.code === "en" ? "." : L.code;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, indexPage(L));
  writeFileSync(`${dir}/cv.html`, cvPage(L));
}

writeFileSync(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${locales
    .flatMap((L) =>
      [indexPath, cvPath].map(
        (fn) => `<url><loc>${site.url}${fn(L)}</loc>${locales.map((X) => `<xhtml:link rel="alternate" hreflang="${X.htmlLang}" href="${site.url}${fn(X)}"/>`).join("")}</url>`
      )
    )
    .join("\n")}\n</urlset>\n`
);
writeFileSync("robots.txt", `User-agent: *\nAllow: /\nDisallow: /r/\nDisallow: /es/r/\nDisallow: /pt/r/\n\nSitemap: ${site.url}/sitemap.xml\n`);
writeFileSync(
  "llms.txt",
  `# ${site.name}\n\n> ${en.site.title}. ${en.site.summary}\n\n## Pages\n${locales
    .map((L) => `- [Portfolio (${L.code})](${site.url}${indexPath(L)})\n- [Plain CV (${L.code})](${site.url}${cvPath(L)})`)
    .join("\n")}\n\n## Personal projects (live demos)\n${projects.map((p) => `- [${p.name}](${p.url}): ${en.projects[p.id].tag}`).join("\n")}\n\n## Contact\n- Email: ${site.email}\n- LinkedIn: ${site.linkedin}\n- GitHub: ${site.github}\n`
);
console.log("built", locales.map((L) => L.code).join("/"), "- index, cv, sitemap, robots, llms");
