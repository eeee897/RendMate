import HistoryOperations from "../ui/operations/HistoryOperations";
import { dummyStatusData } from "../utils/constants";
import { Star } from 'lucide-react'

export default function HistoryPage() {
    return (
        <section className='flex flex-col gap-2 '>
            <h1 className="title">History</h1>
            <div className="flex items-center justify-end">
                <HistoryOperations />
            </div>
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
                                    <button className="bg-primary px-4 rounded-lg cursor-pointer hover:bg-cyan-500 border-b-[3px] border-b-cyan-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-cyan-500 text-white font-bold py-1">
                                        Review
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
