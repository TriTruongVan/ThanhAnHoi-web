"use client";
import { ChefHat } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Thực đơn", href: "#menu" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white shadow-sm border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[70px]">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <a className="text-amber-600">
              <ChefHat size={28} />
            </a>
            <a className="flex flex-col leading-none shrink-0 gap-0.5">
              <span className="text-xl font-bold text-stone-800 tracking-wide">
                Thanh An Hội
              </span>
              <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-amber-600 text-center">
                Sự kiện tiệc cưới
              </span>
            </a>
          </div>

          {/* NAV — desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors duration-200 group pb-0.5"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-amber-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <button className="bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-amber-200 hover:shadow-md tracking-wide whitespace-nowrap">
              Đặt bàn
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-amber-50 transition-colors gap-[5px] p-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-[22px] h-[2px] bg-stone-700 rounded-full transition-all duration-300 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block w-[22px] h-[2px] bg-stone-700 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-[22px] h-[2px] bg-stone-700 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="bg-white border-t border-amber-100 px-4 pt-2 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-stone-700 hover:text-amber-600 hover:bg-amber-50 font-medium text-[15px] px-4 py-3 rounded-xl transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 pt-3 border-t border-amber-100">
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition-color duration-200 tracking-wide text-sm">
              Đặt bàn ngay
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
