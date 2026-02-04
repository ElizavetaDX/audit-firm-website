import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Податковий аудит | АудитПартнер",
  description:
    "Податковий аудит: перевірка правильності обліку та сплати податків, виявлення ризиків та рекомендації.",
};

const BENEFITS = [
  "Перевірка правильності нарахування та сплати податків",
  "Виявлення податкових ризиків до перевірки ДПС",
  "Рекомендації щодо зниження ризиків та оптимізації",
  "Підготовка документів та пояснень на вимогу ДПС",
  "Дотримання міжнародних стандартів аудиту",
];

export default function TaxAuditPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Податковий аудит"
        breadcrumbs={[
          { label: "Аудит", href: "/audit" },
          { label: "Податковий аудит" },
        ]}
      />
      <PageContent
        description="Податковий аудит спрямований на перевірку правильності ведення податкового обліку, нарахування та сплати податків. Ми допомагаємо виявити ризики до візиту податкової та підготувати компанію до перевірок. Обов'язковий та ініціативний аудит, податковий та фінансовий аудит згідно з міжнародними стандартами."
        benefits={BENEFITS}
      />
      <PageCTA />
    </InternalPageLayout>
  );
}
