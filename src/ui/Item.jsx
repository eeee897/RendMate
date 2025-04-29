import { BanknoteArrowUp, CircleDollarSign, CircleDollarSignIcon, MapPinIcon, MessageSquareMore, ThumbsUp, ThumbsUpIcon } from 'lucide-react'
import React from 'react'
import ImagePreview from './modal/ImagePreview'
import Modal from './modal/Modal'

export default function Item({ item }) {
    return (
        <div key={item.id} className='p-2 bg-slate-50 flex items-center gap-2 rounded-xl border border-slate-300'>
            {/* Image */}
            <div className='w-44 h-full bg-cyanLight rounded-s-lg'>
                <Modal>
                    <Modal.Opens open={'image-preview'}>
                        <img src={item.image} className='object-center h-full cursor-pointer hover:scale-105 transition duration-300 rounded-s-lg' alt={`${item.name}_image`} />
                    </Modal.Opens>

                    <Modal.Window name={'image-preview'} padding={false}>
                        <ImagePreview image={item.image} />
                    </Modal.Window>
                </Modal>
            </div>
            {/* Info */}
            <div className='flex flex-col gap-1 w-full'>
                <div className='flex items-center justify-between gap-2'>
                    <h1 className='font-bold text-darkViolet text-2xl'>{item.name}</h1>
                    {/* //@TODO: Style basaed on status type */}
                    <span className='text-xs rounded-lg bg-green-600 px-2 py-0.5 text-white'>{item.status}</span>
                </div>
                <p className='text-xs italic font-thin text-gray-500'>"{item.description}"</p>
                <div className='flex items-center gap-2'>
                    <CircleDollarSignIcon className='w-4 text-yellow-600' />
                    <p className='text-xl font-bold text-darkViolet'>{item.rentalPrice} THB per day</p>
                </div>
                <div className='flex items-center gap-2'>
                    <ThumbsUpIcon className='w-4 text-blue-500' />
                    <p className='text-xs'>
                        ExtrasIncluded: {item.extras ? item.extras.map(access => access).join(', ') : '-'}
                    </p>
                </div>
                <div className='flex items-center gap-2'>
                    <BanknoteArrowUp className="w-4 text-green-500" />
                    <p className='text-xs'>Deposit: <span className='font-bold'>{item.deposit}</span> THB</p>
                </div>
                <div className='flex items-center gap-2'>
                    <MapPinIcon className='w-4 text-red-600' />
                    <p className='text-xs'>Location: {item.location}</p>
                </div>
                <div className='flex items-center justify-end gap-2'>
                    <MessageSquareMore className='w-7 h-7 hover:bg-slate-300 transition duration-200 p-1.5 bg-slate-200 rounded-full cursor-pointer' />
                    <button className='px-4 p-1.5 bg-primary rounded-full text-sm hover:bg-cyan-500 border-b-[3px] border-b-cyan-800 font-bold cursor-pointer text-white hover:border-b-0 hover:border-t-[3px] hover:border-t-cyan-500'>
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    )
}
