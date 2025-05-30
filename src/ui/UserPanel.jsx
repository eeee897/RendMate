import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContextProvider"
import Profile from "./Profile"
import { CiUser } from "react-icons/ci"
import { MoonIcon, SunIcon } from "lucide-react"

export default function UserPanel({ textColor }) {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="flex items-center gap-4">
            <Profile textColor={textColor} />
            <div className="flex items-center gap-2">
                <Link to={'/app/account'} className="btn-ghost">
                    <CiUser className="size-6 " />
                </Link>
                <button type="button" onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')} className="btn-ghost">
                    {
                        theme === 'dark' ?
                            <SunIcon className="size-5 " /> :
                            <MoonIcon className="size-5 " />
                    }
                </button>
            </div>
        </div>
    )
}
