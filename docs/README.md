# Filter Ledger

Certification-first buying guides for home water filters. Every claim, checked.

## Quick start
```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # validates products, builds static site to out/, writes _redirects
SHOW_DRAFTS=1 npm run build   # include draft pages/products (preview only)
npm run check:links    # check all external links
npm run check:stale    # flag evidence older than 90 days
```

## Deploy (Cloudflare Pages)
Build command `npm run build`, output directory `out`, Node 22. Set env vars from `.env.example`.

## Adding content
- Markdown in `content/<section>/<slug>.md` (sections: guides, best, vs, reviews, news). Frontmatter: `title, description, updated, lastVerified, hasAffiliateLinks, draft, sources[], changelog[]`.
- Shortcodes: `{{claimcheck:slug1,slug2}}` renders product evidence cards; `{{verdict:certified|lab-tested|claim-only}}` renders a badge.
- Products in `data/products.json`. A product can't be `published` without `lastVerified`, `sourceUrl`, and listing URLs for certified claims (the build fails otherwise).

## Project documents
See `docs/`: BUSINESS_PLAN, NICHE_RESEARCH, COMPETITOR_ANALYSIS, BRAND_GUIDELINES, AVATAR_GUIDELINES, AFFILIATE_PROGRAMS, CONTENT_STRATEGY, CONTENT_CALENDAR, AUTOMATION_ARCHITECTURE, FINANCIAL_MODEL, OPERATIONS_LOG, PENDING_APPROVALS.
