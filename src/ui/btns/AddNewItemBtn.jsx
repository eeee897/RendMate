import { Plus } from 'lucide-react'

export default function AddNewItemBtn() {
    return (
        <button className='flex items-center gap-2 px-4 p-2.5 border-b-[3px] border-b-cyan-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-cyan-500 bg-primary rounded-full hover:bg-cyan-500 cursor-pointer text-white'>
            <Plus /> <span className='text-white font-bold'>Add new Item</span>
        </button>
    )
}
