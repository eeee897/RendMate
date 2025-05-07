/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react"

const AppContext = createContext()

const initialState = {
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
        default:
            return state
    }
}

export default function AppContextProvider({ children }) {
    const [{ user, isAuthenticated, isRenter, isVerified }, dispatch] = useReducer(appReducer, initialState)

    return (
        <AppContext.Provider value={{ user, isAuthenticated, isRenter, isVerified, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext)

    if (context === undefined) throw new Error('useApp must be used within AppContextProvider')

    return context
}
