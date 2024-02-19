import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { BellDot, Search, Heart, User, ChevronDown } from 'lucide-react'

import Image from 'next/image'
import Link from "next/link"
import React from 'react'

const Header = () => {
    return (
        <>
            <div className="p-4 bg-white flex justify-between px-10">
                <Image src="/vercel.svg" alt="logo" width={170} height={80} />
                {/* Search bar */}
                <div className="flex gap-2 border p-2 rounded-md ">
                    <Search className="h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search Cars eg. Honda Elevate..."
                        className="outline-none min-w-[400px]" />
                </div>
                {/* Get Started Button & bell Icon */}
                <div className='flex items-center gap-4'>
                    <DropdownMenu className="mr-3">
                        <DropdownMenuTrigger className="underline">English</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>English</DropdownMenuLabel>
                            <DropdownMenuItem>Hindi</DropdownMenuItem>
                            <DropdownMenuItem>Odia</DropdownMenuItem>
                            <DropdownMenuItem>Bengoli</DropdownMenuItem>
                            <DropdownMenuItem>Marathi</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Heart className='text-gray-500' />

                    <div className="flex  ">
                        <User />
                        <div className="flex ml-2 ">
                            <Link href="#">
                                Login
                            </Link>
                            <p>/</p>
                            <Link href="#">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="p-4 bg-white flex gap-10 px-10">
                <HoverCard>
                    <HoverCardTrigger className="flex gap-2">NEW CARS <ChevronDown /></HoverCardTrigger>
                    <HoverCardContent>
                       <p> Explore New Cars</p>
                        <hr className="my-2"/>
                        <p> Upcoming Cars</p>
                         <hr className="my-2"/>
                        <p> New Cars</p>
                         <hr className="my-2"/>
                        <p> Electric Cars</p>
                         <hr className="my-2"/>
                         <p> Explore New Cars</p>
                        <hr className="my-2"/>
                        <p> Upcoming Cars</p>
                         <hr className="my-2"/>
                        <p> New Cars</p>
                         <hr className="my-2"/>
                        <p> Electric Cars</p>
                         <hr className="my-2"/>
                         <p> Explore New Cars</p>
                        <hr className="my-2"/>
                        <p> Upcoming Cars</p>
                         <hr className="my-2"/>
                        <p> New Cars</p>
                         <hr className="my-2"/>
                        <p> Electric Cars</p>
                         <hr className="my-2"/>
                         <p> Explore New Cars</p>
                        <hr className="my-2"/>
                        <p> Upcoming Cars</p>
                         <hr className="my-2"/>
                        <p> New Cars</p>
                         <hr className="my-2"/>
                        <p> Electric Cars</p>
                         <hr className="my-2"/>
                    </HoverCardContent>
                    
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className="flex gap-2">BUY & SELL USED CARS <ChevronDown /></HoverCardTrigger>
                    <HoverCardContent>
                       <p> Cars In Your City</p>
                        <hr className="my-2"/>
                        <p>Sell Cars in your city</p>
                         <hr className="my-2"/>
                        <p> Buy Used Cars</p>
                         <hr className="my-2"/>
                        <p> Sell Cars</p>
                         <hr className="my-2"/>
                         <p>Used Car Valuation</p>
                        <hr className="my-2"/>
                        <p> Upcoming Cars</p>
                         <hr className="my-2"/>
                        <p> New Cars</p>
                         <hr className="my-2"/>
                        <p> Electric Cars</p>
                         <hr className="my-2"/>
                         <p> Explore New Cars</p>
                        <hr className="my-2"/>
                        <p> Upcoming Cars</p>
                         <hr className="my-2"/>
                        <p> New Cars</p>
                         <hr className="my-2"/>
                        <p> Electric Cars</p>
                         <hr className="my-2"/>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className="flex gap-2">NEWS, REVIEWS & VIDEOS<ChevronDown /></HoverCardTrigger>
                    <HoverCardContent>
                       <p> News And Top Stories</p>
                        <hr className="my-2"/>
                        <p>Car Expert Reviews</p>
                         <hr className="my-2"/>
                        <p> Visual Riviews</p>
                         <hr className="my-2"/>
                        <p> Vedio Stories</p>
                         <hr className="my-2"/>
                         <p>User Reviews</p>
                        <hr className="my-2"/>
                        <p> Car Collections</p>
                         <hr className="my-2"/>
                        <p> Tips & Advice</p>
                         <hr className="my-2"/>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className="flex gap-2">CAR SERVICES<ChevronDown /></HoverCardTrigger>
                    <HoverCardContent>
                       <p> Challan Checks</p>
                        <hr className="my-2"/>
                        <p>Car Service History</p>
                         <hr className="my-2"/>
                        <p> RTO Record Info</p>
                         <hr className="my-2"/>
                        <p>View All Services</p>
                         <hr className="my-2"/>
                    </HoverCardContent>
                </HoverCard>

            </div>
        </>
    )
}

export default Header