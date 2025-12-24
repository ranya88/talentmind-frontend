"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-background">

            <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-b from-neutral-500 to-neutral-800 bg-clip-text text-transparent inline-block"
                    >
                        À propos de nous
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 text-xl leading-relaxed font-light"
                    >
                        Chez <span className="font-semibold text-primary">TalentMind</span>, nous croyons que l'avenir des ressources humaines réside dans la synergie entre l'humain et la technologie.
                        Cabinet pionnier dans le conseil stratégique et l'intégration de solutions IA, nous accompagnons les entreprises dans leur transformation RH.
                        Que ce soit pour optimiser vos processus, recruter les meilleurs talents grâce à nos algorithmes de matching, ou implanter vos filiales au Maroc,
                        nous sommes votre partenaire de confiance pour une croissance durable.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
