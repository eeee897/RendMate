import React, { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';

export default function ProfilePage() {
    usePageTitle('Account')
    const [fullName, setFullName] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <section className="">
            <h1 className="text-3xl font-bold text-darkViolet mb-8 dark:text-slate-50">Update your account</h1>

            <div className="space-y-10 ">
                {/* Update User Data */}
                <div className="bg-white p-6 rounded-lg shadow dark:bg-veryDarkViolet">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 dark:text-slate-50">Update user data</h2>
                    <div className="space-y-6">
                        {/* Email Row */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="w-1/4 text-sm font-medium text-gray-600 dark:text-slate-50">Email address</label>
                            <input
                                type="email"
                                value="user@rentmate.com"
                                disabled
                                className="w-1/2 p-2 rounded-md dark:disabled:bg-grayishViolet dark:disabled:border-veryDarkBlue focus:outline-0 focus:border-primary border-slate-300 transition duration-300 border bg-gray-100 text-gray-500 cursor-not-allowed"
                            />
                            <span className="w-1/4 text-xs text-red-500 text-right hidden lg:block"></span>
                        </div>

                        {/* Full name row */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="w-1/4 text-sm font-medium text-gray-600 dark:text-slate-50">Full name</label>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-1/2 p-2 rounded-md dark:border-veryDarkBlue dark:focus:border-darkViolet dark:text-slate-50 focus:outline-0 focus:border-primary transition duration-300 border border-gray-300"
                            />
                            <span className="w-1/4 text-xs text-red-500 text-right"></span>
                        </div>

                        {/* Avatar image row */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="w-1/4 text-sm font-medium text-gray-600 dark:text-slate-50">Avatar image</label>
                            <div className="w-1/2">
                                <label className="inline-block px-4 py-2 rounded-md  bg-primary text-white cursor-pointer hover:bg-cyan-500 transition">
                                    Choose File
                                    <input
                                        type="file"
                                        onChange={(e) => setAvatar(e.target.files[0])}
                                        className="hidden"
                                    />
                                </label>
                                <span className="ml-3 text-sm text-darkViolet dark:text-slate-50">
                                    {avatar ? avatar.name : 'No file chosen'}
                                </span>
                            </div>
                            <span className="w-1/4 text-xs text-red-500 text-right hidden lg:block"></span>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button type='button' className='px-4 dark:border-veryDarkBlue dark:text-slate-50 py-2 border rounded-lg font-bold text-darkViolet border-gray-400 cursor-pointer hover:bg-darkViolet hover:text-slate-50 transition duration-300 hover:border-darkViolet'>
                                Cancel
                            </button>
                            <button className="px-4 py-2 rounded-lg cursor-pointer  duration-300 transition bg-primary text-white font-bold hover:bg-cyan-500">
                                Update account
                            </button>
                        </div>
                    </div>
                </div>

                {/* Update Password */}
                <div className="bg-white p-6 rounded-lg shadow dark:bg-veryDarkViolet">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 dark:text-slate-50">Update password</h2>
                    <div className="space-y-6">
                        {/* Password row */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="w-1/4 text-sm font-medium text-gray-600 dark:text-slate-50">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-1/2 p-2 rounded-md dark:border-veryDarkBlue dark:focus:border-darkViolet dark:text-slate-50 focus:outline-0 focus:border-primary transition duration-300 border border-gray-300"
                            />
                            <span className="w-1/4 text-xs text-red-500 text-right hidden lg:block"></span>
                        </div>

                        {/* Confirm password row */}
                        <div className="flex items-center justify-between gap-4">
                            <label className="w-1/4 text-sm font-medium text-gray-600 dark:text-slate-50">Confirm password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-1/2 p-2 rounded-md dark:border-veryDarkBlue dark:focus:border-darkViolet dark:text-slate-50 focus:outline-0 focus:border-primary transition duration-300 border border-gray-300"
                            />
                            <span className="w-1/4 text-xs text-red-500 text-right hidden lg:block"></span>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button type='button' className='px-4 dark:border-veryDarkBlue dark:text-slate-50 py-2 border rounded-lg font-bold text-darkViolet border-gray-400 cursor-pointer hover:bg-darkViolet hover:text-slate-50 transition duration-300 hover:border-darkViolet'>
                                Cancel
                            </button>
                            <button className="px-4 py-2 rounded-lg cursor-pointer duration-300 transition bg-primary text-white font-bold hover:bg-cyan-500">
                                Update password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}