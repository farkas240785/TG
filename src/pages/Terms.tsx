export default function Terms() {
  return (
    <div>
      <section className="py-20" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="container"><h1 className="text-4xl font-bold" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Пользовательское соглашение</h1></div>
      </section>
      <section className="py-16" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container max-w-4xl space-y-12">
          <div><h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>1. Общие положения</h2><p className="text-sm" style={{ color: 'var(--c-ash)' }}>Настоящее Соглашение регулирует отношения между ООО «Тигель и Горн» и пользователями сайта.</p></div>
          <div><h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>2. Обработка данных</h2><p className="text-sm" style={{ color: 'var(--c-ash)' }}>Регистрируясь, Пользователь даёт согласие на обработку персональных данных в соответствии с ФЗ-152.</p></div>
        </div>
      </section>
    </div>
  );
}
