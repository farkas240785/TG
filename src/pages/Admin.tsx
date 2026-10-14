import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSiteContent, SiteContent } from '../context/SiteContentContext';

type Tab = 'hero' | 'stats' | 'contacts' | 'requisites' | 'manifesto' | 'about' | 'steps' | 'thanks';

export default function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
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
    { id: 'manifesto', label: 'Манифест', icon: '📜' },
    { id: 'about', label: 'О мануфактуре', icon: '🔨' },
    { id: 'steps', label: 'Методология', icon: '📋' },
    { id: 'thanks', label: 'Благодарности', icon: '🏆' },
    { id: 'contacts', label: 'Контакты', icon: '📞' },
    { id: 'requisites', label: 'Реквизиты', icon: '📄' },
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

          {activeTab === 'manifesto' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Манифест</h2>
              <div><label className="label block mb-2">Основной текст</label><textarea rows={3} value={content.manifesto.text} onChange={(e) => updateContent('manifesto', { ...content.manifesto, text: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
              <div><label className="label block mb-2">Акцент (золотой цвет)</label><input type="text" value={content.manifesto.accent} onChange={(e) => updateContent('manifesto', { ...content.manifesto, accent: e.target.value })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Блоки «Тигель» и «Горн»</h2>
              {content.aboutBlocks.map((block, i) => (
                <div key={i} className="p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                  <p className="label-gold mb-4">Блок: {block.title}</p>
                  <div className="space-y-4">
                    <div><label className="label block mb-2">Заголовок</label><input type="text" value={block.heading} onChange={(e) => { const b = [...content.aboutBlocks]; b[i] = { ...b[i], heading: e.target.value }; updateContent('aboutBlocks', b); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
                    <div><label className="label block mb-2">Описание</label><textarea rows={3} value={block.description} onChange={(e) => { const b = [...content.aboutBlocks]; b[i] = { ...b[i], description: e.target.value }; updateContent('aboutBlocks', b); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] resize-none" style={inputStyle} /></div>
                    <div><label className="label block mb-2">URL изображения</label><input type="text" value={block.imageUrl} onChange={(e) => { const b = [...content.aboutBlocks]; b[i] = { ...b[i], imageUrl: e.target.value }; updateContent('aboutBlocks', b); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
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
                    <div><label className="label block mb-2">URL изображения</label><input type="text" value={t.imageUrl} onChange={(e) => { const th = [...content.thanks]; th[i] = { ...th[i], imageUrl: e.target.value }; updateContent('thanks', th); }} className="w-full p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={inputStyle} /></div>
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
        </div>
      </section>
    </div>
  );
}
