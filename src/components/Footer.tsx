import { Link } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';

export default function Footer() {
  const { content } = useSiteContent();
  return (
    <footer className="no-print mt-32" style={{ backgroundColor: 'var(--c-void)', borderTop: '1px solid var(--c-rule-gold)' }}>
      <div className="gold-line"></div>
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
                <path d="M10 20C10 20 9 28 12 32C15 36 29 36 32 32C35 28 34 20 34 20" stroke="var(--c-gold)" strokeWidth="2" fill="none"/>
                <ellipse cx="22" cy="20" rx="12" ry="3" stroke="var(--c-gold)" strokeWidth="1.5" fill="none"/>
                <path d="M22 8C22 8 18 14 20 18C22 22 24 18 24 18C24 18 26 14 22 8Z" fill="var(--c-gold-rich)"/>
                <rect x="8" y="36" width="28" height="2" fill="var(--c-brass)"/>
              </svg>
              <div className="text-lg font-semibold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Тигель <span style={{ color: 'var(--c-gold-rich)' }}>&</span> Горн</div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-8 font-light" style={{ color: 'var(--c-ash)' }}>{content.footer.description}</p>
            <div className="label-gold text-xs" style={{ color: 'var(--c-gold)' }}>ИНН {content.requisites.inn} · ОГРН {content.requisites.ogrn}</div>
          </div>
          <div className="md:col-span-3">
            <p className="label-gold mb-6" style={{ color: 'var(--c-gold)' }}>Навигация</p>
            <ul className="space-y-3">{[{ to: '/catalog', label: 'Каталог' }, { to: '/projects', label: 'Проекты' }, { to: '/about', label: 'Мануфактура' }, { to: '/docs', label: 'Нормативы' }, { to: '/order', label: 'Расчёт' }, { to: '/contacts', label: 'Контакты' }].map(i => (<li key={i.to}><Link to={i.to} className="text-sm font-light hover:text-[var(--c-gold-rich)] transition-colors" style={{ color: 'var(--c-ash)' }}>{i.label}</Link></li>))}</ul>
          </div>
          <div className="md:col-span-2">
            <p className="label-gold mb-6" style={{ color: 'var(--c-gold)' }}>Контакты</p>
            <div className="space-y-4 text-sm font-light" style={{ color: 'var(--c-ash)' }}>
              <div><a href="tel:+78352123456" className="block text-lg font-medium hover:text-[var(--c-gold-rich)] transition-colors" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>+7 (8352) 12-34-56</a><a href="mailto:info@tigeliGorn.ru" className="block hover:text-[var(--c-gold-rich)] transition-colors">info@tigeliGorn.ru</a></div>
              <div><p>428000, г. Чебоксары</p><p>пр-кт Мира, д. 1</p></div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ borderTop: '1px solid var(--c-rule-gold)' }}>
          <p className="font-mono text-xs font-light" style={{ color: 'var(--c-smoke)' }}>© 2014–2026 ООО «Тигель и Горн»</p>
          <div className="flex gap-6 font-mono text-xs font-light" style={{ color: 'var(--c-smoke)' }}><Link to="/terms" className="hover:text-[var(--c-gold-rich)] transition-colors">Соглашение</Link></div>
        </div>
      </div>
    </footer>
  );
}
