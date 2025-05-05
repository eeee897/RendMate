import { Image } from 'lucide-react';
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';

export default function ImageDropDown() {
    const inputRef = useRef();
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        if (selected && selected.type === "image/png") {
            setFile(selected);
        } else {
            toast.error("Please select a valid image.");
            e.target.value = null;
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const dropped = e.dataTransfer.files[0];
        if (dropped && dropped.type === "image/*") {
            setFile(dropped);
        } else {
            toast.error('Only Image files (jpg, jpeg, png) are allowed.');
        }
    };

    const handleDragOver = (e) => e.preventDefault();
    return (
        <div className='flex items-center justify-center flex-col gap-1'>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => inputRef.current.click()}
                className="flex flex-col items-center justify-center h-56 px-22 mb-4 border border-primary border-dashed rounded-md cursor-pointer bg-slate-100 dark:bg-veryDarkViolet dark:text-slate-50"
            >
                <Image className="mb-2 text-gray-400 size-25 dark:text-grayishViolet" />
                <p className="text-sm text-gray-600 dark:text-grayishViolet">
                    <span className='text-red-600'>*</span> Upload Image or <span className="text-primary underline">choose file </span>
                </p>
                <input
                    id="template"
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>
            {!!file && (
                <div className="mb-4 text-sm text-gray-700 dark:text-slate-50">
                    <span className="font-medium">Selected file:</span> {file.name}
                </div>
            )}
        </div>
    )
}
