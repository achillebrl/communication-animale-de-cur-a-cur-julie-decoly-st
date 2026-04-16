import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Italiana } from "next/font/google";
import "./globals.css";
import ScrollAnimator from "@/components/ScrollAnimator";

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
  title: "Julie Decoly — Pension Animalière Familiale",
  description:
    "Julie Decoly propose une pension animalière familiale ainsi que des services de communication animale, soins énergétiques et Fleurs de Bach pour les animaux.",
  keywords:
    "pension animalière, communication animale, soins énergétiques, fleurs de Bach, Julie Decoly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cormorant.variable} ${jost.variable} ${italiana.variable}`}
      >
        <ScrollAnimator />
        {children}
      </body>
    </html>
  );
}