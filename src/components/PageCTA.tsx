import Link from "next/link";

type PageCTAProps = {
  title?: string;
  description?: string;
};

export function PageCTA({
  title = "Готові обговорити ваш проект?",
  description = "Залиште заявку — ми зв'яжемося з вами найближчим часом та підготуємо індивідуальну пропозицію.",
}: PageCTAProps) {
  return (
    <section className="bg-navy-50/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-lg text-navy-600">{description}</p>
        <Link
          href="/#request"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1a202c] px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-navy-900"
        >
          Залишити заявку
        </Link>
      </div>
    </section>
  );
}
