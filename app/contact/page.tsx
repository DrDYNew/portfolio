"use client";

import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import { translations } from "@/lib/translations";

const socialLinks = [
  {
    label: "GitHub",
    value: "github.com/DrDYNew",
    icon: FaGithub,
    href: "https://github.com/DrDYNew",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/duongtiendung",
    icon: FaLinkedin,
    href: "#",
  },
];

export default function ContactPage() {
  const { theme, lang } = useApp();
  const dark = theme === "dark";
  const t = translations[lang].contact;

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
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
              {t.contactInfo}
            </span>
            <h1
              className={`text-4xl sm:text-5xl font-bold mb-4 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {t.title}{" "}
              <span className="text-indigo-400">{t.titleHighlight}</span>
            </h1>
            <p
              className={`max-w-xl mx-auto text-lg ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {t.subtitle}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {/* Email */}
            <a
              href="mailto:dungbd07@gmail.com"
              className={`group rounded-2xl border p-6 text-center hover:border-indigo-500 transition-all hover:-translate-y-1 ${
                dark
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600/30 transition-colors ${
                  dark ? "bg-indigo-900/40" : "bg-indigo-100"
                }`}
              >
                <FiMail
                  size={24}
                  className={dark ? "text-indigo-400" : "text-indigo-600"}
                />
              </div>
              <h3
                className={`font-semibold mb-1 ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Email
              </h3>
              <p
                className={`text-sm ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                dungbd07@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+84961326910"
              className={`group rounded-2xl border p-6 text-center hover:border-indigo-500 transition-all hover:-translate-y-1 ${
                dark
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600/30 transition-colors ${
                  dark ? "bg-indigo-900/40" : "bg-indigo-100"
                }`}
              >
                <FiPhone
                  size={24}
                  className={dark ? "text-indigo-400" : "text-indigo-600"}
                />
              </div>
              <h3
                className={`font-semibold mb-1 ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                {lang === "en" ? "Phone" : "Điện thoại"}
              </h3>
              <p
                className={`text-sm ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                (+84) 0961326910
              </p>
            </a>

            {/* Location */}
            <div
              className={`group rounded-2xl border p-6 text-center ${
                dark
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  dark ? "bg-indigo-900/40" : "bg-indigo-100"
                }`}
              >
                <FiMapPin
                  size={24}
                  className={dark ? "text-indigo-400" : "text-indigo-600"}
                />
              </div>
              <h3
                className={`font-semibold mb-1 ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                {lang === "en" ? "Location" : "Địa điểm"}
              </h3>
              <p
                className={`text-sm ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {lang === "en"
                  ? "Ha Noi City, Vietnam"
                  : "TP. Ha Noi, Việt Nam"}
              </p>
            </div>
          </div>

          {/* Main Content: Form + Socials */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <form
              className={`lg:col-span-3 rounded-2xl border p-8 ${
                dark
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-6 ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                {t.sendMessage}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      dark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {t.yourName}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === "en" ? "John Doe" : "Nguyễn Văn A"}
                    className={`w-full border focus:border-indigo-500 outline-none rounded-xl px-4 py-3 text-sm transition-colors ${
                      dark
                        ? "bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      dark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {t.yourEmail}
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full border focus:border-indigo-500 outline-none rounded-xl px-4 py-3 text-sm transition-colors ${
                      dark
                        ? "bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {t.subject}
                </label>
                <input
                  type="text"
                  placeholder={
                    lang === "en"
                      ? "What's this about?"
                      : "Chủ đề liên hệ?"
                  }
                  className={`w-full border focus:border-indigo-500 outline-none rounded-xl px-4 py-3 text-sm transition-colors ${
                    dark
                      ? "bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />
              </div>

              <div className="mb-6">
                <label
                  className={`block text-sm font-medium mb-2 ${
                    dark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {lang === "en" ? "Message" : "Nội dung"}
                </label>
                <textarea
                  rows={6}
                  placeholder={t.yourMessage}
                  className={`w-full border focus:border-indigo-500 outline-none rounded-xl px-4 py-3 text-sm transition-colors resize-none ${
                    dark
                      ? "bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                <FiSend size={16} />
                {t.send}
              </button>
            </form>

            {/* Sidebar: Social + Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Connect */}
              <div
                className={`rounded-2xl border p-6 ${
                  dark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <h3
                  className={`font-semibold text-lg mb-4 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {lang === "en" ? "Connect With Me" : "Kết nối với tôi"}
                </h3>
                <div className="space-y-3">
                  {socialLinks.map(({ label, value, icon: Icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-3 rounded-xl transition-colors group ${
                        dark
                          ? "hover:bg-gray-800"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600/30 transition-colors ${
                          dark ? "bg-gray-800" : "bg-gray-200"
                        }`}
                      >
                        <Icon
                          size={18}
                          className={`${
                            dark
                              ? "text-gray-400 group-hover:text-indigo-400"
                              : "text-gray-600 group-hover:text-indigo-600"
                          }`}
                        />
                      </div>
                      <div>
                        <p
                          className={`text-xs ${
                            dark ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {label}
                        </p>
                        <p
                          className={`text-sm font-medium ${
                            dark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div
                className={`rounded-2xl border p-6 ${
                  dark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <h3
                    className={`font-semibold ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {lang === "en"
                      ? "Available for Work"
                      : "Sẵn sàng nhận việc"}
                  </h3>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    dark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {lang === "en"
                    ? "I'm currently open to freelance projects, full-time positions, and collaboration opportunities. Let's build something great together!"
                    : "Tôi hiện đang mở cửa cho các dự án freelance, vị trí toàn thời gian và cơ hội hợp tác. Hãy cùng xây dựng điều tuyệt vời!"}
                </p>
              </div>

              {/* Response Time */}
              <div
                className={`rounded-2xl border p-6 ${
                  dark
                    ? "bg-gray-900 border-gray-800"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <h3
                  className={`font-semibold mb-2 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {lang === "en"
                    ? "Response Time"
                    : "Thời gian phản hồi"}
                </h3>
                <p
                  className={`text-sm ${
                    dark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {lang === "en"
                    ? "I typically respond within 24 hours."
                    : "Tôi thường phản hồi trong vòng 24 giờ."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
