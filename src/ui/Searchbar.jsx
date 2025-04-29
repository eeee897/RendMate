import { Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

export default function Searchbar() {
    const [searchParams, setSearchParams] = useSearchParams()

    const onHandleSearch = (value) => {
        searchParams.set('search', value)
        setSearchParams(searchParams)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onHandleSearch(e.target.value)
        }
    }

    return (
        <div className="input">
            <Search
                size={20}
                className="text-slate-300"
            />
            <input
                onKeyDown={handleKeyDown}
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