import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { useTargetScanStore } from "@/store/target-scan-store";
import TextareaCustom from "./textarea-custom";

interface WelcomeChatProps {
    onSubmit: (content: string) => Promise<void>
    onCancel?: () => void
}

export default function WelcomeChat({ onSubmit, onCancel }: WelcomeChatProps) {

    const { userName } = useTargetScanStore()

    return (
        <div className="w-full max-w-4xl mx-auto">
            <TextAnimate
                animation='scaleUp'
                duration={0.6}
                className={cn("text-3xl md:text-5xl font-medium mb-8 text-center")}
                children={`Hola de nuevo ${userName}!`}
            />
            <div className="animate-in fade-in duration-700 w-full">
                <TextareaCustom
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                />
            </div>
        </div>
    )
}