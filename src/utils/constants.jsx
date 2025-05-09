import { LayoutList, Hourglass, MessageSquareWarning, History, ArrowLeftRight, Headset, ShoppingBag, BookOpen, CreditCard, HelpCircle, Layout, Server, Settings, Shield, Users, LayoutDashboard, } from 'lucide-react'
import Dike from '@/assets/item_images/bike.JPG'
import Adidas from '@/assets/item_images/adidas.jpg'
import Calculator from '@/assets/item_images/calculator.jpg'
import Camera from '@/assets/item_images/camera.jpg'
import Kyaw from '@/assets/item_images/kyaw.png'
import Mouse from '@/assets/item_images/mouse.jpg'
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
import fish from '@/assets/item_images/fish.jpg'
import shark from '@/assets/item_images/shark.jpg'

export const PAGE_SIZE = 8

export const navbarLinksRenter = [
    {
        links: [
            {
                label: 'ItemsNewFeed',
                icon: ShoppingBag,
                path: 'items-feed'
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
            {
                label: 'Dashboard',
                icon: LayoutDashboard,
                path: 'dashboard'
            },
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
        rentalPrice: "250",
        extras: ["Helmet", "Lock"],
        deposit: "50",
        location: 'MFU',
        usage: 'Taken',
        rating: 3.0,
        ownerId: true,
        condition: 'Like New',
        status: 'Normal'
    },
    {
        id: 2,
        name: 'Adidas Shoe',
        description: 'Own every step — Adidas shoes that move with you.',
        image: Adidas,
        rentalPrice: "150",
        extras: null,
        deposit: "0",
        location: 'MFU',
        usage: 'Available',
        rating: 2.5,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 3,
        name: 'Calculator',
        description: 'Calculator for your Math needs.',
        image: Calculator,
        rentalPrice: "100",
        extras: null,
        deposit: "0",
        location: 'MFU',
        usage: 'Available',
        rating: 4.0,
        ownerId: false,
        condition: 'One Time Used',
        status: 'Normal'
    },
    {
        id: 4,
        name: 'Camera',
        description: 'Make your day with CANON G7X.',
        image: Camera,
        rentalPrice: "500",
        extras: ["Extra Battery"],
        deposit: "0",
        location: 'MFU',
        usage: 'Taken',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 5,
        name: 'Rent Boyfriend',
        description: 'I can cook. I can take you beautiful photos.',
        image: Kyaw,
        rentalPrice: "600",
        extras: ["Love", "Care"],
        deposit: "100",
        location: 'MFU',
        usage: 'Available',
        rating: 3.0,
        ownerId: false,
        condition: 'Never Been Fall In Love',
        status: 'Normal'
    },
    {
        id: 6,
        name: 'Razor Mouse',
        description: 'Razor for everyone.',
        image: Mouse,
        rentalPrice: "100",
        extras: null,
        deposit: "0",
        location: 'MFU',
        usage: 'Taken',
        rating: 4.0,
        ownerId: false,
        condition: 'A Few Times Used',
        status: 'Normal'
    },
    {
        id: 7,
        name: 'Rent Boyfriend',
        description: 'I can cook. I can take you beautiful photos.',
        image: Myat,
        rentalPrice: "600",
        extras: ["Love", "Care"],
        deposit: "100",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Never Been Fall In Love',
        status: 'Normal'
    },
    {
        id: 8,
        name: 'JBL SoundBox',
        description: 'Let\'s Rock. SCHYEAH SCHYEAH.',
        image: SoundBox,
        rentalPrice: "300",
        extras: ["Spotify Premium 3 days"],
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 4.5,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 9,
        name: 'Tent',
        description: 'Tent for camping.',
        image: Tent,
        rentalPrice: "550",
        extras: ["Sleeping Bag"],
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 2.5,
        ownerId: false,
        condition: 'One Time Used',
        status: 'Normal'
    },
    {
        id: 10,
        name: 'VR',
        description: 'VR for everything. Dun do any stupid.',
        image: VR,
        rentalPrice: "700",
        extras: ["Charger", "Headset"],
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: true,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 11,
        name: 'Tralalero Nike Shoe',
        description: 'Stay up to date with brain root trend.',
        image: tralalero,
        rentalPrice: "200",
        extras: ["regret"],
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: true,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 12,
        name: 'Poly Station',
        description: 'Let\'s have a great time with your homie',
        image: ps5,
        rentalPrice: "1300",
        extras: ["2 Controllers", "Charger", "Headset"],
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: true,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 13,
        name: 'The North Fake',
        description: 'The winter is coming.',
        image: north,
        rentalPrice: "1000",
        extras: null,
        deposit: "150",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 14,
        name: 'Elvis Shirt',
        description: 'Get a fine shyt with this',
        image: elvis,
        rentalPrice: "400",
        extras: ["Charger", "Headset"],
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 15,
        name: 'Crocodile Shirt',
        description: 'Let\'s go to the zoo.',
        image: crocodile,
        rentalPrice: "700",
        extras: ["Crocodile Toy"],
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 16,
        name: 'Corcs daily shoes',
        description: 'GRWM',
        image: corcs,
        rentalPrice: " 100",
        extras: ["Jibbitz"],
        deposit: "0",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Used',
        status: 'Normal'
    },
    {
        id: 17,
        name: 'Bake',
        description: 'Bake me or be make.',
        image: bake,
        rentalPrice: "300",
        extras: null,
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 18,
        name: 'Tuna',
        description: 'TUNA with you.',
        image: tuna,
        rentalPrice: "700",
        extras: null,
        deposit: "50",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 19,
        name: 'Coma Shirt',
        description: 'For when you’re awake, but only technically. Soft, comfy, and perfect for doing nothing… aggressively.',
        image: coma,
        rentalPrice: "200",
        extras: null,
        deposit: "0",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
    {
        id: 20,
        name: 'Air Jordan 11',
        description: 'JORDAN can hoop 3 points......',
        image: jordan,
        rentalPrice: "2000",
        extras: null,
        deposit: "0",
        location: 'MFU',
        usage: 'Available',
        rating: 5.0,
        ownerId: false,
        condition: 'Brand New',
        status: 'Normal'
    },
]

export const dummyStatusDataLender = [
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
        totalPrice: 750,
        status: 'Pending',
    },
    {
        id: 2,
        itemId: 1,
        itemName: 'Tuna',
        itemImage: tuna,
        itemRating: 3.5,
        renterId: 1,
        renterName: 'Bheem',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 10,
        totalPrice: 7000,
        status: 'Packaging',
    },
    {
        id: 3,
        itemId: 1,
        itemName: 'The North Fake',
        itemImage: north,
        itemRating: 5.0,
        renterId: 1,
        renterName: 'SYP',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 2,
        totalPrice: 2000,
        status: 'Delivered',
    },
    {
        id: 4,
        itemId: 1,
        itemName: 'Air Jordan 11',
        itemImage: jordan,
        itemRating: 5.0,
        renterId: 1,
        renterName: 'Micheal Jordan',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 2,
        totalPrice: 2000,
        status: 'Recieved',
    },
    {
        id: 5,
        itemId: 1,
        itemName: 'Poly Station 5',
        itemImage: ps5,
        itemRating: 5.0,
        renterId: 1,
        renterName: 'Travis Scott',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 1,
        totalPrice: 1300,
        status: 'Recieved',
    },
]

export const dummyStatusDataRenter = [
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
        totalPrice: 750,
        status: 'Pending',
    },
    {
        id: 2,
        itemId: 1,
        itemName: 'Tuna',
        itemImage: tuna,
        itemRating: 3.5,
        renterId: 1,
        renterName: 'Bheem',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 10,
        totalPrice: 7000,
        status: 'Packaging',
    },
    {
        id: 3,
        itemId: 1,
        itemName: 'The North Fake',
        itemImage: north,
        itemRating: 5.0,
        renterId: 1,
        renterName: 'SYP',
        requestedOn: 'Mon, Apirl 28 2025',
        duration: 2,
        totalPrice: 2000,
        status: 'Delivered',
    },
]

export const dummyHistoryData = [
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
        status: 'Completed',
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
        totalPrice: 750,
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
        status: 'Completed',
        totalPrice: 750,
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
        message: 'You: SCHYEAH SCHYEAH SCHYEAH',
        name: 'Ken Carson',
        image: shark,
        date: '3h'
    },
    {
        id: 3,
        message: 'Fin fin fin fin fin fin',
        name: 'Trefish Skot',
        image: fish,
        date: '5h'
    },
]

