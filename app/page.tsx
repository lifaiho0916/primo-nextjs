import * as React from 'react'
<<<<<<< HEAD
import Image from "next/image"
import Link from "next/link"
import HeroTitle from '@/components/pages/Home/HeroTitle'
import "./globals.css";
const Home = () => {
  return (
    <div className='flex justify-center items-center py-52'>
      <HeroTitle />
      
=======
import "../app/globals.css";
//Home Page
import HeroTitle from '@/components/pages/Home/HeroTitle'

const Home = () => {
  return (
    <div>
      <HeroTitle />
>>>>>>> e61ebe8d927c391c1c07258cd36e95c4975c56d9
    </div>
    
  );
}
export default Home;                                                      