import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSiteContent } from '../context/SiteContentContext';
import { brassCategories, forgedCategories } from '../data/catalog';

type Tab = 'hero' | 'stats' | 'contacts' | 'requisites' | 'manifesto' | 'about' | 'steps' | 'thanks' | 'catalog' | 'projects' | 'discuss' | 'footer' | 'header' | 'aiAssistant' | 'docs' | 'orderForm' | 'terms';

export default function Admin() {
  const { user } = useAuth();
  const { content, updateContent, resetContent } = useSiteContent();
  const [activeTab, setActiveTab] = useState<Tab>('hero');
  const [saved, setSaved] = useState(false);

  if (user?.role !== 'manager') {
    return (
      <div className="container py-24 text-center">
        <p className="text-2xl mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Доступ запрещён</p>
        <p className="text-sm mb-8" style={{ color: 'var(--c-ash)' }}>Панель управления доступна только администраторам</p>
        <Link to="/dashboard" className="link-forge">Назад в кабинет</Link>
      </div>
    );
  }

  const showSaved = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'hero', label: 'Главный экран', icon: '🏠' },
    { id: 'stats', label: 'Статистика', icon: '📊' },
    { id: 'catalog', label: 'Каталог', icon: '📦' },
    { id: 'projects', label: 'Проекты', icon: '🏛️' },
    { id: 'discuss', label: 'Обсудить проект', icon: '💬' },
    { id: 'manifesto', label: 'Манифест', icon: '📜' },
    { id: 'about', label: 'О мануфактуре', icon: '🔨' },
    { id: 'steps', label: 'Методология', icon: '📋' },
    { id: 'thanks', label: 'Благодарности', icon: '🏆' },
    { id: 'contacts', label: 'Контакты', icon: '📞' },
    { id: 'requisites', label: 'Реквизиты', icon: '📄' },
    { id: 'footer', label: 'Подвал сайта', icon: '📝' },
    { id: 'header', label: 'Шапка сайта', icon: '🔝' },
    { id: 'aiAssistant', label: 'AI-консультант', icon: '🤖' },
    { id: 'docs', label: 'Документация', icon: '📚' },
    { id: 'orderForm', label: 'Форма расчёта', icon: '🧮' },
    { id: 'terms', label: 'Соглашение', icon: '⚖️' },
  ];

  const inputStyle = { backgroundColor: 'var(--c-charcoal)', borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' };

  return (
    <div>
      <section className="relative py-16 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--c-smoke)' }}>
            <Link to="/dashboard" className="hover:text-[var(--c-gold)]">Кабинет</Link><span>/</span><span>Панель управления</span>
          </nav>
          <div className="flex justify-between items-end flex-wrap gap-6">
            <div>
              <p className="label-gold mb-4">Администрирование</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Панель управления сайтом</h1>
              <p className="text-base mt-4" style={{ color: 'var(--c-ash)' }}>Редактирование контента сайта в реальном времени</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => { if (confirm('Сбросить все изменения?')) { resetContent(); showSaved(); } }} className="btn-outline-light text-xs" style={{ borderColor: 'var(--c-error)', color: 'var(--c-error)' }}>Сбросить всё</button>
              <Link to="/" className="btn-forge text-xs">Открыть сайт</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>

      {saved && (
        <div className="fixed top-24 right-6 z-50 p-4 animate-pulse" style={{ backgroundColor: 'var(--c-patina)', color: 'white', borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
          ✓ Изменения сохранены
        </div>
      )}

      <section style={{ backgroundColor: 'var(--c-coal)', borderBottom: '1px solid var(--c-rule-light)' }}>
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-4">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-[var(--c-gold)] border-b-2 border-[var(--c-gold)]' : 'text-[var(--c-smoke)] hover:text-[var(--c-parchment)]'}`}>
                <span className="mr-2">{tab.icon}</span>{tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container max-w-4xl">
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Главный экран (Hero)</h2>
              <div><label className="label block mb-2">Подзаголовок</label><input type="text" value={content.hero.subtitle} onChange={(e) => updateContent('hero', { ...content.hero, subtitle: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div><label className="label block mb-2">Заголовок</label><input type="text" value={content.hero.title} onChange={(e) => updateContent('hero', { ...content.hero, title: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div><label className="label block mb-2">Описание</label><textarea rows={3} value={content.hero.description} onChange={(e) => updateContent('hero', { ...content.hero, description: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
              <div><label className="label block mb-2">URL фонового изображения</label><input type="text" value={content.hero.heroImage} onChange={(e) => updateContent('hero', { ...content.hero, heroImage: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Блок статистики</h2>
              {content.stats.map((stat, i) => (
                <div key={i} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <p className="label-gold mb-4">Показатель {i + 1}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div><label className="label block mb-2">Число</label><input type="text" value={stat.num} onChange={(e) => { const s = [...content.stats]; s[i] = { ...s[i], num: e.target.value }; updateContent('stats', s); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Название</label><input type="text" value={stat.label} onChange={(e) => { const s = [...content.stats]; s[i] = { ...s[i], label: e.target.value }; updateContent('stats', s); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Подпись</label><input type="text" value={stat.sub} onChange={(e) => { const s = [...content.stats]; s[i] = { ...s[i], sub: e.target.value }; updateContent('stats', s); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'catalog' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Каталог изделий</h2>
              {content.catalog.map((item, i) => (
                <div key={i} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <p className="label-gold mb-4">Изделие {i + 1}: {item.id}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="label block mb-2">Артикул</label><input type="text" value={item.id} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], id: e.target.value }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Название</label><input type="text" value={item.title} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], title: e.target.value }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div>
                      <label className="label block mb-2">Категория</label>
                      <select value={item.category} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], category: e.target.value as 'forged' | 'brass' }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle}>
                        <option value="forged" style={{ color: 'var(--c-ink)' }}>Кованые изделия</option>
                        <option value="brass" style={{ color: 'var(--c-ink)' }}>Латунная фурнитура</option>
                      </select>
                    </div>
                    <div>
                      <label className="label block mb-2">Подкатегория</label>
                      <select value={item.subcategory} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], subcategory: e.target.value }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle}>
                        <option value="" style={{ color: 'var(--c-ink)' }}>Не указана</option>
                        {item.category === 'brass' && Object.entries(brassCategories).map(([key, cat]) => (
                          <optgroup key={key} label={(cat as any).name}>
                            {Object.entries((cat as any).subcategories).map(([subKey, subName]) => (
                              <option key={subKey} value={subKey} style={{ color: 'var(--c-ink)' }}>{subName as string}</option>
                            ))}
                          </optgroup>
                        ))}
                        {item.category === 'forged' && Object.entries(forgedCategories).map(([key, cat]) => (
                          <optgroup key={key} label={(cat as any).name}>
                            {Object.entries((cat as any).subcategories).map(([subKey, subName]) => (
                              <option key={subKey} value={subKey} style={{ color: 'var(--c-ink)' }}>{subName as string}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                    <div><label className="label block mb-2">Сплав</label><input type="text" value={item.alloy} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], alloy: e.target.value }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Вес (г)</label><input type="number" value={item.weight_g} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], weight_g: Number(e.target.value) }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Габариты</label><input type="text" value={item.dimensions} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], dimensions: e.target.value }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Покрытие</label><input type="text" value={item.coating} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], coating: e.target.value }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div className="md:col-span-2"><label className="label block mb-2">Описание</label><textarea rows={2} value={item.description} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], description: e.target.value }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
                    <div className="md:col-span-2"><label className="label block mb-2">URL изображения</label><input type="text" value={item.image} onChange={(e) => { const c = [...content.catalog]; c[i] = { ...c[i], image: e.target.value }; updateContent('catalog', c); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {(activeTab === 'contacts' || activeTab === 'requisites' || activeTab === 'manifesto' || activeTab === 'about' || activeTab === 'steps' || activeTab === 'thanks' || activeTab === 'projects' || activeTab === 'discuss' || activeTab === 'footer' || activeTab === 'header' || activeTab === 'aiAssistant' || activeTab === 'docs' || activeTab === 'orderForm' || activeTab === 'terms') && (
            <div className="p-8 text-center" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
              <p className="text-2xl mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Раздел "{tabs.find(t => t.id === activeTab)?.label}"</p>
              <p className="text-sm" style={{ color: 'var(--c-ash)' }}>Функционал редактирования этого раздела доступен в полной версии панели управления.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
