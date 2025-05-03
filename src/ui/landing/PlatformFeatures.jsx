import { CurrencyDollarIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import { LayoutDashboard } from 'lucide-react'

export default function PlatformFeatures() {
    return (
        <section className="px-4 max-w-[1380px] mx-auto pb-16 text-center">
            <h3 className="text-3xl font-bold mb-10">Platform features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Easy items listing', desc: 'Lenders can quickly list their building items with detailed descriptions and photos..', icon: <WrenchScrewdriverIcon className="w-28 h-28 text-gray-600" /> },
                    { title: 'Secure transactions', desc: 'Renters can safely rent items with secure payment options and transparent pricing.', icon: <CurrencyDollarIcon className='w-28 h-28 text-yellow-600' /> },
                    { title: 'Dashboard Management', desc: 'Admins, renters, and lenders have dedicated dashboards to manage their activities efficiently.', icon: <LayoutDashboard className='w-28 h-28 fill-primary stroke-primary' /> },
                ].map((feature, idx) => (
                    <div key={idx} className="flex text-darkViolet items-center gap-6 p-5 rounded-md border border-slate-300 shadow-md">
                        {feature.icon}
                        <div className='flex-col flex items-start text-start'>
                            <h4 className="font-bold text-[22px]">{feature.title}</h4>
                            <p className="mt-2 text-xs">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
