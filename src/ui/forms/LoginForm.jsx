import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function LoginForm() {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <form className="space-y-4 flex flex-col max-w-md mx-auto">
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
            <button className="bg-primary w-full font-bold text-white rounded-md px-6 py-2 cursor-pointer hover:bg-cyan-500 transition duration-300">
                Log In
            </button>
        </form>
    )
}
