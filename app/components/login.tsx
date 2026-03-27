'use client';

import { Button } from '@/components/animate-ui/components/buttons/button';
import {
    Dialog,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogPanel,
    DialogTitle,
    type DialogPanelProps,
} from '@/components/animate-ui/components/headless/dialog';
import { ArrowRight } from '@/components/animate-ui/icons/arrow-right';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { UserRole, useTargetScanStore } from '@/store/target-scan-store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

interface LoginProps {
    from: DialogPanelProps['from'];
    showCloseButton: boolean;
}

export const Login = ({
    from,
    showCloseButton,
}: LoginProps) => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { userName, setUserName, role, setRole, customRole, setCustomRole } = useTargetScanStore();

    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const handleContinueToChat = () => {
        if (!userName || !role) {
            toast.error("Por favor completa tus datos para continuar");
            return;
        }
        if (role === "other" && !customRole.trim()) {
            toast.error("Por favor especifica tu rol personalizado");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsOpen(false);
            router.push('/chat');
            const displayRole = role === "other" ? customRole : role;
            toast.success(`¡Bienvenido ${userName}! Has ingresado como ${capitalize(displayRole)}.`, {
                position: 'top-center'
            });
        }, 1000);
    }

    return (
        <div>
            {
                !userName || !role ? (
                    <Button
                        className={cn("cursor-pointer w-full lg:w-fit mt-1 flex items-center justify-center lg:justify-start")}
                        variant={"default"}
                        size="lg"
                        onClick={() => setIsOpen(true)}
                    >
                        Comenzar
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>)
                    :
                    (
                        <Button
                            className={cn("cursor-pointer w-full lg:w-fit mt-1 flex items-center justify-center lg:justify-start")}
                            variant={"outline"}
                            size="lg"
                            onClick={() => router.push('/chat')}
                        >   Ir al chat
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    )
            }

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogPanel
                    from={from}
                    showCloseButton={showCloseButton}
                    className="sm:max-w-[425px]"
                >
                    <form className="flex flex-col gap-4">
                        <DialogHeader>
                            <DialogTitle>Acceso</DialogTitle>
                            <DialogDescription>
                                Ingresa estos datos. Se guardarán la primera vez para futuras sesiones y personalizar tu experiencia.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="name">¿Cómo te gustaría que te llamemos?</Label>
                                <Input id="name" name="name" value={userName || ''} onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="rol">¿Qué rol tienes?</Label>
                                <Select value={role as string} onValueChange={(value: UserRole) => setRole(value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecciona un rol" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="lead">Lider</SelectItem>
                                            <SelectItem value="developer">Desarrollador</SelectItem>
                                            <SelectItem value="qa">Qa</SelectItem>
                                            <SelectItem value="other">Otro</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <div className={`grid gap-3 overflow-hidden transition-all duration-300 ease-in-out ${(role === "other") ? "mt-2 opacity-100 max-h-20" : "opacity-0 max-h-0"
                                    }`}>
                                    <Label htmlFor="otherRole">Por favor especifica tu rol</Label>
                                    <Input
                                        id="otherRole"
                                        name="otherRole"
                                        value={customRole}
                                        placeholder="Ej: DevOps, Gerente de Proyecto..."
                                        onChange={(e) => setCustomRole(capitalize(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type='button' variant="outline" onClick={() => setIsOpen(false)}>
                                Cancelar
                            </Button>
                            <Button
                                type="button"
                                className='cursor-pointer'
                                onClick={handleContinueToChat}
                                disabled={loading}
                            >
                                {loading ? 'Guardando datos...' : 'Continuar al chat'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogPanel>
            </Dialog>
        </div>
    );
};