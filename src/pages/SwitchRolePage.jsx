import comingSoon from '@/assets/animations/comming_soon.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function SwitchRolePage() {
    return (
        <section className='flex flex-col gap-2'>
            <div className='flex items-center justify-center mt-24'>
                <DotLottieReact
                    style={{ width: '50%' }}
                    src={comingSoon}
                    loop
                    autoplay
                />
            </div>
        </section>
    )
}
