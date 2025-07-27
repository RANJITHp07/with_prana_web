'use client'

import React from 'react'
import Link from 'next/link'
import {
    ArrowRight,
    Bell,
    CreditCard,
    Download,
    FileText,
    Heart,
    HelpCircle,
    User
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const MenuRow = ({
    icon: Icon,
    label,
    showBadge = false,
    badgeText,
    bordered = true,
    href = '#'
}: {
    icon: React.ElementType
    label: string
    showBadge?: boolean
    badgeText?: string
    bordered?: boolean
    href?: string
}) => (
    <Link href={href}>
        <div className={`flex items-center justify-between p-4 ${bordered ? 'border-b border-[#f5f5f5]' : ''} hover:bg-gray-50 cursor-pointer`}>
            <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-[#484848]" />
                <span className="text-[#000000] font-medium">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                {showBadge && (
                    <Badge className="border-[#f58e05] border-2 text-[#f58e05] font-poppins-600 bg-transparent rounded-full">
                        {badgeText}
                    </Badge>
                )}
                <div className="border border-[#F5F5F5] rounded-lg flex justify-center items-center h-[26px] w-[26px]">
                    <ArrowRight className="h-4 w-4 text-[#013913]" />
                </div>
            </div>
        </div>
    </Link>
)

function MenuItem() {
    return (
        <div className="flex-1 text-[14px] font-poppins-400 px-6 py-6 mt-12 relative md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto">
            <div className="overflow-hidden">

                {/* Subscription Section */}
                <div className="bg-white rounded-2xl shadow-md border border-[#F5F5F5]">
                    <MenuRow
                        icon={CreditCard}
                        label="Subscription Status"
                        showBadge
                        badgeText="Free Plan"
                        href="/plans"
                    />
                    <MenuRow icon={User} label="Account Info" href="/account" />
                </div>

                {/* Downloads / Favorites / Notifications */}
                <div className="my-5 bg-white rounded-2xl shadow-md border border-[#F5F5F5]">
                    <MenuRow icon={Download} label="Downloads" href="/downloads" />
                    <MenuRow icon={Heart} label="Favorites" href="/liked" />
                    <MenuRow icon={Bell} label="Notifications" bordered={false} href="/notifications" />
                </div>

                {/* Support / Terms */}
                <div className="my-2 bg-white rounded-2xl shadow-md border border-[#F5F5F5]">
                    <MenuRow icon={HelpCircle} label="Contact Support" href="/support" />
                    <MenuRow icon={FileText} label="Terms & Privacy" bordered={false} href="/terms" />
                </div>

            </div>
        </div>
    )
}

export default MenuItem
