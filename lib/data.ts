export interface Pillar {
    id: string;
    title: string;
    description: string;
    icon: string; // We'll stick to string identifiers for icons
}

export interface Solution {
    id: string;
    title: string;
    description: string;
    features: string[];
}

export const PILLARS: Pillar[] = [
    {
        id: "consulting",
        title: "Conseil RH",
        description: "Stratégies sur-mesure pour optimiser votre capital humain et aligner vos RH avec vos objectifs business.",
        icon: "Users",
    },
    {
        id: "hub",
        title: "TalentMind Hub",
        description: "Plateforme intelligente de recrutement et de gestion des talents propulsée par l'IA.",
        icon: "Brain",
    },
    {
        id: "expansion",
        title: "Accompagnement Filiales",
        description: "Support complet pour l'implantation et la gestion de vos filiales au Maroc.",
        icon: "Globe",
    },
];

export const SOLUTIONS: Solution[] = [
    {
        id: "strategy",
        title: "Stratégies Capital Humain",
        description: "Audit, conseil et mise en œuvre de politiques RH performantes.",
        features: ["Audit organisationnel", "Gestion des compétences", "Plans de succession", "Politique de rémunération"],
    },
    {
        id: "digital",
        title: "TalentMind Digital Hub",
        description: "Une suite d'outils interconnectés pour moderniser vos processus RH.",
        features: ["CVthèque Intelligente", "Matching I.A.", "Tableaux de bord RH", "Gestion des entretiens"],
    },
    {
        id: "morocco",
        title: "Implantation Maroc",
        description: "Votre partenaire de confiance pour réussir votre installation au Maroc.",
        features: ["Création juridique", "Recrutement initial", "Gestion administrative", "Portage salarial"],
    },
];
