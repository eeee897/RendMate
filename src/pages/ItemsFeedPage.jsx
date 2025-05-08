import React from 'react'
import usePageTitle from '../hooks/usePageTitle'
import ItemsList from '../ui/ItemsList'
import CommonOperations from '../ui/operations/CommonOperations'
import Searchbar from '../ui/Searchbar'
import Title from '../ui/Title'

export default function ItemsFeedPage() {
    usePageTitle('Items Feed')

    return (
        <section className='flex flex-col gap-2'>
            <Title text={'Available Items'} />
            <div className='md:flex items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2 justify-between flex-col-2'>
                <Searchbar />
                <CommonOperations filterFieldValue={'usage'} />
            </div>
            <ItemsList />
        </section>
    )
}
