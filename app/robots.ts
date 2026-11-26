import type { MetadataRoute } from "next";
export const dynamic = "force-static";
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://filter-ledger.pages.dev";
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: "/go/" }], sitemap: `${site}/sitemap.xml` };
}
