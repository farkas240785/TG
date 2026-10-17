import { Link } from 'react-router-dom';

export default function Folder() {
  return (
    <div>
      <section className="py-20" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Папка проекта</h1></div>
      </section>
      <section className="container py-16">
        <div className="py-32 text-center" style={{ border: '1px solid var(--c-rule-light)' }}><p className="text-6xl mb-8" style={{ color: 'var(--c-steel)' }}>∅</p><h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Папка пуста</h2><Link to="/catalog" className="link-forge">Перейти в каталог</Link></div>
      </section>
    </div>
  );
}
