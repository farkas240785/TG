import { Link } from 'react-router-dom';
import { projects, catalogMeta } from '../data/catalog';

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--c-void)', minHeight: '60vh' }}>
        <div className="absolute inset-0">
          <img 
            src="https://image.qwenlm.ai/generated-images/3129222d-47e2-4cd6-b822-218f65dc69de/_result.png" 
            alt="Современная технологичная мастерская с ЧПУ" 
            className="w-full h-full object-cover opacity-40"
            style={{ filter: 'brightness(0.6) contrast(1.15) saturate(0.9)' }}
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8, 7, 10, 0.97) 0%, rgba(8, 7, 10, 0.75) 45%, rgba(8, 7, 10, 0.3) 100%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 75% 40%, rgba(184, 134, 11, 0.12) 0%, transparent 55%), radial-gradient(ellipse at 25% 60%, rgba(160, 132, 92, 0.08) 0%, transparent 50%)' }}></div>
        <div className="container relative z-10 py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="label-gold mb-6" style={{ color: 'var(--c-gold)' }}>Литейно-кузнечная мануфактура · Санкт-Петербург · с 2014 года</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6" style={{ fontFamily: 'var(--f-display)' }}>
              <span className="forge-text">Историческая фурнитура.</span><br/>
              <span style={{ color: 'var(--c-parchment)' }}>Точное литьё и ковка</span><br/>
              <span style={{ color: 'var(--c-ash)' }}>по нормативам КГИОП</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-light" style={{ color: 'var(--c-ash)' }}>Научно обоснованное воссоздание утраченной фурнитуры для объектов культурного наследия. Контроль сплава. Согласования с КГИОП. Паспорта на каждую партию.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="btn-forge">Смотреть каталог</Link>
              <Link to="/order" className="btn-outline-light">Рассчитать по проекту КГИОП</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient-intense"></div>
      </section>

      <section style={{ backgroundColor: 'var(--c-charcoal)', borderTop: '1px solid var(--c-rule-gold)', borderBottom: '1px solid var(--c-rule-gold)' }}>
        <div className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ num: '12+', label: 'лет специализации', sub: 'на объектах ОКН' }, { num: '47', label: 'объектов', sub: 'согласовано с КГИОП' }, { num: '4', label: 'марки сплавов', sub: 'Л63, ЛС59, Ст3, ЧХН' }, { num: '100%', label: 'спектрометрия', sub: 'каждой партии' }].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold mb-3 tracking-tight forge-text" style={{ fontFamily: 'var(--f-display)' }}>{item.num}</div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--c-parchment)' }}>{item.label}</p>
                <p className="label text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <article className="relative overflow-hidden group" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src="https://image.qwenlm.ai/generated-images/d4283e19-f164-4ae3-91c8-14cca370592f/_result.png" alt="Литьё латуни в форму" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-8 md:p-10">
                <p className="label-gold mb-4">I. Тигель</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Металлургия<br />&amp; точность</h2>
                <p className="text-base leading-relaxed mb-8 font-light" style={{ color: 'var(--c-ash)' }}>Контроль химического состава каждой партии. Латунь Л63 по ГОСТ 17711-93, ЛС59-1, стали Ст3, ЧХН. Спектрометрический анализ, паспорт на каждую партию.</p>
                <Link to="/about" className="link-forge">Подробнее →</Link>
              </div>
            </article>
            <article className="relative overflow-hidden group" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
              <div className="aspect-[16/10] overflow-hidden">
                <img src="https://image.qwenlm.ai/generated-images/a8ab9a65-9ede-41a8-9f37-bd5756f44b1c/_result.png" alt="Кузнечный горн" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-8 md:p-10">
                <p className="label-gold mb-4">II. Горн</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Ремесло<br />&amp; форма</h2>
                <p className="text-base leading-relaxed mb-8 font-light" style={{ color: 'var(--c-ash)' }}>Художественная ковка, ручная формовка, патинирование по историческим рецептурам. Мы не шлифуем следы ремесла — они и есть доказательство подлинности.</p>
                <Link to="/about" className="link-forge">Подробнее →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <div className="flex justify-between items-end mb-20">
            <div><p className="label-gold mb-4">Каталог изделий</p><h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Типы фурнитуры</h2></div>
            <Link to="/catalog" className="link-forge hidden md:inline-block">Весь каталог →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(catalogMeta.types).slice(0, 6).map(([key, label], index) => {
              const categoryImages = [
                'https://image.qwenlm.ai/generated-images/b9a85814-301c-4bf3-aa69-71c32ed8327d/_result.png',
                'https://image.qwenlm.ai/generated-images/1849725d-a49f-4f00-8aee-d5698af41398/_result.png',
                'https://image.qwenlm.ai/generated-images/cf5e9c67-bb6b-4608-9e84-a995a1b10af8/_result.png',
                'https://image.qwenlm.ai/generated-images/999490c9-9099-42bd-aa26-70facf19bc0f/_result.png',
                'https://image.qwenlm.ai/generated-images/64620116-25bd-4bf8-9305-c4b3a8baa679/_result.png',
                'https://image.qwenlm.ai/generated-images/3cf26d66-83c7-432c-859d-e0c74062ba93/_result.png'
              ];
              return (
                <Link key={key} to={`/catalog?type=${key}`} className="group card-dark overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={categoryImages[index]} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-coal)] via-transparent to-transparent opacity-80"></div>
                  </div>
                  <div className="p-6"><h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--c-gold)] transition-colors" style={{ fontFamily: 'var(--f-display)' }}>{label}</h3><span className="link-forge">Смотреть →</span></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="flex justify-between items-end mb-20">
            <div><p className="label-gold mb-4">Избранные работы</p><h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Проекты</h2></div>
            <Link to="/projects" className="link-forge hidden md:inline-block">Все проекты →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map(project => (
              <Link key={project.id} to="/projects" className="group">
                <div className="overflow-hidden mb-6 relative" style={{ aspectRatio: '4/3', backgroundColor: 'var(--c-charcoal)' }}>
                  <img src={project.images.cover} alt={project.object} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-coal)] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4"><span className="label-gold">{project.year}</span></div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--c-gold)] transition-colors" style={{ fontFamily: 'var(--f-display)' }}>{project.object}</h3>
                <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>{project.address}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40 overflow-hidden" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(184, 134, 11, 0.08) 0%, transparent 60%)' }}></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="aspect-[4/3] overflow-hidden" style={{ backgroundColor: 'var(--c-iron)' }}>
              <img src="https://image.qwenlm.ai/generated-images/6e497e76-29da-4b69-ac37-67e6158c17ae/_result.png" alt="Образец старой ручки с чертежами и расчётами" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="label-gold mb-6">Начать работу</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Обсудить проект</h2>
              <p className="text-lg mb-10 font-light" style={{ color: 'var(--c-ash)' }}>Оставьте заявку, и наш технолог свяжется с вами в течение одного рабочего дня для обсуждения задачи и подготовки расчёта.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/order" className="btn-forge">Рассчитать по проекту КГИОП</Link>
                <a href="tel:+78121234567" className="btn-outline-light">+7 (812) 123-45-67</a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>

      <section className="py-32 md:py-40" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <p className="label-gold mb-4">Отзывы партнёров</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Благодарственные письма</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-dark p-8">
              <div className="aspect-[3/4] mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--c-iron)' }}>
                <div className="text-center p-6">
                  <div className="text-6xl mb-4" style={{ color: 'var(--c-gold)' }}>✉</div>
                  <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>Благодарственное письмо от КГИОП Санкт-Петербурга</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>КГИОП Санкт-Петербурга</h3>
              <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>За высокое качество реставрационных работ на объектах культурного наследия</p>
            </div>
            <div className="card-dark p-8">
              <div className="aspect-[3/4] mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--c-iron)' }}>
                <div className="text-center p-6">
                  <div className="text-6xl mb-4" style={{ color: 'var(--c-gold)' }}>✉</div>
                  <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>Благодарность от Государственного Эрмитажа</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Государственный Эрмитаж</h3>
              <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>За профессиональное воссоздание исторической фурнитуры</p>
            </div>
            <div className="card-dark p-8">
              <div className="aspect-[3/4] mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--c-iron)' }}>
                <div className="text-center p-6">
                  <div className="text-6xl mb-4" style={{ color: 'var(--c-gold)' }}>✉</div>
                  <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>Признательность от Союза реставраторов России</p>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Союз реставраторов России</h3>
              <p className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>За вклад в сохранение культурного наследия</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
