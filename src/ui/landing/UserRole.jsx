import { User, UserCog } from 'lucide-react'

const userRoles = [
    {
        icon: <UserCog className='w-20 h-20 dark:text-slate-50 text-darkViolet' />,
        role: 'Renter',
        access: ['Browse and search items.', 'Request rentals and payments.', 'Manage rental histor.']
    },
    {
        icon: <User className='w-20 h-20 dark:text-slate-50 text-darkViolet' />,
        role: 'Lender',
        access: ['Manage and list items for rent.', 'Manage and track rental requests.', 'Give feedback to renters.']
    }
]

export default function UserRole() {
    return (
        <section id='features' className="px-8 pb-16 text-center">
            <h3 className="text-4xl text-darkViolet font-bold mb-10 dark:text-slate-50">User roles</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {
                    userRoles.map((user, i) => (
                        <div key={i} className="dark:bg-veryDarkViolet bg-white shadow-md flex flex-col items-center gap-4 p-8 rounded-lg w-full md:w-1/3">
                            {user.icon}
                            <div className='flex flex-col'>
                                <h4 className="font-bold text-darkViolet text-xl dark:text-slate-50">{user.role}</h4>
                                <ul className="text-darkViolet dark:text-grayishViolet mt-2 text-sm text-left list-disc ml-4">
                                    {
                                        user.access.map((access, idx) => (<li key={idx}>{access}</li>))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
