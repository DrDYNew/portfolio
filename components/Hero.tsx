"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";

const techStack = ["NextJS", "React", "Flutter", "ASP.NET", "Firebase"];

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaMessage, href: "#", label: "Message" },
  { icon: FaEnvelope, href: "mailto:dungbd07@gmail.com", label: "Email" },
];

export default function Hero() {
  const { theme, lang } = useApp();
  const t = translations[lang].hero;
  const dark = theme === "dark";

  return (
    <section className={`min-h-screen flex items-center pt-16 overflow-hidden transition-colors duration-300 ${dark ? "bg-[#030712]" : "bg-[#f8fafc]"}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Available badge */}
            <div className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 ${dark ? "border-gray-700" : "border-gray-300"}`}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className={`text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>{t.available}</span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 ${dark ? "text-white" : "text-gray-900"}`}>
              {t.greeting}
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-2">
              <span className="text-blue-400 underline decoration-blue-500 underline-offset-4">
                Dương Tiến Dũng
              </span>
            </h1>
            <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              {t.role}
            </h2>
            <p className={`mb-6 max-w-lg leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {t.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className={`border text-xs font-medium px-3 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-400 transition-colors cursor-default ${
                    dark ? "border-gray-600 text-gray-300" : "border-gray-300 text-gray-600"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                {t.viewProjects} <FaArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className={`border font-semibold px-6 py-3 rounded-xl transition-colors ${
                  dark
                    ? "border-gray-600 hover:border-blue-400 text-white"
                    : "border-gray-300 hover:border-blue-400 text-gray-900"
                }`}
              >
                {t.contactMe}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`hover:text-blue-400 transition-colors ${dark ? "text-gray-500" : "text-gray-400"}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center w-[480px] h-[480px]">
              {/* Outer glow ring */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border ${
                dark ? "border-blue-500/20 shadow-[0_0_60px_10px_rgba(30,58,138,0.15)]" : "border-blue-300/30 shadow-[0_0_60px_10px_rgba(59,130,246,0.08)]"
              }`} />

              {/* Inner subtle ring */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border ${
                dark ? "border-blue-500/10" : "border-blue-300/20"
              }`} />

              {/* Avatar circle - bg matches the themed avatar image */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full overflow-hidden ${dark ? "bg-[#030712]" : "bg-[#f8fafc]"}`}>
                <Image
                  src={dark ? "/avatar-dark.png" : "/avatar-light.png"}
                  alt="Dương Tiến Dũng"
                  width={360}
                  height={360}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Floating badge: Full Stack Developer (right) */}
              <div className={`absolute top-[20%] -right-4 backdrop-blur-sm border rounded-xl px-4 py-2 shadow-lg ${
                dark ? "bg-[#030712]/90 border-blue-900/50" : "bg-white/90 border-gray-200"
              }`}>
                <p className={`text-sm font-bold ${dark ? "text-white" : "text-gray-900"}`}>{t.fullStack}</p>
                <p className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>{t.developer}</p>
              </div>

              {/* Floating badge: UX/UI Designer (left) */}
              <div className={`absolute bottom-[28%] -left-4 backdrop-blur-sm border rounded-xl px-4 py-2 shadow-lg ${
                dark ? "bg-[#030712]/90 border-blue-900/50" : "bg-white/90 border-gray-200"
              }`}>
                <p className={`text-sm font-bold ${dark ? "text-white" : "text-gray-900"}`}>{t.uxui}</p>
                <p className={`text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}>{t.designer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
