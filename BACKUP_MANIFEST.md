# 📋 BACKUP MANIFEST - Тигель & Горн

**Дата создания:** 2026-01-20  
**Версия проекта:** 2.1  
**Всего файлов:** 41

## 📁 Структура проекта

### Корневые файлы (5)
- `index.html` - Главная HTML страница
- `package.json` - Зависимости npm
- `package-lock.json` - Lock файл зависимостей
- `tsconfig.json` - Конфигурация TypeScript
- `vite.config.js` - Конфигурация Vite

### Документация (5)
- `README.md` - Основная документация проекта
- `ADMIN_GUIDE.md` - Руководство по панели управления
- `CATALOG_NAVIGATION.md` - Документация по навигации каталога
- `HERO_ANIMATIONS.md` - Документация по анимациям HERO-секции
- `BACKUP_MANIFEST.md` - Этот файл

### Исходный код - src/ (31 файл)

#### Точка входа (3)
- `src/main.tsx` - Точка входа приложения
- `src/App.tsx` - Главный компонент с роутингом
- `src/index.css` - Глобальные стили

#### Контексты (2)
- `src/context/AuthContext.tsx` - Контекст авторизации
- `src/context/SiteContentContext.tsx` - Контекст контента сайта

#### Данные (2)
- `src/data/catalog.ts` - Данные каталога (15 товаров)
- `src/data/dashboard.ts` - Данные личного кабинета

#### Компоненты (5)
- `src/components/Header.tsx` - Шапка сайта
- `src/components/Footer.tsx` - Подвал сайта
- `src/components/AIAssistant.tsx` - AI-консультант
- `src/components/ProtectedRoute.tsx` - Защита маршрутов
- `src/components/ImageUploader.tsx` - Загрузка изображений

#### Утилиты (1)
- `src/utils/imageUpload.ts` - Утилиты для загрузки изображений

#### Страницы (18)
- `src/pages/Home.tsx` - Главная страница
- `src/pages/Catalog.tsx` - Каталог изделий
- `src/pages/Product.tsx` - Страница товара
- `src/pages/Projects.tsx` - Проекты
- `src/pages/Docs.tsx` - Документация
- `src/pages/Order.tsx` - Форма расчёта
- `src/pages/About.tsx` - О мануфактуре
- `src/pages/Contacts.tsx` - Контакты
- `src/pages/Folder.tsx` - Папка проекта
- `src/pages/Login.tsx` - Вход
- `src/pages/Register.tsx` - Регистрация
- `src/pages/Terms.tsx` - Пользовательское соглашение
- `src/pages/Dashboard.tsx` - Личный кабинет
- `src/pages/OrderTracker.tsx` - Трекер заказов
- `src/pages/Configurator.tsx` - Конфигуратор изделий
- `src/pages/ObjectFolder.tsx` - Папка объекта
- `src/pages/Finance.tsx` - Финансы
- `src/pages/CMS.tsx` - CMS
- `src/pages/Admin.tsx` - Панель управления (17 разделов)

## 🔑 Ключевые данные

### Реквизиты организации
- **Название:** ООО «Тигель и Горн»
- **ИНН:** 2130123456
- **КПП:** 213001001
- **ОГРН:** 1022100123456
- **Адрес:** 428000, г. Чебоксары, пр-кт Мира, д. 1
- **Телефон:** +7 (8352) 12-34-56
- **Email:** info@tigeliGorn.ru

### Демо-аккаунты
1. **Менеджер:**
   - Email: `manager@tigelgorn.ru`
   - Пароль: `manager123`
   - Роль: manager

2. **Архитектор:**
   - Email: `demo@tigelgorn.ru`
   - Пароль: `demo123`
   - Роль: architect

### Структура каталога
- **Всего товаров:** 15
- **Кованые изделия:** 10 товаров
  - Оконная фурнитура: 5 товаров (FG-W-001 до FG-W-005)
  - Дверная фурнитура: 5 товаров (FG-D-001 до FG-D-005)
- **Латунная фурнитура:** 5 товаров
  - TG-A-014, TG-A-015, TG-S-003, TG-N-011, TG-P-007

### HERO-изображение
- **URL:** `https://image.qwenlm.ai/generated-images/ddc9b454-75dc-4127-9957-8142392edab1/_result.png`
- **Описание:** Композиция из двух частей: тигель с расплавленным металлом (металлургия) и наковальня с инструментами (кузнечное ремесло)
- **Размер:** 1920×1080 px
- **Стиль:** Реал-лайф, split-composition, драматическое освещение

### Проекты
- **Всего проектов:** 4
- PRJ-001: Особняк Салтыковых (2025)
- PRJ-002: Дворец Разумовского (2024)
- PRJ-003: Усадьба Богословка (2024)
- PRJ-004: Аничков дворец (2023)

### Панель управления
- **Всего разделов:** 17
- Доступ: только для роли manager
- Сохранение: localStorage (ключ: `site_content`)

## 🎨 Дизайн-система

### Цветовая палитра
```css
--c-void: #08070A
--c-coal: #0C0B0E
--c-charcoal: #131216
--c-iron: #1B1A1F
--c-steel: #252429
--c-gold-deep: #8B6914
--c-gold: #B8860B
--c-gold-rich: #D4A017
--c-gold-light: #E8C547
--c-parchment: #E8E2D4
--c-ash: #A8A094
--c-smoke: #6B6560
--c-patina: #5A7A5E
--c-error: #A63D2F
```

### Шрифты
- **EB Garamond** - заголовки (serif)
- **Source Sans 3** - основной текст (sans-serif)
- **IBM Plex Mono** - технические данные (monospace)

## 📦 Зависимости

### Основные
- React 18.3.1
- React Router DOM 7.9.4
- TypeScript 5.9.3
- Vite 6.4.3
- Tailwind CSS 4.1.16

### Разработка
- @types/react 18.3.27
- @types/react-dom 18.3.7

## 🔧 Команды

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для production
npm run build

# Предпросмотр production сборки
npm run preview
```

## 📊 Статистика проекта

- **Общий размер:** ~350 KB (без node_modules)
- **JavaScript:** ~337 KB (gzip: ~85 KB)
- **CSS:** ~26 KB (gzip: ~6 KB)
- **HTML:** ~1 KB (gzip: ~0.5 KB)
- **Время сборки:** ~3 секунды
- **Модулей:** 60

## ✅ Чек-лист восстановления

При восстановлении проекта проверьте:

- [ ] Все 40 файлов на месте
- [ ] `npm install` выполнен успешно
- [ ] `npm run build` проходит без ошибок
- [ ] Реквизиты организации корректны
- [ ] Демо-аккаунты работают
- [ ] Все 15 товаров отображаются
- [ ] Все 4 проекта отображаются
- [ ] Панель управления доступна для manager
- [ ] Изображения загружаются корректно
- [ ] localStorage работает (ключ: `site_content`)

## 🚨 Важные замечания

1. **localStorage** хранит контент сайта (ключ: `site_content`)
2. **Изображения** загружаются с внешних URL (image.qwenlm.ai)
3. **Авторизация** работает через localStorage (ключ: `auth_user`)
4. **Папка проекта** хранится в localStorage (ключ: `tg_project_folder`)
5. **Все изменения** в админке применяются мгновенно через контекст

## 📞 Контакты для восстановления

Если возникли проблемы с восстановлением:
- Проверьте BACKUP_MANIFEST.md
- Используйте RESTORATION_GUIDE.md
- Запустите check-integrity.sh
- Обратитесь к документации в README.md

---

**Последнее обновление:** 2026-01-20  
**Следующая проверка:** При каждом значимом изменении проекта
