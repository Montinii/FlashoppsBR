import { Metadata } from 'next';
import { ProductCard, SectionHeading } from '@/components/ui';
import { getProductsByTag } from '@/lib/data';

export const metadata: Metadata = { title: 'Ofertas do Dia', description: 'Acompanhe as Ofertas do Dia do Flashopps com timers e promoções por tempo limitado.' };

export default function Page() {
  const products = getProductsByTag('oferta-do-dia');
  return <section className="container-width py-16"><SectionHeading eyebrow="Ofertas do Dia" title="Promoções com tempo correndo" subtitle="Página dedicada às oportunidades de prazo curto para ganhar velocidade de decisão." /><div className="grid gap-6 lg:grid-cols-3">{products.map((p: any) => <ProductCard key={p.id} product={p} />)}</div></section>;
}