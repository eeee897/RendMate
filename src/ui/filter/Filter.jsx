import { useSearchParams } from "react-router-dom"

export default function Filter({ filterField, options }) {
    const [searchParams, setSearchParams] = useSearchParams()

    const currentValue = searchParams.get(filterField) ?? options.at(0).value

    const handleClick = (value) => {
        searchParams.set(filterField, value)
        if (searchParams.get('page')) searchParams.set('page', 1)
        setSearchParams(searchParams)
    }

    return (
        <div className="p-[5px] border shadow-sm border-slate-300 dark:border-veryDarkBlue rounded-lg flex items-center gap-2">
            {
                options.map(opt => (
                    <button
                        key={opt.label}
                        disabled={opt.value === currentValue}
                        onClick={() => handleClick(opt.value)}
                        type="button"
                        className={`${currentValue === opt.value && 'bg-primary text-white'} dark:text-slate-50 hover:bg-primary hover:text-white transition duration-300 disabled:cursor-not-allowed px-2 font-medium rounded-md cursor-pointer`}
                    >
                        {opt.label}
                    </button>
                ))
            }
        </div>
    )
}
