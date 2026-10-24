import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface SiteContent {
  hero: { subtitle: string; title: string; description: string; heroImage: string; };
  stats: Array<{ num: string; label: string; sub: string; }>;
  contacts: { city: string; region: string; address: string; phone: string; email: string; schedule: string; mapImage: string; };
  requisites: { name: string; inn: string; kpp: string; ogrn: string; };
  manifesto: { text: string; accent: string; };
  aboutBlocks: Array<{ title: string; heading: string; description: string; imageUrl: string; }>;
  steps: Array<{ step: string; title: string; desc: string; }>;
  thanks: Array<{ title: string; description: string; imageUrl: string; }>;
  catalog: Array<{ id: string; title: string; type: string; category: 'forged' | 'brass'; subcategory: string; material: string; alloy: string; weight_g: number; dimensions: string; coating: string; mounting: string; status: string; epoch: string; source: string; gost: string; description: string; image: string; }>;
  projects: Array<{ id: string; object: string; address: string; okn_status: string; year: number; task: string; cover: string; before: string; process: string; after: string; cgiop_letter: string; }>;
  discuss: { title: string; description: string; image: string; };
  footer: { description: string; };
  header: { subtitle: string; };
  aiAssistant: { greeting: string; name: string; role: string; };
  docs: { title: string; description: string; sections: Array<{ title: string; items: Array<{ title: string; desc: string; }>; }>; };
  orderForm: { title: string; description: string; customerTypes: string[]; projectTypes: Array<{ value: string; label: string; }>; };
  terms: { title: string; date: string; sections: Array<{ title: string; items: string[]; }>; };
}

