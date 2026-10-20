export interface CatalogProduct {
  id: string; title: string; type: string; category: 'forged' | 'brass'; subcategory: string; material: string; alloy: string; weight_g: number;
  dimensions: string; coating: string; mounting: string; status: 'approved' | 'prototype' | 'custom';
  has_prototype: boolean; epoch: string; source: string; gost: string; description: string;
  images: { main: string; macro: string; archive: string; object: string; };
  documents: Array<{ title: string; url: string; format: string }>; related: string[];
}

export const brassCategories = {
  'window-fittings': {
    name: 'Оконные латунные приборы',
    icon: '🪟',
    subcategories: {
      'cremones': 'Кремоны и эспаньолеты',
      'window-bolts': 'Оконные задвижки',
      'transom-fixtures': 'Форточные и фрамужные фиксаторы',
      'ventilation': 'Вентиляционные приборы'
    }
  },
  'door-fittings': {
    name: 'Дверные латунные приборы',
    icon: '🚪',
    subcategories: {
      'door-handles': 'Дверные ручки',
      'door-knobs': 'Ручки-кнобы',
      'door-bolts': 'Дверные засовы',
      'keyholes': 'Ключевины',
      'door-knockers': 'Дверные молотки',
      'door-stoppers': 'Дверные упоры'
    }
  },
  'hinges': {
    name: 'Петли и навесы',
    icon: '🔩',
    subcategories: {
      'card-hinges': 'Петли карточные',
      'concealed-hinges': 'Петли ввертные и скрытые'
    }
  },
  'furniture-fittings': {
    name: 'Мебельные и интерьерные элементы',
    icon: '🪑',
    subcategories: {
      'furniture-handles': 'Мебельные ручки',
      'decorative-elements': 'Накладной декор',
      'fireplace-fittings': 'Каминные приборы'
    }
  },
  'architectural-fittings': {
    name: 'Архитектурная фурнитура',
    icon: '🏛️',
    subcategories: {
      'ventilation-grilles': 'Вентиляционные решётки',
      'carpet-rods': 'Ковродержатели',
      'handrail-brackets': 'Кронштейны перил'
    }
  }
};

export const forgedCategories = {
  'window-hardware': {
    name: 'Оконная фурнитура и приборы',
    icon: '🪟',
    subcategories: {
      'locking-mechanisms': 'Запирающие механизмы и приборы',
      'support-elements': 'Опорные и связующие элементы',
      'fixation-protection': 'Элементы фиксации и наружной защиты'
    }
  },
  'door-hardware': {
    name: 'Дверная фурнитура и приборы',
    icon: '🚪',
    subcategories: {
      'door-hinges': 'Дверные навесы (Петли)',
      'door-handles': 'Приводы запорных механизмов (Ручки)',
      'locks-keys': 'Замки, ключевины и крепежные элементы',
      'door-bolts': 'Вспомогательные запорные элементы дверей'
    }
  }
};

export interface Project {
  id: string; object: string; address: string; okn_status: string; year: number; task: string;
  images: { cover: string; before: string; process: string; after: string; };
  status: string; cgiop_letter: string;
}

export const catalogMeta = {
  types: { handles: "Ручки", espagnolettes: "Шпингалеты", architraves: "Наличники", grilles: "Решётки", hinges: "Петли", brackets: "Скобы", plates: "Накладки" },
  materials: { forging: "Ковка", casting: "Литьё латуни", combined: "Комбинированные" },
};

