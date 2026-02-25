"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { theme, lang, toggleTheme, toggleLang } = useApp();
  const t = translations[lang].nav;
  const pathname = usePathname();

  const navLinks = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about" },
    { label: t.projects, href: "/#projects" },
    { label: t.contact, href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        theme === "dark" ? "bg-[#060d1f]/90" : "bg-white/80 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
              Dương
            </span>
            <span className="text-blue-400">Dũng</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive =
                (href === "/" && pathname === "/") ||
                (href === "/about" && pathname === "/about") ||
                (href === "/contact" && pathname === "/contact");
              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right icons */}
          <div
            className={`flex items-center gap-3 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="hover:text-blue-400 transition-colors p-1"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              )}
            </button>

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="hover:text-blue-400 transition-colors p-1 text-xs font-bold"
              aria-label="Change language"
            >
              {lang === "en" ? "VI" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
