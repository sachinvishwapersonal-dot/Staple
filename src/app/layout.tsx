import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Tinos } from 'next/font/google';
import { SiteChrome } from '@/components/layout/site-chrome';
import { SiteFooter } from '@/components/layout/site-footer';
import { SITE } from '@/config/site';
import './globals.css';

// Free stand-ins for Ritual's licensed type pairing (see globals.css):
// DM Sans for the geometric sans (CircularXX), Tinos for the Times-style
// serif (Dutch801 Rm BT).
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const tinos = Tinos({
  subsets: ['latin'],
  variable: '--font-tinos',
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: ['supplements', 'omega-3', 'magnesium bisglycinate', 'rTG', 'India', 'traceability'],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/assets/brand/staple-mark.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${tinos.variable} ${mono.variable}`}>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteChrome />
        <main id="content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