export const products: CatalogProduct[] = [
  // Латунная фурнитура
  { id: "TG-A-014", title: "Ручка-скоба ампирная", type: "handles", category: "brass", subcategory: "door-handles", material: "casting", alloy: "Л63", weight_g: 142, dimensions: "180×45×28 мм", coating: "Восковая патина", mounting: "Шпилька М6", status: "approved", has_prototype: true, epoch: "Ампир, 1810–1820-е гг.", source: "РГИА", gost: "ГОСТ Р 55567-2013", description: "Реплика дверной ручки-скобы в стиле ампир.", images: { main: "https://image.qwenlm.ai/generated-images/084b6f4b-8996-499b-a24c-4d93eea8b2bb/_result.png", macro: "https://image.qwenlm.ai/generated-images/0288b21a-ed54-47a5-82da-89d183eb0410/_result.png", archive: "https://image.qwenlm.ai/generated-images/87aaeb12-075d-4dfa-9670-4549d0797558/_result.png", object: "https://image.qwenlm.ai/generated-images/e45e2318-88f4-4bdf-a073-0620a99f2cbe/_result.png" }, documents: [{ title: "Паспорт сплава", url: "#", format: "PDF" }], related: ["TG-A-015"] },
  { id: "TG-A-015", title: "Ручка-кноб барочная", type: "handles", category: "brass", subcategory: "door-knobs", material: "casting", alloy: "ЛС59-1", weight_g: 98, dimensions: "Ø52×68 мм", coating: "Натуральная латунь", mounting: "Винт М5", status: "approved", has_prototype: true, epoch: "Барокко, 1740–1760-е гг.", source: "ГАРФ", gost: "ГОСТ Р 55567-2013", description: "Кноб барочного типа.", images: { main: "https://image.qwenlm.ai/generated-images/0da49803-c284-4bf9-a544-3ff3002baec6/_result.png", macro: "https://image.qwenlm.ai/generated-images/6b8acbb1-0f11-41e3-956c-6ecb82c90273/_result.png", archive: "https://image.qwenlm.ai/generated-images/b250ca15-0822-4f52-8f3d-127e84083c51/_result.png", object: "https://image.qwenlm.ai/generated-images/32c5f315-47db-4dc6-b5f9-f3fd9dcae48f/_result.png" }, documents: [], related: ["TG-A-014"] },
  { id: "TG-S-003", title: "Шпингалет латунный", type: "espagnolettes", category: "brass", subcategory: "window-bolts", material: "casting", alloy: "Л63", weight_g: 210, dimensions: "280×35×18 мм", coating: "Патинирование", mounting: "Шурупы", status: "approved", has_prototype: false, epoch: "Классицизм", source: "Обмеры 2022", gost: "ГОСТ Р 55567-2013", description: "Шпингалет оконный.", images: { main: "https://image.qwenlm.ai/generated-images/1849725d-a49f-4f00-8aee-d5698af41398/_result.png", macro: "https://image.qwenlm.ai/generated-images/6b8acbb1-0f11-41e3-956c-6ecb82c90273/_result.png", archive: "https://image.qwenlm.ai/generated-images/b250ca15-0822-4f52-8f3d-127e84083c51/_result.png", object: "https://image.qwenlm.ai/generated-images/da07de48-93bc-4ee4-87be-51b78c32e1a7/_result.png" }, documents: [], related: [] },
  { id: "TG-N-011", title: "Наличник дверной", type: "architraves", category: "brass", subcategory: "decorative-elements", material: "casting", alloy: "Л63", weight_g: 1850, dimensions: "2100×120×25 мм", coating: "Полировка", mounting: "Клей", status: "custom", has_prototype: true, epoch: "Екатерининский классицизм", source: "Обследование 2023", gost: "ГОСТ Р 55567-2013", description: "Наборный наличник.", images: { main: "https://image.qwenlm.ai/generated-images/cf5e9c67-bb6b-4608-9e84-a995a1b10af8/_result.png", macro: "https://image.qwenlm.ai/generated-images/0da49803-c284-4bf9-a544-3ff3002baec6/_result.png", archive: "https://image.qwenlm.ai/generated-images/b250ca15-0822-4f52-8f3d-127e84083c51/_result.png", object: "https://image.qwenlm.ai/generated-images/32c5f315-47db-4dc6-b5f9-f3fd9dcae48f/_result.png" }, documents: [], related: [] },
  { id: "TG-P-007", title: "Накладка замочная", type: "plates", category: "brass", subcategory: "keyholes", material: "casting", alloy: "Л63", weight_g: 68, dimensions: "130×45×4 мм", coating: "Патина", mounting: "Штифты", status: "approved", has_prototype: true, epoch: "Ампир", source: "РГИА", gost: "ГОСТ Р 55567-2013", description: "Прорезная накладка.", images: { main: "https://image.qwenlm.ai/generated-images/3cf26d66-83c7-432c-859d-e0c74062ba93/_result.png", macro: "https://image.qwenlm.ai/generated-images/0da49803-c284-4bf9-a544-3ff3002baec6/_result.png", archive: "https://image.qwenlm.ai/generated-images/b250ca15-0822-4f52-8f3d-127e84083c51/_result.png", object: "https://image.qwenlm.ai/generated-images/da07de48-93bc-4ee4-87be-51b78c32e1a7/_result.png" }, documents: [], related: [] },
  
  // Кованые изделия - Оконная фурнитура
  { id: "FG-W-001", title: "Кремона раздвижная двуштанговая", type: "cremones", category: "forged", subcategory: "locking-mechanisms", material: "combined", alloy: "Ст3 + Л63", weight_g: 1850, dimensions: "800×45×35 мм", coating: "Воронение + воск", mounting: "Шурупы 5×40 (6 шт.)", status: "approved", has_prototype: true, epoch: "XVIII–XIX вв.", source: "Натурные обмеры", gost: "ГОСТ Р 55567-2013", description: "Французского типа. Центральный замок — художественное литье, штанги — ручная ковка.", images: { main: "https://image.qwenlm.ai/generated-images/cbd7152d-b398-496e-ae97-6e96b75c8d97/_result.png", macro: "https://image.qwenlm.ai/generated-images/cbd7152d-b398-496e-ae97-6e96b75c8d97/_result.png", archive: "https://image.qwenlm.ai/generated-images/cbd7152d-b398-496e-ae97-6e96b75c8d97/_result.png", object: "https://image.qwenlm.ai/generated-images/cbd7152d-b398-496e-ae97-6e96b75c8d97/_result.png" }, documents: [], related: [] },
  { id: "FG-W-002", title: "Шпингалет рычажный с граненым штоком", type: "window-bolts", category: "forged", subcategory: "locking-mechanisms", material: "forging", alloy: "Ст3", weight_g: 420, dimensions: "280×60×25 мм", coating: "Воронение", mounting: "Кузнечные заклепки", status: "approved", has_prototype: true, epoch: "XVIII в.", source: "Эрмитаж", gost: "ГОСТ Р 55567-2013", description: "Чистая ковка. Шток, рычаг и скобы выковываются вручную из стального прута.", images: { main: "https://image.qwenlm.ai/generated-images/e8ebc9c8-7938-4a69-b3b7-f072c6e7bd2d/_result.png", macro: "https://image.qwenlm.ai/generated-images/e8ebc9c8-7938-4a69-b3b7-f072c6e7bd2d/_result.png", archive: "https://image.qwenlm.ai/generated-images/e8ebc9c8-7938-4a69-b3b7-f072c6e7bd2d/_result.png", object: "https://image.qwenlm.ai/generated-images/e8ebc9c8-7938-4a69-b3b7-f072c6e7bd2d/_result.png" }, documents: [], related: [] },
  { id: "FG-W-003", title: "Завертка оконная Т-образная", type: "transom-fixtures", category: "forged", subcategory: "locking-mechanisms", material: "forging", alloy: "Ст3", weight_g: 180, dimensions: "120×40×15 мм", coating: "Воронение + воск", mounting: "Шурупы 4×25", status: "approved", has_prototype: true, epoch: "XVIII–XIX вв.", source: "РГИА", gost: "ГОСТ Р 55567-2013", description: "Чистая ковка. Изготавливается методом горячей кузнечной протяжки.", images: { main: "https://image.qwenlm.ai/generated-images/7f8846b1-5ba2-4672-815e-b3d1bed7d84f/_result.png", macro: "https://image.qwenlm.ai/generated-images/7f8846b1-5ba2-4672-815e-b3d1bed7d84f/_result.png", archive: "https://image.qwenlm.ai/generated-images/7f8846b1-5ba2-4672-815e-b3d1bed7d84f/_result.png", object: "https://image.qwenlm.ai/generated-images/7f8846b1-5ba2-4672-815e-b3d1bed7d84f/_result.png" }, documents: [], related: [] },
  { id: "FG-W-004", title: "Жиковина угловая просечная", type: "hinges", category: "forged", subcategory: "support-elements", material: "forging", alloy: "Ст3", weight_g: 560, dimensions: "180×120×8 мм", coating: "Воронение", mounting: "Глухари 8×60", status: "approved", has_prototype: true, epoch: "XVII–XVIII вв.", source: "Натурные обмеры", gost: "ГОСТ Р 55567-2013", description: "Чистая ковка. Листовое железо расковывается в пласть, узоры формируются горячим разрубом.", images: { main: "https://image.qwenlm.ai/generated-images/52eceb96-82ca-474e-9a8c-c17a99ebe495/_result.png", macro: "https://image.qwenlm.ai/generated-images/52eceb96-82ca-474e-9a8c-c17a99ebe495/_result.png", archive: "https://image.qwenlm.ai/generated-images/52eceb96-82ca-474e-9a8c-c17a99ebe495/_result.png", object: "https://image.qwenlm.ai/generated-images/52eceb96-82ca-474e-9a8c-c17a99ebe495/_result.png" }, documents: [], related: [] },
  { id: "FG-W-005", title: "Крючок ветровой оконный", type: "hooks", category: "forged", subcategory: "fixation-protection", material: "forging", alloy: "Ст3", weight_g: 240, dimensions: "150×35×12 мм", coating: "Воронение + воск", mounting: "Шурупы 5×30", status: "approved", has_prototype: true, epoch: "XVIII–XIX вв.", source: "РГИА", gost: "ГОСТ Р 55567-2013", description: "Чистая ковка. Прут торшонируется, концы оттягиваются на конус и загибаются.", images: { main: "https://image.qwenlm.ai/generated-images/7ab5a4bc-2e46-4709-9139-9b783b29e01e/_result.png", macro: "https://image.qwenlm.ai/generated-images/7ab5a4bc-2e46-4709-9139-9b783b29e01e/_result.png", archive: "https://image.qwenlm.ai/generated-images/7ab5a4bc-2e46-4709-9139-9b783b29e01e/_result.png", object: "https://image.qwenlm.ai/generated-images/7ab5a4bc-2e46-4709-9139-9b783b29e01e/_result.png" }, documents: [], related: [] },
  
  // Кованые изделия - Дверная фурнитура
  { id: "FG-D-001", title: "Жиковина стреловидная с трилистником", type: "door-hinges", category: "forged", subcategory: "door-hinges", material: "forging", alloy: "Ст3", weight_g: 1200, dimensions: "350×120×10 мм", coating: "Воронение", mounting: "Глухари 10×80", status: "approved", has_prototype: true, epoch: "XVII–XVIII вв.", source: "Натурные обмеры", gost: "ГОСТ Р 55567-2013", description: "Чистая ковка. Массивный прут расковывается, узор создается горячим разрубом.", images: { main: "https://image.qwenlm.ai/generated-images/b2c050bc-925c-4a01-ab53-fc3282004c38/_result.png", macro: "https://image.qwenlm.ai/generated-images/b2c050bc-925c-4a01-ab53-fc3282004c38/_result.png", archive: "https://image.qwenlm.ai/generated-images/b2c050bc-925c-4a01-ab53-fc3282004c38/_result.png", object: "https://image.qwenlm.ai/generated-images/b2c050bc-925c-4a01-ab53-fc3282004c38/_result.png" }, documents: [], related: [] },
  { id: "FG-D-002", title: "Ручка-кольцо из гнутого прута", type: "door-knockers", category: "forged", subcategory: "door-handles", material: "forging", alloy: "Ст3", weight_g: 380, dimensions: "Ø120×25 мм", coating: "Воронение + воск", mounting: "Сквозная шпилька М8", status: "approved", has_prototype: true, epoch: "XVIII–XIX вв.", source: "РГИА", gost: "ГОСТ Р 55567-2013", description: "Чистая ковка. Прут гнется в кольцо по оправке, концы свариваются кузнечной сваркой.", images: { main: "https://image.qwenlm.ai/generated-images/b5bbb035-697b-4b03-803d-2698a9335c8a/_result.png", macro: "https://image.qwenlm.ai/generated-images/b5bbb035-697b-4b03-803d-2698a9335c8a/_result.png", archive: "https://image.qwenlm.ai/generated-images/b5bbb035-697b-4b03-803d-2698a9335c8a/_result.png", object: "https://image.qwenlm.ai/generated-images/b5bbb035-697b-4b03-803d-2698a9335c8a/_result.png" }, documents: [], related: [] },
  { id: "FG-D-003", title: "Ручка-скоба витая с торшонированием", type: "door-handles", category: "forged", subcategory: "door-handles", material: "forging", alloy: "Ст3", weight_g: 650, dimensions: "280×60×40 мм", coating: "Воронение + воск", mounting: "Шпилька М10 + втулка", status: "approved", has_prototype: true, epoch: "XVIII в.", source: "Эрмитаж", gost: "ГОСТ Р 55567-2013", description: "Чистая ковка. Квадратный прут нагревается и закручивается вдоль оси.", images: { main: "https://image.qwenlm.ai/generated-images/29558770-1ef0-4b12-b46e-f0de857db65b/_result.png", macro: "https://image.qwenlm.ai/generated-images/29558770-1ef0-4b12-b46e-f0de857db65b/_result.png", archive: "https://image.qwenlm.ai/generated-images/29558770-1ef0-4b12-b46e-f0de857db65b/_result.png", object: "https://image.qwenlm.ai/generated-images/29558770-1ef0-4b12-b46e-f0de857db65b/_result.png" }, documents: [], related: [] },
  { id: "FG-D-004", title: "Накладка замочная прорезная", type: "keyholes", category: "forged", subcategory: "locks-keys", material: "forging", alloy: "Ст3", weight_g: 95, dimensions: "130×50×3 мм", coating: "Воронение", mounting: "Штифты 3×12", status: "approved", has_prototype: true, epoch: "XVIII–XIX вв.", source: "РГИА", gost: "ГОСТ Р 55567-2013", description: "Холодная слесарная просечка и чеканка. Тонкий лист размечается, узор вырубается зубилами.", images: { main: "https://image.qwenlm.ai/generated-images/61354ecd-48f9-4938-813c-3f61c8be3191/_result.png", macro: "https://image.qwenlm.ai/generated-images/61354ecd-48f9-4938-813c-3f61c8be3191/_result.png", archive: "https://image.qwenlm.ai/generated-images/61354ecd-48f9-4938-813c-3f61c8be3191/_result.png", object: "https://image.qwenlm.ai/generated-images/61354ecd-48f9-4938-813c-3f61c8be3191/_result.png" }, documents: [], related: [] },
  { id: "FG-D-005", title: "Засов дверной полосовой", type: "door-bolts", category: "forged", subcategory: "door-bolts", material: "forging", alloy: "Ст3", weight_g: 1450, dimensions: "400×80×12 мм", coating: "Воронение + воск", mounting: "Глухари 10×80 (4 шт.)", status: "approved", has_prototype: true, epoch: "XVIII в.", source: "Натурные обмеры", gost: "ГОСТ Р 55567-2013", description: "Чистая ковка. Тяжелая силовая металлообработка на наковальне.", images: { main: "https://image.qwenlm.ai/generated-images/13e88317-782c-4094-b6a4-8f328378d1d0/_result.png", macro: "https://image.qwenlm.ai/generated-images/13e88317-782c-4094-b6a4-8f328378d1d0/_result.png", archive: "https://image.qwenlm.ai/generated-images/13e88317-782c-4094-b6a4-8f328378d1d0/_result.png", object: "https://image.qwenlm.ai/generated-images/13e88317-782c-4094-b6a4-8f328378d1d0/_result.png" }, documents: [], related: [] },
];

