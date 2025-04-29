import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import error from '@/assets/animations/error.lottie'
import { Link } from 'react-router-dom';

function NotFound() {

    return (
        <div className='min-h-screen flex items-center text-sm px-8 md:text-base justify-center text-center flex-col bg-white'>
            <DotLottieReact
                src={error}
                loop
                autoplay
                style={{ width: '700px', height: '400px' }}
            />
            <h1 className='mb-3 max-w-2xl mx-auto'>Something went wrong. Please try again.</h1>
            <Link to={'/'} className='bg-primary px-5 hover:bg-cyan-500 transition duration-300 py-2 rounded-full text-white font-bold'>
                &larr; Go Back
            </Link>
        </div>
    );
}

export default NotFound;



