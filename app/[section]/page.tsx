import Link from "next/link";
import { notFound } from "next/navigation";
import { SECTIONS, listDocs, type Section } from "@/lib/content";

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(SECTIONS).map(section => ({ section })); }

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return { title: SECTIONS[section as Section]?.label ?? "Not found" };
}

export default async function SectionIndex({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!(section in SECTIONS)) notFound();
  const docs = listDocs(section as Section);
  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold mb-6">{SECTIONS[section as Section].label}</h1>
      {docs.length === 0 ? <p className="note">New pages are on the way. Each one is published only after its claims are verified.</p> : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {docs.map(d => (
            <li key={d.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <Link href={`/${section}/${d.slug}/`} className="font-serif text-lg font-semibold text-ink hover:underline">{d.title}</Link>
              <p className="text-sm text-slate-600 mt-1">{d.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
