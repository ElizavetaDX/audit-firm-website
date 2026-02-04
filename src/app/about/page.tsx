import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { PageContent } from "@/components/PageContent";
import { PageCTA } from "@/components/PageCTA";
import { ShieldCheck, Award, Users, FileCheck } from "lucide-react";

export const metadata = {
  title: "Про нас | АудитПартнер",
  description:
    "Аудиторська компанія АудитПартнер. Конфіденційність, дотримання термінів, страхування відповідальності. Працюємо з 2009 року.",
};

const BENEFITS = [
  "Конфіденційність інформації та захист даних клієнтів",
  "Дотримання термінів та чіткі зобов'язання за договорами",
  "Страхування професійної відповідальності аудиторів",
  "Працюємо на ринку з 2009 року",
  "Команда сертифікованих спеціалістів з досвідом у різних галузях",
];

const CARDS = [
  {
    icon: FileCheck,
    title: "Аудит та консалтинг",
    text: "Повний спектр аудиторських та консалтингових послуг для бізнесу.",
  },
  {
    icon: ShieldCheck,
    title: "Надійність",
    text: "Страхування відповідальності, дотримання стандартів та термінів.",
  },
  {
    icon: Users,
    title: "Команда",
    text: "Досвідчені аудитори та бухгалтери з профільним освітою.",
  },
  {
    icon: Award,
    title: "Рекомендації",
    text: "Позитивні відгуки клієнтів та довгострокова співпраця.",
  },
];

export default function AboutPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Про нас"
        breadcrumbs={[{ label: "Про нас" }]}
      />
      <PageContent
        description="АудитПартнер — незалежна аудиторська компанія, яка надає послуги з аудиту, податкового консалтингу та бухгалтерського обліку. Конфіденційність, дотримання термінів, страхування відповідальності. Працюємо з 2009 року."
        benefits={BENEFITS}
      />
      <section className="border-t border-navy-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Чому обирають нас
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-navy-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-navy-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageCTA />
    </InternalPageLayout>
  );
}
