import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockOrders, formatCurrency, formatDate } from '../data/dashboard';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      <section className="py-20" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-4">Добро пожаловать</p><h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{user?.name}</h1><p className="text-base" style={{ color: 'var(--c-ash)' }}>{user?.company}</p></div>
      </section>
      <section className="py-16" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Заказы</h2>
          <div className="space-y-6">
            {mockOrders.map(order => (
              <Link key={order.id} to={`/dashboard/order/${order.id}`} className="block card-dark p-8">
                <p className="font-mono text-xs mb-2" style={{ color: 'var(--c-gold)' }}>{order.number}</p>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{order.title}</h3>
                <p className="text-sm" style={{ color: 'var(--c-ash)' }}>{order.objectName}</p>
                <p className="text-lg font-semibold mt-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{formatCurrency(order.totalAmount)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
