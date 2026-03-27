import { Button } from "@/components/animate-ui/components/buttons/button";
import { IconButton } from "@/components/animate-ui/components/buttons/icon";
import { Card } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import TextArea from "antd/es/input/TextArea";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { FaStop } from "react-icons/fa";

interface TextareaCustomProps {
    onSubmit: (value: string) => void;
    onCancel?: () => void;
    placeholder?: string;
    disabled?: boolean;
}

export default function TextareaCustom({
    onSubmit,
    onCancel,
    placeholder = "Pregunta lo que quieras...",
    disabled = false
}: TextareaCustomProps) {
    const [value, setValue] = useState("");
    const [huState, setHuState] = useState<"Idle" | "Loading">("Idle");

    const handleSubmit = () => {
        if (!value.trim()) return;
        onSubmit(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit();
        }
    };

    return (
        <Card className=" w-full max-w-xl mx-auto p-0 bg-transparent gap-1 rounded-4xl shadow-lg border border-gray-300">
            <div className="p-1 m-0">
                <TextArea
                    className={cn("rounded-t-4xl! dark:bg-black! dark:text-white!")}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoSize={{ minRows: 2, maxRows: 5 }}
                    style={{
                        border: "none",
                        boxShadow: "none",
                        width: "100%",
                        fontSize: "1rem"
                    }}
                />
            </div>
            <div className="flex justify-end p-3">
                <div className="flex gap-2">
                    {
                        huState === "Loading" ? (
                            <>
                                <Button
                                    variant={"default"}
                                    className={cn(
                                        "hover:!bg-gray-800 dark:hover:!bg-gray-200 cursor-pointer bg-black text-white dark:bg-white dark:text-black",
                                        "!rounded-full gap-2"
                                    )}
                                >
                                    <Spinner />
                                    Generando análisis...
                                </Button>
                                <IconButton
                                    onClick={onCancel}
                                    variant="accent"
                                    className={cn(
                                        "hover:!bg-red-600 dark:hover:!bg-red-600 cursor-pointer bg-red-500 text-white dark:bg-red-500 dark:text-white",
                                        "!rounded-full"
                                    )}
                                    title="Cancelar análisis"
                                >
                                    <FaStop size={20} />
                                </IconButton>
                            </>
                        ) : (
                            <IconButton
                                onClick={undefined}
                                variant="accent"
                                className={
                                    cn("hover:!bg-gray-800 dark:hover:!bg-gray-200 cursor-pointer bg-black text-white dark:bg-white dark:text-black",
                                        disabled && "opacity-50 cursor-not-allowed",
                                        "!rounded-full")}
                            >
                                <ArrowUp />
                            </IconButton>
                        )
                    }
                </div>
            </div>
        </Card>
    );
}