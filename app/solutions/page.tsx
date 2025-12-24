import { Metadata } from "next";
import SolutionsPageClient from "@/components/solutions/solutions-page";

export const metadata: Metadata = {
    title: "Nos Solutions | TalentMind",
    description: "Découvrez nos solutions : Conseil RH, TalentMind Hub, et Accompagnement Filiales au Maroc.",
};

export default function Page() {
    return <SolutionsPageClient />;
}
