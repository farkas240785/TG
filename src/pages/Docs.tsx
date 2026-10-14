export default function Docs() {
  return (
    <div>
      <section className="py-20" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><p className="label-gold mb-6">Нормативная база</p><h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Документация</h1></div>
      </section>
      <section className="container py-16">
        <div className="space-y-8">
          <div className="card-dark p-8"><h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--f-display)' }}>ГОСТ Р 55567-2013</h3><p className="text-sm" style={{ color: 'var(--c-ash)' }}>Реставрация памятников наследия. Требования к производству работ.</p></div>
          <div className="card-dark p-8"><h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--f-display)' }}>ГОСТ 17711-93</h3><p className="text-sm" style={{ color: 'var(--c-ash)' }}>Сплавы медно-цинковые (латуни) для отливок.</p></div>
          <div className="card-dark p-8"><h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'var(--f-display)' }}>Регламент КГИОП СПб</h3><p className="text-sm" style={{ color: 'var(--c-ash)' }}>Порядок согласования проектной документации.</p></div>
        </div>
      </section>
    </div>
  );
}
