import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ClipboardList, Link2, Target, Wand2, Zap } from "lucide-react";
import { motion } from "motion/react";

const steps = [
    {
        number: "01",
        title: "Clasificación Inteligente",
        description: "El agente analiza tu entrada y determina automáticamente si es una pregunta técnica o una solicitud de auditoría formal con Historia de Usuario.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        number: "02",
        title: "Modo Consulta Técnica",
        description: "Si es una pregunta sobre funcionamiento de código, el agente responde directamente identificando errores de scoping, selectores, timing y disparadores en Target.",
        color: "from-purple-500 to-pink-500"
    },
    {
        number: "03",
        title: "Análisis Formal (4 Capítulos)",
        description: "Si es una auditoría HU completa, el agente aplica análisis estructurado del requerimiento, código, diseño y preservación de historial.",
        color: "from-green-500 to-emerald-500"
    },
    {
        number: "04",
        title: "Validación de Estándares",
        description: "Verifica que tu código cumpla estándares innegociables: prohibición de MutationObserver, setInterval con clearInterval, y timers mínimo 500ms.",
        color: "from-orange-500 to-red-500"
    },
    {
        number: "05",
        title: "Reporte Detallado",
        description: "Obtén análisis completo con recomendaciones actionables, diferencias visuales respecto a Figma e historial de cambios para auditoría.",
        color: "from-indigo-500 to-purple-500"
    }
];

export default function UseSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-24 relative">
            {/* Background effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="text-center mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold mb-6 text-center"
                >
                    Cómo Funciona
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                >
                    Target Scan utiliza inteligencia artificial para analizar tus implementaciones a usar en Adobe Target.
                </motion.p>
            </div>

            {/* Timeline steps */}
            <div className="space-y-8 relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                    >
                        <div className="flex items-start gap-6 lg:gap-12">
                            {/* Step indicator */}
                            <div className="flex-shrink-0 hidden lg:block">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-white text-xl shadow-lg`}
                                >
                                    {step.number}
                                </motion.div>
                            </div>

                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex-1 mt-2 lg:mt-0"
                            >
                                <Card className="border border-border/50 hover:border-primary/50 transition-all bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <div className="lg:hidden">
                                                    <span className={`inline-block text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                                                        {step.number}
                                                    </span>
                                                </div>
                                                <CardTitle className="text-2xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                                                    {step.title}
                                                </CardTitle>
                                            </div>
                                            <div className={`hidden sm:block w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} opacity-20`}></div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed text-foreground/70">
                                            {step.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mode comparison */}
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -10 }}
                    className="group"
                >
                    <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 hover:border-blue-500/60 transition-all">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-blue-500"></div>
                                </div>
                                Modo Consulta
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="font-semibold text-sm text-muted-foreground">Para preguntas técnicas inmediatas:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 group/item">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="flex-shrink-0 mt-1"
                                    >
                                        <Wand2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                    </motion.div>
                                    <span className="text-sm leading-relaxed">Respuesta directa y conversacional</span>
                                </li>
                                <li className="flex items-start gap-3 group/item">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="flex-shrink-0 mt-1"
                                    >
                                        <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                    </motion.div>
                                    <span className="text-sm leading-relaxed">Identificación inmediata de errores</span>
                                </li>
                                <li className="flex items-start gap-3 group/item">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="flex-shrink-0 mt-1"
                                    >
                                        <Target className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                    </motion.div>
                                    <span className="text-sm leading-relaxed">Sin formalidades, solución rápida</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="group"
                >
                    <Card className="border-2 border-red-500/30 bg-gradient-to-br from-red-500/10 to-pink-500/5 hover:border-red-500/60 transition-all">
                        <CardHeader>
                            <CardTitle className="text-2xl flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-red-500"></div>
                                </div>
                                Modo Auditoría
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="font-semibold text-sm text-muted-foreground">Para auditorías formales con HU:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 group/item">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="flex-shrink-0 mt-1"
                                    >
                                        <ClipboardList className="w-5 h-5 text-destructive" strokeWidth={1.5} />
                                    </motion.div>
                                    <span className="text-sm leading-relaxed">Análisis 4 capítulos estructurado</span>
                                </li>
                                <li className="flex items-start gap-3 group/item">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="flex-shrink-0 mt-1"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-destructive" strokeWidth={1.5} />
                                    </motion.div>
                                    <span className="text-sm leading-relaxed">Validación contra criterios de aceptación</span>
                                </li>
                                <li className="flex items-start gap-3 group/item">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="flex-shrink-0 mt-1"
                                    >
                                        <Link2 className="w-5 h-5 text-destructive" strokeWidth={1.5} />
                                    </motion.div>
                                    <span className="text-sm leading-relaxed">Reporte completamente trazable</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}