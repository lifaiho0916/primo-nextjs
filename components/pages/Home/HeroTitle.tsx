"use client"

import * as React from 'react'
import "@/app/globals.css";
import "./HomeStyle.css"
import HeaderBar from '../Header/HeaderBar';
// import { Button } from '@material-tailwind/react';


import TrustedTeams from './TrustedTeams';
import ExploreVercel from './ExploreVercel';
import WorksFrameworks from './WorksFrameworks';
import IterateTeam from './IterateTeam';
import Counter from './Counter';
import VercelJourney from './VercelJourney';
import Globe from './Globe';
import DelightVisitor from './DelightVisitor';
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
            <div className='outer-hero container mx-auto pt-12 '>
                <div className='hero_tittle_section mx-auto px-5'>
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

                    <div className="outer_btns mt-12 flex justify-center gap-7">
                        <button className=" w-48 h-12 text-white font-medium bg-vi  rounded-lg text-lg  font-sans flex items-center justify-center gap-3 hover: bg-zinc-900 hover:bg-zinc-700 bg-black">
                            <svg aria-label="Vercel Logo" fill="currentColor" viewBox="0 0 75 65" height="15.6" width="18"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                            </svg>
                            Start Deploying
                        </button>
                        <button className={getDemoClass()} >Get a Demo
                        </button>

                    </div>
                </div>
               <TrustedTeams />
                <ExploreVercel />
              <WorksFrameworks />
                <IterateTeam />

            </div>
            <DelightVisitor />
           <Counter />



<VercelJourney />
            
        </>








    )
}

export default HeroTitle