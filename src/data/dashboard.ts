export const mockOrders = [
  { id: 'order-001', number: 'ТГ-2026-0147', title: 'Ручки для особняка Салтыковых', objectName: 'Особняк Салтыковых', objectAddress: 'СПб, наб. р. Мойки, 28', oknStatus: true, createdAt: '2026-01-15', deadline: '2026-04-30', totalAmount: 1250000, paidAmount: 375000, status: 'in_progress',
    stages: [
      { id: 1, title: 'Согласование ТЗ', description: 'Утверждение аналогов', status: 'completed', completedAt: '2026-01-20' },
      { id: 2, title: 'Модельный участок', description: 'Изготовление моделей', status: 'completed', completedAt: '2026-02-05' },
      { id: 3, title: 'Металлургия', description: 'Плавка и литьё', status: 'in_progress' },
      { id: 4, title: 'Механическая обработка', description: 'Зачистка и сверление', status: 'pending' },
      { id: 5, title: 'Патинирование', description: 'Горячая патина', status: 'pending' },
      { id: 6, title: 'ОТК и отгрузка', description: 'Контроль качества', status: 'pending', blocked: true, blockedReason: 'Не загружен паспорт сплава' },
    ],
    documents: [
      { id: 'doc-1', type: 'passport', title: 'Паспорт сплава Л63', url: '#', uploadedAt: '2026-02-10', required: true },
      { id: 'doc-2', type: 'certificate', title: 'Сертификат ГОСТ', url: '#', uploadedAt: '2026-01-25', required: true },
      { id: 'doc-3', type: 'drawing', title: 'Чертёж TG-A-014', url: '#', uploadedAt: '2026-01-18', required: true },
    ],
    chatMessages: [
      { id: 'msg-1', author: 'Петров А.В.', authorRole: 'technologist', content: 'Загрузил фотоотчёт по модельному участку.', timestamp: '2026-02-05T14:30:00' },
      { id: 'msg-2', author: 'Иванов С.П.', authorRole: 'architect', content: 'Принято. Когда паспорт сплава?', timestamp: '2026-02-05T15:45:00' },
    ],
  },
  { id: 'order-002', number: 'ТГ-2026-0148', title: 'Решётки для Дворца Разумовского', objectName: 'Дворец Разумовского', objectAddress: 'СПб, Адмиралтейский пр., 6', oknStatus: true, createdAt: '2026-02-01', deadline: '2026-06-15', totalAmount: 2800000, paidAmount: 840000, status: 'in_progress',
    stages: [
      { id: 1, title: 'Согласование ТЗ', description: 'Утверждение аналогов', status: 'completed', completedAt: '2026-02-10' },
      { id: 2, title: 'Модельный участок', description: 'Изготовление макетов', status: 'in_progress' },
      { id: 3, title: 'Металлургия', description: 'Ковка элементов', status: 'pending' },
      { id: 4, title: 'Механическая обработка', description: 'Сборка', status: 'pending' },
      { id: 5, title: 'Патинирование', description: 'Воронение', status: 'pending' },
      { id: 6, title: 'ОТК и отгрузка', description: 'Контроль', status: 'pending' },
    ],
    documents: [
      { id: 'doc-4', type: 'passport', title: 'Паспорт сплава Ст3', url: '#', uploadedAt: '2026-02-12', required: true },
      { id: 'doc-5', type: 'drawing', title: 'Чертёж решётки', url: '#', uploadedAt: '2026-02-05', required: true },
    ],
    chatMessages: [],
  },
];

export const alloys = [
  { id: 'l63', name: 'Латунь Л63', gost: 'ГОСТ 17711-93', allowedForOKN: true, description: 'Основной сплав для литья.' },
  { id: 'ls59', name: 'Латунь ЛС59-1', gost: 'ГОСТ 17711-93', allowedForOKN: true, description: 'Свинцовая латунь.' },
  { id: 'st3', name: 'Сталь Ст3', gost: 'ГОСТ 380-2005', allowedForOKN: true, description: 'Для кованых элементов.' },
  { id: 'chn', name: 'Чугун ЧХН', gost: 'ГОСТ 3443-2015', allowedForOKN: true, description: 'Для чугунного литья.' },
  { id: 'cam', name: 'ЦАМ', gost: '-', allowedForOKN: false, description: 'ЗАПРЕЩЁН для ОКН.' },
];

export const patinas = [
  { id: 'hot-green', name: 'Горячая зелёная', type: 'hot', allowedForOKN: true, color: '#5A7A5E' },
  { id: 'hot-brown', name: 'Горячая коричневая', type: 'hot', allowedForOKN: true, color: '#6B5A3E' },
  { id: 'hot-black', name: 'Горячая чёрная', type: 'hot', allowedForOKN: true, color: '#2A2520' },
  { id: 'chem-blue', name: 'Химическая синяя', type: 'chemical', allowedForOKN: true, color: '#2E5C8A' },
  { id: 'imit-gold', name: 'Имитация золота', type: 'imitation', allowedForOKN: false, color: '#D4A017' },
];

export const formatCurrency = (amount: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(amount);
export const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
