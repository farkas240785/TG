import { useState } from 'react';
import { Link } from 'react-router-dom';
import { alloys, patinas, formatCurrency } from '../data/dashboard';

export default function Configurator() {
  const [selectedAlloy, setSelectedAlloy] = useState('');
  const [selectedPatina, setSelectedPatina] = useState('');
  const [dimensions, setDimensions] = useState({ length: 180, width: 45, height: 28 });
  const [quantity, setQuantity] = useState(1);
  const [isOKN, setIsOKN] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const selectedAlloyData = alloys.find(a => a.id === selectedAlloy);
  const selectedPatinaData = patinas.find(p => p.id === selectedPatina);

  const calculatePrice = () => {
    let base = 5000;
    const vol = (dimensions.length * dimensions.width * dimensions.height) / 1000;
    base += vol * 50;
    if (selectedAlloy === 'ls59') base *= 1.2;
    if (selectedAlloy === 'st3') base *= 0.8;
    if (selectedPatinaData?.type === 'hot') base *= 1.3;
    return Math.round(base * quantity);
  };

  const calculateDays = () => {
    let days = 30;
    if (quantity > 50) days += 15;
    if (selectedPatinaData?.type === 'hot') days += 7;
    return days;
  };

  const handleAlloyChange = (id: string) => {
    const a = alloys.find(x => x.id === id);
    if (isOKN && a && !a.allowedForOKN) { setShowWarning(true); return; }
    setSelectedAlloy(id);
    setShowWarning(false);
  };

  const handlePatinaChange = (id: string) => {
    const p = patinas.find(x => x.id === id);
    if (isOKN && p && !p.allowedForOKN) { setShowWarning(true); return; }
    setSelectedPatina(id);
    setShowWarning(false);
  };

  return (
    <div>
      <section className="relative py-16 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--c-smoke)' }}><Link to="/dashboard" className="hover:text-[var(--c-gold)]">Кабинет</Link><span>/</span><span>Конфигуратор</span></nav>
          <p className="label-gold mb-4">Конфигуратор</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Настройка изделия</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>

      <section className="py-12" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="mb-10 p-6" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                <label className="flex items-center gap-4 cursor-pointer">
                  <input type="checkbox" checked={isOKN} onChange={(e) => setIsOKN(e.target.checked)} className="w-5 h-5" />
                  <div><p className="text-base font-medium mb-1" style={{ color: 'var(--c-parchment)' }}>Заказ для объекта культурного наследия</p></div>
                </label>
              </div>

              {showWarning && (<div className="mb-8 p-6" style={{ backgroundColor: 'rgba(166, 61, 47, 0.1)', border: '1px solid var(--c-error)', borderLeft: '4px solid var(--c-error)' }}><p className="text-base font-medium mb-2" style={{ color: 'var(--c-error)' }}>Внимание</p><p className="text-sm" style={{ color: 'var(--c-ash)' }}>Выбранный материал не подходит для данного типа объектов.</p></div>)}

              <div className="mb-10"><p className="label-gold mb-4">1. Сплав</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{alloys.map(alloy => { const disabled = isOKN && !alloy.allowedForOKN; return (<button key={alloy.id} onClick={() => handleAlloyChange(alloy.id)} disabled={disabled} className={`p-6 text-left transition-all ${selectedAlloy === alloy.id ? 'border-2' : 'border'} ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-[var(--c-gold)]'}`} style={{ backgroundColor: 'var(--c-charcoal)', borderColor: selectedAlloy === alloy.id ? 'var(--c-gold)' : 'var(--c-rule-light)' }}><p className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{alloy.name}</p><p className="font-mono text-xs mb-2" style={{ color: 'var(--c-gold)' }}>{alloy.gost}</p></button>); })}</div></div>

              <div className="mb-10"><p className="label-gold mb-4">2. Патина</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{patinas.map(patina => { const disabled = isOKN && !patina.allowedForOKN; return (<button key={patina.id} onClick={() => handlePatinaChange(patina.id)} disabled={disabled} className={`p-6 text-left transition-all ${selectedPatina === patina.id ? 'border-2' : 'border'} ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-[var(--c-gold)]'}`} style={{ backgroundColor: 'var(--c-charcoal)', borderColor: selectedPatina === patina.id ? 'var(--c-gold)' : 'var(--c-rule-light)' }}><p className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{patina.name}</p><div className="w-8 h-8 rounded" style={{ backgroundColor: patina.color }}></div></button>); })}</div></div>

              <div className="mb-10"><p className="label-gold mb-4">3. Габариты (мм)</p><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div><label className="label block mb-2">Длина</label><input type="number" value={dimensions.length} onChange={(e) => setDimensions({ ...dimensions, length: Number(e.target.value) })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /></div><div><label className="label block mb-2">Ширина</label><input type="number" value={dimensions.width} onChange={(e) => setDimensions({ ...dimensions, width: Number(e.target.value) })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /></div><div><label className="label block mb-2">Высота</label><input type="number" value={dimensions.height} onChange={(e) => setDimensions({ ...dimensions, height: Number(e.target.value) })} className="w-full p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /></div></div></div>

              <div className="mb-10"><p className="label-gold mb-4">4. Количество</p><input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" className="w-full md:w-1/3 p-4 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]" style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }} /></div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
                <p className="label-gold mb-6">Итого</p>
                <div className="mb-8"><p className="label mb-2">Стоимость</p><p className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-gold)' }}>{formatCurrency(calculatePrice())}</p><p className="text-sm" style={{ color: 'var(--c-ash)' }}>Срок: {calculateDays()} дней</p></div>
                <button className="btn-forge w-full mb-4">Оформить</button>
                <Link to="/dashboard" className="link-forge block text-center">Назад</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
