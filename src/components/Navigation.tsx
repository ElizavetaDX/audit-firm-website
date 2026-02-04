"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  {
    label: "Аудит",
    href: "/audit",
    items: [
      { label: "Обов'язковий аудит", href: "/audit/mandatory" },
      { label: "Ініціативний аудит", href: "/audit/initiative" },
      { label: "Податковий аудит", href: "/audit/tax" },
    ],
  },
  {
    label: "Податки",
    href: "/tax",
    items: [
      { label: "Податковий консалтинг", href: "/taxes/consulting" },
      { label: "Супровід перевірок", href: "/taxes/inspections" },
    ],
  },
  {
    label: "Консалтинг",
    href: "/consulting",
    items: [
      { label: "Бухоблік та звітність", href: "/consulting/accounting" },
      { label: "МСФЗ", href: "/consulting/ifrs" },
    ],
  },
];

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-200/80 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-navy-900"
        >
          АудитПартнер
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-100 hover:text-navy-900"
          >
            Головна
          </Link>
          {services.map((service) => (
            <div
              key={service.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(service.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-0.5 rounded-md px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-100 hover:text-navy-900"
                aria-expanded={openDropdown === service.label}
                aria-haspopup="true"
              >
                {service.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openDropdown === service.label ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === service.label && (
                <div className="absolute left-0 top-full pt-1">
                  <div className="min-w-[200px] rounded-lg border border-navy-200 bg-white py-1 shadow-lg">
                    {service.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-navy-700 hover:bg-accent/10 hover:text-navy-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-100 hover:text-navy-900"
          >
            Про нас
          </Link>
          <Link
            href="/contacts"
            className="rounded-md px-3 py-2 text-sm font-medium text-navy-700 hover:bg-navy-100 hover:text-navy-900"
          >
            Контакти
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            href="#request"
            className="inline-flex items-center justify-center rounded-lg bg-navy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800"
          >
            Залишити заявку
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-md p-2 text-navy-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрити меню" : "Відкрити меню"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-navy-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-navy-700"
              onClick={() => setMobileOpen(false)}
            >
              Головна
            </Link>
            {services.map((service) => (
              <div key={service.label} className="flex flex-col gap-0.5">
                <Link
                  href={service.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-navy-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.label}
                </Link>
                <div className="ml-3 flex flex-col border-l border-navy-200 pl-3">
                  {service.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="py-1.5 text-sm text-navy-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-navy-700"
              onClick={() => setMobileOpen(false)}
            >
              Про нас
            </Link>
            <Link
              href="/contacts"
              className="rounded-md px-3 py-2 text-sm font-medium text-navy-700"
              onClick={() => setMobileOpen(false)}
            >
              Контакти
            </Link>
            <Link
              href="#request"
              className="mt-2 inline-flex justify-center rounded-lg bg-navy px-4 py-2.5 text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Залишити заявку
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
