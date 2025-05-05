import React from 'react'

export default function Copyright({ textColor = 'text-slate-500' }) {
    return (
        <p className={`${textColor} text-sm dark:text-grayishViolet`}>Copyright © {new Date().getFullYear()} RentMate. All rights reserved.</p>
    )
}
