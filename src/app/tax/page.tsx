import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";
import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Податки | АудитПартнер",
  description:
    "Податковий консалтинг, супровід перевірок, оптимізація оподаткування.",
};

const SERVICES = [
  { title: "Податковий консалтинг", href: "/taxes/consulting" },
  { title: "Супровід перевірок", href: "/taxes/inspections" },
];

export default function TaxPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Податкові послуги"
        breadcrumbs={[{ label: "Податки" }]}
      />
      <PageContent
        description="Податковий консалтинг та супровід перевірок. Оптимізація оподаткування, супровід перевірок, податкове планування та експертиза. Допомагаємо клієнтам знижувати ризики та відповідати вимогам ДПС."
        benefits={[
          "Оптимізація податкового навантаження",
          "Супровід перевірок ДПС",
          "Податкове планування та експертиза",
        ]}
      />
      <section className="border-t border-navy-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-navy-900">Послуги</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {SERVICES.map(({ title, href }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-xl border border-navy-200 bg-white p-6 shadow-sm transition-colors hover:border-accent/50 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent-dark">
                    <Calculator className="h-6 w-6" />
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
