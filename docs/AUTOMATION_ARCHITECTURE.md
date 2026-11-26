# Automation Architecture

## Principle
Claude doesn't run continuously in the background. Anything scheduled runs on **free, dependable infrastructure** (GitHub Actions, Cloudflare Pages). Claude does the judgment work (research, drafting, analysis) in working sessions, optionally triggered by scheduled Claude tasks once Josh approves them.

## What runs where
| Job | Runs on | Schedule | Status | Cost |
|---|---|---|---|---|
| Validate product DB (no unverified published claims) | `npm run build` → GitHub Actions `ci.yml` | Every push | Built | $0 |
| Typecheck + static build | GitHub Actions `ci.yml` | Every push | Built | $0 (public repo; private repos get a monthly free-minutes allowance) |
| Deploy | Cloudflare Pages Git integration | Every push to `main` | Needs Josh to connect | $0 (500 builds/mo free) |
| Affiliate redirects `/go/*` + security headers | `scripts/gen-redirects.mjs` → `out/_redirects`, `out/_headers` | Each build | Built | $0 |
| Broken-link check (products, certifier listings, content links) | `weekly-checks.yml` → `check-links.mjs` | Mondays 14:17 UTC | Built | $0 |
| Stale-verification check (>90 days) | `weekly-checks.yml` → `check-stale.mjs` | Mondays | Built | $0 |
| Alerts | GitHub Issue opened automatically on failure (emails repo watchers) | On failure | Built | $0 |
| Outbound click tracking | `public/track.js` → GA4 `affiliate_click` event | Real time | Built (needs GA ID) | $0 |
| Weekly performance report | Claude scheduled task: pull GA4/Search Console exports, write `reports/weekly-YYYY-WW.md`, recommend actions | Mondays | Planned (needs GA/GSC access) | $0 |
| Content drafting queue | Claude sessions; drafts land as PRs Josh can approve | Weekly | Planned | $0 |
| Social publishing | **Manual approval only** until Josh signs off on workflow and quality; then Meta Business Suite scheduler (native, free) | — | Not started | $0 |

## Operations dashboard
Phase 1: a `reports/` folder of weekly Markdown reports plus GitHub Issues (alerts = "Technical errors", label `approval` = "Pending approvals").
Phase 2 (after GA/GSC access): a Claude-built dashboard page showing published and upcoming content, link status, clicks, traffic and revenue entered from network dashboards.

## Secrets
- No secrets in the repo. `.env*` is git-ignored; `.env.example` documents variables.
- `NEXT_PUBLIC_*` values are public by design (GA measurement ID, site URL).
- Future API keys (GA4 Data API, Brevo) go in GitHub Actions secrets / Cloudflare env vars only.

## Costs that could appear later
- Private GitHub repo beyond the free Actions minutes → keep the repo public (content is public anyway) or watch usage.
- Cloudflare Pages Functions (not used; the site is fully static).
- Brevo above 300 emails/day → Starter plan from $9/mo (needs approval).

## Portability
Static HTML in `out/` can be hosted anywhere (Netlify, Vercel, GitHub Pages, S3). Content is Markdown and the product DB is JSON, so there's no vendor lock-in.
