import login from '@/assets/animations/login.lottie';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LoginForm from "../ui/forms/LoginForm";
import { useState } from 'react';
import RegisterForm from '../ui/forms/RegisterForm';
import logo from '@/assets/rentmate_logo.png';
import signUp from '@/assets/animations/sign_up.lottie';
import { useSearchParams } from 'react-router-dom';

export default function AuthPage() {
    const [searchParams] = useSearchParams()

    const [showLogIn, setShowLogIn] = useState(searchParams.get('signup') === 'true' ? false : true);

    return (
        <section className="w-full flex flex-col justify-center min-h-screen p-6 md:flex-row items-center gap-2 bg-slate-100">
            <div className="hidden xl:block w-full xl:w-1/3 ">
                <DotLottieReact
                    src={showLogIn ? login : signUp}
                    loop
                    autoplay
                    style={{ width: '600px', height: '400px' }}
                />
            </div>
            <div className="w-full xl:w-2/3 mx-auto">
                <div className="flex flex-col space-y-2 max-w-md mx-auto mb-4">
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="rentmade_logo" className="w-12 h-12" />
                        <p className="text-3xl font-bold text-darkViolet transition-colors dark:text-slate-50">
                            RentMate
                        </p>
                    </div>
                    <h1 className="text-primary font-bold text-2xl tracking-wide">
                        {showLogIn ? 'Ready to Rent? Log In Here!' : 'Sign Up to Unlock Great Rentals!'}
                    </h1>
                </div>
                {showLogIn ? <LoginForm /> : <RegisterForm />}
                <div className="flex justify-center items-center gap-2 text-darkViolet mt-4">
                    {showLogIn ? <span>Don&apos;t have an account?</span> : <span>Already have an account?</span>}
                    <button type='button' onClick={() => setShowLogIn(prev => !prev)} className="cus-btn text-primary font-bold">{showLogIn ? 'Register' : 'LogIn'}</button>
                </div>
            </div>
        </section>
    )
}
