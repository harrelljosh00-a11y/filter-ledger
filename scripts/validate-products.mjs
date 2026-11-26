// Fails the build if any published product lacks evidence. Prevents unverified claims going live.
import fs from "node:fs";
const { products } = JSON.parse(fs.readFileSync(new URL("../data/products.json", import.meta.url)));
const errors = [];
const slugs = new Set();
const iso = /^\d{4}-\d{2}-\d{2}$/;
for (const p of products) {
  if (!p.slug || slugs.has(p.slug)) errors.push(`duplicate/missing slug: ${p.slug}`);
  slugs.add(p.slug);
  if (!["draft", "published"].includes(p.status)) errors.push(`${p.slug}: bad status`);
  if (p.status !== "published") continue;
  if (!iso.test(p.lastVerified ?? "")) errors.push(`${p.slug}: lastVerified missing`);
  if (!p.sourceUrl) errors.push(`${p.slug}: sourceUrl missing`);
  if (!p.merchantUrl && !p.affiliateUrl) errors.push(`${p.slug}: no destination URL`);
  if (p.priceUsd != null && !iso.test(p.priceCheckedOn ?? "")) errors.push(`${p.slug}: price without priceCheckedOn`);
  for (const c of p.certifications ?? []) {
    if (!c.standard || !c.certifier || !Array.isArray(c.contaminants)) errors.push(`${p.slug}: incomplete certification`);
    if (c.level === "certified" && !c.listingUrl) errors.push(`${p.slug}: certified claim without listingUrl`);
  }
}
if (errors.length) { console.error("Product validation failed:\n- " + errors.join("\n- ")); process.exit(1); }
console.log(`Products OK: ${products.length} total, ${products.filter(p => p.status === "published").length} published`);
