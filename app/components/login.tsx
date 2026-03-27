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
import { useState } from 'react';

interface LoginProps {
    from: DialogPanelProps['from'];
    showCloseButton: boolean;
}

export const Login = ({
    from,
    showCloseButton,
}: LoginProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button
                className={cn("cursor-pointer w-full lg:w-fit mt-1 flex items-center justify-center lg:justify-start")}
                variant={"default"}
                size="lg"
                onClick={() => setIsOpen(true)}
            >
                Comenzar
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

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
                                <Input id="name" name="name" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="rol">¿Qué rol tienes?</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecciona un rol" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="light">Desarrollador</SelectItem>
                                            <SelectItem value="dark">Qa</SelectItem>
                                            <SelectItem value="system">Lider</SelectItem>
                                            <SelectItem value="other">Otro</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type='button' variant="outline" onClick={() => setIsOpen(false)}>
                                Cancelar
                            </Button>
                            <Button type="submit" className='cursor-pointer'>Continuar al chat</Button>
                        </DialogFooter>
                    </form>
                </DialogPanel>
            </Dialog>
        </div>
    );
};