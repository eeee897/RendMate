import { useSearchParams } from "react-router-dom"
import { PAGE_SIZE } from "../../utils/constants"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function NumberPagination({ count }) {
    const [searchParams, setSearchParams] = useSearchParams()

    const totalPage = Math.ceil(count / PAGE_SIZE)
    const currentPage = Number(searchParams.get("page")) || 1

    const isFirst = currentPage === 1
    const isLast = currentPage === totalPage

    const goToPage = (page) => {
        searchParams.set("page", page)
        setSearchParams(searchParams)
    }

    const prevPage = () => goToPage(Math.max(currentPage - 1, 1))
    const nextPage = () => goToPage(Math.min(currentPage + 1, totalPage))

    if (totalPage === 1) return null

    return (
        <div className="flex items-center gap-3 justify-center mt-4">
            <button
                onClick={prevPage}
                disabled={isFirst}
                className={`flex w-7 h-7 disabled:border-gray-400 items-center justify-center border rounded-md text-sm font-bold 
                    ${isFirst ? "cursor-not-allowed text-gray-400" : "cursor-pointer border-gray-600 dark:text-white hover:bg-primary hover:text-white hover:border-primary"}`}
            >
                <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1">
                {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
                    <span
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`h-7 w-7 flex dark:text-slate-50  items-center justify-center rounded-md text-sm font-bold border 
                            ${page === currentPage
                                ? "bg-primary text-white border-primary"
                                : "text-gray-600 border-gray-600 cursor-pointer hover:bg-primary hover:text-white hover:border-primary"
                            }`}
                    >
                        {page}
                    </span>
                ))}
            </div>

            <button
                onClick={nextPage}
                disabled={isLast}
                className={`flex w-7 h-7 disabled:border-gray-400 items-center justify-center border rounded-md text-sm font-bold 
                    ${isLast ? "cursor-not-allowed text-gray-400 " : "cursor-pointer border-gray-600 dark:text-white hover:bg-primary hover:text-white hover:border-primary"}`}
            >
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    )
}