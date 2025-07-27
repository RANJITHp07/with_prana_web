import React from 'react'
import Header from './_components/header'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import AudioImage from './_components/image'
import BottomNav from '@/components/bottomNav'
import AudioProgressBar from './_components/audio'

function MediationDetails() {
    return (
        <div className="relative h-screen p-4 bg-gradient-to-b from-[#2B7272] to-[#FFFFFF] overflow-hidden">
            <div className=' md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto'>
                <Header />

                <div className='my-6'>
                    <AudioImage />
                    <h1 className='font-sniglet-400 text-[32px] text-center my-5 text-[#1F5D57]'>Smooth win before sleep</h1>

                    <AudioProgressBar />
                </div>
            </div>
            <BottomNav activeTab='home' />
        </div>
    )
}

export default MediationDetails