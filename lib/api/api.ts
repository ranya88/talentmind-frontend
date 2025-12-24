import { PILLARS, SOLUTIONS, Pillar, Solution } from "@/lib/data";

export async function getPillars(): Promise<Pillar[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return PILLARS;
}

export async function getSolutions(): Promise<Solution[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return SOLUTIONS;
}

export interface ContactFormData {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    need: string;
    message: string;
}

export async function submitContact(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Une erreur est survenue");
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}
