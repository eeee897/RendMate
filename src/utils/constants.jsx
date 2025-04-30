import { LayoutList, Hourglass, MessageSquareWarning, History, ArrowLeftRight, Headset, ShoppingBag } from 'lucide-react'
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
import NPC from '@/assets/item_images/npc.jpg'

export const navbarLinks = [
    {
        links: [
            {
                label: 'ItemsFeed',
                icon: ShoppingBag,
                path: '/items-feed'
            },
            {
                label: "My Items",
                icon: LayoutList,
                path: "/my-items",
            },
            {
                label: "Status",
                icon: Hourglass,
                path: "/status",
            },
            {
                label: "History",
                icon: History,
                path: "/history",
            },
            {
                label: "Chats",
                icon: MessageSquareWarning,
                path: "/chats",
            },
            {
                label: "Switch to Lender",
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
        usage: 'Taken',
        rating: 4.5,
        ownerId: true,
        condition: 'One Time Used'
    },
    {
        id: 2,
        name: 'Adidas Shoe',
        description: 'Own every step — Adidas shoes that move with you.',
        image: Adidas,
        rentalPrice: 150,
        extras: null,
        deposit: 0,
        location: 'MFU',
        usage: 'Available',
        rating: 2.5,
        ownerId: false,
        condition: 'One Time Used'
    },
    {
        id: 3,
        name: 'Calculator',
        description: 'Calculator for your Math needs.',
        image: Calculator,
        rentalPrice: 100,
        extras: null,
        deposit: 0,
        location: 'MFU',
        usage: 'Available',
        rating: 4.0,
        ownerId: false,
        condition: 'One Time Used'
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
        usage: 'Taken',
        rating: 5.0,
        ownerId: false,
        condition: 'One Time Used'
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
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'One Time Used'
    },
    {
        id: 6,
        name: 'Razor Mouse',
        description: 'Razor for everyone.',
        image: Mouse,
        rentalPrice: 100,
        extras: null,
        deposit: 0,
        location: 'MFU',
        usage: 'Taken',
        rating: 4.0,
        ownerId: false,
        condition: 'One Time Used'
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
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'One Time Used'
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
        usage: 'Available',
        rating: 4.5,
        ownerId: false,
        condition: 'One Time Used'
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
        usage: 'Available',
        rating: 2.5,
        ownerId: false,
        condition: 'One Time Used'
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
        usage: 'Available',
        rating: 5.0,
        ownerId: true,
        condition: 'One Time Used'
    },
]

export const dummyStatusData = [
    {
        id: 1,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, May 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
    },
    {
        id: 2,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, May 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
    },
    {
        id: 3,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, May 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
    },
    {
        id: 4,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, May 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
    },
    {
        id: 5,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, May 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
    },
    {
        id: 6,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, May 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
    },
    {
        id: 7,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, May 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
    },
]

export const chatsData = [
    {
        id: 1,
        message: 'Ok then I will take it',
        name: 'Swam Yi Phyo',
        image: NPC,
        date: '1h'
    },
    {
        id: 2,
        message: 'Ok then I will take it',
        name: 'Swam Yi Phyo',
        image: NPC,
        date: '1h'
    },
    {
        id: 3,
        message: 'Ok then I will take it',
        name: 'Swam Yi Phyo',
        image: NPC,
        date: '1h'
    },
]

export const messages = [
    {
        id: 1,
        message: 'Hello',
        isYou: false,
        date: '1h ago',
        image: NPC
    },
    {
        id: 2,
        message: 'Hi',
        isYou: true,
        date: '1h ago',
        image: NPC
    },
    {
        id: 3,
        message: 'I want to rent that dike.',
        isYou: false,
        date: '1h ago',
        image: NPC
    },
    {
        id: 4,
        message: '250 THB per day',
        isYou: true,
        date: '1h ago',
        image: NPC
    },
    {
        id: 5,
        message: 'How many days? 1 day - 250, 1 month - 2000',
        isYou: true,
        date: '1h ago',
        image: NPC
    },
    {
        id: 6,
        message: '1 month',
        isYou: false,
        date: '1h ago',
        image: NPC
    },
    {
        id: 7,
        message: 'Okay',
        isYou: true,
        date: '1h ago',
        image: NPC
    },
    {
        id: 8,
        message: 'You have to transfer deposit 50 THB',
        isYou: true,
        date: '1h ago',
        image: NPC
    },
    {
        id: 9,
        message: 'Thank you',
        isYou: true,
        date: '1h ago',
        image: NPC
    },
    {
        id: 10,
        message: 'Ok then I will take it',
        isYou: false,
        date: '1h ago',
        image: NPC
    },
]


