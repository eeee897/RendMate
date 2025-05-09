import React from "react";

export default function Stat({ label, value, icon, bgColor }) {
    return (
        <div className="flex items-center p-4 border border-slate-300 dark:border-veryDarkBlue rounded-md md:p-5 bg-slate-50 dark:bg-veryDarkViolet">
            <div className="flex items-center gap-3">
                <div className={`${bgColor} p-3 rounded-full  md:p-4`}>
                    {icon}
                </div>
                <div>
                    <h1 className="text-sm font-medium text-gray-500 dark:text-grayishViolet">{label}</h1>
                    <p className="text-[28px] md:text-2xl font-bold text-darkViolet dark:text-slate-50">{label !== 'Fullfillment Rate' ? value : `${value}%`}</p>
                </div>
            </div>
        </div>
    )
}