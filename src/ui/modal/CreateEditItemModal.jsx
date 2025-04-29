/* eslint-disable no-unused-vars */
import { BadgePlus, Settings, XIcon } from 'lucide-react';
import ImageDropDown from '../ImageDropDown';
import { cn } from '@/utils/cn'

export default function CreateEditItemModal({ item = {}, onCloseModal }) {
    const { id, ...editValues } = item
    const isEditSession = Boolean(id)
    return (
        <div className={`p-6 md:w-[750px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-[450px] max-h-[95vh] bg-slate-100 flex overflow-y-scroll flex-col space-y-2 dark:bg-slate-900 dark:border-slate-700 transition-transform duration-300 dark:text-slate-50 rounded-lg shadow-lg relative`}>
            <button type='button' onClick={onCloseModal} className='absolute top-5 right-5 cursor-pointer hover:border hover:border-primary border border-transparent rounded-lg p-1 transition duration-300'>
                <XIcon />
            </button>
            <div className='flex items-center gap-2 mb-5 border-b pb-3 border-b-gray-200'>
                {isEditSession ? <Settings className='text-primary' /> : <BadgePlus className='text-primary' />}
                <h2 className='font-bold text-primary text-2xl'>{isEditSession ? 'Edit Item' : 'Create New Item'}</h2>
            </div>
            <ImageDropDown />
            <div className="flex w-full gap-4">
                <div className="flex flex-col w-1/2 space-y-1">
                    <label className="text-sm" htmlFor="name">Name: <span className="text-red-600">*</span></label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Item Name"
                        className={cn(
                            'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                        )}
                    />
                </div>
                <div className="flex flex-col w-1/2 space-y-1">
                    <label className="text-sm" htmlFor="description">Description: <span className="text-red-600">*</span></label>
                    <input
                        id="description"
                        type="text"
                        placeholder="Description"
                        className={cn(
                            'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                        )}
                    />
                </div>
            </div>
            <div className="flex w-full gap-4">
                <div className="flex flex-col w-1/2 space-y-1">
                    <label className="text-sm" htmlFor="price">Price: <span className="text-red-600">*</span></label>
                    <input
                        id="price"
                        type="text"
                        placeholder="Rental price per day"
                        className={cn(
                            'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                        )}
                    />
                </div>
                <div className="flex flex-col w-1/2 space-y-1">
                    <label className="text-sm" htmlFor="deposit">Deposit: <span className="text-red-600">*</span></label>
                    <input
                        id="deposit"
                        type="text"
                        placeholder="Deposit"
                        className={cn(
                            'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                        )}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm" htmlFor="extras">ExtrasIncluded: </label>
                <input
                    id="extras"
                    type="text"
                    placeholder="cashback..."
                    className={cn(
                        'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                    )}
                />
            </div>
            <div className="flex w-full gap-4">
                <div className="flex flex-col w-1/2 space-y-1">
                    <label className="text-sm" htmlFor="price">Price: <span className="text-red-600">*</span></label>
                    <input
                        id="price"
                        type="text"
                        placeholder="Rental price per day"
                        className={cn(
                            'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                        )}
                    />
                </div>
                <div className="flex flex-col w-1/2 space-y-1">
                    <label className="text-sm" htmlFor="deposit">Deposit: <span className="text-red-600">*</span></label>
                    <input
                        id="deposit"
                        type="text"
                        placeholder="Deposit"
                        className={cn(
                            'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                        )}
                    />
                </div>
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm" htmlFor="extras">ExtrasIncluded: </label>
                <input
                    id="extras"
                    type="text"
                    placeholder="cashback..."
                    className={cn(
                        'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                    )}
                />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm" htmlFor="location">Loacaiton: <span className="text-red-600">*</span> </label>
                <input
                    id="location"
                    type="text"
                    placeholder="MFU"
                    className={cn(
                        'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                    )}
                />
            </div>
            <div className='flex items-center justify-center gap-2 mt-3'>
                <button onClick={onCloseModal} type='button' className='px-4 py-2 border rounded-lg font-bold text-gray-400 border-gray-400 cursor-pointer hover:bg-black hover:text-slate-50 transition duration-300 hover:border-black'>
                    Cancel
                </button>
                <button onClick={onCloseModal} type='submit' className='px-4 py-2 rounded-lg bg-primary text-white font-bold border border-primary cursor-pointer hover:bg-cyan-500 transition duration-300 hover:border-cyan-500'>
                    {isEditSession ? 'Edit Item' : 'Create Item'}
                </button>
            </div>
        </div>
    )
}
