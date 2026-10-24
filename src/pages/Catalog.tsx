import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { filterProducts, getAllBrassSubcategories, getAllForgedSubcategories, brassCategories, forgedCategories, products } from '../data/catalog';
import { useSiteContent } from '../context/SiteContentContext';

type ViewMode = 'grid' | 'list';
type SortMode = 'name' | 'id' | 'default';

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { content } = useSiteContent();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortMode, setSortMode] = useState<SortMode>('default');
  const [localSearch, setLocalSearch] = useState('');

  const categoryFilter = searchParams.get('category') || '';
  const subcategoryFilter = searchParams.get('subcategory') || '';
  const typeFilter = searchParams.get('type') || '';

  // Применяем фильтры
  const filtered = useMemo(() => {
    let result = filterProducts({
      category: categoryFilter as 'forged' | 'brass' || undefined,
      subcategory: subcategoryFilter || undefined,
      type: typeFilter || undefined
    });

    // Локальный поиск
    if (localSearch) {
      const searchLower = localSearch.toLowerCase();
      result = result.filter(p =>
        p.id.toLowerCase().includes(searchLower) ||
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.alloy.toLowerCase().includes(searchLower)
      );
    }

    // Сортировка
    if (sortMode === 'name') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title, 'ru'));
    } else if (sortMode === 'id') {
      result = [...result].sort((a, b) => a.id.localeCompare(b.id));
    }

    return result;
  }, [categoryFilter, subcategoryFilter, typeFilter, localSearch, sortMode]);

  // Группировка товаров по подкатегориям
  const groupedProducts = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};

    filtered.forEach(product => {
      const key = product.subcategory || 'other';
      if (!groups[key]) groups[key] = [];
      groups[key].push(product);
    });

    return groups;
  }, [filtered]);

  // Получение названия подкатегории
  const getSubcategoryName = (key: string, category: string) => {
    if (category === 'brass') {
      const subcat = getAllBrassSubcategories().find(s => s.key === key);
      return subcat ? subcat.name : key;
    }
    if (category === 'forged') {
      const subcat = getAllForgedSubcategories().find(s => s.key === key);
      return subcat ? subcat.name : key;
    }
    return key;
  };

  // Получение иконки подкатегории
  const getSubcategoryIcon = (key: string, category: string) => {
    if (category === 'brass') {
      const subcat = getAllBrassSubcategories().find(s => s.key === key);
      return subcat ? subcat.icon : '⚒';
    }
    if (category === 'forged') {
      const subcat = getAllForgedSubcategories().find(s => s.key === key);
      return subcat ? subcat.icon : '⚒';
    }
    return '⚒';
  };

  // Навигация
  const navigateTo = (params: Record<string, string>) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
    });
    setSearchParams(searchParams);
    setLocalSearch('');
  };

  // Хлебные крошки
  const breadcrumbs = useMemo(() => {
    const crumbs: Array<{ label: string; url?: string }> = [
      { label: 'Все изделия', url: '/catalog' }
    ];

    if (categoryFilter) {
      crumbs.push({
        label: categoryFilter === 'forged' ? 'Кованые изделия' : 'Латунная фурнитура',
        url: `/catalog?category=${categoryFilter}`
      });
    }

    if (subcategoryFilter && categoryFilter) {
      crumbs.push({
        label: getSubcategoryName(subcategoryFilter, categoryFilter)
      });
    }

    return crumbs;
  }, [categoryFilter, subcategoryFilter]);

  // Статистика по категориям
  const categoryStats = useMemo(() => {
    const forgedCount = products.filter(p => p.category === 'forged').length;
    const brassCount = products.filter(p => p.category === 'brass').length;
    return { forged: forgedCount, brass: brassCount, total: products.length };
  }, []);

  return (
    <div>
      {/* Заголовок */}
      <section className="py-24" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container">
          <p className="label-gold mb-6">Каталог изделий</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
            Историческая фурнитура
          </h1>

          {/* Хлебные крошки */}
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--c-ash)' }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span style={{ color: 'var(--c-gold)' }}>/</span>}
                {crumb.url ? (
                  <Link to={crumb.url} className="hover:text-[var(--c-gold)] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: 'var(--c-parchment)' }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* Статистика */}
          <div className="flex flex-wrap gap-8 text-base" style={{ color: 'var(--c-ash)' }}>
            <span>Всего: <strong className="text-lg" style={{ color: 'var(--c-parchment)' }}>{categoryStats.total}</strong> изделий</span>
            <span>Кованые: <strong className="text-lg" style={{ color: 'var(--c-parchment)' }}>{categoryStats.forged}</strong></span>
            <span>Латунные: <strong className="text-lg" style={{ color: 'var(--c-parchment)' }}>{categoryStats.brass}</strong></span>
            {(categoryFilter || subcategoryFilter) && (
              <span>Показано: <strong className="text-lg" style={{ color: 'var(--c-gold)' }}>{filtered.length}</strong></span>
            )}
          </div>
        </div>
      </section>

      {/* Навигационные табы */}
      <section style={{ backgroundColor: 'var(--c-coal)', borderBottom: '1px solid var(--c-rule-light)' }}>
        <div className="container">
          <div className="flex flex-wrap items-center gap-2 py-4">
            {/* Все товары */}
            <button
              onClick={() => navigateTo({})}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                !categoryFilter && !subcategoryFilter
                  ? 'text-[var(--c-coal)]'
                  : 'text-[var(--c-ash)] hover:text-[var(--c-parchment)]'
              }`}
              style={{
                backgroundColor: !categoryFilter && !subcategoryFilter ? 'var(--c-gold)' : 'transparent',
                border: !categoryFilter && !subcategoryFilter ? 'none' : '1px solid var(--c-rule-light)'
              }}
            >
              Все ({categoryStats.total})
            </button>

            {/* Кованые изделия */}
            <button
              onClick={() => navigateTo({ category: 'forged' })}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                categoryFilter === 'forged' && !subcategoryFilter
                  ? 'text-[var(--c-coal)]'
                  : 'text-[var(--c-ash)] hover:text-[var(--c-parchment)]'
              }`}
              style={{
                backgroundColor: categoryFilter === 'forged' && !subcategoryFilter ? 'var(--c-gold)' : 'transparent',
                border: categoryFilter === 'forged' && !subcategoryFilter ? 'none' : '1px solid var(--c-rule-light)'
              }}
            >
              🔨 Кованые ({categoryStats.forged})
            </button>

            {/* Латунная фурнитура */}
            <button
              onClick={() => navigateTo({ category: 'brass' })}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                categoryFilter === 'brass' && !subcategoryFilter
                  ? 'text-[var(--c-coal)]'
                  : 'text-[var(--c-ash)] hover:text-[var(--c-parchment)]'
              }`}
              style={{
                backgroundColor: categoryFilter === 'brass' && !subcategoryFilter ? 'var(--c-gold)' : 'transparent',
                border: categoryFilter === 'brass' && !subcategoryFilter ? 'none' : '1px solid var(--c-rule-light)'
              }}
            >
              ✨ Латунные ({categoryStats.brass})
            </button>

            {/* Разделитель */}
            <div className="w-px h-6 mx-2" style={{ backgroundColor: 'var(--c-rule-light)' }}></div>

            {/* Подкатегории для латунной */}
            {categoryFilter === 'brass' && Object.entries(brassCategories).map(([key, cat]) => {
              const subcats = Object.keys((cat as any).subcategories);
              const count = products.filter(p => p.category === 'brass' && subcats.includes(p.subcategory)).length;
              const isActive = subcategoryFilter && subcats.includes(subcategoryFilter);

              return (
                <button
                  key={key}
                  onClick={() => navigateTo({ category: 'brass', subcategory: subcats[0] })}
                  className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
                    isActive
                      ? 'text-[var(--c-coal)]'
                      : 'text-[var(--c-ash)] hover:text-[var(--c-parchment)]'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--c-gold-deep)' : 'transparent',
                    border: isActive ? 'none' : '1px solid var(--c-rule-light)'
                  }}
                  title={(cat as any).name}
                >
                  {(cat as any).icon} {count}
                </button>
              );
            })}

            {/* Подкатегории для кованых */}
            {categoryFilter === 'forged' && Object.entries(forgedCategories).map(([key, cat]) => {
              const subcats = Object.keys((cat as any).subcategories);
              const count = products.filter(p => p.category === 'forged' && subcats.includes(p.subcategory)).length;
              const isActive = subcategoryFilter && subcats.includes(subcategoryFilter);

              return (
                <button
                  key={key}
                  onClick={() => navigateTo({ category: 'forged', subcategory: subcats[0] })}
                  className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
                    isActive
                      ? 'text-[var(--c-coal)]'
                      : 'text-[var(--c-ash)] hover:text-[var(--c-parchment)]'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--c-gold-deep)' : 'transparent',
                    border: isActive ? 'none' : '1px solid var(--c-rule-light)'
                  }}
                  title={(cat as any).name}
                >
                  {(cat as any).icon} {count}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Панель управления */}
      <section style={{ backgroundColor: 'var(--c-charcoal)', borderBottom: '1px solid var(--c-rule-light)' }}>
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            {/* Поиск */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Поиск по каталогу..."
                className="w-full px-4 py-2 text-sm bg-transparent border rounded focus:outline-none focus:border-[var(--c-gold)] transition-colors"
                style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }}
              />
            </div>

            {/* Сортировка */}
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: 'var(--c-ash)' }}>Сортировка:</span>
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                className="px-3 py-2 text-xs bg-transparent border rounded focus:outline-none focus:border-[var(--c-gold)]"
                style={{ borderColor: 'var(--c-steel)', color: 'var(--c-parchment)' }}
              >
                <option value="default" style={{ color: 'var(--c-ink)' }}>По умолчанию</option>
                <option value="name" style={{ color: 'var(--c-ink)' }}>По названию</option>
                <option value="id" style={{ color: 'var(--c-ink)' }}>По артикулу</option>
              </select>
            </div>

            {/* Переключение вида */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'text-[var(--c-gold)]' : 'text-[var(--c-ash)] hover:text-[var(--c-parchment)]'}`}
                style={{ backgroundColor: viewMode === 'grid' ? 'var(--c-iron)' : 'transparent' }}
                title="Сетка"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="2" y="2" width="7" height="7" />
                  <rect x="11" y="2" width="7" height="7" />
                  <rect x="2" y="11" width="7" height="7" />
                  <rect x="11" y="11" width="7" height="7" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'text-[var(--c-gold)]' : 'text-[var(--c-ash)] hover:text-[var(--c-parchment)]'}`}
                style={{ backgroundColor: viewMode === 'list' ? 'var(--c-iron)' : 'transparent' }}
                title="Список"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <rect x="2" y="3" width="16" height="3" />
                  <rect x="2" y="8.5" width="16" height="3" />
                  <rect x="2" y="14" width="16" height="3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Контент */}
      <section className="py-12" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container">
          {filtered.length > 0 ? (
            <>
              {/* Группировка по подкатегориям */}
              {!categoryFilter && !subcategoryFilter ? (
                // Показываем все товары сгруппированными по категориям
                <>
                  {/* Кованые изделия */}
                  {filtered.filter(p => p.category === 'forged').length > 0 && (
                    <div className="mb-16">
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
                          🔨 Кованые изделия
                        </h2>
                        <Link
                          to="/catalog?category=forged"
                          className="link-forge"
                        >
                          Показать все →
                        </Link>
                      </div>
                      <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                        {filtered.filter(p => p.category === 'forged').slice(0, viewMode === 'grid' ? 4 : 3).map(product => (
                          <ProductCard key={product.id} product={product} viewMode={viewMode} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Латунная фурнитура */}
                  {filtered.filter(p => p.category === 'brass').length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
                          ✨ Латунная фурнитура
                        </h2>
                        <Link
                          to="/catalog?category=brass"
                          className="link-forge"
                        >
                          Показать все →
                        </Link>
                      </div>
                      <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                        {filtered.filter(p => p.category === 'brass').slice(0, viewMode === 'grid' ? 4 : 3).map(product => (
                          <ProductCard key={product.id} product={product} viewMode={viewMode} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Показываем товары сгруппированными по подкатегориям
                Object.entries(groupedProducts).map(([subcategory, products]) => (
                  <div key={subcategory} className="mb-12">
                    <div className="flex items-center justify-between mb-6 pb-4" style={{ borderBottom: '1px solid var(--c-rule-light)' }}>
                      <h3 className="text-2xl font-semibold flex items-center gap-3" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
                        <span>{getSubcategoryIcon(subcategory, categoryFilter)}</span>
                        <span>{getSubcategoryName(subcategory, categoryFilter)}</span>
                        <span className="text-sm font-normal" style={{ color: 'var(--c-ash)' }}>({products.length})</span>
                      </h3>
                    </div>
                    <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                      {products.map(product => (
                        <ProductCard key={product.id} product={product} viewMode={viewMode} />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </>
          ) : (
            <div className="py-16 text-center">
              <p className="text-6xl mb-6">🔍</p>
              <p className="text-2xl mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>
                Товары не найдены
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--c-ash)' }}>
                {localSearch
                  ? `По запросу "${localSearch}" ничего не найдено`
                  : 'По выбранным параметрам товары не найдены'
                }
              </p>
              <button
                onClick={() => { navigateTo({}); setLocalSearch(''); }}
                className="btn-outline-light"
              >
                Показать все товары
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

// Компонент карточки товара
function ProductCard({ product, viewMode }: { product: any; viewMode: ViewMode }) {
  if (viewMode === 'list') {
    return (
      <Link
        to={`/product/${product.id}`}
        className="flex gap-8 p-6 card-dark group hover:border-[var(--c-gold)] transition-all duration-500"
      >
        <div className="w-40 h-40 flex-shrink-0 overflow-hidden rounded-lg" style={{ backgroundColor: 'var(--c-iron)', boxShadow: 'var(--shadow-md)' }}>
          <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <p className="font-mono text-sm mb-2" style={{ color: 'var(--c-gold)' }}>{product.id}</p>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-[var(--c-gold)] transition-colors duration-300" style={{ fontFamily: 'var(--f-display)' }}>
            {product.title}
          </h3>
          <p className="text-base mb-3" style={{ color: 'var(--c-ash)' }}>
            {product.category === 'brass' ? 'Латунная фурнитура' : 'Кованые изделия'}
            {product.subcategory && ` · ${product.subcategory}`}
          </p>
          <p className="text-sm" style={{ color: 'var(--c-smoke)' }}>
            {product.alloy} · {product.dimensions}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group">
      <div className="overflow-hidden mb-6 relative rounded-lg" style={{ aspectRatio: '4/5', boxShadow: 'var(--shadow-lg)' }}>
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-coal)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
        </Link>
      </div>
      <p className="font-mono text-sm mb-3" style={{ color: 'var(--c-gold)' }}>{product.id}</p>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--c-gold)] transition-colors duration-300" style={{ fontFamily: 'var(--f-display)' }}>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h3>
      <p className="label text-xs mb-2">
        {product.category === 'brass' ? 'Латунная фурнитура' : 'Кованые изделия'}
      </p>
      <p className="text-sm" style={{ color: 'var(--c-ash)' }}>{product.alloy}</p>
    </article>
  );
}
