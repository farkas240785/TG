import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/catalog';
import { useSiteContent } from '../context/SiteContentContext';

type Message = { id: number; role: 'assistant' | 'user'; content: React.ReactNode; };

export default function AIAssistant() {
  const { content } = useSiteContent();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: 'assistant', content: (<><p>{content.aiAssistant.greeting}</p></>) },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, isTyping]);

  const generateResponse = (text: string): React.ReactNode => {
    const q = text.toLowerCase();
    if (q.includes('гост') || q.includes('норматив')) return (<><p>Мы работаем строго по нормативной базе:</p><ul className="mt-2 space-y-1 text-sm" style={{ paddingLeft: '20px' }}><li>• ГОСТ Р 55567-2013</li><li>• Р-13.19.15</li><li>• ГОСТ 17711-93</li><li>• Регламент КГИОП СПб</li></ul></>);
    if (q.includes('срок') || q.includes('стоим') || q.includes('цен')) return (<p>Минимальный срок — 30 дней. Стоимость зависит от типа изделия, сплава и количества. Ручка из латуни Л63 — от 12 500 ₽/шт.</p>);
    if (q.includes('материал') || q.includes('сплав')) return (<><p>Используем исторически обоснованные сплавы:</p><ul className="mt-2 space-y-1 text-sm" style={{ paddingLeft: '20px' }}><li>• Латунь Л63 (ГОСТ 17711-93)</li><li>• ЛС59-1</li><li>• Сталь Ст3</li><li>• Чугун ЧХН</li></ul></>);
    if (q.includes('ручк')) { const handles = products.filter(p => p.type === 'handles').slice(0, 2); return (<>{handles.map(h => (<div key={h.id} className="mt-3 p-3" style={{ backgroundColor: 'var(--c-iron)', borderLeft: '3px solid var(--c-gold)' }}><Link to={`/product/${h.id}`} className="font-medium" style={{ color: 'var(--c-gold)' }}>{h.title}</Link><p className="mt-1 text-xs" style={{ color: 'var(--c-ash)' }}>{h.alloy} · {h.epoch}</p></div>))}</>); }
    if (q.includes('контакт') || q.includes('телефон')) return (<><p>Телефон: <a href="tel:+78352123456" style={{ color: 'var(--c-gold)' }}>+7 (8352) 12-34-56</a></p><p>Email: <a href="mailto:info@tigeliGorn.ru" style={{ color: 'var(--c-gold)' }}>info@tigeliGorn.ru</a></p></>);
    return (<p>Расскажите подробнее о вашем проекте — какой объект реставрируете? И что нужно восстановить?</p>);
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), role: 'user', content: text }]);
    setInput(''); setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: generateResponse(text) }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="no-print" style={{ position: 'fixed', bottom: 24, right: 24, width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, var(--c-gold-deep), var(--c-gold), var(--c-gold-rich))', border: 'none', cursor: 'pointer', boxShadow: '0 8px 32px rgba(184, 134, 11, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--c-coal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{isOpen ? <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></> : <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></>}</svg>
      </button>
      {isOpen && (
        <div className="no-print" style={{ position: 'fixed', bottom: 100, right: 24, width: 'calc(100% - 48px)', maxWidth: 420, height: 600, maxHeight: 'calc(100vh - 140px)', backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)', borderRadius: 8, boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', zIndex: 60, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--c-rule-light)', background: 'linear-gradient(135deg, var(--c-iron) 0%, var(--c-charcoal) 100%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, var(--c-gold-deep), var(--c-gold-rich))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-coal)" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg>
              </div>
              <div><div style={{ fontFamily: 'var(--f-display)', fontSize: 16, fontWeight: 600, color: 'var(--c-parchment)' }}>AI-консультант</div><div style={{ fontSize: 11, color: 'var(--c-ash)' }}>Мануфактура «Тигель & Горн»</div></div>
            </div>
          </div>
          <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {messages.map(msg => (<div key={msg.id} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}><div style={{ maxWidth: '85%', padding: '12px 16px', borderRadius: 8, fontSize: 14, lineHeight: 1.5, backgroundColor: msg.role === 'user' ? 'var(--c-gold-deep)' : 'var(--c-iron)', color: msg.role === 'user' ? 'var(--c-coal)' : 'var(--c-parchment)', border: msg.role === 'assistant' ? '1px solid var(--c-rule-light)' : 'none' }}>{msg.content}</div></div>))}
            {isTyping && <div style={{ padding: '12px 16px', borderRadius: 8, backgroundColor: 'var(--c-iron)', border: '1px solid var(--c-rule-light)', width: 'fit-content' }}><span style={{ color: 'var(--c-gold)' }}>Печатает...</span></div>}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} style={{ padding: '12px 16px', borderTop: '1px solid var(--c-rule-light)', backgroundColor: 'var(--c-iron)', display: 'flex', gap: 8 }}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Задайте вопрос..." style={{ flex: 1, padding: '10px 14px', backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)', borderRadius: 4, color: 'var(--c-parchment)', fontSize: 14, outline: 'none' }} />
            <button type="submit" disabled={!input.trim()} style={{ padding: '0 16px', backgroundColor: input.trim() ? 'var(--c-gold)' : 'var(--c-steel)', color: input.trim() ? 'var(--c-coal)' : 'var(--c-smoke)', border: 'none', borderRadius: 4, cursor: input.trim() ? 'pointer' : 'not-allowed', fontWeight: 600 }}>→</button>
          </form>
        </div>
      )}
    </>
  );
}
