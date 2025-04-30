import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import ChatBox from '../ui/ChatBox';
import { chatsData } from '../utils/constants';
import cat from '@/assets/animations/cat.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function ChatsPage() {
    const [isActive, setActive] = useState(null);
    const [showChatBox, setShowChatBox] = useState(false);

    const chatOpen = (value) => {
        setShowChatBox(true)
        setActive(value)
    }

    const chatClose = () => {
        setShowChatBox(false)
        setActive(0)
    }

    return (
        <section className="flex flex-col h-fit space-y-3">
            <h1 className="title">Chats</h1>

            <div className="flex flex-1 gap-4 overflow-hidden">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/3 flex flex-col h-full overflow-y-auto">
                    {/* Search */}
                    <div className="relative mb-3">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for a chat"
                            className="w-full pl-10 pr-3 py-2 border rounded-full focus:outline-0 border-grayishViolet focus:border-primary"
                        />
                    </div>

                    {/* Chat List */}
                    <div className="space-y-3 overflow-y-auto">
                        {chatsData.map(chat => (
                            <div
                                onClick={() => chatOpen(chat.id)}
                                key={chat.id}
                                className={`${isActive === chat.id ? 'bg-gray-200' : ''} flex items-center gap-2 text-darkViolet cursor-pointer hover:bg-gray-200 p-3 rounded-lg`}>
                                <img src={chat.image} alt="" className="w-12 h-12 rounded-lg" />
                                <div className="w-full">
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

                {/* Chat Box */}
                {
                    showChatBox ? <ChatBox chatClose={chatClose} /> :
                        <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-2 cursor-pointer">
                            <DotLottieReact
                                src={cat}
                                loop
                                autoplay
                                style={{ width: '450px', height: '300px' }}
                            />
                            <div className='group flex items-center gap-3'>
                                <span className="transition-transform duration-300 group-hover:-translate-x-2.5 text-xl">←</span>
                                <h2>Select a chat to start a conversation</h2>
                            </div>
                        </div>
                }
            </div>
        </section>
    )
}
