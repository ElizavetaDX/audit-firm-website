import { Check } from "lucide-react";

type PageContentProps = {
  description: string;
  benefits?: string[];
  children?: React.ReactNode;
};

export function PageContent({
  description,
  benefits = [],
  children,
}: PageContentProps) {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-navy prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-navy-700">{description}</p>
        </div>
        {benefits.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-navy-900 sm:text-2xl">
              Переваги
            </h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-navy-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/20 text-accent-dark">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
