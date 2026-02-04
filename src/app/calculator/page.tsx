import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AuditCalculator } from "@/components/AuditCalculator";

export default function CalculatorPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-[60vh] bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Калькулятор вартості
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Оберіть послугу та параметри — отримайте орієнтовну вартість.
            </p>
          </div>
          <AuditCalculator />
        </div>
      </main>
      <Footer />
    </>
  );
}
