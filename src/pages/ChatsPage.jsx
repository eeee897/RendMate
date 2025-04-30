import npc from '@/assets/item_images/npc.jpg'
import { PlusCircle, SearchIcon, SendHorizonal } from 'lucide-react'
import React from 'react'
import { chatsData, messages } from '../utils/constants'

export default function ChatsPage() {
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
                            <div key={chat.id} className="flex items-center gap-2 text-darkViolet cursor-pointer hover:bg-gray-200 p-3 rounded-lg">
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
                <div className="w-full md:w-2/3 flex flex-col h-fit border border-grayishViolet rounded-lg">
                    {/* Header */}
                    <div className="flex items-center gap-2 shadow-md p-3">
                        <img src={npc} alt="" className="w-14 h-14 rounded-lg" />
                        <h1 className="font-bold text-xl">Swam Yi Phyo</h1>
                    </div>

                    {/* Messages */}
                    <div className="max-h-[420px] overflow-y-auto p-3 space-y-2">
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
                    <div className="p-3">
                        <div className="flex items-center gap-2">
                            <button className="text-primary hover:text-cyan-500 transition">
                                <PlusCircle className="w-6 h-6" />
                            </button>
                            <input
                                type="text"
                                placeholder="Aa"
                                className="w-full px-4 py-2 border rounded-full focus:outline-0 border-grayishViolet focus:border-primary"
                            />
                            <button className="hover:text-primary transition">
                                <SendHorizonal className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
