import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockOrders, formatDate } from '../data/dashboard';

export default function CMS() {
  const { user } = useAuth();
  const [selectedOrder, setSelectedOrder] = useState(mockOrders[0]?.id || '');
  if (user?.role !== 'manager' && user?.role !== 'technologist') {
    return (<div className="container py-24 text-center"><p className="text-2xl mb-4">Доступ запрещён</p><Link to="/dashboard" className="link-forge">Назад</Link></div>);
  }
  const order = mockOrders.find(o => o.id === selectedOrder);
  const getColor = (status: string) => status === 'completed' ? 'var(--c-patina)' : status === 'in_progress' ? 'var(--c-gold)' : status === 'blocked' ? 'var(--c-error)' : 'var(--c-smoke)';

  return (
    <div>
      <section className="py-16" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-4">CMS</p><h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Система управления</h1></div>
      </section>
      {order && (
        <section className="py-16" style={{ backgroundColor: 'var(--c-coal)' }}>
          <div className="container">
            <p className="label-gold mb-6">Диаграмма Ганта</p>
            <div className="card-dark p-8 overflow-x-auto">
              <div className="space-y-4">
                {order.stages.map((stage, index) => (<div key={stage.id} className="flex items-center gap-4">
                  <div className="w-48 shrink-0"><p className="text-sm font-medium" style={{ color: 'var(--c-parchment)' }}>{stage.title}</p></div>
                  <div className="flex-1 relative h-12" style={{ backgroundColor: 'var(--c-iron)' }}>
                    <div className="absolute top-0 h-full flex items-center px-4" style={{ left: `${index * (100 / order.stages.length)}%`, width: `${100 / order.stages.length}%`, backgroundColor: getColor(stage.status), opacity: stage.status === 'pending' ? 0.3 : 1 }}>
                      <span className="text-xs font-medium text-white truncate">{stage.title}</span>
                    </div>
                  </div>
                </div>))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
