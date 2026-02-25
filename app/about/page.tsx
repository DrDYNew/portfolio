"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaDownload,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBrain,
  FaGithub,
  FaWindows,
  FaDatabase,
  FaHeart,
  FaJava,
} from "react-icons/fa";
import {
  HiOutlineStar,
  HiOutlineDesktopComputer,
  HiOutlineDatabase,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import {
  SiNextdotjs, SiReact, SiFlutter, SiDotnet,
  SiFirebase, SiMysql, SiMongodb,
  SiWordpress, SiCanva, SiFigma,
  SiPython,
  SiGooglegemini,
  SiOpenai,
  SiSpringboot,
} from "react-icons/si";
import { TbCut } from "react-icons/tb";
import { FiClock, FiChevronDown } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";
import { IconType } from "react-icons";

type Skill = {
  name: string;
  hours: string;
  icon: IconType;
  color: string;
  category: string;
};

export default function AboutPage() {
  const { theme, lang } = useApp();
  const t = translations[lang].about;
  const dark = theme === "dark";
  const [activeFilter, setActiveFilter] = useState("all");

  const allSkills: Skill[] = [
    { name: "NextJS", hours: "320h", icon: SiNextdotjs, color: dark ? "#fff" : "#000", category: "frontend" },
    { name: "ReactJS", hours: "480h", icon: SiReact, color: "#61DAFB", category: "frontend" },
    { name: "Flutter Web", hours: "280h", icon: SiFlutter, color: "#54C5F8", category: "frontend" },
    { name: "ASP.NET", hours: "240h", icon: SiDotnet, color: "#512BD4", category: "frontend" },
    { name: "Java", hours: "350h", icon: FaJava, color: "#ED8B00", category: "backend" },
    { name: "Spring Boot", hours: "200h", icon: SiSpringboot, color: "#6DB33F", category: "backend" },
    { name: "WPF", hours: "180h", icon: FaWindows, color: "#0078D6", category: "backend" },
    { name: "C#", hours: "400h", icon: SiDotnet, color: "#239120", category: "backend" },
    { name: "Firebase", hours: "280h", icon: SiFirebase, color: "#FFCA28", category: "backend" },
    { name: "MySQL", hours: "240h", icon: SiMysql, color: "#4479A1", category: "backend" },
    { name: "MongoDB", hours: "180h", icon: SiMongodb, color: "#47A248", category: "backend" },
    { name: "MSSQL", hours: "150h", icon: FaDatabase, color: "#CC2927", category: "backend" },
    { name: "Canva", hours: "60h", icon: SiCanva, color: "#00C4CC", category: "design" },
    { name: "CapCut", hours: "220h", icon: TbCut, color: "#000000", category: "design" },
    { name: "Figma", hours: "360h", icon: SiFigma, color: "#F24E1E", category: "design" },
    { name: "GitHub Copilot", hours: "500h", icon: FaGithub, color: dark ? "#fff" : "#000", category: "tools" },
    { name: "Google AI Studio", hours: "150h", icon: SiGooglegemini, color: "#4285F4", category: "tools" },
    { name: "OpenAI APIs", hours: "180h", icon: SiOpenai, color: dark ? "#fff" : "#000", category: "tools" },
  ];

  const filters = [
    { key: "all", label: lang === "en" ? "All Skills" : "Tất cả", icon: HiOutlineStar },
    { key: "frontend", label: "Frontend", icon: HiOutlineDesktopComputer },
    { key: "backend", label: "Backend", icon: HiOutlineDatabase },
    { key: "design", label: "Design", icon: HiOutlineColorSwatch },
    { key: "tools", label: "Tools & AI", icon: HiOutlineCog },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeFilter);

  const stats = [
    { icon: HiOutlineOfficeBuilding, value: "3+", label: lang === "en" ? "Years Experience" : "Năm kinh nghiệm" },
    { icon: HiOutlineCheckCircle, value: "20+", label: lang === "en" ? "Projects Completed" : "Dự án hoàn thành" },
    { icon: HiOutlineClock, value: "3500+", label: lang === "en" ? "Hours Coded" : "Giờ lập trình" },
    { icon: FaHeart, value: "15+", label: lang === "en" ? "Happy Clients" : "Khách hàng hài lòng" },
  ];

  const education = [
    {
      icon: FaGraduationCap,
      title: "FPT University",
      period: "2021 - " + (lang === "en" ? "Present" : "Hiện tại"),
      description:
        lang === "en" ? "Major: Software Engineering" : "Chuyên ngành: Kỹ thuật Phần mềm",
      items: [
        lang === "en" ? "Data Structures & Algorithms" : "Cấu trúc dữ liệu & Giải thuật",
        lang === "en" ? "Algorithm Design" : "Thiết kế giải thuật",
        lang === "en" ? "Software Architecture" : "Kiến trúc phần mềm",
        lang === "en" ? "Object-Oriented Programming" : "Lập trình hướng đối tượng",
      ],
    },
    {
      icon: FaChalkboardTeacher,
      title: lang === "en" ? "English at School" : "Tiếng Anh ở trường",
      period: "06/2024 - " + (lang === "en" ? "Present" : "Hiện tại"),
      description:
        lang === "en"
          ? "Studied English through school curriculum"
          : "Học tiếng Anh qua chương trình ở trường",
      items: [
        lang === "en" ? "Speaking Practice" : "Luyện nói",
        lang === "en" ? "Listening Comprehension" : "Nghe hiểu",
        lang === "en" ? "Writing Essays" : "Viết luận",
        lang === "en" ? "Reading Techniques" : "Kỹ thuật đọc",
      ],
    },
    {
      icon: FaLaptopCode,
      title: "F8 Fullstack Academy",
      period: "06/2023 - 12/2023",
      description:
        lang === "en"
          ? "Courses: C#, ASP.NET, WPF"
          : "Khóa học: C#, ASP.NET, WPF",
      items: [
        "C# Fundamentals",
        "ASP.NET Core MVC",
        "WPF Desktop Apps",
        "Entity Framework",
      ],
    },
    {
      icon: FaBrain,
      title:
        lang === "en"
          ? "Self-Taught Course: Machine Learning Fundamentals"
          : "Tự học: Nền tảng Machine Learning",
      period: "2023 - " + (lang === "en" ? "Present" : "Hiện tại"),
      description:
        lang === "en"
          ? "Studied core concepts of Machine Learning and applied models to predict outcomes for common problems."
          : "Nghiên cứu các khái niệm cốt lõi về Machine Learning và áp dụng mô hình để dự đoán kết quả cho các vấn đề phổ biến.",
      items: [
        "Neural Networks",
        lang === "en" ? "Data Analysis" : "Phân tích dữ liệu",
        lang === "en" ? "Model Training" : "Huấn luyện mô hình",
        lang === "en" ? "AI Integration" : "Tích hợp AI",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen transition-colors duration-300 ${
          dark ? "bg-[#030712]" : "bg-[#f8fafc]"
        }`}
      >
        {/* ===== HERO SECTION ===== */}
        <section className="pt-28 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full border mb-6 ${
                    dark
                      ? "text-blue-400 border-blue-500/30"
                      : "text-blue-600 border-blue-300"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {lang === "en" ? "Who I Am" : "Giới thiệu"}
                </div>

                <h1
                  className={`text-4xl sm:text-5xl font-bold mb-8 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t.title} {t.titleHighlight}
                  <span className="text-blue-500">.</span>
                </h1>

                <p
                  className={`text-base leading-relaxed mb-6 max-w-xl ${
                    dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {t.bioP1}
                </p>
                <p
                  className={`text-base leading-relaxed mb-8 max-w-xl ${
                    dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {t.bioP2}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/#contact"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    {lang === "en" ? "Contact Me" : "Liên hệ"}{" "}
                    <FaArrowRight size={14} />
                  </Link>
                  <a
                    href="#"
                    className={`flex items-center gap-2 border font-semibold px-6 py-3 rounded-xl transition-colors ${
                      dark
                        ? "border-gray-700 hover:border-blue-400 text-white"
                        : "border-gray-300 hover:border-blue-400 text-gray-900"
                    }`}
                  >
                    <FaDownload size={14} /> Resume
                  </a>
                </div>
              </div>

              {/* Right: Avatar Card */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className={`relative rounded-2xl overflow-hidden w-[380px] h-[420px] ${
                    dark
                      ? "bg-gradient-to-b from-blue-900/40 to-[#0b1425]"
                      : "bg-gradient-to-b from-blue-100 to-white"
                  }`}
                >
                  {/* Avatar image */}
                  <div
                    className={`w-full h-[320px] flex items-end justify-center ${
                      dark ? "bg-[#030712]" : "bg-[#f8fafc]"
                    }`}
                  >
                    <Image
                      src={dark ? "/avatar-dark.png" : "/avatar-light.png"}
                      alt="Dương Tiến Dũng"
                      width={300}
                      height={300}
                      className="object-contain"
                      priority
                    />
                  </div>

                  {/* Name bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between ${
                      dark
                        ? "bg-[#0b1425]/90 backdrop-blur-sm"
                        : "bg-white/90 backdrop-blur-sm"
                    }`}
                  >
                    <div>
                      <h3
                        className={`font-bold ${
                          dark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {t.nameValue}
                      </h3>
                      <p
                        className={`text-sm ${
                          dark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Fullstack Developer
                      </p>
                    </div>
                    <span
                      className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${
                        dark
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {lang === "en" ? "Available for Work" : "Sẵn sàng nhận việc"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll down indicator */}
            <div className="flex justify-center mt-12">
              <FiChevronDown
                size={24}
                className={`animate-bounce ${
                  dark ? "text-gray-600" : "text-gray-400"
                }`}
              />
            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section
          className={`py-16 border-y transition-colors duration-300 ${
            dark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`inline-flex p-3 rounded-xl mb-3 ${
                      dark ? "bg-blue-500/10" : "bg-blue-50"
                    }`}
                  >
                    <stat.icon className="text-blue-500" size={22} />
                  </div>
                  <p
                    className={`text-3xl sm:text-4xl font-bold mb-1 ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p className={`text-sm ${dark ? "text-gray-500" : "text-gray-500"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SKILLS SECTION ===== */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                    activeFilter === f.key
                      ? dark
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/40"
                        : "bg-blue-50 text-blue-600 border-blue-300"
                      : dark
                      ? "text-gray-400 border-gray-800 hover:border-gray-600"
                      : "text-gray-500 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <f.icon size={16} />
                  {f.label}
                </button>
              ))}
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center justify-between rounded-xl px-5 py-4 border transition-colors ${
                    dark
                      ? "bg-[#0b1425] border-gray-800 hover:border-blue-500/30"
                      : "bg-white border-gray-200 hover:border-blue-300 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <skill.icon size={22} style={{ color: skill.color }} />
                    <span
                      className={`text-sm font-medium ${
                        dark ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                  <span
                    className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
                      dark
                        ? "bg-gray-800/80 text-teal-400"
                        : "bg-gray-100 text-teal-600"
                    }`}
                  >
                    <FiClock size={10} />
                    {skill.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EDUCATION SECTION ===== */}
        <section
          className={`py-20 border-t transition-colors duration-300 ${
            dark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl font-bold text-center mb-4 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {lang === "en" ? "Education" : "Học vấn"}
            </h2>
            <p
              className={`text-center mb-14 max-w-2xl mx-auto ${
                dark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              {lang === "en"
                ? "My academic journey and continuous learning experiences that have shaped my skills."
                : "Hành trình học tập và những trải nghiệm liên tục đã hình thành kỹ năng của tôi."}
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div
                className={`absolute left-5 top-0 bottom-0 w-px ${
                  dark ? "bg-gray-800" : "bg-gray-200"
                }`}
              />

              <div className="space-y-10">
                {education.map((item, i) => (
                  <div key={i} className="relative pl-14">
                    {/* Icon circle */}
                    <div
                      className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        dark
                          ? "bg-[#0b1425] border-gray-700 text-blue-400"
                          : "bg-white border-gray-200 text-blue-500 shadow-sm"
                      }`}
                    >
                      <item.icon size={16} />
                    </div>

                    <div
                      className={`rounded-2xl p-6 border transition-colors ${
                        dark
                          ? "bg-[#0b1425] border-gray-800"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <h3
                        className={`text-lg font-bold mb-1 ${
                          dark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-sm mb-2 ${
                          dark ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {item.period}
                      </p>
                      <p
                        className={`text-sm mb-4 ${
                          dark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Items in 2 columns */}
                      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                        {item.items.map((it, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            <span
                              className={`text-sm ${
                                dark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              {it}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
