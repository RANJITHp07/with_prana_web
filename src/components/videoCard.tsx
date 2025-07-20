import { Heart } from 'lucide-react';
import React from 'react';

type Props = {
    like?: boolean
}

function VideoCard({ like = false }: Props) {
    return (
        <div className='p-2  w-[204px] rounded-[20px] bg-[#F5F5F5] inline-flex'>
            <div
                className="relative w-[200px] h-[202px] rounded-[20px] bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('/icons/audio.jpg')" }}
            >

                {
                    like &&
                    <div className="absolute top-3 right-3 w-[30px] h-[30px] bg-[#FF0000] rounded-full flex justify-center items-center">
                        <Heart className="h-5 w-5 text-white" />
                    </div>
                }


                <div className="absolute bottom-0 w-full px-3 py-2 backdrop-blur-[2px] bg-black/10 text-white rounded-b-[20px]">
                    <p className="font-poppins-700 text-[14px] leading-tight">
                        Soft Heart, Strong Boundaries
                    </p>
                    <p className="font-poppins-400 text-[10px] leading-tight mt-1">
                        14 min • Healing & Connection
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
