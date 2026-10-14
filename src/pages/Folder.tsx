import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FolderItem { id: string; name: string; article: string; qty: number; }
interface FolderData { items: FolderItem[]; }

export default function Folder() {
  const [folder, setFolder] = useState<FolderData>({ items: [] });
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tg_project_folder');
    if (saved) setFolder(JSON.parse(saved));
  }, []);

  const updateQty = (id: string, qty: number) => {
    const updated = { ...folder, items: folder.items.map(i => i.id === id ? { ...i, qty: Math.max(1, qty) } : i) };
    setFolder(updated);
    localStorage.setItem('tg_project_folder', JSON.stringify(updated));
  };

  const removeItem = (id: string) => {
    const updated = { ...folder, items: folder.items.filter(i => i.id !== id) };
    setFolder(updated);
    localStorage.setItem('tg_project_folder', JSON.stringify(updated));
  };

  const clearFolder = () => {
    if (confirm('Очистить папку?')) {
      setFolder({ items: [] });
      localStorage.setItem('tg_project_folder', JSON.stringify({ items: [] }));
    }
  };

  return (
    <div>
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10 flex justify-between items-end flex-wrap gap-6">
          <div><h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Папка проекта</h1></div>
          {folder.items.length > 0 && (<div className="flex gap-4"><button onClick={clearFolder} className="btn-outline-light text-xs" style={{ borderColor: 'var(--c-error)', color: 'var(--c-error)' }}>Очистить</button></div>)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>

      <section className="container py-16">
        {folder.items.length === 0 ? (
          <div className="py-32 text-center" style={{ border: '1px solid var(--c-rule-light)' }}>
            <p className="text-6xl mb-8" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-steel)' }}>∅</p>
            <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Папка пуста</h2>
            <Link to="/catalog" className="link-forge">Перейти в каталог</Link>
          </div>
        ) : (<>
          <div className="mb-12" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
            <table className="w-full">
              <thead><tr style={{ borderBottom: '2px solid var(--c-gold)' }}><th className="text-left px-6 py-4 label">Изделие</th><th className="text-left px-6 py-4 label">Артикул</th><th className="text-center px-6 py-4 label">Кол-во</th><th className="text-right px-6 py-4 label">Действия</th></tr></thead>
              <tbody>{folder.items.map(item => (<tr key={item.id} className="hover:bg-[var(--c-iron)] transition-colors" style={{ borderTop: '1px solid var(--c-rule-light)' }}><td className="px-6 py-5"><Link to={`/product/${item.id}`} className="text-lg font-medium hover:text-[var(--c-gold)] transition-colors" style={{ fontFamily: 'var(--f-display)' }}>{item.name}</Link></td><td className="px-6 py-5 font-mono text-xs" style={{ color: 'var(--c-gold)' }}>{item.article}</td><td className="px-6 py-5"><div className="flex items-center justify-center gap-3"><button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 border hover:bg-[var(--c-gold)] hover:text-[var(--c-coal)] transition-colors" style={{ borderColor: 'var(--c-steel)' }}>−</button><span className="w-10 text-center font-mono font-medium">{item.qty}</span><button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 border hover:bg-[var(--c-gold)] hover:text-[var(--c-coal)] transition-colors" style={{ borderColor: 'var(--c-steel)' }}>+</button></div></td><td className="px-6 py-5 text-right"><button onClick={() => removeItem(item.id)} className="link-forge" style={{ color: 'var(--c-error)' }}>Удалить</button></td></tr>))}</tbody>
            </table>
          </div>

          {!submitted && (<div className="max-w-2xl mx-auto p-10" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-gold)' }}>
            <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Отправить заявку</h3>
            <form onSubmit={(e) => { e.preventDefault(); if (!agreed) return; setSubmitted(true); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"><input type="text" placeholder="Имя *" required className="p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] transition-colors font-light" style={{ borderColor: 'var(--c-steel)' }} /><input type="email" placeholder="Email *" required className="p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)] transition-colors font-light" style={{ borderColor: 'var(--c-steel)' }} /></div>
              <label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1" required /><span className="text-sm font-light" style={{ color: 'var(--c-ash)' }}>Согласен на обработку персональных данных (ФЗ-152) *</span></label>
              <button type="submit" className="btn-forge">Отправить</button>
            </form>
          </div>)}

          {submitted && (<div className="max-w-2xl mx-auto p-16 text-center" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-gold)' }}><p className="text-6xl mb-6" style={{ color: 'var(--c-patina)' }}>✓</p><h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--f-display)' }}>Заявка отправлена</h3></div>)}
        </>)}
      </section>
    </div>
  );
}
