#!/bin/bash

# 💾 BACKUP SCRIPT
# Создание резервной копии проекта Тигель & Горн

echo "💾 Создание резервной копии проекта..."
echo ""

# Дата бэкапа
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_NAME="backup_$DATE"
BACKUP_DIR="backups/$BACKUP_NAME"

# Цвета для вывода
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Создать директорию для бэкапов
if [ ! -d "backups" ]; then
    mkdir -p backups
    echo -e "${GREEN}✓${NC} Создана директория: backups/"
fi

# Создать директорию для текущего бэкапа
mkdir -p "$BACKUP_DIR"
echo -e "${GREEN}✓${NC} Создана директория: $BACKUP_DIR/"
echo ""

# Функция копирования файлов
copy_files() {
    local src=$1
    local dest=$2
    
    if [ -e "$src" ]; then
        cp -r "$src" "$dest"
        echo -e "${GREEN}✓${NC} Скопировано: $src"
    else
        echo -e "${YELLOW}⚠${NC} Пропущено (не найдено): $src"
    fi
}

echo "📁 Копирование исходного кода..."
copy_files "src" "$BACKUP_DIR/"
echo ""

echo "📄 Копирование корневых файлов..."
copy_files "index.html" "$BACKUP_DIR/"
copy_files "package.json" "$BACKUP_DIR/"
copy_files "package-lock.json" "$BACKUP_DIR/"
copy_files "tsconfig.json" "$BACKUP_DIR/"
copy_files "tsconfig.node.json" "$BACKUP_DIR/"
copy_files "vite.config.js" "$BACKUP_DIR/"
copy_files "postcss.config.js" "$BACKUP_DIR/"
copy_files "tailwind.config.js" "$BACKUP_DIR/"
echo ""

echo "📚 Копирование документации..."
copy_files "README.md" "$BACKUP_DIR/"
copy_files "ADMIN_GUIDE.md" "$BACKUP_DIR/"
copy_files "CATALOG_NAVIGATION.md" "$BACKUP_DIR/"
copy_files "BACKUP_MANIFEST.md" "$BACKUP_DIR/"
copy_files "RESTORATION_GUIDE.md" "$BACKUP_DIR/"
echo ""

echo "📦 Копирование конфигурации..."
if [ -d "dist" ]; then
    copy_files "dist" "$BACKUP_DIR/"
else
    echo -e "${YELLOW}⚠${NC} Директория dist/ не найдена (выполните 'npm run build')"
fi
echo ""

# Создать метаданные бэкапа
echo "📝 Создание метаданных..."
cat > "$BACKUP_DIR/BACKUP_INFO.txt" << EOF
=== ИНФОРМАЦИЯ О РЕЗЕРВНОЙ КОПИИ ===

Дата создания: $(date)
Имя бэкапа: $BACKUP_NAME
Версия проекта: 2.1

=== СТРУКТУРА ФАЙЛОВ ===

$(find "$BACKUP_DIR" -type f | wc -l) файлов
$(find "$BACKUP_DIR" -type d | wc -l) директорий

=== РАЗМЕР ===

$(du -sh "$BACKUP_DIR" | cut -f1)

=== СОДЕРЖИМОЕ ===

$(ls -la "$BACKUP_DIR")

=== КОНТРОЛЬНЫЕ СУММЫ ===

$(find "$BACKUP_DIR/src" -type f -name "*.tsx" -exec md5sum {} \; 2>/dev/null | head -20)

=== ПРИМЕЧАНИЯ ===

- Исходный код: src/
- Документация: *.md
- Конфигурация: package.json, tsconfig.json, vite.config.js
- Зависимости: package-lock.json (не включён, восстанавливается через npm install)

=== ВОССТАНОВЛЕНИЕ ===

Для восстановления из этой копии:
1. Распакуйте архив: tar -xzf $BACKUP_NAME.tar.gz
2. Скопируйте файлы: cp -r $BACKUP_NAME/* .
3. Установите зависимости: npm install
4. Соберите проект: npm run build
5. Запустите: npm run dev

EOF

echo -e "${GREEN}✓${NC} Создан файл: $BACKUP_DIR/BACKUP_INFO.txt"
echo ""

# Создать архив
echo "🗜️  Создание архива..."
tar -czf "${BACKUP_NAME}.tar.gz" "$BACKUP_DIR"
echo -e "${GREEN}✓${NC} Создан архив: ${BACKUP_NAME}.tar.gz"
echo ""

# Показать размер архива
ARCHIVE_SIZE=$(du -h "${BACKUP_NAME}.tar.gz" | cut -f1)
echo "📊 Размер архива: $ARCHIVE_SIZE"
echo ""

# Удалить временную директорию (опционально)
read -p "Удалить временную директорию $BACKUP_DIR/? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    rm -rf "$BACKUP_DIR"
    echo -e "${GREEN}✓${NC} Временная директория удалена"
else
    echo -e "${YELLOW}⚠${NC} Временная директория сохранена: $BACKUP_DIR"
fi
echo ""

echo "═══════════════════════════════════════"
echo -e "${GREEN}✅ Резервная копия создана успешно!${NC}"
echo "═══════════════════════════════════════"
echo ""
echo "📦 Архив: ${BACKUP_NAME}.tar.gz"
echo "📁 Размер: $ARCHIVE_SIZE"
echo "📅 Дата: $(date)"
echo ""
echo "💡 Рекомендации:"
echo "   - Скопируйте архив в облачное хранилище"
echo "   - Сохраните на внешний диск"
echo "   - Загрузите в Git (отдельная ветка или тег)"
echo ""
echo "🔄 Для восстановления:"
echo "   tar -xzf ${BACKUP_NAME}.tar.gz"
echo "   cp -r ${BACKUP_NAME}/* ."
echo "   npm install"
echo "   npm run build"
echo ""
