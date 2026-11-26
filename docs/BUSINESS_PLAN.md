# Filter Ledger: Business Plan

_Last updated: 2026-11-26 · Status: Phase 1 complete, Phase 4 (website) scaffolded_

## One line

**Filter Ledger** is a certification-first buying guide for home water filters. We check every filter's claims against the official certification listings, show the real cost of ownership, and match picks to what's actually in your water. It's presented by **Wren**, a clearly labeled AI host.

Tagline: **"Every claim, checked."**

## Why this niche (summary; details in NICHE_RESEARCH.md)

- Highest weighted score of 21 niches (86.0/100).
- Direct programs pay 8–10%+. Waterdrop states ≥8% with AOV >$235; Aquasana states 10%+. Amazon home categories pay about 3% with a 24-hour window.
- Replacement filters create repeat purchases.
- Regulatory churn (EPA's May 2026 PFAS proposals) keeps consumers confused and searching.
- Facebook's core audience (homeowners, parents) is the buyer.

## How the business makes money

1. **Affiliate commissions (primary).** A reader clicks a tracked link on our site or in a Facebook post, buys within the cookie window, and the merchant pays a percentage of the sale.
   - Direct/network programs: Waterdrop, Aquasana, AquaTru, Clearly Filtered and similar (via Impact, Awin, FlexOffers, Rakuten).
   - Amazon Associates: secondary, for products only sold there.
2. **Water-test referrals (secondary).** Our honest first step is always "know what's in your water". Testing services with affiliate programs pay on test-kit sales. Program terms are to be verified before use.
3. **Facebook in-app affiliate partnerships (opportunistic).** Meta lets eligible Pages tag affiliate products in Reels and posts. Eligibility depends on the Page, so this gets checked after launch.
4. **Later, only after validation:** a newsletter sponsorship, then a paid "water report decoder" digital product. Not before revenue is proven (Phase 9).

**Revenue math (moderate scenario, FINANCIAL_MODEL.md):** about $52 per 1,000 site visitors. $1,000/month needs about 19,000 visitors/month. These are planning assumptions, not forecasts.

## Startup budget (cap: $100; planned: $0–15)

| Item | Cost | Status |
|---|---|---|
| Hosting: Cloudflare Pages free plan (500 builds/mo, unlimited static requests) | $0 | Ready to deploy |
| Code: GitHub free | $0 | Josh creates repo or authorizes |
| Analytics: GA4 + Search Console | $0 | Needs Josh's Google account |
| Email: Brevo free (300 sends/day, "Sent with Brevo" badge) | $0 | Deferred until there's an audience |
| Automation: GitHub Actions on a public repo | $0 | Workflow written |
| Graphics: Canva free / original SVG | $0 | — |
| Video: CapCut free tier (check export watermark and commercial terms before first use) | $0 | To verify |
| Voice: free TTS; check commercial-use rights per tool | $0 | To verify |
| Avatar images: free generator with commercial rights | $0 | To verify the terms of the tool Josh already uses |
| **Domain name (.com)** | **~$10–15/yr** (confirm at checkout) | **Needs Josh's approval: the only recommended spend** |

**Free alternative to the domain:** launch on `filter-ledger.pages.dev`. It works, but it's weaker for brand trust, affiliate approvals and email deliverability. Recommendation: buy the domain.

## Technology stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router, static export) + TypeScript | Static HTML is fast, free to host, and nothing runs on a server that could cost money |
| Styling | Tailwind CSS | Small CSS, consistent design tokens |
| Content | Markdown files with frontmatter in Git | Versioned, reviewable, portable; no database needed for content |
| Product database | `data/products.json` in Git, validated at build | Free, diff-able, and the build fails when a product is missing a verification date or certification evidence. **Supabase deferred**: nothing needs a live DB until we have email sign-ups or click logs |
| Affiliate links | `/go/<slug>` redirects generated into Cloudflare `_redirects` | Clean links, one place to update, broken-link checks |
| Hosting | Cloudflare Pages | Free tier is enough at our scale |
| Analytics | GA4 (+ outbound click events) and Search Console | Free |
| Automation | GitHub Actions (link check, stale-verification check, build) | Free for public repos |
| Email | Brevo free | Once there are subscribers |

## 30-day execution plan

| Days | Work | Owner | Needs Josh? |
|---|---|---|---|
| 1 (today) | Research, brand, docs, site scaffold with templates, legal pages, first evergreen guide | Claude | No |
| 1–2 | Approve brand name + domain purchase; create GitHub repo; connect Cloudflare Pages | Josh | **Yes** |
| 2–4 | Generate Wren avatar library (prompts ready) in a commercially licensed tool | Claude via Josh's browser session, or Josh | Tool choice |
| 2–7 | Verify certifications for 15–20 seed products against NSF/WQA/IAPMO listings; fill product DB | Claude | No |
| 3–10 | Write 10 cornerstone pages (see CONTENT_STRATEGY.md); every one fact-checked | Claude | Review first 2 |
| 5–7 | Apply to Amazon Associates and 3–4 direct programs (applications prepared) | Josh submits | **Yes** |
| 7 | Create Facebook Page (Josh as owner/admin), set "AI creator"/AI labels, publish disclosures | Josh creates | **Yes** |
| 8–14 | Produce first 14 Reels + 14 posts; Josh approves batch | Claude | **Yes (approval)** |
| 10 | Launch site; submit sitemap to Search Console | Claude | Access |
| 14–30 | Daily publishing (manual approval), weekly report, fix and iterate | Claude + Josh approve | Weekly |
| 30 | First review: impressions, clicks, outbound clicks, first commissions; adjust plan | Claude | Read report |

## Done today

1. Niche research, scoring, competitor analysis, recommendation (this folder).
2. Brand guidelines and avatar guidelines with image-generation prompts.
3. Affiliate program database with application packets.
4. Next.js site: templates, legal pages, disclosures, product DB with validation, redirect generation, outbound click tracking hook, link-check workflow. It builds with no errors.
5. First cornerstone guide: "NSF/ANSI 42 vs 53 vs 58 vs 401".
6. 30-day content calendar and 90-day SEO roadmap.

## Next steps that need Josh (see PENDING_APPROVALS.md)

Brand and domain approval, GitHub/Cloudflare access, affiliate application submission, Facebook Page creation.

## Risks and controls

| Risk | Control |
|---|---|
| Health-claim / FTC exposure | Claim language rules (BRAND_GUIDELINES.md), certifier links, no outcome claims, disclosures on every page and post |
| Google "scaled content abuse" / helpful-content filters | Small number of deep, original pages; no mass AI pages; human approval of the first batch; visible change logs |
| Amazon 3-sales/180-days gate | Don't depend on Amazon; apply only once traffic exists |
| AI avatar seen as deceptive | Wren is labeled as AI everywhere; Meta "AI info" label applied to any realistic video or voice |
| No hands-on testing | Never claim testing; audit certifications and do cost math instead |
