import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "МСФЗ (МСФО) | АудитПартнер",
  description:
    "Звітність за міжнародними стандартами фінансової звітності (МСФЗ), трансформація, консолідація.",
};

const BENEFITS = [
  "Складання звітності за МСФЗ для банків, інвесторів та матеріальних компаній",
  "Трансформація національної звітності в МСФЗ",
  "Консолідація звітності групи компаній",
  "Консультування з питань визнання, оцінки та розкриття за МСФЗ",
  "Конфіденційність, дотримання термінів, страхування відповідальності. Працюємо з 2009 року.",
];

export default function IfrsPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="МСФЗ (Міжнародні стандарти фінансової звітності)"
        breadcrumbs={[
          { label: "Консалтинг", href: "/consulting" },
          { label: "МСФЗ" },
        ]}
      />
      <PageContent
        description="МСФЗ (МСФО) — міжнародні стандарти фінансової звітності, які вимагаються банками, інвесторами та матеріальними компаніями. Ми допомагаємо вести облік та формувати звітність за МСФЗ, проводити трансформацію та консолідацію. Конфіденційність, дотримання термінів, страхування відповідальності. Працюємо з 2009 року."
        benefits={BENEFITS}
      />
      <PageCTA />
    </InternalPageLayout>
  );
}
