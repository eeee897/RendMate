import facebook from '@/assets/socials/icon-facebook.svg'
import instagram from '@/assets/socials/icon-instagram.svg'
import twitter from '@/assets/socials/icon-twitter.svg'
import pinterest from '@/assets/socials/icon-pinterest.svg'
import { Link } from 'react-router-dom'
import Copyright from '../Copyright'
import Logo from '../Logo'

export default function Footer() {
    return (
        <footer className="py-16 bg-veryDarkViolet">
            <div
                className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">

                <div className='flex items-center gap-2'>
                    <Logo textColor='text-white' />
                </div>


                <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">

                    <div className="flex flex-col items-center w-full md:items-start">
                        <div className="mb-5 font-bold text-white capitalize">Menu</div>
                        <div className="flex flex-col items-center space-y-3 md:items-start">
                            <a href="#home" className="capitalize text-grayishViolet hover:text-primary">Home</a>
                            <a href="#popular" className="capitalize text-grayishViolet hover:text-primary">Popular</a>
                            <a href="#features" className="capitalize text-grayishViolet hover:text-primary">Featuures</a>
                            <a href="#contact" className="capitalize text-grayishViolet hover:text-primary">Contact</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full md:items-start">
                        <div className="mb-5 font-bold text-white capitalize">Resources</div>
                        <div className="flex flex-col items-center space-y-3 md:items-start">
                            <Link to={'/coming-soon'} className="capitalize text-grayishViolet hover:text-primary">Blogs</Link>
                            <Link to={'/coming-soon'} className="capitalize text-grayishViolet hover:text-primary">Developers</Link>
                            <Link to={'/coming-soon'} className="capitalize text-grayishViolet hover:text-primary">Support</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-full md:items-start">
                        <div className="mb-5 font-bold text-white capitalize">Company</div>
                        <div className="flex flex-col items-center space-y-3 md:items-start">
                            <Link to={'/coming-soon'} className="capitalize text-grayishViolet hover:text-primary">About</Link>
                            <Link to={'/coming-soon'} className="capitalize text-grayishViolet hover:text-primary">Our team</Link>
                            <Link to={'/coming-soon'} className="capitalize text-grayishViolet hover:text-primary">Careers</Link>
                            <Link to={'/coming-soon'} className="capitalize text-grayishViolet hover:text-primary">Contact</Link>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col items-center md:items-start gap-4'>
                    <div className="flex items-center space-x-6">
                        <Link to={'/coming-soon'} className="">
                            <img src={facebook} alt="" className="ficon" />
                        </Link>
                        <Link to={'/coming-soon'} className="">
                            <img src={instagram} alt="" className="ficon" />
                        </Link>
                        <Link to={'/coming-soon'} className="">
                            <img src={twitter} alt="" className="ficon" />
                        </Link>
                        <Link to={'/coming-soon'} className="">
                            <img src={pinterest} alt="" className="ficon" />
                        </Link>
                    </div>
                    <Copyright textColor='text-white' />
                </div>
            </div>
        </footer>
    )
}
