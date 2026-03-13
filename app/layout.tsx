import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site-shell';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: 'Flashopps | Achados incríveis, descontos quentes e ofertas do dia', template: '%s | Flashopps' },
  description: site.description,
  robots: { index: true, follow: true },
  openGraph: { title: 'Flashopps', description: site.description, url: `https://${site.domain}`, siteName: 'Flashopps', locale: 'pt_BR', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'WebSite', name: 'Flashopps', url: `https://${site.domain}`,
    potentialAction: { '@type': 'SearchAction', target: `https://${site.domain}/categorias?q={search_term_string}`, 'query-input': 'required name=search_term_string' }
  };
  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}