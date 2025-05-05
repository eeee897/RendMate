import React from 'react'
import { items } from '../../utils/constants'
import Menus from '@/ui/menu/Menus'
import Item from '@/ui/Item'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContextProvider'

export default function PopularItems() {
    const navigate = useNavigate()
    const { isAuthenticated } = useApp()
    const popularItems = items.filter(item => item.rating >= 4.0).slice(0, 3)

    return (
        <section id='popular' className="max-w-[1380px] px-4 mx-auto py-16 text-center">
            <h3 className="text-4xl font-bold mb-10 text-darkViolet dark:text-slate-50">Our popular items</h3>
            <Menus>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {
                        popularItems?.map(item => (
                            <Item key={item.id} item={item} />
                        ))
                    }
                </div>
            </Menus>
            <button
                type='button'
                onClick={() => isAuthenticated ? navigate('/app') : navigate('/auth')}
                className='text-darkViolet px-6 py-2.5 dark:border-veryDarkBlue dark:hover:border-darkViolet dark:text-grayishViolet cursor-pointer hover:text-slate-50 hover:bg-darkViolet transition duration-300 font-bold rounded-full border-[1.5px] border-darkViolet mt-5'>See More</button>
        </section>
    )
}
