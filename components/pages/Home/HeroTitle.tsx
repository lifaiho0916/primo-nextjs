"use client"

import * as React from 'react'

const HeroTitle = () => {
    //     flex-wrap: wrap;
    const [colors, setColors] = React.useState([
        'bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-transparent bg-clip-text', 
        'bg-gradient-to-r from-[#7928ca] to-[#ff0080] text-transparent bg-clip-text', 
        'bg-gradient-to-r from-[#ff4d4d] to-[#f9cb28] text-transparent bg-clip-text'
    ])
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index + 1) % colors.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [colors.length])

    const getButtonClass = (i: number) => {
        if(index === i)
            return `transition duration-2000 ${colors[i]}`
        // else if ((index - 1) % colors.length === i) return `transition duration-1500 ${colors[i]}`
        else 
            return 'transition duration-2000'
    }

    return (
        <h1 className="flex justify-center text-center text-[112px] font-extrabold">
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
    )
}

export default HeroTitle