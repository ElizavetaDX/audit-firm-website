import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-200 bg-navy-50/50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <Link
              href="/"
              className="text-lg font-semibold text-navy-900"
            >
              АудитПартнер
            </Link>
            <p className="mt-1 text-sm text-navy-600">
              Аудиторська компанія. Аудит, податки, консалтинг.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/audit" className="text-navy-600 hover:text-navy-900">
              Аудит
            </Link>
            <Link href="/tax" className="text-navy-600 hover:text-navy-900">
              Податки
            </Link>
            <Link href="/consulting" className="text-navy-600 hover:text-navy-900">
              Консалтинг
            </Link>
            <Link href="/about" className="text-navy-600 hover:text-navy-900">
              О нас
            </Link>
            <Link href="/contacts" className="text-navy-600 hover:text-navy-900">
              Контакты
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-navy-200 pt-8 text-center text-sm text-navy-500">
          © {currentYear} АудитПартнер. Усі права захищено.
        </div>
      </div>
    </footer>
  );
}
