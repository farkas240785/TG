import { Link } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';

export default function Terms() {
  const { content } = useSiteContent();
  return (
    <div>
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10"><p className="label-gold mb-4">Юридическая информация</p><h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{content.terms.title}</h1><p className="text-base font-light" style={{ color: 'var(--c-ash)' }}>Дата вступления в силу: {content.terms.date}</p></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {content.terms.sections.map((section, si) => (
              <div key={si}>
                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{section.title}</h2>
                <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--c-ash)' }}>
                  {section.items.map((item, ii) => (<p key={ii}>{item}</p>))}
                </div>
              </div>
            ))}

            <div className="text-center pt-8"><Link to="/register" className="btn-forge">Вернуться к регистрации</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
