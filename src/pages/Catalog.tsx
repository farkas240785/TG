import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { catalogMeta, filterProducts } from '../data/catalog';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type') || '';
  const filtered = useMemo(() => filterProducts({ type: typeFilter }), [typeFilter]);
  const updateFilter = (key: string, value: string) => { const params = new URLSearchParams(searchParams); if (value) params.set(key, value); else params.delete(key); setSearchParams(params); };

  return (
    <div>
      <section className="py-20" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <p className="label-gold mb-4">Каталог</p>
          <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Изделия</h1>
          <p className="label">{filtered.length} позиций</p>
        </div>
      </section>
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-32 p-8" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
              <p className="label-gold mb-6">Фильтры</p>
              <div className="mb-10"><h3 className="label mb-6">Тип</h3><div className="space-y-4">{Object.entries(catalogMeta.types).map(([key, label]) => (<label key={key} className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="hidden" checked={typeFilter === key} onChange={() => updateFilter('type', typeFilter === key ? '' : key)} /><span className={`w-4 h-4 border ${typeFilter === key ? 'bg-[var(--c-gold)]' : 'border-[var(--c-steel)]'}`}></span><span className="text-sm font-light">{label}</span></label>))}</div></div>
            </div>
          </aside>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(product => (
                <article key={product.id} className="group">
                  <div className="overflow-hidden mb-6 relative" style={{ aspectRatio: '4/5' }}>
                    <Link to={`/product/${product.id}`} className="block w-full h-full"><img src={product.images.main} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" /></Link>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--c-gold)]" style={{ fontFamily: 'var(--f-display)' }}><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
                  <p className="label text-xs">{product.alloy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
