import { LayoutList, Hourglass, MessageSquareWarning, History, ArrowLeftRight, Headset, ShoppingBag, BookOpen, CreditCard, HelpCircle, Layout, Server, Settings, Shield, Users, } from 'lucide-react'
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
import bake from '@/assets/item_images/bake.jpg'
import corcs from '@/assets/item_images/corcs.jpg'
import crocodile from '@/assets/item_images/crocodile.jpg'
import elvis from '@/assets/item_images/elvis.jpg'
import north from '@/assets/item_images/north.jpg'
import ps5 from '@/assets/item_images/ps5.jpg'
import tralalero from '@/assets/item_images/tralalero.jpg'
import tuna from '@/assets/item_images/tuna.jpg'
import coma from '@/assets/item_images/coma.jpg'
import jordan from '@/assets/item_images/jordan.jpg'

export const PAGE_SIZE = 8

export const navbarLinksRenter = [
    {
        links: [
            {
                label: 'ItemsNewFeed',
                icon: ShoppingBag,
                path: 'items-feed'
            },
            // {
            //     label: "My Items",
            //     icon: LayoutList,
            //     path: "my-items",
            // },
            {
                label: "Status",
                icon: Hourglass,
                path: "status",
            },
            {
                label: "History",
                icon: History,
                path: "history",
            },
            {
                label: "Chats",
                icon: MessageSquareWarning,
                path: "chats",
            },
            {
                label: "Switch to Lender",
                icon: ArrowLeftRight,
                path: "switch-role",
            },
            {
                label: "Need Help",
                icon: Headset,
                path: "need-help",
            },
        ],
    }
];
export const navbarLinksLender = [
    {
        links: [
            // {
            //     label: 'ItemsNewFeed',
            //     icon: ShoppingBag,
            //     path: 'items-feed'
            // },
            {
                label: "My Items",
                icon: LayoutList,
                path: "my-items",
            },
            {
                label: "Status",
                icon: Hourglass,
                path: "status",
            },
            {
                label: "History",
                icon: History,
                path: "history",
            },
            {
                label: "Chats",
                icon: MessageSquareWarning,
                path: "chats",
            },
            {
                label: "Switch to Renter",
                icon: ArrowLeftRight,
                path: "switch-role",
            },
            {
                label: "Need Help",
                icon: Headset,
                path: "need-help",
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
        rating: 3.0,
        ownerId: true,
        condition: 'Like New'
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
        condition: 'Brand New'
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
        condition: 'Brand New'
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
        rating: 3.0,
        ownerId: false,
        condition: 'Never Been Fall In Love'
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
        condition: 'A Few Times Used'
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
        condition: 'Never Been Fall In Love'
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
        condition: 'Brand New'
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
        condition: 'Brand New'
    },
    {
        id: 11,
        name: 'Tralalero Nike Shoe',
        description: 'Stay up to date with brain root trend.',
        image: tralalero,
        rentalPrice: 200,
        extras: ["regret"],
        deposit: 50,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: true,
        condition: 'Brand New'
    },
    {
        id: 12,
        name: 'Poly Station',
        description: 'Let\'s have a great time with your homie',
        image: ps5,
        rentalPrice: 1300,
        extras: ["2 Controllers", "Charger", "Headset"],
        deposit: 50,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: true,
        condition: 'Brand New'
    },
    {
        id: 13,
        name: 'The North Fake',
        description: 'The winter is coming.',
        image: north,
        rentalPrice: 1000,
        extras: null,
        deposit: 150,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New'
    },
    {
        id: 14,
        name: 'Elvis Shirt',
        description: 'Get a fine shyt with this',
        image: elvis,
        rentalPrice: 400,
        extras: ["Charger", "Headset"],
        deposit: 50,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New'
    },
    {
        id: 15,
        name: 'Crocodile Shirt',
        description: 'Let\'s go to the zoo.',
        image: crocodile,
        rentalPrice: 700,
        extras: ["Crocodile Toy"],
        deposit: 50,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New'
    },
    {
        id: 16,
        name: 'Corcs daily shoes',
        description: 'GRWM',
        image: corcs,
        rentalPrice: 100,
        extras: ["Jibbitz"],
        deposit: 0,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Used'
    },
    {
        id: 17,
        name: 'Bake',
        description: 'Bake me or be make.',
        image: bake,
        rentalPrice: 300,
        extras: null,
        deposit: 50,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New'
    },
    {
        id: 18,
        name: 'Tuna',
        description: 'TUNA with you.',
        image: tuna,
        rentalPrice: 700,
        extras: null,
        deposit: 50,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New'
    },
    {
        id: 19,
        name: 'Coma Shirt',
        description: 'For when you’re awake, but only technically. Soft, comfy, and perfect for doing nothing… aggressively.',
        image: coma,
        rentalPrice: 200,
        extras: null,
        deposit: 0,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New'
    },
    {
        id: 20,
        name: 'Air Jordan 11',
        description: 'JORDAN can hoop 3 points......',
        image: jordan,
        rentalPrice: 2000,
        extras: null,
        deposit: 0,
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New'
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
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
        isConfirmed: false,
        mine: false
    },
    {
        id: 2,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 3,
        status: 'Completed',
        receieved: true,
        totalPrice: 400,
        isConfirmed: true,
        mine: false
    },
    {
        id: 3,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 3,
        status: 'Rejected',
        receieved: false,
        totalPrice: 400,
        isConfirmed: false,
        mine: false
    },
    {
        id: 4,
        itemId: 1,
        itemName: 'Dike',
        itemImage: Dike,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
        isConfirmed: true,
        mine: false
    },
    {
        id: 5,
        itemId: 1,
        itemName: 'Calculator',
        itemImage: Calculator,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Fisheeesh',
        requestedOn: 'Mon, Apirl 30 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
        isConfirmed: false,
        mine: false
    },
    {
        id: 6,
        itemId: 1,
        itemName: 'Adidas Shoe',
        itemImage: Adidas,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Swam Yi Phyo',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
        isConfirmed: false,
        mine: false
    },
    {
        id: 7,
        itemId: 1,
        itemName: 'VR',
        itemImage: VR,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Bheem',
        requestedOn: 'Tue, Apirl 29 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
        isConfirmed: false,
        mine: true
    },
    {
        id: 8,
        itemId: 1,
        itemName: 'Rent Boyfriend',
        itemImage: Kyaw,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Globark Destoryer',
        requestedOn: 'Wed, Apirl 30 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
        isConfirmed: false,
        mine: true
    },
    {
        id: 8,
        itemId: 1,
        itemName: 'Rent Boyfriend',
        itemImage: Kyaw,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Globark Destoryer',
        requestedOn: 'Wed, Apirl 30 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 400,
        isConfirmed: false,
        mine: false
    },
    {
        id: 10,
        itemId: 1,
        itemName: 'Poly Station',
        itemImage: ps5,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Globark Destoryer',
        requestedOn: 'Wed, Apirl 30 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 1300,
        isConfirmed: false,
        mine: false
    },
    {
        id: 11,
        itemId: 1,
        itemName: 'Coma Shirt',
        itemImage: coma,
        itemRating: 4.5,
        renterId: 1,
        renterName: 'Myat Thu Kyaw',
        requestedOn: 'Thu, May 1 2025',
        duration: 3,
        status: 'Pending',
        receieved: false,
        totalPrice: 200,
        isConfirmed: false,
        mine: false
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

export const helpSections = [
    {
        icon: <HelpCircle className="text-purple-500 w-6 h-6" />,
        title: 'Getting Started',
        desc: 'Start off on the right foot! Not the left one!',
    },
    {
        icon: <Settings className="text-blue-500 w-6 h-6" />,
        title: 'Account Settings',
        desc: 'You’re a special snowflake and so is your account',
    },
    {
        icon: <CreditCard className="text-green-500 w-6 h-6" />,
        title: 'Billing',
        desc: 'That feel when you look at your bank account',
    },
    {
        icon: <Layout className="text-pink-500 w-6 h-6" />,
        title: 'Interface',
        desc: 'What does this button do?',
    },
    {
        icon: <Shield className="text-red-500 w-6 h-6" />,
        title: 'Trust & Safety',
        desc: 'Keep things safe & sound for you and your buddies',
    },
    {
        icon: <BookOpen className="text-indigo-500 w-6 h-6" />,
        title: 'F.A.Q',
        desc: 'All you can eat self-serve problem solving',
    },
    {
        icon: <Users className="text-violet-500 w-6 h-6" />,
        title: 'Community',
        desc: 'Bringing people together from all over the world',
    },
    {
        icon: <Server className="text-pink-600 w-6 h-6" />,
        title: 'Server Setup',
        desc: 'Almost as exciting as interior decorating',
    },
];


