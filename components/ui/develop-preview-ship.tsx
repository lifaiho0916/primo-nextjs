"use client"
import * as React from "react"
import "../../app/globals.css";
const Land = () => {
  return (
    <>
      <div className=" flex-row items-center justify-center h-screen text-center mt-44 ">
        <h1 className="leading-none text-8.5xl tracking-tighter font-extrabold font-sans">
          <span className="   ">
            Develop.
          </span>
          <span className="  ">
            Preview.
          </span>
          <span className="  ">
            Ship.
          </span>
        </h1>
        <h2 className="text-2xl flex-row mt-12 darkColor">
          <div className="py-2">Vercel's frontend cloud gives developers the frameworks, workflows,</div>
          <div>and infrastructure to build a faster, more personalized Web.</div>
        </h2>
        <div className="mt-12 flex justify-center">
          <button className=" w-48 h-12 text-white font-medium bg-black  rounded-lg text-lg  font-sans flex items-center justify-center gap-3">
            <svg aria-label="Vercel Logo" fill="currentColor" viewBox="0 0 75 65" height="15.600000000000001" width="18"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
            </svg>
            Start Deploying
          </button>
        </div>
        
      </div>
    </>
    
    
  );
}
export default Land;