import { useState } from 'react';

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <section className="py-20" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-6">Контакты</p><h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Связаться с нами</h1></div>
      </section>
      <section className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {submitted ? (<div className="p-16 text-center" style={{ backgroundColor: 'var(--c-charcoal)' }}><p className="text-6xl mb-6" style={{ color: 'var(--c-patina)' }}>✓</p><h3 className="text-2xl font-semibold" style={{ fontFamily: 'var(--f-display)' }}>Отправлено</h3></div>) : (<form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><input type="text" placeholder="Имя *" required className="p-5 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /><input type="email" placeholder="Email *" required className="p-5 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /></div><button type="submit" className="btn-forge">Отправить</button></form>)}
          </div>
          <div className="space-y-10">
            <div><p className="label-gold mb-4">Адрес</p><p className="text-2xl font-medium mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Чебоксары</p><p className="font-light" style={{ color: 'var(--c-ash)' }}>428000, Чувашская Республика<br />пр-кт Мира, д. 1</p></div>
            <div><p className="label-gold mb-4">Связь</p><a href="tel:+78352123456" className="block text-3xl font-bold mb-3" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>+7 (8352) 12-34-56</a><a href="mailto:info@tigeliGorn.ru" className="block font-light">info@tigeliGorn.ru</a></div>
          </div>
        </div>
      </section>
    </div>
  );
}
