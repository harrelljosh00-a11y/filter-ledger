import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import { getProduct, goUrl, type Product } from "./products";

export const SECTIONS = {
  guides: { label: "Guides", template: "guide" },
  best: { label: "Best Picks", template: "roundup" },
  vs: { label: "Comparisons", template: "comparison" },
  reviews: { label: "Reviews", template: "review" },
  news: { label: "News", template: "article" },
} as const;
export type Section = keyof typeof SECTIONS;

export interface Doc {
  section: Section | "pages"; slug: string; title: string; description: string;
  updated: string; lastVerified?: string; draft?: boolean; hasAffiliateLinks?: boolean;
  sources?: { title: string; url: string }[]; changelog?: { date: string; note: string }[];
  html: string;
}

const root = path.join(process.cwd(), "content");
const showDrafts = process.env.SHOW_DRAFTS === "1";

const ymd = (v: unknown) => v instanceof Date ? v.toISOString().slice(0, 10) : v == null ? undefined : String(v);

const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
const badge = (level: string) => {
  const m: Record<string, [string, string]> = {
    certified: ["CERTIFIED", "bg-green-ledger"],
    "lab-tested": ["LAB-TESTED", "bg-amber-ledger"],
    "claim-only": ["CLAIM ONLY", "bg-red-ledger"],
  };
  const [t, c] = m[level] ?? ["UNKNOWN", "bg-ink"];
  return `<span class="badge ${c}">${t}</span>`;
};

function claimCheck(slugs: string[]): string {
  const ps = slugs.map(getProduct).filter(Boolean) as Product[];
  if (!ps.length) return `<p class="note">Product comparison coming soon. We publish picks only after verifying their certification listings.</p>`;
  return ps.map(p => `
<div class="product-card">
  <h3>${esc(p.name)}</h3>
  <table><thead><tr><th>Claim</th><th>Standard</th><th>Status</th><th>Evidence</th></tr></thead><tbody>
  ${p.certifications.map(c => `<tr><td>${esc(c.contaminants.join(", "))}</td><td>${esc(c.standard)}</td><td>${badge(c.level)}</td><td>${c.listingUrl ? `<a href="${esc(c.listingUrl)}" rel="nofollow noopener" target="_blank">${esc(c.certifier)} listing</a>` : esc(c.certifier)}</td></tr>`).join("")}
  </tbody></table>
  <p class="meta">${p.priceUsd != null ? `Price $${p.priceUsd} (checked ${p.priceCheckedOn}) · ` : ""}${p.annualFilterCostUsd != null ? `Filters ≈ $${p.annualFilterCostUsd}/yr · ` : ""}Last verified ${p.lastVerified ?? "—"}</p>
  <a class="cta" href="${goUrl(p)}" rel="sponsored nofollow" data-outbound="${p.slug}">Check price at ${esc(p.merchant)}</a>
</div>`).join("\n");
}

function shortcodes(md: string) {
  return md
    .replace(/\{\{claimcheck:([\w,-]+)\}\}/g, (_, s: string) => claimCheck(s.split(",")))
    .replace(/\{\{verdict:(certified|lab-tested|claim-only)\}\}/g, (_, l) => badge(l));
}

export function loadDoc(section: Section | "pages", slug: string): Doc | null {
  const file = path.join(root, section, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  if (data.draft && !showDrafts) return null;
  const html = marked.parse(shortcodes(content), { async: false }) as string;
  return { section, slug, html, ...(data as Omit<Doc, "section" | "slug" | "html">),
    updated: ymd(data.updated) ?? "", lastVerified: ymd(data.lastVerified),
    changelog: (data.changelog ?? []).map((c: { date: unknown; note: string }) => ({ date: ymd(c.date) ?? "", note: c.note })) };
}

export function listDocs(section: Section): Doc[] {
  const dir = path.join(root, section);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith(".md"))
    .map(f => loadDoc(section, f.replace(/\.md$/, "")))
    .filter((d): d is Doc => !!d)
    .sort((a, b) => b.updated.localeCompare(a.updated));
}
export const allDocs = () => (Object.keys(SECTIONS) as Section[]).flatMap(listDocs);
