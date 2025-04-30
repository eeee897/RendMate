import { Star } from 'lucide-react'
import { dummyStatusData } from '../utils/constants'
import StatusOperations from '../ui/StatusOperations'

export default function StatusPage() {
    return (
        <section className='flex flex-col gap-2 '>
            <h1 className="title">Status</h1>
            <div className='flex justify-end items-center'>
                <StatusOperations />
            </div>
            <div className="relative w-full overflow-auto rounded-lg border border-slate-300 [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <th className="table-head">ITEM</th>
                        <th className="table-head">RENTER</th>
                        <th className="table-head">REQUESTED ON</th>
                        <th className="table-head">DURATION</th>
                        <th className="table-head">AMOUNT</th>
                        <th className="table-head">STATUS</th>
                    </thead>
                    <tbody className="table-body">
                        {dummyStatusData.map((status) => (
                            <tr
                                key={status.id}
                                className="table-row"
                            >
                                <td className="table-cell">
                                    <div className="flex w-max gap-x-4">
                                        <img
                                            src={status.itemImage}
                                            alt={status.itemName}
                                            className="size-14 rounded-lg object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <p>{status.itemName}</p>
                                            <div className="flex items-center gap-x-2">
                                                <Star
                                                    size={18}
                                                    className="fill-yellow-600 stroke-yellow-600"
                                                />
                                                <p className='mt-0.5'>{status.itemRating}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="table-cell">{status.renterName}</td>
                                <td className="table-cell">
                                    {status.requestedOn}
                                </td>
                                <td className="table-cell">
                                    <div className='flex flex-col space-y-2'>
                                        In 3 days → {status.duration} days rent
                                        <p className='text-gray-400 text-xs'>May 02 2025 → May 05 2025</p>
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="flex statuss-center gap-x-2">
                                        {status.totalPrice} THB
                                    </div>
                                </td>
                                <td className="table-cell">
                                    <div className="flex flex-col gap-y-2">
                                        <button className="bg-green-600 rounded-lg cursor-pointer hover:bg-green-700 border-b-[3px] border-b-green-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-green-700 text-white font-bold py-1">
                                            Accept
                                        </button>
                                        <button className="bg-red-600 rounded-lg cursor-pointer hover:bg-red-700 border-b-[3px] border-b-red-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-red-700 text-white font-bold py-1">
                                            Reject
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
