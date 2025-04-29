import React from 'react'

export default function ImagePreview({ image }) {
    return <img className='rounded-2xl w-96 h-96' src={image} alt="item_image" />
}
