import type { Doc } from "@/lib/content";
import { Disclosure } from "./Disclosure";
import { VerifiedDate } from "./Badge";

export function DocView({ doc }: { doc: Doc }) {
  return (
    <article className="prose prose-slate max-w-3xl prose-a:text-ledger prose-headings:text-ink">
      <h1>{doc.title}</h1>
      <p className="lead">{doc.description}</p>
      <p className="text-sm text-slate-600 not-prose">
        Updated <time dateTime={doc.updated}>{doc.updated}</time>{doc.lastVerified && <> · <VerifiedDate date={doc.lastVerified} /></>}
      </p>
      {doc.hasAffiliateLinks && <div className="not-prose"><Disclosure /></div>}
      <div dangerouslySetInnerHTML={{ __html: doc.html }} />
      {doc.sources?.length ? (<>
        <h2>Sources</h2>
        <ol>{doc.sources.map(s => <li key={s.url}><a href={s.url} rel="noopener" target="_blank">{s.title}</a></li>)}</ol>
      </>) : null}
      {doc.changelog?.length ? (<>
        <h2>Change log</h2>
        <ul>{doc.changelog.map(c => <li key={c.date + c.note}><time dateTime={c.date}>{c.date}</time>: {c.note}</li>)}</ul>
      </>) : null}
    </article>
  );
}
