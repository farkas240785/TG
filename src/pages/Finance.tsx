import { Link } from 'react-router-dom';
import { mockOrders, formatCurrency, formatDate } from '../data/dashboard';

export default function Finance() {
  const totalAmount = mockOrders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalPaid = mockOrders.reduce((sum, o) => sum + o.paidAmount, 0);
  const totalRemaining = totalAmount - totalPaid;

  return (
    <div>
      <section className="relative py-16 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--c-smoke)' }}><Link to="/dashboard" className="hover:text-[var(--c-gold)]">Кабинет</Link><span>/</span><span>Финансы</span></nav>
          <p className="label-gold mb-4">Финансовый модуль</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Счета и платежи</h1>
          <p className="text-base font-light" style={{ color: 'var(--c-ash)' }}>Поэтапная оплата: 30% → 40% → 30%</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>
      <section style={{ backgroundColor: 'var(--c-coal)', borderBottom: '1px solid var(--c-rule-gold)' }}>
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div><div className="text-4xl font-bold mb-2 tracking-tight forge-text" style={{ fontFamily: 'var(--f-display)' }}>{formatCurrency(totalAmount)}</div><p className="text-sm font-medium" style={{ color: 'var(--c-parchment)' }}>Общая сумма</p></div>
            <div><div className="text-4xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-patina)' }}>{formatCurrency(totalPaid)}</div><p className="text-sm font-medium" style={{ color: 'var(--c-parchment)' }}>Оплачено</p><p className="label text-xs">{Math.round((totalPaid / totalAmount) * 100)}%</p></div>
            <div><div className="text-4xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-gold)' }}>{formatCurrency(totalRemaining)}</div><p className="text-sm font-medium" style={{ color: 'var(--c-parchment)' }}>К оплате</p></div>
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <p className="label-gold mb-6">Заказы</p>
          <h2 className="text-3xl font-bold mb-10 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Детализация</h2>
          <div className="space-y-8">
            {mockOrders.map(order => {
              const stages = [
                { stage: 'Аванс', percent: 30, amount: order.totalAmount * 0.3, paid: order.paidAmount >= order.totalAmount * 0.3 },
                { stage: 'Этап 2', percent: 40, amount: order.totalAmount * 0.4, paid: order.paidAmount >= order.totalAmount * 0.7 },
                { stage: 'Окончательный', percent: 30, amount: order.totalAmount * 0.3, paid: order.paidAmount >= order.totalAmount },
              ];
              return (
                <div key={order.id} className="card-dark p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div><p className="font-mono text-xs mb-2" style={{ color: 'var(--c-gold)' }}>{order.number}</p><h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{order.title}</h3></div>
                    <p className="text-2xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{formatCurrency(order.totalAmount)}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {stages.map((p, i) => (<div key={i} className="p-4" style={{ backgroundColor: 'var(--c-iron)', borderLeft: `3px solid ${p.paid ? 'var(--c-patina)' : 'var(--c-gold)'}` }}><div className="flex justify-between items-center mb-2"><p className="text-sm font-medium" style={{ color: 'var(--c-parchment)' }}>{p.stage}</p>{p.paid ? <span className="text-xs font-mono" style={{ color: 'var(--c-patina)' }}>✓</span> : <span className="text-xs font-mono" style={{ color: 'var(--c-gold)' }}>К оплате</span>}</div><p className="text-lg font-bold" style={{ fontFamily: 'var(--f-display)', color: p.paid ? 'var(--c-patina)' : 'var(--c-gold)' }}>{formatCurrency(p.amount)}</p><p className="text-xs" style={{ color: 'var(--c-ash)' }}>{p.percent}%</p></div>))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
