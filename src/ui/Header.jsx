import { ChevronsLeft } from "lucide-react";
import UserPanel from "./UserPanel";

export const Header = ({ collapsed, setCollapsed }) => {

    return (
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-veryDarkViolet">
            <div className="flex items-center justify-between gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    <ChevronsLeft className={collapsed && "rotate-180"} />
                </button>
            </div>
            <UserPanel />
        </header>
    );
};
