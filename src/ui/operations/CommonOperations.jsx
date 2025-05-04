import React from 'react'
import Filter from '../filter/Filter'
import SortBy from '../filter/SortBy'

export default function CommonOperations({ filterFieldValue }) {
    const optionsValue = {
        'usage': [
            { value: 'all', label: 'All' },
            { value: 'available', label: 'Available' },
            { value: 'taken', label: 'Taken' },
        ],
        'status': [
            { value: 'lend', label: 'Requests Recieved' },
            { value: 'rent', label: 'My Rentals' },
        ],
        'history': [
            { value: 'borrowed', label: 'My History' },
            { value: 'lent', label: 'Lent History' },
        ]
    }

    return (
        <div className="flex gap-2 md:flex-row md:items-center flex-col w-fit">
            <Filter
                filterField={filterFieldValue}
                options={optionsValue[filterFieldValue]}
            />
            {filterFieldValue === 'usage' && <SortBy options={[
                { value: 'name-asc', label: 'Sort by name (A-Z)' },
                { value: 'name-desc', label: 'Sort by name (Z-A)' },
                { value: "rentalPrice-desc", label: "Sort by price (highest first)" },
                { value: "rentalPrice-asc", label: "Sort by price (lowest first)" },
            ]} />}
        </div>
    )
}
