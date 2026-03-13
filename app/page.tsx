import { Metadata } from 'next';
import { BlogCards, CategoryCard, NewsletterCard, ProductCard, SectionHeading, StoreCarousel, TrustBadges } from '@/components/ui';
import { articles, categories, featuredNumbers, getProductsByTag, stores } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Início',
  description: 'Descubra ofertas do dia, descontos quentes e achados incríveis nas principais lojas do Brasil com curadoria do Flashopps.'
};

export default function HomePage() {
  const offers = getProductsByTag('oferta-do-dia');
  const hot = getProductsByTag('desconto-quente');
  const curated = getProductsByTag('achado-incrivel');
  const trending = getProductsByTag('em-alta');

  return (
    <>
      <section className="gradient-hero border-b">
        <div className="container-width py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-orange">Achados Incríveis • Descontos Quentes • Ofertas do Dia</p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">O portal brasileiro para encontrar ofertas que realmente valem o clique.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">O Flashopps reúne promoções selecionadas, curadoria manual e links diretos para as principais lojas do Brasil. Menos ruído. Mais oportunidade real de economizar.</p>
              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">{featuredNumbers.map((item) => <div key={item.label} className="rounded-3xl border bg-white p-5 shadow-sm"><div className="text-2xl font-black text-brand-green">{item.value}</div><div className="mt-1 text-sm text-slate-600">{item.label}</div></div>)}</div>
            </div>
            <div className="card-surface overflow-hidden p-4"><div className="rounded-[2rem] bg-slate-950 p-6 text-white"><p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-300">Seleção de hoje</p><div className="mt-5 grid gap-4">{offers.slice(0, 3).map((product: any) => <div key={product.id} className="rounded-3xl bg-white/10 p-4"><div className="flex items-start justify-between gap-3"><div><p className="text-sm font-bold">{product.name}</p><p className="mt-1 text-sm text-white/80">{product.highlight}</p></div><span className="inline-flex rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white">Oferta</span></div><div className="mt-4 text-2xl font-black text-orange-300">R$ {product.price.toFixed(2).replace('.', ',')}</div></div>)}</div></div></div>
          </div>
        </div>
      </section>

      <section className="container-width py-16"><SectionHeading eyebrow="Ofertas do Dia" title="Promoções com senso de urgência e alto potencial de economia" subtitle="Cards com timer regressivo para destacar oportunidades com prazo e estimular ação rápida." /><div className="grid gap-6 lg:grid-cols-3">{offers.map((p: any) => <ProductCard key={p.id} product={p} />)}</div></section>
      <section className="bg-slate-50 py-16"><div className="container-width"><SectionHeading eyebrow="Descontos Quentes" title="Mais de 30% off em produtos com apelo forte de conversão" subtitle="Seleção ideal para quem quer impacto visual no desconto e mais motivação de clique." /><div className="grid gap-6 lg:grid-cols-4">{hot.map((p: any) => <ProductCard key={p.id} product={p} />)}</div></div></section>
      <section className="container-width py-16"><SectionHeading eyebrow="Achados Incríveis" title="Curadoria manual para destacar o que normalmente passa despercebido" subtitle="Produtos com boa relação entre preço, utilidade e potencial de viralização." /><div className="grid gap-6 lg:grid-cols-4">{curated.map((p: any) => <ProductCard key={p.id} product={p} />)}</div></section>
      <section className="bg-slate-50 py-16"><div className="container-width"><SectionHeading eyebrow="Categorias" title="Navegue pelas categorias mais buscadas" subtitle="Arquitetura clara para reduzir atrito e facilitar a descoberta de ofertas por intenção." /><div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{categories.map((c) => <CategoryCard key={c.id} category={c} />)}</div></div></section>
      <section className="container-width py-16"><SectionHeading eyebrow="Produtos em alta" title="Itens com forte apelo de clique e procura consistente" subtitle="Vitrine de produtos em alta para manter o portal atualizado e comercial." /><div className="grid gap-6 lg:grid-cols-4">{trending.map((p: any) => <ProductCard key={p.id} product={p} />)}</div></section>
      <section className="bg-slate-50 py-16"><div className="container-width"><SectionHeading eyebrow="Lojas parceiras" title="As principais vitrines do e-commerce brasileiro" subtitle="Bloco visual para reforçar autoridade e familiaridade." /><StoreCarousel items={stores as any} /></div></section>
      <section className="container-width py-16"><SectionHeading eyebrow="Blog" title="Conteúdo para comprar melhor e evitar falso desconto" subtitle="Reviews rápidos, comparativos e dicas objetivas ajudam o site a gerar valor próprio e melhorar SEO." /><BlogCards items={articles as any} /></section>
      <section className="container-width pb-16"><NewsletterCard /></section>
      <section className="container-width pb-20"><SectionHeading eyebrow="Confiança" title="Transparência e experiência segura em cada clique" subtitle="Selos textuais e provas de seriedade para reduzir desconfiança comum em páginas de promoções." /><TrustBadges /></section>
    </>
  );
}