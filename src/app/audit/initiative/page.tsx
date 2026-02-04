import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Ініціативний аудит | АудитПартнер",
  description:
    "Ініціативний аудит фінансової звітності для власників та менеджменту. Оцінка ризиків та рекомендації.",
};

const BENEFITS = [
  "Оцінка якості обліку та внутрішнього контролю",
  "Виявлення ризиків до перевірок ДПС",
  "Підготовка до обов'язкового аудиту або due diligence",
  "Рекомендації щодо оптимізації процесів",
  "Прозора звітність для власників та інвесторів",
];

export default function InitiativeAuditPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Ініціативний аудит"
        breadcrumbs={[
          { label: "Аудит", href: "/audit" },
          { label: "Ініціативний аудит" },
        ]}
      />
      <PageContent
        description="Ініціативний аудит проводиться за рішенням власників або керівництва компанії. Він дає незалежну оцінку достовірності звітності, виявляє слабкі місця в обліку та допомагає підготуватися до зовнішніх перевірок або угод. Обов'язковий та ініціативний аудит, податковий та фінансовий аудит згідно з міжнародними стандартами."
        benefits={BENEFITS}
      />
      <PageCTA />
    </InternalPageLayout>
  );
}
