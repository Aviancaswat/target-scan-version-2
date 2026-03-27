"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserRole = "lead" | "developer" | "qa" | "other";
interface TargetScanState {
    role: UserRole | null
    setRole: (role: UserRole | null) => void
    customRole: string
    setCustomRole: (customRole: string) => void
    userName: string | null
    setUserName: (userName: string | null) => void
}

export const targetScanStore = create<TargetScanState>()(
    persist(
        (set) => ({
            role: null,
            setRole: (role) => set({ role }),
            customRole: '',
            setCustomRole: (customRole) => set({ customRole }),
            userName: null,
            setUserName: (userName) => set({ userName }),
        }),
        {
            name: 'target-scan-storage',
        }
    )
);

export const useTargetScanStore = () => {
    const { userName, setUserName, role, setRole, customRole, setCustomRole } = targetScanStore();
    return {
        userName,
        setUserName,
        role,
        setRole,
        customRole,
        setCustomRole
    };
}