export const messages = {
    '1': [
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
    ],
    '2': [
        {
            id: 1,
            message: 'Huh',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 2,
            message: 'Huh, Huh, Huh, Huh',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 3,
            message: 'Huh, Huh, Huh, Huh, Huh, Huh, Huh',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 4,
            message: 'Huh, Huh, Huh, Huh, Huh, Huh, Huh',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 5,
            message: 'PROMETHAZINE HABIT, LEAN HABIT, CODEINE HABIT',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 6,
            message: 'KICKSTAND YEAH, BIKER, YEAH, YEAH, I\'M LEANIN\'',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 7,
            message: 'I CHOP THE TOP OF THE MCLEAREN,',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 8,
            message: 'THIS AIN\'T NO LAMBORGHINI',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 9,
            message: 'MY WHITE HO GOT BIG TITIES',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 10,
            message: 'SHE REMIND ME OF',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 11,
            message: 'What do you want to rent from me?!!!',
            isYou: true,
            date: '5h ago',
            image: shark
        },
        {
            id: 12,
            message: 'SYDNEY SWEENEY, SYDENY SWEENEY',
            isYou: false,
            date: '5h ago',
            image: shark
        },
        {
            id: 13,
            message: 'SCHYEAH SCHYEAH SCHYEAH',
            isYou: true,
            date: '5h ago',
            image: shark
        },
    ],
    '3': [
        {
            id: 1,
            message: 'Hello',
            isYou: false,
            date: '5h ago',
            image: fish
        },
        {
            id: 2,
            message: 'Im trefish skot i need 2000 THB to get back to Amerika',
            isYou: false,
            date: '5h ago',
            image: fish
        },
        {
            id: 3,
            message: 'Send on promptpay',
            isYou: false,
            date: '5h ago',
            image: fish
        },
        {
            id: 4,
            message: 'I need a bit',
            isYou: false,
            date: '5h ago',
            image: fish
        },
        {
            id: 5,
            message: 'If you do you can meet Kanye East',
            isYou: false,
            date: '5h ago',
            image: fish
        },
        {
            id: 6,
            message: 'He\'s with me',
            isYou: false,
            date: '5h ago',
            image: fish
        },
        {
            id: 7,
            message: 'hello this is YEE!!!!!!!!!!',
            isYou: false,
            date: '5h ago',
            image: fish
        },
        {
            id: 8,
            message: '🥷 How do i know ur the real travis scott',
            isYou: true,
            date: '5h ago',
            image: fish
        },
        {
            id: 9,
            message: 'Fin fin fin fin fin fin',
            isYou: false,
            date: '5h ago',
            image: fish
        },
    ]
}

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
export const fakeTodayData = [
    {
        id: 1,
        itemName: 'VR',
        image: VR,
        rating: 5.0,
        days: '2 days rent',
        created_at: '1h ago'
    },
    {
        id: 2,
        itemName: 'Dike',
        image: Dike,
        rating: 5.0,
        days: '7 days rent',
        created_at: '1h ago'
    },
    {
        id: 3,
        itemName: 'Tralalero Nike Shoe',
        image: tralalero,
        rating: 5.0,
        days: '3 days rent',
        duration: '',
        created_at: '1h ago'
    },
    {
        id: 4,
        itemName: 'Poly Station',
        image: ps5,
        rating: 5.0,
        days: '2 days rent',
        created_at: '2h ago'
    },
    {
        id: 5,
        itemName: 'Dike',
        image: Dike,
        rating: 5.0,
        days: '30 days rent',
        duration: '',
        created_at: '3h ago'
    },
]


