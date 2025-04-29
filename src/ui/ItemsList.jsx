import React from 'react'
import { items } from '../utils/constants'
import Item from './Item'

export default function ItemsList() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {
                items.map(item => (
                    <Item key={item.id} item={item} />
                ))
            }
        </div>
    )
}
