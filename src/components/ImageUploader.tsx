import { useState, useRef } from 'react';
import { processImageUpload, canStoreImage } from '../utils/imageUpload';

interface ImageUploaderProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  recommendedSize?: string;
}

export default function ImageUploader({ value, onChange, label = 'Изображение', recommendedSize }: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);

    try {
      const result = await processImageUpload(file);
      
      if (!result.success) {
        setError(result.error || 'Ошибка загрузки');
        setIsUploading(false);
        return;
      }

      if (!result.dataUrl) {
        setError('Не удалось получить данные изображения');
        setIsUploading(false);
        return;
      }

      // Проверяем, хватит ли места в localStorage
      if (!canStoreImage(result.dataUrl.length)) {
        setError('Недостаточно места в хранилище. Удалите старые изображения или используйте URL.');
        setIsUploading(false);
        return;
      }

      onChange(result.dataUrl);
      setIsUploading(false);
      
      // Очищаем input для возможности повторной загрузки того же файла
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError('Произошла ошибка при загрузке');
      setIsUploading(false);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setError(null);
  };

  const handleClear = () => {
    onChange('');
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isDataUrl = value.startsWith('data:');

  return (
    <div className="space-y-3">
      <label className="label block mb-2">{label}</label>
      
      {/* URL Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={isDataUrl ? '[Загруженное изображение]' : value}
          onChange={handleUrlChange}
          disabled={isDataUrl}
          placeholder="https://example.com/image.jpg"
          className="flex-1 p-3 bg-transparent border focus:outline-none focus:border-[var(--c-gold)]"
          style={{ 
            backgroundColor: 'var(--c-charcoal)', 
            borderColor: 'var(--c-steel)', 
            color: 'var(--c-parchment)' 
          }}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium transition-colors"
            style={{ 
              backgroundColor: 'var(--c-error)', 
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Очистить
          </button>
        )}
      </div>

      {/* File Upload */}
      <div className="flex gap-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleFileSelect}
          className="hidden"
          id={`file-${label}`}
        />
        <label
          htmlFor={`file-${label}`}
          className="px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
          style={{ 
            backgroundColor: isUploading ? 'var(--c-smoke)' : 'var(--c-gold)',
            color: 'var(--c-coal)',
            border: 'none'
          }}
        >
          {isUploading ? 'Загрузка...' : '📁 Загрузить файл'}
        </label>
        
        {value && (
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2 text-sm font-medium transition-colors"
            style={{ 
              backgroundColor: 'var(--c-steel)', 
              color: 'var(--c-parchment)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {showPreview ? '👁 Скрыть' : '👁 Показать'}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 text-sm" style={{ 
          backgroundColor: 'rgba(166, 61, 47, 0.1)', 
          border: '1px solid var(--c-error)',
          color: 'var(--c-error)'
        }}>
          ⚠️ {error}
        </div>
      )}

      {/* Preview */}
      {showPreview && value && (
        <div className="p-4" style={{ 
          backgroundColor: 'var(--c-charcoal)', 
          border: '1px solid var(--c-rule-light)' 
        }}>
          <p className="text-xs mb-2" style={{ color: 'var(--c-ash)' }}>
            Превью {isDataUrl ? '(загружено)' : '(URL)'}:
          </p>
          <img
            src={value}
            alt="Preview"
            className="max-w-full max-h-64 object-contain"
            style={{ backgroundColor: 'var(--c-iron)' }}
          />
        </div>
      )}

      {/* Help Text */}
      <div className="text-xs space-y-1" style={{ color: 'var(--c-smoke)' }}>
        <p>💡 Можно загрузить файл (JPEG, PNG, WebP, GIF, макс. 2MB) или указать URL</p>
        {recommendedSize && (
          <p>📐 Рекомендуемый размер: {recommendedSize}</p>
        )}
      </div>
    </div>
  );
}
