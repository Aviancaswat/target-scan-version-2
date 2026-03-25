import { Button } from "@/components/animate-ui/components/buttons/button";
import AnalysisAnimation3D from "@/components/custom-animations/aniamcionOne";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-background">
            {/* Hero Section with 3D Animation */}
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                {/* 3D Background Animation */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            maskImage: 'radial-gradient(circle at center, transparent 0%, transparent 25%, black 100%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, transparent 0%, transparent 25%, black 100%)'
                        }}
                    >
                        <AnalysisAnimation3D />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 max-w-6xl mx-auto px-4">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="flex justify-start">
                            <Badge variant="outline" className={cn("px-4 py-3 text-sm backdrop-blur-sm w-fit")}>
                                🎉 Por Avianca Evolutivos
                            </Badge>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                            Implementaciones de Adobe Target sin errores
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-lg">
                            Detecta problemas en tu código antes de ir a producción.
                            Análisis inteligente que te ahorra tiempo y previene fallos.
                        </p>
                        <Button
                            className="cursor-pointer w-fit"
                            variant={"default"}
                            size="lg"
                        >
                            Comenzar análisis
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Right 3D Animation */}
                    <div className="hidden lg:flex justify-center h-96">
                        <div className="w-full h-full">
                            <AnalysisAnimation3D />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}