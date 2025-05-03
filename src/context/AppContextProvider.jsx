/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react"

const AppContext = createContext()

const initialState = {
    isRenter: true
}

const appReducer = (state, action) => {
    switch (action.type) {
        case "app/swithRole":
            return { ...state, isRenter: !state.isRenter }
        default:
            return state
    }
}

export default function AppContextProvider({ children }) {
    const [{ isRenter }, dispatch] = useReducer(appReducer, initialState)

    return (
        <AppContext.Provider value={{ isRenter, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext)

    if (context === undefined) throw new Error('useApp must be used within AppContextProvider')

    return context
}
