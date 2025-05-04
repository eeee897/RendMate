/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react"

const ThemeContext = createContext()

const initialState = {
    theme: localStorage.getItem('theme') || 'light'
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case "theme/toggle-theme":
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
        default:
            return state
    }
}

export default function ThemeContextProvider({ children }) {
    const [{ theme }, dispatch] = useReducer(themeReducer, initialState)

    const toggleTheme = (theme) => {
        localStorage.setItem('theme', theme)
        dispatch({ type: 'theme/toggle-theme' })
    }

    const isDark = theme === 'dark'

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
        }
        else {
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (context === undefined) throw new Error('useTheme must be used within ThemeContextProvider')

    return context
}
