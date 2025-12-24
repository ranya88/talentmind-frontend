import { Metadata } from "next";
import HomePage from "@/components/home/home-page";

export const metadata: Metadata = {
  title: "Accueil | TalentMind - Conseil RH & IA",
  description: "TalentMind transforme votre gestion du capital humain grâce à l'intelligence artificielle et au conseil stratégique.",
};

export default function Page() {
  return <HomePage />;
}
