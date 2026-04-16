import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Julie Decoly",
  description:
    "Julie Decoly propose une pension animalière familiale ainsi que des services de communication animale, soins énergétiques et Fleurs de Bach.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FDFAF5]">
      <Navigation activePage="services" />

      {/* ── PAGE HERO ── */}
      <section className="pt-40 pb-20 px-6 text-center bg-[#F5F0E8]" data-animate="fade-in">
        <span
          className="text-[#7B9E87] tracking-[0.35em] text-xs uppercase"
          style={{ fontFamily: "var(--font-jost)" }}
        >
          Ce que je propose
        </span>
        <h1
          className="text-[clamp(3rem,6vw,5.5rem)] font-light text-[#3D2E1E] mt-4 mb-6 leading-tight"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Mes <em className="italic text-[#7B9E87]">Services</em>
        </h1>
        <div className="w-16 h-[1px] bg-gradient-to-r from-[#7B9E87] to-[#C9A84C] mx-auto mb-8" />
        <p
          className="text-[#6B5240] max-w-xl mx-auto text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
        >
          Un accompagnement doux et attentionné pour votre animal, alliant accueil familial,
          soins énergétiques et connexion intuitive.
        </p>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: "🐾",
              title: "Pension Animalière Familiale",
              description:
                "Accueil des animaux dans un cadre familial et bienveillant pendant l'absence de leurs propriétaires. Votre compagnon est traité comme un membre de la famille, dans un environnement chaleureux et sécurisant.",
            },
            {
              icon: "🌿",
              title: "Communication Animale",
              description:
                "Séances de communication intuitive avec les animaux, vivants ou défunts, pour comprendre leurs ressentis, besoins et messages. Une connexion profonde pour renforcer votre lien avec votre animal.",
            },
            {
              icon: "✨",
              title: "Soins Énergétiques",
              description:
                "Soins énergétiques proposés aux animaux pour favoriser leur bien-être physique et émotionnel. Une approche douce qui complète les soins vétérinaires traditionnels.",
            },
            {
              icon: "🌸",
              title: "Fleurs de Bach",
              description:
                "Préparation et utilisation des élixirs floraux de Bach adaptés aux animaux pour rééquilibrer leurs états émotionnels. Un remède naturel au service de l'harmonie intérieure.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-[#F5F0E8] rounded-2xl p-8 border border-[#7B9E87]/20 hover:shadow-lg hover:border-[#7B9E87]/40 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#7B9E87]/15 flex items-center justify-center">
                <span className="text-xl">{service.icon}</span>
              </div>
              <h2
                className="text-2xl font-light text-[#3D2E1E]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {service.title}
              </h2>
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <p
                className="text-[#6B5240] leading-relaxed text-base"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── STAGES – FEATURED CARD ── */}
        <div className="mt-8 bg-[#3D2E1E] rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#7B9E87]/30 flex items-center justify-center shrink-0">
            <span className="text-xl">🌱</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h2
              className="text-2xl font-light text-[#F5F0E8]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Stages
            </h2>
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
            <p
              className="text-[#A8946E] leading-relaxed text-base"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Stages de formation ou d'initiation à la communication animale et au développement
              personnel en lien avec les animaux. Des journées immersives pour approfondir votre
              connexion avec le monde animal.
            </p>
          </div>
          <a
            href="mailto:contact@juliedecoly.fr"
            className="shrink-0 inline-flex items-center gap-2 bg-[#7B9E87] hover:bg-[#5A7A65] text-[#FDFAF5] text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            En savoir plus →
          </a>
        </div>

        {/* ── BON CADEAU ── */}
        <div className="mt-8 bg-[#F5F0E8] rounded-2xl p-8 border border-[#C9A84C]/30 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-[#C9A84C]/15 flex items-center justify-center shrink-0">
            <span className="text-xl">🎁</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h2
              className="text-2xl font-light text-[#3D2E1E]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Bon Cadeau
            </h2>
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
            <p
              className="text-[#6B5240] leading-relaxed text-base"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Offrez à un proche une séance de communication animale, des soins énergétiques ou
              toute autre prestation. Un cadeau unique et attentionné pour les amoureux des animaux.
            </p>
          </div>
          <a
            href="mailto:contact@juliedecoly.fr"
            className="shrink-0 inline-flex items-center gap-2 border border-[#C9A84C] hover:bg-[#C9A84C] text-[#6B5240] hover:text-[#FDFAF5] text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Commander →
          </a>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 px-6 text-center bg-[#F5F0E8]">
        <p
          className="text-[clamp(1.5rem,3vw,2.5rem)] font-light text-[#3D2E1E] mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Des questions sur les tarifs ou les disponibilités ?
        </p>
        <p
          className="text-[#6B5240] mb-10 max-w-md mx-auto"
          style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
        >
          N'hésitez pas à me contacter pour toute question ou pour réserver une séance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@juliedecoly.fr"
            className="inline-flex items-center justify-center gap-2 bg-[#7B9E87] hover:bg-[#5A7A65] text-[#FDFAF5] text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Me contacter →
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-[#7B9E87]/50 hover:border-[#7B9E87] text-[#6B5240] hover:text-[#3D2E1E] text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Retour à l'accueil
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
