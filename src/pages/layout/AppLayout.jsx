import { Outlet } from "react-router-dom";

import { useMediaQuery } from "@uidotdev/usehooks";
import useClickOutside from "@/hooks/useClickOutside";

import { Sidebar } from "@/ui/Sidebar";
import { Header } from "@/ui/Header";

import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import ScrollTopBtn from "../../ui/btns/ScrollToTopBtn";

const AppLayout = () => {
    const mainRef = useRef();
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
        <>
            <div className="min-h-screen bg-slate-100 transition-colors dark:bg-[#1a191d]">
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
                    <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                    <main
                        ref={mainRef}
                        className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6"
                    >
                        <Outlet context={{ mainRef }} />
                        <ScrollTopBtn scrollContainerRef={mainRef} />
                    </main>
                </div>
            </div>
        </>
    );
};

export default AppLayout;
