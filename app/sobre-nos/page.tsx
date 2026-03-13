import { Metadata } from 'next';
import { SectionHeading, TrustBadges } from '@/components/ui';

export const metadata: Metadata = { title: 'Sobre Nós', description: 'Conheça a proposta do Flashopps: curadoria de promoções com transparência, praticidade e foco em economia real.' };

export default function Page() {
  return (
    <section className="container-width py-16">
      <SectionHeading eyebrow="Sobre o Flashopps" title="Não nascemos para despejar links. Nascemos para filtrar o que vale a sua atenção." subtitle="O Flashopps foi pensado para o público brasileiro que gosta de aproveitar ofertas, mas já cansou de promoções confusas e descontos duvidosos." />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card-surface p-8"><h2 className="text-2xl font-extrabold">Como tudo começou</h2><p className="mt-4 leading-7 text-slate-600">A ideia do Flashopps surgiu de uma frustração simples: muita oferta publicada sem contexto, sem curadoria e sem clareza. Em vez de repetir esse padrão, o portal foi construído para organizar promoções de forma limpa, confiável e orientada à decisão.</p></div>
        <div className="card-surface p-8"><h2 className="text-2xl font-extrabold">Como trabalhamos</h2><ul className="mt-4 grid gap-4 text-slate-600"><li>• Curadoria de ofertas com foco em utilidade e preço.</li><li>• Estrutura visual limpa para reduzir ruído.</li><li>• Transparência total sobre monetização.</li><li>• Conteúdo complementar para evitar falso desconto.</li></ul></div>
      </div>
      <div className="mt-12"><TrustBadges /></div>
    </section>
  );
}