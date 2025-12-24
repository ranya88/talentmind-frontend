import { Metadata } from "next";
import ContactPageClient from "@/components/contact/contact-page";

export const metadata: Metadata = {
    title: "Contactez-nous | TalentMind",
    description: "Discutez avec nos experts pour vos besoins en stratégie RH, recrutement et solutions IA.",
};

export default function Page() {
    return <ContactPageClient />;
}
