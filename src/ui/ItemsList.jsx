import React from 'react'
import Item from './Item'
import { useSearchParams } from 'react-router-dom'
import Menus from './menu/Menus'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import empty from '@/assets/animations/empty.lottie'
import NumberPagination from './paginations/NumberPagination'
import { PAGE_SIZE } from '../utils/constants'
import { useApp } from '@/context/AppContextProvider'

export default function ItemsList({ itemsList = [] }) {
    const { allItems } = useApp()
    const [searchParams] = useSearchParams()

    const items = allItems.filter(item => item.status === 'Normal')

    //? filter
    const filterValue = searchParams.get('usage') || 'all'

    let filteredItems;
    if (filterValue === 'all') filteredItems = itemsList.length ? itemsList : items
    if (filterValue === 'available') filteredItems = itemsList.length ? itemsList?.filter(item => item.usage === 'Available') : items?.filter(item => item.usage === 'Available')
    if (filterValue === 'taken') filteredItems = itemsList.length ? itemsList.filter(item => item.usage === 'Taken') : items?.filter(item => item.usage === 'Taken')

    //? sort
    const sortByValue = searchParams.get('sortBy') || 'sortField-asc'

    const [field, direction] = sortByValue.split('-')
    const modifier = direction === 'asc' ? 1 : -1
    const sortedItems = filteredItems?.sort((a, b) => {
        if (typeof a[field] === 'string') {
            return a[field].localeCompare(b[field]) * modifier
        }
        return (a[field] - b[field]) * modifier
    })

    //? search
    const searchValue = searchParams.get('search') || ''
    const normalize = (str) => str.toLowerCase().replace(/\s+/g, '')
    const searchedItems = sortedItems.filter(item =>
        normalize(item.name).includes(normalize(searchValue))
    )

    //? pagination
    const page = Number(searchParams.get("page")) || 1
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE
    const paginatedItems = searchedItems?.slice(from, to)

    if (!searchedItems.length || !paginatedItems.length) return (
        <div className='flex items-center justify-center flex-col mt-12'>
            <DotLottieReact
                src={empty}
                loop
                autoplay
                style={{ width: '500px', height: '300px' }}
            />
            <h1 className='text-lg sm:text-xl md:text-2xl text-darkViolet dark:text-slate-50 font-bold'>Oops. No items found...</h1>
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
            <NumberPagination count={searchedItems.length} />
        </Menus>
    )
}
