import { User, UserCog } from 'lucide-react'
import React from 'react'

export default function UserRole() {
    return (
        <section id='features' className="px-8 pb-16 text-center">
            <h3 className="text-4xl text-darkViolet font-bold mb-10">User roles</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="border border-slate-300 shadow-md flex flex-col items-center gap-4 p-8 rounded-lg w-full md:w-1/3">
                    <UserCog className='w-20 h-20' />
                    <div className='flex flex-col'>
                        <h4 className="font-bold text-darkViolet text-xl">Renter</h4>
                        <ul className="text-darkViolet mt-2 text-sm text-left list-disc ml-4">
                            <li>Browse and search items</li>
                            <li>Request rentals and payments</li>
                            <li>Manage rental history</li>
                        </ul>
                    </div>
                </div>
                <div className="border border-slate-300 shadow-md flex flex-col items-center gap-4 p-8 rounded-lg w-full md:w-1/3">
                    <User className='w-20 h-20' />
                    <div className='flex flex-col'>
                        <h4 className="font-bold text-darkViolet text-xl">Lender</h4>
                        <ul className="text-darkViolet mt-2 text-sm text-left list-disc ml-4">
                            <li>List items for rent</li>
                            <li>Manage rental requests</li>
                            <li>Track earnings and feedback</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
