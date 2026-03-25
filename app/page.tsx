import { Button } from "@/components/animate-ui/components/buttons/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-background">
            {/* Hero Section */}
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                <div className="grid place-content-center h-full relative z-10">
                    <div className="grid place-content-center max-w-2xl text-center gap-4">
                        <div className="flex justify-center">
                            <Badge variant="outline" className={cn("px-4 py-3 text-sm backdrop-blur-sm")}>
                                🎉 Por Avianca Evolutivos
                            </Badge>
                        </div>
                        <h1 className="text-5xl font-bold leading-tight">
                            Implementaciones de Adobe Target sin errores
                        </h1>
                        <p className="text-xl mt-4 text-muted-foreground">
                            Detecta problemas en tu código antes de ir a producción.
                            Análisis inteligente que te ahorra tiempo y previene fallos.
                        </p>
                        <div className="flex gap-3 justify-center pt-4">
                            <Button
                                className="cursor-pointer"
                                variant={"default"}
                                size="lg"
                            >
                                Comenzar análisis
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}