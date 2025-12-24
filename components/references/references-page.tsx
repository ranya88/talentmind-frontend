"use client";

import { useState, useEffect } from "react";

import useSWR from "swr";
import { getClients, getTestimonials } from "@/lib/api/api";
import { ClientReference, Testimonial } from "@/lib/data";
import { motion } from "framer-motion";
import { Loader2, Quote, ArrowDown, ChevronsDown } from "lucide-react";

import Image from "next/image";

export default function ReferencesPageClient() {
    const { data: clients, isLoading: clientsLoading } = useSWR<ClientReference[]>("clients", getClients);
    const { data: testimonials, isLoading: testimonialsLoading } = useSWR<Testimonial[]>("testimonials", getTestimonials);

    const isLoading = clientsLoading || testimonialsLoading;
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowArrow(false);
            } else {
                setShowArrow(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isLoading) {
        return (
            <div className="h-[50vh] flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Hero Section with Background Image */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark overlay */}
                    <Image
                        src="/images/references-hero-3.jpg"
                        alt="Bureau TalentMind"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="w-full max-w-[1400px] mx-auto px-8 text-center relative z-20 pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white"
                    >
                        <span className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">Nos Références</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto font-light"
                    >
                        Ils nous font confiance pour transformer leur capital humain.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: showArrow ? 1 : 0,
                        y: showArrow ? [0, 10, 0] : 0
                    }}
                    transition={{
                        opacity: { duration: 0.3 },
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                        }
                    }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer hover:opacity-100 transition-opacity"
                    style={{ pointerEvents: showArrow ? "auto" : "none" }}
                >
                    <ChevronsDown className="h-10 w-10 animate-pulse" strokeWidth={1.5} />
                </motion.div>
            </section>

            {/* Clients Marquee - Full Width */}
            <section className="py-16 mb-32 overflow-hidden bg-muted/5 border-y border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-12 bg-gradient-to-b from-black to-neutral-500 bg-clip-text text-transparent">
                    Entreprises Partenaires
                </h2>

                <div className="flex">
                    <motion.div
                        className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {/* Duplicate lists for seamless loop */}
                        {[...clients || [], ...clients || []].map((client, index) => (
                            <div
                                key={`${client.id}-${index}`}
                                className="flex flex-col items-center justify-center min-w-[200px] grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-default"
                            >
                                {/* Placeholder for Logo */}
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent truncate max-w-[250px]">
                                    {client.name}
                                </div>
                                <span className="text-xs text-muted-foreground mt-2">{client.industry}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <div className="w-full max-w-[1400px] mx-auto px-8 space-y-32">
                {/* Testimonials */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 text-center bg-gradient-to-b from-black to-neutral-500 bg-clip-text text-transparent"
                    >
                        Ce qu'ils disent de nous
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials?.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <Quote className="absolute top-8 left-8 h-8 w-8 text-primary/20" />

                                <blockquote className="relative z-10 mt-6 text-lg text-muted-foreground leading-relaxed italic">
                                    "{testimonial.content}"
                                </blockquote>

                                <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                                    <div>
                                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
