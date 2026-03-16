import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/GalleryCarousel";
import ScrollAnimator from "@/components/ScrollAnimator";

const services = [
  {
    name: "Communication animale",
    icon: "◈",
    description:
      "Séances de communication intuitive avec les animaux, vivants ou défunts, pour mieux comprendre leurs besoins et renforcer le lien avec leur maître.",
    accent: "#a8c5a0",
  },
  {
    name: "Soins énergétiques",
    icon: "✦",
    description:
      "Soins de bien-être énergétique proposés aux animaux pour rétablir leur équilibre intérieur et soutenir leur vitalité.",
    accent: "#7aab70",
  },
  {
    name: "Fleurs de Bach",
    icon: "❋",
    description:
      "Utilisation des élixirs floraux de Bach pour accompagner les animaux et leurs propriétaires sur le plan émotionnel.",
    accent: "#c9a96e",
  },
  {
    name: "Pension familiale",
    icon: "⌂",
    description:
      "Accueil des animaux dans un cadre familial et bienveillant durant l'absence de leurs maîtres.",
    accent: "#a8c5a0",
  },
  {
    name: "Stages",
    icon: "◇",
    description:
      "Stages autour de la communication animale et du développement personnel pour approfondir votre lien avec le vivant.",
    accent: "#7aab70",
  },
  {
    name: "Bon cadeau",
    icon: "♡",
    description:
      "Bon cadeau disponible pour offrir les services proposés à ceux qui vous sont chers.",
    accent: "#c9a96e",
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="/" />

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Julie Decoly — Pension animalière"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
          {/* Additional soft green tint at top */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(45,74,45,0.25) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Floating decorative elements */}
        <div
          className="absolute top-1/4 right-16 text-[#a8c5a0]/30 text-6xl floating-leaf select-none hidden lg:block"
          aria-hidden="true"
        >
          ✿
        </div>
        <div
          className="absolute top-1/3 right-32 text-[#c8ddc4]/20 text-3xl floating-leaf select-none hidden lg:block"
          style={{ animationDelay: "2s" }}
          aria-hidden="true"
        >
          ❋
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24 md:pb-32">
          <div className="max-w-3xl">
            <p
              className="text-[#7aab70] text-sm tracking-[0.4em] uppercase mb-6 opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 400,
                animation: "fadeInUp 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) forwards",
              }}
            >
              Pension Animalière & Bien-être
            </p>
            <h1
              className="hero-text-shadow mb-6 opacity-0"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                lineHeight: 1.05,
                color: "#2d4a2d",
                animation: "fadeInUp 1s 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
              }}
            >
              L&apos;âme
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "#2d4a2d",
                }}
              >
                de vos animaux
              </em>
              <br />
              <span
                style={{
                  color: "#7aab70",
                }}
              >
                en bonnes mains
              </span>
            </h1>
            <p
              className="text-[#3d5c3d] text-lg md:text-xl leading-relaxed max-w-xl mb-10 opacity-0"
              style={{
                fontFamily: "var(--font-jost), sans-serif",
                fontWeight: 300,
                animation: "fadeInUp 1s 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
              }}
            >
              Pension familiale, communication intuitive, soins énergétiques et Fleurs de Bach — une approche holistique pour le bien-être de vos compagnons.
            </p>
            <div
              className="flex flex-wrap gap-4 opacity-0"
              style={{
                animation: "fadeInUp 1s 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
              }}
            >
              <Link
                href="https://www.juliedecoly.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2d4a2d] text-[#c8ddc4] px-8 py-4 rounded-full hover:bg-[#a8c5a0] hover:text-[#2d4a2d] transition-all duration-500 text-sm tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
              >
                Prendre Rendez-vous
                <span className="text-base">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#a8c5a0] text-[#2d4a2d] px-8 py-4 rounded-full hover:bg-[#a8c5a0]/20 transition-all duration-500 text-sm tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
              >
                Découvrir les services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span
            className="text-[#2d4a2d] text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
          >
            Découvrir
          </span>
          <div className="scroll-indicator text-[#a8c5a0] text-lg">↓</div>
        </div>
      </section>

      {/* Keyframes via style tag workaround — inline style on elements above handles it */}
      

      {/* ═══════════════════════════════════════════
          INTRO STRIP
      ═══════════════════════════════════════════ */}
      <section className="bg-[#a8c5a0] py-5 overflow-hidden">
        <div className="flex gap-12 items-center animate-[marquee_20s_linear_infinite] whitespace-nowrap" style={{ animation: "marquee 25s linear infinite" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-[#2d4a2d]/70 text-xs tracking-[0.4em] uppercase shrink-0"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
            >
              Communication Animale ✦ Soins Énergétiques ✦ Fleurs de Bach ✦ Pension Familiale ✦ Stages &nbsp;
            </span>
          ))}
        </div>
        
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT / STORY
      ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-[#faf8f5] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div data-animate="fade-left" className="relative">
              <div
                className="relative organic-shape overflow-hidden w-full aspect-[4/5]"
                style={{ boxShadow: "0 32px 80px rgba(45,74,45,0.18)" }}
              >
                <Image
                  src="/assets/about.jpg"
                  alt="Julie Decoly avec des animaux"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Fallback gradient if image doesn't exist */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168,197,160,0.3), rgba(122,171,112,0.1))",
                  }}
                />
              </div>
              {/* Decorative element */}
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 organic-shape-2 border-2 border-[#a8c5a0]/40 z-[-1]"
                aria-hidden="true"
              />
              <div
                className="absolute -top-6 -left-6 text-[#a8c5a0] text-5xl floating-leaf"
                aria-hidden="true"
              >
                ✿
              </div>
              {/* Badge */}
              <div
                className="absolute bottom-8 -right-4 md:-right-10 bg-[#2d4a2d] text-[#c8ddc4] px-5 py-4 rounded-2xl text-center shadow-xl"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                <p className="text-3xl font-light leading-none">✦</p>
                <p
                  className="text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
                >
                  Approche
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
                >
                  Holistique
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-8">
              <div data-animate>
                <p
                  className="text-[#7aab70] text-xs tracking-[0.4em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
                >
                  Mon approche
                </p>
                <h2
                  className="text-[#2d4a2d] leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 300,
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  }}
                >
                  Un lien profond
                  <br />
                  <em>avec le vivant</em>
                </h2>
              </div>

              <div data-animate className="delay-2 space-y-5">
                <p
                  className="text-[#4a6b4a] leading-relaxed text-base"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
                >
                  Je suis Julie Decoly, et ma passion pour les animaux m&apos;a conduite vers une approche holistique de leur bien-être. Ma pension animalière n&apos;est pas un simple lieu de garde : c&apos;est un sanctuaire où chaque animal est accueilli avec amour et attention.
                </p>
                <p
                  className="text-[#4a6b4a] leading-relaxed text-base"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
                >
                  En combinant la garde familiale avec des pratiques de communication intuitive, de soins énergétiques et des Fleurs de Bach, j&apos;accompagne vos compagnons vers un équilibre profond — corps, émotions et esprit.
                </p>
              </div>

              <div data-animate className="delay-3">
                <div className="petal-border p-6 rounded-2xl bg-[#f0f7ee]">
                  <p
                    className="text-[#2d4a2d] text-xl md:text-2xl leading-relaxed italic"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                  >
                    &ldquo;Chaque animal porte en lui une sagesse unique. Mon rôle est d&apos;écouter et de transmettre.&rdquo;
                  </p>
                  <p
                    className="text-[#7aab70] text-sm mt-3"
                    style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
                  >
                    — Julie Decoly
                  </p>
                </div>
              </div>

              <div data-animate className="delay-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 text-[#2d4a2d] hover:text-[#7aab70] transition-colors group"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500, letterSpacing: "0.1em" }}
                >
                  <span className="text-sm uppercase tracking-widest">Explorer mes services</span>
                  <span className="w-8 h-px bg-current group-hover:w-14 transition-all duration-500" />
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-[#f0f7ee] relative overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(168,197,160,0.4), transparent 70%)",
            transform: "translate(20%, -20%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(122,171,112,0.3), transparent 70%)",
            transform: "translate(-20%, 20%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20" data-animate>
            <p
              className="text-[#7aab70] text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
            >
              Ce que je propose
            </p>
            <h2
              className="text-[#2d4a2d]"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
              }}
            >
              Mes <em>Services</em>
            </h2>
            <div className="leaf-divider mt-8 max-w-xs mx-auto">
              <span className="text-[#a8c5a0] text-sm">✦</span>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={service.name}
                data-animate
                className={`delay-${(i % 3) + 1} service-card bg-[#faf8f5] rounded-3xl p-8 border border-[#a8c5a0]/20`}
              >
                <div className="mb-6">
                  <span
                    className="text-4xl"
                    style={{ color: service.accent }}
                  >
                    {service.icon}
                  </span>
                </div>
                <h3
                  className="text-[#2d4a2d] mb-3 text-xl"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 500,
                    fontSize: "1.35rem",
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#5a7a5a] leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300, lineHeight: 1.8 }}
                >
                  {service.description}
                </p>
                <div
                  className="mt-6 h-0.5 w-10 rounded-full"
                  style={{ backgroundColor: service.accent }}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16" data-animate>
            <Link
              href="https://www.juliedecoly.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d4a2d] text-[#c8ddc4] px-10 py-4 rounded-full hover:bg-[#a8c5a0] hover:text-[#2d4a2d] transition-all duration-500 text-sm tracking-[0.2em] uppercase shadow-lg hover:shadow-xl"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
            >
              Réserver une séance
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GALLERY
      ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div data-animate>
              <p
                className="text-[#7aab70] text-xs tracking-[0.4em] uppercase mb-4"
                style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
              >
                En images
              </p>
              <h2
                className="text-[#2d4a2d]"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.1,
                }}
              >
                La vie à
                <br />
                <em>la pension</em>
              </h2>
            </div>
            <div data-animate="fade-right" className="max-w-xs">
              <p
                className="text-[#5a7a5a] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
              >
                Un cadre naturel et chaleureux où vos animaux se sentent chez eux, entourés de soins et d&apos;amour.
              </p>
            </div>
          </div>

          <div data-animate="scale">
            <GalleryCarousel />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VALUES STRIP
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#2d4a2d] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #a8c5a0 0, #a8c5a0 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "✦", label: "Approche intuitive", sub: "Communication profonde" },
              { value: "◈", label: "Cadre familial", sub: "Environnement bienveillant" },
              { value: "❋", label: "Bien-être total", sub: "Corps, émotions, esprit" },
              { value: "♡", label: "Lien renforcé", sub: "Maître & animal" },
            ].map((item, i) => (
              <div
                key={item.label}
                data-animate
                className={`delay-${i + 1} space-y-3`}
              >
                <span className="text-[#a8c5a0] text-4xl block">{item.value}</span>
                <p
                  className="text-[#f7f3ed] text-base"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[#7aab70] text-xs tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA FINAL
      ═══════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-[#f7f3ed] relative overflow-hidden">
        {/* Large decorative text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-[#a8c5a0]/8 font-bold"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(8rem, 20vw, 18rem)",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            ensemble
          </span>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div data-animate className="space-y-8">
            <p
              className="text-[#7aab70] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 400 }}
            >
              Commençons l&apos;aventure
            </p>
            <h2
              className="text-[#2d4a2d]"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
              }}
            >
              Prenez soin de votre
              <br />
              <em className="text-[#7aab70]">compagnon aujourd&apos;hui</em>
            </h2>
            <p
              className="text-[#5a7a5a] text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 300 }}
            >
              Que ce soit pour une séance de communication, un séjour à la pension ou un soin énergétique, je suis là pour accompagner votre animal avec tout l&apos;amour qu&apos;il mérite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.juliedecoly.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#2d4a2d] text-[#c8ddc4] px-10 py-4 rounded-full hover:bg-[#a8c5a0] hover:text-[#2d4a2d] transition-all duration-500 text-sm tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl"
                style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
              >
                Contacter Julie
                <span>→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#2d4a2d] text-[#2d4a2d] px-10 py-4 rounded-full hover:bg-[#2d4a2d] hover:text-[#c8ddc4] transition-all duration-500 text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500 }}
              >
                Voir les services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}