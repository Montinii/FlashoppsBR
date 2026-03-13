import { Metadata } from 'next';
import { ProductCard, SectionHeading } from '@/components/ui';
import { categories, products, stores } from '@/lib/data';

export const metadata: Metadata = { title: 'Categorias', description: 'Explore promoções por categoria com filtros por loja, faixa de preço e desconto mínimo no Flashopps.' };

type SearchParams = { categoria?: string; loja?: string; precoMax?: string; descontoMin?: string; q?: string };

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const categoria = params.categoria ?? '';
  const loja = params.loja ?? '';
  const precoMax = Number(params.precoMax ?? 10000);
  const descontoMin = Number(params.descontoMin ?? 0);
  const query = (params.q ?? '').toLowerCase();

  const filtered = products.filter((product) => {
    const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    const matchesCategory = categoria ? product.category === categoria : true;
    const matchesStore = loja ? product.storeId === loja : true;
    const matchesPrice = product.price <= precoMax;
    const matchesDiscount = discount >= descontoMin;
    const haystack = `${product.name} ${product.category} ${product.storeId}`.toLowerCase();
    const matchesQuery = query ? haystack.includes(query) : true;
    return matchesCategory && matchesStore && matchesPrice && matchesDiscount && matchesQuery;
  });

  return (
    <section className="container-width py-16">
      <SectionHeading eyebrow="Categorias e filtros" title="Encontre ofertas por intenção de compra" subtitle="Página SEO-friendly com filtros laterais por loja, preço e desconto mínimo." />
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-3xl border bg-slate-50 p-5">
          <form className="grid gap-5">
            <input name="q" defaultValue={params.q} className="h-11 rounded-2xl border bg-white px-4 text-sm outline-none" placeholder="Ex.: smartwatch, air fryer" />
            <select name="categoria" defaultValue={categoria} className="h-11 rounded-2xl border bg-white px-4 text-sm outline-none"><option value="">Todas as categorias</option>{categories.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
            <select name="loja" defaultValue={loja} className="h-11 rounded-2xl border bg-white px-4 text-sm outline-none"><option value="">Todas as lojas</option>{stores.map((store) => <option key={store.id} value={store.id}>{store.name}</option>)}</select>
            <input type="number" name="precoMax" defaultValue={params.precoMax ?? 10000} className="h-11 rounded-2xl border bg-white px-4 text-sm outline-none" placeholder="Preço máximo" />
            <input type="number" name="descontoMin" defaultValue={params.descontoMin ?? 0} className="h-11 rounded-2xl border bg-white px-4 text-sm outline-none" placeholder="Desconto mínimo (%)" />
            <button className="h-11 rounded-2xl bg-brand-green text-sm font-bold text-white">Aplicar filtros</button>
          </form>
        </aside>
        <div><p className="mb-4 text-sm text-slate-500">{filtered.length} oferta(s) encontrada(s).</p><div className="grid gap-6 xl:grid-cols-3">{filtered.map((p: any) => <ProductCard key={p.id} product={p} />)}</div></div>
      </div>
    </section>
  );
}