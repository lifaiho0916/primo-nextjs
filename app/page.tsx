'use client'
import * as React from 'react'
import HeroTitle from '@/components/pages/Home/HeroTitle'
import "./globals.css";
import HeaderBar from '@/components/pages/Header/HeaderBar';
import FooterBar from '@/components/pages/Footer/FooterBar';
import { ThemeProvider } from 'next-themes'

const Home = () => {
  return (
    <>
    <HeaderBar />
    <ThemeProvider>
      <HeroTitle />
    <FooterBar />
    </ThemeProvider>
    </>
  );
}
export default Home;