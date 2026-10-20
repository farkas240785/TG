import { Link } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';

export default function About() {
  const { content } = useSiteContent();

  return (
    <div>
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10">
          <p className="label-gold mb-8">Манифест</p>
          <p className="text-3xl md:text-5xl leading-tight font-medium max-w-4xl tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
            {content.manifesto.text} <span style={{ color: 'var(--c-gold)' }}>{content.manifesto.accent}</span>
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.aboutBlocks.map((block, i) => (
              <div key={i} className="p-8 md:p-12" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                <p className="label-gold mb-6">{block.title}</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{block.heading}</h2>
                <p className="leading-relaxed mb-8 font-light" style={{ color: 'var(--c-ash)' }}>{block.description}</p>
                <div className="aspect-video" style={{ backgroundColor: 'var(--c-iron)' }}>
                  <img src={block.imageUrl} alt={block.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <p className="label-gold mb-6">Методология</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Семь шагов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {content.steps.map((step, i) => (
              <div key={i} className="flex gap-8 py-8 group" style={{ borderBottom: '1px solid var(--c-rule-light)' }}>
                <div className="text-3xl font-bold shrink-0 forge-text" style={{ fontFamily: 'var(--f-display)' }}>{step.step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--c-gold)] transition-colors" style={{ fontFamily: 'var(--f-display)' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--c-ash)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184, 134, 11, 0.08) 0%, transparent 60%)' }}></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Нужна фурнитура для ОКН?</h2>
          <Link to="/order" className="btn-forge">Рассчитать по проекту КГИОП</Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>
    </div>
  );
}
