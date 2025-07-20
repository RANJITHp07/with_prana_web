import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type QuestionOption = {
    text: string;
    emoji: string;
};

interface ReusableQuestionProps {
    greeting?: string;
    question: string;
    options: QuestionOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}

const Question: React.FC<ReusableQuestionProps> = ({
    greeting = "Hi there!",
    question,
    options,
    defaultValue,
    onChange,
}) => {
    return (
        <div>
            <p className="font-sniglet-400 text-[20px] text-[#484848] my-3">
                {greeting}
            </p>
            <div className="font-poppins-400 font-normal">
                <h1 className="text-[32px] leading-[38px] max-w-[400px] text-primary tracking-normal">
                    {question}
                </h1>
                <RadioGroup
                    defaultValue={defaultValue ?? options[0]?.text}
                    className="my-8 text-[#484848]"
                    onValueChange={onChange}
                >
                    {options.map(({ text, emoji }) => (
                        <div key={text} className="flex items-center space-x-2">
                            <RadioGroupItem value={text} id={text} />
                            <Label htmlFor={text} className="text-[16px]">
                                {emoji} {text}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>
        </div>
    );
};

export default Question;
