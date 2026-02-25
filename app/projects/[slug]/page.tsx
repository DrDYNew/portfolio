"use client";

import { use } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";
import { projectsData, getProjectBySlug } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiGithub, FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { theme, lang } = useApp();
  const dark = theme === "dark";
  const t = translations[lang].projects;

  const project = getProjectBySlug(slug);
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const item = t.items[projectIndex];

  if (!project || !item) {
    return (
      <div
        className={`min-h-screen flex flex-col ${
          dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
        }`}
      >
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className={`mb-8 ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {lang === "en"
                ? "Project not found"
                : "Không tìm thấy dự án"}
            </p>

          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = project.icon;
  const features = project.features[lang];

  // Find prev/next projects
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : null;
  const prevItem = prevProject ? t.items[projectIndex - 1] : null;
  const nextItem = nextProject ? t.items[projectIndex + 1] : null;

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-12">
            {/* Icon + Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  dark ? "bg-indigo-900/40" : "bg-indigo-100"
                }`}
              >
                <Icon
                  size={30}
                  className={dark ? "text-indigo-400" : "text-indigo-600"}
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  {item.title}
                </h1>
                {item.role && (
                  <span
                    className={`text-sm font-medium ${
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
              className={`text-lg leading-relaxed max-w-2xl ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2
              className={`text-xl font-semibold mb-4 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {lang === "en" ? "Tech Stack" : "Công nghệ sử dụng"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t2) => (
                <span
                  key={t2}
                  className={`text-sm font-medium px-4 py-2 rounded-xl ${
                    dark
                      ? "bg-indigo-900/40 text-indigo-300"
                      : "bg-indigo-100 text-indigo-700"
                  }`}
                >
                  {t2}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2
              className={`text-xl font-semibold mb-4 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {lang === "en" ? "Key Features" : "Tính năng chính"}
            </h2>
            <div
              className={`rounded-2xl border p-6 ${
                dark
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheckCircle
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        dark ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        dark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub Link */}
          {project.github !== "#" && (
            <div className="mb-16">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <FiGithub size={20} />
                {lang === "en"
                  ? "View Source Code on GitHub"
                  : "Xem mã nguồn trên GitHub"}
              </a>
            </div>
          )}

          {/* Navigation between projects */}
          <div
            className={`border-t pt-10 ${
              dark ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center">
              {prevProject && prevItem ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className={`group flex items-center gap-3 transition-colors ${
                    dark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <FiArrowLeft
                    size={18}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-wide opacity-60">
                      {lang === "en" ? "Previous" : "Trước"}
                    </div>
                    <div className="font-medium">{prevItem.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProject && nextItem ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className={`group flex items-center gap-3 transition-colors ${
                    dark
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wide opacity-60">
                      {lang === "en" ? "Next" : "Tiếp"}
                    </div>
                    <div className="font-medium">{nextItem.title}</div>
                  </div>
                  <FiArrowLeft
                    size={18}
                    className="rotate-180 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
