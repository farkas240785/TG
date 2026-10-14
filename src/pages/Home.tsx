import { Link } from 'react-router-dom';
import { projects, catalogMeta } from '../data/catalog';
import { useSiteContent } from '../context/SiteContentContext';

export default function Home() {
  const { content } = useSiteContent();
  
  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--c-void)', minHeight: '60vh' }}>
        <div className="absolute inset-0">
          <img src={content.hero.heroImage} alt="Мастерская" className="w-full h-full object-cover opacity-40" style={{ filter: 'brightness(0.6)' }} />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8, 7, 10, 0.97) 0%, rgba(8, 7, 10, 0.3) 100%)' }}></div>
        <div className="container relative z-10 py-24">
          <div className="max-w-4xl">
            <p className="label-gold mb-6">{content.hero.subtitle}</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--f-display)' }}>
              <span className="forge-text">{content.hero.title.split('.')[0]}.</span><br/>
              <span style={{ color: 'var(--c-parchment)' }}>{content.hero.title.split('.')[1]}</span>
            </h1>
            <p className="text-lg mb-8 max-w-2xl font-light" style={{ color: 'var(--c-ash)' }}>{content.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="btn-forge">Смотреть каталог</Link>
              <Link to="/order" className="btn-outline-light">Рассчитать проект</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--c-charcoal)', borderTop: '1px solid var(--c-rule-gold)', borderBottom: '1px solid var(--c-rule-gold)' }}>
        <div className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold mb-3 tracking-tight forge-text" style={{ fontFamily: 'var(--f-display)' }}>{item.num}</div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--c-parchment)' }}>{item.label}</p>
                <p className="label text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {content.aboutBlocks.map((block, i) => (
              <article key={i} className="relative overflow-hidden group" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={block.imageUrl} alt={block.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-8 md:p-10">
                  <p className="label-gold mb-4">{i === 0 ? 'I.' : 'II.'} {block.title}</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{block.heading}</h2>
                  <p className="text-base leading-relaxed mb-8 font-light" style={{ color: 'var(--c-ash)' }}>{block.description}</p>
                  <Link to="/about" className="link-forge">Подробнее →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <div className="flex justify-between items-end mb-20">
            <div><p className="label-gold mb-4">Каталог</p><h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Типы фурнитуры</h2></div>
            <Link to="/catalog" className="link-forge hidden md:inline-block">Весь каталог →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(catalogMeta.types).slice(0, 6).map(([key, label]) => (
              <Link key={key} to={`/catalog?type=${key}`} className="group card-dark overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden relative flex items-center justify-center" style={{ backgroundColor: 'var(--c-iron)' }}>
                  <span className="text-6xl opacity-20">⚒</span>
                </div>
                <div className="p-6"><h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--c-gold)]" style={{ fontFamily: 'var(--f-display)' }}>{label}</h3><span className="link-forge">Смотреть →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="flex justify-between items-end mb-20">
            <div><p className="label-gold mb-4">Проекты</p><h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Избранные работы</h2></div>
            <Link to="/projects" className="link-forge hidden md:inline-block">Все проекты →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map(project => (
              <Link key={project.id} to="/projects" className="group">
                <div className="overflow-hidden mb-6 relative" style={{ aspectRatio: '4/3' }}>
                  <img src={project.images.cover} alt={project.object} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--c-gold)]" style={{ fontFamily: 'var(--f-display)' }}>{project.object}</h3>
                <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>{project.address}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: 'var(--c-iron)' }}>
              <img src={content.discuss.image} alt="Рабочее пространство" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="label-gold mb-6">Начать работу</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{content.discuss.title}</h2>
              <p className="text-lg mb-10 font-light" style={{ color: 'var(--c-ash)' }}>{content.discuss.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/order" className="btn-forge">Рассчитать проект</Link>
                <a href={`tel:${content.contacts.phone.replace(/\s/g, '')}`} className="btn-outline-light">{content.contacts.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <p className="label-gold mb-4">Отзывы партнёров</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Благодарственные письма</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.thanks.map((t, i) => (
              <div key={i} className="card-dark p-8">
                <div className="aspect-[3/4] mb-6 overflow-hidden">
                  <img src={t.imageUrl} alt={t.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{t.title}</h3>
                <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
