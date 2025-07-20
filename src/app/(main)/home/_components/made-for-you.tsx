import VideoCard from '@/components/videoCard';
import React from 'react';

function MadeForYou() {
    const dummyArray = Array.from({ length: 11 }, (_, i) => i);
    return (
        <div className="w-full max-w-screen overflow-hidden">
            <p className="text-[#484848] font-sniglet-400 text-lg mb-4">
                Made for you
            </p>

            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-5 px-1 min-w-max gap-">
                    {dummyArray.map((item, index) => (
                        <VideoCard key={index} like={index % 2 == 0} />
                    ))}

                </div>
            </div>
        </div>
    );
}

export default MadeForYou;
