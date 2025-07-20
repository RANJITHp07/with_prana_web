'use client'
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const badgeData = [
    { label: 'General', count: 6 },
    { label: 'Morning Meditations', count: 3 },
    { label: 'For Evening', count: 8 },
];

const defaultTextColor = 'text-[#2B7272]';
const defaultBgColor = 'bg-white';
const selectedTextColor = 'text-white';
const selectedBgColor = 'bg-[#2B7272]';

export default function BadgeSelector() {
    const [selectedBadges, setSelectedBadges] = useState();

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
                        <span
                            className={cn(
                                'h-4 w-4 flex justify-center items-center rounded-sm font-poppins-600 text-[12px] px-2',
                                isSelected ? `${defaultBgColor} ${defaultTextColor}` : 'bg-[#DEF4E6] text-[#2B7272]'
                            )}
                        >
                            {count}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
