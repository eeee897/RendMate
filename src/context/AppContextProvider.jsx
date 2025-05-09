/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react"
import { fakeTodayData, items } from "../utils/constants"

const AppContext = createContext()

const initialState = {
    allItems: items,
    tdyAct: fakeTodayData,
    user: {},
    isAuthenticated: false,
    isRenter: true,
    isVerified: false
}

const appReducer = (state, action) => {
    switch (action.type) {
        case "app/log-in":
            return { ...state, user: action.payload, isAuthenticated: true }
        case "app/swithRole":
            return { ...state, isRenter: !state.isRenter }
        case 'app/verified':
            return { ...state, isVerified: true }
        case "app/log-out":
            return initialState
        case "app/add-item":
            return { ...state, allItems: [...state.allItems, action.payload] }
        case "app/edit-item":
            return { ...state, allItems: state.allItems.map(item => item.id === action.payload.id ? action.payload : item) }
        case "app/delete-item":
            return { ...state, allItems: state.allItems.filter(item => item.id !== action.payload) }
        case "app/disable-item":
            return { ...state, allItems: state.allItems.map(item => item.id === action.payload ? { ...item, status: 'Disabled' } : item) }
        case "app/undisable-item":
            return { ...state, allItems: state.allItems.map(item => item.id === action.payload ? { ...item, status: 'Normal' } : item) }
        case "app/delete-tdy-act":
            return { ...state, tdyAct: state.tdyAct.filter(item => item.id !== action.payload) }
        default:
            return state
    }
}

export default function AppContextProvider({ children }) {
    const [{ allItems, tdyAct, user, isAuthenticated, isRenter, isVerified }, dispatch] = useReducer(appReducer, initialState)

    return (
        <AppContext.Provider value={{ allItems, tdyAct, user, isAuthenticated, isRenter, isVerified, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext)

    if (context === undefined) throw new Error('useApp must be used within AppContextProvider')

    return context
}
