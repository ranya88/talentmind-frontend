import ReferencesPageClient from "@/components/references/references-page";

export const metadata = {
    title: "Références | TalentMind",
    description: "Découvrez les entreprises qui font confiance à TalentMind pour leur stratégie RH.",
};

export default function ReferencesPage() {
    return (
        <main className="min-h-screen bg-background">
            <ReferencesPageClient />
        </main>
    );
}