export const projects: Project[] = [
  { id: "PRJ-001", object: "Особняк Салтыковых", address: "СПб, наб. р. Мойки, 28", okn_status: "ОКН федерального значения", year: 2025, task: "Воссоздание 48 ручек и 24 шпингалетов", images: { cover: "https://image.qwenlm.ai/generated-images/32c5f315-47db-4dc6-b5f9-f3fd9dcae48f/_result.png", before: "https://image.qwenlm.ai/generated-images/f42370df-899c-4ac9-ac6b-c0cc25d4ee81/_result.png", process: "https://image.qwenlm.ai/generated-images/e2053948-8d35-4956-8a97-bf5772758405/_result.png", after: "https://image.qwenlm.ai/generated-images/7467c9f8-10f9-461e-b8c7-7e78775a99ac/_result.png" }, status: "approved", cgiop_letter: "№ 03-28/1147" },
  { id: "PRJ-002", object: "Дворец Разумовского", address: "СПб, Адмиралтейский пр., 6", okn_status: "ОКН федерального значения", year: 2024, task: "Изготовление 12 решёток и 36 петель", images: { cover: "https://image.qwenlm.ai/generated-images/b05f71f1-0141-4c98-b4ad-c1674beddc60/_result.png", before: "https://image.qwenlm.ai/generated-images/ad1e6faa-fe63-43eb-99ba-9b7c017f0307/_result.png", process: "https://image.qwenlm.ai/generated-images/2ead7818-5539-493c-8c8a-83c34e2df11e/_result.png", after: "https://image.qwenlm.ai/generated-images/5c511357-3e8e-409b-a91a-1214a3a99f6a/_result.png" }, status: "approved", cgiop_letter: "№ 03-14/0892" },
  { id: "PRJ-003", object: "Усадьба Богословка", address: "Ленинградская обл.", okn_status: "ОКН регионального значения", year: 2024, task: "Оснащение церкви: 64 изделия", images: { cover: "https://image.qwenlm.ai/generated-images/cbd86b19-ca63-4c1b-92cc-e7d3bc636e67/_result.png", before: "https://image.qwenlm.ai/generated-images/839b70ec-32e9-4fd6-ac87-d6e58ce01bc2/_result.png", process: "https://image.qwenlm.ai/generated-images/47563109-b9c8-47d8-8631-9573e82e815e/_result.png", after: "https://image.qwenlm.ai/generated-images/787cbeed-37b1-4b8b-8d0f-339b4e745550/_result.png" }, status: "approved", cgiop_letter: "№ 02-41/0567" },
  { id: "PRJ-004", object: "Аничков дворец", address: "СПб, Невский пр., 39", okn_status: "ОКН федерального значения", year: 2023, task: "Реставрация каминных решёток", images: { cover: "https://image.qwenlm.ai/generated-images/da07de48-93bc-4ee4-87be-51b78c32e1a7/_result.png", before: "https://image.qwenlm.ai/generated-images/7a99be2a-ebea-48c2-919d-be295d8010c7/_result.png", process: "https://image.qwenlm.ai/generated-images/7cea931f-451c-4da9-9779-cd09d6b1e076/_result.png", after: "https://image.qwenlm.ai/generated-images/7419af5f-82bd-4285-ba6c-727232a1934c/_result.png" }, status: "approved", cgiop_letter: "№ 03-07/0234" },
];

