import { Badge } from '@/components/ui/badge'
import { FolderPlus, Sun, Volume2 } from 'lucide-react'
import React from 'react'
import Header from './_components/header'
import BadgeSelector from './_components/category'
import AudioCard from '@/components/audioCard'
import BottomNav from '@/components/bottomNav'

function MyLibrary() {
    return (
        <div className='h-screen bg-mint-to-white font-poppins-400 p-4'>
            <div className=' md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto'>
                <div className=' flex justify-between items-center'>
                    <Header />
                    <div className='flex gap-4'>
                        <Sun className='h-6 w-6 ' />
                    </div>
                </div>
                <div>
                    <p className='font-sniglet-400 text-[24px] text-[#1F5D57]'>Organize your meditations.</p>
                    <div className='my-4'>
                        <Badge className={'border border-[#2B7272] bg-[#DDF3E5C7] text-[12px] text-[#2B7272] rounded-full font-poppins-400'}>
                            <Volume2 className='fill-[#2B7272] h-[20px] w-[20px]' />
                            Audio
                        </Badge>


                        <BadgeSelector />
                        <div className="w-full my-5">
                            <div className='md:flex gap-2 items-center'>
                                <AudioCard />
                                <p className='font-poppins-600 text-primary text-[14px] mx-3 md:mx-0'>Remove</p>
                            </div>
                            <div className='md:flex gap-2 items-center'>
                                <AudioCard />
                                <p className='font-poppins-600 text-primary text-[14px] mx-3 md:mx-0'>Remove</p>
                            </div>
                            <div className='md:flex gap-2 items-center'>
                                <AudioCard />
                                <p className='font-poppins-600 text-primary text-[14px] mx-3 md:mx-0'>Remove</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <BottomNav activeTab='liked' />
        </div >
    )
}

export default MyLibrary