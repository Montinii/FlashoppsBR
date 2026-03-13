import { slugify } from '@/lib/utils';

export const site = {
  name: 'Flashopps',
  domain: 'flashopps.com.br',
  description:
    'Portal brasileiro de achados e promoções com curadoria diária, descontos quentes e ofertas do dia nas principais lojas online.'
};

export const stores = [
  { id: 'amazon', name: 'Amazon', color: 'bg-slate-900 text-white', logoText: 'a' },
  { id: 'shopee', name: 'Shopee', color: 'bg-orange-500 text-white', logoText: 'S' },
  { id: 'magalu', name: 'Magazine Luiza', color: 'bg-blue-600 text-white', logoText: 'Lu' },
  { id: 'americanas', name: 'Americanas', color: 'bg-red-600 text-white', logoText: 'A' },
  { id: 'aliexpress', name: 'AliExpress', color: 'bg-amber-500 text-white', logoText: 'Ali' },
  { id: 'mercado-livre', name: 'Mercado Livre', color: 'bg-yellow-400 text-slate-900', logoText: 'ML' }
] as const;

export const categories = [
  { id: 'tecnologia', name: 'Tecnologia', description: 'Gadgets, periféricos e eletrônicos úteis.', icon: '💻' },
  { id: 'casa-inteligente', name: 'Casa Inteligente', description: 'Automação, segurança e praticidade.', icon: '🏠' },
  { id: 'ferramentas', name: 'Ferramentas', description: 'Itens de reparo e manutenção.', icon: '🛠️' },
  { id: 'casa-e-cozinha', name: 'Casa e Cozinha', description: 'Utilidades e eletroportáteis.', icon: '🍳' },
  { id: 'moda-e-beleza', name: 'Moda e Beleza', description: 'Estilo e autocuidado.', icon: '✨' },
  { id: 'esportes', name: 'Esportes', description: 'Treino, mobilidade e bem-estar.', icon: '🏃' }
] as const;

const makeAffiliate = (store: string, product: string) => `https://flashopps.com.br/redirect/${store}/${slugify(product)}`;

