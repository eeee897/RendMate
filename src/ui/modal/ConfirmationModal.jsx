import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ConfirmDeleteItemModal({ onCloseModal, name = '', type }) {
    const navigate = useNavigate();

    let confirm;
    if (type === 'logout') confirm = { title: "Logout", subTitle: 'logout' }
    if (type === 'delete') confirm = { title: "Delete", subTitle: `delete "${name}"` }
    if (type === 'disabled') confirm = { title: "Disable", subTitle: `disable "${name}"` }

    return (
        <div className='bg-slate-50 p-5 rounded-lg w-[450px]'>
            <h1 className={`${type === 'logout' ? 'text-primary' : 'text-red-600'} font-bold text-2xl border-b border-gray-200 pb-4 mb-4`}>{confirm.title} Confirmation.</h1>
            <p className='text-darkViolet font-medium text-lg'>Are you sure you want to {confirm.subTitle}?</p>
            <div className='flex items-center justify-end gap-2 mt-6'>
                <button onClick={onCloseModal} type='button' className='px-4 py-2 border rounded-lg font-bold text-gray-400 border-gray-400 cursor-pointer hover:bg-black hover:text-slate-50 transition duration-300 hover:border-black'>
                    Cancel
                </button>
                <button
                    onClick={
                        type === 'logout' ? () => {
                            navigate('/auth')
                            onCloseModal()
                        } : () => {
                            toast.success('Action performed successfully.')
                            onCloseModal()
                        }
                    }
                    type='submit'
                    className={`${type === 'logout' ? 'bg-primary border-cyan-500 hover:bg-cyan-500 hover:border-cyan-500' : 'bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700'} px-4 py-2 rounded-lg  text-white font-bold border cursor-pointer transition duration-300`}>
                    Confrim
                </button>
            </div>
        </div>
    )
}
