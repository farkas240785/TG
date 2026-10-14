import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="py-24" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-8">Манифест</p><p className="text-3xl md:text-5xl leading-tight max-w-4xl" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Мы воссоздаём утраченное, опираясь на архив, металлургию и ремесло.</p></div>
      </section>
      <section className="py-24" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}><p className="label-gold mb-6">Тигель</p><h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Металлургия</h2><p className="font-light" style={{ color: 'var(--c-ash)' }}>Контроль химического состава каждой партии.</p></div>
            <div className="p-12" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}><p className="label-gold mb-6">Горн</p><h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Ремесло</h2><p className="font-light" style={{ color: 'var(--c-ash)' }}>Художественная ковка и патинирование.</p></div>
          </div>
        </div>
      </section>
      <section className="py-24 text-center" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container"><h2 className="text-4xl font-bold mb-10" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Нужна фурнитура для ОКН?</h2><Link to="/order" className="btn-forge">Рассчитать</Link></div>
      </section>
    </div>
  );
}
