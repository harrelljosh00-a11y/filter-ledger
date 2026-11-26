// Flags published products and pages whose evidence is older than MAX_DAYS.
import fs from "node:fs";
import path from "node:path";
const MAX_DAYS = Number(process.env.MAX_DAYS ?? 90);
const now = Date.now(), age = d => Math.floor((now - Date.parse(d)) / 864e5);
const stale = [];
for (const p of JSON.parse(fs.readFileSync("data/products.json")).products)
  if (p.status === "published" && (!p.lastVerified || age(p.lastVerified) > MAX_DAYS)) stale.push(`product ${p.slug} (verified ${p.lastVerified ?? "never"})`);
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk("content").filter(f => f.endsWith(".md") && !f.includes("/pages/"))) {
  const m = fs.readFileSync(f, "utf8").match(/^lastVerified:\s*(\S+)/m);
  if (m && age(m[1]) > MAX_DAYS) stale.push(`page ${f} (verified ${m[1]})`);
}
console.log(stale.length ? `Stale (> ${MAX_DAYS} days):\n- ${stale.join("\n- ")}` : `Nothing older than ${MAX_DAYS} days`);
if (stale.length) process.exit(1);
