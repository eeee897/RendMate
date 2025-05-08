import React from 'react'

export default function LenderStatusBtns({ st, onHandleClick, onHandleDelete }) {
    return (
        <div className="flex flex-col gap-y-2">
            {
                st.status === 'Pending' &&
                <>
                    <button onClick={() => onHandleClick(st.id)} className="bg-green-600 px-4 rounded-lg cursor-pointer hover:bg-green-700 border-b-[3px] border-b-green-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-green-700 text-white font-bold py-1">
                        Accept
                    </button>
                    <button onClick={() => onHandleDelete(st.id)} className="bg-red-600 px-4 rounded-lg cursor-pointer hover:bg-red-700 border-b-[3px] border-b-red-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-red-700 text-white font-bold py-1">
                        Reject
                    </button>
                </>
            }
            {
                st.status === 'Packaging' &&
                <>
                    <button className=" px-4 rounded-lg text-yellow-500 border border-yellow-500 font-bold py-1">
                        Packaging
                    </button>
                    <button onClick={() => onHandleClick(st.id)} className="bg-green-600 px-4 rounded-lg cursor-pointer hover:bg-green-700 border-b-[3px] border-b-green-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-green-700 text-white font-bold py-1">
                        Delivered
                    </button>
                </>
            }
            {
                st.status === 'Delivered' &&
                <>
                    <button className="px-4 rounded-lg text-yellow-500 border border-yellow-500 font-bold py-1">
                        Renting
                    </button>
                    <button className="bg-green-600 px-4 rounded-lg cursor-pointer hover:bg-green-700 border-b-[3px] border-b-green-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-green-700 text-white font-bold py-1">
                        Received
                    </button>
                </>
            }
            {
                st.status === 'Recieved' &&
                <span className="px-4 rounded-lg text-yellow-500 border border-yellow-500 font-bold py-1">
                    Waiting for payment
                </span>
            }
        </div>
    )
}
