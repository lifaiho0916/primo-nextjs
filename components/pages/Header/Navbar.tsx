'use client'
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Logo from "./HeaderSvgIcons/Logo";
 
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mx-3.5">
      <Typography
        as="li"
        variant="small"
        color="#666"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark-white-color">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="#666"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark-subtitle-color">
         Integrations
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="#666"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark-subtitle-color">
         Customers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="#666"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark-subtitle-color">
          Enterprise
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="#666"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center dark-subtitle-color">
          Pricing
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="#666"
        className="p-1 font-normal hidden contact_li"
      >
        <a href="#" className="flex items-center dark-subtitle-color">
        Contact
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <Navbar className=" darknav navbar mx-auto max-w-screen-xl py-4 px-5 lg:px-0 lg:py-4 shadow-none md:px-4 ">
      <div className="container text-blue-gray-900 px-0">
        <div className="navbar_links flex justify-between">
            <div className="logo_links flex items-center gap-2 invertlogo">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <Logo />
        </Typography>
        <div className="hidden lg:block">{navList}</div></div>
        <div className="header_buttons flex gap-2 items-center">
            <a href="#" className="contact_link text-[14px] text-[#666]">Contact</a>
        <Button  size="sm" className="hidden lg:inline-block border border-[#ddd] text-[#222] bg-white log_in_btn darkbuttons">
          <span>Log in</span>
        </Button>
        <Button  size="sm" className="hidden lg:inline-block bg-black text-white sign_up_btn">
          <span>Sign up</span>
        </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
        <div className="header_buttons flex gap-2 items-center mobile-view">
         
        <Button  size="sm" className=" lg:inline-block border border-[#ddd] text-[#222] bg-white log_in_btn darkbuttons">
          <span>Log in</span>
        </Button>
        <Button  size="sm" className=" lg:inline-block bg-black text-white sign_up_btn">
          <span>Sign up</span>
        </Button>
        </div>
          {navList}
      
        </div>
      </MobileNav>
      </div>
    </Navbar>
  );
}