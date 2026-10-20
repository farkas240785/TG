// Утилита для загрузки и обработки изображений

export const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
export const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export interface ImageUploadResult {
  success: boolean;
  dataUrl?: string;
  error?: string;
}

export function validateImage(file: File): ImageUploadResult {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return {
      success: false,
      error: 'Недопустимый тип файла. Разрешены: JPEG, PNG, WebP, GIF'
    };
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return {
      success: false,
      error: `Файл слишком большой. Максимум: ${MAX_IMAGE_SIZE / 1024 / 1024}MB`
    };
  }

  return { success: true };
}

export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Ошибка чтения файла'));
    reader.readAsDataURL(file);
  });
}

export async function processImageUpload(file: File): Promise<ImageUploadResult> {
  const validation = validateImage(file);
  if (!validation.success) {
    return validation;
  }

  try {
    const dataUrl = await readFileAsDataURL(file);
    return { success: true, dataUrl };
  } catch (error) {
    return {
      success: false,
      error: 'Не удалось загрузить изображение'
    };
  }
}

export function checkLocalStorageQuota(): { used: number; available: number } {
  let used = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      used += localStorage[key].length + key.length;
    }
  }
  // Примерный размер в байтах (UTF-16)
  used = used * 2;
  const available = 5 * 1024 * 1024 - used; // 5MB лимит
  return { used, available };
}

export function canStoreImage(imageSize: number): boolean {
  const { available } = checkLocalStorageQuota();
  return imageSize < available;
}
