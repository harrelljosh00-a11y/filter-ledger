import Link from "next/link";
import { allDocs } from "@/lib/content";

const steps = [
  ["1. Know your water", "Start with your utility's annual water quality report, or a certified lab test if you're on a well."],
  ["2. Match the certification", "Look for a filter certified to reduce what's actually in your water, not just a big list of claims."],
  ["3. Price the whole life", "Filters are a subscription. We show the yearly cartridge cost next to the sticker price."],
];

export default function Home() {
  const latest = allDocs().slice(0, 6);
  return (
    <div className="space-y-12">
      <section className="rounded-2xl bg-clear p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-ledger">Every claim, checked</p>
        <h1 className="font-serif text-4xl font-semibold mt-2 max-w-2xl">Water filter advice that shows its receipts.</h1>
        <p className="mt-4 max-w-2xl text-lg">
          We check each filter&apos;s claims against the official NSF, WQA and IAPMO certification listings, label every claim{" "}
          <span className="badge bg-green-ledger">CERTIFIED</span>, <span className="badge bg-amber-ledger">LAB-TESTED</span> or{" "}
          <span className="badge bg-red-ledger">CLAIM ONLY</span>, and tell you what it really costs to own.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/guides/nsf-standards-explained/" className="cta">Start here: NSF standards explained</Link>
          <Link href="/how-we-review/" className="underline self-center">How we review (and what we don&apos;t do)</Link>
        </div>
      </section>
      <section aria-labelledby="how">
        <h2 id="how" className="font-serif text-2xl font-semibold mb-4">Choosing a filter in three steps</h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          {steps.map(([t, d]) => <li key={t} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-semibold">{t}</h3><p className="text-sm mt-1 text-slate-700">{d}</p></li>)}
        </ol>
      </section>
      <section aria-labelledby="latest">
        <h2 id="latest" className="font-serif text-2xl font-semibold mb-4">Latest</h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {latest.map(d => (
            <li key={d.section + d.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <Link href={`/${d.section}/${d.slug}/`} className="font-serif text-lg font-semibold hover:underline">{d.title}</Link>
              <p className="text-sm text-slate-600 mt-1">{d.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
