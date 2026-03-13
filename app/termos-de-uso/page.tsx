import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = { title: 'Termos de Uso', description: 'Regras de uso, responsabilidades e condições gerais para navegação e utilização do Flashopps.' };

export default function Page() {
  return <section className="container-width py-16"><SectionHeading eyebrow="Termos de Uso" title="Regras e condições para uso do Flashopps" subtitle="Documento claro, acessível e alinhado ao funcionamento do portal." /><div className="max-w-4xl rounded-3xl border bg-white p-8 shadow-sm text-slate-700 space-y-4"><p><strong>Aceitação:</strong> ao usar o site, você declara ciência destes termos.</p><p><strong>Finalidade:</strong> o Flashopps atua como portal de conteúdo e curadoria de ofertas.</p><p><strong>Limitação de responsabilidade:</strong> preços, estoques, fretes e cupons podem mudar nas lojas de origem.</p><p><strong>Links externos:</strong> ao clicar, você poderá ser redirecionado a plataformas de terceiros.</p></div></section>;
}