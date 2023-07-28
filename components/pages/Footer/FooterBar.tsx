"use client";

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
import { MobileFooter } from "./MobileFooter";
import { useTheme } from 'next-themes'

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

export default function FooterBar() {
  const showDropdownForLink = "Legal";
  const { theme, setTheme } = useTheme()
  const handleThemeChange = (selectedTheme:string) => {
    setTheme(selectedTheme);
    console.log(selectedTheme)
  };

  return (
    <footer className="relative w-full bg-[#fafafa] border-t-[1px]  border-[#eaeaea] pt-20 darkbackground border_class">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex">
          <div className=" w-full sm:w-full md:w-full lg:w-3/12 xl:w-[30%] about_footer">
            <BrandLogo />
            <div className="status_code pt-7 flex items-center ">
              <p className="text-sm text-sm font-normal pt-0.5 pb-0.5">Status:</p>
              <span className="w-2.5 h-2.5 bg-[#0070f3] rounded-3xl m-1 mt-0.5 mb-0.5"></span>
              <span className="text-[#0070f3] text-sm pt-0.5 pb-0.5">All Systems normal.</span>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4 outer_footer_links">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="mr-28 ml-2 darktext">
                <Typography
                  variant="small"
                  color="black darktext"
                  className="mb-3 font-medium  text-[#171717] text-sm"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900 text-sm"
                    >
                      {link}
                    </Typography>
                    {link === showDropdownForLink && (
                      <>
                        <Select >
                          <SelectTrigger className="w-[180px] border-0 p-0 focus:border-0 text-[#666] text-sm shadow-none ">
                            <SelectValue placeholder="Legal" />
                          </SelectTrigger>
                          <SelectContent >
                            <SelectItem value="Privacy Policy">Privacy Policy</SelectItem>
                            <SelectItem value="Terms of Services">Terms of Services</SelectItem>
                            <SelectItem value="Trademark Policy">Trademark Policy</SelectItem>
                            <SelectItem value="Inactivity Policy">Inactivity Policy</SelectItem>
                            <SelectItem value="DMCA Policy">DMCA Policy</SelectItem>
                            <SelectItem value="Support Terms">Support Terms</SelectItem>
                            <SelectItem value="DPA">DPA</SelectItem>
                            <SelectItem value="SLA">SLA</SelectItem>
                            <SelectItem value="Sub-processors">Sub-processors</SelectItem>
                            <SelectItem value="Cookie Preferences">Cookie Preferences</SelectItem>
                            <SelectItem value="Events Terms and Conditions">Events Terms and Conditions</SelectItem>
                            <SelectItem value="Event Code of Conduct">Event Code of Conduct</SelectItem>
                            <SelectItem value="Job Applicant Privacy Notice">Job Applicant Privacy Notice</SelectItem>
                          </SelectContent>
                        </Select>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div>
        <div className="mobile_footer hidden">
          <MobileFooter />
        </div>
          <Typography
            variant="small"
            className="mb-4 text-left font-normal text-blue-gray-900 md:mb-0 text-[#666] copyright"
          >
            &copy; {currentYear} Vercel Inc.
          </Typography>

          <div className=" flex w-full flex-col items-center justify-center   border-blue-gray-50 py-4 md:flex-row md:justify-between items-center gap-[20px] p-0">

            <div className="flex items-center gap-4">
              <div>
                <GithubLogo />
              </div>
              <div className="border-l-[1px] pl-4">
                <TwitterLogo />
              </div>
            </div>

            <div className="flex gap-2 text-blue-gray-900 sm:justify-center items-center border-2 p-2 rounded-3xl border-[#00000014] border_class">

            <div className="pl-2" onClick={() => handleThemeChange('dark')}>
              <DarkmodeLogo />
            </div>
            <div className="pl-2" onClick={() => handleThemeChange('light')}>
              <LightmodeLogo />
            </div>
            <div className="pl-2 flex items-center" onClick={() => handleThemeChange('system')}>
              <SwitchLogo />
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}