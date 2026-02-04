import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(125,211,252,0.15),transparent)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Аудит та консалтинг
          <br />
          <span className="text-accent">для вашого бізнесу</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-navy-300">
          Незалежна аудиторська компанія. Допомагаємо відповідати вимогам
          законодавства та знижувати ризики.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/calculator"
            className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-medium text-navy-900 transition-colors hover:bg-accent-light sm:w-auto"
          >
            Розрахувати вартість
          </Link>
          <Link
            href="#request"
            className="inline-flex w-full items-center justify-center rounded-lg border border-navy-400 bg-transparent px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy-800 sm:w-auto"
          >
            {"Зв'язатися з нами"}
          </Link>
        </div>
      </div>
    </section>
  );
}
