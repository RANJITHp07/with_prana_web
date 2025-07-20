import { Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function AudioCard() {
    return (
        <div className='bg-white w-full h-[80px] my-2 rounded-[30px] p-3 flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <Image
                    src="/icons/flower-1.png"
                    alt="flower"
                    width={40}
                    height={40}
                    className="w-8 sm:w-8 md:w-10 h-8 sm:h-8 md:h-10"
                />                <div>
                    <p className='font-poppins-600 text-[#1F5D57] text-[16px]'>Peace begins with a smile</p>
                    <p className='text-[#484848] font-poppins-400 text-[12px]'>10 min. Sleep & Rest</p>
                </div>
            </div>
            <div className='bg-[#F8F9FF] h-[38px] w-[38px] rounded-full flex items-center justify-center'>
                <Play className="h-4 w-4 text-[#484848] fill-[#484848]" />
            </div>
        </div>
    )
}

export default AudioCard