import type { Metadata } from 'next';
import { Carlito, Inter, JetBrains_Mono } from 'next/font/google';
import { SiteChrome } from '@/components/layout/site-chrome';
import { SiteFooter } from '@/components/layout/site-footer';
import { SITE } from '@/config/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Headings use Calibri where it is installed. Carlito has the same metrics and
// is the web fallback, since Calibri cannot be served from the site.
const carlito = Carlito({
  subsets: ['latin'],
  variable: '--font-carlito',
  display: 'swap',
  weight: ['400', '700'],
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
    <html lang="en" className={`${inter.variable} ${carlito.variable} ${mono.variable}`}>
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
