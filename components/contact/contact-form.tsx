"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useUI } from "@/context/ui-context";
import { submitContact, ContactFormData } from "@/lib/api/api";
import { Button } from "@/components/ui/button";

export function ContactForm() {
    const { formStatus, setFormStatus, addNotification } = useUI();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setFormStatus("loading");
        try {
            const response = await submitContact(data);
            if (response.success) {
                setFormStatus("success");
                addNotification("success", response.message || "Message envoyé avec succès !");
                reset();
            } else {
                throw new Error(response.message || "Erreur lors de l'envoi.");
            }
        } catch (error: any) {
            setFormStatus("error");
            addNotification("error", error.message || "Impossible d'envoyer le message.");
        } finally {
            // Reset status after a delay to allow re-submission if needed, or keep success state visible
            setTimeout(() => setFormStatus("idle"), 3000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-6 md:p-8 rounded-xl shadow-lg border"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Nom complet *</label>
                        <input
                            id="name"
                            {...register("name", { required: "Ce champ est requis" })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Jean Dupont"
                        />
                        {errors.name && <span className="text-destructive text-sm">{errors.name.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">Entreprise</label>
                        <input
                            id="company"
                            {...register("company")}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Votre société"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email professionnel *</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Ce champ est requis",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Adresse email invalide"
                                }
                            })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="jean@entreprise.com"
                        />
                        {errors.email && <span className="text-destructive text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                        <input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="+33 6 12 34 56 78"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="need" className="text-sm font-medium">Type de besoin</label>
                    <select
                        id="need"
                        {...register("need")}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="demo">Demander une démo</option>
                        <option value="consulting">Conseil RH</option>
                        <option value="recruitment">Recrutement / TalentMind Hub</option>
                        <option value="morocco">Implantation Maroc</option>
                        <option value="other">Autre</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <textarea
                        id="message"
                        rows={4}
                        {...register("message", { required: "Ce champ est requis" })}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Dites-nous en plus sur votre projet..."
                    />
                    {errors.message && <span className="text-destructive text-sm">{errors.message.message}</span>}
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={formStatus === "loading"}>
                    {formStatus === "loading" ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi en cours...
                        </>
                    ) : (
                        <>
                            Envoyer <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>
        </motion.div>
    );
}
