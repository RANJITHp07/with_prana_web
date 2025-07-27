'use client'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function AudioImage() {
    const [liked, setLiked] = useState(false)
    return (
        <div className='flex justify-center '>
            <div className='w-[800px] h-[400px] relative border-5 border-[#F5F5F5] rounded-[20px] '>
                <Image src={'/icons/audioImage.jpg'} width={740} height={341} alt={"audio"} className='w-full h-full rounded-[20px]' />
                <div onClick={() => setLiked(!liked)} className={`absolute bottom-4 right-4 ${liked ? "bg-[#FF0000]" : "bg-[#FFFFFF66]"}  rounded-full  p-2  shadow-md text-sm text-white cursor-pointer`}>
                    <Heart className='h-6 w-6' />
                </div>
            </div>
        </div >
    )
}

export default AudioImage