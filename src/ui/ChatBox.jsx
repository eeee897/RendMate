import npc from '@/assets/item_images/npc.jpg'
import { PlusCircle, XCircleIcon } from 'lucide-react'
import { messages } from '../utils/constants'
import toast from 'react-hot-toast'

export default function ChatBox({ chatClose }) {
    return (
        <div className="w-full md:w-2/3 flex flex-col h-full rounded-lg pb-5 md:pb-0">
            {/* Header */}
            <div className="flex border border-grayishViolet border-b-0 rounded-b-none rounded-lg items-center justify-between gap-2 shadow-md p-3">
                <div className='flex items-center gap-2'>
                    <img src={npc} alt="" className="w-14 h-14 rounded-lg" />
                    <h1 className="font-bold text-xl">Swam Yi Phyo</h1>
                </div>
                <XCircleIcon
                    type='button'
                    onClick={chatClose}
                    className='fill-gray-600 transition duration-300 text-white cursor-pointer hover:fill-black' />
            </div>

            {/* Messages */}
            <div className="flex-1 border border-grayishViolet border-t-0 overflow-y-auto p-3 space-y-2">
                {messages.map(msg => (
                    <div key={msg.id}>
                        <div className="flex items-center gap-2">
                            {!msg.isYou ? (
                                <>
                                    <img src={msg.image} alt="" className="w-10 h-10 rounded-lg" />
                                    <p className="bg-gray-200 p-2 font-bold rounded-lg">{msg.message}</p>
                                </>
                            ) : (
                                <div className="flex items-center justify-end w-full">
                                    <p className="p-2 rounded-lg bg-primary text-slate-50 font-bold">{msg.message}</p>
                                </div>
                            )}
                        </div>
                        {!msg.isYou && <span className="text-xs text-grayishViolet ml-12">{msg.date}</span>}
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-3 border border-t-0 rounded-t-none rounded-lg border-grayishViolet">
                <div className="flex items-center gap-2">
                    <button className="text-primary hover:text-cyan-500 transition cursor-pointer">
                        <PlusCircle className="w-6 h-6" />
                    </button>
                    <input
                        type="text"
                        placeholder="Aa"
                        className="w-full px-4 py-2 border rounded-full focus:outline-0 border-grayishViolet focus:border-primary"
                    />
                    <button type='button' onClick={() => toast.success('Message sent successfully.')} className="text-white bg-primary rounded-full px-4 font-bold py-2 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0 cursor-pointer">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}