import { Check, Frown, Loader, Star } from 'lucide-react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { dummyStatusData, PAGE_SIZE } from '../../utils/constants'
import Pagination from '../paginations/Pagination'

export default function StatusTable() {
    const [searchParams] = useSearchParams()
    const filterValue = searchParams.get('status') ?? 'lend'

    let filteredData;
    if (filterValue === 'rent') filteredData = dummyStatusData.filter(st => st.mine)
    if (filterValue === 'lend') filteredData = dummyStatusData.filter(st => !st.mine)

    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE
    const paginatedData = filteredData?.slice(from, to)

    return (
        <>
            <div className="relative w-full overflow-auto rounded-lg border border-grayishViolet [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th className="table-head">ITEM</th>
                            <th className="table-head">RENTER</th>
                            <th className="table-head">REQUESTED ON</th>
                            <th className="table-head">DURATION</th>
                            <th className="table-head">AMOUNT</th>
                            <th className="table-head">STATUS</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {paginatedData?.map((st) => (
                            <tr
                                key={st.id}
                                className="table-row"
                            >
                                <td className="table-cell">
                                    <div className="flex w-max gap-x-4">
                                        <img
                                            src={st.itemImage}
                                            alt={st.itemName}
                                            className="size-14 rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p>{st.itemName}</p>
                                            <div className="flex items-center gap-x-2">
                                                <Star
                                                    size={18}
                                                    className="fill-yellow-600 stroke-yellow-600"
                                                />
                                                <p className='mt-0.5'>{st.itemRating}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="table-cell">{st.renterName}</td>
                                <td className="table-cell">
                                    {st.requestedOn}
                                </td>
                                <td className="table-cell">
                                    <div className='flex flex-col space-y-2'>
                                        In 3 days → {st.duration} days rent
                                        <p className='text-gray-400 text-xs'>May 02 2025 - May 05 2025</p>
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="flex sts-center gap-x-2">
                                        {st.totalPrice} THB
                                    </div>
                                </td>
                                <td className="table-cell">
                                    {
                                        st.status === 'Rejected' ?
                                            <div className="flex flex-col gap-y-2">
                                                <button className="border-red-600 flex items-center gap-2 justify-center border rounded-lg text-red-600 font-bold py-1">
                                                    <Frown className='w-4 h-4' />
                                                    <span>
                                                        Rejected
                                                    </span>
                                                </button>
                                            </div> :
                                            <div className="flex flex-col gap-y-2">
                                                {st.isConfirmed ?
                                                    <>
                                                        <button className="border-green-600 flex items-center gap-2 justify-center border rounded-lg text-green-600 font-bold py-1">
                                                            <Check className='w-4 h-4' />
                                                            <span>
                                                                Accepted
                                                            </span>
                                                        </button>
                                                        {
                                                            !st.receieved ?
                                                                <button className="border-yellow-600 flex items-center justify-center gap-2 border rounded-lg text-yellow-600 font-bold py-1">
                                                                    <Loader className='w-4 h-4' />
                                                                    <span>
                                                                        Pending
                                                                    </span>
                                                                </button> :
                                                                <button className="border-green-600 flex items-center gap-2 justify-center border rounded-lg text-green-600 font-bold py-1">
                                                                    <Check className='w-4 h-4' />
                                                                    <span>
                                                                        O.Received
                                                                    </span>
                                                                </button>
                                                        }
                                                    </> :
                                                    <>
                                                        <button className="bg-green-600 rounded-lg cursor-pointer hover:bg-green-700 border-b-[3px] border-b-green-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-green-700 text-white font-bold py-1">
                                                            Accept
                                                        </button>
                                                        <button className="bg-red-600 rounded-lg cursor-pointer hover:bg-red-700 border-b-[3px] border-b-red-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-red-700 text-white font-bold py-1">
                                                            Reject
                                                        </button>
                                                    </>
                                                }
                                            </div>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination count={filteredData.length} />
        </>
    )
}
