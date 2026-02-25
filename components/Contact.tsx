"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";

const contacts: { value: string; icon: IconType; href: string }[] = [
  { value: "dungbd07@gmail.com", icon: FaEnvelope, href: "mailto:dungbd07@gmail.com" },
  { value: "github.com/duongtiendung", icon: FaGithub, href: "#" },
  { value: "linkedin.com/in/duongtiendung", icon: FaLinkedin, href: "#" },
];

const contactLabels = ["Email", "GitHub", "LinkedIn"];

export default function Contact() {
  const { theme, lang } = useApp();
  const t = translations[lang].contact;
  const dark = theme === "dark";

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${dark ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
          {t.title} <span className="text-indigo-400">{t.titleHighlight}</span>
        </h2>
        <p className={`text-center mb-16 max-w-xl mx-auto ${dark ? "text-gray-500" : "text-gray-500"}`}>
          {t.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className={`rounded-2xl p-6 border ${dark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}`}>
              <h3 className={`font-semibold text-lg mb-6 ${dark ? "text-white" : "text-gray-900"}`}>{t.contactInfo}</h3>
              <div className="space-y-4">
                {contacts.map(({ value, icon: Icon, href }, i) => (
                  <a
                    key={contactLabels[i]}
                    href={href}
                    className={`flex items-center gap-4 hover:text-indigo-400 transition-colors group ${dark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-900/50 transition-colors ${
                      dark ? "bg-gray-800" : "bg-gray-200"
                    }`}>
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className={`text-xs group-hover:text-indigo-300 ${dark ? "text-gray-500" : "text-gray-400"}`}>{contactLabels[i]}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form className={`rounded-2xl p-6 border flex flex-col gap-4 ${dark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"}`}>
            <h3 className={`font-semibold text-lg mb-2 ${dark ? "text-white" : "text-gray-900"}`}>{t.sendMessage}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={t.yourName}
                className={`border focus:border-indigo-500 outline-none rounded-xl px-4 py-2.5 text-sm transition-colors ${
                  dark
                    ? "bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
              />
              <input
                type="email"
                placeholder={t.yourEmail}
                className={`border focus:border-indigo-500 outline-none rounded-xl px-4 py-2.5 text-sm transition-colors ${
                  dark
                    ? "bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
              />
            </div>
            <input
              type="text"
              placeholder={t.subject}
              className={`border focus:border-indigo-500 outline-none rounded-xl px-4 py-2.5 text-sm transition-colors ${
                dark
                  ? "bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
              }`}
            />
            <textarea
              rows={5}
              placeholder={t.yourMessage}
              className={`border focus:border-indigo-500 outline-none rounded-xl px-4 py-2.5 text-sm transition-colors resize-none ${
                dark
                  ? "bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
              }`}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
