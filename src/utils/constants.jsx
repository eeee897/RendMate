import { LayoutList, Hourglass, MessageSquareWarning, History, ArrowLeftRight, Headset } from 'lucide-react'

export const navbarLinks = [
    {
        links: [
            {
                label: 'ItemsFeed',
                icon: LayoutList,
                path: '/items-feed'
            },
            {
                label: "Status",
                icon: Hourglass,
                path: "/status",
            },
            {
                label: "Message",
                icon: MessageSquareWarning,
                path: "/message",
            },
            {
                label: "History",
                icon: History,
                path: "/history",
            },
            {
                label: "Switch to Renters",
                icon: ArrowLeftRight,
                path: "/switch-role",
            },
            {
                label: "Need Help",
                icon: Headset,
                path: "/need-help",
            },
        ],
    }
];


