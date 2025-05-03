import logo from '@/assets/rentmate_logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

    return (
        <section id='home' className='hero'>
            <nav className="max-w-[1380px] px-4 py-6 mx-auto">
                <div className="flex items-center justify-between">
                    <Link to={'/'} className='flex items-center gap-2'>
                        <img src={logo} alt="" />
                        <h1 className='text-darkViolet font-bold text-2xl'>RentMate</h1>
                    </Link>

                    <div className="hidden space-x-8 text-lg font-bold lg:flex">
                        <a href="#home" className="text-white hover:text-darkViolet transition duration-300">Home</a>
                        <a href="#popular" className="text-white hover:text-darkViolet transition duration-300">Popular</a>
                        <a href="#features" className="text-white hover:text-darkViolet transition duration-300">Features</a>
                        <a href="#contact" className="text-white hover:text-darkViolet transition duration-300">Contact</a>
                    </div>

                    <div className="items-center hidden space-x-6 text-lg font-bold lg:flex text-grayishViolet">
                        <Link to={'/auth'} className="text-veryDarkViolet cursor-pointer hover:text-white transition duration-300">Login</Link>
                        <Link to={'/auth?signup=true'} className="text-white bg-primary rounded-full px-4 font-bold py-2 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0 cursor-pointer">
                            Sign Up
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center mt-2">
                        <button
                            onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                            className={`hamburger ${isMobMenuOpen ? 'open' : ''}`}
                            type="button"
                        >
                            <span className="hamburger-top bg-darkViolet"></span>
                            <span className="hamburger-middle bg-darkViolet"></span>
                            <span className="hamburger-bottom bg-darkViolet"></span>
                        </button>
                    </div>
                    {
                        isMobMenuOpen && (
                            <div id="menu" className="absolute lg:hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
                                <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
                                    <a href="#home" onClick={() => setIsMobMenuOpen(false)} className="hover:text-primary">Home</a>
                                    <a href="#popular" onClick={() => setIsMobMenuOpen(false)} className="hover:text-primary">Popular</a>
                                    <a href="#features" onClick={() => setIsMobMenuOpen(false)} className="hover:text-primary">Features</a>
                                    <a href="#contact" onClick={() => setIsMobMenuOpen(false)} className="hover:text-primary">Contact</a>
                                    <Link to="/auth" onClick={() => setIsMobMenuOpen(false)} className="w-full pt-6 text-center border-t border-gray-400">Login</Link>
                                    <Link to="/auth?signup=true" onClick={() => setIsMobMenuOpen(false)} className="w-full text-center bg-primary rounded-full px-4 font-bold py-2 hover:bg-cyan-500 border-b-[4px] hover:border-t-[4px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0 cursor-pointer">Sign Up</Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>

            {/* content */}
            <div className='max-w-[1380px] px-4 pt-28 lg:pb-32 mx-auto'>
                <div className='flex lg:justify-end justify-center items-center mb-16 lg:mb-32'>
                    <h1 className='hidden lg:block text-5xl font-bold text-white max-w-sm text-end'>Rent and Lend your item <br /> easily</h1>
                    <h1 className='lg:hidden text-5xl font-black text-white text-center'>Rent and Lend <br /> your item easily</h1>
                </div>
                <div className='flex relative pb-64 items-center justify-center max-w-md mx-auto'>
                    <input
                        type="text"
                        placeholder="🔍 Browse Items..."
                        className="w-full px-6 py-3 lg:py-4 text-base lg:text-xl text-darkViolet placeholder:text-darkViolet bg-slate-100 border border-yellow-500 rounded-full focus:outline-0"
                    />
                </div>
            </div>

        </section>
    )
}
