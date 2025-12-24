"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useUI } from "@/context/ui-context";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/solutions", label: "Nos Solutions" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();
    const { toggleMobileMenu, isMobileMenuOpen, closeMobileMenu } = useUI();

    const isHomePage = pathname === "/";

    return (
        <header className={cn(
            "w-full z-40 transition-all duration-300",
            isHomePage
                ? "absolute top-0 bg-transparent border-transparent"
                : "sticky top-0 border-b bg-background/80 backdrop-blur-md"
        )}>
            <div className="w-full max-w-[1400px] mx-auto px-8 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                    <div className="relative h-10 w-10">
                        <Image
                            src="/logo.png"
                            alt="TalentMind Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] bg-clip-text text-transparent">TalentMind</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === link.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button asChild size="sm">
                        <Link href="/contact">Demander une démo</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t bg-background"
                    >
                        <nav className="container flex flex-col gap-4 py-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-primary",
                                        pathname === link.href ? "text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button asChild className="w-full mt-2" onClick={closeMobileMenu}>
                                <Link href="/contact">Demander une démo</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
