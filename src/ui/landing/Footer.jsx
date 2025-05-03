import facebook from '@/assets/icon-facebook.svg'
import instagram from '@/assets/icon-instagram.svg'
import twitter from '@/assets/icon-twitter.svg'
import pinterest from '@/assets/icon-pinterest.svg'
import logo from '@/assets/rentmate_logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer class="py-16 bg-veryDarkViolet">
            <div
                class="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">

                <div className='flex items-center gap-2'>
                    <img src={logo} alt="" />
                    <h1 className='text-2xl font-bold text-white'>RentMate</h1>
                </div>


                <div class="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">

                    <div class="flex flex-col items-center w-full md:items-start">
                        <div class="mb-5 font-bold text-white capitalize">Menu</div>
                        <div class="flex flex-col items-center space-y-3 md:items-start">
                            <a href="#home" class="capitalize text-grayishViolet hover:text-primary">Home</a>
                            <a href="#popular" class="capitalize text-grayishViolet hover:text-primary">Popular</a>
                            <a href="#features" class="capitalize text-grayishViolet hover:text-primary">Featuures</a>
                            <a href="#contact" class="capitalize text-grayishViolet hover:text-primary">Contact</a>
                        </div>
                    </div>

                    <div class="flex flex-col items-center w-full md:items-start">
                        <div class="mb-5 font-bold text-white capitalize">Resources</div>
                        <div class="flex flex-col items-center space-y-3 md:items-start">
                            <Link to={'/comming-soon'} class="capitalize text-grayishViolet hover:text-primary">Blogs</Link>
                            <Link to={'/comming-soon'} class="capitalize text-grayishViolet hover:text-primary">Developers</Link>
                            <Link to={'/comming-soon'} class="capitalize text-grayishViolet hover:text-primary">Support</Link>
                        </div>
                    </div>

                    <div class="flex flex-col items-center w-full md:items-start">
                        <div class="mb-5 font-bold text-white capitalize">Company</div>
                        <div class="flex flex-col items-center space-y-3 md:items-start">
                            <Link to={'/comming-soon'} class="capitalize text-grayishViolet hover:text-primary">About</Link>
                            <Link to={'/comming-soon'} class="capitalize text-grayishViolet hover:text-primary">Our team</Link>
                            <Link to={'/comming-soon'} class="capitalize text-grayishViolet hover:text-primary">Careers</Link>
                            <Link to={'/comming-soon'} class="capitalize text-grayishViolet hover:text-primary">Contact</Link>
                        </div>
                    </div>
                </div>


                <div class="flex items-center space-x-6">
                    <Link to={'/comming-soon'} class="">
                        <img src={facebook} alt="" class="ficon" />
                    </Link>
                    <Link to={'/comming-soon'} class="">
                        <img src={instagram} alt="" class="ficon" />
                    </Link>
                    <Link to={'/comming-soon'} class="">
                        <img src={twitter} alt="" class="ficon" />
                    </Link>
                    <Link to={'/comming-soon'} class="">
                        <img src={pinterest} alt="" class="ficon" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
