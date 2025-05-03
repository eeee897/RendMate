import default_profile from "@/assets/default_profile.jpg";
import { useApp } from '@/context/AppContextProvider'
import { Link } from "react-router-dom";

export default function Profile() {
    const { user } = useApp()

    return (
        <Link to={'/app/account'} className="flex items-center gap-2">
            <img src={default_profile} alt="profile_image" className="w-8 h-8 rounded-full border border-slate-300" />
            <h3 className="font-medium text-darkViolet">{user.username || 'User'}</h3>
        </Link>
    )
}
