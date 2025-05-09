import CommonOperations from '@/ui/operations/CommonOperations';
import React from 'react';
import { HiOutlineAnnotation, HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes } from "react-icons/hi2";
import SalesChart from '../ui/SalesChart';
import Stat from '../ui/Stat';
import RentDurationChart from '../ui/RentDurationChart';
import Title from '../ui/Title';
import TodayActivity from '../ui/TodayActivity';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '@/context/AppContextProvider';

const formatCurrency = (value) =>
    new Intl.NumberFormat('th', { style: 'currency', currency: 'THB' }).format(value);

export default function DashboardPage() {
    const { allItems } = useApp()
    const [searchParams] = useSearchParams()
    const filterValue = Number(searchParams.get('last')) || 7

    const checkPoint = (value) => {
        if (value === 7) return { sales: 5032, order: 15, rate: 56 }
        if (value === 30) return { sales: 18421, order: 74, rate: 54 }
        if (value === 90) return { sales: 32009, order: 129, rate: 48 }
    }

    return (
        <section className='flex flex-col gap-2'>
            <Title text={'Dashboard'} />
            <div className='flex items-center justify-end'>
                <CommonOperations filterFieldValue='last' />
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <Stat label={'Items'} value={allItems.length} icon={<HiOutlineBriefcase className='text-2xl text-blue-700 dark:text-[#e0f2fe]' />} bgColor={'bg-blue-100 dark:bg-[#075985]'} />
                <Stat label={'Sales'} value={formatCurrency(checkPoint(filterValue)?.sales)} icon={<HiOutlineBanknotes className='text-2xl text-green-700 dark:text-[#dcfce7]' />} bgColor={'bg-green-100 dark:bg-[#166534]'} />
                <Stat label={'Orders'} value={checkPoint(filterValue)?.order} icon={<HiOutlineAnnotation className='text-2xl text-indigo-700 dark:text-[#e0e7ff]' />} bgColor={'bg-indigo-100 dark:bg-[#3730a3]'} />
                <Stat label={'Fullfillment Rate'} value={checkPoint(filterValue)?.rate} icon={<HiOutlineChartBar className='text-2xl text-yellow-700 dark:text-[#fef9c3]' />} bgColor={'bg-yellow-100 dark:bg-[#854d0e]'} />
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <TodayActivity />
                <RentDurationChart />
            </div>
            <SalesChart />
        </section>
    )
}
