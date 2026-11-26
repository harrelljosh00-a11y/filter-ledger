import type { MetadataRoute } from "next";
import { allDocs, SECTIONS } from "@/lib/content";
export const dynamic = "force-static";
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://filter-ledger.pages.dev";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about/", "how-we-review/", "disclosure/", "privacy/", "terms/", "contact/", ...Object.keys(SECTIONS).map(s => `${s}/`)];
  return [
    ...pages.map(p => ({ url: `${site}/${p}` })),
    ...allDocs().map(d => ({ url: `${site}/${d.section}/${d.slug}/`, lastModified: d.updated })),
  ];
}
