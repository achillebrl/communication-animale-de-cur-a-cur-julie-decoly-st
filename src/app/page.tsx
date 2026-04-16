import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation activePage="accueil" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        {/* Full-bleed image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero.jpg"
            alt="Julie Decoly pension animalière"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/80 via-[#1a1208]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1208]/40 via-transparent to-transparent" />
        </div>

        {/* Decorative botanical circle */}
        <div className="absolute top-1/4 right-12 w-64 h-64 opacity-20 rotate-slow pointer-events-none z-10 hidden lg:block">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
            <circle cx="100" cy="100" r="95" stroke="#7B9E87" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="80" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="4 8" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <g key={i} transform={`rotate(${angle}, 100, 100)`}>
                <path
                  d="M100 10 C90 30 85 50 100 60 C115 50 110 30 100 10Z"
                  fill="#7B9E87"
                  opacity="0.6"
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16">
          <div className="max-w-2xl">
            <span
              className="inline-block text-[#A8C4B0] tracking-[0.35em] text-xs uppercase mb-6 font-light"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Pension Animalière Familiale
            </span>

            <h1
              className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] font-light text-[#FDFAF5] mb-2"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Julie
              <br />
              <em className="italic text-[#A8C4B0]">Decoly</em>
            </h1>

            <div className="w-16 h-[1px] bg-gradient-to-r from-[#7B9E87] to-[#C9A84C] my-8" />

            <p
              className="text-[#E8DDD0] text-lg leading-relaxed max-w-md font-light mb-10"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Un lieu où les animaux sont accueillis avec amour — pension familiale, 
              communication animale, soins énergétiques et Fleurs de Bach.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/services"
                className="group inline-flex items-center gap-3 bg-[#7B9E87] hover:bg-[#5A7A65] text-[#FDFAF5] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Découvrir les services
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-3 border border-[#A8C4B0]/50 hover:border-[#A8C4B0] text-[#E8DDD0] hover:text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Floating stats */}
          <div className="absolute bottom-8 right-6 lg:right-16 hidden md:flex flex-col gap-1 text-right">
            <span className="text-[#A8C4B0]/60 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>
              Approche holistique
            </span>
            <span className="text-[#FDFAF5]/30 text-xs" style={{ fontFamily: "var(--font-jost)" }}>
              Pension · Communication · Soins · Bien-être
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[#A8C4B0]/50 text-[10px] tracking-widest uppercase rotate-90 mb-6" style={{ fontFamily: "var(--font-jost)" }}>Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#7B9E87]/50 to-transparent" />
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <section className="bg-[#7B9E87] py-6 overflow-hidden">
        <div className="flex items-center gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[
            "Pension Familiale",
            "✦",
            "Communication Animale",
            "✦",
            "Soins Énergétiques",
            "✦",
            "Fleurs de Bach",
            "✦",
            "Bien-être Animal",
            "✦",
            "Développement Personnel",
            "✦",
            "Pension Familiale",
            "✦",
            "Communication Animale",
            "✦",
            "Soins Énergétiques",
            "✦",
            "Fleurs de Bach",
            "✦",
          ].map((item, i) => (
            <span
              key={i}
              className={`text-[#FDFAF5] text-sm tracking-widest uppercase ${item === "✦" ? "text-[#E8D5A3]" : ""}`}
              style={{ fontFamily: "var(--font-jost)" }}
            >
              {item}
            </span>
          ))}
        </div>
        
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="gradient-mesh py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image column */}
            <div data-animate="fade-left" className="relative">
              {/* Background shape */}
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#7B9E87]/10 organic-blob" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C9A84C]/10 organic-blob-2" />

              {/* Main image */}
              <div className="relative z-10 aspect-[4/5] overflow-hidden organic-blob shadow-2xl">
                <Image
                  src="/assets/hero.jpg"
                  alt="Julie Decoly"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E1E]/30 to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border border-[#7B9E87]/30 rounded-full z-0" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-[#C9A84C]/20 rounded-full z-0" />

              {/* Badge */}
              <div className="absolute top-8 -right-4 z-20 bg-[#FDFAF5] shadow-xl px-6 py-4 float-slow">
                <p className="text-[#7B9E87] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-jost)" }}>Praticienne</p>
                <p className="text-[#3D2E1E] text-sm font-medium" style={{ fontFamily: "var(--font-cormorant)" }}>Holistique</p>
              </div>
            </div>

            {/* Text column */}
            <div>
              <div data-animate data-delay="100">
                <span className="text-[#7B9E87] tracking-[0.3em] text-xs uppercase" style={{ fontFamily: "var(--font-jost)" }}>
                  À propos
                </span>
              </div>

              <h2
                data-animate data-delay="200"
                className="text-[clamp(2.5rem,4vw,4rem)] font-light leading-tight mt-4 mb-6 text-[#3D2E1E]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Une approche
                <br />
                <em className="italic text-[#7B9E87]">du cœur</em>
              </h2>

              <div className="w-10 h-[1px] bg-gradient-to-r from-[#7B9E87] to-[#C9A84C] mb-8" data-animate data-delay="200" />

              <p
                data-animate data-delay="300"
                className="text-[#6B5240] leading-relaxed mb-6 text-lg"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                Julie Decoly est une praticienne spécialisée en communication animale, soins 
                énergétiques et Fleurs de Bach. Elle accueille également les animaux dans le 
                cadre d'une pension animalière à caractère familial, offrant un environnement 
                chaleureux et bienveillant.
              </p>

              <p
                data-animate data-delay="400"
                className="text-[#6B5240] leading-relaxed mb-10 text-lg"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                Sa pratique unique allie plusieurs disciplines complémentaires au service 
                du bien-être animal, intégrant le développement personnel dans la relation 
                humain-animal.
              </p>

              {/* USPs */}
              <div data-animate data-delay="500" className="grid grid-cols-1 gap-4">
                {[
                  { icon: "🌿", text: "Approche holistique et personnalisée" },
                  { icon: "✨", text: "Communication avec animaux vivants ou défunts" },
                  { icon: "🌸", text: "Élixirs floraux de Bach adaptés aux animaux" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-[#6B5240] text-sm" style={{ fontFamily: "var(--font-jost)" }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-32 lg:py-40 bg-[#3D2E1E] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 leaf-pattern opacity-50" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7B9E87]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7B9E87]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <span
              data-animate
              className="text-[#A8C4B0] tracking-[0.35em] text-xs uppercase"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Ce que je propose
            </span>
            <h2
              data-animate data-delay="200"
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#F5F0E8] mt-4 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Mes <em className="italic text-[#A8C4B0]">Services</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Pension Animalière Familiale",
                description: "Accueil des animaux dans un cadre familial et bienveillant pendant l'absence de leurs propriétaires.",
                icon: "🏡",
                num: "01",
              },
              {
                name: "Communication Animale",
                description: "Séances de communication intuitive avec les animaux, vivants ou défunts, pour comprendre leurs ressentis, besoins et messages.",
                icon: "🔮",
                num: "02",
              },
              {
                name: "Soins Énergétiques",
                description: "Soins énergétiques proposés aux animaux pour favoriser leur bien-être physique et émotionnel.",
                icon: "✨",
                num: "03",
              },
              {
                name: "Fleurs de Bach",
                description: "Préparation et utilisation des élixirs floraux de Bach adaptés aux animaux pour rééquilibrer leurs états émotionnels.",
                icon: "🌸",
                num: "04",
              },
              {
                name: "Stages",
                description: "Stages de formation ou d'initiation à la communication animale et au développement personnel en lien avec les animaux.",
                icon: "🌱",
                num: "05",
              },
              {
                name: "Bon Cadeau",
                description: "Bons cadeaux disponibles pour offrir une séance ou un service à un proche.",
                icon: "🎁",
                num: "06",
              },
            ].map((service, i) => (
              <div
                key={i}
                data-animate
                data-delay={`${(i % 3) * 100 + 100}`}
                className="card-hover group relative bg-[#2A1F12]/60 border border-[#7B9E87]/15 p-8 cursor-pointer"
              >
                <span className="service-number">{service.num}</span>
                <span className="text-2xl mb-4 block">{service.icon}</span>
                <h3
                  className="text-xl font-medium text-[#F5F0E8] mb-3 group-hover:text-[#A8C4B0] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {service.name}
                </h3>
                <div className="w-8 h-[1px] bg-[#7B9E87]/40 mb-4 group-hover:w-16 transition-all duration-500" />
                <p
                  className="text-[#A8946E]/80 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div data-animate data-delay="300" className="text-center mt-14">
            <a
              href="/services"
              className="group inline-flex items-center gap-3 border border-[#7B9E87]/50 hover:border-[#7B9E87] text-[#A8C4B0] hover:text-[#FDFAF5] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Voir tous les services
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-12">
          <div className="flex items-end justify-between">
            <div>
              <span
                data-animate
                className="text-[#7B9E87] tracking-[0.3em] text-xs uppercase"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Galerie
              </span>
              <h2
                data-animate data-delay="200"
                className="text-[clamp(2rem,4vw,3.5rem)] font-light text-[#3D2E1E] mt-3 leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Moments de
                <br />
                <em className="italic text-[#7B9E87]">bonheur partagé</em>
              </h2>
            </div>
            <div data-animate data-delay="300" className="hidden md:flex items-center gap-2 text-[#6B5240] text-sm pb-2" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
              <span>Glisser pour explorer</span>
              <span className="text-[#7B9E87]">→</span>
            </div>
          </div>
        </div>
        <GalleryCarousel />
      </section>

      {/* ── QUOTE SECTION ── */}
      <section className="py-32 bg-[#7B9E87] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5A7A65] rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4A6741] rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <div data-animate className="text-[#E8D5A3] text-6xl mb-8 float-slow" style={{ fontFamily: "var(--font-cormorant)" }}>"</div>
          <blockquote
            data-animate data-delay="200"
            className="text-[clamp(1.5rem,3vw,2.5rem)] font-light text-[#FDFAF5] leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Les animaux sont des êtres sensibles et intelligents. 
            Ils ont des messages à nous transmettre, des émotions à partager.
          </blockquote>
          <div data-animate data-delay="300" className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#E8D5A3]/50" />
            <span className="text-[#E8D5A3] text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>
              Julie Decoly
            </span>
            <div className="h-[1px] w-12 bg-[#E8D5A3]/50" />
          </div>
        </div>
      </section>

      {/* ── HOLISTIC APPROACH ── */}
      <section className="py-32 lg:py-40 gradient-mesh">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20">
            <span
              data-animate
              className="text-[#7B9E87] tracking-[0.3em] text-xs uppercase"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              La différence Julie Decoly
            </span>
            <h2
              data-animate data-delay="200"
              className="text-[clamp(2rem,4vw,4rem)] font-light text-[#3D2E1E] mt-4 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Une vision <em className="italic text-[#7B9E87]">globale</em>
              <br /> du bien-être animal
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Présence & Amour",
                body: "Chaque animal est accueilli comme un membre de la famille, avec toute l'attention et l'affection qu'il mérite.",
                color: "#7B9E87",
                symbol: "♥",
              },
              {
                title: "Écoute Intuitive",
                body: "La communication animale permet de comprendre les besoins profonds, les peurs et les désirs de chaque animal.",
                color: "#C9A84C",
                symbol: "◈",
              },
              {
                title: "Équilibre Émotionnel",
                body: "Les Fleurs de Bach et soins énergétiques rééquilibrent l'état émotionnel pour un bien-être durable.",
                color: "#5A7A65",
                symbol: "✦",
              },
              {
                title: "Lien Profond",
                body: "L'intégration du développement personnel transforme et enrichit la relation unique entre l'humain et l'animal.",
                color: "#6B5240",
                symbol: "∞",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-animate
                data-delay={`${i * 100 + 100}`}
                className="text-center group"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: item.color }}
                >
                  {item.symbol}
                </div>
                <h3
                  className="text-xl font-medium text-[#3D2E1E] mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#6B5240] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-32 bg-[#F5F0E8] relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span
            data-animate
            className="text-[#7B9E87] tracking-[0.3em] text-xs uppercase"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Prendre contact
          </span>
          <h2
            data-animate data-delay="200"
            className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#3D2E1E] mt-4 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Votre animal mérite
            <br />
            <em className="italic text-[#7B9E87]">le meilleur soin</em>
          </h2>

          <p
            data-animate data-delay="300"
            className="text-[#6B5240] text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            Découvrez comment Julie Decoly peut accompagner votre animal avec 
            une approche holistique unique, alliant pension familiale et soins 
            de l'âme.
          </p>

          <div data-animate data-delay="400" className="flex flex-wrap gap-4 justify-center">
            <a
              href="/services"
              className="group inline-flex items-center gap-3 bg-[#7B9E87] hover:bg-[#5A7A65] text-[#FDFAF5] px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "var(--font-jost)" }}
            >
              Voir les services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}