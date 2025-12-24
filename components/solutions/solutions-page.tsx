"use client";

import { useState } from "react";
import useSWR from "swr";
import { getSolutions } from "@/lib/api/api";
import { Solution } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ArrowRight, X } from "lucide-react";
import Image from "next/image";


export default function SolutionsPageClient() {
    const { data: solutions, error, isLoading } = useSWR<Solution[]>("solutions", getSolutions);
    const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);

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
                                    <button
                                        onClick={() => {
                                            setSelectedSolution(solution);
                                            setTimeout(() => setIsFlipped(true), 100);
                                        }}
                                        className="inline-flex items-center gap-3 text-lg font-medium cursor-pointer text-foreground hover:text-primary transition-colors group/btn"
                                    >
                                        En savoir plus
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Modal with Card Flip */}
            <AnimatePresence>
                {selectedSolution && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        onClick={() => {
                            setIsFlipped(false);
                            setTimeout(() => setSelectedSolution(null), 600);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl"
                            style={{ perspective: "2000px" }}
                        >
                            <motion.div
                                animate={{ rotateY: isFlipped ? 180 : 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                style={{
                                    transformStyle: "preserve-3d",
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "16/10"
                                }}
                            >
                                {/* Front of Card */}
                                <div
                                    style={{
                                        backfaceVisibility: "hidden",
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    className="rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={`/images/solutions-${selectedSolution.id === '1' ? 'audit' : selectedSolution.id === '2' ? 'management' : 'morocco'}-bg.jpg`}
                                            alt={selectedSolution.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
                                            <h2 className="text-5xl font-bold mb-4 text-center drop-shadow-lg">
                                                {selectedSolution.title}
                                            </h2>
                                            <p className="text-xl text-center text-gray-200 max-w-2xl">
                                                {selectedSolution.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Back of Card */}
                                <div
                                    style={{
                                        backfaceVisibility: "hidden",
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        transform: "rotateY(180deg)"
                                    }}
                                    className="rounded-3xl overflow-hidden shadow-2xl bg-white"
                                >
                                    <div className="relative w-full h-full overflow-y-auto p-12">
                                        <button
                                            onClick={() => {
                                                setIsFlipped(false);
                                                setTimeout(() => setSelectedSolution(null), 600);
                                            }}
                                            className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                                        >
                                            <X className="h-6 w-6 text-gray-700" />
                                        </button>

                                        <h2 className="text-4xl font-bold mb-6 text-foreground pr-16">
                                            {selectedSolution.title}
                                        </h2>

                                        <div className="prose prose-lg max-w-none">
                                            <h3 className="text-2xl font-semibold mb-4 text-foreground">Description Complète</h3>
                                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                                Cette solution offre un accompagnement personnalisé pour transformer vos processus RH.
                                                Notre équipe d'experts vous guide à chaque étape, de l'audit initial à la mise en œuvre complète.
                                                Nous combinons méthodologie éprouvée et technologies de pointe pour garantir des résultats mesurables et durables.
                                            </p>

                                            <h3 className="text-2xl font-semibold mb-4 text-foreground">Fonctionnalités Clés</h3>
                                            <ul className="space-y-3 mb-8">
                                                {selectedSolution.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                                        <span className="text-foreground/90">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                                                    <h4 className="font-semibold text-foreground mb-3 text-lg">Avantages</h4>
                                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                                        <li>✓ Gain de temps significatif</li>
                                                        <li>✓ ROI mesurable sous 6 mois</li>
                                                        <li>✓ Support et formation continue</li>
                                                        <li>✓ Méthodologie éprouvée</li>
                                                    </ul>
                                                </div>
                                                <div className="p-6 bg-muted/30 rounded-xl border border-border">
                                                    <h4 className="font-semibold text-foreground mb-3 text-lg">Démarche</h4>
                                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                                        <li>1. Diagnostic initial (2 semaines)</li>
                                                        <li>2. Plan d'action personnalisé</li>
                                                        <li>3. Mise en œuvre (1-3 mois)</li>
                                                        <li>4. Suivi et optimisation continue</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
