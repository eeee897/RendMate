import cat from '@/assets/animations/cat.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function SelectChat() {
    return (
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-2">
            <DotLottieReact
                src={cat}
                loop
                autoplay
                style={{ width: '450px', height: '300px' }}
            />
            <div className='group flex items-center gap-3 cursor-pointer'>
                <span className="transition-transform hidden md:block duration-300 group-hover:-translate-x-2.5 text-xl">←</span>
                <span className="transition-transform md:hidden duration-300 group-hover:-translate-y-2.5 text-xl">↑</span>
                <h2>Select a chat to start a conversation</h2>
            </div>
        </div>
    )
}
