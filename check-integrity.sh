#!/bin/bash

# 🔍 CHECK INTEGRITY SCRIPT
# Проверяет целостность проекта Тигель & Горн

echo "🔍 Проверка целостности проекта..."
echo ""

# Цвета для вывода
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Функция проверки файла
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
    else
        echo -e "${RED}✗${NC} $1 - ОТСУТСТВУЕТ!"
        ERRORS=$((ERRORS + 1))
    fi
}

# Функция проверки директории
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
    else
        echo -e "${RED}✗${NC} $1/ - ДИРЕКТОРИЯ ОТСУТСТВУЕТ!"
        ERRORS=$((ERRORS + 1))
    fi
}

echo "📁 Проверка корневых файлов..."
check_file "index.html"
check_file "package.json"
check_file "tsconfig.json"
check_file "vite.config.js"
echo ""

echo "📚 Проверка документации..."
check_file "README.md"
check_file "ADMIN_GUIDE.md"
check_file "CATALOG_NAVIGATION.md"
check_file "BACKUP_MANIFEST.md"
echo ""

echo "📂 Проверка структуры src/..."
check_dir "src"
check_dir "src/components"
check_dir "src/context"
check_dir "src/data"
check_dir "src/pages"
check_dir "src/utils"
echo ""

echo "🔧 Проверка точки входа..."
check_file "src/main.tsx"
check_file "src/App.tsx"
check_file "src/index.css"
echo ""

echo "🎯 Проверка контекстов..."
check_file "src/context/AuthContext.tsx"
check_file "src/context/SiteContentContext.tsx"
echo ""

echo "💾 Проверка данных..."
check_file "src/data/catalog.ts"
check_file "src/data/dashboard.ts"
echo ""

echo "🧩 Проверка компонентов..."
check_file "src/components/Header.tsx"
check_file "src/components/Footer.tsx"
check_file "src/components/AIAssistant.tsx"
check_file "src/components/ProtectedRoute.tsx"
check_file "src/components/ImageUploader.tsx"
echo ""

echo "🛠️  Проверка утилит..."
check_file "src/utils/imageUpload.ts"
echo ""

echo "📄 Проверка страниц (18 файлов)..."
PAGES=(
    "Home" "Catalog" "Product" "Projects" "Docs" "Order"
    "About" "Contacts" "Folder" "Login" "Register" "Terms"
    "Dashboard" "OrderTracker" "Configurator" "ObjectFolder"
    "Finance" "CMS" "Admin"
)

for page in "${PAGES[@]}"; do
    check_file "src/pages/${page}.tsx"
done
echo ""

echo "📦 Проверка node_modules..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules/ существует"
else
    echo -e "${YELLOW}⚠${NC} node_modules/ отсутствует - выполните 'npm install'"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

echo "🔨 Проверка сборки..."
if [ -d "dist" ]; then
    echo -e "${GREEN}✓${NC} dist/ существует"
    if [ -f "dist/index.html" ]; then
        echo -e "${GREEN}✓${NC} dist/index.html существует"
    else
        echo -e "${RED}✗${NC} dist/index.html отсутствует - выполните 'npm run build'"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${YELLOW}⚠${NC} dist/ отсутствует - выполните 'npm run build'"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Итоговый отчёт
echo "═══════════════════════════════════════"
echo "📊 ИТОГОВЫЙ ОТЧЁТ"
echo "═══════════════════════════════════════"
echo -e "Ошибки: ${RED}${ERRORS}${NC}"
echo -e "Предупреждения: ${YELLOW}${WARNINGS}${NC}"
echo ""

if [ $ERRORS -eq 0 ]; then
    echo -e "${GREEN}✅ Проект цел!${NC}"
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠️  Есть предупреждения - рекомендуется выполнить 'npm install' и 'npm run build'${NC}"
    fi
    exit 0
else
    echo -e "${RED}❌ Обнаружены ошибки!${NC}"
    echo ""
    echo "🔧 Для восстановления выполните:"
    echo "   1. Проверьте BACKUP_MANIFEST.md"
    echo "   2. Следуйте инструкциям в RESTORATION_GUIDE.md"
    echo "   3. Запустите: ./restore.sh"
    exit 1
fi
