import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Бухоблік та звітність | АудитПартнер",
  description:
    "Ведення бухобліку, відновлення обліку, звітність за МСФЗ, due diligence. Повний спектр послуг з обліку.",
};

const BENEFITS = [
  "Ведення бухгалтерського та податкового обліку під ключ",
  "Відновлення обліку та приведення документів до ладу",
  "Підготовка фінансової та податкової звітності",
  "Кадровий облік, зарплата, звітність до ФОП та ПФ",
  "Конфіденційність, дотримання термінів, страхування відповідальності. Працюємо з 2009 року.",
];

export default function AccountingPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Бухоблік та звітність"
        breadcrumbs={[
          { label: "Консалтинг", href: "/consulting" },
          { label: "Бухоблік та звітність" },
        ]}
      />
      <PageContent
        description="Ведення бухобліку, відновлення обліку, звітність за МСФЗ, due diligence. Ми надаємо повний спектр послуг з бухгалтерського та податкового обліку для компаній різних галузей та масштабів. Конфіденційність, дотримання термінів, страхування відповідальності. Працюємо з 2009 року."
        benefits={BENEFITS}
      />
      <PageCTA />
    </InternalPageLayout>
  );
}
