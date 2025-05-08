import verify from '@/assets/animations/verify.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useContext } from 'react'
import { ModalContext } from './Modal'
import { XIcon } from 'lucide-react'

export default function VerifyModal({ onCloseModal }) {
    const { open, close } = useContext(ModalContext)

    const handleVerifyClick = () => {
        close()
        open('verify-start')
    }

    return (
        <div className='bg-slate-50 relative p-5 flex flex-col space-y-4 items-center justify-center rounded-lg lg:w-[450px] dark:bg-veryDarkViolet'>
            <button type='button' onClick={onCloseModal} className='absolute top-5 right-5 cursor-pointer hover:border hover:border-primary border border-transparent dark:text-slate-50  rounded-lg p-1 transition duration-300'>
                <XIcon />
            </button>
            <DotLottieReact
                src={verify}
                loop
                autoplay
                style={{ width: '300px', height: '220px' }}
            />
            <h1 className='text-2xl text-darkViolet dark:text-white font-bold'>Verify your account.</h1>
            <p className='max-w-xs text-sm mx-auto dark:text-grayishViolet text-veryDarkBlue text-center pb-4'>
                We need to verify your account. You need to <strong>upload ID card</strong> or <strong>Passport</strong>.
                (Verify request would take 2 to 3 days)
            </p>
            <button
                onClick={handleVerifyClick}
                className='px-6 py-1.5 bg-primary rounded-full font-bold text-white border-b-[3px] border-b-cyan-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-cyan-500 hover:bg-cyan-500 cursor-pointer'>
                Verify
            </button>
        </div>
    )
}