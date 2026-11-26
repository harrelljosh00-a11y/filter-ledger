import { notFound } from "next/navigation";
import { SECTIONS, listDocs, loadDoc, type Section } from "@/lib/content";
import { DocView } from "@/components/DocView";

export const dynamicParams = false;
export function generateStaticParams() {
  const params = (Object.keys(SECTIONS) as Section[]).flatMap(section => listDocs(section).map(d => ({ section, slug: d.slug })));
  // Next's static export needs at least one param set per dynamic route.
  return params.length ? params : [{ section: "guides", slug: "_placeholder" }];
}

export async function generateMetadata({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params;
  const doc = loadDoc(section as Section, slug);
  return doc ? { title: doc.title, description: doc.description, alternates: { canonical: `/${section}/${slug}/` } } : {};
}

export default async function DocPage({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params;
  const doc = section in SECTIONS ? loadDoc(section as Section, slug) : null;
  if (!doc) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: doc.title, description: doc.description, dateModified: doc.updated, publisher: { "@type": "Organization", name: "Filter Ledger" } };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <DocView doc={doc} />
  </>);
}
