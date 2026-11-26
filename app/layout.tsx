import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://filter-ledger.pages.dev";
const ga = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Filter Ledger: every water filter claim, checked", template: "%s · Filter Ledger" },
  description: "Independent buying guides for home water filters. We check each claim against official NSF, WQA and IAPMO certification listings and show the real cost of ownership.",
  openGraph: { siteName: "Filter Ledger", type: "website" },
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Filter Ledger", statusBarStyle: "default" },
  icons: { icon: "/logo.svg", apple: "/apple-touch-icon.png" },
  formatDetection: { telephone: false },
  verification: { google: "CxxupTqpZzs9xeAe3PoOthTz2Bt4-BRjhtTKN9owIO8" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0F2A3D",
};

const nav = [["Guides", "/guides/"], ["Best Picks", "/best/"], ["Comparisons", "/vs/"], ["How we review", "/how-we-review/"]];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
        <header className="bg-ink text-white sticky top-0 z-10 pt-[env(safe-area-inset-top)]">
          <div className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2 font-serif text-xl font-semibold">
              <img src="/logo.svg" alt="" width={28} height={28} /> Filter Ledger
            </Link>
            <nav aria-label="Main" className="w-full sm:w-auto -mx-1 overflow-x-auto"><ul className="flex gap-1 text-[15px] whitespace-nowrap">
              {nav.map(([l, h]) => <li key={h}><Link href={h} className="inline-flex min-h-11 items-center px-2 rounded-md active:bg-white/10 hover:underline">{l}</Link></li>)}
            </ul></nav>
          </div>
        </header>
        <main id="main" className="flex-1 mx-auto w-full max-w-5xl px-[max(1rem,env(safe-area-inset-left))] py-8">{children}</main>
        <footer className="border-t border-slate-200 text-sm text-slate-600">
          <div className="mx-auto max-w-5xl px-4 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-wrap gap-x-5 gap-y-3">
            <span>© {new Date().getFullYear()} Filter Ledger</span>
            <Link href="/about/">About</Link><Link href="/disclosure/">Affiliate disclosure</Link>
            <Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/contact/">Contact</Link>
            <span className="w-full">Information only, not medical advice. Wren is an AI-generated host.</span>
          </div>
        </footer>
        {ga && (<>
          {/* Google tag snippet exactly as issued by GA4 for this property */}
          <Script src={`https://www.googletagmanager.com/gtm.js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());`}</Script>
        </>)}
        <Script src="/track.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
