
import { BadgePlus, Settings, XIcon } from 'lucide-react';
import ImageDropDown from '../ImageDropDown';
import { cn } from '@/utils/cn'
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { addNewItemFormFieldsSchema } from '../../utils/zSchema';
import Spinner from '@/ui/Spinner';
import { useApp } from '@/context/AppContextProvider'
import toast from 'react-hot-toast';

const maxCate = 5

export default function CreateEditItemModal({ itemToEdit = {}, onCloseModal }) {
    const { dispatch } = useApp()
    const { id, ...editValues } = itemToEdit
    const isEditSession = Boolean(id)

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: isEditSession ? editValues : {},
        resolver: zodResolver(addNewItemFormFieldsSchema)
    })

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

    const onCreateItem = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (isEditSession) {
            const editedItem = {
                ...data,
                extras: categories,
                id,
                image: itemToEdit.image,
                usage: itemToEdit.usage,
                rating: itemToEdit.rating,
                ownerId: itemToEdit.ownerId,
                status: itemToEdit.status
            }
            dispatch({ type: 'app/edit-item', payload: editedItem })
            toast.success('Item edited successfully.')
            onCloseModal()
        }
        else {
            const newItem = {
                ...data,
                extras: categories,
                id: Date.now(),
                image: '',
                usage: 'Available',
                rating: 0.0,
                ownerId: true,
                status: 'Normal'
            }
            dispatch({ type: 'app/add-item', payload: newItem })
            toast.success('Item added successfully.')
            onCloseModal()
        }
    }

    return (
        <form onSubmit={handleSubmit(onCreateItem)} className={`p-6 md:w-[750px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:w-[450px] max-h-[95vh] bg-slate-100 flex overflow-y-scroll flex-col space-y-2 dark:bg-veryDarkViolet dark:border-slate-700 transition-transform duration-300 dark:text-slate-50 rounded-lg shadow-lg relative`}>
            <button type='button' onClick={onCloseModal} className='absolute top-5 right-5 cursor-pointer hover:border hover:border-primary border border-transparent rounded-lg p-1 transition duration-300'>
                <XIcon />
            </button>
            <div className='flex items-center gap-2 mb-5 border-b pb-3 border-b-gray-200 dark:border-b-veryDarkBlue'>
                {isEditSession ? <Settings className='text-primary' /> : <BadgePlus className='text-primary' />}
                <h2 className='font-bold text-primary text-2xl'>{isEditSession ? 'Edit Item' : 'Create New Item'}</h2>
            </div>
            <ImageDropDown />
            <div className="flex md:flex-row flex-col w-full gap-4">
                <div className="flex flex-col w-full md:w-1/2 space-y-1">
                    <label className="text-sm text-darkViolet dark:text-grayishViolet" htmlFor="name">Name: <span className="text-red-600">*</span></label>
                    <input
                        disabled={isSubmitting}
                        {...register('name')}
                        // defaultValue={editValues.name}
                        id="name"
                        type="text"
                        placeholder="Item Name"
                        className={cn(errors.name ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                    />
                    {errors.name && <span className='text-red-600 text-sm'>{errors.name.message}</span>}
                </div>
                <div className="flex flex-col w-full md:w-1/2 space-y-1">
                    <label className="text-sm text-darkViolet dark:text-grayishViolet" htmlFor="description">Description: <span className="text-red-600">*</span></label>
                    <input
                        disabled={isSubmitting}
                        // defaultValue={editValues.description}
                        {...register('description')}
                        id="description"
                        type="text"
                        placeholder="Description"
                        className={cn(errors.description ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                    />
                    {errors.description && <span className='text-red-600 text-sm'>{errors.description.message}</span>}
                </div>
            </div>
            <div className="flex md:flex-row flex-col w-full gap-4">
                <div className="flex flex-col w-full md:w-1/2 space-y-1">
                    <label className="text-sm text-darkViolet dark:text-grayishViolet" htmlFor="price">Price: <span className="text-red-600">*</span></label>
                    <input
                        disabled={isSubmitting}
                        // defaultValue={editValues.rentalPrice}
                        {...register('rentalPrice')}
                        id="price"
                        type="text"
                        placeholder="Rental price per day"
                        className={cn(errors.rentalPrice ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                    />
                    {errors.price && <span className='text-red-600 text-sm'>{errors.price.message}</span>}
                </div>
                <div className="flex flex-col w-full md:w-1/2 space-y-1">
                    <label className="text-sm text-darkViolet dark:text-grayishViolet" htmlFor="deposit">Deposit: <span className="text-red-600">*</span></label>
                    <input
                        disabled={isSubmitting}
                        // defaultValue={editValues.deposit}
                        {...register('deposit')}
                        id="deposit"
                        type="text"
                        placeholder="Deposit"
                        className={cn(errors.deposit ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                    />
                    {errors.deposit && <span className='text-red-600 text-sm'>{errors.deposit.message}</span>}
                </div>
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm text-darkViolet dark:text-grayishViolet" htmlFor="extras">ExtrasIncluded: </label>
                <div className='flex items-center gap-2'>
                    <input
                        disabled={isSubmitting}
                        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                        onChange={e => setNewCategory(e.target.value)}
                        value={newCategory}
                        id="extras"
                        type="text"
                        placeholder="cashback...(optional) 5 extras per item"
                        className={cn(
                            'w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0 dark:bg-transparent border-slate-300 dark:border-veryDarkBlue focus:border-primary dark:focus:border-darkViolet',
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
                        categories.map((cate, index) => (<span key={index} className={`px-3 py-2.5 border rounded-md border-primary dark:border-darkViolet`}>{cate}<span className="cursor-pointer ms-3 dark:text-grayishViolet" onClick={() => deleteCategory(cate)}>&#10006;</span></span>))
                    }
                </div>}
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm text-darkViolet dark:text-grayishViolet" htmlFor="location">Loacaiton: <span className="text-red-600">*</span> </label>
                <input
                    disabled={isSubmitting}
                    // defaultValue={editValues.location}
                    {...register('location')}
                    id="location"
                    type="text"
                    placeholder="MFU"
                    className={cn(errors.location ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                />
                {errors.location && <span className='text-red-600 text-sm'>{errors.location.message}</span>}
            </div>
            <div className="flex flex-col space-y-1">
                <label className="text-sm text-darkViolet dark:text-grayishViolet" htmlFor="condition">Condition: <span className="text-red-600">*</span> </label>
                <input
                    disabled={isSubmitting}
                    // defaultValue={editValues.condition}
                    {...register('condition')}
                    id="condition"
                    type="text"
                    placeholder="Brand New"
                    className={cn(errors.condition ? 'border-red-600 focus:border-red-600' : 'border-slate-300 dark:border-veryDarkBlue dark:focus:border-darkViolet focus:border-primary', ' dark:text-grayishViolet disabled:cursor-not-allowed w-full px-3 py-2 transition-all duration-500 border rounded-md focus:outline-0')}
                />
                {errors.condition && <span className='text-red-600 text-sm'>{errors.condition.message}</span>}
            </div>
            <div className='flex items-center justify-center gap-2 mt-3'>
                <button disabled={isSubmitting} onClick={onCloseModal} type='button' className='px-4 dark:border-gray-500 disabled:cursor-not-allowed dark:hover:text-slate-50 dark:text-slate-50 py-2 border rounded-lg font-bold text-darkViolet border-gray-400 cursor-pointer hover:bg-darkViolet hover:text-slate-50 transition duration-300 hover:border-darkViolet'>
                    Cancel
                </button>
                <button
                    disabled={isSubmitting}
                    type='submit'
                    // onClick={() => {
                    //     toast.success(isEditSession ? 'Item edited successfully.' : 'Item created successfully.')
                    //     onCloseModal()
                    // }}
                    className='px-4 py-2 flex disabled:cursor-not-allowed items-center gap-2 rounded-lg bg-primary text-white font-bold border border-primary cursor-pointer hover:bg-cyan-500 transition duration-300 hover:border-cyan-500'>
                    {isSubmitting && <Spinner />}
                    <span className={isSubmitting ? 'hidden' : ''}>{isEditSession ? 'Edit Item' : 'Create Item'}</span>
                    <span className={isSubmitting ? '' : 'hidden'}>{isEditSession ? 'Editing...' : 'Creating...'}</span>
                </button>
            </div>
        </form>
    )
}
