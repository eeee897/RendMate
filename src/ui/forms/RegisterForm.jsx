import { useState } from 'react'
import { CircleAlert, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormFieldsSchema } from '../../utils/zSchema';
import { cn } from '../../utils/cn'
import { useApp } from '../../context/AppContextProvider';

export default function RegisterForm() {
    const { dispatch } = useApp()
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            username: 'Fisheeesh',
            email: 'syp@rentmate.com',
            password: 'Rentmate2025$',
            passwordConfirm: 'Rentmate2025$'
        },
        resolver: zodResolver(registerFormFieldsSchema)
    })
    const onRegisterUser = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        dispatch({ type: 'app/log-in', payload: data })
        navigate('/app', { replace: true })
    }

    return (
        <form onSubmit={handleSubmit(onRegisterUser)} className="space-y-4 flex flex-col max-w-md mx-auto">
            <div className="flex flex-col space-y-2">
                <label htmlFor="fullName" className="text-darkViolet dark:text-grayishViolet">FullName <span className="text-red-600">*</span></label>
                <input
                    disabled={isSubmitting}
                    id="fullName"
                    {...register('username')}
                    type="text"
                    placeholder="Enter your full name"
                    className={cn(errors.username ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                />
                {
                    errors.username &&
                    <div className='text-red-600 text-xs flex items-center gap-1'>
                        <CircleAlert className='w-4 h-4' />
                        {errors.username.message}
                    </div>
                }
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-darkViolet dark:text-grayishViolet">Email <span className="text-red-600">*</span></label>
                <input
                    disabled={isSubmitting}
                    id="email"
                    {...register('email')}
                    type="email"
                    placeholder="Enter your email"
                    className={cn(errors.email ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
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
                <label htmlFor="password" className="text-darkViolet dark:text-grayishViolet">
                    Password <span className="text-red-600">*</span>
                </label>

                <div className="relative w-full space-y-2">
                    <input
                        disabled={isSubmitting}
                        id="password"
                        {...register('password')}
                        type={isVisible ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className={cn(errors.password ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                    />
                    <button
                        onClick={() => setIsVisible(prev => !prev)}
                        type="button"
                        className="absolute cursor-pointer right-3 top-3 text-slate-400 dark:text-grayishViolet"
                    >
                        {isVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
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
            <div className="flex flex-col space-y-2">
                <label htmlFor="confirmPassword" className="text-darkViolet dark:text-grayishViolet">
                    Confirm Password <span className="text-red-600">*</span>
                </label>

                <div className="relative w-full space-y-2">
                    <input
                        disabled={isSubmitting}
                        id="confirmPassword"
                        {...register('passwordConfirm')}
                        type={isVisible ? 'text' : 'password'}
                        placeholder="Repeat your password"
                        className={cn(errors.passwordConfirm ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                    />
                    <button
                        onClick={() => setIsVisible(prev => !prev)}
                        type="button"
                        className="absolute cursor-pointer right-3 top-3 text-slate-400 dark:text-grayishViolet"
                    >
                        {isVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>
                    {
                        errors.passwordConfirm &&
                        <div className='text-red-600 text-xs flex items-center gap-1'>
                            <CircleAlert className='w-4 h-4' />
                            {errors.passwordConfirm.message}
                        </div>
                    }
                </div>
            </div>
            <button disabled={isSubmitting} type='submit' className="bg-primary disabled:cursor-not-allowed flex justify-center items-center gap-2 w-full font-bold text-white rounded-md px-6 py-2 cursor-pointer hover:bg-cyan-500 transition duration-300">
                {isSubmitting && <Spinner />}
                <span>{isSubmitting ? 'Creating account...' : 'Register'}</span>
            </button>
        </form>
    )
}
