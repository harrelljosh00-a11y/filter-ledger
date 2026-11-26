# Affiliate Programs

_Rates change. Each figure carries its source and the date it was checked. Re-verify inside the network dashboard on approval, because the dashboard terms are the ones that count._

## Program database

| Merchant | Program / network | Commission (source) | Cookie | Notes | Last verified |
|---|---|---|---|---|---|
| Waterdrop | Direct page; Impact (US); Awin (UK/ES); FlexOffers | "At least 8%", AOV >$235, 3.5% avg CR (Waterdrop page); 6.4% (FlexOffers); 7% (Awin UK) | 30 days (Awin UK); 30/45 days (FlexOffers listings) | Bans PPC on brand terms and Facebook Ads (per a network listing) | 2026-11-26 |
| Aquasana | Direct page; Rakuten (per LinkClicky); FlexOffers | "Starting at 10%" (Aquasana page); 8% (FlexOffers) | 30 days (FlexOffers) | Case study: $129 AOV | 2026-11-26 |
| AquaTru | Direct page; Impact | "Up to 22%" (AquaTru page); 5% (LinkClicky listing) | Not published | Confirm the real tier on approval | 2026-11-26 |
| Clearly Filtered | FlexOffers | Not published | 45 days (FlexOffers) | Apply to learn terms | 2026-11-26 |
| Amazon Associates | Direct | 4% "All Other Categories" (official schedule); ~3% Home/Tools (secondary sources) | ~24 h session | Needs 3 qualifying sales in 180 days; personal orders don't count; no paid or boosted traffic to Amazon | 2026-11-26 |
| Meta affiliate partnerships | In-app (Professional dashboard → Monetization) | Set by brand | n/a | Page eligibility required; links get a paid-partnership label | 2026-11-26 |

**To research next (not yet verified):** Culligan, PUR/Brita (via retailers), Berkey alternatives, SpringWell, iSpring, Home Depot (Impact), water-test kits (Tap Score, SimpleLab, Safe Home).

## Product database
Lives in `data/products.json` in the site repo. Fields: merchant, program, product, category, affiliate URL, commission rate, cookie days, merchant reputation note, price, certifications (each with standard, contaminants, certifier and listing URL), last verified date.
- The build **fails** if a published product lacks a `lastVerified` date or listing URL.
- Products with `"status": "draft"` are hidden until verified.

## Application packet (ready to paste; Josh submits)

**Site URL:** _(domain once purchased)_
**Site description:**
> Filter Ledger is an independent buying guide for home water filters. We compare filters by what they're officially certified to reduce (NSF/ANSI, WQA, IAPMO listings), their cost of ownership, and how well they match a reader's own water quality report. We publish detailed comparisons, buying guides and short explainer videos on Facebook.

**Promotional methods:** organic SEO content; organic Facebook Page posts and Reels; email newsletter (opt-in only, later). No paid search, no coupon sites, no incentivized traffic.
**Audience:** US homeowners and renters researching drinking-water filters.
**Monthly traffic:** report the real number from GA4 at the time of applying. At launch that's "new site, launched [date]". Never estimate upward.
**Disclosure:** FTC-compliant disclosure on every page and post (link to /disclosure).

## Rules
- Never fabricate traffic, history or audience size.
- Don't use merchant trademarks in domains or Page names.
- Use only merchant-provided creative or properly licensed images.
- Check each program's social-media and Facebook-ads rules before linking from Facebook (some ban Facebook *ads*; organic posts usually differ, so confirm in the terms).
