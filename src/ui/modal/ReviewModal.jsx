import { XCircleIcon } from "lucide-react";
import StarRating from "../rating/StarRating";
import toast from "react-hot-toast";

export default function ReviewModal({ onCloseModal, item }) {
    return (
        <div className="bg-slate-50 p-5 rounded-lg flex flex-col space-y-4 w-[450px]">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-gray-200">
                <h1 className="font-bold text-2xl text-primary ">Rate this item.</h1>
                <XCircleIcon
                    type='button'
                    onClick={onCloseModal}
                    className='fill-gray-600 transition duration-300 text-white cursor-pointer hover:fill-black' />
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
                <img src={item.itemImage} className="w-24 h-24 rounded-full" alt={item.itemName} />
                <h1 className="font-bold text-xl text-primary">{item.itemName}</h1>
                <StarRating />
                <button
                    onClick={() => {
                        toast.success('Action performed successfully.')
                        onCloseModal()
                    }}
                    className="text-white bg-primary rounded-full px-4 font-bold py-2 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0  cursor-pointer">
                    Rate Now
                </button>
            </div>
        </div>
    )
}
