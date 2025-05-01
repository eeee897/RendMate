import { useState } from 'react';
import ChatBox from '../ui/ChatBox';
import ChatsList from '../ui/ChatsList';
import SelectChat from '../ui/SelectChat';
import Title from '../ui/Title';

export default function ChatsPage() {
    const [isActive, setActive] = useState(null);
    const [showChatBox, setShowChatBox] = useState(false);

    const chatOpen = (value) => {
        setShowChatBox(true);
        setActive(value);
    };

    const chatClose = () => {
        setShowChatBox(false);
        setActive(0);
    };

    return (
        <section className="flex flex-col h-[calc(100vh-110px)]">
            <Title text="Chats" />
            <div className="flex flex-col md:flex-row gap-4 overflow-hidden">
                <ChatsList isActive={isActive} chatOpen={chatOpen} />
                {showChatBox ? <ChatBox chatClose={chatClose} /> : <SelectChat />}
            </div>
        </section>
    );
}
