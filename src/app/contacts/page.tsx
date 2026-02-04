import { InternalPageLayout } from "@/components/InternalPageLayout";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Контакти | АудитПартнер",
  description:
    "Контакти аудиторської компанії АудитПартнер. Адреса, телефон, email. Залиште заявку — ми зв'яжемося з вами.",
};

const CONTACTS = [
  {
    icon: MapPin,
    label: "Адреса",
    value: "м. Київ, вул. Хрещатик, 1, офіс 100",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+38 (044) 000-00-00",
  },
  {
    icon: Mail,
    label: "Email",
    value: "office@auditpartner.ua",
  },
];

export default function ContactsPage() {
  return (
    <InternalPageLayout>
      <PageHero
        title="Контакти"
        breadcrumbs={[{ label: "Контакти" }]}
      />
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl font-semibold text-navy-900 sm:text-2xl">
            Як з нами зв'язатися
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {CONTACTS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-xl border border-navy-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-dark">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy-500">{label}</p>
                  <p className="mt-1 text-navy-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </InternalPageLayout>
  );
}
