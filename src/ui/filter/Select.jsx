export default function Select({ value, options, onChange }) {
    return (
        <select
            value={value}
            className="flex gap-2 border text-sm md:text-base rounded-md shadow-sm px-1 py-1 focus:outline-0 dark:bg-transparent dark:text-slate-50 border-slate-300 dark:border-veryDarkBlue"
            onChange={onChange}>
            {
                options.map(opt => (
                    <option key={opt.label} value={opt.value}>
                        {opt.label}
                    </option>
                ))
            }
        </select>
    )
}
