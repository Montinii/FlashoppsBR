import { Metadata } from 'next';
import { ProductCard, SectionHeading } from '@/components/ui';
import { getProductsByTag } from '@/lib/data';

export const metadata: Metadata = { title: 'Achados Incríveis', description: 'Curadoria manual do Flashopps com produtos que se destacam por preço, utilidade e potencial de compra.' };

export default function Page() {
  const products = getProductsByTag('achado-incrivel');
  return <section className="container-width py-16"><SectionHeading eyebrow="Achados Incríveis" title="Curadoria manual para quem quer encontrar antes da maioria" subtitle="Seleção com apelo de descoberta, utilidade e valor percebido acima da média." /><div className="grid gap-6 lg:grid-cols-4">{products.map((p: any) => <ProductCard key={p.id} product={p} />)}</div></section>;
}