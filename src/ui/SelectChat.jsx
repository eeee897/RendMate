import cat from '@/assets/animations/cat.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function SelectChat() {
    return (
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-2 cursor-pointer">
            <DotLottieReact
                src={cat}
                loop
                autoplay
                style={{ width: '450px', height: '300px' }}
            />
            <div className='group flex items-center gap-3'>
                <span className="transition-transform duration-300 group-hover:-translate-x-2.5 text-xl">←</span>
                <h2>Select a chat to start a conversation</h2>
            </div>
        </div>
    )
}
