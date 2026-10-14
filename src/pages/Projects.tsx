import { projects } from '../data/catalog';

export default function Projects() {
  return (
    <div>
      <section className="py-20" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-6">Проекты</p><h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Реализованные работы</h1></div>
      </section>
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.id} className="card-dark overflow-hidden">
              <div style={{ aspectRatio: '4/3' }}><img src={p.images.cover} alt={p.object} className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-8"><p className="font-mono text-xs mb-3" style={{ color: 'var(--c-gold)' }}>{p.year}</p><h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--f-display)' }}>{p.object}</h2><p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>{p.address}</p></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
