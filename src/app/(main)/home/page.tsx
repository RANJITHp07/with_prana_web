import { BookMarked, CircleUser, CloudSun, Download, Heart, House, Sun } from 'lucide-react'
import React from 'react'
import Header from './_components/header'
import Category from './_components/category'
import DailyThoughts from './_components/daily-thoughts'
import Explore from './_components/explore'
import Image from 'next/image'
import MadeForYou from './_components/made-for-you'
import BottomNav from '@/components/bottomNav'
import Subscribe from './_components/subscribe'

function Home() {
    return (
        <div className='min-h-screen bg-mint-to-white font-poppins-400 '>
            <div className='p-4 md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto'>
                <div className='py-3 flex justify-between items-center'>
                    <div className='inline-flex px-4 py-2 rounded-full gap-2 items-center bg-[#FFFFFF40]'>
                        <CloudSun className='h-6 w-6 ' />
                        <p> Good morning Arjun</p>
                    </div>
                    <div>
                        <Sun className='h-6 w-6 ' />
                    </div>
                </div>
                <Header />
                <hr
                    className="border-t border-dotted border-[#63AF95] w-full h-0.5 bg-transparent relative"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
                        maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                    }}
                />
                <div className='space-y-6'>
                    <Category />
                    <MadeForYou />
                    <DailyThoughts />
                    <hr
                        className="border-t border-dotted border-[#63AF95] w-full h-0.5 bg-transparent relative"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
                            maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                        }}
                    />
                    <Explore />
                    <hr
                        className="border-t border-dotted border-[#63AF95] w-full h-0.5 bg-transparent relative"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
                            maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                        }}
                    />
                    <Subscribe />
                </div>
            </div >
            <BottomNav activeTab='home' />
        </div >
    )
}

export default Home