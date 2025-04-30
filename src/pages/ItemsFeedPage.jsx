import React from 'react'
import ItemsList from '../ui/ItemsList'
import ItemsFeedOperation from '../ui/operations/ItemsFeedOperation'
import Searchbar from '../ui/Searchbar'
import { items } from '@/utils/constants'
import Title from '../ui/Title'

export default function ItemsFeedPage() {
    return (
        <section className='flex flex-col gap-2'>
            <Title text={'Available Items'} />
            <div className='md:flex items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2 justify-between flex-col-2'>
                <Searchbar />
                <ItemsFeedOperation />
            </div>
            <ItemsList items={items} />
        </section>
    )
}
