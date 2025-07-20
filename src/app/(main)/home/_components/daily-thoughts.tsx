import AudioCard from '@/components/audioCard'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DailyThoughts() {
    return (
        <div className='my-16'>
            <div className='bg-[#DDF3E5] w-full  rounded-[30px] p-5'>
                <p className='text-center my-3 font-poppins-600 text-[#1F5D57]'>✨ Daily Thought </p>
                <AudioCard />
            </div>
            <Link href={'/daily-thoughts'}>
                <p className='text-center my-3 font-poppins-600 text-[#1F5D57] '>View All</p>
            </Link>
        </div >
    )
}

export default DailyThoughts