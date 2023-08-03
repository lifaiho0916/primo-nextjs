"use client"
import * as React from 'react';
import Image from 'next/image';
import { MdHeadphones, MdShuffle, MdOutlineCode } from "react-icons/md";
import "../globals.css";
import '../../components/pages/Enterprises/Enterprise.css'
import "@fontsource/space-grotesk";
import { Badge } from "@/components/ui/badge";
import EnterPriseHeroSection from '@/components/pages/Enterprises/HeroSection';
import EnterpriseTestimonial from '@/components/pages/Enterprises/Testimonial';
import EnterpriseIteration from '@/components/pages/Enterprises/Iteration';
import EnterpriseTourSection from '@/components/pages/Enterprises/TourSection';
import EnterpriseTrafficSpikes from '@/components/pages/Enterprises/TrafficeSpikes';

 
const data = [
    {
        icon: (
            <div className="px-4">
                <MdHeadphones size={48} className="bg-[#eeeeee] px-2" />
            </div>
        ),
        heading: "Fast support, 24/7",
        content1:
            "Get everything you need to keep your site running, with 24/7 ",
        content2:
            "support, 99.99% uptime SLA, and end-to-end monitoring.",
        },
  
    {
        icon: (
            <div className="px-4">
                <MdShuffle size={48} className="bg-[#eeeeee] px-2" />
            </div>
        ),
        heading: "Work with the Next.js team",
        content1:
            "Learn best practices for scaling Next.js from the team",
        content2: "that built it. As the creators of Next.js, no company is ",
        content3: "more integrated with both Next.js and react than Vercel.",
    },
    {
        icon: (
            <div className="px-4">
                <MdOutlineCode size={48} className="bg-[#eeeeee] px-2" />
            </div>
        ),
        heading: "Planning to migrate to Next.js?",
        content1:
            "Migrate your frontend stack with confidence, including code ",
        content2:
            "audits and partnerships with leading headless providers."
    },
];
const Enterprise = () => {
    return (
        <>

<EnterPriseHeroSection/>
<EnterpriseTestimonial/>
<EnterpriseIteration />
<EnterpriseTourSection/>
<EnterpriseTrafficSpikes/>



        <div className='support_section geist_wrapper'>
          <div className="support_section_outer flex flex-col">
            <Badge className='mt-3'>Support</Badge>
            <div className="text-[50px] font-bold tracking-[-.04em] pt-4 support_section_heading">
                We build the tools. You build the rest.
            </div>
            <span className=" text-[20px] font-sans pt-10 break-words text-center text-gray-700 tracking-[.06em] font-normal support_section_descripition">
                Ensure your project is fast now and in the future with
                unparalleled access to the 
                <br/> 
                developers behind your 
                favorite tools and guidance from our in-house experts.
            </span>
            <div className="next_js_img grid grid-cols-[1.4fr_1fr] pt-[5rem] gap-16">
                <div className="flex flex-col">
                    {data.map((item, i) => (
                        <div className="flex mb-20 font-sans" key={i}>
                            <div>{item.icon}</div>
                            <div>
                                <p className="pb-4 text-[24px] font-[580px] tracking-[-.01em] text-gray-800 ">
                                    <b>{item.heading}</b>
                                </p>
                                <p className="text-gray-500 text-lg">
                                    {item.content1?item.content1:''} <br/> {item.content2?item.content2:''}<br/>
                                    {item.content3?item.content3:''}
                                    
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className=" w-auto flex flex-col drop-shadow flex-1 items-center rounded-[4px] border-[1px]">
                    <div className="flex-1"></div>
                    <Image
                        className="relative mb-6"
                        src="/next-js.svg"
                        alt="Next.js Logo"
                        width={80}
                        height={80}
                        priority
                    />
                    <b className="text-[64px]">Next.js</b>
                    <p className="mb-20 font-gros font-normal text-lg text-gray-800 ">By Vercel</p>
                    <button className=" flex items-center rounded-[10px] px-5 py-4 border h-12 border-{#eaeaea} bg-gradient-to-b from-gray-100 to-gray-300">
                        Learn more
                    </button>
                    <div className="flex-1"></div>
                </div>
            </div>
          </div>
          </div>
        </>
    );
}
export default Enterprise;
