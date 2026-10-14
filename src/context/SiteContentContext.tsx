import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

export interface SiteContent {
  hero: { subtitle: string; title: string; description: string; };
  stats: Array<{ num: string; label: string; sub: string; }>;
  contacts: { city: string; region: string; address: string; phone: string; email: string; schedule: string; };
  requisites: { name: string; inn: string; kpp: string; ogrn: string; };
  manifesto: { text: string; accent: string; };
  aboutBlocks: Array<{ title: string; heading: string; description: string; imageUrl: string; }>;
  steps: Array<{ step: string; title: string; desc: string; }>;
  thanks: Array<{ title: string; description: string; imageUrl: string; }>;
}

const defaultContent: SiteContent = {
  hero: {
    subtitle: 'Литейно-кузнечная мануфактура · Чебоксары · с 2014 года',
    title: 'Историческая фурнитура. по нормативам КГИОП',
    description: 'Научно обоснованное воссоздание утраченной фурнитуры для объектов культурного наследия.'
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
  },
  requisites: {
    name: 'ООО «Тигель и Горн»',
    inn: '2130123456',
    kpp: '213001001',
    ogrn: '1022100123456',
  },
  manifesto: {
    text: 'Мы воссоздаём утраченное, опираясь на архив, металлургию и ремесло.',
    accent: 'Не стилизуем — а восстанавливаем.',
  },
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
