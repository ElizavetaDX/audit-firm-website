import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-600">
        <li>
          <Link
            href="/"
            className="transition-colors hover:text-navy-900"
          >
            Головна
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="h-4 w-4 shrink-0 text-navy-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-navy-900"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
