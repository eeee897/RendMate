import { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";
import ConfirmationModal from "./modal/ConfirmationModal";
import logo from '@/assets/rentmate_logo.png';
import { LogOut } from "lucide-react";
import Modal from "./modal/Modal";
import { navbarLinksLender, navbarLinksRenter } from "../utils/constants";
import { useApp } from '@/context/AppContextProvider'

export const Sidebar = forwardRef(({ collapsed }, ref) => {
    const { isRenter } = useApp()

    const sideBarLinks = isRenter ? navbarLinksRenter : navbarLinksLender

    return (
        <aside
            ref={ref}
            className={cn(
                "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-200 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900",
                collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
                collapsed ? "max-md:-left-full" : "max-md:left-0",
            )}
        >
            <Link to={'/'} className={`${!collapsed ? 'shadow-md' : ''} flex gap-x-3 p-2.5 items-center`}>
                <img src={logo} alt="RentMate Logo" className="w-10 h-10" />
                {!collapsed && (
                    <p className="text-xl font-bold text-darkViolet transition-colors dark:text-slate-50">
                        RentMate
                    </p>
                )}
            </Link>

            {/* Top section - nav links */}
            <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin] flex-grow">
                {sideBarLinks.map((navbarLink, index) => (
                    <nav
                        key={index}
                        className={cn("sidebar-group", collapsed && "md:items-center")}
                    >
                        {navbarLink.links.map((link) => (
                            <NavLink
                                key={link.label}
                                to={link.path}
                                className={cn("sidebar-item", collapsed && "md:w-[45px]")}
                            >
                                <link.icon size={22} className="flex-shrink-0" />
                                {!collapsed && <p className="whitespace-nowrap">{link.label}</p>}
                            </NavLink>
                        ))}
                    </nav>
                ))}
            </div>

            <div className="p-3 border-t border-slate-200  dark:border-slate-700">
                <Modal>
                    <Modal.Opens open={'logout'}>
                        <button
                            className={cn(
                                "sidebar-item w-full",
                                collapsed && "md:w-[45px] justify-center"
                            )}>
                            <LogOut size={22} className="flex-shrink-0" />
                            {!collapsed && <p className="whitespace-nowrap">Logout</p>}
                        </button>
                    </Modal.Opens>

                    <Modal.Window name={'logout'}>
                        <ConfirmationModal type={'logout'} />
                    </Modal.Window>
                </Modal>
            </div>
        </aside>
    );
});

Sidebar.displayName = "Sidebar";