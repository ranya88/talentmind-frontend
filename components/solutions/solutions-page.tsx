"use client";

import useSWR from "swr";
import { getSolutions } from "@/lib/api/api";
import { Solution } from "@/lib/data";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import Image from "next/image";


export default function SolutionsPageClient() {
    const { data: solutions, error, isLoading } = useSWR<Solution[]>("solutions", getSolutions);

    if (isLoading) {
        return (
            <div className="h-[50vh] flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-[50vh] flex items-center justify-center text-red-500">
                Une erreur est survenue lors du chargement des solutions.
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen pb-16">
            {/* Header Section */}
            <section className="bg-muted/30 py-16 md:py-24 mb-12">
                <div className="w-full max-w-[1400px] mx-auto px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4"
                    >
                        <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">
                            Nos Solutions
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Des outils innovants et un accompagnement expert pour répondre à tous vos défis RH.
                    </motion.p>
                </div>
            </section>

            {/* Alternating Layout */}
            <div className="w-full max-w-[1400px] mx-auto px-8 space-y-32">
                {solutions?.map((solution, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={solution.id}
                            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                        >
                            {/* Visual Section: Typographic & Geometric */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted/5 border border-[#8b5cf6]/20 shadow-[0_0_30px_-10px_rgba(139,92,246,0.15)] hover:border-[#8b5cf6]/50 hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)] transition-all duration-500">
                                    {/* Custom Background Image for First Item (Audit) */}
                                    {index === 0 && (
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src="/images/solutions-audit-bg.jpg"
                                                alt="Audit Background"
                                                fill
                                                className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/50 backdrop-blur-[0px]" />
                                        </div>
                                    )}

                                    {/* Custom Background Image for Second Item (Management) */}
                                    {index === 1 && (
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src="/images/solutions-management-bg.jpg"
                                                alt="Management Background"
                                                fill
                                                className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/50 backdrop-blur-[0px]" />
                                        </div>
                                    )}

                                    {/* Custom Background Image for Third Item (Morocco) */}
                                    {index === 2 && (
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src="/images/solutions-morocco-bg.jpg"
                                                alt="Morocco Background"
                                                fill
                                                className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/50 backdrop-blur-[0px]" />
                                        </div>
                                    )}

                                    {/* Permanent Gradient Wash - Logo Theme (Hidden for items with images) */}
                                    {index > 2 && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/10 to-[#8b5cf6]/10 opacity-100 transition-opacity duration-500" />
                                    )}

                                    {/* Large Typographic Background */}
                                    <div className="absolute top-8 left-8">
                                        <span className={`text-[10rem] leading-none font-bold font-mono tracking-tighter select-none transition-colors duration-500 ${index <= 2 ? 'text-white/20' : 'text-foreground/5 group-hover:text-primary/10'}`}>
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Minimalist Geometric Lines */}
                                    <div className={`absolute bottom-8 right-8 w-16 h-16 border-b border-r transition-colors duration-500 ${index <= 2 ? 'border-white/50' : 'border-primary/20 group-hover:border-primary/50'}`} />

                                    {/* Centered Minimal Title for Visual Context */}
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <h3 className={`text-3xl md:text-5xl tracking-tighter transition-colors duration-500 text-center ${index <= 2 ? 'font-bold text-white drop-shadow-lg scale-105' : 'font-extralight text-foreground/80 group-hover:text-primary'}`}>
                                            {solution.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Text / Description Section */}
                            <motion.div
                                className="w-full lg:w-1/2 space-y-8"
                                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                <div>
                                    {/* Removed Pill Badge */}
                                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                                        {solution.title}
                                    </h2>
                                    <div className="w-16 h-0.5 bg-primary/30 mb-8" />
                                    <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                        {solution.description}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid sm:grid-cols-1 gap-y-4">
                                        {solution.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-4 group/item">
                                                <div className="h-px w-6 bg-border group-hover/item:w-10 group-hover/item:bg-primary transition-all duration-300" />
                                                <span className="text-lg text-foreground/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <div className="inline-flex items-center gap-3 text-lg font-medium cursor-pointer text-foreground hover:text-primary transition-colors group/btn">
                                        En savoir plus
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
