
import { BadgePlus, Settings, XIcon } from 'lucide-react';
import ImageDropDown from '../ImageDropDown';
import { cn } from '@/utils/cn'
import toast from 'react-hot-toast';
import { useState } from 'react';

const maxCate = 5

export default function CreateEditItemModal({ itemToEdit = {}, onCloseModal }) {
    const { id, ...editValues } = itemToEdit
    const isEditSession = Boolean(id)

    const [categories, setCategories] = useState(editValues.extras || []);
    const [newCategory, setNewCategory] = useState('')

    const addCategory = () => {
        if (categories.includes(newCategory) || newCategory === '') {
            setNewCategory('')
            return
        }

        setCategories(prevCate => [...prevCate, newCategory])
        setNewCategory('')
    }

    const deleteCategory = (category) => {
        setCategories(prevCate => prevCate.filter(c => c !== category))
    }

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
                        defaultValue={editValues.name}
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
                        defaultValue={editValues.description}
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
                        defaultValue={editValues.rentalPrice}
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
                        defaultValue={editValues.deposit}
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
                <div className='flex items-center gap-2'>
                    <input
                        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                        onChange={e => setNewCategory(e.target.value)}
                        value={newCategory}
                        id="extras"
                        type="text"
                        placeholder="cashback..."
                        className={cn(
                            'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                        )}
                    />
                    <button disabled={categories.length >= maxCate} onClick={addCategory} type="button" className={`p-1 mt-3 mb-3 rounded-full bg-primary ${categories.length >= maxCate ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
                {!!categories.length && <div className="flex flex-wrap gap-2 mt-2">
                    {
                        categories.map((cate, index) => (<span key={index} className={`px-3 py-2.5 border rounded-md border-primary`}>{cate}<span className="cursor-pointer ms-3" onClick={() => deleteCategory(cate)}>&#10006;</span></span>))
                    }
                </div>}
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm" htmlFor="location">Loacaiton: <span className="text-red-600">*</span> </label>
                <input
                    defaultValue={editValues.location}
                    id="location"
                    type="text"
                    placeholder="MFU"
                    className={cn(
                        'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                    )}
                />
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm" htmlFor="condition">Condition: <span className="text-red-600">*</span> </label>
                <input
                    defaultValue={editValues.condition}
                    id="condition"
                    type="text"
                    placeholder="Brand New"
                    className={cn(
                        'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-slate-700 border-slate-300 dark:border-slate-500 focus:border-primary dark:focus:border-indigo-500',
                    )}
                />
            </div>
            <div className='flex items-center justify-center gap-2 mt-3'>
                <button onClick={onCloseModal} type='button' className='px-4 py-2 border rounded-lg font-bold text-darkViolet border-gray-400 cursor-pointer hover:bg-darkViolet hover:text-slate-50 transition duration-300 hover:border-darkViolet'>
                    Cancel
                </button>
                <button
                    type='submit'
                    onClick={() => {
                        toast.success(isEditSession ? 'Item edited successfully.' : 'Item created successfully.')
                        onCloseModal()
                    }}
                    className='px-4 py-2 rounded-lg bg-primary text-white font-bold border border-primary cursor-pointer hover:bg-cyan-500 transition duration-300 hover:border-cyan-500'>
                    {isEditSession ? 'Edit Item' : 'Create Item'}
                </button>
            </div>
        </div>
    )
}