export function getProduct(id: string) { return products.find(p => p.id === id); }
export function getRelatedProducts(related: string[]) { return products.filter(p => related.includes(p.id)); }

export function filterProducts(filters: { type?: string; material?: string; status?: string; search?: string; category?: 'forged' | 'brass'; subcategory?: string; }) {
  return products.filter(p => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.material && p.material !== filters.material) return false;
    if (filters.status && p.status !== filters.status) return false;
    if (filters.category && p.category !== filters.category) return false;
    
    // Проверка подкатегории с учётом двухуровневой структуры для латунной фурнитуры
    if (filters.subcategory) {
      if (p.category === 'brass') {
        // Для латунной фурнитуры проверяем, принадлежит ли подкатегория товара к выбранной основной категории
        const mainCategory = Object.entries(brassCategories).find(([_, cat]) => 
          Object.keys((cat as any).subcategories).includes(filters.subcategory!)
        );
        
        if (!mainCategory) {
          // Если подкатегория не найдена в структуре, проверяем прямое совпадение
          if (p.subcategory !== filters.subcategory) return false;
        } else {
          // Проверяем, что подкатегория товара совпадает с фильтром
          if (p.subcategory !== filters.subcategory) return false;
        }
      } else {
        // Для кованых изделий - прямое сравнение
        if (p.subcategory !== filters.subcategory) return false;
      }
    }
    
    // Расширенный поиск по артикулу, названию, описанию, сплаву, эпохе
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const searchableFields = [
        p.id,
        p.title,
        p.description,
        p.alloy,
        p.epoch,
        p.coating,
        p.subcategory
      ];
      
      const hasMatch = searchableFields.some(field => 
        field && field.toLowerCase().includes(searchLower)
      );
      
      if (!hasMatch) return false;
    }
    
    return true;
  });
}

