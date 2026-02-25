"use client";

import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";
import { IconType } from "react-icons";
import {
  SiNextdotjs, SiReact, SiFlutter, SiDotnet,
  SiFirebase, SiMysql, SiMongodb,
  SiWordpress, SiCanva, SiFigma,
  SiPython, SiDart, SiJavascript, SiTypescript,
  SiDocker, SiGit, SiLinux, SiPostman,
  SiSpringboot,
} from "react-icons/si";
import { TbCut } from "react-icons/tb";
import {
  HiOutlineViewGrid, HiOutlineDatabase, HiOutlineCog,
  HiOutlineCode, HiOutlineGlobeAlt,
} from "react-icons/hi";
import { FaWindows, FaBrain, FaGithub, FaDatabase, FaJava } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

export default function Skills() {
  const { theme, lang } = useApp();
  const t = translations[lang].skills;
  const dark = theme === "dark";

  const categories: {
    title: string;
    icon: IconType;
    skills: { name: string; hours: string; icon: IconType; color: string }[];
  }[] = [
    {
      title: t.fullstack,
      icon: HiOutlineViewGrid,
      skills: [
        { name: "NextJS", hours: "320h", icon: SiNextdotjs, color: dark ? "#ffffff" : "#000000" },
        { name: "ReactJS", hours: "480h", icon: SiReact, color: "#61DAFB" },
        { name: "Flutter Web", hours: "280h", icon: SiFlutter, color: "#54C5F8" },
        { name: "ASP.NET", hours: "240h", icon: SiDotnet, color: "#512BD4" },
        { name: "WPF", hours: "180h", icon: FaWindows, color: "#0078D6" },
        { name: "Java", hours: "350h", icon: FaJava, color: "#ED8B00" },
      ],
    },
    {
      title: t.backend,
      icon: HiOutlineDatabase,
      skills: [
        { name: "C#", hours: "400h", icon: SiDotnet, color: "#239120" },
        { name: "Spring Boot", hours: "200h", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Firebase", hours: "280h", icon: SiFirebase, color: "#FFCA28" },
        { name: "MySQL", hours: "240h", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", hours: "180h", icon: SiMongodb, color: "#47A248" },
        { name: "MSSQL", hours: "150h", icon: FaDatabase, color: "#CC2927" },
      ],
    },
    {
      title: t.design,
      icon: HiOutlineCog,
      skills: [
        { name: "Canva", hours: "60h", icon: SiCanva, color: "#00C4CC" },
        { name: "CapCut", hours: "220h", icon: TbCut, color: "#000000" },
        { name: "Figma", hours: "360h", icon: SiFigma, color: "#F24E1E" },
      ],
    },
    {
      title: t.languages,
      icon: HiOutlineCode,
      skills: [
        { name: "Python", hours: "520h", icon: SiPython, color: "#3776AB" },
        { name: "C#", hours: "400h", icon: SiDotnet, color: "#239120" },
        { name: "Java", hours: "350h", icon: FaJava, color: "#ED8B00" },
        { name: "JavaScript", hours: "360h", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", hours: "320h", icon: SiTypescript, color: "#3178C6" },
        { name: "Dart", hours: "280h", icon: SiDart, color: "#0175C2" },
      ],
    },
    {
      title: t.aiml,
      icon: FaBrain,
      skills: [
        { name: "GitHub Copilot", hours: "500h", icon: FaGithub, color: dark ? "#ffffff" : "#000000" },
        { name: "TensorFlow", hours: "300h", icon: SiPython, color: "#FF6F00" },
        { name: "Pandas", hours: "250h", icon: SiPython, color: "#150458" },
        { name: "NumPy", hours: "200h", icon: SiPython, color: "#4DABCF" },
      ],
    },
    {
      title: t.other,
      icon: HiOutlineGlobeAlt,
      skills: [
        { name: "Docker", hours: "140h", icon: SiDocker, color: "#2496ED" },
        { name: "Git", hours: "400h", icon: SiGit, color: "#F05032" },
        { name: "Linux", hours: "200h", icon: SiLinux, color: "#FCC624" },
        { name: "Postman", hours: "180h", icon: SiPostman, color: "#FF6C37" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`relative py-24 overflow-hidden transition-colors duration-300 ${
        dark ? "bg-gray-950" : "bg-[#f8fafc]"
      }`}
    >
      {/* Decorative circles */}
      <div
        className={`absolute top-12 right-[12%] w-3 h-3 rounded-full ${
          dark ? "bg-blue-500" : "bg-blue-400"
        }`}
      />
      <div
        className={`absolute top-20 left-10 w-14 h-14 rounded-full border ${
          dark ? "border-gray-700" : "border-gray-300"
        }`}
      />
      <div
        className={`absolute bottom-24 right-10 w-10 h-10 rounded-full border ${
          dark ? "border-gray-700" : "border-gray-300"
        }`}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className={`inline-block text-sm font-medium px-4 py-1.5 rounded-full border mb-4 ${
              dark
                ? "text-blue-400 border-blue-500/30"
                : "text-blue-600 border-blue-300"
            }`}
          >
            {t.badge}
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {t.title}
          </h2>
          <p
            className={`max-w-2xl mx-auto leading-relaxed ${
              dark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-2xl p-6 border transition-colors ${
                dark
                  ? "bg-[#0b1425] border-gray-800 hover:border-blue-500/30"
                  : "bg-white border-gray-200 hover:border-blue-300 shadow-sm"
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl ${
                    dark ? "bg-blue-500/10" : "bg-blue-50"
                  }`}
                >
                  <cat.icon className="text-blue-500" size={24} />
                </div>
                <h3
                  className={`text-lg font-bold ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon size={20} style={{ color: skill.color }} />
                      <span
                        className={`text-sm font-medium ${
                          dark ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                        dark
                          ? "bg-gray-800/80 text-teal-400"
                          : "bg-gray-100 text-teal-600"
                      }`}
                    >
                      <FiClock size={10} />
                      {skill.hours}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
