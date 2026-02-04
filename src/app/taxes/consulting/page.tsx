import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";

export const metadata = {
  title: "Податковий консалтинг | АудитПартнер",
  description:
    "Податковий консалтинг: оптимізація оподаткування, планування, супровід угод та експертиза.",
};

const BENEFITS = [
  "Оптимізація податкового навантаження в рамках закону",
  "Податкове планування при реструктуризації та угодах",
  "Експертиза договорів та схем з податкової точки зору",
  "Консультування з питань ПДВ, податку на прибуток, ПФ",
  "Моніторинг змін законодавства та адаптація бізнес-процесів",
];

export default function TaxConsultingPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Податковий консалтинг"
        breadcrumbs={[
          { label: "Податки", href: "/tax" },
          { label: "Податковий консалтинг" },
        ]}
      />
      <PageContent
        description="Податковий консалтинг охоплює оптимізацію оподаткування, супровід перевірок, податкове планування та експертизу. Ми допомагаємо клієнтам приймати обґрунтовані рішення, знижувати ризики та відповідати вимогам ДПС та інших контролюючих органів."
        benefits={BENEFITS}
      />
      <PageCTA />
    </InternalPageLayout>
  );
}
