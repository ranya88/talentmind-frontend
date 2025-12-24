import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/20">
            <div className="w-full max-w-[1400px] mx-auto px-8 py-10 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                                T
                            </div>
                            <span className="text-xl font-bold text-foreground">TalentMind</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Votre partenaire stratégique pour l'excellence RH. Nous combinons expertise humaine et puissance de l'IA pour transformer votre gestion des talents.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Entreprise</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">À propos</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Carrières</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Légal</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Mentions légales</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Politique de confidentialité</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">CGU</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
                    © {currentYear} TalentMind. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
