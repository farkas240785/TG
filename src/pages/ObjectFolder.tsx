import { Link } from 'react-router-dom';
import { mockOrders, formatDate } from '../data/dashboard';

export default function ObjectFolder() {
  const order = mockOrders[0];
  return (
    <div>
      <section className="py-16" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-4">Папка объекта</p><h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Документы для КГИОП</h1></div>
      </section>
      <section className="py-12" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="mb-10 p-8" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{order.objectName}</h2>
            <p className="text-base" style={{ color: 'var(--c-ash)' }}>{order.objectAddress}</p>
          </div>
          <div className="space-y-3">
            {order.documents.map(doc => (<a key={doc.id} href={doc.url} className="flex items-center justify-between p-6 card-dark"><div><p className="text-base font-medium mb-1" style={{ color: 'var(--c-parchment)' }}>{doc.title}</p><p className="font-mono text-xs" style={{ color: 'var(--c-ash)' }}>{formatDate(doc.uploadedAt)}</p></div><span className="font-mono text-sm" style={{ color: 'var(--c-gold)' }}>Скачать</span></a>))}
          </div>
        </div>
      </section>
    </div>
  );
}
