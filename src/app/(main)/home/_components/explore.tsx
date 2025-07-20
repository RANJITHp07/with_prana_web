import AudioCard from '@/components/audioCard'
import { Badge } from '@/components/ui/badge'
import { Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const topics = [
    '🌿 Overthinking',
    '🛌 Night Routine',
    '💼 Burnout',
    '🌀 Grounding',
    '🧒 Inner Child',
    '💖 Self-Worth',
    '🌊 Relaxation',
    '🧠 ADHD',
    '✨ Spiritual Connection',
]

const badgeClass =
    'border border-[#2B7272] bg-[#DDF3E5C7] text-[12px] text-[#2B7272] rounded-full font-poppins-400'

function Explore() {
    return (
        <div className='my-16'>
            <p className="text-[#484848] font-sniglet-400 text-lg mb-4">
                Explore by topic
            </p>
            <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                    <Badge key={topic} className={badgeClass}>
                        {topic}
                    </Badge>
                ))}
            </div>
            <p className="text-[#484848] font-sniglet-400 text-lg my-4 mt-8">
                Listen Again
            </p>
            <AudioCard />
            <AudioCard />
            <AudioCard />

        </div>
    )
}

export default Explore
