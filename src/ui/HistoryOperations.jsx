import React from 'react'
import Filter from './filter/Filter'

export default function HistoryOperations() {
    return (
        <div className="flex gap-2 md:flex-row md:items-center flex-col w-fit">
            <Filter
                filterField='type'
                options={[
                    { value: 'borrowed', label: 'My History' },
                    { value: 'lent', label: 'Lent History' },
                ]}
            />
        </div>
    )
}
