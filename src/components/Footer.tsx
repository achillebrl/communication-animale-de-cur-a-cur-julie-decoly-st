import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d4a2d] text-[#c8ddc4] relative overflow-hidden">
      {/* Organic background shapes */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        style={{
          background: "radial-gradient(ellipse, #a8c5a0, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
        style={{
          background: "radial-gradient(ellipse, #7aab70, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[#a8c5a0] text-2xl">✿</span>
              <div>
                <p
                  className="text-[#f7f3ed] leading-none text-xl"
                  style={{ fontFamily: "var(--font-italiana), serif" }}
                >
                  Julie Decoly
                </p>
                <p
                  className="text-[#7aab70] text-xs tracking-[0.25em] uppercase mt-0.5"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
                >
                  Bien-être Animal
                </p>
              </div>
            </div>
            <p
              className="text-[#a8c5a0] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
            >
              Pension animalière familiale & soins holistiques pour le bien-être des animaux et de leurs maîtres.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p
              className="text-[#f7f3ed] text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "https://www.juliedecoly.com/contact", label: "Contact & Réservation" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#a8c5a0] hover:text-[#c8ddc4] transition-colors text-sm"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services rapides */}
          <div className="space-y-4">
            <p
              className="text-[#f7f3ed] text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              Services
            </p>
            <div className="flex flex-col gap-2">
              {[
                "Communication animale",
                "Soins énergétiques",
                "Fleurs de Bach",
                "Pension familiale",
                "Stages",
              ].map((s) => (
                <span
                  key={s}
                  className="text-[#a8c5a0] text-sm"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#a8c5a0]/40 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#7aab70] text-xs tracking-widest"
            style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Julie Decoly — Tous droits réservés
          </p>
          <p
            className="text-[#7aab70] text-xs italic"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            &ldquo;Chaque animal a une âme et une histoire à raconter.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}