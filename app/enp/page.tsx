import React from 'react';
import "@fontsource/space-grotesk";

const Page = () => {

    return (
        <>
            <div className=' grid grid-cols-2'>
                <span className=' grid-cols-1'>
                    <h1>
                        <span className=' text-[64px]/[4.5rem] tracking-[-0.04em] font-sans font-bold'>
                            The complete platform 
                             <br/>
                            for building the Web 
                        </span>
                    </h1>    
                    <p className=' font-gros text-2xl/9 mt-7 '>
                    Give your team the toolkit to stop configuring and start <br/>
                    innovating. Securely build, deploy, and scale the best web <br/>
                    experiences with Vercel.
                    </p>  
                    <span className='flex gap-3 mt-16'>
                        <button className=' bg-black text-white w-36 h-12 rounded-lg text-lg'>
                            Contact Sales
                        </button>
                        <button className='bg-slate-300 hover:bg-slate-400 text-black w-40 h-12 rounded-lg text-lg'>
                            Tour the product
                        </button>
                    </span>          
                </span>
                <span className='grid-cols-1'>
                    hello
                </span>
            
            </div>
        </>


    );

}

export default Page;