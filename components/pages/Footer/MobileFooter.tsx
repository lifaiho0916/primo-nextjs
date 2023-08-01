"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import BrandLogo from "../../../utils/SvgIcons/CommonSvg/BrandLogo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import GithubLogo from "@/utils/SvgIcons/CommonSvg/GithubLogo";
import TwitterLogo from "@/utils/SvgIcons/CommonSvg/TwitterLogo";
import DarkmodeLogo from "@/utils/SvgIcons/CommonSvg/DarkmodeLogo";
import LightmodeLogo from "@/utils/SvgIcons/CommonSvg/LightmodeLogo";
import SwitchLogo from "@/utils/SvgIcons/CommonSvg/SwitchLogo";
// import { MobileFooter } from "./MobileFooter";


const LINKS = [
  {
    title: "Product",
    items: ["Infrastructure", "Previews", "Edge Functions", "Analytics", "Next.js", "Turbo", "Enterprise", "CLI & API", "Changelog"],
  },
  {
    title: "Explore",
    items: ["Docs", "Pricing", "Customers", "Integrations", "Templates", "Resources", "Experts", "Guides", "Help", "⌘K",],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Careers", "Contact Us", "Next.js Conf", "Open Source", "Partners", "Security", "Privacy Policy", "Legal",],
  },
];

const currentYear = new Date().getFullYear();
export function MobileFooter() {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (index:any) => {
    setOpen(index === open ? null : index);
  };
 
  return (
    <>
       <div>
      <footer className="relative w-full bg-[#fafafa] pt-[20px] darkbackground">
        <div className="mx-auto w-full max-w-7xl ">
          <div className="footer_navigation">
            
            <div className="grid grid-cols-1 justify-between gap-4 ">
              {/* Loop through LINKS array and create accordions */}
              {LINKS.map(({ title, items }, index) => (
                <Accordion key={title} open={open === index} className="mr-28 ">
                  <AccordionHeader onClick={() => handleOpen(index)}>{title}</AccordionHeader>
                  <AccordionBody>
                    <ul>
                      {items.map((link, i) => (
                        <li key={i}>
                          <a href="#" className="py-1.5 font-normal transition-colors hover:text-blue-gray-900 text-sm">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}