import { useParams, Link } from 'react-router-dom';
import { getProduct, catalogMeta } from '../data/catalog';

export default function Product() {
  const { id } = useParams();
  const product = getProduct(id || '');
  if (!product) return (<div className="container py-32 text-center"><p className="text-3xl mb-4" style={{ fontFamily: 'var(--f-display)' }}>Не найдено</p><Link to="/catalog" className="link-forge">Назад</Link></div>);

  return (
    <div>
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden mb-6" style={{ aspectRatio: '4/5' }}><img src={product.images.main} alt={product.title} className="w-full h-full object-cover" /></div>
          </div>
          <div className="lg:col-span-5">
            <p className="label-gold mb-6">{catalogMeta.types[product.type as keyof typeof catalogMeta.types]} · {product.id}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>{product.title}</h1>
            <div className="p-8 mb-10" style={{ backgroundColor: 'var(--c-charcoal)', border: '1px solid var(--c-rule-light)' }}>
              <p className="label mb-6">Характеристики</p>
              <div>{[['Сплав', product.alloy], ['Масса', `${product.weight_g} г`], ['Габариты', product.dimensions], ['Покрытие', product.coating]].map(([k, v], i) => (<div key={i} className="grid grid-cols-2 py-4 text-sm" style={{ borderBottom: '1px solid var(--c-rule-light)' }}><span className="label">{k}</span><span className="font-mono text-xs">{v as string}</span></div>))}</div>
            </div>
            <Link to="/order" className="btn-forge">Рассчитать</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
