"use client";

import useSWR from "swr";
import { getPillars } from "@/lib/api/api";
import { Pillar } from "@/lib/data"; // Import type
import { motion } from "framer-motion";
import { Users, Brain, Globe, Loader2 } from "lucide-react";

// Map icon strings to components
const iconMap: Record<string, any> = {
    Users: Users,
    Brain: Brain,
    Globe: Globe,
};

export function Pillars() {
    const { data: pillars, error, isLoading } = useSWR<Pillar[]>("pillars", getPillars);

    if (isLoading) {
        return (
            <div className="py-24 flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (error) {
        return <div className="py-24 text-center text-red-500">Erreur lors du chargement des piliers.</div>;
    }

    return (
        <section className="relative py-16 md:py-24 bg-primary/5 overflow-hidden mb-16 md:mb-24">
            {/* Inner Spotlight Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
                <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl md:text-5xl bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent pb-2">
                    Nos Piliers d'Excellence
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars?.map((pillar, index) => {
                        return (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                                className="group relative h-full"
                            >
                                {/* Card background slightly adjusted for inside-block contrast */}
                                <div className="h-full p-10 bg-background/40 border border-white/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden flex flex-col justify-end min-h-[400px] rounded-2xl">
                                    {/* Large Typographic Background Element */}
                                    <div className="absolute top-4 left-6">
                                        <span className="text-[12rem] leading-none font-bold text-foreground/5 font-mono tracking-tighter select-none group-hover:text-primary/10 transition-colors duration-500">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Geometric Accent Line */}
                                    <div className="w-12 h-0.5 bg-primary/20 mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />

                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-light tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                                            {pillar.title}
                                        </h3>

                                        <p className="text-muted-foreground leading-relaxed text-lg font-light">
                                            {pillar.description}
                                        </p>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}
