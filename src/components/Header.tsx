import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const nav = [
    { to: '/catalog', label: 'Каталог' },
    { to: '/projects', label: 'Проекты' },
    { to: '/about', label: 'Мануфактура' },
    { to: '/docs', label: 'Нормативы' },
    { to: '/order', label: 'Расчёт' },
    { to: '/contacts', label: 'Контакты' },
  ];

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <>
      <a href="#main" className="skip-link">К содержанию</a>
      <header className="no-print sticky top-0 z-50" style={{ backgroundColor: 'rgba(12, 11, 14, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--c-rule-light)' }}>
        <div className="container">
          <div className="flex items-center justify-between py-5 gap-6">
            <Link to="/" className="flex items-center gap-4 shrink-0 group">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#E8C547' }}/>
                      <stop offset="50%" style={{ stopColor: '#D4A017' }}/>
                      <stop offset="100%" style={{ stopColor: '#8B6914' }}/>
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="22" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none"/>
                  <path d="M16 28C16 28 15 34 18 37C21 40 27 40 30 37C33 34 32 28 32 28" stroke="url(#goldGrad)" strokeWidth="2.5" fill="none"/>
                  <ellipse cx="24" cy="28" rx="8" ry="2.5" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none"/>
                  <path d="M24 10C24 10 19 17 21 22C23 27 25 22 25 22C25 22 29 17 24 10Z" fill="url(#goldGrad)"/>
                  <path d="M24 15C24 15 21 20 22 22C23 24 25 22 25 22C25 22 27 20 24 15Z" fill="#F0D97A" opacity="0.8"/>
                  <rect x="17" y="39" width="14" height="2" rx="1" fill="url(#goldGrad)"/>
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Тигель <span style={{ color: 'var(--c-gold-rich)' }}>&</span> Горн</div>
                <div className="label" style={{ fontSize: '10px' }}>Литейно-кузнечная мануфактура</div>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
              {nav.map(item => (<Link key={item.to} to={item.to} className="text-sm font-light hover:text-[var(--c-gold-rich)] transition-colors" style={{ color: 'var(--c-ash)' }}>{item.label}</Link>))}
            </nav>
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <div className="hidden lg:flex items-center gap-4">
                  <Link to="/dashboard" className="text-sm font-light hover:text-[var(--c-gold-rich)] transition-colors" style={{ color: 'var(--c-ash)' }}>{user?.name.split(' ')[0]}</Link>
                  <button onClick={handleLogout} className="text-xs font-light hover:text-[var(--c-gold-rich)] transition-colors" style={{ color: 'var(--c-smoke)' }}>Выйти</button>
                </div>
              ) : (
                <Link to="/login" className="hidden lg:inline-block text-sm font-light hover:text-[var(--c-gold-rich)] transition-colors" style={{ color: 'var(--c-ash)' }}>Войти</Link>
              )}
              <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Меню">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">{menuOpen ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></> : <><path d="M4 8h16" /><path d="M4 16h16" /></>}</svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden no-print overflow-y-auto" style={{ backgroundColor: 'var(--c-coal)' }}>
          <div className="container pt-32 pb-12">
            <p className="label-gold mb-10">Навигация</p>
            <nav aria-label="Мобильная навигация">
              {nav.map((item, i) => (<Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="flex items-baseline gap-6 py-6 group" style={{ borderBottom: '1px solid var(--c-rule-light)' }}><span className="font-mono text-xs" style={{ color: 'var(--c-gold)' }}>0{i + 1}</span><span className="text-3xl font-medium group-hover:text-[var(--c-gold)] transition-colors" style={{ fontFamily: 'var(--f-display)' }}>{item.label}</span></Link>))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
