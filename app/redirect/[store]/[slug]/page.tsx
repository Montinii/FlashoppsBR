import { notFound, redirect } from 'next/navigation';
import { products } from '@/lib/data';

export default async function Page({ params }: { params: Promise<{ store: string; slug: string }> }) {
  const { store, slug } = await params;
  const product = products.find((item) => item.storeId === store && item.slug === slug);
  if (!product) notFound();
  const target = `https://www.${store === 'magalu' ? 'magazineluiza' : store}.com.br/`;
  redirect(target);
}