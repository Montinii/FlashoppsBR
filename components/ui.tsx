'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock3, ExternalLink, ChevronRight, Mail, Search, ShieldCheck, Flame, BadgePercent } from 'lucide-react';
import { cn, formatBRL, calcDiscount } from '@/lib/utils';
import { getStore } from '@/lib/data';

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-orange">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}

function Countdown({ endsAt }: { endsAt?: string }) {
  const [text, setText] = React.useState('Oferta ativa');
  React.useEffect(() => {
    if (!endsAt) return;
    const tick = () => {
      const diff = new Date(endsAt).getTime() - Date.now();
      if (diff <= 0) return setText('Encerrando');
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setText(`${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`);
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [endsAt]);
  return <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"><Clock3 className="h-3.5 w-3.5" />{text}</div>;
}

export function ProductCard({ product }: { product: any }) {
  const store = getStore(product.storeId)!;
  const discount = calcDiscount(product.oldPrice, product.price);
  return (
    <article className="card-surface overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="inline-flex rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white">-{discount}%</span>
          {product.endsAt ? <Countdown endsAt={product.endsAt} /> : null}
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className={cn('inline-flex h-8 items-center rounded-full px-3 text-xs font-bold', store.color)}>{store.logoText} • {store.name}</span>
          <span className="text-xs text-slate-500">{product.highlight}</span>
        </div>
        <h3 className="min-h-[3.4rem] text-base font-bold text-slate-950 line-clamp-2">{product.name}</h3>
        <div className="flex items-end gap-3">
          <div>
            <p className="text-xs text-slate-500 line-through">{formatBRL(product.oldPrice)}</p>
            <p className="text-2xl font-extrabold text-brand-green">{formatBRL(product.price)}</p>
          </div>
          <div className="rounded-2xl bg-orange-50 px-3 py-2 text-xs font-semibold text-brand-orange">Economia de {discount}%</div>
        </div>
        <Link href={product.externalUrl} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-orange px-4 py-3 text-sm font-bold text-white hover:bg-orange-600">
          Ver na loja <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function CategoryCard({ category }: { category: any }) {
  return (
    <Link href={`/categorias?categoria=${category.id}`} className="card-surface block p-5">
      <div className="mb-4 text-3xl">{category.icon}</div>
      <h3 className="text-lg font-bold text-slate-950">{category.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{category.description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">Explorar categoria <ChevronRight className="h-4 w-4" /></span>
    </Link>
  );
}

export function StoreCarousel({ items }: { items: any[] }) {
  return <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{items.map((store) => <div key={store.id} className="card-surface flex h-24 items-center justify-center p-4"><div className={cn('flex h-12 w-full items-center justify-center rounded-2xl text-sm font-black', store.color)}>{store.logoText} <span className="ml-2 font-semibold">{store.name}</span></div></div>)}</div>;
}

export function BlogCards({ items }: { items: any[] }) {
  return <div className="grid gap-6 lg:grid-cols-3">{items.map((article) => <article key={article.slug} className="card-surface p-6"><span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-orange">{article.category}</span><h3 className="mt-3 text-xl font-bold text-slate-950">{article.title}</h3><p className="mt-3 text-sm text-slate-600">{article.excerpt}</p><div className="mt-5 flex items-center justify-between text-sm text-slate-500"><span>{article.date}</span><Link href="/blog" className="font-semibold text-brand-green">Ler mais</Link></div></article>)}</div>;
}

export function NewsletterCard() {
  return <div className="card-surface overflow-hidden bg-gradient-to-r from-brand-green to-green-800 p-8 text-white"><div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-center"><div><p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-200">Flashopps por e-mail</p><h3 className="text-3xl font-extrabold tracking-tight">Receba os melhores achados por e-mail</h3><p className="mt-3 max-w-2xl text-sm text-green-50 sm:text-base">Promoções relevantes, curadoria objetiva e ofertas que realmente valem o clique.</p></div><form className="grid gap-3 rounded-3xl bg-white/10 p-4 sm:grid-cols-[1fr_auto]"><div className="relative"><Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/80" /><input type="email" placeholder="Seu melhor e-mail" className="h-12 w-full rounded-2xl border border-white/20 bg-white/15 pl-11 pr-4 text-sm text-white placeholder:text-white/70 outline-none" /></div><button className="h-12 rounded-2xl bg-brand-orange px-5 text-sm font-bold text-white">Quero receber</button></form></div></div>;
}

export function SearchBar({ defaultValue = '' }: { defaultValue?: string }) {
  return <form action="/categorias" className="relative w-full max-w-xl"><Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input name="q" defaultValue={defaultValue} placeholder="Busque por produto, loja ou categoria" className="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-brand-green" /></form>;
}

export function TrustBadges() {
  const items = [
    { icon: ShieldCheck, title: 'Navegação segura', text: 'Estrutura leve, transparente e confiável.' },
    { icon: BadgePercent, title: 'Afiliado com transparência', text: 'Alguns links podem gerar comissão sem custo extra.' },
    { icon: Flame, title: 'Curadoria diária', text: 'Ofertas filtradas com foco em economia real.' }
  ];
  return <div className="grid gap-4 md:grid-cols-3">{items.map((item) => <div key={item.title} className="card-surface p-5"><item.icon className="mb-4 h-8 w-8 text-brand-green" /><h3 className="text-base font-bold">{item.title}</h3><p className="mt-2 text-sm text-slate-600">{item.text}</p></div>)}</div>;
}