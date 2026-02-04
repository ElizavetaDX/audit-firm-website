"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  TrendingUp,
  CheckSquare,
  FileText,
  ChevronRight,
} from "lucide-react";

const SERVICE_OPTIONS = [
  { id: "mandatory", label: "Обов'язковий аудит", basePrice: 10_000 },
  { id: "initiative", label: "Ініціативний аудит", basePrice: 10_000 },
  { id: "tax", label: "Податковий консалтинг", basePrice: 5_000 },
  { id: "accounting", label: "Бухгалтерський супровід", basePrice: 7_000 },
] as const;

const TURNOVER_MIN = 1_000_000;
const TURNOVER_MAX = 100_000_000;
const TURNOVER_STEP = 500_000;

function formatMoney(value: number): string {
  return new Intl.NumberFormat("uk-UA", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatTurnover(value: number): string {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)} млн грн`;
  }
  return `${formatMoney(value)} грн`;
}

export function AuditCalculator() {
  const [serviceId, setServiceId] = useState<(typeof SERVICE_OPTIONS)[number]["id"]>("mandatory");
  const [turnover, setTurnover] = useState(5_000_000);
  const [urgency, setUrgency] = useState(false);
  const [msfz, setMsfz] = useState(false);
  const [branches, setBranches] = useState(false);

  const result = useMemo(() => {
    const service = SERVICE_OPTIONS.find((s) => s.id === serviceId)!;
    let total = service.basePrice;

    const turnoverMultiplier =
      turnover > 50_000_000 ? 0.5 : turnover > 10_000_000 ? 0.2 : 0;
    total = total * (1 + turnoverMultiplier);

    if (msfz) total += 5_000;
    if (branches) total += 3_000;
    if (urgency) total *= 1.25;

    return Math.round(total);
  }, [serviceId, turnover, urgency, msfz, branches]);

  const scrollToRequest = () => {
    const el = document.getElementById("request");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#request";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1a202c] text-white">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Калькулятор вартості послуг
            </h2>
            <p className="text-sm text-slate-500">
              Орієнтовний розрахунок за ключовими параметрами
            </p>
          </div>
        </div>

        {/* Service selection */}
        <div className="flex flex-col gap-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <FileText className="h-4 w-4 text-sky-500" />
            Послуга
          </h3>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SERVICE_OPTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setServiceId(s.id)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                  serviceId === s.id
                    ? "border-sky-400 bg-sky-50 text-slate-900"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {s.label}
                {serviceId === s.id && (
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Turnover slider */}
        <div className="flex flex-col gap-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <TrendingUp className="h-4 w-4 text-sky-500" />
            Річний оборот компанії (грн)
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">1 млн</span>
              <motion.span
                key={turnover}
                initial={{ scale: 1.15, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="font-semibold text-slate-900"
              >
                {formatTurnover(turnover)}
              </motion.span>
              <span className="text-slate-500">100 млн</span>
            </div>
            <input
              type="range"
              min={TURNOVER_MIN}
              max={TURNOVER_MAX}
              step={TURNOVER_STEP}
              value={turnover}
              onChange={(e) => setTurnover(Number(e.target.value))}
              className="calculator-range w-full cursor-pointer"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <CheckSquare className="h-4 w-4 text-sky-500" />
            Додаткові опції
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              {
                id: "urgency",
                checked: urgency,
                set: setUrgency,
                label: "Терміновість (+25%)",
              },
              {
                id: "msfz",
                checked: msfz,
                set: setMsfz,
                label: "Перехід на МСФЗ",
                hint: "+5 000 грн",
              },
              {
                id: "branches",
                checked: branches,
                set: setBranches,
                label: "Наявність філій / підрозділів",
                hint: "+3 000 грн",
              },
            ].map(({ id, checked, set, label, hint }) => (
              <li key={id}>
                <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-colors hover:bg-slate-50">
                  <span className="text-sm font-medium text-slate-800">
                    {label}
                    {hint && (
                      <span className="ml-1.5 text-slate-500">({hint})</span>
                    )}
                  </span>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => set(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-[#1a202c] focus:ring-sky-500"
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Result */}
        <motion.div
          layout
          className="rounded-xl border border-slate-200 bg-slate-50/80 p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Орієнтовна вартість
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={result}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              {formatMoney(result)} грн
            </motion.p>
          </AnimatePresence>
          <p className="mt-3 text-xs text-slate-500">
            Точна вартість формується після ознайомлення з документацією.
          </p>
          <button
            type="button"
            onClick={scrollToRequest}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a202c] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-slate-800 sm:w-auto"
          >
            Отримати детальну пропозицію
            <ChevronRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
