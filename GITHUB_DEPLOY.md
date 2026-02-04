# Завантаження проєкту на GitHub

Виконай ці команди **у своєму терміналі** (не в Cursor), перебуваючи в папці проєкту.

## 1. Залежності (якщо потрібно)

```bash
cd /Users/macbook/audit-firm-website
npm install framer-motion lucide-react --legacy-peer-deps
```

## 2. Ключі та .gitignore

- Файл **.env.local** уже є (TELEGRAM_CHAT_ID=394324901 і токен бота).
- У **.gitignore** прописано: `.env`, `.env.local`, `.env*.local` — ключі не потраплять у репозиторій.

## 3. Git: ініціалізація та коміт

```bash
git init
git add .
git commit -m "feat: telegram integration and audit calculator"
```

## 4. Підключення до GitHub та відправка

```bash
git branch -M main
git remote add origin https://github.com/ElizavetaDX/audit-firm-website.git
git push -u origin main
```

Якщо Cursor або Git попросить авторизацію — використай Personal Access Token замість пароля.
