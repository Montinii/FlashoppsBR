import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = { title: 'Contato', description: 'Entre em contato com o Flashopps para parcerias, dúvidas e sugestões.' };

export default function Page() {
  return (
    <section className="container-width py-16">
      <SectionHeading eyebrow="Contato" title="Fale com o Flashopps" subtitle="Dúvidas, sugestões de parceria, erros em ofertas ou solicitações institucionais." />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card-surface p-8"><h2 className="text-xl font-extrabold">Informações diretas</h2><div className="mt-4 grid gap-3 text-slate-600"><p><strong>E-mail:</strong> contato@flashopps.com.br</p><p><strong>Parcerias:</strong> comercial@flashopps.com.br</p></div></div>
        <form className="card-surface grid gap-4 p-8"><input className="h-12 rounded-2xl border px-4 text-sm outline-none" placeholder="Seu nome" /><input type="email" className="h-12 rounded-2xl border px-4 text-sm outline-none" placeholder="Seu e-mail" /><input className="h-12 rounded-2xl border px-4 text-sm outline-none" placeholder="Assunto" /><textarea className="min-h-40 rounded-2xl border px-4 py-3 text-sm outline-none" placeholder="Sua mensagem" /><button className="h-12 rounded-2xl bg-brand-green text-sm font-bold text-white">Enviar mensagem</button></form>
      </div>
    </section>
  );
}