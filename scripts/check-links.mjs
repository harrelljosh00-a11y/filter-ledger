// Checks every product destination + every external link in content. Exits 1 on failures (CI opens an issue).
import fs from "node:fs";
import path from "node:path";
const { products } = JSON.parse(fs.readFileSync("data/products.json"));
const urls = new Set();
for (const p of products) for (const u of [p.affiliateUrl, p.merchantUrl, p.sourceUrl, ...(p.certifications ?? []).map(c => c.listingUrl)]) if (u) urls.add(u);
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk("content").filter(f => f.endsWith(".md")))
  for (const m of fs.readFileSync(f, "utf8").matchAll(/https?:\/\/[^\s)"'<>]+/g)) urls.add(m[0]);
const bad = [];
await Promise.all([...urls].map(async u => {
  try {
    let r = await fetch(u, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(15000) });
    if (r.status === 405 || r.status === 403) r = await fetch(u, { redirect: "follow", signal: AbortSignal.timeout(15000) });
    if (r.status >= 400) bad.push(`${r.status} ${u}`);
  } catch (e) { bad.push(`ERR ${u} (${e.cause?.code ?? e.name})`); }
}));
console.log(`Checked ${urls.size} URLs, ${bad.length} problems`);
if (bad.length) { console.log(bad.map(b => "- " + b).join("\n")); process.exit(1); }
