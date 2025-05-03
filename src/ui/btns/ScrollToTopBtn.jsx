import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTopBtn({ scrollContainerRef }) {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const el = scrollContainerRef?.current || window;

        const handleScroll = () => {
            setShowBtn(el.scrollTop > 50 || window.scrollY > 50);
        };

        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, [scrollContainerRef]);

    const scrollToTop = () => {
        scrollContainerRef?.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="group">
            <button
                onClick={scrollToTop}
                type="button"
                id="to-top"
                className={`${showBtn ? 'opacity-100 pointer-events-auto transition-opacity duration-300' : 'opacity-0 pointer-events-none transition-opacity duration-300'} 
        w-[50px] h-[50px] rounded-full outline-none cursor-pointer 
        flex fixed bottom-5 right-5 z-[100] items-center justify-center to-top-btn bg-primary hover:bg-cyan-500 border-b-[4px] border-b-cyan-800 group-hover:bg-cyan-500 group-hover:border-t-[4px] group-hover:border-t-cyan-500 group-hover:border-b-0`}>
                <ChevronUp className="w-[18px] text-white" />
            </button>
        </div>
    );
}