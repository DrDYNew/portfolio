"use client";

import { FaCode } from "react-icons/fa";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { theme, lang } = useApp();
  const t = translations[lang].about;
  const dark = theme === "dark";

  const info = [
    { label: t.name, value: t.nameValue },
    { label: t.email, value: t.emailValue },
    { label: t.location, value: t.locationValue },
    { label: t.availableLabel, value: t.availableValue },
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${dark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
          {t.title} <span className="text-indigo-400">{t.titleHighlight}</span>
        </h2>
        <p className={`text-center mb-16 max-w-xl mx-auto ${dark ? "text-gray-500" : "text-gray-500"}`}>
          {t.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl">
              <FaCode size={80} className="text-white/80" />
            </div>
          </div>
          <div>
            <h3 className={`text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              {t.bioTitle}
            </h3>
            <p className={`mb-4 leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {t.bioP1}
            </p>
            <p className={`mb-8 leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {t.bioP2}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {info.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-indigo-400 text-sm font-semibold">{label}</p>
                  <p className={`text-sm ${dark ? "text-gray-300" : "text-gray-700"}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
