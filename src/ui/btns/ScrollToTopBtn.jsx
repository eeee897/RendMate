import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollTopBtn({ scrollContainerRef }) {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const el = scrollContainerRef?.current || window;

        const handleScroll = () => {
            const scrollTop = scrollContainerRef?.current
                ? scrollContainerRef.current.scrollTop
                : window.scrollY;
            setShowBtn(scrollTop > 50);
        };

        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, [scrollContainerRef]);

    const scrollToTop = () => {
        if (scrollContainerRef?.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="group">
            <button
                onClick={scrollToTop}
                type="button"
                id="to-top"
                className={`${showBtn ? 'opacity-100 pointer-events-auto transition-opacity duration-300' : 'opacity-0 pointer-events-none transition-opacity duration-300'} 
        w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full outline-none cursor-pointer 
        flex fixed bottom-5 right-5 z-[100] items-center justify-center to-top-btn dark:bg-darkViolet dark:hover:border-t-veryDarkBlue dark:border-b-[#2f2543] dark:hover:bg-veryDarkBlue bg-primary hover:bg-cyan-500 border-b-[4px] border-b-cyan-800 group-hover:bg-cyan-500 group-hover:border-t-[4px] group-hover:border-t-cyan-500 group-hover:border-b-0`}>
                <ChevronUp className="w-[18px] text-white" />
            </button>
        </div>
    );
}