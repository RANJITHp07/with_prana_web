import { Badge } from '@/components/ui/badge'
import VideoCard from '@/components/videoCard'
import { ChevronLeft, Sun } from 'lucide-react'
import React from 'react'
import Header from './_components/header'
import BottomNav from '@/components/bottomNav'

function Downloads() {
    return (
        <div className='h-screen bg-mint-to-white font-poppins-400 p-4'>
            <div className='max-w-[1000px] mx-auto'>
                <Header />
                <div>
                    <p className='font-sniglet-400 text-[24px] text-[#1F5D57]'>Access your saved meditations<br />
                        anytime, even offline.</p>
                    <div className='my-4'>
                        <Badge className={'border border-[#2B7272] bg-[#DDF3E5C7] text-[12px] text-[#2B7272] rounded-full font-poppins-400'}>
                            Audio
                        </Badge>

                        <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 xl:max-w-[1200px] xl:mx-auto">
                            <VideoCard />
                            <VideoCard like={true} />
                            <VideoCard />
                            <VideoCard />
                            <VideoCard like={true} />
                            <VideoCard />
                        </div>

                    </div>
                </div>
            </div>
            <BottomNav activeTab='downloads' />
        </div >
    )
}

export default Downloads