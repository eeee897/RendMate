import React from 'react'
import ItemsList from '../ui/ItemsList'
import ItemsFeedOperation from '../ui/ItemsFeedOperation'
import Searchbar from '../ui/Searchbar'
import { items } from '@/utils/constants'

export default function ItemsFeedPage() {
    return (
        <section className='flex flex-col gap-2'>
            <h1 className="title">Available Items</h1>
            <div className='md:flex items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2 justify-between flex-col-2'>
                <Searchbar />
                <ItemsFeedOperation />
            </div>
            <ItemsList items={items} />
        </section>
    )
}
