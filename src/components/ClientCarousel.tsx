"use client";

const LOGOS = [
  { name: "Клієнт 1", placeholder: "Компанія А" },
  { name: "Клієнт 2", placeholder: "Компанія Б" },
  { name: "Клієнт 3", placeholder: "Компанія В" },
  { name: "Клієнт 4", placeholder: "Компанія Г" },
  { name: "Клієнт 5", placeholder: "Компанія Д" },
  { name: "Клієнт 6", placeholder: "Компанія Е" },
  { name: "Клієнт 7", placeholder: "Компанія Є" },
  { name: "Клієнт 8", placeholder: "Компанія Ж" },
];

function LogoCard({ name, placeholder }: { name: string; placeholder: string }) {
  return (
    <div
      className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg border border-navy-200 bg-white px-6 shadow-sm"
      title={name}
    >
      <span className="text-center text-sm font-medium text-navy-500">
        {placeholder}
      </span>
    </div>
  );
}

export function ClientCarousel() {
  const duplicated = [...LOGOS, ...LOGOS];

  return (
    <section className="border-y border-navy-200 bg-navy-50/50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
          Нам довіряють
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-navy-600">
          Співпрацюємо з компаніями різних галузей та масштабів.
        </p>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div className="flex animate-scroll gap-6">
          {duplicated.map((logo, index) => (
            <LogoCard
              key={`${logo.name}-${index}`}
              name={logo.name}
              placeholder={logo.placeholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
