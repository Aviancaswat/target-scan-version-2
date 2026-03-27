'use client';

import TargetScanLogo from "@/lib/custom-icons/target-scan-logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b border-muted bg-background sticky top-0 z-50">
            <div className="h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6">
                <Link href={"/"}>
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <div className="text-primary shrink-0">
                            <TargetScanLogo className="h-8 w-8 sm:h-10 sm:w-10" />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <h1 className="text-sm sm:text-lg font-bold text-foreground truncate">Avianca Target Scan</h1>
                            <p className="hidden sm:block text-xs text-muted-foreground truncate">Análisis Inteligente de Adobe Target</p>
                        </div>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-6 ml-8">
                    <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Características
                    </a>
                    <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Cómo funciona
                    </a>
                </nav>

                <button
                    className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>

            {isOpen && (
                <nav className="md:hidden border-t border-muted bg-background/95 backdrop-blur-sm">
                    <div className="px-4 py-3 space-y-2">
                        <a href="#features" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Características
                        </a>
                        <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Cómo funciona
                        </a>
                    </div>
                </nav>
            )}
        </header>
    )
}