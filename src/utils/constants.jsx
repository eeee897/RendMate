import { LayoutList, Hourglass, MessageSquareWarning, History, ArrowLeftRight, Headset } from 'lucide-react'
import Dike from '@/assets/item_images/bike.JPG'
import Adidas from '@/assets/item_images/adidas.jpg'
import Calculator from '@/assets/item_images/calculator.jpg'
import Camera from '@/assets/item_images/Camera.jpg'
import Kyaw from '@/assets/item_images/Kyaw.png'
import Mouse from '@/assets/item_images/Mouse.jpg'
import Myat from '@/assets/item_images/myat.png'
import SoundBox from '@/assets/item_images/soundbox.jpg'
import Tent from '@/assets/item_images/tent.jpg'
import VR from '@/assets/item_images/VR.jpg'

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

export const items = [
    {
        id: 1,
        name: 'Dike',
        description: 'Lightweight mountain bike with 21-speed gears and hydraulic disc brakes.',
        image: Dike,
        rentalPrice: 250,
        extras: ["Helmet", "Lock"],
        deposit: 50,
        location: 'MFU',
        status: 'Available',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Adidas Shoe',
        description: 'Own every step — Adidas shoes that move with you.',
        image: Adidas,
        rentalPrice: 150,
        extras: [],
        deposit: 0,
        location: 'MFU',
        status: 'Available',
        rating: 2.5,
    },
    {
        id: 3,
        name: 'Calculator',
        description: 'Calculator for your Math needs.',
        image: Calculator,
        rentalPrice: 100,
        extras: [],
        deposit: 0,
        location: 'MFU',
        status: 'Available',
        rating: 4.0,
    },
    {
        id: 4,
        name: 'Camera',
        description: 'Make your day with CANON G7X.',
        image: Camera,
        rentalPrice: 500,
        extras: ["Extra Battery"],
        deposit: 0,
        location: 'MFU',
        status: 'Available',
        rating: 5.0,
    },
    {
        id: 5,
        name: 'Rent Boyfriend',
        description: 'I can cook. I can take you beautiful photos.',
        image: Kyaw,
        rentalPrice: 600,
        extras: ["Love", "Care"],
        deposit: 100,
        location: 'MFU',
        status: 'Available',
        rating: 5.0,
    },
    {
        id: 6,
        name: 'Razor Mouse',
        description: 'Razor for everyone.',
        image: Mouse,
        rentalPrice: 100,
        extras: [],
        deposit: 0,
        location: 'MFU',
        status: 'Available',
        rating: 4.0,
    },
    {
        id: 7,
        name: 'Rent Boyfriend',
        description: 'I can cook. I can take you beautiful photos.',
        image: Myat,
        rentalPrice: 600,
        extras: ["Love", "Care"],
        deposit: 100,
        location: 'MFU',
        status: 'Available',
        rating: 5.0,
    },
    {
        id: 8,
        name: 'JBL SoundBox',
        description: 'Let\'s Rock. SCHYEAH SCHYEAH.',
        image: SoundBox,
        rentalPrice: 300,
        extras: ["Spotify Premium 3 days"],
        deposit: 50,
        location: 'MFU',
        status: 'Available',
        rating: 4.5,
    },
    {
        id: 9,
        name: 'Tent',
        description: 'Tent for camping.',
        image: Tent,
        rentalPrice: 550,
        extras: ["Sleeping Bag"],
        deposit: 50,
        location: 'MFU',
        status: 'Available',
        rating: 2.5,
    },
    {
        id: 10,
        name: 'VR',
        description: 'VR for everything. Dun do any stupid.',
        image: VR,
        rentalPrice: 700,
        extras: ["Charger", "Headset"],
        deposit: 50,
        location: 'MFU',
        status: 'Available',
        rating: 5.0,
    },
]


