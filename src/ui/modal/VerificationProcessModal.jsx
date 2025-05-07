import React, { useState } from 'react';
import ImageDropDown from '../ImageDropDown';
import { XIcon } from 'lucide-react';
import celebrate from '@/assets/animations/celebrate.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useApp } from '@/context/AppContextProvider';

export default function VerificationProcessModal({ onCloseModal }) {
    const [currentStep, setCurrentStep] = useState(1);
    const { dispatch } = useApp()

    const steps = [
        { id: 1, label: "Upload Passport", desc: "Upload your ID or passport" },
        { id: 2, label: "Selfie with ID/Passport", desc: "Take a selfie holding your ID or passport" },
        { id: 3, label: "Upload Bank QR Code", desc: "Provide your Bank QR code for verification" },
    ];

    return (
        <div className='bg-slate-50 relative p-5 rounded-lg md:w-[550px] lg:w-[650px] dark:bg-veryDarkViolet'>
            <button type='button' onClick={onCloseModal} className='absolute top-5 right-5 cursor-pointer hover:border hover:border-primary border border-transparent dark:text-slate-50  rounded-lg p-1 transition duration-300'>
                <XIcon />
            </button>
            <h1 className="text-primary font-bold text-2xl border-b border-gray-200 pb-4 mb-4 dark:border-veryDarkBlue">Verification Process.</h1>

            {/* Timeline */}
            <div className="mb-8 flex justify-between items-center relative">
                {steps.map((step, idx) => (
                    <div key={step.id} className="flex-1 flex flex-col items-center relative z-10">
                        {/* Step Circle */}
                        <div className={`w-10 h-10 relative z-[2] rounded-full flex items-center justify-center
                ${currentStep > step.id ? 'bg-green-500 text-white' :
                                currentStep === step.id ? 'bg-primary text-white' :
                                    'bg-gray-300 text-gray-700'}
            `}>
                            {currentStep > step.id ? '✓' : step.id}
                        </div>
                        {/* Step Label */}
                        <p className="mt-2 text-[10px] sm:text-xs text-center text-darkViolet dark:text-grayishViolet font-bold">{step.label}</p>

                        {/* Connector Line */}
                        {idx < steps.length - 1 && (
                            <div className="absolute top-5 right-[-50%] w-full h-1">
                                <div className={`h-1 ${currentStep > step.id ? 'bg-green-500' : 'bg-grayishViolet'} w-full transition-all duration-300`} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Step Details */}
            <div className="space-y-6">
                {steps.map((step) => (
                    currentStep === step.id && (
                        <div key={step.id}>
                            <p className="text-sm text-darkViolet mb-4 dark:text-slate-50">{step.desc}</p>
                            <ImageDropDown />
                            <button
                                onClick={() => setCurrentStep(prev => prev + 1)}
                                className='px-6 py-1.5 bg-primary rounded-full font-bold text-white border-b-[3px] border-b-cyan-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-cyan-500 hover:bg-cyan-500 cursor-pointer'
                            >
                                Continue
                            </button>
                        </div>
                    )
                ))}

                {currentStep > steps.length && (
                    <div className="text-center pb-5 flex flex-col items-center space-y-8">
                        <DotLottieReact
                            src={celebrate}
                            loop
                            autoplay
                            style={{ width: '350px', height: '200px' }}
                        />
                        <div>
                            <h2 className="text-2xl font-bold text-green-600">Verification Completed.</h2>
                            <p className="text-darkViolet dark:text-slate-50 mb-4">Thank you! Your documents have been submitted for review.</p>
                            <button
                                type='button'
                                onClick={() => {
                                    dispatch({ type: 'app/verified' })
                                    onCloseModal()
                                }}
                                className='px-6 py-1.5 bg-primary rounded-full font-bold text-white border-b-[3px] border-b-cyan-800 hover:border-b-0 hover:border-t-[3px] hover:border-t-cyan-500 hover:bg-cyan-500 cursor-pointer'>
                                Okay
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}