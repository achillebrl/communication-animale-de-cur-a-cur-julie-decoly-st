import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Julie Decoly",
  description: "Pension animalière familiale proposant également des services de communication animale, soins énergétiques et Fleurs de ",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation activePage="services" />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
      </section>
      <section className="py-16 px-6 max-w-5xl mx-auto">
<section className="bg-[var(--color-warm-white)] py-20 px-6" data-animate="fade-in">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <p className="text-[var(--color-gold)] font-[var(--font-accent)] tracking-widest uppercase text-sm mb-4">
      Ce que je propose
    </p>
    <h1 className="font-[var(--font-display)] text-5xl text-[var(--color-deep-moss)] leading-tight mb-6">
      Mes Services
    </h1>
    <div className="w-16 h-px bg-[var(--color-sage-dark)] mx-auto mb-6" />
    <p className="font-[var(--font-body)] text-[var(--color-bark)] text-lg max-w-2xl mx-auto leading-relaxed">
      Chaque animal mérite d'être entendu, respecté et accompagné avec douceur. Découvrez les différentes façons dont je peux vous aider, vous et votre compagnon.
    </p>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-sage-light)] hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4" data-animate="fade-up">
      <div className="w-10 h-10 rounded-full bg-[var(--color-mist)] flex items-center justify-center">
        <span className="text-[var(--color-sage-dark)] text-xl">✦</span>
      </div>
      <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-deep-moss)]">
        Communication animale
      </h2>
      <p className="font-[var(--font-body)] text-[var(--color-bark)] leading-relaxed text-base">
        Séances de communication intuitive avec les animaux, vivants ou défunts, pour mieux comprendre leurs besoins et renforcer le lien avec leur maître.
      </p>
      <a href="/contact" className="mt-auto inline-block text-sm font-[var(--font-body)] text-[var(--color-sage-dark)] hover:text-[var(--color-deep-moss)] transition-colors underline underline-offset-4">
        En savoir plus →
      </a>
    </div>

    <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-sage-light)] hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4" data-animate="fade-up">
      <div className="w-10 h-10 rounded-full bg-[var(--color-mist)] flex items-center justify-center">
        <span className="text-[var(--color-sage-dark)] text-xl">✦</span>
      </div>
      <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-deep-moss)]">
        Soins énergétiques
      </h2>
      <p className="font-[var(--font-body)] text-[var(--color-bark)] leading-relaxed text-base">
        Soins de bien-être énergétique proposés aux animaux pour favoriser leur équilibre intérieur et leur sérénité.
      </p>
      <a href="/contact" className="mt-auto inline-block text-sm font-[var(--font-body)] text-[var(--color-sage-dark)] hover:text-[var(--color-deep-moss)] transition-colors underline underline-offset-4">
        En savoir plus →
      </a>
    </div>

    <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-sage-light)] hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4" data-animate="fade-up">
      <div className="w-10 h-10 rounded-full bg-[var(--color-mist)] flex items-center justify-center">
        <span className="text-[var(--color-sage-dark)] text-xl">✦</span>
      </div>
      <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-deep-moss)]">
        Fleurs de Bach
      </h2>
      <p className="font-[var(--font-body)] text-[var(--color-bark)] leading-relaxed text-base">
        Utilisation des élixirs floraux de Bach pour accompagner les animaux et leurs propriétaires sur le plan émotionnel, avec douceur et bienveillance.
      </p>
      <a href="/contact" className="mt-auto inline-block text-sm font-[var(--font-body)] text-[var(--color-sage-dark)] hover:text-[var(--color-deep-moss)] transition-colors underline underline-offset-4">
        En savoir plus →
      </a>
    </div>

    <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-sage-light)] hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4" data-animate="fade-up">
      <div className="w-10 h-10 rounded-full bg-[var(--color-mist)] flex items-center justify-center">
        <span className="text-[var(--color-sage-dark)] text-xl">✦</span>
      </div>
      <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-deep-moss)]">
        Pension animalière familiale
      </h2>
      <p className="font-[var(--font-body)] text-[var(--color-bark)] leading-relaxed text-base">
        Accueil des animaux dans un cadre familial et bienveillant durant l'absence de leurs maîtres, pour un séjour en toute quiétude.
      </p>
      <a href="/contact" className="mt-auto inline-block text-sm font-[var(--font-body)] text-[var(--color-sage-dark)] hover:text-[var(--color-deep-moss)] transition-colors underline underline-offset-4">
        En savoir plus →
      </a>
    </div>

    <div className="md:col-span-2 bg-[var(--color-mist)] rounded-2xl p-8 border border-[var(--color-sage)] hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4" data-animate="fade-up">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
        <span className="text-[var(--color-sage-dark)] text-xl">✦</span>
      </div>
      <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-deep-moss)]">
        Stages
      </h2>
      <p className="font-[var(--font-body)] text-[var(--color-bark)] leading-relaxed text-base max-w-2xl">
        Stages autour de la communication animale et du développement personnel — pour approfondir votre lien avec les animaux et votre propre chemin intérieur.
      </p>
      <a href="/contact" className="mt-auto inline-block text-sm font-[var(--font-body)] text-[var(--color-sage-dark)] hover:text-[var(--color-deep-moss)] transition-colors underline underline-offset-4">
        En savoir plus →
      </a>
    </div>

  </div>

  <div className="max-w-xl mx-auto mt-20 text-center" data-animate="fade-up">
    <p className="font-[var(--font-body)] text-[var(--color-earth)] text-base mb-6">
      Vous souhaitez en savoir plus ou réserver une séance ?
    </p>
    <a
      href="/contact"
      className="inline-block bg-[var(--color-deep-moss)] text-[var(--color-cream)] font-[var(--font-body)] text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-[var(--color-sage-dark)] transition-colors duration-300"
    >
      Me contacter
    </a>
  </div>
</section>
      </section>
      <Footer />
    </main>
  );
}
