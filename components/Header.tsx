"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F3]/95 backdrop-blur-sm shadow-sm"
          : "bg-[#FAF8F3]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl text-[#2C2826] tracking-tight hover:text-[#7A9E80] transition-colors"
        >
          altogetherceremonies
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(1, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#7A9E80]"
                  : "text-[#6B6460] hover:text-[#2C2826]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 bg-[#7A9E80] text-white text-sm font-medium rounded-full hover:bg-[#587060] transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#2C2826] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2C2826] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2C2826] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t border-[#EDE8DC]" : "max-h-0"
        }`}
      >
        <nav className="bg-[#FAF8F3] flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#7A9E80]"
                  : "text-[#6B6460] hover:text-[#2C2826]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2 pb-2">
            <Link
              href="/contact"
              className="block text-center px-5 py-2.5 bg-[#7A9E80] text-white text-sm font-medium rounded-full hover:bg-[#587060] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
