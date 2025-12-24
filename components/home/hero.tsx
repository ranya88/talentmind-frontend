"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay for readability */}
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-8 py-20 relative z-10">
                <div className="flex flex-col items-center gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                                L'excellence RH,
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]">
                                Propulsée par l'Intelligence
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                    >
                        TalentMind redéfinit la gestion du capital humain. Du conseil stratégique à l'intégration de solutions IA innovantes, nous transformons votre potentiel en performance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button size="lg" asChild className="gap-2">
                            <Link href="/contact">
                                Demander une démo <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Parler à un expert</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
