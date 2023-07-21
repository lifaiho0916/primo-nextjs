"use client"

import * as React from 'react'
import "@/app/globals.css";
import "./HomeStyle.css"
import HeaderBar from '../Header/HeaderBar';
import DevelopIcon from '@/utils/SvgIcons/CommonSvg/DevelopIcon';
import Backened from '@/utils/SvgIcons/CommonSvg/Backened';
import Testing from '@/utils/SvgIcons/CommonSvg/Testing';
import NextJs from '@/utils/SvgIcons/CommonSvg/NextJs';

const HeroTitle = () => {
    //     flex-wrap: wrap;
    const [colors, setColors] = React.useState([
        'bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-transparent bg-clip-text',
        'bg-gradient-to-r from-[#7928ca] to-[#ff0080] text-transparent bg-clip-text',
        'bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] text-transparent bg-clip-text'
    ]);
    const [demoColors, setDemoColor] = React.useState([
        'bg-gradient-to-tl from-[#007cf0] to-[#00dfd8] bg-clip-border',
        'bg-gradient-to-tl from-[#7928ca] to-[#ff0080] bg-clip-border',
        'bg-gradient-to-tl from-[#ff4d4d] to-[#f9cb28] bg-clip-border'
    ])
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index + 1) % colors.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [colors.length])

    const getButtonClass = (i: number) => {
        if (index === i)
            return `transition duration-2000 ${colors[i]}`
        // else if ((index - 1) % colors.length === i) return `transition duration-1500 ${colors[i]}`
        else
            return 'transition duration-2000 '
    }

    const getDemoClass = () => {
        if (index === 0)
            return `w-48 h-12 text-black hover:text-white border  font-medium  rounded-lg text-lg  font-sans flex items-center justify-center gap-3  transition duration-2000 ${demoColors[0]}`;
        // return `w-48 h-12 text-black hover:text-white border font-medium rounded-lg text-lg font-sans flex items-center justify-center gap-3 transition duration-2000 bg-white`;

        // else if ((index - 1) % colors.length === i) return `transition duration-1500 ${colors[i]}`
        else if (index === 1)
            return `w-48 h-12 text-black hover:text-white border  font-medium  rounded-lg text-lg  font-sans flex items-center justify-center gap-3  transition duration-2000 ${demoColors[1]} bg-white`;
        // return `w-48 h-12 text-black hover:text-white border  font-medium  rounded-lg text-lg  font-sans flex items-center justify-center gap-3  transition duration-2000  bg-white`;
        else return `w-48 h-12 text-black hover:text-white border  font-medium  rounded-lg text-lg  font-sans flex items-center justify-center gap-3  transition duration-2000 ${demoColors[2]}`;
        // else return `w-48 h-12 text-black hover:text-white border  font-medium  rounded-lg text-lg  font-sans flex items-center justify-center gap-3  transition duration-2000  bg-white hover` ;
    }



    return (
        <div className='outer-hero container mx-auto '>
            <div className=' mx-auto px-5'>
                <h1 className="flex justify-center text-center text-[7rem] font-extrabold scale-90">
                    <span className={getButtonClass(0)}>
                        Develop.
                    </span>
                    <span className={getButtonClass(1)}>
                        Preview.
                    </span>
                    <span className={getButtonClass(2)}>
                        Ship.
                    </span>
                </h1>

                <h2 className="text-2xl flex-row  darkColor">
                    <div className="py-2 flex justify-center text-center hero_description">Vercel's frontend cloud gives developers the frameworks, workflows,<br /> and infrastructure to build a faster, more personalized Web.</div>

                </h2>

                <div className="mt-12 flex justify-center gap-7">
                    <button className=" w-48 h-12 text-white font-medium bg-vi  rounded-lg text-lg  font-sans flex items-center justify-center gap-3 hover: bg-zinc-900 hover:bg-zinc-700 bg-black">
                        <svg aria-label="Vercel Logo" fill="currentColor" viewBox="0 0 75 65" height="15.6" width="18"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                        </svg>
                        Start Deploying
                    </button>
                    <button className={getDemoClass()} >Get a Demo
                    </button>

                </div>
            </div>

            <div className=' mx-32 trusted_partners'>
                <section className="bg-white dark:bg-gray-900 items-center">
                    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                        <h2 className="mb-8  lg:mb-16 text-3xl font-extrabold  leading-tight text-center  text-xs tracking-[0.2rem] font-light uppercase text-grey font-semibold ">
                            Trusted by the best frontend teams</h2>
                        <div className="grid grid-cols-5 gap-8 text-gray-500 sm:gap-12  dark:text-gray-400">
                            <a href="#" className="flex justify-center items-center">
                                <img src="/assets/svg/logo1.svg"></img>
                            </a>
                            <a href="#" className="flex justify-center items-center">
                                <img src="/assets/svg/okta.svg"></img>
                            </a>
                            <a href="#" className="flex justify-center items-center">
                                <img src="/assets/svg/under-armour.svg"></img>
                            </a>

                            <a href="#" className="flex justify-center items-center">
                                <img src="/assets/svg/ebay.svg"></img>
                            </a>
                            <a href="#" className="flex justify-center items-center">
                                <img className='w-24' src="/assets/svg/zapier.svg"></img>
                            </a>

                        </div>

                        <div className="grid grid-cols-4 gap-8 text-gray-500 sm:gap-12  dark:text-gray-400 mt-6">
                            <a href="#" className="flex  items-center">
                                <img src="/assets/svg/loom.svg"></img>
                            </a>
                            <a href="#" className="flex  items-center">
                                <img src="/assets/svg/hashicorp.svg"></img>
                            </a>
                            <a href="#" className="flex items-center">
                                <img src="/assets/svg/tailwindcss_logo.svg"></img>
                            </a>

                            <a href="#" className="flex  items-center">
                                <img className='w-52' src="/assets/svg/washingtonpost.svg"></img>
                            </a>

                        </div>

                    </div>
                </section>
            </div>

            <div className='build_inspiration'>
                <div className='build_inspiration_heading'>
                <h2 className="mb-8  lg:mb-16 text-3xl font-extrabold  leading-tight text-center  text-xs tracking-[0.2rem] font-light uppercase text-grey font-semibold ">
                EXPLORE THE VERCEL WAY</h2>
                    <span className='w-px flex  bg-gradient-to-b from-[#fff] to-[#019ae9] h-28 text-center m-auto'></span>
                    <span className='bg-gradient-to-r from-[#007cf0] to-[#00dfd8] w-10 h-10 rounded-full flex m-auto text-white items-center justify-center'>1</span>
                    <h3 className='mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-4xl font-bold text-center pt-4'>Develop</h3>
                    <h4 className='font-bold text-black text-6xl text-center mb-6'>
                        <span>Build when inspiration strikes</span>
                    </h4>
                    <p className='text-center text-[#666] text-center text-[20px] w-[53%] font-normal m-auto mb-24'>
                        <span>Free developers from time-consuming, unnecessary processes that slow your work, so you and your team can focus on creating.</span>
                    </p>
                </div>

                <div>
                    <div className='develop_demo flex '>
                        <div className='develop_demos_window w-3/6'>
                        <img src="/assets/svg/hashicorp.svg"></img>
                        </div>

                        <div className='w-3/6 develop_demo_benefits px-16'>
                            <div className='develop_demo_benefits_item mb-16'>
                                <div className='icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center'>
                                    <DevelopIcon />
                                </div>
                                <h5 className='text-black text-[22px] font-semibold mt-2'>
                                    <span>The complete toolkit for the Web</span>
                                </h5>
                                <p className='text-[#666] leading-7 font-normal text-[15px]'>
                                    <span>Everything you need to build your site exactly how you imagine, from automatic API handling to built-in image and performance optimizations.</span>
                                </p>
                            </div>

                            <div className='develop_demo_benefits_item mb-16'>
                                <div className='icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center'>
                                    <Backened />
                                </div>
                                <h5 className='text-black text-[22px] font-semibold mt-2'>
                                    <span>Easy integration with your backend</span>
                                </h5>
                                <p className='text-[#666] leading-7 font-normal text-[15px]'>
                                    <span>Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment</span>
                                </p>
                            </div>

                            <div className='develop_demo_benefits_item mb-16'>
                                <div className='icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center'>
                                    <Testing />
                                </div>
                                <h5 className='text-black text-[22px] font-semibold mt-2'>
                                    <span>End-to-end testing on Localhost</span>
                                </h5>
                                <p className='text-[#666] leading-7 font-normal text-[15px]'>
                                    <span>From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.</span>
                                </p>
                            </div>


                        </div>

                    </div>
                </div>

                <div>
                   <div className='works_frameworks'>
                   <h2 className="mb-8  lg:mb-16 text-3xl font-extrabold  leading-tight text-center  text-xs tracking-[0.2rem] font-light uppercase text-grey font-semibold ">
                EXPLORE THE VERCEL WAY</h2>
                 <div className='logos_fraamework'>
                    <div className='next_logo'>
                        < NextJs />
                    </div>
                 </div>
                   </div>
                </div>






            </div>

        </div>


    )
}

export default HeroTitle