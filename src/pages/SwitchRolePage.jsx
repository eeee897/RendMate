import cat from '@/assets/animations/cat.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useApp } from '@/context/AppContextProvider'
import { useState } from 'react';
import Spinner from '../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

export default function SwitchRolePage() {
    usePageTitle('Switch Role')
    const { isRenter, dispatch } = useApp()
    const navigate = useNavigate()
    const [isSwitching, setIsSwitching] = useState(false)

    const onSwitchLender = async () => {
        setIsSwitching(true)
        await new Promise(resolve => setTimeout(resolve, 3000))
        dispatch({ type: 'app/swithRole' })
        navigate('/app/my-items')
        setIsSwitching(false)
    }

    const onSwitchRenter = async () => {
        setIsSwitching(true)
        await new Promise(resolve => setTimeout(resolve, 3000))
        dispatch({ type: 'app/swithRole' })
        navigate('/app/items-feed')
        setIsSwitching(false)
    }

    return (
        <section className='flex flex-col gap-6 items-center justify-center mt-16 text-center px-4'>
            <div className='w-full max-w-md'>
                <DotLottieReact
                    style={{ width: '100%' }}
                    src={cat}
                    loop
                    autoplay
                />
            </div>

            <div className='max-w-md'>
                <h2 className='text-2xl font-bold text-darkViolet mb-2'>
                    Ready to switch?
                </h2>
                <p className='text-gray-600 mb-6'>
                    {
                        isRenter ? (
                            <>
                                By switching your role, you'll be able to list your own items for rent, manage rental requests, and track your earnings as a <strong>Lender</strong>.
                            </>
                        ) : (
                            <>
                                Switch Back to Renter to be able to browse and search items, request rentals and payments, and manage your rental history.
                            </>
                        )
                    }
                </p>
                {isRenter ? <button
                    disabled={isSwitching}
                    onClick={onSwitchLender}
                    type='button'
                    className="text-white disabled:cursor-not-allowed bg-primary rounded-full px-6 font-bold py-3 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0 cursor-pointer"
                >
                    {
                        isSwitching ?
                            <div className='flex items-center gap-2'>
                                <Spinner /> Please wait...
                            </div> : <>Switch to Lender</>
                    }
                </button> :
                    <button
                        disabled={isSwitching}
                        onClick={onSwitchRenter}
                        type='button'
                        className="text-white disabled:cursor-not-allowed bg-primary rounded-full px-6 font-bold py-3 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0 cursor-pointer"
                    >
                        {
                            isSwitching ?
                                <div className='flex items-center gap-2'>
                                    <Spinner /> Please wait...
                                </div> : <>Switch to Renter</>
                        }
                    </button>}
            </div>
        </section>
    );
}