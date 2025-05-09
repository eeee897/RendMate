import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

export default function SocialIcons() {
    return (
        <div className="flex items-center gap-2">
            <a target="_blank" className='flex items-center justify-center dark:bg-grayishViolet w-7 h-7 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white'
                href={'https://www.facebook.com/share/12K662nTcjn/?mibextid=wwXIfr'}><FaFacebookF className="size-4" /></a>
            <a target="_blank" className='flex items-center justify-center dark:bg-grayishViolet w-7 h-7 rounded-full bg-gray-200 hover:bg-pink-500 hover:text-white'
                href={'https://www.instagram.com/fisheeeshhh/'}><FaInstagram className="size-4" /></a>
            <a target="_blank" className='flex items-center justify-center dark:bg-grayishViolet w-7 h-7 rounded-full bg-gray-200 hover:bg-blue-400 hover:text-white'
                href={'https://www.linkedin.com/in/syp-dev'}><FaTwitter className="size-4" /></a>
            <a target="_blank" className='flex items-center justify-center dark:bg-grayishViolet w-7 h-7 rounded-full bg-gray-200 hover:bg-red-600 hover:text-white'
                href={'https://www.linkedin.com/in/syp-dev'}><FaPinterest className="size-4" /></a>
        </div>
    )
}
