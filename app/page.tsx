import * as React from 'react'
import HeroTitle from '@/components/pages/Home/HeroTitle'
import "./globals.css";
import HeaderBar from '@/components/pages/Header/HeaderBar';
import FooterBar from '@/components/pages/Footer/FooterBar';

const Home = () => {
  return (
    <>
    <HeaderBar />
      <div className='flex justify-center items-center'>
      <HeroTitle />
    </div>
    <FooterBar />
    </>
  );
}
export default Home;                                                      