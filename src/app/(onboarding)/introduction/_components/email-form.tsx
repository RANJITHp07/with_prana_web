import { Input } from '@/components/ui/input'
import React from 'react'

function EmailForm() {
    return (
        <div className="font-poppins-400 font-normal flex flex-col justify-center items-center lg:block">
            <h1 className="text-[32px] leading-[38px] max-w-[400px] text-primary tracking-normal font">
                Let us know where to <br className='hidden lg:block' /> send your calm.
            </h1>
            <p className='text-[#000000] my-2 text-[16px] font-p'>Enter your email to unlock your 14-day <br className='hidden lg:block' />free access to all meditations.</p>
            <div className='my-5 md:my-12'>
                <Input placeholder='Enter your email id' className='md:w-[335px] text-[16px] bg-white border text-center border-[#F5F5F5] font-poppins-500' />
                <p className='text-[#484848] mt-2 text-[10px] text-center lg:text-left'>We’ll only use this to help you continue your practice and <br /> share mindful updates — no noise, ever.</p>
            </div>
        </div >
    )
}

export default EmailForm