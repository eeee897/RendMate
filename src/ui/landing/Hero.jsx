import hero from '@/assets/hero_image.png';
import logo from '@/assets/rentmate_logo.png';
import { SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section
            id='home'
            style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <nav className="max-w-[1380px] px-4 py-6 mx-auto">
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="" />
                        <h1 className='text-darkViolet font-bold text-2xl'>RentMate</h1>
                    </div>

                    <div className="hidden space-x-8 font-bold lg:flex">
                        <a href="#home" className="text-veryDarkViolet hover:text-slate-50 transition duration-300">Home</a>
                        <a href="#popular" className="text-veryDarkViolet hover:text-slate-50 transition duration-300">Popular</a>
                        <a href="#features" className="text-veryDarkViolet hover:text-slate-50 transition duration-300">Features</a>
                        <a href="#contact" className="text-veryDarkViolet hover:text-slate-50 transition duration-300">Contact</a>
                    </div>

                    <div className="items-center hidden space-x-6 font-bold lg:flex text-grayishViolet">
                        <Link to={'/auth'} className="text-veryDarkViolet cursor-pointer">Login</Link>
                        <Link to={'/auth?signup=true'} className="text-white bg-primary rounded-full px-4 font-bold py-2 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0  cursor-pointer">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>

            {/* content */}
            <div className='max-w-[1380px] px-4 pt-24 pb-32 mx-auto'>
                <div className='flex justify-end items-center mb-32'>
                    <h1 className='text-5xl font-bold text-darkViolet max-w-sm text-end'>Rent and Lend your item <br /> easily</h1>
                </div>
                <div className='flex relative pb-64 items-center justify-center max-w-md mx-auto'>
                    <SearchIcon className="absolute left-5 top-5 text-darkViolet w-5 h-5 " />
                    <input
                        type="text"
                        placeholder="Browse Items..."
                        className="w-full pl-12 pr-5 py-4 text-xl bg-slate-100 border placeholder:text-yellow-500 border-yellow-500 rounded-full text-yellow-500 focus:outline-0"
                    />
                </div>
            </div>

        </section>
    )
}
