import { useParams, Link } from 'react-router-dom';
import { mockOrders, formatCurrency, formatDate } from '../data/dashboard';

export default function OrderTracker() {
  const { id } = useParams();
  const order = mockOrders.find(o => o.id === id);
  if (!order) return (<div className="container py-24 text-center"><p className="text-2xl mb-4">Не найден</p><Link to="/dashboard" className="link-forge">Назад</Link></div>);
  const getStageColor = (s: string) => s === 'completed' ? 'var(--c-patina)' : s === 'in_progress' ? 'var(--c-gold)' : s === 'blocked' ? 'var(--c-error)' : 'var(--c-smoke)';

  return (
    <div>
      <section className="py-16" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <p className="font-mono text-sm mb-2" style={{ color: 'var(--c-gold)' }}>{order.number}</p>
          <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{order.title}</h1>
          <p className="text-base" style={{ color: 'var(--c-ash)' }}>{order.objectName}</p>
        </div>
      </section>
      <section className="py-12" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <p className="label-gold mb-6">Этапы</p>
          <div className="space-y-0">
            {order.stages.map((stage, i) => (<div key={stage.id} className="flex gap-6 pb-8" style={{ borderBottom: i < order.stages.length - 1 ? '1px solid var(--c-rule-light)' : 'none' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0" style={{ backgroundColor: getStageColor(stage.status), color: 'var(--c-coal)' }}>{stage.status === 'completed' ? '✓' : stage.status === 'in_progress' ? '◉' : stage.status === 'blocked' ? '⚠' : '○'}</div>
              <div className="flex-1 pt-2">
                <h3 className="text-lg font-semibold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{stage.title}</h3>
                <p className="text-sm" style={{ color: 'var(--c-ash)' }}>{stage.description}</p>
                {stage.blocked && <p className="text-sm mt-2" style={{ color: 'var(--c-error)' }}>{stage.blockedReason}</p>}
              </div>
            </div>))}
          </div>
        </div>
      </section>
    </div>
  );
}
