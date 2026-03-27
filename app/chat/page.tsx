'use client';

import { UserRole, useTargetScanStore } from "@/store/target-scan-store";
import { useEffect, useState } from "react";
import WelcomeChat from "../components/welcome-chat";

export default function ChatPage() {

    const { userName, role, customRole } = useTargetScanStore();
    const [userRole, setUserRole] = useState<UserRole | string | null>(null);

    useEffect(() => {
        if (role) {
            const roleMap = {
                lead: "Lider",
                developer: "Desarrollador",
                qa: "Qa",
                other: "Otro"
            } as const;
            const displayRole = role === "other" ? customRole : (roleMap as Record<string, string>)[role] || role;
            setUserRole(displayRole as UserRole | string);
        }
    }, [role, customRole]);

    return (
        <div className="h-screen mt-20">
            <WelcomeChat onSubmit={async () => { }} onCancel={() => { }} />
        </div>
    )
}