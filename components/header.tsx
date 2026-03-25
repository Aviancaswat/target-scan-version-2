
import TargetScanLogo from "@/lib/custom-icons/target-scan-logo";

export default function Header(){
    return (
        <header className="w-full h-16 flex items-center justify-between border-b border-muted px-6 bg-background">
            <div className="flex items-center gap-3">
                <div className="text-primary">
                    <TargetScanLogo className="h-10 w-10" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold text-foreground">Avianca Target Scan</h1>
                    <p className="text-xs text-muted-foreground">Análisis Inteligente de desarrollos con Adobe Target</p>
                </div>
            </div>
        </header>
    )
}