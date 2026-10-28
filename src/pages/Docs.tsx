import { useState } from 'react';
import { useSiteContent } from '../context/SiteContentContext';

export default function Docs() {
  const [open, setOpen] = useState<number | null>(0);
  const { content } = useSiteContent();

  return (
    <div>
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10">
          <p className="label-gold mb-6">Нормативная база</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{content.docs.title}</h1>
          <p className="text-lg max-w-2xl font-light" style={{ color: 'var(--c-ash)' }}>{content.docs.description}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <p className="label-gold mb-8">Разделы</p>
              {content.docs.sections.map((s, i) => (
                <button key={i} onClick={() => setOpen(i)} className={`block w-full text-left py-6 text-sm font-light transition-colors ${open === i ? 'text-[var(--c-gold)] font-medium' : 'hover:text-[var(--c-gold)]'}`} style={{ borderBottom: '1px solid var(--c-rule-light)' }}>
                  {String(i + 1).padStart(2, '0')} / {s.title}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8">
            {open !== null && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{content.docs.sections[open].title}</h2>
                <div>
                  {content.docs.sections[open].items.map((item, i) => (
                    <div key={i} className="py-8 group" style={{ borderBottom: '1px solid var(--c-rule-light)' }}>
                      <h3 className="font-mono text-sm font-medium mb-3 group-hover:text-[var(--c-gold)] transition-colors">{item.title}</h3>
                      <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--c-ash)' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
