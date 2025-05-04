import { Link } from "react-router-dom";
import { helpSections } from "../utils/constants";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import support from '@/assets/animations/support.lottie'
import Copyright from "../ui/Copyright";
import usePageTitle from "../hooks/usePageTitle";

export default function NeedHelpPage() {
    usePageTitle('Need Help')

    return (
        <section className="">
            <div className="flex items-center flex-col-reverse lg:flex-row justify-between gap-4 bg-white p-6 md:p-10 rounded-lg shadow text-center mb-12">
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                        Welcome to RentMate Support.
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <input
                            type="text"
                            placeholder="🔍 How can we help you?"
                            className="w-full max-w-md py-3 px-4 rounded-full focus:border-primary border border-slate-300 focus:outline-none"
                        />
                        <button className="w-fit text-white bg-primary rounded-full px-5 font-bold py-3 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0 cursor-pointer">
                            ASK
                        </button>
                    </div>
                </div>
                <DotLottieReact
                    src={support}
                    loop
                    autoplay
                    style={{ width: '400px', height: '200px' }}
                />
            </div>

            <div className="">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    Need help? We've got your back
                </h2>
                <p className="text-slate-500 mb-8">
                    Perhaps you can find the answers in our collections
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {helpSections.map((sec, idx) => (
                        <Link
                            to={'/comming-soon'}
                            key={idx}
                            className="bg-white p-6 cursor-pointer rounded-lg border border-slate-300 shadow hover:shadow-lg transition"
                        >
                            <div className="mb-3">{sec.icon}</div>
                            <h3 className="text-darkViolet font-semibold">{sec.title}</h3>
                            <p className="text-sm text-slate-600 mt-1">{sec.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="md:flex-row flex items-center flex-col justify-between space-y-2 md:space-y-0 md:space-x-2 mt-8">
                <Copyright />
                <div className="flex items-center gap-2">
                    <p className="font-black text-darkViolet">Other ways to find help: </p>
                    <div className="flex items-center gap-2">
                        <a target="_blank" className='flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white'
                            href={'https://www.facebook.com/share/12K662nTcjn/?mibextid=wwXIfr'}><FaFacebookF className="size-4" /></a>
                        <a target="_blank" className='flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white'
                            href={'https://www.instagram.com/fisheeeshhh/'}><FaInstagram className="size-4" /></a>
                        <a target="_blank" className='flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-blue-400 hover:text-white'
                            href={'https://www.linkedin.com/in/syp-dev'}><FaTwitter className="size-4" /></a>
                        <a target="_blank" className='flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 hover:bg-red-600 hover:text-white'
                            href={'https://www.linkedin.com/in/syp-dev'}><FaPinterest className="size-4" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}