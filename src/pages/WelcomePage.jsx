import Footer from '../ui/landing/Footer';
import Hero from '../ui/landing/Hero';
import PlatformFeatures from '../ui/landing/PlatformFeatures';
import PopularItems from '../ui/landing/PopularItems';
import UserRole from '../ui/landing/UserRole';
import Contact from '../ui/landing/Contact';
import ScrollTopBtn from '../ui/btns/ScrollToTopBtn';

export default function Welcome() {
    return (
        <main className='bg-slate-100'>
            <Hero />
            <PopularItems />
            <UserRole />
            <PlatformFeatures />
            <Contact />
            <Footer />
            <ScrollTopBtn />
        </main>
    );
}