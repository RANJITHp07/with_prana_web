import { House, Download, BookMarked, Heart, CircleUser } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {
    activeTab: string
}

type NavItemProps = {
    icon: React.ElementType;
    label: string;
    active: boolean;
};


function BottomNav({ activeTab }: Props) {
    return (
        <div className="fixed bottom-0 md:bottom-4 w-full md:w-[401px] p-2  left-1/2 transform -translate-x-1/2 bg-[#1F5D57] text-white flex items-center justify-between md:justify-center gap-2 md:gap-7 md:rounded-2xl shadow-lg">
            {/* Home */}
            <Link href={'/home'}>
                <NavItem icon={House} label="Home" active={activeTab === 'home'} />
            </Link>

            {/* Downloads */}
            <Link href={'/downloads'}>
                <NavItem icon={Download} label="Downloads" active={activeTab === 'downloads'} />
            </Link>


            {/* My Library */}
            <Link href={'/mylibrary'}>
                <NavItem icon={BookMarked} label="My Library" active={activeTab === 'library'} />
            </Link>

            {/* Liked */}
            <Link href={'/liked'}>
                <NavItem icon={Heart} label="Liked" active={activeTab === 'liked'} />
            </Link>

            {/* Profile */}
            <Link href={'/profile'}>
                <NavItem icon={CircleUser} label="Profile" active={activeTab === 'profile'} />
            </Link>
        </div>
    );
}

function NavItem({ icon: Icon, label, active }: NavItemProps) {
    return (
        <div className="flex flex-col justify-center items-center ">
            <div
                className={`p-2 rounded-full ${active ? 'bg-white text-[#1F5D57]' : 'text-white'
                    }`}
            >
                <Icon className="h-6 w-6" />
            </div>
            <p className={`font-poppins-600 text-[10px] ${active ? 'text-white' : 'text-white/70'}`}>
                {label}
            </p>
        </div>
    );
}

export default BottomNav;
