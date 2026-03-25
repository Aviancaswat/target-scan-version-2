import { Heart } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background border-t border-muted mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
                <div className="flex justify-center items-center">
                    <div className="text-sm text-muted-foreground">
                        <p className="text-center!">© {currentYear} Avianca. Hecho con <Heart className="inline h-4 w-4 text-red-500 mx-1" /> por el equipo de Evolutivos.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}