import { Link } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';
import { forgedCategories, brassCategories } from '../data/catalog';

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
          <div className="text-center mb-16">
            <p className="label-gold mb-4">Каталог изделий</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Выберите категорию</h2>
          </div>
          
          <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '2/1', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}>
            <img 
              src="https://image.qwenlm.ai/generated-images/17ae56f4-9a35-405b-b383-ac5714b0e0d8/_result.png" 
              alt="Мастерская" 
              className="w-full h-full object-cover"
            />
            
            {/* Разделительная линия */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1" style={{ backgroundColor: 'var(--c-gold)', transform: 'translateX(-50%)' }}></div>
            
            {/* Левая половина - Кованые изделия */}
            <Link 
              to="/catalog?category=forged" 
              className="absolute top-0 left-0 w-1/2 h-full group"
              style={{ backgroundColor: 'rgba(8, 7, 10, 0.7)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 group-hover:bg-[rgba(8,7,10,0.5)]">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--c-gold)]" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
                  Кованые изделия
                </h3>
                <p className="text-base md:text-lg mb-6 font-light" style={{ color: 'var(--c-ash)' }}>
                  {Object.keys(forgedCategories).length} вида • {Object.values(forgedCategories).reduce((sum, cat) => sum + Object.keys((cat as any).subcategories).length, 0)} подкатегорий
                </p>
                <div className="link-forge text-lg">Перейти в каталог →</div>
              </div>
            </Link>
            
            {/* Правая половина - Латунная фурнитура */}
            <Link 
              to="/catalog?category=brass" 
              className="absolute top-0 right-0 w-1/2 h-full group"
              style={{ backgroundColor: 'rgba(8, 7, 10, 0.7)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 group-hover:bg-[rgba(8,7,10,0.5)]">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--c-gold)]" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
                  Латунная фурнитура
                </h3>
                <p className="text-base md:text-lg mb-6 font-light" style={{ color: 'var(--c-ash)' }}>
                  {Object.keys(brassCategories).length} категорий • {Object.values(brassCategories).reduce((sum, cat) => sum + Object.keys((cat as any).subcategories).length, 0)} подкатегорий
                </p>
                <div className="link-forge text-lg">Перейти в каталог →</div>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: 'var(--c-ash)' }}>
              Нажмите на нужную категорию для перехода в древовидный каталог
            </p>
          </div>
        </div>
      </section>

      <section className="py-32" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <div className="flex justify-between items-end mb-20">
            <div><p className="label-gold mb-4">Проекты</p><h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Избранные работы</h2></div>
            <Link to="/projects" className="link-forge hidden md:inline-block">Все проекты →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.projects.map(project => (
              <Link key={project.id} to="/projects" className="group">
                <div className="overflow-hidden mb-6 relative" style={{ aspectRatio: '4/3' }}>
                  <img src={project.cover} alt={project.object} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
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
