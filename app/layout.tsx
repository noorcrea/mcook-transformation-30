import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "M COOK TRANSFORMATION 30 — Challenge 30 Jours",
  description: "Perds du gras, reprends le contrôle et construis une routine saine en 30 jours. Sans salle de sport.",
  openGraph: { title: "M COOK TRANSFORMATION 30", description: "Challenge 30 jours perte de gras", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="fr"><body>{children}</body></html>);
}
