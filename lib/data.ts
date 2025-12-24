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

export interface ClientReference {
    id: string;
    name: string;
    logo: string;
    industry: string;
}

export interface Testimonial {
    id: string;
    author: string;
    role: string;
    company: string;
    content: string;
}

export const CLIENTS: ClientReference[] = [
    { id: "1", name: "TechMaroc", logo: "/logos/techmaroc.png", industry: "Technologie" },
    { id: "2", name: "Banque Atlantique", logo: "/logos/banque.png", industry: "Finance" },
    { id: "3", name: "Global Industries", logo: "/logos/global.png", industry: "Industrie" },
    { id: "4", name: "StartUp Valley", logo: "/logos/startup.png", industry: "Innovation" },
    { id: "5", name: "HealthCare Plus", logo: "/logos/health.png", industry: "Santé" },
    { id: "6", name: "EcoEnergy", logo: "/logos/eco.png", industry: "Énergie" },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "1",
        author: "Karim Benjelloun",
        role: "DRH",
        company: "TechMaroc",
        content: "TalentMind a transformé notre approche du recrutement. L'IA nous a permis de diviser par deux le temps de sourcing tout en améliorant la qualité des profils."
    },
    {
        id: "2",
        author: "Sarah Idrissi",
        role: "Directrice Générale",
        company: "StartUp Valley",
        content: "L'accompagnement stratégique pour notre implantation au Maroc a été exemplaire. Une expertise locale combinée à une vision globale."
    },
    {
        id: "3",
        author: "Mehdi Tazi",
        role: "Responsable Innovation",
        company: "Banque Atlantique",
        content: "Les solutions d'automatisation proposées par TalentMind sont d'une efficacité redoutable. Un partenaire incontournable pour la transformation digitale RH."
    }
];
