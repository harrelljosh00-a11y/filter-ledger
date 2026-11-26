// Writes out/_redirects for Cloudflare Pages: /go/<slug>/ -> affiliate URL (or merchant URL until approved).
import fs from "node:fs";
const { products } = JSON.parse(fs.readFileSync(new URL("../data/products.json", import.meta.url)));
const showDrafts = process.env.SHOW_DRAFTS === "1";
const lines = products
  .filter(p => p.status === "published" || showDrafts)
  .map(p => [p.slug, p.affiliateUrl || p.merchantUrl])
  .filter(([, url]) => url)
  .flatMap(([slug, url]) => [`/go/${slug}/ ${url} 302`, `/go/${slug} ${url} 302`]);
fs.mkdirSync("out", { recursive: true });
fs.writeFileSync("out/_redirects", lines.join("\n") + "\n");
fs.writeFileSync("out/_headers", [
  "/*",
  "  X-Content-Type-Options: nosniff",
  "  Referrer-Policy: strict-origin-when-cross-origin",
  "  Permissions-Policy: camera=(), microphone=(), geolocation=()",
  "  X-Frame-Options: DENY",
  "/go/*",
  "  X-Robots-Tag: noindex",
  ""
].join("\n"));
console.log(`Wrote ${lines.length / 2} redirects`);
