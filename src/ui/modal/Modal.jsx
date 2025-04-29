/* eslint-disable react-refresh/only-export-components */
import { cloneElement, createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"
import useClickOutside from '@/hooks/useClickOutside'

export const ModalContext = createContext()

export default function Modal({ children }) {
    const [openName, setOpenName] = useState('')
    const open = setOpenName
    const close = () => setOpenName('')

    return (
        <ModalContext.Provider value={{ open, close, openName }}>
            {children}
        </ModalContext.Provider>
    )
}

const Opens = ({ children, open: openWindowName }) => {
    const { open } = useContext(ModalContext)
    return cloneElement(children, { onClick: () => open(openWindowName) })
}

const Window = ({ children, name }) => {
    const { openName, close } = useContext(ModalContext)
    const [isClosing, setIsClosing] = useState(false)

    const closeWithAnimation = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
            close()
        }, 300)
    }

    const modalRef = useClickOutside(() => {
        if (!isClosing) closeWithAnimation()
    })

    if (openName !== name && !isClosing) return null

    return createPortal(
        <div className={`fixed px-6 z-[100] inset-0 flex items-center bg-black/50 justify-center drop-shadow-lg bg-opacity-50 backdrop-blur-xs transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
            <div ref={modalRef} className={`${isClosing ? 'animate-slideDown' : 'animate-slideUp'}`}>
                <div>
                    {cloneElement(children, { onCloseModal: closeWithAnimation })}
                </div>
            </div>
        </div>,
        document.body
    )
}

Modal.Opens = Opens
Modal.Window = Window