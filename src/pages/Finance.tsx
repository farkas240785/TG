import { Link } from 'react-router-dom';
import { mockOrders, formatCurrency } from '../data/dashboard';

export default function Finance() {
  const totalAmount = mockOrders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalPaid = mockOrders.reduce((sum, o) => sum + o.paidAmount, 0);

  return (
    <div>
      <section className="py-16" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-4">Финансы</p><h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Счета и платежи</h1></div>
      </section>
      <section style={{ backgroundColor: 'var(--c-coal)', borderBottom: '1px solid var(--c-rule-gold)' }}>
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div><p className="text-4xl font-bold mb-2 forge-text" style={{ fontFamily: 'var(--f-display)' }}>{formatCurrency(totalAmount)}</p><p className="text-sm" style={{ color: 'var(--c-parchment)' }}>Общая сумма</p></div>
            <div><p className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-patina)' }}>{formatCurrency(totalPaid)}</p><p className="text-sm" style={{ color: 'var(--c-parchment)' }}>Оплачено</p></div>
            <div><p className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-gold)' }}>{formatCurrency(totalAmount - totalPaid)}</p><p className="text-sm" style={{ color: 'var(--c-parchment)' }}>К оплате</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
