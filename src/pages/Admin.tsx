import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSiteContent } from '../context/SiteContentContext';
import { brassCategories, forgedCategories } from '../data/catalog';
import ImageUploader from '../components/ImageUploader';

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

          {activeTab === 'contacts' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Контактная информация</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="label block mb-2">Регион</label><input type="text" value={content.contacts.city} onChange={(e) => updateContent('contacts', { ...content.contacts, city: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                <div><label className="label block mb-2">Город</label><input type="text" value={content.contacts.region} onChange={(e) => updateContent('contacts', { ...content.contacts, region: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                <div className="md:col-span-2"><label className="label block mb-2">Адрес</label><input type="text" value={content.contacts.address} onChange={(e) => updateContent('contacts', { ...content.contacts, address: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                <div><label className="label block mb-2">Телефон</label><input type="text" value={content.contacts.phone} onChange={(e) => updateContent('contacts', { ...content.contacts, phone: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                <div><label className="label block mb-2">Email</label><input type="text" value={content.contacts.email} onChange={(e) => updateContent('contacts', { ...content.contacts, email: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                <div className="md:col-span-2"><label className="label block mb-2">Часы работы</label><textarea rows={3} value={content.contacts.schedule} onChange={(e) => updateContent('contacts', { ...content.contacts, schedule: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
                <div className="md:col-span-2">
                  <ImageUploader
                    value={content.contacts.mapImage}
                    onChange={(value) => updateContent('contacts', { ...content.contacts, mapImage: value })}
                    label="Изображение карты"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requisites' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Реквизиты организации</h2>
              <div><label className="label block mb-2">Название</label><input type="text" value={content.requisites.name} onChange={(e) => updateContent('requisites', { ...content.requisites, name: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div><label className="label block mb-2">ИНН</label><input type="text" value={content.requisites.inn} onChange={(e) => updateContent('requisites', { ...content.requisites, inn: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                <div><label className="label block mb-2">КПП</label><input type="text" value={content.requisites.kpp} onChange={(e) => updateContent('requisites', { ...content.requisites, kpp: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                <div><label className="label block mb-2">ОГРН</label><input type="text" value={content.requisites.ogrn} onChange={(e) => updateContent('requisites', { ...content.requisites, ogrn: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              </div>
            </div>
          )}

          {activeTab === 'manifesto' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Манифест</h2>
              <div><label className="label block mb-2">Основной текст</label><textarea rows={3} value={content.manifesto.text} onChange={(e) => updateContent('manifesto', { ...content.manifesto, text: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
              <div><label className="label block mb-2">Акцент (золотой цвет)</label><input type="text" value={content.manifesto.accent} onChange={(e) => updateContent('manifesto', { ...content.manifesto, accent: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Блоки "Тигель" и "Горн"</h2>
              {content.aboutBlocks.map((block, i) => (
                <div key={i} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <p className="label-gold mb-4">Блок: {block.title}</p>
                  <div className="space-y-4">
                    <div><label className="label block mb-2">Заголовок</label><input type="text" value={block.heading} onChange={(e) => { const b = [...content.aboutBlocks]; b[i] = { ...b[i], heading: e.target.value }; updateContent('aboutBlocks', b); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Описание</label><textarea rows={3} value={block.description} onChange={(e) => { const b = [...content.aboutBlocks]; b[i] = { ...b[i], description: e.target.value }; updateContent('aboutBlocks', b); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
                    <ImageUploader
                      value={block.imageUrl}
                      onChange={(value) => { const b = [...content.aboutBlocks]; b[i] = { ...b[i], imageUrl: value }; updateContent('aboutBlocks', b); }}
                      label={`Изображение блока "${block.title}"`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'steps' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Методология (7 шагов)</h2>
              {content.steps.map((step, i) => (
                <div key={i} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-1"><label className="label block mb-2">№</label><input type="text" value={step.step} onChange={(e) => { const s = [...content.steps]; s[i] = { ...s[i], step: e.target.value }; updateContent('steps', s); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div className="md:col-span-4"><label className="label block mb-2">Название</label><input type="text" value={step.title} onChange={(e) => { const s = [...content.steps]; s[i] = { ...s[i], title: e.target.value }; updateContent('steps', s); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div className="md:col-span-7"><label className="label block mb-2">Описание</label><input type="text" value={step.desc} onChange={(e) => { const s = [...content.steps]; s[i] = { ...s[i], desc: e.target.value }; updateContent('steps', s); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'thanks' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Благодарственные письма</h2>
              {content.thanks.map((t, i) => (
                <div key={i} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <div className="space-y-4">
                    <div><label className="label block mb-2">Название организации</label><input type="text" value={t.title} onChange={(e) => { const th = [...content.thanks]; th[i] = { ...th[i], title: e.target.value }; updateContent('thanks', th); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Описание</label><input type="text" value={t.description} onChange={(e) => { const th = [...content.thanks]; th[i] = { ...th[i], description: e.target.value }; updateContent('thanks', th); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <ImageUploader
                      value={t.imageUrl}
                      onChange={(value) => { const th = [...content.thanks]; th[i] = { ...th[i], imageUrl: value }; updateContent('thanks', th); }}
                      label={`Изображение письма от "${t.title}"`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Проекты</h2>
              {content.projects.map((proj, i) => (
                <div key={i} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <p className="label-gold mb-4">Проект {i + 1}: {proj.id}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="label block mb-2">Объект</label><input type="text" value={proj.object} onChange={(e) => { const p = [...content.projects]; p[i] = { ...p[i], object: e.target.value }; updateContent('projects', p); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Адрес</label><input type="text" value={proj.address} onChange={(e) => { const p = [...content.projects]; p[i] = { ...p[i], address: e.target.value }; updateContent('projects', p); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Год</label><input type="number" value={proj.year} onChange={(e) => { const p = [...content.projects]; p[i] = { ...p[i], year: Number(e.target.value) }; updateContent('projects', p); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Письмо КГИОП</label><input type="text" value={proj.cgiop_letter} onChange={(e) => { const p = [...content.projects]; p[i] = { ...p[i], cgiop_letter: e.target.value }; updateContent('projects', p); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div className="md:col-span-2"><label className="label block mb-2">Задача</label><textarea rows={2} value={proj.task} onChange={(e) => { const p = [...content.projects]; p[i] = { ...p[i], task: e.target.value }; updateContent('projects', p); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
                    <ImageUploader
                      value={proj.cover}
                      onChange={(value) => { const p = [...content.projects]; p[i] = { ...p[i], cover: value }; updateContent('projects', p); }}
                      label={`Обложка проекта "${proj.object}"`}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'discuss' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Раздел "Обсудить проект"</h2>
              <div><label className="label block mb-2">Заголовок</label><input type="text" value={content.discuss.title} onChange={(e) => updateContent('discuss', { ...content.discuss, title: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div><label className="label block mb-2">Описание</label><textarea rows={3} value={content.discuss.description} onChange={(e) => updateContent('discuss', { ...content.discuss, description: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
              <ImageUploader
                value={content.discuss.image}
                onChange={(value) => updateContent('discuss', { ...content.discuss, image: value })}
                label="Изображение секции"
              />
            </div>
          )}

          {activeTab === 'footer' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Подвал сайта</h2>
              <div><label className="label block mb-2">Описание компании</label><textarea rows={4} value={content.footer.description} onChange={(e) => updateContent('footer', { ...content.footer, description: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
            </div>
          )}

          {activeTab === 'header' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Шапка сайта</h2>
              <div><label className="label block mb-2">Подзаголовок</label><input type="text" value={content.header.subtitle} onChange={(e) => updateContent('header', { ...content.header, subtitle: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
            </div>
          )}

          {activeTab === 'aiAssistant' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>AI-консультант</h2>
              <div><label className="label block mb-2">Имя консультанта</label><input type="text" value={content.aiAssistant.name} onChange={(e) => updateContent('aiAssistant', { ...content.aiAssistant, name: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div><label className="label block mb-2">Роль</label><input type="text" value={content.aiAssistant.role} onChange={(e) => updateContent('aiAssistant', { ...content.aiAssistant, role: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div><label className="label block mb-2">Приветственное сообщение</label><textarea rows={5} value={content.aiAssistant.greeting} onChange={(e) => updateContent('aiAssistant', { ...content.aiAssistant, greeting: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Документация</h2>
              <div><label className="label block mb-2">Заголовок страницы</label><input type="text" value={content.docs.title} onChange={(e) => updateContent('docs', { ...content.docs, title: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div><label className="label block mb-2">Описание</label><textarea rows={3} value={content.docs.description} onChange={(e) => updateContent('docs', { ...content.docs, description: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
              {content.docs.sections.map((section, si) => (
                <div key={si} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <p className="label-gold mb-4">Раздел: {section.title}</p>
                  <div className="mb-4"><label className="label block mb-2">Название раздела</label><input type="text" value={section.title} onChange={(e) => { const s = [...content.docs.sections]; s[si] = { ...s[si], title: e.target.value }; updateContent('docs', { ...content.docs, sections: s }); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                  {section.items.map((item, ii) => (
                    <div key={ii} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4" style={{ backgroundColor: 'var(--c-iron)' }}>
                      <div><label className="label block mb-2">Заголовок</label><input type="text" value={item.title} onChange={(e) => { const s = [...content.docs.sections]; s[si].items[ii] = { ...s[si].items[ii], title: e.target.value }; updateContent('docs', { ...content.docs, sections: s }); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                      <div><label className="label block mb-2">Описание</label><input type="text" value={item.desc} onChange={(e) => { const s = [...content.docs.sections]; s[si].items[ii] = { ...s[si].items[ii], desc: e.target.value }; updateContent('docs', { ...content.docs, sections: s }); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'orderForm' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Форма расчёта</h2>
              <div><label className="label block mb-2">Заголовок</label><input type="text" value={content.orderForm.title} onChange={(e) => updateContent('orderForm', { ...content.orderForm, title: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div><label className="label block mb-2">Описание</label><textarea rows={3} value={content.orderForm.description} onChange={(e) => updateContent('orderForm', { ...content.orderForm, description: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
              <div>
                <label className="label block mb-2">Типы заказчиков (через запятую)</label>
                <input type="text" value={content.orderForm.customerTypes.join(', ')} onChange={(e) => updateContent('orderForm', { ...content.orderForm, customerTypes: e.target.value.split(',').map(s => s.trim()) })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} />
              </div>
              <div>
                <p className="label block mb-2">Типы проектов</p>
                {content.orderForm.projectTypes.map((pt, i) => (
                  <div key={i} className="grid grid-cols-2 gap-4 mb-2">
                    <input type="text" value={pt.value} onChange={(e) => { const p = [...content.orderForm.projectTypes]; p[i] = { ...p[i], value: e.target.value }; updateContent('orderForm', { ...content.orderForm, projectTypes: p }); }} className="p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} placeholder="value" />
                    <input type="text" value={pt.label} onChange={(e) => { const p = [...content.orderForm.projectTypes]; p[i] = { ...p[i], label: e.target.value }; updateContent('orderForm', { ...content.orderForm, projectTypes: p }); }} className="p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} placeholder="label" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Пользовательское соглашение</h2>
              <div><label className="label block mb-2">Заголовок</label><input type="text" value={content.terms.title} onChange={(e) => updateContent('terms', { ...content.terms, title: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              <div><label className="label block mb-2">Дата вступления в силу</label><input type="text" value={content.terms.date} onChange={(e) => updateContent('terms', { ...content.terms, date: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
              {content.terms.sections.map((section, si) => (
                <div key={si} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <div className="mb-4"><label className="label block mb-2">Заголовок раздела</label><input type="text" value={section.title} onChange={(e) => { const s = [...content.terms.sections]; s[si] = { ...s[si], title: e.target.value }; updateContent('terms', { ...content.terms, sections: s }); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                  {section.items.map((item, ii) => (
                    <div key={ii} className="mb-2">
                      <label className="label block mb-1">Пункт {ii + 1}</label>
                      <textarea rows={2} value={item} onChange={(e) => { const s = [...content.terms.sections]; s[si].items[ii] = e.target.value; updateContent('terms', { ...content.terms, sections: s }); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
