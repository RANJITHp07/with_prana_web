import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

type QuestionCardProps = {
    title: string
    description: string
    buttonText?: string
    onButtonClick?: () => void
    image?: React.ReactNode
    className?: string
    skipOption?: boolean
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    title,
    description,
    buttonText = "Next",
    onButtonClick,
    image,
    className = "",
    skipOption = false
}) => {
    return (
        <Card className={`w-full lg:w-[350px] bg-[#DDF3E5] rounded-[30px] ${className}`}>
            <CardContent>
                <div className='w-[100px] h-[100px] my-2 border flex items-center justify-center'>
                    {image}
                </div>
                <div>
                    <p className='font-poppins-600 text-[#1F5D57] text-[24px]'>{title}</p>
                    <p className='font-poppins-400 text-[#1F5D57] text-[16px]'>{description}</p>
                </div>
                <Button
                    className='bg-[#1F5D57] w-full mt-4 p-5 font-poppins-600 text-[16px]'
                    onClick={onButtonClick}
                >
                    {buttonText} <MoveRight className='!w-6 !h-6' />
                </Button>
                {
                    skipOption &&
                    <p className='text-[#1F5D57] w-full mt-2 lg:mt-4 cursor-pointer text-center font-poppins-600 text-[16px]'>
                        <Link href="/home">Skip for now</Link>
                    </p>
                }
            </CardContent>
        </Card>
    )
}

export default QuestionCard
