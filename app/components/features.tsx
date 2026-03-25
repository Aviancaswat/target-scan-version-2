import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Brain, CheckCircle2, FileCheck, Layers, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
    {
        icon: Brain,
        title: "Clasificación Inteligente",
        description: "Detecta automáticamente si tu consulta es una pregunta técnica o una solicitud de auditoría formal."
    },
    {
        icon: Zap,
        title: "Análisis Rápido de Código",
        description: "Identifica errores de scoping, selectores, timing y disparadores en implementaciones Adobe Target."
    },
    {
        icon: AlertCircle,
        title: "Prevención de Memory Leaks",
        description: "Valida setInterval/clearInterval y detecta uso prohibido de MutationObserver en SPA."
    },
    {
        icon: CheckCircle2,
        title: "Cumplimiento de Estándares",
        description: "Verifica que tu código siga los estándares técnicos innegociables de Avianca."
    },
    {
        icon: Layers,
        title: "Auditoría de 4 Capítulos",
        description: "Análisis formal del requerimiento, código, diseño y preservación de historial."
    },
    {
        icon: FileCheck,
        title: "Comparativa Desarrollo vs Figma",
        description: "Identifica diferencias visuales entre implementación y diseño original."
    }
];

export default function FeaturesSection() {
    return (
        <section className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Características Destacadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                                <CardHeader>
                                    <div className="mb-4">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    )
}