import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const onAction = (e) => {
        e.preventDefault();
        setIsLoggingIn(true);
        setTimeout(() => {
            setIsLoggingIn(false);
            navigate('/')
        }, 2000)
    }

    return (
        <form onSubmit={onAction} className="space-y-4 flex flex-col max-w-md mx-auto">
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-darkViolet">Email <span className="text-red-600">*</span></label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500"
                />
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-darkViolet">
                    Password <span className="text-red-600">*</span>
                </label>

                <div className="relative w-full">
                    <input
                        id="password"
                        type={isVisible ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 pr-10 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500"
                    />
                    <button
                        onClick={() => setIsVisible(prev => !prev)}
                        type="button"
                        className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                        {isVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <span className="text-xs text-gray-400 hover:text-gray-900 cursor-pointer transform duration-300">Forgot Passoword?</span>
            </div>
            <button type='submit' className="bg-primary flex justify-center items-center gap-2 w-full font-bold text-white rounded-md px-6 py-2 cursor-pointer hover:bg-cyan-500 transition duration-300">
                {isLoggingIn && <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>}
                <span>{isLoggingIn ? 'Loggging In' : 'Log In'}</span>
            </button>
        </form>
    )
}
