import { Outlet } from "react-router-dom";

import { useMediaQuery } from "@uidotdev/usehooks";
import useClickOutside from "@/hooks/useClickOutside";

import { Sidebar } from "@/ui/sidebar";
import { Header } from "@/ui/header";

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

const AppLayout = () => {
    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(!isDesktopDevice);

    useEffect(() => {
        setCollapsed(!isDesktopDevice);
    }, [isDesktopDevice]);

    const sidebarRef = useClickOutside(() => {
        if (!isDesktopDevice && !collapsed) {
            setCollapsed(true);
        }
    });

    return (
        <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
            <div
                className={cn(
                    "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
                    !collapsed && "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30",
                )}
            />
            <Sidebar
                ref={sidebarRef}
                collapsed={collapsed}
            />
            <div className={cn("transition-[margin] duration-300", collapsed ? "md:ml-[70px]" : "md:ml-[240px]")}>
                <Header
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
                <main className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
