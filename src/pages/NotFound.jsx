import dinosaur from '@/assets/animations/dinosaur.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='min-h-screen flex items-center text-sm px-8 md:text-base justify-center text-center flex-col bg-white'>
            <DotLottieReact
                src={dinosaur}
                loop
                autoplay
                style={{ width: '700px', height: '400px' }}
            />
            <h1 className='mb-3 max-w-2xl mx-auto'>You’re seeing this page because the page you’re looking for doesn’t exist.</h1>
            <Link to={-1} className='bg-primary px-5 hover:bg-cyan-500 transition duration-300 py-2 rounded-full text-white font-bold'>
                &larr; Go Back
            </Link>
        </div>
    )
}
