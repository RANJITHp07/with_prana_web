'use client'
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const badgeData = [
    { label: '🌙 Sleep & Rest', count: 6 },
    { label: 'Morning 🎯 Focus & Mind Support', count: 3 },
    { label: '🫂 Healing & Connectionning', count: 8 },
];

const defaultTextColor = 'text-[#2B7272]';
const defaultBgColor = 'bg-white';
const selectedTextColor = 'text-[#545C90]';
const selectedBgColor = 'bg-[#CCD3FF] border border-[#545C90]';

export default function BadgeSelector() {
    const [selectedBadges, setSelectedBadges] = useState<string>('');

    const toggleBadge = (label: string) => {
        setSelectedBadges(label);
    };

    return (
        <div className="flex flex-wrap my-3 gap-3">
            {badgeData.map(({ label, count }) => {
                const isSelected = Boolean(selectedBadges === label);
                return (
                    <div
                        key={label}
                        className={cn(
                            'cursor-pointer rounded-full font-poppins-400 text-[12px] px-3 py-1 flex items-center gap-2',
                            isSelected ? `${selectedBgColor} ${selectedTextColor}` : `${defaultBgColor} ${defaultTextColor}`
                        )}
                        onClick={() => toggleBadge(label)}
                    >
                        {label}
                    </div>
                );
            })}
        </div>
    );
}
