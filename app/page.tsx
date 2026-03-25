'use client'

import { Button } from "@/components/animate-ui/components/buttons/button";
import AnalysisAnimation3D from "@/components/custom-animations/AnalysisAnimation3D";
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import FeaturesSection from "./components/features";
import UseSection from "./components/use";

export default function HomePage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-background">
            <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-between pt-20 md:pt-10 pb-8">
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
                    <div className="space-y-10 lg:space-y-5">
                        <div className="flex justify-center lg:justify-start">
                            <Badge variant="outline" className={cn("px-4 py-4 text-sm backdrop-blur-sm w-fit")}>
                                <Badge className="mr-1">Nueva versión 🎉</Badge> Por Avianca Evolutivos
                            </Badge>
                        </div>
                        <TextAnimate
                            className={cn("text-4xl lg:text-6xl font-bold leading-tight text-center lg:text-left")}
                            as="h1"
                            animation="blurInUp"
                            duration={1}
                            by="word"
                        >
                            Implementaciones de Adobe Target sin bugs
                        </TextAnimate>
                        <TextAnimate
                            as="p"
                            className={cn("text-lg text-muted-foreground max-w-lg text-center lg:text-left mx-auto lg:mx-0")}
                            animation="slideDown"
                            duration={1}
                            delay={0.7}
                            by="line"
                        >
                            Valida tu código antes de producción. Detecta errores,
                            inconsistencias y malas prácticas automáticamente.
                        </TextAnimate>
                        <div className="flex justify-center lg:justify-start">
                            <Button
                                className={cn("cursor-pointer w-full lg:w-fit mt-1 flex items-center justify-center lg:justify-start")}
                                variant={"default"}
                                size="lg"
                                onClick={() => toast("Esta funcionalidad se encuentra en desarrollo", {
                                    description: "No sea avaricioso! Cálmese mi herman@",
                                    position: "top-center",
                                    action: {
                                        label: "Entendido",
                                        onClick: () => toast.dismiss()
                                    }
                                })}
                            >
                                Comenzar análisis
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                    </div>

                    <div className="hidden lg:flex justify-center h-96">
                        <div className="w-full h-full">
                            <AnalysisAnimation3D />
                        </div>
                    </div>
                </div>
            </section>
            <section id="features">
                <FeaturesSection />
            </section>
            <section id="how-it-works">
                <UseSection />
            </section>
        </div>
    );
}