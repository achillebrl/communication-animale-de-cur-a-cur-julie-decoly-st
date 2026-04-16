"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Accueil", href: "/", key: "accueil" },
    { label: "Services", href: "/services", key: "services" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FDFAF5]/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className={`text-2xl font-light transition-colors duration-300 ${
                scrolled ? "text-[#3D2E1E]" : "text-[#FDFAF5]"
              }`}
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Julie <em className="italic text-[#7B9E87]">Decoly</em>
            </span>
            <span
              className={`text-[9px] tracking-[0.35em] uppercase transition-colors duration-300 ${
                scrolled ? "text-[#7B9E87]" : "text-[#A8C4B0]/80"
              }`}
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Pension Animalière Familiale
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`nav-link-underline text-sm tracking-widest uppercase transition-colors duration-300 ${
                  activePage === link.key ? "active" : ""
                } ${
                  scrolled
                    ? "text-[#3D2E1E] hover:text-[#7B9E87]"
                    : "text-[#F5F0E8]/80 hover:text-[#FDFAF5]"
                }`}
                style={{ fontFamily: "var(--font-jost)" }}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA button */}
            <a
              href="/services"
              className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 ${
                scrolled
                  ? "bg-[#7B9E87] text-white hover:bg-[#5A7A65]"
                  : "border border-[#A8C4B0]/50 text-[#F5F0E8] hover:bg-[#7B9E87]/20"
              }`}
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden flex flex-col gap-1.5 transition-colors ${
              scrolled ? "text-[#3D2E1E]" : "text-[#FDFAF5]"
            }`}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-[1px] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              } ${scrolled ? "bg-[#3D2E1E]" : "bg-[#FDFAF5]"}`}
            />
            <span
              className={`block w-4 h-[1px] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              } ${scrolled ? "bg-[#3D2E1E]" : "bg-[#FDFAF5]"}`}
            />
            <span
              className={`block w-6 h-[1px] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              } ${scrolled ? "bg-[#3D2E1E]" : "bg-[#FDFAF5]"}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#3D2E1E] transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-4xl font-light transition-colors duration-300 ${
              activePage === link.key ? "text-[#7B9E87]" : "text-[#F5F0E8] hover:text-[#A8C4B0]"
            }`}
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/services"
          className="mt-4 inline-flex items-center gap-2 bg-[#7B9E87] text-white px-8 py-3 text-sm tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jost)" }}
          onClick={() => setMobileOpen(false)}
        >
          Prendre rendez-vous
        </a>
      </div>
    </>
  );
}