import { create } from "zustand";

type UserRole = "lead" | "developer" | "qa" | "other";
interface TargetScanState {
    role: UserRole | null
    setRole: (role: UserRole | null) => void
    userName: string | null
    setUserName: (userName: string | null) => void
}

export const targetScanStore = create<TargetScanState>((set) => ({
    role: null,
    setRole: (role) => set({ role }),
    userName: null,
    setUserName: (userName) => set({ userName }),
}))

export const useTargetScanStore = () => {
    const { userName, setUserName, role, setRole } = targetScanStore();
    return {
        userName,
        setUserName,
        role,
        setRole
    };
}
