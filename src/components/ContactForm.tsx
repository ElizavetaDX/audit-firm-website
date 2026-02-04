"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = (formData.get("message") as string) || "";

    setStatus("sending");
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Помилка надсилання");
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="request" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Залишити заявку
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            {"Опишіть задачу — ми зв'яжемося з вами найближчим часом."}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border border-navy-200 bg-navy-50/30 p-6 sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy-700"
              >
                {"Ім'я *"}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={status === "sending"}
                className="mt-2 block w-full rounded-lg border border-navy-300 bg-white px-4 py-2.5 text-navy-900 shadow-sm focus:border-accent-dark focus:outline-none focus:ring-1 focus:ring-accent-dark disabled:opacity-70"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-navy-700"
              >
                Телефон *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                disabled={status === "sending"}
                className="mt-2 block w-full rounded-lg border border-navy-300 bg-white px-4 py-2.5 text-navy-900 shadow-sm focus:border-accent-dark focus:outline-none focus:ring-1 focus:ring-accent-dark disabled:opacity-70"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-navy-700"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              disabled={status === "sending"}
              className="mt-2 block w-full rounded-lg border border-navy-300 bg-white px-4 py-2.5 text-navy-900 shadow-sm focus:border-accent-dark focus:outline-none focus:ring-1 focus:ring-accent-dark disabled:opacity-70"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-navy-700"
            >
              Повідомлення
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              disabled={status === "sending"}
              className="mt-2 block w-full rounded-lg border border-navy-300 bg-white px-4 py-2.5 text-navy-900 shadow-sm focus:border-accent-dark focus:outline-none focus:ring-1 focus:ring-accent-dark disabled:opacity-70"
              placeholder="Коротко опишіть задачу або цікаву послугу"
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center rounded-lg bg-navy px-6 py-3 text-base font-medium text-white transition-colors hover:bg-navy-800 disabled:opacity-70 sm:w-auto"
            >
              {status === "sending"
                ? "Надсилання…"
                : status === "sent"
                  ? "Надіслано"
                  : "Надіслати заявку"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-green-700">
                {"Дякуємо! Ваша заявка успішно надіслана. Ми зв'яжемося з вами найближчим часом."}
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700">
                Помилка надсилання. Спробуйте пізніше або зателефонуйте нам.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
