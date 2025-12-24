import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TalentMind - Stratégie RH & Solutions IA",
  description: "Cabinet spécialisé dans le pilotage stratégique des ressources humaines et l'IA.",
};

import ClientLayout from "@/components/layout/client-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cn(outfit.className, "antialiased min-h-screen flex flex-col")}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
