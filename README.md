# Сайт аудиторської компанії

Корпоративний лендинг: мінімалістичний бізнес-дизайн, Navy Blue та м'який блакитний акцент.

## Запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Стек

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (іконки)

## Структура

- `src/app/` — сторінки (layout, page, calculator)
- `src/components/` — Navigation, Hero, ServicesGrid, ClientCarousel, ContactForm, Footer

## Заміна логотипів клієнтів

У `src/components/ClientCarousel.tsx` замініть масив `LOGOS`: підставте реальні назви та за потреби компонент `LogoCard` — на `<Image>` з шляхом до зображення.