const defaultContent: SiteContent = {
  hero: {
    subtitle: 'Литейно-кузнечная мануфактура · Чебоксары · с 2014 года',
    title: 'Историческая фурнитура. по нормативам КГИОП',
    description: 'Научно обоснованное воссоздание утраченной фурнитуры для объектов культурного наследия.',
    heroImage: 'https://image.qwenlm.ai/generated-images/8e167185-9e09-46b5-81fe-2c62c192cd7a/_result.png',
  },
  stats: [
    { num: '12+', label: 'лет специализации', sub: 'на объектах ОКН' },
    { num: '47', label: 'объектов', sub: 'согласовано с КГИОП' },
    { num: '4', label: 'марки сплавов', sub: 'Л63, ЛС59, Ст3, ЧХН' },
    { num: '100%', label: 'спектрометрия', sub: 'каждой партии' },
  ],
  contacts: {
    city: 'Чувашская Республика',
    region: 'Чебоксары',
    address: '428000, г. Чебоксары, пр-кт Мира, д. 1',
    phone: '+7 (8352) 12-34-56',
    email: 'info@tigeliGorn.ru',
    schedule: 'Пн–Пт: 09:00 – 18:00 MSK\nСб: по записи · Вс: выходной',
    mapImage: 'https://image.qwenlm.ai/generated-images/04db9183-54ad-42be-912c-dfae7d8a8070/_result.png',
  },
  requisites: { name: 'ООО «Тигель и Горн»', inn: '2130123456', kpp: '213001001', ogrn: '1022100123456' },
  manifesto: { text: 'Мы воссоздаём утраченное, опираясь на архив, металлургию и ремесло.', accent: 'Не стилизуем — а восстанавливаем.' },
  aboutBlocks: [
    { title: 'Тигель', heading: 'Металлургия и точность', description: 'Контроль химического состава каждой партии. Латунь Л63 по ГОСТ 17711-93, ЛС59-1, стали Ст3, ЧХН. Спектрометрический анализ, паспорт на каждую партию.', imageUrl: 'https://image.qwenlm.ai/generated-images/d4283e19-f164-4ae3-91c8-14cca370592f/_result.png' },
    { title: 'Горн', heading: 'Ремесло и форма', description: 'Художественная ковка, ручная формовка, патинирование по историческим рецептурам. Следы ремесла — доказательство подлинности.', imageUrl: 'https://image.qwenlm.ai/generated-images/a8ab9a65-9ede-41a8-9f37-bd5756f44b1c/_result.png' },
  ],
  steps: [
    { step: 'I', title: 'Архивное исследование', desc: 'Поиск исторических чертежей в РГИА, ГАРФ, Эрмитаже.' },
    { step: 'II', title: 'Натурное обследование', desc: 'Обмеры, фотофиксация, определение марки сплава.' },
    { step: 'III', title: '3D-модель / чертёж', desc: 'Создание точной модели на основе архивных данных.' },
    { step: 'IV', title: 'Изготовление прототипа', desc: 'Проверка соответствия историческому оригиналу.' },
    { step: 'V', title: 'Согласование с КГИОП', desc: 'Подготовка документов, получение заключения.' },
    { step: 'VI', title: 'Производство партии', desc: 'Контроль каждой единицы, спектрометрия.' },
    { step: 'VII', title: 'Паспортизация и монтаж', desc: 'Оформление паспортов, шеф-монтаж.' },
  ],
  thanks: [
    { title: 'КГИОП Санкт-Петербурга', description: 'За высокое качество реставрационных работ', imageUrl: 'https://image.qwenlm.ai/generated-images/9495b5d1-1829-449b-8ebd-69c94dec11f4/_result.png' },
    { title: 'Государственный Эрмитаж', description: 'За профессиональное воссоздание фурнитуры', imageUrl: 'https://image.qwenlm.ai/generated-images/5ad288e5-2b88-45f6-b81a-b7d65f664b2b/_result.png' },
    { title: 'Союз реставраторов России', description: 'За вклад в сохранение наследия', imageUrl: 'https://image.qwenlm.ai/generated-images/7ce33533-dcc8-4755-a0cf-214eda8b7362/_result.png' },
  ],
  catalog: [
    // Латунная фурнитура
    { id: 'TG-A-014', title: 'Ручка-скоба ампирная', type: 'handles', category: 'brass', subcategory: 'door-handles', material: 'casting', alloy: 'Л63', weight_g: 142, dimensions: '180×45×28 мм', coating: 'Восковая патина', mounting: 'Шпилька М6', status: 'approved', epoch: 'Ампир, 1810–1820-е гг.', source: 'РГИА', gost: 'ГОСТ Р 55567-2013', description: 'Реплика дверной ручки-скобы в стиле ампир.', image: 'https://image.qwenlm.ai/generated-images/084b6f4b-8996-499b-a24c-4d93eea8b2bb/_result.png' },
    { id: 'TG-A-015', title: 'Ручка-кноб барочная', type: 'handles', category: 'brass', subcategory: 'door-knobs', material: 'casting', alloy: 'ЛС59-1', weight_g: 98, dimensions: 'Ø52×68 мм', coating: 'Натуральная латунь', mounting: 'Винт М5', status: 'approved', epoch: 'Барокко, 1740–1760-е гг.', source: 'ГАРФ', gost: 'ГОСТ Р 55567-2013', description: 'Кноб барочного типа.', image: 'https://image.qwenlm.ai/generated-images/0da49803-c284-4bf9-a544-3ff3002baec6/_result.png' },
    { id: 'TG-S-003', title: 'Шпингалет латунный', type: 'espagnolettes', category: 'brass', subcategory: 'window-bolts', material: 'casting', alloy: 'Л63', weight_g: 210, dimensions: '280×35×18 мм', coating: 'Патинирование', mounting: 'Шурупы', status: 'approved', epoch: 'Классицизм', source: 'Обмеры 2022', gost: 'ГОСТ Р 55567-2013', description: 'Шпингалет оконный.', image: 'https://image.qwenlm.ai/generated-images/1849725d-a49f-4f00-8aee-d5698af41398/_result.png' },
    { id: 'TG-N-011', title: 'Наличник дверной', type: 'architraves', category: 'brass', subcategory: 'decorative-elements', material: 'casting', alloy: 'Л63', weight_g: 1850, dimensions: '2100×120×25 мм', coating: 'Полировка', mounting: 'Клей', status: 'custom', epoch: 'Екатерининский классицизм', source: 'Обследование 2023', gost: 'ГОСТ Р 55567-2013', description: 'Наборный наличник.', image: 'https://image.qwenlm.ai/generated-images/cf5e9c67-bb6b-4608-9e84-a995a1b10af8/_result.png' },
    { id: 'TG-P-007', title: 'Накладка замочная', type: 'plates', category: 'brass', subcategory: 'keyholes', material: 'casting', alloy: 'Л63', weight_g: 68, dimensions: '130×45×4 мм', coating: 'Патина', mounting: 'Штифты', status: 'approved', epoch: 'Ампир', source: 'РГИА', gost: 'ГОСТ Р 55567-2013', description: 'Прорезная накладка.', image: 'https://image.qwenlm.ai/generated-images/3cf26d66-83c7-432c-859d-e0c74062ba93/_result.png' },
    
    // Кованые изделия - Оконная фурнитура
    { id: 'FG-W-001', title: 'Кремона раздвижная двуштанговая', type: 'cremones', category: 'forged', subcategory: 'locking-mechanisms', material: 'combined', alloy: 'Ст3 + Л63', weight_g: 1850, dimensions: '800×45×35 мм', coating: 'Воронение + воск', mounting: 'Шурупы 5×40', status: 'approved', epoch: 'XVIII–XIX вв.', source: 'Натурные обмеры', gost: 'ГОСТ Р 55567-2013', description: 'Французского типа. Центральный замок — художественное литье, штанги — ручная ковка.', image: 'https://image.qwenlm.ai/generated-images/cbd7152d-b398-496e-ae97-6e96b75c8d97/_result.png' },
    { id: 'FG-W-002', title: 'Шпингалет рычажный с граненым штоком', type: 'window-bolts', category: 'forged', subcategory: 'locking-mechanisms', material: 'forging', alloy: 'Ст3', weight_g: 420, dimensions: '280×60×25 мм', coating: 'Воронение', mounting: 'Кузнечные заклепки', status: 'approved', epoch: 'XVIII в.', source: 'Эрмитаж', gost: 'ГОСТ Р 55567-2013', description: 'Чистая ковка. Шток, рычаг и скобы выковываются вручную.', image: 'https://image.qwenlm.ai/generated-images/e8ebc9c8-7938-4a69-b3b7-f072c6e7bd2d/_result.png' },
    { id: 'FG-W-003', title: 'Завертка оконная Т-образная', type: 'transom-fixtures', category: 'forged', subcategory: 'locking-mechanisms', material: 'forging', alloy: 'Ст3', weight_g: 180, dimensions: '120×40×15 мм', coating: 'Воронение + воск', mounting: 'Шурупы 4×25', status: 'approved', epoch: 'XVIII–XIX вв.', source: 'РГИА', gost: 'ГОСТ Р 55567-2013', description: 'Чистая ковка. Горячая кузнечная протяжка.', image: 'https://image.qwenlm.ai/generated-images/7f8846b1-5ba2-4672-815e-b3d1bed7d84f/_result.png' },
    { id: 'FG-W-004', title: 'Жиковина угловая просечная', type: 'hinges', category: 'forged', subcategory: 'support-elements', material: 'forging', alloy: 'Ст3', weight_g: 560, dimensions: '180×120×8 мм', coating: 'Воронение', mounting: 'Глухари 8×60', status: 'approved', epoch: 'XVII–XVIII вв.', source: 'Натурные обмеры', gost: 'ГОСТ Р 55567-2013', description: 'Чистая ковка. Листовое железо расковывается, узоры формируются горячим разрубом.', image: 'https://image.qwenlm.ai/generated-images/52eceb96-82ca-474e-9a8c-c17a99ebe495/_result.png' },
    { id: 'FG-W-005', title: 'Крючок ветровой оконный', type: 'hooks', category: 'forged', subcategory: 'fixation-protection', material: 'forging', alloy: 'Ст3', weight_g: 240, dimensions: '150×35×12 мм', coating: 'Воронение + воск', mounting: 'Шурупы 5×30', status: 'approved', epoch: 'XVIII–XIX вв.', source: 'РГИА', gost: 'ГОСТ Р 55567-2013', description: 'Чистая ковка. Прут торшонируется, концы оттягиваются.', image: 'https://image.qwenlm.ai/generated-images/7ab5a4bc-2e46-4709-9139-9b783b29e01e/_result.png' },
    
    // Кованые изделия - Дверная фурнитура
    { id: 'FG-D-001', title: 'Жиковина стреловидная с трилистником', type: 'door-hinges', category: 'forged', subcategory: 'door-hinges', material: 'forging', alloy: 'Ст3', weight_g: 1200, dimensions: '350×120×10 мм', coating: 'Воронение', mounting: 'Глухари 10×80', status: 'approved', epoch: 'XVII–XVIII вв.', source: 'Натурные обмеры', gost: 'ГОСТ Р 55567-2013', description: 'Чистая ковка. Массивный прут расковывается, узор создается горячим разрубом.', image: 'https://image.qwenlm.ai/generated-images/b2c050bc-925c-4a01-ab53-fc3282004c38/_result.png' },
    { id: 'FG-D-002', title: 'Ручка-кольцо из гнутого прута', type: 'door-knockers', category: 'forged', subcategory: 'door-handles', material: 'forging', alloy: 'Ст3', weight_g: 380, dimensions: 'Ø120×25 мм', coating: 'Воронение + воск', mounting: 'Сквозная шпилька М8', status: 'approved', epoch: 'XVIII–XIX вв.', source: 'РГИА', gost: 'ГОСТ Р 55567-2013', description: 'Чистая ковка. Прут гнется в кольцо, концы свариваются кузнечной сваркой.', image: 'https://image.qwenlm.ai/generated-images/b5bbb035-697b-4b03-803d-2698a9335c8a/_result.png' },
    { id: 'FG-D-003', title: 'Ручка-скоба витая с торшонированием', type: 'door-handles', category: 'forged', subcategory: 'door-handles', material: 'forging', alloy: 'Ст3', weight_g: 650, dimensions: '280×60×40 мм', coating: 'Воронение + воск', mounting: 'Шпилька М10', status: 'approved', epoch: 'XVIII в.', source: 'Эрмитаж', gost: 'ГОСТ Р 55567-2013', description: 'Чистая ковка. Квадратный прут закручивается вдоль оси.', image: 'https://image.qwenlm.ai/generated-images/29558770-1ef0-4b12-b46e-f0de857db65b/_result.png' },
    { id: 'FG-D-004', title: 'Накладка замочная прорезная', type: 'keyholes', category: 'forged', subcategory: 'locks-keys', material: 'forging', alloy: 'Ст3', weight_g: 95, dimensions: '130×50×3 мм', coating: 'Воронение', mounting: 'Штифты 3×12', status: 'approved', epoch: 'XVIII–XIX вв.', source: 'РГИА', gost: 'ГОСТ Р 55567-2013', description: 'Холодная слесарная просечка и чеканка.', image: 'https://image.qwenlm.ai/generated-images/61354ecd-48f9-4938-813c-3f61c8be3191/_result.png' },
    { id: 'FG-D-005', title: 'Засов дверной полосовой', type: 'door-bolts', category: 'forged', subcategory: 'door-bolts', material: 'forging', alloy: 'Ст3', weight_g: 1450, dimensions: '400×80×12 мм', coating: 'Воронение + воск', mounting: 'Глухари 10×80', status: 'approved', epoch: 'XVIII в.', source: 'Натурные обмеры', gost: 'ГОСТ Р 55567-2013', description: 'Чистая ковка. Тяжелая силовая металлообработка.', image: 'https://image.qwenlm.ai/generated-images/13e88317-782c-4094-b6a4-8f328378d1d0/_result.png' },
  ],
  projects: [
    { id: 'PRJ-001', object: 'Особняк Салтыковых', address: 'СПб, наб. р. Мойки, 28', okn_status: 'ОКН федерального значения', year: 2025, task: 'Воссоздание 48 ручек и 24 шпингалетов', cover: 'https://image.qwenlm.ai/generated-images/32c5f315-47db-4dc6-b5f9-f3fd9dcae48f/_result.png', before: 'https://image.qwenlm.ai/generated-images/f42370df-899c-4ac9-ac6b-c0cc25d4ee81/_result.png', process: 'https://image.qwenlm.ai/generated-images/e2053948-8d35-4956-8a97-bf5772758405/_result.png', after: 'https://image.qwenlm.ai/generated-images/7467c9f8-10f9-461e-b8c7-7e78775a99ac/_result.png', cgiop_letter: '№ 03-28/1147' },
    { id: 'PRJ-002', object: 'Дворец Разумовского', address: 'СПб, Адмиралтейский пр., 6', okn_status: 'ОКН федерального значения', year: 2024, task: 'Изготовление 12 решёток и 36 петель', cover: 'https://image.qwenlm.ai/generated-images/b05f71f1-0141-4c98-b4ad-c1674beddc60/_result.png', before: 'https://image.qwenlm.ai/generated-images/ad1e6faa-fe63-43eb-99ba-9b7c017f0307/_result.png', process: 'https://image.qwenlm.ai/generated-images/2ead7818-5539-493c-8c8a-83c34e2df11e/_result.png', after: 'https://image.qwenlm.ai/generated-images/5c511357-3e8e-409b-a91a-1214a3a99f6a/_result.png', cgiop_letter: '№ 03-14/0892' },
    { id: 'PRJ-003', object: 'Усадьба Богословка', address: 'Ленинградская обл.', okn_status: 'ОКН регионального значения', year: 2024, task: 'Оснащение церкви: 64 изделия', cover: 'https://image.qwenlm.ai/generated-images/cbd86b19-ca63-4c1b-92cc-e7d3bc636e67/_result.png', before: 'https://image.qwenlm.ai/generated-images/839b70ec-32e9-4fd6-ac87-d6e58ce01bc2/_result.png', process: 'https://image.qwenlm.ai/generated-images/47563109-b9c8-47d8-8631-9573e82e815e/_result.png', after: 'https://image.qwenlm.ai/generated-images/787cbeed-37b1-4b8b-8d0f-339b4e745550/_result.png', cgiop_letter: '№ 02-41/0567' },
    { id: 'PRJ-004', object: 'Аничков дворец', address: 'СПб, Невский пр., 39', okn_status: 'ОКН федерального значения', year: 2023, task: 'Реставрация каминных решёток', cover: 'https://image.qwenlm.ai/generated-images/da07de48-93bc-4ee4-87be-51b78c32e1a7/_result.png', before: 'https://image.qwenlm.ai/generated-images/7a99be2a-ebea-48c2-919d-be295d8010c7/_result.png', process: 'https://image.qwenlm.ai/generated-images/7cea931f-451c-4da9-9779-cd09d6b1e076/_result.png', after: 'https://image.qwenlm.ai/generated-images/7419af5f-82bd-4285-ba6c-727232a1934c/_result.png', cgiop_letter: '№ 03-07/0234' },
  ],
  discuss: { title: 'Обсудить проект', description: 'Оставьте заявку, и наш технолог свяжется с вами для обсуждения задачи.', image: 'https://image.qwenlm.ai/generated-images/c7a18472-26a7-497d-96f2-a74fc7adb402/_result.png' },
  footer: { description: 'Литейно-кузнечная мануфактура. Производство расположено в г. Чебоксары, Чувашская Республика.' },
  header: { subtitle: 'Литейно-кузнечная мануфактура' },
  aiAssistant: { greeting: 'Здравствуйте! Меня зовут Алексей, я технолог мануфактуры «Тигель и Горн». Работаю с реставрационной фурнитурой уже 12 лет. Помогу подобрать изделия для вашего проекта.', name: 'Алексей', role: 'технолог мануфактуры' },
  docs: {
    title: 'Документация',
    description: 'ГОСТы, регламенты, образцы паспортов и методические материалы.',
    sections: [
      { title: 'ГОСТы и регламенты', items: [{ title: 'ГОСТ Р 55567-2013', desc: 'Реставрация памятников наследия.' }, { title: 'Р-13.19.15', desc: 'Руководство по реставрации металлических конструкций.' }, { title: 'ГОСТ 17711-93', desc: 'Сплавы медно-цинковые (латуни) для отливок.' }, { title: 'Регламент КГИОП СПб', desc: 'Порядок согласования проектной документации.' }] },
      { title: 'Образцы паспортов', items: [{ title: 'Паспорт сплава (латунь Л63)', desc: 'Результаты спектрометрического анализа.' }, { title: 'Протокол патинирования', desc: 'Состав раствора, время выдержки, температура.' }, { title: 'Паспорт изделия', desc: 'Артикул, ТТХ, привязка к прототипу.' }] },
      { title: 'Методические материалы', items: [{ title: 'Методика натурного обследования', desc: 'Порядок обмеров и описания фурнитуры.' }, { title: 'Технология восковой модели', desc: 'Изготовление восковой модели для литья.' }, { title: 'Рецептуры патинирования', desc: 'Исторические и современные составы.' }] },
      { title: 'FAQ по согласованиям', items: [{ title: 'Когда требуется согласование с КГИОП?', desc: 'Для любых работ на объектах культурного наследия.' }, { title: 'Какие документы нужны для подачи в КГИОП?', desc: 'Задание, справка, чертежи, проект реставрации.' }, { title: 'Сколько времени занимает согласование?', desc: 'Стандартный срок — 30 рабочих дней.' }] },
    ],
  },
  orderForm: { title: 'Заказать расчёт', description: 'Заполните форму — подготовим расчёт стоимости и сроков.', customerTypes: ['ГАП', 'Реставратор', 'Генподрядчик', 'Другое'], projectTypes: [{ value: 'restoration', label: 'Реставрация ОКН' }, { value: 'historic', label: 'Новое строительство в исторической среде' }, { value: 'private', label: 'Частный заказ' }] },
  terms: { title: 'Пользовательское соглашение', date: '1 января 2026 года', sections: [{ title: '1. Общие положения', items: ['Настоящее Соглашение регулирует отношения между ООО «Тигель и Горн» и пользователями сайта.', 'Сайт предназначен для профессиональной аудитории.'] }, { title: '2. Регистрация', items: ['Для доступа к личному кабинету необходимо указать достоверные данные организации.', 'Пользователь несёт ответственность за сохранность учётных данных.'] }, { title: '3. Обработка данных', items: ['Регистрируясь, Пользователь даёт согласие на обработку персональных данных в соответствии с ФЗ-152.', 'Мануфактура не передаёт данные третьим лицам.'] }] },
};

interface SiteContentContextType {
  content: SiteContent;
  updateContent: (section: keyof SiteContent, data: any) => void;
  resetContent: () => void;
}

const SiteContentContext = createContext<SiteContentContextType | undefined>(undefined);

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    const stored = localStorage.getItem('site_content');
    if (stored) {
      try { setContent({ ...defaultContent, ...JSON.parse(stored) }); } catch {}
    }
  }, []);

  const updateContent = (section: keyof SiteContent, data: any) => {
    const newContent = { ...content, [section]: data };
    setContent(newContent);
    localStorage.setItem('site_content', JSON.stringify(newContent));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('site_content');
  };

  return (
    <SiteContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const context = useContext(SiteContentContext);
  if (!context) throw new Error('useSiteContent must be used within SiteContentProvider');
  return context;
}
