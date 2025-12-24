"use client";

import { ContactForm } from "@/components/contact/contact-form";
import { motion } from "framer-motion";

export default function ContactPageClient() {
    return (
        <div className="bg-background min-h-screen pb-16">
            <section className="bg-muted/30 py-16 md:py-24 mb-12">
                <div className="w-full max-w-[1400px] mx-auto px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4"
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
