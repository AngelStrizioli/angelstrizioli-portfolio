// Zero-dependency static build: content.mjs + src/* -> dist-free root files (index.html, cv.html, sitemap, llms.txt)
import { readFileSync, writeFileSync } from "node:fs";
import { site, levels, skills, education, languages } from "./content.mjs";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const css = readFileSync("src/styles.css", "utf8");
const js = readFileSync("src/app.js", "utf8");
const ordered = [...levels].reverse(); // newest first
const total = ordered.length;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description: site.summary,
  url: site.url,
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
  knowsAbout: [...new Set(skills.flatMap((s) => s.items))],
  knowsLanguage: ["es", "en", "it", "pt", "de"],
};

const head = (title, desc, path) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#0e1116">
<link rel="canonical" href="${site.url}${path}">
<meta property="og:type" content="profile">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${site.url}${path}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230e1116'/%3E%3Ctext x='16' y='22' font-size='17' font-family='monospace' font-weight='700' text-anchor='middle' fill='%2339ff9c'%3EAS%3C/text%3E%3C/svg%3E">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<style>${css}</style>
</head>`;

const badge = (l) =>
  l.logo
    ? `<img class="coin-img" src="assets/logos/${l.logo}" alt="${esc(l.company)} logo" width="48" height="48" loading="lazy" decoding="async">`
    : `<span class="coin-mono" aria-hidden="true">${esc(l.mono)}</span>`;

const contact = `<nav class="cta" aria-label="Contact">
  <a class="btn primary" href="mailto:${site.email}">${site.email}</a>
  <a class="btn" href="${site.linkedin}" rel="me noopener">LinkedIn</a>
  <a class="btn" href="${site.github}" rel="me noopener">GitHub</a>
  <a class="btn" href="assets/Angel_Strizioli_CV.pdf">Download CV (PDF)</a>
</nav>`;

const levelHtml = ordered
  .map((l, i) => {
    const n = total - i;
    return `<li class="level${l.current ? " current" : ""}" id="${l.id}">
  <details name="quest">
    <summary>
      <span class="coin">${badge(l)}<span class="star" aria-hidden="true">★</span></span>
      <span class="head">
        <span class="lvl">${l.current ? "Level " + n + " · you are here" : "Level " + n}</span>
        <span class="company">${esc(l.company)}</span>
        <span class="role">${esc(l.role)}</span>
        <span class="period">${esc(l.period)}</span>
      </span>
      <span class="chev" aria-hidden="true"></span>
    </summary>
    <div class="body"><div class="inner">
      <ul class="points">${l.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <ul class="chips" aria-label="Tech used">${l.stack.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    </div></div>
  </details>
</li>`;
  })
  .join("\n");

const skillsHtml = skills
  .map(
    (g) => `<section class="skill-group"><h3>${esc(g.group)}</h3><ul class="chips">${g.items
      .map((s) => `<li>${esc(s)}</li>`)
      .join("")}</ul></section>`
  )
  .join("\n");

const eduHtml = education.map((e) => `<li><strong>${esc(e.name)}</strong> — ${esc(e.detail)}</li>`).join("");

const index = `${head(`${site.name} — ${site.title}`, site.summary, "/")}
<body>
<a class="skip" href="#cv-link">Skip the game</a>
<div class="hud" role="status" aria-live="polite">
  <span class="hud-name">AS</span>
  <div class="bar" aria-hidden="true"><i id="xp"></i></div>
  <span class="hud-count"><b id="cleared">0</b>/${total} cleared</span>
</div>
<header class="hero">
  <p class="eyebrow">Press start</p>
  <h1>${esc(site.name)}</h1>
  <p class="title">${esc(site.title)}</p>
  <p class="summary">${esc(site.summary)}</p>
  ${contact}
  <p class="hint">Tap each level to clear it ↓ or <a id="cv-link" href="cv.html">read the plain CV</a></p>
</header>
<main>
  <h2 class="sec">Career quest</h2>
  <ol class="map">
${levelHtml}
  </ol>
  <h2 class="sec">Skill badges</h2>
  <div class="skills">${skillsHtml}</div>
  <h2 class="sec">Education &amp; languages</h2>
  <ul class="edu">${eduHtml}</ul>
  <p class="langs">${esc(languages)}</p>
</main>
<footer>
  <p>Open to Applied AI Engineer roles.</p>
  ${contact}
</footer>
<script>${js}</script>
</body>
</html>
`;

const cvLevels = ordered
  .map(
    (l) => `<section class="job"><h3>${esc(l.company)} — ${esc(l.role)}</h3><p class="period">${esc(l.period)}</p><ul>${l.points
      .map((p) => `<li>${esc(p)}</li>`)
      .join("")}</ul><p class="tech">Tech: ${esc(l.stack.join(", "))}</p></section>`
  )
  .join("\n");

const cv = `${head(`${site.name} — CV`, `Plain-text CV of ${site.name}, ${site.title}.`, "/cv.html")}
<body class="cv">
<main class="cv-page">
  <p><a href="/">← Back to the game</a></p>
  <h1>${esc(site.name)}</h1>
  <p class="title">${esc(site.title)}</p>
  <p>${esc(site.location)} · <a href="mailto:${site.email}">${site.email}</a> · <a href="${site.linkedin}">LinkedIn</a> · <a href="${site.github}">GitHub</a></p>
  <h2>Summary</h2><p>${esc(site.summary)}</p>
  <h2>Skills</h2>
  ${skills.map((g) => `<p><strong>${esc(g.group)}:</strong> ${esc(g.items.join(", "))}</p>`).join("\n")}
  <h2>Experience</h2>
  ${cvLevels}
  <h2>Education</h2><ul>${eduHtml}</ul>
  <h2>Languages</h2><p>${esc(languages)}</p>
</main>
</body>
</html>
`;

writeFileSync("index.html", index);
writeFileSync("cv.html", cv);
writeFileSync(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<url><loc>${site.url}/</loc></url>\n<url><loc>${site.url}/cv.html</loc></url>\n</urlset>\n`
);
writeFileSync("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
writeFileSync(
  "llms.txt",
  `# ${site.name}\n\n> ${site.title}. ${site.summary}\n\n- [Plain CV](${site.url}/cv.html)\n- [Interactive portfolio](${site.url}/)\n- Email: ${site.email}\n- LinkedIn: ${site.linkedin}\n- GitHub: ${site.github}\n`
);
console.log("built index.html, cv.html, sitemap.xml, robots.txt, llms.txt");
