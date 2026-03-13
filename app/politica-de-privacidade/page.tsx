import { Metadata } from 'next';
import { SectionHeading } from '@/components/ui';

export const metadata: Metadata = { title: 'Política de Privacidade', description: 'Leia a Política de Privacidade do Flashopps e entenda como tratamos dados pessoais, cookies e preferências.' };

export default function Page() {
  return <section className="container-width py-16"><SectionHeading eyebrow="Política de Privacidade" title="Informações claras sobre dados, cookies e comunicações" subtitle="Documento em linguagem acessível para reforçar transparência e confiança." /><div className="max-w-4xl rounded-3xl border bg-white p-8 shadow-sm text-slate-700 space-y-4"><p><strong>Dados coletados:</strong> nome, e-mail e dados técnicos de navegação, quando aplicável.</p><p><strong>Finalidade:</strong> melhorar a experiência, responder contatos, enviar newsletter quando autorizada e analisar desempenho.</p><p><strong>Cookies:</strong> podem ser utilizados para funcionalidades essenciais, medição e personalização.</p><p><strong>Direitos do titular:</strong> você pode solicitar correção, exclusão e demais direitos previstos em lei.</p></div></section>;
}