// Вспомогательная функция для получения всех подкатегорий латунной фурнитуры
export function getAllBrassSubcategories() {
  const allSubcategories: Array<{ key: string; name: string; mainCategory: string; mainCategoryName: string; icon: string }> = [];
  
  Object.entries(brassCategories).forEach(([mainKey, mainCat]) => {
    const mainCategoryName = (mainCat as any).name;
    const icon = (mainCat as any).icon;
    
    Object.entries((mainCat as any).subcategories).forEach(([subKey, subName]) => {
      allSubcategories.push({
        key: subKey,
        name: subName as string,
        mainCategory: mainKey,
        mainCategoryName,
        icon
      });
    });
  });
  
  return allSubcategories;
}

// Вспомогательная функция для получения всех подкатегорий кованых изделий
export function getAllForgedSubcategories() {
  const allSubcategories: Array<{ key: string; name: string; mainCategory: string; mainCategoryName: string; icon: string }> = [];
  
  Object.entries(forgedCategories).forEach(([mainKey, mainCat]) => {
    const mainCategoryName = (mainCat as any).name;
    const icon = (mainCat as any).icon;
    
    Object.entries((mainCat as any).subcategories).forEach(([subKey, subName]) => {
      allSubcategories.push({
        key: subKey,
        name: subName as string,
        mainCategory: mainKey,
        mainCategoryName,
        icon
      });
    });
  });
  
  return allSubcategories;
}
