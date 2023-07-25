"use client"

import * as React from 'react'
import "@/app/globals.css";
import "./HomeStyle.css"
import HeaderBar from '../Header/HeaderBar';
import DevelopIcon from '@/utils/SvgIcons/CommonSvg/DevelopIcon';
import Backened from '@/utils/SvgIcons/CommonSvg/Backened';
import Testing from '@/utils/SvgIcons/CommonSvg/Testing';
import NextJs from '@/utils/SvgIcons/CommonSvg/NextJs';
import Reverse from '@/utils/SvgIcons/CommonSvg/Reverse';
import JsxWindow from '@/utils/SvgIcons/CommonSvg/JsxWindow';
import ReactLogo from '@/utils/SvgIcons/CommonSvg/ReactLogo';
import Svelete from '@/utils/SvgIcons/CommonSvg/Svelete';
import NuxtJs from '@/utils/SvgIcons/CommonSvg/NuxtJs';
import VueJs from '@/utils/SvgIcons/CommonSvg/VueJs';
import EmberLogo from '@/utils/SvgIcons/CommonSvg/EmberLogo';
import Angular from '@/utils/SvgIcons/CommonSvg/Angular';
import HugoLogo from '@/utils/SvgIcons/CommonSvg/HugoLogo';
import GatsbyLogo from '@/utils/SvgIcons/CommonSvg/GatsbyLogo';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
// import { Button } from '@material-tailwind/react';
import { Button } from '@/components/ui/button';
import RocketIcon from '@/utils/SvgIcons/CommonSvg/RocketIcon';
import VercelIcon from '@/utils/SvgIcons/CommonSvg/VercelIcon';
import PushIcon from '@/utils/SvgIcons/CommonSvg/PushIcon';
import Branch from '@/utils/SvgIcons/CommonSvg/Branch';
import CollabrateIcon from '@/utils/SvgIcons/CommonSvg/CollabrateIcon';
import CloneVitee from '@/utils/SvgIcons/CommonSvg/clonevitee';
import CloneNuxt from '@/utils/SvgIcons/CommonSvg/clonenuxt';
import ClonesVelet from '@/utils/SvgIcons/CommonSvg/clonesvelet';
import CloneNext from '@/utils/SvgIcons/CommonSvg/CloneNext';
import MessageTail from '@/utils/SvgIcons/CommonSvg/MessageTail';
import BrowserLock from '@/utils/SvgIcons/CommonSvg/BrowserLock';
import GlobeIcon from '@/utils/SvgIcons/CommonSvg/GlobeIcon';
import Monitoring from '@/utils/SvgIcons/CommonSvg/Monitoring';
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
        <>
            <div className='outer-hero container mx-auto pt-10 '>
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
                        <span className="mb-8 lg:mb-12  leading-tight text-center text-xs tracking-[0.2rem] uppercase text-grey font-semibold flex justify-center">
                            EXPLORE THE VERCEL WAY</span>
                        <span className='w-px flex  bg-gradient-to-b from-[#fff] to-[#019ae9] h-28 text-center m-auto'></span>
                        <span className='bg-gradient-to-r from-[#007cf0] to-[#00dfd8] w-10 h-10 rounded-full flex m-auto text-white items-center justify-center'>1</span>
                        <h4 className='mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-4xl font-bold text-center pt-4'>Develop</h4>
                        <h2 className='font-bold text-black text-6xl text-center mb-6'>
                            Build when inspiration strikes
                        </h2>
                        <p className='text-center text-[#666] text-center text-[20px] w-[53%] font-normal m-auto mb-24'>
                            Free developers from time-consuming, unnecessary processes that slow your work, so you and your team can focus on creating.
                        </p>
                    </div>

                    <div>
                        <div className='develop_demo flex '>
                            <div className='develop_demos_window w-3/6 relative'>
                                <div className='code_editor w-9/12 relative'>
                                    <div className='window_screen shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  border-[#eaeaea] h-60  '>
                                        <div className='window_top_bar flex items-center relative border-b-[1px] p-1.5 ' >
                                            <div className='window_traffic flex p-1 '>
                                                <span className='bg-[#ff5f56] w-3 h-3 rounded-full'></span>
                                                <span className='bg-[#ffbd2e] w-3 h-3 rounded-full ml-2'></span>
                                                <span className='bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2'></span>
                                            </div>

                                            <div className='window_with_tabs '>
                                                <span className='color-[#666] text-xs font-light p-2.5 border-r-[1px] border-l-[1px] absolute bottom-[-1px] bg-[#fff] '>index.js</span>
                                            </div>
                                        </div>

                                        <div className='window_body flex items-baseline pt-0.5 px-1 '>
                                            <div className='editor_lines_bg bg-[#fafafa] color-[#999] w-4 p-1'>
                                                <div className='text-sm/-[15px] color-[#999]'>1</div>
                                                <div className='text-sm/-[15px] color-[#999]'>2</div>
                                                <div className='text-sm/-[15px] color-[#999]'>3</div>
                                                <div className='text-sm/-[15px] color-[#999]'>4</div>
                                                <div className='text-sm/-[15px] color-[#999]'>5</div>
                                            </div>
                                            <div className='editor_editor_main pl-1'>
                                                <p>expert default function</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='commerce_website shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  border-[#eaeaea] bg-[#fff] w-full absolute left-[10%] top-40'>
                                        <div className='window_top_bar flex items-center border-b-2 p-1.5 ' >
                                            <div className='window_traffic flex p-1 '>
                                                <span className='bg-[#ff5f56] w-3 h-3 rounded-full'></span>
                                                <span className='bg-[#ffbd2e] w-3 h-3 rounded-full ml-2'></span>
                                                <span className='bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2'></span>
                                            </div>

                                            <div className='window_with_tabs flex bg-[#fafafa] p-0.5 items-center gap-5 ml-16 px-6 '>
                                                <span className='color-[#666] text-xs font-light'>localhost:3000</span>
                                                <span className=' '> <Reverse /></span>
                                            </div>
                                        </div>

                                        <div className='jsx_window_body p-6 '>
                                            < JsxWindow />
                                        </div>


                                    </div>


                                </div>
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
                </div>

                <div>
                    <div className='works_frameworks mb-16'>
                        <h2 className="mb-6  lg:mb-6 text-3xl font-extrabold  leading-tight text-center  text-xs tracking-[0.2rem] font-light uppercase text-grey font-semibold ">
                            WORKS WITH 30+ FRAMEWORKS</h2>
                        <div className='logos_framework flex items-center justify-center'>

                            <TooltipProvider>
                                <Tooltip>
                                    <div className='next_logo m-3'>
                                        <TooltipTrigger asChild>
                                            <Button variant='outline'>< NextJs /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Next.js</p>
                                        </TooltipContent>
                                    </div>
                                </Tooltip>
                                <Tooltip>
                                    <div className='react_logo m-3'>

                                        <TooltipTrigger asChild>
                                            <Button variant='outline'> <ReactLogo /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Create React App</p>
                                        </TooltipContent>
                                    </div>

                                </Tooltip>
                                <Tooltip>
                                    <div className='svelete_logo m-3'>
                                        <TooltipTrigger asChild>
                                            <Button variant='outline'> < Svelete /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Svelete</p>
                                        </TooltipContent>
                                    </div>
                                </Tooltip>
                                <Tooltip>
                                    <div className='nuxt_logo m-3'>
                                        <TooltipTrigger asChild>
                                            <Button variant='outline'>   < NuxtJs /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Nuxt.js</p>
                                        </TooltipContent>
                                    </div>
                                </Tooltip>
                                <Tooltip>
                                    <div className='vuejs_logo m-3'>
                                        <TooltipTrigger asChild>
                                            <Button variant='outline'>< VueJs /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Vue.js</p>
                                        </TooltipContent>
                                    </div>
                                </Tooltip>
                                <Tooltip>
                                    <div className='ember_logo m-3'>
                                        <TooltipTrigger asChild>
                                            <Button variant='outline'>< EmberLogo /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Ember.js</p>
                                        </TooltipContent>
                                    </div>
                                </Tooltip>
                                <Tooltip>
                                    <div className='angular_logo m-3'>
                                        <TooltipTrigger asChild>
                                            <Button variant='outline'>< Angular /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Angular</p>
                                        </TooltipContent>
                                    </div>
                                </Tooltip>
                                <Tooltip>
                                    <div className='hugo_logo m-3'>
                                        <TooltipTrigger asChild>
                                            <Button variant='outline'>< HugoLogo /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Hugo</p>
                                        </TooltipContent>
                                    </div>
                                </Tooltip>
                                <Tooltip>
                                    <div className='gatsby_logo m-3'>
                                        <TooltipTrigger asChild>
                                            <Button variant='outline'>< GatsbyLogo /></Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Gatsby</p>
                                        </TooltipContent>
                                    </div>
                                </Tooltip>
                            </TooltipProvider>
                            {/* </div> */}


                        </div>
                    </div>
                </div>


                <div className='build_inspiration'>
                    <div className='build_inspiration_heading'>
                        <span className='w-px flex  bg-gradient-to-b from-[#fff] to-[#9a1fb8] h-28 text-center m-auto'></span>
                        <span className='bg-gradient-to-r from-[#7928ca] to-[#ff0080] w-10 h-10 rounded-full flex m-auto text-white items-center justify-center'>2</span>
                        <h4 className='mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#7928ca] to-[#ff0080] text-4xl font-bold text-center pt-4'>Preview</h4>
                        <h2 className='font-bold text-black text-6xl text-center mb-6'>
                            Iterate with your team
                        </h2>
                        <p className='text-center text-[#666] text-center text-[20px] w-[53%] font-normal m-auto mb-24'>
                            Make frontend development a collaborative experience with automatic Preview Deployments for every code change, by seamlessly integrating with <span className='text-[#de1d8d]'> GitHub</span>,<span className='text-[#de1d8d]'> GitLab</span>, and<span className='text-[#de1d8d]'> Bitbucket.</span>
                        </p>
                    </div>

                    <div>
                        <div className='develop_demo flex '>
                            <div className='develop_demos_window w-[47%] mr-11 relative'>
                                <div className='code_editor  relative'>
                                    <div className='window_screen shadow-xl border-[#eaeaea] h-44  '>
                                        <div className='window_top_bar flex items-center relative border-b-[1px] p-1.5 ' >
                                            <div className='window_traffic flex p-1 '>
                                                <span className='bg-[#ff5f56] w-3 h-3 rounded-full'></span>
                                                <span className='bg-[#ffbd2e] w-3 h-3 rounded-full ml-2'></span>
                                                <span className='bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2'></span>
                                            </div>

                                            <div className='window_with_tabs '>
                                                <span className='color-[#666] text-xs font-light p-2.5 border-r-[1px] border-l-[1px] absolute bottom-[0px] bg-[#fff] '>bash</span>
                                            </div>
                                        </div>

                                        <div className='window_body flex items-baseline pt-0.5 px-1 '>

                                            <div className='editor_editor_main pl-1 flex'>
                                                <p className='text-[#666]'>▲ ~ e-commerce-site/ <span className='text-black pl-0.5'>git push</span></p>
                                                <span className='Previews_push_cursor bg-[#ff0080] w-2.5 h-5 ml-0.5 translate-y-1.5'></span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='previus_push_comment'>
                                        <hr className='w-0.5 h-5 bg-[#eaeaea] ml-4 mt-1 mb-1'></hr>
                                        <div className='stack_stack flex items-center'>
                                            <div className='rocket_icon bg-[#eaeaea] w-8 h-8 rounded-full flex justify-center items-center'>
                                                < RocketIcon />
                                            </div>
                                            <div className='vercel_icon w-6 h-6 bg-black flex items-center justify-center rounded-md ml-1.5 mr-1'>
                                                < VercelIcon />
                                            </div>
                                            <p className='text-[#666] text-[13px]'><span className='text-black text-sm pl-0.5 ml-0.5'>verce</span> <span className="border-[#666] border  text-xs font-medium px-2.5 py-0.5 rounded-2xl :hover border-[#222]">bot</span> deployed to <span className='font-medium'>Preview</span> just now</p>
                                        </div>
                                    </div>

                                    <div className='outer_preview_content relative'>
                                        <div className='preview_content_text  relative shadow-[0_0_33px_0px_rgba(0,0,0,0.3)] border-[#eaeaea] pt-0 p-2.5 mt-20 pl-0 pr-0 pb-6 rounded-md' >
                                            <div className='preview_comment_header pt-2 pl-4  pb-2 bg-[#f6f8fa] pl-2'>
                                                <p className='text-[12px]'><span><b>vercel</b> <span className="border-[#666] border  text-xs font-medium px-2.5 py-0.5 rounded-2xl :hover border-[#222]">bot</span></span>commented 3 minutes ago</p>
                                            </div>
                                            <p className='text-sm/[12px] m-4'><b>The latest updates on your project.</b> Learn more about <span className='text-[#0969da]'> Vercel for Git</span> </p>
                                            <table className="preview-comment_comment-table__3eKmg border-1 pl-2.5 w-[78%] ml-4 ">
                                                <thead>
                                                    <tr className=' border-[#ddd] border-[1px]'>
                                                        <th className=' border-[#ddd] border-[1px] text-xs font-medium p-1.5' scope="col"><b>Name</b></th>
                                                        <th className=' border-[#ddd] border-[1px] text-xs font-medium p-1.5' scope="col"><b>Status</b></th>
                                                        <th className=' border-[#ddd] border-[1px] text-xs font-medium p-1.5' scope="col"><b>Preview</b></th>
                                                        <th className=' border-[#ddd] border-[1px] text-xs font-medium p-1.5' scope="col"><b>Updated</b></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className=' border-[#ddd] border-[1px]'>
                                                        <th className=' border-[#ddd] border-[1px] text-xs font-medium p-1.5' scope="row"><b>store</b></th>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5' >✅ Ready (<span className="preview-comment_comment-link__VefXX">Inspect</span>)</td>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5' ><span className="preview-comment_comment-link__VefXX">Visit Preview</span></td>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5' >Oct 25, 2022 at 12:37 PM</td>
                                                    </tr>
                                                    <tr className=' border-[#ddd] border-[1px]'>
                                                        <th className=' border-[#ddd] border-[1px] text-xs font-medium p-1.5' scope="row"><b>site</b></th>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5'>🔄 Building (<span className="preview-comment_comment-link__VefXX">Inspect</span>)</td>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5'></td>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5' >Oct 25, 2022 at 12:39 PM</td>
                                                    </tr>
                                                    <tr className=' border-[#ddd] border-[1px]'>
                                                        <th className=' border-[#ddd] border-[1px] text-xs font-medium p-1.5' scope="row"><b>admin</b></th>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5' >✅ Ready (<span className="preview-comment_comment-link__VefXX">Inspect</span>)</td>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5'><span className="preview-comment_comment-link__VefXX">Visit Preview</span></td>
                                                        <td className=' border-[#ddd] border-[1px] text-xs font-normal p-1.5'>Oct 25, 2022 at 12:41 PM</td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className='outer_preview_message grid grid-cols-9 gap-0 mt-[-13px] items-end'>
                                            <div className='preview_messages_content px- w-[94%] col-span-8  text-white mb-3 ml-[30px] '>
                                                <div className="message-blue-box relative">
                                                    <p className='font-medium rounded-2xl py-2 px-4  bg-gradient-to-r from-blue-300 to-blue-500 mb-5'>
                                                        Here’s my deploy preview for the page update: https://site-git-commerce.ver cel.app</p>
                                                    <div className='previous_message_tail'>
                                                        < MessageTail />
                                                    </div>
                                                </div>
                                                <p className='text-[13px] text-black text-right'>Rauno —<span className='text-[#666]'> Design Engineering Team</span></p>
                                            </div>
                                            <div className='preview_comment_name flex items-center justify-end col-span-1'>
                                                <img className='ml-3' src='https://vercel.com/_next/image?url=%2Fstatic%2Fhome%2Favatar-rauno.png&w=48&q=100&dpl=dpl_HDoqfPVmxXxTpdKfeV1sLsy7enfg'></img>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='graphic_review mt-20'>
                                        <div className='window_top_bar flex items-center border-b-2 p-1.5 ' >
                                            <div className='window_traffic flex p-1 '>
                                                <span className='bg-[#ff5f56] w-3 h-3 rounded-full'></span>
                                                <span className='bg-[#ffbd2e] w-3 h-3 rounded-full ml-2'></span>
                                                <span className='bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2'></span>
                                            </div>

                                            <div className='window_with_tabs flex bg-[#fafafa] p-0.5 items-center gap-2.5 ml-16 px-6 '>
                                                <span className='browser_lock_icon'> < BrowserLock /> </span>
                                                <span className='color-[#666] text-xs font-light'> site-git-commerce.vercel.app</span>
                                                <span className=' '> <Reverse /></span>
                                            </div>
                                        </div>
                                        <div className='graphic_image'>
                                            <img src="https://vercel.com/_next/image?url=%2Fstatic%2Fhome%2Fui-reviews-light.png&w=640&q=100&dpl=dpl_HDoqfPVmxXxTpdKfeV1sLsy7enfg"></img>
                                            <img className="m-auto mt-[-70px]" src='https://vercel.com/_next/image?url=%2Fstatic%2Fhome%2Fui-toolbar.png&w=384&q=100&dpl=dpl_HDoqfPVmxXxTpdKfeV1sLsy7enfg'></img>
                                        </div>
                                        <div className='outer_preview_message grid grid-cols-9 gap-0 mt-[-13px] items-end'>
                                            <div className='preview_messages_content px- w-[94%] col-span-8  text-white mb-3 ml-[30px] '>

                                                <p className='text-[13px] text-black text-right'>Greta —<span className='text-[#666]'>Product Marketing Team </span></p>
                                            </div>
                                            <div className='preview_comment_name flex items-center justify-end col-span-1'>
                                                <img className='ml-3' src='https://vercel.com/_next/image?url=%2Fstatic%2Fhome%2Favatar-greta.png&w=48&q=100&dpl=dpl_HDoqfPVmxXxTpdKfeV1sLsy7enfg'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className='outer_div_lines'>
                                <div className='div_gradient w-px flex  bg-gradient-to-b from-[#fff] to-[#666] h-28  m-auto '></div>
                                <div className='div_circle border-2 rounded-full w-2 h-2 border-[#666] '></div>
                                <div className='div_center_lines border border-dashed h-72 border-[#666] w-px m-auto'></div>
                                <div className='div_circle border-2 rounded-full w-2 h-2 border-[#666] '></div>
                                <div className='div_center_lines border border-dashed h-72 border-[#666] w-px m-auto'></div>
                                <div className='div_circle border-2 rounded-full w-2 h-2 border-[#666] '></div>
                                <div className='w-px flex  bg-gradient-to-b from-[#999] to-[#f9cb28] h-3/6 text-center m-auto'></div>
                            </div>

                            <div className='w-3/6 develop_demo_benefits px-8'>
                                <div className='develop_demo_benefits_item pb-80 pt-12'>
                                    <div className='icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center'>
                                        <PushIcon />
                                    </div>
                                    <h5 className='text-black text-[22px] font-semibold mt-2'>
                                        Push to deploy
                                    </h5>
                                    <p className='text-[#666] leading-7 font-normal text-[15px]'>
                                        Every deploy automatically generates a shareable live preview site that stays up-to-date with your changes.
                                    </p>
                                </div>


                                <div className='develop_demo_benefits_item pb-80'>
                                    <div className='icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center'>
                                        < Branch />
                                    </div>
                                    <h5 className='text-black text-[22px] font-semibold mt-2'>
                                        Automatic Previews for every branch
                                    </h5>
                                    <p className='text-[#666] leading-7 font-normal text-[15px]'>
                                        Each new branch receives a live, production-like URL that everyone on your team can visit.
                                    </p>
                                </div>

                                <div className='develop_demo_benefits_item pb-80'>
                                    <div className='icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center'>
                                        <CollabrateIcon />
                                    </div>
                                    <h5 className='text-black text-[22px] font-semibold mt-2'>
                                        Collaborative reviews on UI
                                    </h5>
                                    <p className='text-[#666] leading-7 font-normal text-[15px] mb-7'>
                                        Comment directly on components, layouts, copy, and more in real context and real time, integrated seamlessly with GitHub and Slack.
                                    </p>
                                    <a className='text-[#666] text-[14px] border border-[#ccc] rounded-3xl p-1.5 bg-[#fafafa] hover:border-[#222] '> <span className="bg-[#fc6d26] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-2xl :hover border-[#222]">New</span>Commenting on Preview Deployments is now available →</a>

                                </div>





                            </div>





                        </div>
                    </div>
                    <div className='ship_section_heading mb-20'>

                        <span className='bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] w-10 h-10 rounded-full flex m-auto text-white items-center justify-center'>3</span>
                        <h4 className='mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] text-4xl font-bold text-center pt-4'>Ship</h4>
                        <h2 className='font-bold text-black text-6xl text-center mb-6'>
                            Delight every visitor
                        </h2>

                    </div>

                    <div className='outer_delight_visitor_section grid mb-20'>
                        <div className='section_content w-[53%]'>
                            <div className='ship_section_heading grid'>
                                <h5 className='text-[22px] font-semibold mb-3'>Speed is critical to customers — and SEO</h5>
                                <p className='text-xl font-normal mb-3'>Next.js and Vercel work together to deliver the best performance for your end users, while maintaining best-in-class SEO practices.</p>
                                <p className='text-base font-light'>Built on cutting-edge serverless technology, Vercel can <br />withstand any traffic spike, with automatic failover and global <br />replication of assets.</p>
                            </div>

                            <div className='ship_section_item mt-9'>
                                <div className='icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center'>
                                    <GlobeIcon />
                                </div>
                                <h5 className='text-black text-[22px] font-semibold mt-2'>
                                    Global Edge Network
                                </h5>
                                <p className='text-[#666] leading-7 font-normal text-[15px]'>
                                    Your site, fast everywhere. Deploy content around the world and update it in 300ms.
                                </p>
                            </div>

                            <div className='ship_section_item mt-9 mb-9'>
                                <div className='icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center'>
                                    <Monitoring />
                                </div>
                                <h5 className='text-black text-[22px] font-semibold mt-2'>
                                First-party monitoring and observability
                                </h5>
                                <p className='text-[#666] leading-7 font-normal text-[15px]'>
                                Analyze logs, understand traffic and usage, and easily optimize your applications, without extra tooling or code.
                                </p>
                            </div>

                            <a className='text-[#666] text-[14px] border border-[#ccc] rounded-3xl p-1.5 bg-[#fafafa] hover:border-[#222] '> <span className="bg-[#fc6d26] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-2xl :hover border-[#222]">New</span>Monitoring is now available for Pro and Enterprise customers →</a>



                        </div>
                    </div>

                </div>







            </div>



            <div className='counter_section bg-[#fafafa] border-t-[1px] border-[#eaeaea] py-6'>
                <div className='container'>
                    <div className="flex">
                        <div className='counter_content text-center grow border-r-[1px] border-[#eaeaea] px-8'><h4 className='text-6xl font-bold text-black tracking-tighter pb-2'>90</h4><p className='text-sm tracking-widest text-grey font-semibold uppercase'>CITES</p></div>
                        <div className='counter_content text-center grow border-r-[1px] border-[#eaeaea] px-8'><h4 className='text-6xl font-bold text-black tracking-tighter pb-2'>41B+</h4><p className='text-sm tracking-widest text-grey font-semibold uppercase'>Requests Per Week</p></div>
                        <div className='counter_content text-center grow border-r-[1px] border-[#eaeaea] px-8'><h4 className='text-6xl font-bold text-black tracking-tighter pb-2'>10PB</h4><p className='text-sm tracking-widest text-grey font-semibold uppercase'>Data Served</p></div>
                        <div className='counter_content text-center grow px-8'><h4 className='text-6xl font-bold text-black tracking-tighter pb-2'>99.99%</h4><p className='text-sm tracking-widest text-grey font-semibold uppercase'>Guaranteed Uptime</p></div>
                    </div>
                </div>
            </div>

            <div className='begin_your_journey py-24'>
                <div className='container'>
                    <div className='get_started_title'>
                        <h6 className='text-center uppercase text-xs tracking-[0.2rem] text-grey font-bold my-12'>Begin Your Vercel Journey</h6>
                    </div>
                    <div className='get_started_wrapper flex justify-center gap-x-12'>
                        <div className='Import_Git_Repository w-5/12 border-[1px] border-[#eaeaea] shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-s-md     p-8'><h5 className='text-2xl tracking-[-0.02rem] text-[#171717] mb-4 font-semibold'>Import Git Repository</h5>
                            <div className='Import_content border-[1px] border-[#eaeaea] text-center bg-[#fafafa] rounded-md p-12'><p className='text-sm text-[#444] font-normal my-4'>Select a Git provider to import an existing project from a Git Repository.</p>
                                <div className='get_started_button_information px-2.5 mb-8 flex flex-col gap-y-1'>
                                    <button className='github_btn bg-[#24292e] py-2 rounded-md'>
                                        <span className='button_icon'>

                                        </span>
                                        <span className='button_content text-sm text-[#fff]'>Continue with GitHub</span>
                                    </button>

                                    <button className='gitlab_btn bg-[#6b4fbb] py-2 rounded-md'>
                                        <span className='button_icon'>

                                        </span>
                                        <span className='button_content text-sm text-[#fff]'>Continue with GitLab</span>
                                    </button>

                                    <button className='bitbucket_btn bg-[#0052CC] py-2 rounded-md'>
                                        <span className='button_icon'>

                                        </span>
                                        <span className='button_content text-sm text-[#fff]'>Bitbucket</span>
                                    </button>
                                </div>
                            </div>
                            <div className="Import_link mt-6">
                                <a href="#" className='text-sm text-[#444444]'>Import Third-Party Git Repository →</a>

                            </div>
                        </div>
                        <div className='clone_template w-5/12 border-[1px] border-[#eaeaea] rounded-md  p-8'><h5 className='text-2xl tracking-[-0.02rem] text-[#171717] font-semibold'>Clone Template</h5>
                            <p className='clone_content text-sm text-[#666] font-normal leading-relaxed mt-2 mb-3'>Alternatively, get started with a template</p>
                            <div className='clone_framework_cards grid grid-cols-2'>

                                <div className='framework_inner_card p-2'>
                                    <a className='shadow-[0_5px_10px_rgba(0,0,0,0.12)] block rounded-[5px]'>
                                        <img src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1673027027%2Ffront%2Fimport%2Fnextjs.png&w=1920&q=75&dpl=dpl_DPTJaywTzXZVoJSTMEDpgaG93rts"></img>

                                        {/* loneNextjs */}


                                        <div className='content_cards_logo flex p-3 gap-x-2 align-middle'>
                                            <span className='logo_card'>
                                                <CloneNext />
                                            </span>
                                            <span className='text-sm font-semibold tracking-[-0.005]'>

                                                Next.js</span>

                                        </div>
                                    </a>

                                </div>

                                <div className='framework_inner_card p-2'>
                                    <a className='shadow-[0_5px_10px_rgba(0,0,0,0.12)] block rounded-[5px]'>
                                        <img src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fsveltekit.png&w=1920&q=75&dpl=dpl_DPTJaywTzXZVoJSTMEDpgaG93rts"></img>

                                        {/* Clonesveletkitjs*/}
                                        <div className='content_cards_logo flex p-3  gap-x-2 align-middle'>
                                            <span className='logo_card'>

                                                <ClonesVelet />
                                            </span>
                                            <span className='text-sm font-semibold tracking-[-0.005]'>SvelteKit</span>

                                        </div>
                                    </a>

                                </div>
                                <div className='framework_inner_card p-2'>
                                    <a className='shadow-[0_5px_10px_rgba(0,0,0,0.12)] block rounded-[5px]'>
                                        <img src="https://vercel.com/_next/image?url=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1647366075%2Ffront%2Fimport%2Fnuxtjs.png&w=1920&q=75&dpl=dpl_DPTJaywTzXZVoJSTMEDpgaG93rts"></img>

                                        {/* Clonenuxtjs*/}
                                        <div className='content_cards_ logo flex p-3 gap-x-2 align-middle'>
                                            <span className='logo_card'>

                                                <CloneNuxt />
                                            </span>
                                            <span className='text-sm font-semibold tracking-[-0.005]'>Nuxt.js</span>

                                        </div>
                                    </a>

                                </div>

                                <div className='framework_inner_card p-2 gap-x-2 align-middle'>
                                    <a className='shadow-[0_5px_10px_rgba(0,0,0,0.12)] block rounded-[5px]'>
                                        <img src="https://vercel.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F2T4BUF3mEBKPJF3jcjU6nS%2F0d4a02e7c48091d13814a4ab513e8734%2FScreen_Shot_2022-04-13_at_10.05.56_PM.png&w=1920&q=75&dpl=dpl_DPTJaywTzXZVoJSTMEDpgaG93rts" className='h-32'></img>
                                        {/* Clonevitejs*/}
                                        <div className='content_cards_logo flex p-3  gap-x-2 align-middle'>
                                            <span className='logo_card'>
                                                <CloneVitee />
                                            </span>
                                            <span className='text-sm font-semibold tracking-[-0.005]'>Vite</span>

                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="clone_link mt-6">
                                <a href="#" className='text-sm text-[#444444]'>Browse All Templates →</a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>








    )
}

export default HeroTitle