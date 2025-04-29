import { Search } from 'lucide-react'
import React from 'react'

export default function Searchbar() {
    return (
        <div className="input">
            <Search
                size={20}
                className="text-slate-300"
            />
            <input
                autoComplete="off"
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
            />
        </div>
    )
}
