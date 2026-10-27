import { Link } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';
import { forgedCategories, brassCategories } from '../data/catalog';

export default function Home() {
  const { content } = useSiteContent();
  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundColor: '#000000', minHeight: '85vh' }}>
        {/* Анимированный фон с эффектами металла и кузни */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Основной слой - расплавленный металл */}
          <div className="absolute inset-0 hero-molten-metal"></div>
          
          {/* Слой с искрами */}
          <div className="absolute inset-0 hero-sparks"></div>
          
          {/* Свечение горна */}
          <div className="absolute inset-0 hero-forge-glow"></div>
          
          {/* Дым и пар */}
          <div className="absolute inset-0 hero-smoke"></div>
        </div>
        
        <div className="container relative z-10 py-32 lg:py-40">
          <div className="max-w-5xl">
            <p className="label-gold mb-8 tracking-widest">{content.hero.subtitle}</p>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8" style={{ fontFamily: 'var(--f-display)' }}>
              <span className="forge-text">{content.hero.title.split('.')[0]}.</span><br/>
              <span style={{ color: 'var(--c-parchment)' }}>{content.hero.title.split('.')[1]}</span>
            </h1>
            <p className="text-xl mb-12 max-w-3xl font-light leading-relaxed" style={{ color: 'var(--c-ash)' }}>{content.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/catalog" className="btn-forge">Смотреть каталог</Link>
              <Link to="/order" className="btn-outline-light">Рассчитать проект</Link>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: 'var(--c-charcoal)', borderTop: '1px solid var(--c-rule-gold)', borderBottom: '1px solid var(--c-rule-gold)' }}>
        <div className="container py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {content.stats.map((item, i) => (
              <div key={i} className="text-center md:text-left group">
                <div className="text-6xl md:text-7xl font-bold mb-4 tracking-tight forge-text transition-all duration-500 group-hover:scale-105" style={{ fontFamily: 'var(--f-display)' }}>{item.num}</div>
                <p className="text-base font-medium mb-2" style={{ color: 'var(--c-parchment)' }}>{item.label}</p>
                <p className="label text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-40" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {content.aboutBlocks.map((block, i) => (
              <article key={i} className="relative overflow-hidden group" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={block.imageUrl} 
                    alt={block.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-charcoal)] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-10 md:p-12">
                  <p className="label-gold mb-6">{i === 0 ? 'I.' : 'II.'} {block.title}</p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{block.heading}</h2>
                  <p className="text-lg leading-relaxed mb-10 font-light" style={{ color: 'var(--c-ash)' }}>{block.description}</p>
                  <Link to="/about" className="link-forge text-base">Подробнее →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-40" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <div className="text-center mb-20">
            <p className="label-gold mb-6">Каталог изделий</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Выберите категорию</h2>
          </div>
          
          <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '2/1', boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)' }}>
            <img 
              src="https://image.qwenlm.ai/generated-images/17ae56f4-9a35-405b-b383-ac5714b0e0d8/_result.png" 
              alt="Мастерская" 
              className="w-full h-full object-cover"
            />
            
            {/* Разделительная линия */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5" style={{ backgroundColor: 'var(--c-gold)', transform: 'translateX(-50%)' }}>
              <div className="absolute inset-0" style={{ backgroundColor: 'var(--c-gold)', filter: 'blur(8px)', opacity: '0.5' }}></div>
            </div>
            
            {/* Левая половина - Кованые изделия */}
            <Link 
              to="/catalog?category=forged" 
              className="absolute top-0 left-0 w-1/2 h-full group"
              style={{ backgroundColor: 'rgba(8, 7, 10, 0.75)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-all duration-500 group-hover:bg-[rgba(8,7,10,0.6)]">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500 group-hover:text-[var(--c-gold)] group-hover:scale-105" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
                  Кованые изделия
                </h3>
                <p className="text-lg md:text-xl mb-8 font-light" style={{ color: 'var(--c-ash)' }}>
                  {Object.keys(forgedCategories).length} вида • {Object.values(forgedCategories).reduce((sum, cat) => sum + Object.keys((cat as any).subcategories).length, 0)} подкатегорий
                </p>
                <div className="link-forge text-xl">Перейти в каталог →</div>
              </div>
            </Link>
            
            {/* Правая половина - Латунная фурнитура */}
            <Link 
              to="/catalog?category=brass" 
              className="absolute top-0 right-0 w-1/2 h-full group"
              style={{ backgroundColor: 'rgba(8, 7, 10, 0.75)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-all duration-500 group-hover:bg-[rgba(8,7,10,0.6)]">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500 group-hover:text-[var(--c-gold)] group-hover:scale-105" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
                  Латунная фурнитура
                </h3>
                <p className="text-lg md:text-xl mb-8 font-light" style={{ color: 'var(--c-ash)' }}>
                  {Object.keys(brassCategories).length} категорий • {Object.values(brassCategories).reduce((sum, cat) => sum + Object.keys((cat as any).subcategories).length, 0)} подкатегорий
                </p>
                <div className="link-forge text-xl">Перейти в каталог →</div>
              </div>
            </Link>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-base" style={{ color: 'var(--c-ash)' }}>
              Нажмите на нужную категорию для перехода в древовидный каталог
            </p>
          </div>
        </div>
      </section>

      <section className="py-40" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <div className="flex justify-between items-end mb-24">
            <div>
              <p className="label-gold mb-6">Проекты</p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Избранные работы</h2>
            </div>
            <Link to="/projects" className="link-forge hidden md:inline-block text-base">Все проекты →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {content.projects.map(project => (
              <Link key={project.id} to="/projects" className="group">
                <div className="overflow-hidden mb-8 relative rounded-lg" style={{ aspectRatio: '4/3', boxShadow: 'var(--shadow-lg)' }}>
                  <img 
                    src={project.cover} 
                    alt={project.object} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-coal)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[var(--c-gold)]" style={{ fontFamily: 'var(--f-display)' }}>{project.object}</h3>
                <p className="text-base font-light" style={{ color: 'var(--c-ash)' }}>{project.address}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 overflow-hidden" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(184, 134, 11, 0.05) 0%, transparent 60%)' }}></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-lg" style={{ backgroundColor: 'var(--c-iron)', boxShadow: 'var(--shadow-xl)' }}>
              <img 
                src={content.discuss.image} 
                alt="Рабочее пространство" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                loading="lazy" 
              />
            </div>
            <div>
              <p className="label-gold mb-8">Начать работу</p>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight leading-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{content.discuss.title}</h2>
              <p className="text-xl mb-12 font-light leading-relaxed" style={{ color: 'var(--c-ash)' }}>{content.discuss.description}</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/order" className="btn-forge">Рассчитать проект</Link>
                <a href={`tel:${content.contacts.phone.replace(/\s/g, '')}`} className="btn-outline-light">{content.contacts.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <div className="text-center mb-24">
            <p className="label-gold mb-6">Отзывы партнёров</p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Благодарственные письма</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {content.thanks.map((t, i) => (
              <div key={i} className="card-dark p-10 transition-all duration-500 hover:shadow-2xl">
                <div className="aspect-[3/4] mb-8 overflow-hidden rounded-lg" style={{ boxShadow: 'var(--shadow-md)' }}>
                  <img 
                    src={t.imageUrl} 
                    alt={t.title} 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 transition-colors duration-300 hover:text-[var(--c-gold)]" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{t.title}</h3>
                <p className="text-base font-light leading-relaxed" style={{ color: 'var(--c-ash)' }}>{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
