"use client";

import { FaGithub, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiMessageCircle, FiArrowUpRight } from "react-icons/fi";
import { SiDotnet } from "react-icons/si";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";
import Link from "next/link";

const socials = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/duong.dung.63378/", label: "Facebook" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@drdynew03?is_from_webapp=1&sender_device=pc", label: "TikTok" },
  { icon: FiMessageCircle, href: "https://www.facebook.com/messages/e2ee/t/6959836157428817", label: "Chat" },
  { icon: FiMail, href: "mailto:dungbd07@gmail.com", label: "Email" },
];

export default function Footer() {
  const { theme, lang } = useApp();
  const t = translations[lang].footer;
  const dark = theme === "dark";

  const quickLinks = [
    { label: t.home, href: "/#hero" },
    { label: t.about, href: "/#about" },
    { label: t.projects, href: "/#projects" },
    { label: t.contact, href: "/#contact" },
  ];

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        dark ? "bg-gray-950 border-gray-800" : "bg-gray-50 border-gray-200"
      }`}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className={dark ? "text-white" : "text-gray-900"}>Dương</span>
                <span className="text-blue-400">Dũng</span>
              </span>
            </Link>
            <p className={`text-sm leading-relaxed mb-6 ${dark ? "text-gray-400" : "text-gray-500"}`}>
              {t.description}
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                    dark
                      ? "bg-gray-800 text-gray-400 hover:bg-indigo-900/50 hover:text-indigo-400"
                      : "bg-gray-200 text-gray-500 hover:bg-indigo-100 hover:text-indigo-600"
                  }`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold mb-4 pb-2 border-b-2 border-indigo-500 inline-block ${
              dark ? "text-white" : "text-gray-900"
            }`}>
              {t.quickLinks}
            </h3>
            <ul className="space-y-3 mt-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors hover:text-indigo-400 ${
                      dark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-semibold mb-4 pb-2 border-b-2 border-indigo-500 inline-block ${
              dark ? "text-white" : "text-gray-900"
            }`}>
              {t.contactInfo}
            </h3>
            <ul className="space-y-5 mt-2">
              <li className="flex items-start gap-3">
                <FiMail className={`mt-0.5 flex-shrink-0 ${dark ? "text-indigo-400" : "text-indigo-600"}`} size={18} />
                <div>
                  <p className={`text-sm font-medium ${dark ? "text-white" : "text-gray-900"}`}>{t.emailMe}</p>
                  <a href="mailto:dungbd07@gmail.com" className={`text-sm transition-colors hover:text-indigo-400 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                    dungbd07@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className={`mt-0.5 flex-shrink-0 ${dark ? "text-indigo-400" : "text-indigo-600"}`} size={18} />
                <div>
                  <p className={`text-sm font-medium ${dark ? "text-white" : "text-gray-900"}`}>{t.location}</p>
                  <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>{t.locationValue}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className={`mt-0.5 flex-shrink-0 ${dark ? "text-indigo-400" : "text-indigo-600"}`} size={18} />
                <div>
                  <p className={`text-sm font-medium ${dark ? "text-white" : "text-gray-900"}`}>{t.callMe}</p>
                  <a href="tel:+84961326910" className={`text-sm transition-colors hover:text-indigo-400 ${dark ? "text-gray-400" : "text-gray-500"}`}>
                    (+84) 0961326910
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Let's Talk */}
          <div>
            <h3 className={`font-semibold mb-4 pb-2 border-b-2 border-indigo-500 inline-block ${
              dark ? "text-white" : "text-gray-900"
            }`}>
              {t.letsTalk}
            </h3>
            <p className={`text-sm leading-relaxed mb-6 mt-2 ${dark ? "text-gray-400" : "text-gray-500"}`}>
              {t.letsTalkDesc}
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-500/25"
            >
              {t.scheduleMeeting}
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${dark ? "border-gray-800" : "border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${dark ? "text-gray-500" : "text-gray-400"}`}>
            © {new Date().getFullYear()} Dương Tiến Dũng. {t.rights}
          </p>
          <div className={`flex items-center gap-2 text-sm ${dark ? "text-gray-500" : "text-gray-400"}`}>
            {t.madeWith} <span className="text-red-400">♡</span> {t.using}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border ${
              dark ? "border-gray-700 text-gray-300" : "border-gray-300 text-gray-600"
            }`}>
              <SiDotnet size={12} className="text-purple-500" /> C#
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
