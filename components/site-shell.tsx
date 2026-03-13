'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SearchBar } from '@/components/ui';
import { stores } from '@/lib/data';

function ExitIntentPopup() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('flashopps-exit');

    if (hasSeenPopup) return;

    const handler = (event: MouseEvent) => {
      if (event.clientY <= 8) {
        setVisible(true);
        sessionStorage.setItem('flashopps-exit', '1');
      }
    };

    document.addEventListener('mouseout', handler);

    return () => document.removeEventListener('mouseout', handler);
  }, []);

  function handleClose() {
    setVisible(false);
    sessionStorage.setItem('flashopps-exit', '1');
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/55 p-4">
      <div className="w-full max-w-xl rounded-[2rem] bg-white p-8 shadow-2xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-brand-orange">
          Antes de sair…
        </p>
        <h3 className="text-3xl font-extrabold">
          Receba os melhores achados da semana
        </h3>
        <p className="mt-3 text-slate-600">
          Entre para a lista do Flashopps e receba ofertas filtradas sem ruído.
        </p>

        <form
  className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]"
  onSubmit={(e) => e.preventDefault()}
>
  <input
    type="email"
    placeholder="Seu melhor e-mail"
    className="h-12 rounded-2xl border px-4 text-sm outline-none"
  />
  <button
    type="submit"
    className="h-12 rounded-2xl bg-brand-orange px-5 text-sm font-bold text-white"
  >
    Quero receber
  </button>
</form>

        <button
          onClick={handleClose}
          className="mt-6 font-semibold text-brand-green"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const nav = [
    { href: '/', label: 'Início' },
    { href: '/achados-incriveis', label: 'Achados Incríveis' },
    { href: '/descontos-quentes', label: 'Descontos Quentes' },
    { href: '/ofertas-do-dia', label: 'Ofertas do Dia' },
    { href: '/categorias', label: 'Categorias' },
    { href: '/blog', label: 'Blog' }
  ];
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="container-width py-4">
        <div className="flex items-center gap-3 lg:gap-6">
          <Link href="/" className="shrink-0 rounded-2xl border px-4 py-2"><span className="text-xl font-black text-brand-green">Flash</span><span className="text-xl font-black text-brand-orange">opps</span></Link>
          <div className="hidden flex-1 lg:block"><SearchBar /></div>
          <nav className="hidden items-center gap-5 lg:flex">{nav.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 hover:text-brand-green">{item.label}</Link>)}</nav>
          <Link href="/ofertas-do-dia" className="hidden rounded-2xl bg-brand-orange px-4 py-3 text-sm font-bold text-white lg:inline-flex">Ver Ofertas Agora</Link>
          <button className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border lg:hidden" onClick={() => setOpen(!open)}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
        {open ? <div className="mt-4 space-y-4 rounded-3xl border bg-white p-4 lg:hidden"><SearchBar /><div className="grid gap-2">{nav.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">{item.label}</Link>)}</div></div> : null}
      </div>
      <ExitIntentPopup />
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container-width py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr]">
          <div>
            <div className="inline-flex rounded-2xl border bg-white px-4 py-3"><span className="text-xl font-black text-brand-green">Flash</span><span className="text-xl font-black text-brand-orange">opps</span></div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">Portal brasileiro de promoções, achados e ofertas com curadoria objetiva e transparência total sobre monetização.</p>
          </div>
          <div><h3 className="text-sm font-extrabold uppercase tracking-[.18em]">Explorar</h3><div className="mt-4 grid gap-3 text-sm text-slate-600"><Link href="/achados-incriveis">Achados Incríveis</Link><Link href="/descontos-quentes">Descontos Quentes</Link><Link href="/ofertas-do-dia">Ofertas do Dia</Link><Link href="/categorias">Categorias</Link><Link href="/blog">Blog</Link></div></div>
          <div><h3 className="text-sm font-extrabold uppercase tracking-[.18em]">Institucional</h3><div className="mt-4 grid gap-3 text-sm text-slate-600"><Link href="/sobre-nos">Sobre Nós</Link><Link href="/contato">Contato</Link><Link href="/politica-de-privacidade">Política de Privacidade</Link><Link href="/termos-de-uso">Termos de Uso</Link><Link href="/aviso-legal">Aviso Legal</Link></div></div>
          <div><h3 className="text-sm font-extrabold uppercase tracking-[.18em]">Afiliados</h3><div className="mt-4 grid gap-3 text-sm text-slate-600"><Link href="/divulgacao-de-afiliados">Divulgação de Afiliados</Link>{stores.map((store) => <span key={store.id}>{store.name}</span>)}</div></div>
        </div>
        <div className="mt-10 border-t pt-6 text-sm text-slate-500">© 2026 Flashopps. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}