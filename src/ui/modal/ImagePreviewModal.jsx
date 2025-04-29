import { XIcon } from 'lucide-react'
import React from 'react'

export default function ImagePreviewModal({ image, onCloseModal }) {
    return (
        <div className='relative'>
            <button type='button' onClick={onCloseModal} className='absolute top-5 right-5 cursor-pointer hover:bg-gray-500 rounded-full bg-gray-600 text-white p-1 transition duration-300'>
                <XIcon />
            </button>
            <img className='rounded-2xl w-[550px] h-[450px]' src={image} alt="item_image" />
        </div>
    )
}
