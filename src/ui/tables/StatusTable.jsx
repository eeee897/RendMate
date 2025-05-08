import { useApp } from '@/context/AppContextProvider'
import { Star } from 'lucide-react'
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { dummyStatusDataLender, dummyStatusDataRenter, PAGE_SIZE } from '../../utils/constants'
import LenderStatusBtns from '../btns/LenderStatusBtns'
import RenterStatusBtns from '../btns/RenterStatusBtns'
import Pagination from '../paginations/Pagination'

export default function StatusTable() {
    const { isRenter } = useApp()
    const [searchParams] = useSearchParams()
    const [statusData, setStatusData] = useState(isRenter ? dummyStatusDataRenter : dummyStatusDataLender)

    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE
    const paginatedData = statusData?.slice(from, to)

    const onHandleDelete = (id) => {
        setStatusData(prev => prev.filter(data => data.id !== id))
    }

    const onHandleClickLender = (id) => {
        setStatusData(prev =>
            prev.map(data => {
                if (data.id !== id) return data

                let newStatus = data.status
                if (data.status === 'Pending') newStatus = 'Packaging'
                else if (data.status === 'Packaging') newStatus = 'Delivered'

                return { ...data, status: newStatus }
            })
        )
    }
    const onHandleClickRenter = (id) => {
        setStatusData(prev =>
            prev.map(data => {
                if (data.id !== id) return data

                let newStatus = data.status
                if (data.status === 'Pending') newStatus = 'Packaging'
                else if (data.status === 'Packaging') newStatus = 'Delivered'

                return { ...data, status: newStatus }
            })
        )
    }

    return (
        <>
            <div className="relative w-full overflow-auto rounded-lg border dark:border-veryDarkBlue border-grayishViolet [scrollbar-width:_thin]">
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
                                    {isRenter ? <RenterStatusBtns st={st} onHandleClick={onHandleClickRenter} onHandleDelete={onHandleDelete} /> : <LenderStatusBtns st={st} onHandleClick={onHandleClickLender} onHandleDelete={onHandleDelete} />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination count={statusData.length} />
        </>
    )
}
