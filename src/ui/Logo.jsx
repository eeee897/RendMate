import { Link } from 'react-router-dom'
import logo from '@/assets/rentmate_logo.png';

export default function Logo({ textColor = 'text-darkViolet' }) {
    return (
        <Link to={'/'} className='flex items-center gap-2'>
            <img src={logo} alt="rentmade_logo" className="w-12 h-12" />
            <p className={`${textColor} text-2xl font-bold transition-colors`}>
                RentMate
            </p>
        </Link>
    )
}
