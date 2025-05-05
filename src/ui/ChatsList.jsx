import { chatsData } from '../utils/constants'
import { SearchIcon } from 'lucide-react'

export default function ChatsList({ chatOpen, isActive }) {
    return (
        <div className="w-full md:w-1/3 flex flex-col h-full md:border-r border-grayishViolet dark:border-veryDarkBlue overflow-hidden">
            {/* Search */}
            <div className="relative mb-3 pr-3 pt-3 pb-3">
                <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-50 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search for a chat"
                    className="w-full pl-12 pr-3 dark:border-veryDarkBlue dark:focus:border-darkViolet dark:text-slate-50 py-2 border rounded-full focus:outline-0 border-grayishViolet focus:border-primary"
                />
            </div>

            {/* Chat List */}
            <div className="space-y-3 overflow-y-auto pr-3 flex-1">
                {chatsData.map(chat => (
                    <div
                        onClick={() => chatOpen(chat.id)}
                        key={chat.id}
                        className={`${isActive === chat.id ? 'bg-gray-200 dark:bg-darkViolet' : ''} flex items-center gap-2 text-darkViolet cursor-pointer dark:hover:bg-veryDarkBlue hover:bg-gray-200 p-3 rounded-lg`}>
                        <img src={chat.image} alt="" className="w-12 h-12 rounded-lg" />
                        <div className="w-full dark:text-slate-50">
                            <div className="flex items-center justify-between gap-2">
                                <h1 className="font-bold text-lg">{chat.name}</h1>
                                <span className="text-sm">{chat.date}</span>
                            </div>
                            <p className="text-xs text-gray-400">{chat.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}