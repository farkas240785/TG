import { useState } from 'react';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="no-print" style={{ position: 'fixed', bottom: 24, right: 24, width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, var(--c-gold-deep), var(--c-gold), var(--c-gold-rich))', border: 'none', cursor: 'pointer', boxShadow: '0 8px 32px rgba(184, 134, 11, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 60 }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--c-coal)" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg>
      </button>
      {isOpen && (
        <div className="no-print" style={{ position: 'fixed', bottom: 100, right: 24, width: 'calc(100% - 48px)', maxWidth: 420, height: 600, backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)', borderRadius: 8, boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)', zIndex: 60, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 20, color: 'var(--c-parchment)' }}>AI-консультант</h3>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--c-ash)', cursor: 'pointer', fontSize: 24 }}>×</button>
          </div>
          <p style={{ color: 'var(--c-ash)', fontSize: 14 }}>Здравствуйте! Я технолог мануфактуры. Чем могу помочь?</p>
        </div>
      )}
    </>
  );
}
