import { Badge } from '@/components/ui/badge'
import { Play } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <div className='text-center my-16'>
            <h6 className='font-poppins-400 text-[16px] text-[#000000]'>Today's Suggestion</h6>
            <h1 className='font-sniglet-400  leading-[44px] my-4 text-[44px] text-[#2B7272]'>Inhale peace,<br /> exhale tension.</h1>
            <Badge className='bg-white rounded-full'>
                <div className='flex gap-2 items-center rounded-full p-1'>
                    <Play className="h-4 w-4 text-[#484848] fill-[#484848]" />
                    <p className='font-poppins-400 text-[#484848] text-[16px]'>                9 minutes</p>
                </div>
            </Badge>
        </div>
    )
}

export default Header