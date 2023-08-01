'use client'
import React, { ReactNode } from 'react';
import FooterBar from './pages/Footer/FooterBar';
import HeaderBar from './pages/Header/HeaderBar';
import { ThemeProvider } from 'next-themes';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <ThemeProvider>
      <HeaderBar />
      <div>{children}</div>
      <FooterBar />
      </ThemeProvider>
    </>
  );
};

export default Layout;