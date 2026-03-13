import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = { title: 'Divulgação de Afiliados', description: 'Entenda como o Flashopps utiliza links de afiliado e como isso impacta a monetização do portal.' };

export default function Page() {
  return <section className="container-width py-16"><SectionHeading eyebrow="Divulgação de Afiliados" title="Transparência total sobre monetização" subtitle="Esta página explica de forma clara como funcionam os links de afiliado utilizados no Flashopps." /><div className="max-w-4xl rounded-3xl border bg-white p-8 shadow-sm text-slate-700 space-y-4"><p>O Flashopps participa de programas de afiliados de lojas e marketplaces. Isso significa que, ao clicar em alguns links e realizar uma compra, o site pode receber uma comissão.</p><p>Essa comissão não gera custo adicional para você.</p><p>Nossa curadoria busca destacar ofertas relevantes, úteis e com bom potencial de economia, mas a decisão de compra é sempre do usuário.</p></div></section>;
}