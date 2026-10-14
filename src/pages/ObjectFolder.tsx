import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockOrders, formatDate } from '../data/dashboard';

export default function ObjectFolder() {
  const [selectedOrder, setSelectedOrder] = useState(mockOrders[0].id);
  const order = mockOrders.find(o => o.id === selectedOrder);

  if (!order) return null;

  const getDocIcon = (type: string) => {
    switch (type) {
      case 'passport': return '📋';
      case 'certificate': return '📜';
      case 'drawing': return '📐';
      default: return '📄';
    }
  };

  return (
    <div>
      <section className="relative py-16 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--c-smoke)' }}><Link to="/dashboard" className="hover:text-[var(--c-gold)]">Кабинет</Link><span>/</span><span>Папка объекта</span></nav>
          <p className="label-gold mb-4">Цифровая папка</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Документы для КГИОП</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>

      <section className="py-12" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <p className="label-gold mb-6">Заказ</p>
                <div className="space-y-3">
                  {mockOrders.map(o => (
                    <button key={o.id} onClick={() => setSelectedOrder(o.id)} className={`w-full p-6 text-left transition-all ${selectedOrder === o.id ? 'border-2' : 'border'}`} style={{ backgroundColor: 'var(--c-charcoal)', borderColor: selectedOrder === o.id ? 'var(--c-gold)' : 'var(--c-rule-light)' }}>
                      <p className="font-mono text-xs mb-2" style={{ color: 'var(--c-gold)' }}>{o.number}</p>
                      <p className="text-base font-medium mb-2" style={{ color: 'var(--c-parchment)' }}>{o.title}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="mb-10 p-8" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                <p className="label-gold mb-4">Объект</p>
                <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{order.objectName}</h2>
                <p className="text-base mb-4" style={{ color: 'var(--c-ash)' }}>{order.objectAddress}</p>
                {order.oknStatus && <span className="inline-block px-3 py-1 text-xs font-mono" style={{ backgroundColor: 'var(--c-patina)', color: 'white' }}>ОКН / КГИОП</span>}
              </div>

              <div className="mb-10">
                <p className="label-gold mb-2">Документы</p>
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Паспорта и сертификаты</h3>
                <div className="space-y-3">
                  {order.documents.map(doc => (
                    <a key={doc.id} href={doc.url} className="flex items-center justify-between p-6 card-dark">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{getDocIcon(doc.type)}</div>
                        <div>
                          <p className="text-base font-medium mb-1" style={{ color: 'var(--c-parchment)' }}>{doc.title}</p>
                          <p className="font-mono text-xs" style={{ color: 'var(--c-ash)' }}>{formatDate(doc.uploadedAt)}{doc.required && <span style={{ color: 'var(--c-gold)' }}> · Обязательный</span>}</p>
                        </div>
                      </div>
                      <span className="font-mono text-sm" style={{ color: 'var(--c-gold)' }}>Скачать</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="label-gold mb-4">Шаблоны</p>
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Акты и формы</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Акт скрытых работ', 'Паспорт изделия', 'Историческая справка', 'Обмерный лист'].map((name, i) => (
                    <a key={i} href="#" className="p-6 card-dark">
                      <div className="text-3xl mb-3">{['📄', '📋', '📜', '📐'][i]}</div>
                      <p className="text-base font-medium mb-2" style={{ color: 'var(--c-parchment)' }}>{name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
