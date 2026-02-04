import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";
import Link from "next/link";
import { FileCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Аудит | АудитПартнер",
  description:
    "Обов'язковий та ініціативний аудит, податковий та фінансовий аудит згідно з міжнародними стандартами.",
};

const SERVICES = [
  { title: "Обов'язковий аудит", href: "/audit/mandatory" },
  { title: "Ініціативний аудит", href: "/audit/initiative" },
  { title: "Податковий аудит", href: "/audit/tax" },
];

export default function AuditPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Аудиторські послуги"
        breadcrumbs={[{ label: "Аудит" }]}
      />
      <PageContent
        description="Обов'язковий та ініціативний аудит, податковий та фінансовий аудит згідно з міжнародними стандартами. Допомагаємо компаніям підтвердити достовірність звітності та відповідність вимогам регуляторів."
        benefits={[
          "Робота за міжнародними стандартами аудиту",
          "Незалежна оцінка фінансової звітності",
          "Податковий та фінансовий аудит",
        ]}
      />
      <section className="border-t border-navy-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-navy-900">Послуги</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {SERVICES.map(({ title, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-xl border border-navy-200 bg-white p-6 shadow-sm transition-colors hover:border-accent/50 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent-dark">
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <span className="font-medium text-navy-900">{title}</span>
                </div>
                <ArrowRight className="h-5 w-5 text-navy-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <PageCTA />
    </InternalPageLayout>
  );
}
