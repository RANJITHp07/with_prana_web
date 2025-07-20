'use client'
import React, { useState } from 'react'
import Question from "./_components/question"
import QuestionCard from './_components/questionCard'
import { steps } from '@/lib/constants'
import { ChevronRight } from 'lucide-react'
import EmailForm from './_components/email-form'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Introduction() {
    const router = useRouter()
    const [step, setStep] = useState(0)

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(prev => prev + 1)
        } else {
            router.replace("/home")
        }
    }

    const currentStep = steps[step]
    return (
        <div className="h-screen bg-mint-to-white flex items-center justify-center">
            <div className=" p-4 md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] w-full flex flex-col">
                {/* Center Content */}
                <div className="w-full lg:flex justify-between items-center">
                    {
                        step == 2 ?
                            <EmailForm />
                            :
                            < Question
                                greeting={currentStep.greeting}
                                question={currentStep?.question!}
                                options={currentStep?.options!}
                            />
                    }
                    <QuestionCard
                        title={currentStep.card.title}
                        description={currentStep.card.description}
                        buttonText={step === 2 ? "Start Free Trial" : "Next"}
                        onButtonClick={handleNext}
                        skipOption={step === 2}
                        image={<Image src={currentStep.card.image} height={100} width={100} alt="icon" />}
                    />
                </div>

                {/* Skip Section */}
                {
                    step == 0 &&
                    <div className="flex justify-end mt-12 gap-3 cursor-pointer" onClick={() => setStep(2)}>
                        <p className="font-poppins-600 text-[#1F5D57]">Skip</p>
                        <ChevronRight className="h-6 w-6 text-[#1F5D57]" />
                    </div>
                }

            </div>
        </div>
    )
}

export default Introduction
