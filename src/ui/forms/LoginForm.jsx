import { CircleAlert, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '@/ui/Spinner';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormFieldsSchema } from '../../utils/zSchema';
import { cn } from '../../utils/cn'
import { useApp } from '../../context/AppContextProvider';

export default function LoginForm() {
    const { dispatch } = useApp()
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: 'syp@rentmate.com',
            password: 'Rentmate2025$'
        },
        resolver: zodResolver(loginFormFieldsSchema)
    }
    )

    const onLoginUser = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        dispatch({ type: 'app/log-in', payload: data })
        navigate('/app')
    }

    return (
        <form onSubmit={handleSubmit(onLoginUser)} className="space-y-4 flex flex-col max-w-md mx-auto">
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-darkViolet">Email <span className="text-red-600">*</span></label>
                <input
                    disabled={isSubmitting}
                    id="email"
                    {...register('email')}
                    type="text"
                    placeholder="Enter your email"
                    className={cn(errors.email ? 'border-red-600 focus:border-red-600' : 'border-slate-300 focus:border-primary', ' disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 ')}
                />
                {
                    errors.email &&
                    <div className='text-red-600 text-xs flex items-center gap-1'>
                        <CircleAlert className='w-4 h-4' />
                        {errors.email.message}
                    </div>
                }
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="password" className="text-darkViolet">
                    Password <span className="text-red-600">*</span>
                </label>

                <div className="relative w-full space-y-2">
                    <input
                        disabled={isSubmitting}
                        id="password"
                        {...register('password')}
                        type={isVisible ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className={cn(errors.password ? 'border-red-600 focus:border-red-600' : 'border-slate-300 focus:border-primary', ' disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 ')}
                    />
                    <button
                        onClick={() => setIsVisible(prev => !prev)}
                        type="button"
                        className="absolute cursor-pointer right-3 top-3 text-slate-400"
                    >
                        {isVisible ? <Eye className={cn('w-5 h-5', errors.password && 'text-red-600')} /> : <EyeOff className={cn('w-5 h-5', errors.password && 'text-red-600')} />}
                    </button>
                    {
                        errors.password &&
                        <div className='text-red-600 text-xs flex items-center gap-1'>
                            <CircleAlert className='w-4 h-4' />
                            {errors.password.message}
                        </div>
                    }
                </div>
            </div>
            <div className="flex justify-end items-center">
                <span className="text-xs text-gray-400 hover:text-gray-900 cursor-pointer transform duration-300">Forgot Passoword?</span>
            </div>
            <button disabled={isSubmitting} type='submit' className="bg-primary disabled:cursor-not-allowed flex justify-center items-center gap-2 w-full font-bold text-white rounded-md px-6 py-2 cursor-pointer hover:bg-cyan-500 transition duration-300">
                {isSubmitting && <Spinner />}
                <span>{isSubmitting ? 'Logging In...' : 'Log In'}</span>
            </button>
        </form>
    )
}
