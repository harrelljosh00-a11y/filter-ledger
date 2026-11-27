# Operations Log

## 2026-11-26: Session 1
**Decisions**
- Niche: home water filtration (scored 86.0/100 across 21 niches). Gaming setups excluded to avoid overlap with Setup Verdict.
- Brand: Filter Ledger, "Every claim, checked." Host: Wren (AI, illustrated-realistic, always labeled).
- Stack: Next.js 16 static export + Tailwind 4 + Markdown + JSON product DB on Cloudflare Pages. Supabase deferred (no need yet).
- Amazon Associates secondary; direct water-filter programs primary.

**Built**
- 13 project documents. Website with 5 templates (guide, roundup, comparison, review, article), Claim Check shortcode, disclosures, legal pages, sitemap, robots, JSON-LD, GA4 + outbound click events, `/go/` redirects, security headers, product validator, link and staleness checks, CI and weekly workflows.
- Published content: "NSF/ANSI 42 vs 53 vs 58 vs 401" guide (sources: NSF, SimpleLab, EPA). Draft template: "Best filters certified for lead".
- Verified: production build passes; desktop and mobile screenshots checked.

**Open tasks**
- C-1: Logged-in review of competitor social accounts (followers, frequency, top Reels).
- P-1: Verify certifications for 15–20 seed products in the NSF/WQA/IAPMO databases (fetching from the workspace shell is blocked, so this runs via web fetch or a browser).
- P-2: Confirm current commission terms inside each network after approval.
- A-1: Generate the Wren image library (blocked on approval #5).
- S-1: Write the 9 remaining Month 1 pages.

**Costs to date:** $0.

## 2026-11-26: Session 2 (via Claude in Chrome)
- USPTO search: no "Filter Ledger" marks. Many unrelated "LEDGER" marks (crypto wallets, accounting software, restaurants), none for water filters. Not legal clearance.
- GitHub repo created: github.com/harrelljosh00-a11y/filter-ledger (public). Code uploaded as a zip and unpacked by the one-time `unpack.yml` workflow. Wren images committed to public/brand.
- Cloudflare Pages project `filter-ledger` (direct upload): live at https://filter-ledger-dh7.pages.dev
- GA4 account "Filter Ledger" + web stream; Google tag GTM-NJN5FM5F wired in. Search Console URL-prefix property verified via meta tag; sitemap.xml submitted.
- iPhone fixes: safe-area insets, 44px tap targets, apple-touch-icon, web manifest, scrollable tables, 16px inputs, shorter nav labels.
- Wren image set generated in Gemini (headshot, presenting 9:16, thumbs-up, skeptical, cover 16:9). Gemini terms: Google doesn't claim ownership of outputs. Sources disagree on commercial use for the free tier, so confirm in Google's own terms before running ads.
- Pending re-deploy: the build with Wren on the site was made after Chrome disconnected (site.zip / source.zip ready to upload).
- Affiliate applications held: the site has 1 article and 0 verified products, so applying now risks rejection (Amazon reviews within 180 days; others review content). Apply after ~10 pages.
