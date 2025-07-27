import {
    Camera,
} from "lucide-react"
import Image from "next/image"
import Header from "./_components/header"
import MenuItem from "./_components/menuItem"
import BottomNav from "@/components/bottomNav"

export default function ProfilePage() {
    return (
        <div className="min-h-screen  flex flex-col ">
            <div className="relative  p-4  h-[300px] bg-[#2B7272] rounded-b-[50px]">
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white/30 to-transparent pointer-events-none"></div>

                <div className="md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto w-full">
                    <Image
                        src="/icons/spiritual.png"
                        height={442}
                        width={442}
                        alt="spiritual"
                        className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
                    />

                    <Header />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2  flex flex-col items-center  mt-6 ">
                        <div className="relative">
                            <div className="w-[150px] h-[150px] rounded-[25px] overflow-hidden border-5 border-[#F5F5F5] shadow-lg">
                                <Image
                                    src="/icons/audio.jpg"
                                    alt="Teresa profile"
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#1f5d57] rounded-md p-1 border-2 border-white">
                                <Camera className="h-5 w-4 text-white" />
                            </div>
                        </div>
                        <h2 className="text-[#484848] text-2xl font-sniglet-400 mt-8 text-[24px] ">Teresa</h2>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full flex-grow px-6 py-10">
                <MenuItem />
            </div>
            <BottomNav activeTab="profile" />
        </div >
    )
}
