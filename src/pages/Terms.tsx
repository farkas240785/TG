import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div>
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--c-charcoal)' }}>
        <div className="absolute inset-0 coal-texture"></div>
        <div className="container relative z-10"><p className="label-gold mb-4">Юридическая информация</p><h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>Пользовательское соглашение</h1><p className="text-base font-light" style={{ color: 'var(--c-ash)' }}>Дата вступления в силу: 1 января 2026 года</p></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 forge-gradient"></div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--c-coal)' }}>
        <div className="container max-w-4xl">
          <div className="space-y-12">
            <div><h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>1. Общие положения</h2><div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--c-ash)' }}><p>1.1. Настоящее Соглашение регулирует отношения между ООО «Тигель и Горн» и пользователями сайта.</p><p>1.2. Сайт предназначен для профессиональной аудитории: архитекторов-реставраторов, кураторов музеев, представителей реставрационных СРО.</p></div></div>

            <div><h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>2. Регистрация</h2><div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--c-ash)' }}><p>2.1. Для доступа к личному кабинету необходимо указать достоверные данные организации.</p><p>2.2. Пользователь несёт ответственность за сохранность учётных данных.</p></div></div>

            <div><h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--f-display)', color: 'var(--c-parchment)' }}>3. Обработка данных</h2><div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--c-ash)' }}><p>3.1. Регистрируясь, Пользователь даёт согласие на обработку персональных данных в соответствии с ФЗ-152.</p><p>3.2. Мануфактура не передаёт данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ.</p></div></div>

            <div className="text-center pt-8"><Link to="/register" className="btn-forge">Вернуться к регистрации</Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
