import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router'
import { Toaster } from 'react-hot-toast'
import AppContextProvider from './context/AppContextProvider'

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <Router />
    <Toaster position="top-center" toastOptions={{
      duration: 3000,
      removeDelay: 1000,
      style: {
        textAlign: 'center',
        background: "#ffffff",
        color: "#333",
        padding: "12px",
        borderRadius: "8px",
      },
    }} />
  </AppContextProvider>
)
