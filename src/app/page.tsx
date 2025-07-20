import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#E5F2D6] to-[#FFFFFF] flex items-center justify-center">
      <div className="text-center flex flex-col items-center space-y-8 p-2">
        <Image src={"/icons/logo.png"} height={109} width={109} alt="logo" />
        <h1 className="text-[30px] md:text-[36px] font-sniglet-400 text-[#2B7272] leading-tight mt-4">
          Silence is not empty<br />
          It’s full of answers
        </h1>
        <p className="font-poppins-500 text-[18px]">- Rumi</p>
        <Link href="/personal-info">
          <Button
            className='bg-[#1F5D57] w-[115px] mt-4 md:mt-9 p-5 font-poppins-600 text-[16px]'
          >
            Begin  <MoveRight className='!w-6 !h-6' />
          </Button>
        </Link>
      </div>
    </div>
  );
}
