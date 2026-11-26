import data from "@/data/products.json";

export type CertLevel = "certified" | "lab-tested" | "claim-only";
export interface Certification {
  standard: string; // e.g. "NSF/ANSI 53"
  certifier: string; // NSF | WQA | IAPMO | lab name
  contaminants: string[];
  level: CertLevel;
  listingUrl?: string;
}
export interface Product {
  slug: string; name: string; brand: string; category: string;
  merchant: string; program: string; merchantUrl: string; affiliateUrl: string;
  isAffiliate: boolean; commissionRate: string; cookieDays: number | null;
  priceUsd: number | null; priceCheckedOn: string | null;
  annualFilterCostUsd: number | null; ratedCapacityGallons: number | null;
  certifications: Certification[]; merchantReputation: string;
  sourceUrl: string; lastVerified: string | null; status: "draft" | "published";
}

const showDrafts = process.env.SHOW_DRAFTS === "1";
export const allProducts = (data.products as Product[]);
export const products = allProducts.filter(p => p.status === "published" || showDrafts);
export const getProduct = (slug: string) => products.find(p => p.slug === slug);
export const goUrl = (p: Product) => `/go/${p.slug}/`;
