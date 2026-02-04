import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Супровід перевірок | АудитПартнер",
  description:
    "Супровід податкових та інших перевірок: підготовка документів, участь у перевірках, оскарження рішень.",
};

const BENEFITS = [
  "Підготовка до перевірки ДПС: перевірка обліку та документів",
  "Супровід під час проведення перевірки на території клієнта",
  "Складання пояснень, відповідей на вимоги та скарг",
  "Оскарження рішень органів ДПС у суді та вищестоящих органах",
  "Захист інтересів клієнта на всіх етапах перевірки",
];

export default function TaxInspectionsPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Супровід перевірок"
        breadcrumbs={[
          { label: "Податки", href: "/tax" },
          { label: "Супровід перевірок" },
        ]}
      />
      <PageContent
        description="Супровід перевірок включає підготовку до візиту податкової, участь аудитора під час перевірки, підготовку пояснень та відповідей, а за потреби — оскарження рішень. Ми допомагаємо мінімізувати ризики та захистити інтереси компанії."
        benefits={BENEFITS}
      />
      <PageCTA />
    </InternalPageLayout>
  );
}
