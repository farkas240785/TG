import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Order() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (<div className="container py-40 text-center"><h1 className="text-5xl font-bold mb-10" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Спасибо</h1><p className="text-lg mb-16" style={{ color: 'var(--c-ash)' }}>Мы свяжемся с вами.</p><Link to="/" className="link-forge">На главную</Link></div>);
  return (
    <div>
      <section className="py-20" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-6">Расчёт</p><h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Заказать расчёт</h1></div>
      </section>
      <section className="container py-16">
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="max-w-3xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"><input type="text" placeholder="Имя *" required className="p-5 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /><input type="email" placeholder="Email *" required className="p-5 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /></div>
          <button type="submit" className="btn-forge">Отправить</button>
        </form>
      </section>
    </div>
  );
}
