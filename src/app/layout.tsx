import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Italiana } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Julie Decoly — Pension Animalière & Bien-être Animal",
  description:
    "Pension animalière familiale proposant des services de communication animale, soins énergétiques et Fleurs de Bach pour le bien-être des animaux et de leurs maîtres.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${jost.variable} ${italiana.variable}`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}