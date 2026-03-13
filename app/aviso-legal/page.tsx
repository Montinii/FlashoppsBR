import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = { title: 'Aviso Legal', description: 'Avisos legais sobre disponibilidade de ofertas, marcas de terceiros e responsabilidade editorial do Flashopps.' };

export default function Page() {
  return <section className="container-width py-16"><SectionHeading eyebrow="Aviso Legal" title="Informações importantes sobre conteúdo, preços e marcas citadas" subtitle="Clareza jurídica e editorial para reduzir ambiguidades e reforçar transparência." /><div className="max-w-4xl rounded-3xl border bg-white p-8 shadow-sm text-slate-700 space-y-4"><p>Os preços, descontos, prazos e estoques podem mudar a qualquer momento nas lojas de origem.</p><p>As marcas citadas pertencem aos seus respectivos titulares.</p><p>O Flashopps não realiza venda direta de produtos.</p></div></section>;
}