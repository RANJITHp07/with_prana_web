import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Home, Download, BookOpen, Heart, User, Headphones, Mic, Smartphone } from "lucide-react"
import Header from "./_components/header"
import BottomNav from "@/components/bottomNav"

export default function Component() {
    return (
        <div className="min-h-screen  flex flex-col">
            <div className="bg-[#DDF3E5] p-4 rounded-b-[50px]">
                <div className="md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto w-full">
                    <Header />
                    {/* Main Content */}
                    <div className="flex-1 px-4  mt-1">
                        {/* Hero Section */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-[#1f5d57] mb-4 leading-tight font-sniglet-400">Unlock Your Premium Experience</h2>
                            <p className="text-[#484848] text-base leading-relaxed font-poppins-400">
                                Go deeper into calm, connection, and
                                <br />
                                clarity with full access.
                            </p>
                        </div>

                        <div className="mb-8 bg-white rounded-[20px] p-4 font-poppins-600 text-[14px]">
                            <h3 className="text-[#121212] font-semibold text-md  mb-4">What You Get</h3>
                            <div className="grid grid-cols-4 gap-4">
                                <div className=" flex gap-3   items-center">
                                    <Headphones className="w-5 h-5 text-[#1f5d57]" />
                                    <p className="text-[#1b1414]  leading-tight">
                                        Full Access to All

                                        Meditations
                                    </p>
                                </div>
                                <div className=" flex gap-3   items-center ">
                                    <Headphones className="w-5 h-5 text-[#1f5d57]" />
                                    <p className="text-[#1b1414]  leading-tight">
                                        Exclusive Sleep & Rest
                                        Audios
                                    </p>
                                </div>
                                <div className=" flex gap-3   items-center ">
                                    <Mic className="w-5 h-5 text-[#1f5d57]" />
                                    <p className="text-[#1b1414]  leading-tight">
                                        New Weekly Content
                                    </p>
                                </div>
                                <div className=" flex gap-3   items-center">
                                    <Smartphone className="w-5 h-5 text-[#1f5d57]" />
                                    <p className="text-[#1b1414]  leading-tight">
                                        Download & Listen Offline
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] mx-auto w-full mt-12 mb-6">

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Monthly Plan */}
                        <Card className="bg-[#fef9c4] border-2 border-[#ff780b] rounded-2xl overflow-hidden">
                            <CardContent className="p-6">
                                <div className="text-center mb-6">
                                    <h3 className="text-[#121212]  text-lg mb-4 font-poppins-600">Monthly Plan</h3>
                                    <div className="mb-2 font-sniglet-400">
                                        <span className="text-4xl text-[#ff780b] ">$4.79</span>
                                        <span className="text-[#484848] text-lg ml-1">/ month</span>
                                    </div>
                                    <p className="text-[#484848] text-sm font-poppins-400">Most flexible</p>
                                </div>
                                <Button className="w-full font-poppins-600 px-6 py-5 bg-[#ff780b] hover:bg-[#e6690a] text-white font-semibold  rounded-xl mb-4">
                                    Subscribe Monthly
                                </Button>
                                <p className="text-[#484848] font-poppins-400 text-xs text-center leading-relaxed">
                                    Cancel anytime. Billed via
                                    <br />
                                    your app store.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Yearly Plan */}
                        <Card className="bg-[#d8f6e0] border-2 border-[#04c03a] rounded-2xl overflow-hidden">
                            <CardContent className="p-6">
                                <div className="text-center mb-6">
                                    <h3 className="text-[#121212]  text-lg mb-4 font-poppins-600">Yearly Plan</h3>
                                    <div className="mb-2">
                                        <span className="text-4xl font-sniglet-400 text-[#04c03a]">$49.99</span>
                                        <span className="text-[#484848] text-lg ml-1">/ year</span>
                                    </div>
                                    <p className="text-[#484848] text-sm font-poppins-400">⭐ Best Value ⭐</p>
                                </div>
                                <Button className="w-full bg-[#04c03a] hover:bg-[#039933] p-5 font-poppins-600 text-white font-semibold py-3 rounded-xl mb-4">
                                    Go Yearly - Save 35%
                                </Button>
                                <p className="text-[#484848] text-xs text-center leading-relaxed font-poppins-400">
                                    Cancel anytime. Billed via
                                    <br />
                                    your app store.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <BottomNav activeTab="home" />
        </div >
    )
}
