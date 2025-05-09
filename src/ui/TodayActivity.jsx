import { CircleX, PackageCheck, Star } from "lucide-react";
import { useApp } from "../context/AppContextProvider";
import Menus from "./menu/Menus";
import toast from "react-hot-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import cat from '@/assets/animations/cat.lottie'

export default function TodayActivity() {
    const { tdyAct, dispatch } = useApp()

    const onHandleClick = (id, status) => {
        dispatch({ type: 'app/delete-tdy-act', payload: id })
        status === 'Accept' ? toast.success('Accepted.!') : toast.success('Rejected.!')
    }

    return (
        <Menus>
            <div className="p-5 space-y-3 border border-slate-300 rounded-md bg-slate-50 dark:bg-veryDarkViolet dark:border-veryDarkBlue">
                <h2 className="text-2xl font-bold dark:text-slate-50">Today Activities</h2>
                {
                    tdyAct.length ?
                        <div className="h-64 overflow-y-scroll">
                            {
                                tdyAct.map((data, index) => (
                                    <div key={index} className="flex items-center justify-between px-2 py-3 border-b border-b-slate-300 dark:border-b-veryDarkBlue last:border-b-0 dark:text-slate-50">
                                        <div className="flex items-center gap-1 w-2/4">
                                            <img src={data.image} className="w-9 border border-slate-300 h-9 rounded-full" />
                                            <div className="flex flex-col">
                                                <h3 className="font-bold text-sm text-darkViolet dark:text-slate-50">{data.itemName}</h3>
                                                <p className="flex items-center gap-1">
                                                    <Star className="size-3.5 fill-yellow-600 stroke-yellow-600" />
                                                    <span className="text-xs text-gray-600 mt-0.5 dark:text-grayishViolet">{data.rating}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-darkViolet text-[13px] w-1/4 dark:text-slate-50">{data.days}</span>
                                        <span className="w-1/4 text-[13px] italic font-thin text-gray-500 dark:text-grayishViolet text-end">{data.created_at}</span>
                                        <Menus.Toggle id={data.id} />

                                        <Menus.List id={data.id}>
                                            <Menus.Button onClick={() => onHandleClick(data.id, 'Accept')} icon={<PackageCheck className="text-green-600 w-4 h-4" />}>Acept</Menus.Button>
                                            <Menus.Button onClick={() => onHandleClick(data.id, 'Reject')} icon={<CircleX className="text-red-500 w-4 h-4" />}>Reject</Menus.Button>
                                        </Menus.List>
                                    </div>
                                ))
                            }
                        </div> :
                        <div className='flex items-center justify-center flex-col mt-10'>
                            <DotLottieReact
                                src={cat}
                                loop
                                autoplay
                                style={{ width: '200px', height: '150px' }}
                            />
                            <div className='flex group cursor-pointer items-center gap-2'>
                                <h1 className='text-lg sm:text-xl text-darkViolet dark:text-slate-50 font-bold'>No activities today.</h1>
                            </div>
                        </div>
                }
            </div>
        </Menus>
    )
}
