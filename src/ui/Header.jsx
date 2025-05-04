import { MoonIcon } from "@heroicons/react/24/outline";
import { ChevronsLeft, SunIcon } from "lucide-react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useTheme } from "../context/ThemeContextProvider";
import toast from "react-hot-toast";

export const Header = ({ collapsed, setCollapsed }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
            <div className="flex items-center justify-between gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <Profile />
                <div className="flex items-center gap-2">
                    <Link to={'/app/account'} className="btn-ghost">
                        <CiUser className="size-6 text-darkViolet" />
                    </Link>
                    <button type="button" onClick={() => toast.success('Will be implemented soon...')} className="btn-ghost">
                        {
                            theme === 'dark' ?
                                <SunIcon className="size-5 text-darkViolet" /> :
                                <MoonIcon className="size-5 text-darkViolet" />
                        }
                    </button>
                </div>
            </div>
        </header>
    );
};