export const products = [
  {
    id: '1', name: 'Smartwatch AMOLED Fit Pro 2 com GPS e chamadas Bluetooth', slug: slugify('Smartwatch AMOLED Fit Pro 2 com GPS e chamadas Bluetooth'), category: 'tecnologia', tag: 'oferta-do-dia', price: 549.9, oldPrice: 799.9, storeId: 'amazon', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80', highlight: 'Tela AMOLED e excelente custo-benefício.', endsAt: '2026-03-12T23:59:00-03:00', externalUrl: makeAffiliate('amazon', 'smartwatch amoled fit pro 2 com gps e chamadas bluetooth')
  },
  {
    id: '2', name: 'Kit 4 lâmpadas Wi‑Fi RGB compatível com Alexa e Google Home', slug: slugify('Kit 4 lâmpadas Wi‑Fi RGB compatível com Alexa e Google Home'), category: 'casa-inteligente', tag: 'desconto-quente', price: 159.9, oldPrice: 269.9, storeId: 'mercado-livre', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', highlight: 'Ótima porta de entrada para automação residencial.', externalUrl: makeAffiliate('mercado-livre', 'kit 4 lampadas wifi rgb compativel com alexa e google home')
  },
  {
    id: '3', name: 'Parafusadeira e furadeira 12V com maleta e 2 baterias', slug: slugify('Parafusadeira e furadeira 12V com maleta e 2 baterias'), category: 'ferramentas', tag: 'achado-incrivel', price: 359.9, oldPrice: 599.9, storeId: 'magalu', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80', highlight: 'Achado para manutenção doméstica e presente útil.', externalUrl: makeAffiliate('magalu', 'parafusadeira e furadeira 12v com maleta e 2 baterias')
  },
  {
    id: '4', name: 'Air fryer digital 5,5L com visor e 8 funções', slug: slugify('Air fryer digital 5,5L com visor e 8 funções'), category: 'casa-e-cozinha', tag: 'desconto-quente', price: 399.9, oldPrice: 649.9, storeId: 'americanas', image: 'https://images.unsplash.com/photo-1585515656863-89ee4c2f5f6f?auto=format&fit=crop&w=1200&q=80', highlight: 'Visual premium e ótimo ticket de conversão.', externalUrl: makeAffiliate('americanas', 'air fryer digital 5-5l com visor e 8 funcoes')
  },
  {
    id: '5', name: 'Secador profissional íon 2100W com 3 temperaturas', slug: slugify('Secador profissional íon 2100W com 3 temperaturas'), category: 'moda-e-beleza', tag: 'oferta-do-dia', price: 219.9, oldPrice: 349.9, storeId: 'amazon', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80', highlight: 'Boa margem de economia e apelo visual forte.', endsAt: '2026-03-12T22:30:00-03:00', externalUrl: makeAffiliate('amazon', 'secador profissional ion 2100w com 3 temperaturas')
  },
  {
    id: '6', name: 'Corda inteligente com contador digital e rolamento rápido', slug: slugify('Corda inteligente com contador digital e rolamento rápido'), category: 'esportes', tag: 'em-alta', price: 69.9, oldPrice: 119.9, storeId: 'shopee', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80', highlight: 'Produto simples, barato e de alta procura.', externalUrl: makeAffiliate('shopee', 'corda inteligente com contador digital e rolamento rapido')
  },
  {
    id: '7', name: 'Fone TWS ANC com estojo de recarga USB‑C', slug: slugify('Fone TWS ANC com estojo de recarga USB‑C'), category: 'tecnologia', tag: 'em-alta', price: 299.9, oldPrice: 499.9, storeId: 'mercado-livre', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80', highlight: 'Preço competitivo para público de tecnologia.', externalUrl: makeAffiliate('mercado-livre', 'fone tws anc com estojo de recarga usb-c')
  },
  {
    id: '8', name: 'Câmera Wi‑Fi 360° com visão noturna e alerta no celular', slug: slugify('Câmera Wi‑Fi 360° com visão noturna e alerta no celular'), category: 'casa-inteligente', tag: 'achado-incrivel', price: 199.9, oldPrice: 329.9, storeId: 'aliexpress', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=1200&q=80', highlight: 'Segurança doméstica com ótimo valor percebido.', externalUrl: makeAffiliate('aliexpress', 'camera wifi 360 com visao noturna e alerta no celular')
  },
  {
    id: '9', name: 'Jogo de panelas antiaderente 5 peças com tampa de vidro', slug: slugify('Jogo de panelas antiaderente 5 peças com tampa de vidro'), category: 'casa-e-cozinha', tag: 'em-alta', price: 459.9, oldPrice: 699.9, storeId: 'magalu', image: 'https://images.unsplash.com/photo-1584990347449-a5146c0c2c90?auto=format&fit=crop&w=1200&q=80', highlight: 'Categoria de utilidade com alta taxa de clique.', externalUrl: makeAffiliate('magalu', 'jogo de panelas antiaderente 5 pecas com tampa de vidro')
  },
  {
    id: '10', name: 'Mochila premium impermeável para notebook 15,6”', slug: slugify('Mochila premium impermeável para notebook 15,6”'), category: 'moda-e-beleza', tag: 'desconto-quente', price: 149.9, oldPrice: 249.9, storeId: 'amazon', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80', highlight: 'Campeã para público urbano e estudante.', externalUrl: makeAffiliate('amazon', 'mochila premium impermeavel para notebook 15-6')
  },
  {
    id: '11', name: 'Kit de ferramentas 129 peças com maleta reforçada', slug: slugify('Kit de ferramentas 129 peças com maleta reforçada'), category: 'ferramentas', tag: 'desconto-quente', price: 289.9, oldPrice: 459.9, storeId: 'americanas', image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80', highlight: 'Produto completo e muito vendável.', externalUrl: makeAffiliate('americanas', 'kit de ferramentas 129 pecas com maleta reforcada')
  },
  {
    id: '12', name: 'Projetor compacto Full HD com espelhamento sem fio', slug: slugify('Projetor compacto Full HD com espelhamento sem fio'), category: 'tecnologia', tag: 'achado-incrivel', price: 699.9, oldPrice: 999.9, storeId: 'mercado-livre', image: 'https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?auto=format&fit=crop&w=1200&q=80', highlight: 'Achado visual com excelente apelo de presente.', externalUrl: makeAffiliate('mercado-livre', 'projetor compacto full hd com espelhamento sem fio')
  }
] as const;

export const articles = [
  { slug: 'como-identificar-uma-oferta-real', title: 'Como identificar uma oferta real sem cair em falso desconto', excerpt: 'Checklist prático para comparar preço, reputação do vendedor e utilidade.', category: 'Guias', date: '12 mar 2026' },
  { slug: 'melhores-achados-casa-inteligente', title: '7 achados de casa inteligente para começar gastando pouco', excerpt: 'Uma lista objetiva para quem quer mais praticidade e automação.', category: 'Casa Inteligente', date: '10 mar 2026' },
  { slug: 'review-smartwatch-fit-pro-2', title: 'Review rápido: Smartwatch Fit Pro 2 vale a pena?', excerpt: 'Pontos fortes, limitações e perfil ideal de compra.', category: 'Review', date: '08 mar 2026' }
] as const;

export const featuredNumbers = [
  { label: 'Lojas parceiras', value: '6+' },
  { label: 'Categorias monitoradas', value: '6' },
  { label: 'Ofertas analisadas diariamente', value: '100+' }
] as const;

export const getStore = (id: string) => stores.find((store) => store.id === id);
export const getProductsByTag = (tag: string) => products.filter((product) => product.tag === tag);