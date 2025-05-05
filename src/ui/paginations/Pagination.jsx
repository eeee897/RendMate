import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { PAGE_SIZE } from '../../utils/constants'

export default function Pagination({ count }) {
    const [searchParams, setSearchParams] = useSearchParams()

    const currentPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1

    const totalPage = Math.ceil(count / PAGE_SIZE)

    const isFirst = currentPage === 1
    const isLast = currentPage === totalPage

    const prevPage = () => {
        searchParams.set('page', isFirst ? 1 : currentPage - 1)
        setSearchParams(searchParams)
    }

    const nextPage = () => {
        searchParams.set('page', isLast ? totalPage : currentPage + 1)
        setSearchParams(searchParams)
    }

    if (totalPage === 1) return null

    return (
        <div className='flex items-center justify-between gap-2 dark:text-slate-50'>
            <p>Showing <span className='font-bold'>{(currentPage - 1) * PAGE_SIZE + 1}</span> to <span className='font-bold'>{isLast ? count : currentPage * PAGE_SIZE}</span> of <span className='font-bold'>{count}</span> results</p>
            <div className='flex items-center gap-2 '>
                <button
                    disabled={isFirst}
                    onClick={prevPage}
                    type='button'
                    className='flex px-2 dark:disabled:hover:bg-[#1a191d] dark:disabled:hover:text-slate-50 dark:text-slate-50 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:hover:text-darkViolet transition duration-300 py-1 rounded-md hover:bg-primary hover:text-white text-darkViolet font-bold items-center gap-2 cursor-pointer'
                >
                    <ChevronLeft />
                    Previous
                </button>
                <button
                    disabled={isLast}
                    onClick={nextPage}
                    type='button'
                    className='flex px-2 dark:disabled:hover:bg-[#1a191d] dark:disabled:hover:text-slate-50 dark:text-slate-50 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:hover:text-darkViolet transition duration-300 py-1 rounded-md hover:bg-primary hover:text-white text-darkViolet font-bold items-center gap-2 cursor-pointer'
                >
                    Next
                    <ChevronRight />
                </button>
            </div>
        </div>
    )
}
