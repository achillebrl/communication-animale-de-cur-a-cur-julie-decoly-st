import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2A1F12] text-[#A8946E]">
      {/* Top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#7B9E87]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-6 inline-flex">
              <span
                className="text-3xl font-light text-[#F5F0E8]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Julie <em className="italic text-[#7B9E87]">Decoly</em>
              </span>
              <span
                className="text-[9px] tracking-[0.3em] uppercase text-[#7B9E87] mt-1"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Pension Animalière Familiale
              </span>
            </Link>
            <p
              className="text-[#A8946E]/70 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Une approche holistique unique pour le bien-être de votre animal, 
              alliant pension familiale, communication animale et soins énergétiques.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-[#F5F0E8] text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A8946E]/70 hover:text-[#A8C4B0] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[#F5F0E8] text-sm tracking-widest uppercase mb-6"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Pension Animalière",
                "Communication Animale",
                "Soins Énergétiques",
                "Fleurs de Bach",
                "Stages",
                "Bon Cadeau",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-[#A8946E]/70 hover:text-[#A8C4B0] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#3D2E1E] flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#A8946E]/40 text-xs"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            © {new Date().getFullYear()} Julie Decoly. Tous droits réservés.
          </p>

          {/* Botanical decoration */}
          <div className="flex items-center gap-3 text-[#7B9E87]/30">
            <span className="text-lg">✦</span>
            <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>
              Pension · Communication · Soins · Bien-être
            </span>
            <span className="text-lg">✦</span>
          </div>

          <p
            className="text-[#A8946E]/40 text-xs"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Pension animalière familiale
          </p>
        </div>
      </div>
    </footer>
  );
}