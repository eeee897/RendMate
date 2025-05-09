import { XCircleIcon } from "lucide-react";
import StarRating from "../rating/StarRating";
import toast from "react-hot-toast";

export default function ReviewModal({ onCloseModal, item }) {
    return (
        <div className="bg-slate-50 p-5 rounded-lg flex flex-col space-y-4 md:w-[650px] dark:bg-veryDarkViolet">
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-gray-200 dark:border-veryDarkBlue">
                <h1 className="font-bold text-2xl text-primary ">Rate this item.</h1>
                <XCircleIcon
                    type='button'
                    onClick={onCloseModal}
                    className='fill-gray-600 dark:fill-none dark:text-grayishViolet dark:hover:fill-none dark:hover:text-white transition duration-300 text-white cursor-pointer hover:fill-black' />
            </div>
            <div className="flex gap-3">
                <div className="w-1/3 flex rounded-md items-center justify-center">
                    <img src={item.itemImage} className="w-full h-full object-center rounded-md" alt={item.itemName} />
                </div>
                <div className="w-2/3 flex flex-col gap-2">
                    <div>
                        <h1 className="font-bold text-2xl text-primary">{item.itemName}</h1>
                        <span className="text-grayishViolet text-xs">From: Fisheeesh</span>
                    </div>
                    <StarRating />
                    <textarea name="" id="" className="resize-none border border-slate-300 focus:outline-0 foucs:border-primary dark:focus:border-darkViolet transition duration-300 rounded-md p-2 text-sm dark:border-veryDarkBlue dark:text-slate-50" rows={5} placeholder="What do you think of this item?"></textarea>
                    <button
                        onClick={() => {
                            toast.success('Action performed successfully.')
                            onCloseModal()
                        }}
                        className="text-white bg-primary w-fit rounded-full px-5 font-bold py-2 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0  cursor-pointer">
                        Rate Now
                    </button>
                </div>
            </div>
        </div>
    )
}
