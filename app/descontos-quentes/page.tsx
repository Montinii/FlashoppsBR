import { Metadata } from 'next';
import { ProductCard, SectionHeading } from '@/components/ui';
import { getProductsByTag } from '@/lib/data';

export const metadata: Metadata = { title: 'Descontos Quentes', description: 'Seleção do Flashopps com descontos quentes acima de 30% em categorias populares.' };

export default function Page() {
  const products = getProductsByTag('desconto-quente');
  return <section className="container-width py-16"><SectionHeading eyebrow="Descontos Quentes" title="Descontos que chamam atenção antes mesmo do clique" subtitle="Perfeito para destacar economia imediata e sensação de oportunidade." /><div className="grid gap-6 lg:grid-cols-4">{products.map((p: any) => <ProductCard key={p.id} product={p} />)}</div></section>;
}