"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation({ activePage }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#faf8f5]/92 backdrop-blur-md shadow-[0_1px_0_rgba(168,197,160,0.3)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="text-[#a8c5a0] text-2xl select-none floating-leaf inline-block">✿</span>
            <div className="flex flex-col">
              <span
                className="text-[#2d4a2d] leading-none tracking-wide"
                style={{
                  fontFamily: "var(--font-italiana), serif",
                  fontSize: "1.3rem",
                }}
              >
                Julie Decoly
              </span>
              <span
                className="text-[#7aab70] text-xs tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
              >
                Bien-être Animal
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                  activePage === link.href
                    ? "text-[#2d4a2d] active"
                    : "text-[#4a6b4a] hover:text-[#2d4a2d]"
                }`}
                style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.juliedecoly.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-[0.15em] uppercase px-6 py-2.5 border border-[#a8c5a0] text-[#2d4a2d] hover:bg-[#a8c5a0] hover:text-white transition-all duration-400 rounded-full"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block h-px w-6 bg-[#2d4a2d] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#2d4a2d] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#2d4a2d] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#faf8f5] flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <span className="text-[#a8c5a0] text-4xl floating-leaf">✿</span>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl text-[#2d4a2d] hover:text-[#7aab70] transition-colors"
              style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://www.juliedecoly.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-sm tracking-[0.2em] uppercase px-8 py-3 border border-[#a8c5a0] text-[#2d4a2d] hover:bg-[#a8c5a0] hover:text-white transition-all duration-400 rounded-full"
            style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}