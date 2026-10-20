import { useParams, Link } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';
import { getAllBrassSubcategories, getAllForgedSubcategories } from '../data/catalog';

export default function Product() {
  const { id } = useParams();
  const { content } = useSiteContent();
  const product = content.catalog.find(p => p.id === id);

  if (!product) return (<div className="container py-32 text-center"><p className="text-3xl mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Изделие не найдено</p><Link to="/catalog" className="link-forge">Вернуться в каталог</Link></div>);

  return (
    <div>
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden mb-6 relative" style={{ aspectRatio: '4/5', backgroundColor: 'var(--c-charcoal)' }}>
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="label-gold mb-6">
              {product.category === 'forged' ? 'Кованые изделия' : 'Латунная фурнитура'}
              {product.subcategory && (
                <> · {(() => {
                  if (product.category === 'brass') {
                    const subcat = getAllBrassSubcategories().find(s => s.key === product.subcategory);
                    return subcat ? subcat.name : product.subcategory;
                  } else {
                    // Для кованых изделий
                    const subcat = getAllForgedSubcategories().find(s => s.key === product.subcategory);
                    return subcat ? subcat.name : product.subcategory;
                  }
                })()}</>
              )}
              {' · '}{product.id}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{product.title}</h1>
            <div className="p-8 mb-10" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
              <p className="label mb-6">Характеристики</p>
              <div>
                {[['Сплав', product.alloy], ['Масса', `${product.weight_g} г`], ['Габариты', product.dimensions], ['Покрытие', product.coating], ['Крепление', product.mounting]].map(([k, v], i) => (
                  <div key={i} className="grid grid-cols-2 py-4 text-sm" style={{ borderBottom: i < 4 ? '1px solid var(--c-rule-light)' : 'none' }}>
                    <span className="label">{k}</span>
                    <span className="font-mono text-xs">{v as string}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-10">
              <p className="label mb-4">Эпоха</p>
              <p className="text-base mb-6" style={{ color: 'var(--c-parchment)' }}>{product.epoch}</p>
              <p className="label mb-4">Источник</p>
              <p className="text-base mb-6" style={{ color: 'var(--c-parchment)' }}>{product.source}</p>
              <p className="label mb-4">ГОСТ</p>
              <p className="text-base mb-6" style={{ color: 'var(--c-parchment)' }}>{product.gost}</p>
              <p className="label mb-4">Описание</p>
              <p className="text-base" style={{ color: 'var(--c-parchment)' }}>{product.description}</p>
            </div>
            <Link to="/order" className="btn-forge">Рассчитать</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
