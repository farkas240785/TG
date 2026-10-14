import { useState } from 'react';
import { Link } from 'react-router-dom';
import { alloys, patinas, formatCurrency } from '../data/dashboard';

export default function Configurator() {
  const [selectedAlloy, setSelectedAlloy] = useState('');
  const [quantity, setQuantity] = useState(1);
  const calculatePrice = () => { let base = 5000; if (selectedAlloy === 'ls59') base *= 1.2; return Math.round(base * quantity); };

  return (
    <div>
      <section className="py-16" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-4">Конфигуратор</p><h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Настройка изделия</h1></div>
      </section>
      <section className="py-12" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="mb-10"><p className="label-gold mb-4">1. Сплав</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{alloys.map(alloy => (<button key={alloy.id} onClick={() => setSelectedAlloy(alloy.id)} className={`p-6 text-left border ${selectedAlloy === alloy.id ? 'border-2' : ''}`} style={{ backgroundColor: 'var(--c-charcoal)', borderColor: selectedAlloy === alloy.id ? 'var(--c-gold)' : 'var(--c-rule-light)' }}><p className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{alloy.name}</p><p className="font-mono text-xs" style={{ color: 'var(--c-gold)' }}>{alloy.gost}</p></button>))}</div></div>
              <div className="mb-10"><p className="label-gold mb-4">2. Количество</p><input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" className="w-full md:w-1/3 p-4 bg-transparent border" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /></div>
            </div>
            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                <p className="label-gold mb-6">Итого</p>
                <p className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-gold)' }}>{formatCurrency(calculatePrice())}</p>
                <button className="btn-forge w-full mt-6">Оформить</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
