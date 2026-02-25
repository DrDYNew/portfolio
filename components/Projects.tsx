"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";
import { projectsData } from "@/lib/projects";

export default function Projects() {
  const { theme, lang } = useApp();
  const t = translations[lang].projects;
  const dark = theme === "dark";

  return (
    <section
      id="projects"
      className={`py-24 transition-colors duration-300 ${dark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-4 ${
              dark
                ? "bg-indigo-900/40 text-indigo-300"
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            {t.badge}
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {t.title}{" "}
            <span className="text-indigo-400">{t.titleHighlight}</span>
          </h2>
          <p
            className={`max-w-xl mx-auto ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => {
            const item = t.items[i];
            if (!item) return null;
            const Icon = project.icon;
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`rounded-2xl overflow-hidden border hover:border-indigo-500 transition-all hover:-translate-y-1 group cursor-pointer block ${
                  dark
                    ? "bg-gray-950 border-gray-800"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Color accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="p-6">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600/30 transition-colors ${
                        dark ? "bg-indigo-900/40" : "bg-indigo-100"
                      }`}
                    >
                      <Icon
                        size={22}
                        className={
                          dark ? "text-indigo-400" : "text-indigo-600"
                        }
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold text-lg group-hover:text-indigo-400 transition-colors ${
                          dark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {item.role && (
                        <span
                          className={`text-xs font-medium ${
                            dark ? "text-indigo-400" : "text-indigo-600"
                          }`}
                        >
                          {item.role}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mb-4 leading-relaxed ${
                      dark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t2) => (
                      <span
                        key={t2}
                        className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
                          dark
                            ? "bg-indigo-900/40 text-indigo-300"
                            : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {t2}
                      </span>
                    ))}
                  </div>

                  {/* View Details hint */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                      dark
                        ? "text-gray-500 group-hover:text-indigo-400"
                        : "text-gray-400 group-hover:text-indigo-600"
                    }`}
                  >
                    {lang === "en" ? "View Details →" : "Xem chi tiết →"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
