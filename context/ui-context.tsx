"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type NotificationType = "success" | "error" | "info";

interface Notification {
    id: string;
    type: NotificationType;
    message: string;
}

interface UIContextType {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;

    formStatus: "idle" | "loading" | "success" | "error";
    setFormStatus: (status: "idle" | "loading" | "success" | "error") => void;

    notifications: Notification[];
    addNotification: (type: NotificationType, message: string) => void;
    removeNotification: (id: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const addNotification = (type: NotificationType, message: string) => {
        const id = crypto.randomUUID();
        setNotifications((prev) => [...prev, { id, type, message }]);

        // Auto remove after 3 seconds
        setTimeout(() => {
            removeNotification(id);
        }, 3000);
    };

    const removeNotification = (id: string) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    return (
        <UIContext.Provider
            value={{
                isMobileMenuOpen,
                toggleMobileMenu,
                closeMobileMenu,
                formStatus,
                setFormStatus,
                notifications,
                addNotification,
                removeNotification,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
}
