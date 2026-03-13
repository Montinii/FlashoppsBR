import { Metadata } from 'next';
import { BlogCards, SectionHeading } from '@/components/ui';
import { articles } from '@/lib/data';

export const metadata: Metadata = { title: 'Blog', description: 'Artigos, reviews rápidos e dicas para encontrar promoções melhores e comprar com mais segurança.' };

export default function Page() {
  return <section className="container-width py-16"><SectionHeading eyebrow="Blog Flashopps" title="Conteúdo para filtrar melhor, comparar melhor e comprar melhor" subtitle="Reviews, listas úteis e orientações práticas para dar valor próprio ao portal e fortalecer a estratégia de SEO." /><BlogCards items={articles as any} /></section>;
}