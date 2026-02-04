import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

type PageHeroProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="border-b border-navy-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
