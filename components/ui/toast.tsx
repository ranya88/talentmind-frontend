"use client";

import { useUI } from "@/context/ui-context";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function ToastContainer() {
    const { notifications, removeNotification } = useUI();

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
            <AnimatePresence>
                {notifications.map((notification) => (
                    <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className={cn(
                            "pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border backdrop-blur-md min-w-[300px]",
                            notification.type === "success" && "bg-green-50/90 border-green-200 text-green-800",
                            notification.type === "error" && "bg-red-50/90 border-red-200 text-red-800",
                            notification.type === "info" && "bg-blue-50/90 border-blue-200 text-blue-800"
                        )}
                    >
                        {notification.type === "success" && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {notification.type === "error" && <XCircle className="w-5 h-5 text-red-600" />}
                        {notification.type === "info" && <Info className="w-5 h-5 text-blue-600" />}

                        <p className="text-sm font-medium">{notification.message}</p>

                        <button
                            onClick={() => removeNotification(notification.id)}
                            className="ml-auto hover:opacity-70"
                        >
                            <span className="sr-only">Close</span>
                            <XCircle className="w-4 h-4 opacity-50" />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
