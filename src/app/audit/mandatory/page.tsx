import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Обов'язковий аудит | АудитПартнер",
  description:
    "Обов'язковий та ініціативний аудит, податковий та фінансовий аудит згідно з міжнародними стандартами.",
};

const BENEFITS = [
  "Відповідність вимогам законодавства України",
  "Незалежна оцінка достовірності звітності",
  "Робота за міжнародними стандартами аудиту",
  "Чіткі терміни та прозора вартість",
  "Конфіденційність та захист інформації",
];

export default function MandatoryAuditPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Обов'язковий аудит"
        breadcrumbs={[
          { label: "Аудит", href: "/audit" },
          { label: "Обов'язковий аудит" },
        ]}
      />
      <PageContent
        description="Обов'язковий та ініціативний аудит, податковий та фінансовий аудит згідно з міжнародними стандартами. Допомагаємо компаніям підтвердити достовірність фінансової звітності та відповідність вимогам регуляторів."
        benefits={BENEFITS}
      />
      <PageCTA />
    </InternalPageLayout>
  );
}
