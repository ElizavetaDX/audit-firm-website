import {
  FileCheck,
  Calculator,
  Briefcase,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const services: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Аудиторські послуги",
    description:
      "Обов'язковий та ініціативний аудит, податковий та фінансовий аудит згідно з міжнародними стандартами.",
    href: "/audit",
    icon: FileCheck,
  },
  {
    title: "Податковий консалтинг",
    description:
      "Оптимізація оподаткування, супровід перевірок, податкове планування та експертиза.",
    href: "/tax",
    icon: Calculator,
  },
  {
    title: "Бухоблік та консалтинг",
    description:
      "Ведення бухобліку, відновлення обліку, звітність за МСФЗ, due diligence.",
    href: "/consulting",
    icon: Briefcase,
  },
  {
    title: "Надійність та гарантії",
    description:
      "Конфіденційність, дотримання термінів, страхування відповідальності. Працюємо з 2009 року.",
    href: "/about",
    icon: ShieldCheck,
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Наші послуги
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-navy-600">
            Повний спектр аудиторських, податкових та консалтингових послуг для
            бізнесу будь-якого масштабу.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-xl border border-navy-200 bg-white p-6 shadow-sm transition-all hover:border-accent/50 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy/5 text-navy group-hover:bg-accent/20">
                  <Icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-navy-600 line-clamp-3">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent-dark group-hover:underline">
                  Детальніше →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
