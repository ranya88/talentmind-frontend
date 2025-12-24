"use client";

import { ContactForm } from "@/components/contact/contact-form";
import { motion } from "framer-motion";

export default function ContactPageClient() {
    return (
        <div className="bg-background min-h-screen pb-16">
            <section className="relative bg-muted/30 py-16 md:py-24 mb-12 overflow-hidden">
                {/* Subtle decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-50" />

                <div className="w-full max-w-[1400px] mx-auto px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-black to-neutral-500 bg-clip-text text-transparent"
                    >
                        Contactez-nous
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Prêt à transformer votre gestion RH ? Nos experts sont à votre écoute.
                    </motion.p>
                </div>
            </section>

            <div className="w-full max-w-[1400px] mx-auto px-8">
                <div className="max-w-3xl mx-auto">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
