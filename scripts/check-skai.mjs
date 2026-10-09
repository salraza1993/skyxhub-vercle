// Smoke checks for the SKAI page and home teaser, run against the prerendered
// HTML produced by `npm run build`. Usage: npm run build && npm run check:skai
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "");

const skai = read(".next/server/app/skai.html");
const home = read(".next/server/app/index.html");
const blog = read(".next/server/app/blog.html");

let failed = 0;

function check(name, fn) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (err) {
    failed++;
    console.log(`FAIL ${name}: ${err.message.split("\n")[0]}`);
  }
}

// The <section> element carrying id="<id>" (SKAI sections never nest, so the first </section> closes it).
function section(html, id) {
  const idAt = html.indexOf(`id="${id}"`);
  if (idAt === -1) return "";
  const start = html.lastIndexOf("<section", idAt);
  if (start === -1) return "";
  const end = html.indexOf("</section>", start);
  return html.slice(start, end === -1 ? undefined : end + "</section>".length);
}

// href values of <a> tags whose class list contains className.
function hrefs(fragment, className) {
  return [...fragment.matchAll(/<a\b[^>]*>/g)]
    .map((m) => m[0])
    .filter((tag) => (tag.match(/class="([^"]*)"/)?.[1] ?? "").split(/\s+/).includes(className))
    .map((tag) => tag.match(/href="([^"]*)"/)?.[1]);
}

const count = (fragment, needle) => fragment.split(needle).length - 1;

// Elements whose class attribute contains cls as an exact token.
const countClass = (fragment, cls) =>
  [...fragment.matchAll(/class="([^"]*)"/g)].filter((m) => m[1].split(/\s+/).includes(cls)).length;

// Every conversion CTA in a /skai section.
const ctaHrefs = (id) => hrefs(section(skai, id), "skai-btn");

// ── Task 1: foundation ──
check("skai page built", () => assert.ok(skai.length > 0));
check("skai metadata title", () => assert.match(skai, /<title>SKAI – AI &amp; Robotics \| SKYXHUB<\/title>/));
check("placeholder removed", () => assert.ok(!skai.includes("ABOUT US:")));
check("no SSR animation-hidden class", () => {
  assert.ok(!skai.includes("skai-anim"));
  assert.ok(!home.includes("skai-anim"));
});
check("all /img/skai assets exist", () => {
  for (const src of [...(skai + home).matchAll(/\/img\/skai\/[\w.-]+/g)].map((m) => m[0]))
    assert.ok(fs.existsSync(path.join("public", src)), `missing ${src}`);
});
check("skai sections offset for fixed header", () =>
  assert.match(read("public/scss/_skai.scss"), /\.skai-section\s*{[^}]*scroll-margin-top/));

// ── Task 2: hero ──
check("hero: one h1", () => assert.equal(count(skai, "<h1"), 1));
check("hero: h1 inside #hero", () => assert.ok(section(skai, "hero").includes("<h1")));
check("hero: CTAs → /contact", () => assert.deepEqual(ctaHrefs("hero"), ["/contact", "/contact"]));
check("hero: breadcrumb links", () => {
  const s = section(skai, "hero");
  assert.ok(s.includes('href="/"'));
  assert.ok(s.includes('href="/skai"'));
});
check("hero: scroll link → #meet", () => assert.ok(section(skai, "hero").includes('href="#meet"')));
check("hero: languages", () =>
  ["EN", "AR", "FR", "ZH", "HI"].forEach((l) => assert.ok(section(skai, "hero").includes(`>${l}<`), l)));

// ── Task 3: meet ──
check("meet: 3 pillars as h3", () => assert.equal(count(section(skai, "meet"), "<h3"), 3));
check("meet: hotspots", () =>
  ["Conversational AI", "Vision &amp; Perception", "Expressive Gestures"].forEach((t) =>
    assert.ok(section(skai, "meet").includes(t), t)
  ));

// ── Task 4: interaction engine ──
check("engine: 5 features", () => assert.equal(countClass(section(skai, "engine"), "skai-engine__item"), 5));
check("engine: 5 node labels", () => assert.equal(countClass(section(skai, "engine"), "skai-engine__label"), 5));
check("engine: rows are not links", () => assert.equal(count(section(skai, "engine"), "<a "), 0));

// ── Task 5: physical intelligence ──
check("physical: 5 steps + 5 capabilities", () => {
  const s = section(skai, "physical");
  assert.equal(countClass(s, "skai-pose-card"), 5);
  assert.equal(countClass(s, "skai-capability"), 5);
});
check("physical: one highlighted step", () =>
  assert.equal(countClass(section(skai, "physical"), "skai-pose-card--active"), 1));

// ── Task 6: RAAS ──
check("raas: 3 plans, 1 featured", () => {
  const s = section(skai, "raas");
  assert.equal(countClass(s, "skai-plan"), 3);
  assert.equal(countClass(s, "skai-plan--featured"), 1);
});
check("raas: badge", () => assert.ok(section(skai, "raas").includes("Most Popular")));
check("raas: CTAs → /contact", () => assert.deepEqual(ctaHrefs("raas"), ["/contact", "/contact", "/contact"]));
check("raas: 6 use cases", () => assert.equal(countClass(section(skai, "raas"), "skai-usecase"), 6));

// ── Task 7: industries ──
check("industries: light section", () =>
  assert.match(skai, /<section[^>]*id="industries"[^>]*skai-section--light|<section[^>]*skai-section--light[^>]*id="industries"/));
check("industries: 7 + 1 cards", () => {
  const s = section(skai, "industries");
  assert.equal(countClass(s, "skai-industry"), 7);
  assert.equal(countClass(s, "skai-industry--custom"), 1);
});
check("industries: all links → /contact", () => {
  const l = hrefs(section(skai, "industries"), "skai-text-link");
  assert.equal(l.length, 8);
  assert.ok(l.every((h) => h === "/contact"));
});

// ── Task 8: interactive demo ──
check("demo: tablist", () => {
  const s = section(skai, "demo");
  assert.ok(s.includes('role="tablist"'));
  assert.equal(count(s, 'role="tab"'), 4);
  assert.equal(count(s, 'role="tabpanel"'), 4);
});
check("demo: one selected", () => assert.equal(count(section(skai, "demo"), 'aria-selected="true"'), 1));
check("demo: live demo CTA", () => assert.deepEqual(ctaHrefs("demo"), ["/contact"]));
check("demo: no interactive chips", () => assert.equal(count(section(skai, "demo"), "<button"), 4));

// ── Task 9: enterprise integration ──
check("integration: nodes", () =>
  ["CRM", "ERP", "Booking Engines", "API Gateway", "AI Engine", "SKAI Robot"].forEach((t) =>
    assert.ok(section(skai, "integration").includes(t), t)
  ));
check("integration: 3 benefits", () => assert.equal(countClass(section(skai, "integration"), "skai-benefit"), 3));

// ── Task 10: final CTA ──
check("cta: CTAs → /contact", () => assert.deepEqual(ctaHrefs("get-started"), ["/contact", "/contact"]));
check("cta: mailto + tel", () => {
  const s = section(skai, "get-started");
  assert.ok(s.includes('href="mailto:info@skyxhub.com"'));
  assert.ok(s.includes('href="tel:+97143388171"'));
});
check("skai: section order", () => {
  const ids = ["hero", "meet", "engine", "physical", "raas", "industries", "demo", "integration", "get-started"];
  const pos = ids.map((id) => skai.indexOf(`id="${id}"`));
  assert.ok(pos.every((p, i) => p > -1 && (i === 0 || p > pos[i - 1])), JSON.stringify(pos));
});

// ── Task 11: home teaser ──
check("teaser: on home", () => assert.ok(home.includes('id="skai-teaser"')));
check("teaser: h2 not h1", () => {
  const s = section(home, "skai-teaser");
  assert.equal(count(s, "<h1"), 0);
  assert.equal(count(s, "<h2"), 1);
});
check("teaser: CTAs", () => assert.deepEqual(hrefs(section(home, "skai-teaser"), "skai-btn"), ["/skai", "/contact"]));
check("teaser: placement", () => {
  const t = home.indexOf('id="skai-teaser"');
  assert.ok(t > -1 && t < home.indexOf("mil-partners"));
});

// ── Task 12: header, footer, sitemap ──
// Header markup is everything before the first page section (the footer also links to /solutions).
const headerHtml = skai.slice(0, skai.indexOf("<section"));
check("header: Solutions + AI & Robotics", () => {
  assert.ok(headerHtml.includes('href="/solutions"'));
  assert.ok(headerHtml.includes(">AI &amp; Robotics<"));
  assert.ok(headerHtml.includes('href="/skai"'));
});
check("footer: SKAI anchors", () =>
  ["meet", "engine", "physical", "raas", "industries"].forEach((id) => assert.ok(home.includes(`href="/skai#${id}"`), id)));
check("sitemap: /skai", () => assert.ok(read("src/app/sitemap.xml").includes("<loc>https://www.skyxhub.com/skai</loc>")));

// ── Robot photography (replaces the Figma robot illustration) ──
check("robots: illustration no longer referenced", () => {
  for (const old of ["/img/skai/robot.svg", "/img/skai/robot-faded.svg"]) assert.ok(!(skai + home).includes(old), old);
  assert.doesNotMatch(skai, /\/img\/skai\/pose-(detect|greet|recognise|guide|act)\.svg/);
});
check("robots: photos used in every slot", () => {
  const photos = (html) => [...html.matchAll(/\/img\/skai\/robots\/([\w-]+)\.png/g)].map((m) => m[1]);
  assert.deepEqual([...new Set(photos(section(home, "skai-teaser")))], ["stand"]);
  for (const id of ["hero", "meet", "integration", "get-started"]) assert.ok(photos(section(skai, id)).includes("stand"), id);
  assert.ok(photos(section(skai, "meet")).includes("stand-reverse"), "meet side robots");
  assert.ok(photos(section(skai, "demo")).every((p) => p === "half") && photos(section(skai, "demo")).length === 4, "demo avatars");
  assert.deepEqual(photos(section(skai, "physical")), ["stand", "greeting", "danding", "stand-reverse", "sitting"]);
});

// ── Blog list (site-wide fix): card images and excerpts come from post frontmatter ──
check("blog: every card image exists", () => {
  const srcs = [...blog.matchAll(/<div class="mil-cover-frame"><img src="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(srcs.length, fs.readdirSync("src/data/posts").filter((f) => f.endsWith(".md")).length);
  for (const src of srcs) assert.ok(fs.existsSync(path.join("public", src)), `missing ${src}`);
});
check("blog: excerpts are not the placeholder", () => assert.ok(blog.length > 0 && !blog.includes("Blog post excerpt...")));

check("blog: cards use the theme card and don't link to missing post pages", () => {
  assert.equal(countClass(blog, "mil-card"), fs.readdirSync("src/data/posts").filter((f) => f.endsWith(".md")).length);
  assert.doesNotMatch(blog, /href="\/blog\/[^"]+"/);
});

if (failed) {
  console.log(`\n${failed} check(s) failed`);
  process.exitCode = 1;
} else {
  console.log("\nAll checks passed");
}
