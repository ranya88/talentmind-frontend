import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Basic server-side validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Veuillez remplir tous les champs obligatoires." },
                { status: 400 }
            );
        }

        // Simulate database/email processing delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Randomly fail for testing error handling (optional, maybe keep it stable for the user)
        // if (Math.random() < 0.1) {
        //   throw new Error("Erreur serveur simulée");
        // }

        return NextResponse.json({ success: true, message: "Votre message a été envoyé avec succès." });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Une erreur interne est survenue. Veuillez réessayer plus tard." },
            { status: 500 }
        );
    }
}
