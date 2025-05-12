import cat from '@/assets/animations/cat.lottie'
import { useApp } from '@/context/AppContextProvider'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { MoveUp } from 'lucide-react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { PAGE_SIZE } from '../utils/constants'
import Item from './Item'
import Menus from './menu/Menus'
import NumberPagination from './paginations/NumberPagination'

export default function MyItemsList() {
    const { allItems } = useApp()
    const [searchParams] = useSearchParams()

    const items = allItems.filter(item => item.ownerId)

    //? pagination
    const page = Number(searchParams.get("page")) || 1
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE
    const paginatedItems = items?.slice(from, to)

    if (!items.length) return (
        <div className='flex items-center justify-center flex-col mt-12'>
            <DotLottieReact
                src={cat}
                loop
                autoplay
                style={{ width: '400px', height: '200px' }}
            />
            <div className='flex group cursor-pointer items-center gap-2'>
                <h1 className='text-lg sm:text-xl md:text-2xl text-darkViolet dark:text-slate-50 font-bold'>No items yet. Add some!</h1>
                <MoveUp className='transition-transform text-darkViolet dark:text-slate-50 hidden md:block duration-300 mb-2 group-hover:rotate-[45deg]' />
                <MoveUp className='transition-transform text-darkViolet dark:text-slate-50 duration-300 group-hover:-translate-y-2.5 mb-2 md:hidden block' />
            </div>
        </div>
    )

    return (
        <Menus>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                {
                    paginatedItems?.map(item => (
                        <Item key={item.id} item={item} />
                    ))
                }
            </div>
            <NumberPagination count={items.length} />
        </Menus>
    )
}
