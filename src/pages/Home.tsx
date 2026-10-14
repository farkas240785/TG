import { Link } from 'react-router-dom';
import { projects, catalogMeta } from '../data/catalog';

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--c-void)', minHeight: '60vh' }}>
        <div className="absolute inset-0">
          <img src="https://image.qwenlm.ai/generated-images/3129222d-47e2-4cd6-b822-218f65dc69de/_result.png" alt="Мастерская" className="w-full h-full object-cover opacity-40" style={{ filter: 'brightness(0.6)' }} />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8, 7, 10, 0.97) 0%, rgba(8, 7, 10, 0.3) 100%)' }}></div>
        <div className="container relative z-10 py-24">
          <div className="max-w-4xl">
            <p className="label-gold mb-6">Литейно-кузнечная мануфактура · Чебоксары · с 2014 года</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--f-display)' }}>
              <span className="forge-text">Историческая фурнитура.</span><br/>
              <span style={{ color: 'var(--c-parchment)' }}>по нормативам КГИОП</span>
            </h1>
            <p className="text-lg mb-8 max-w-2xl font-light" style={{ color: 'var(--c-ash)' }}>Научно обоснованное воссоздание утраченной фурнитуры для объектов культурного наследия.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="btn-forge">Смотреть каталог</Link>
              <Link to="/order" className="btn-outline-light">Рассчитать проект</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32" style={{ backgroundColor: 'var(--c-coal)' }}>
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
      <section className="py-32" style={{ backgroundColor: 'var(--c-charcoal)' }}>
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
    </div>
  );
}
