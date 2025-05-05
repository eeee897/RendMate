import React from 'react'

export default function Contact() {
    return (
        <section id='contact' className="bg-darkViolet text-white text-center px-8 py-24">
            <h3 className="text-5xl font-bold mb-2">Get in touch</h3>
            <p className="mb-4 text-sm md:text-base">Have questions or want to learn more? Reach out to us!</p>
            <div className='flex flex-col md:flex-row items-center gap-2 justify-center'>
                <input type="text" placeholder='name@email.com' className='py-2 px-4 w-[300px] text-yellow-500 placeholder:text-yellow-500 bg-slate-100 focus:outline-0 rounded-full ' />
                <button className="text-white bg-primary rounded-full px-4 font-bold py-2 hover:bg-cyan-500 border-b-[3px] hover:border-t-[3px] hover:border-t-cyan-500 border-b-cyan-800 hover:border-b-0  cursor-pointer">
                    Email us
                </button>
            </div>
        </section>
    )
}
