"use client";

import { UIProvider } from "@/context/ui-context";
import { ToastContainer } from "@/components/ui/toast";
import { SWRConfig } from "swr";
import { Header } from "./header";
import { Footer } from "./footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
            }}
        >
            <UIProvider>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
                <ToastContainer />
            </UIProvider>
        </SWRConfig>
    );
}
