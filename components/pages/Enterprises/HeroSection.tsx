import Adobe from "@/utils/SvgIcons/CommonSvg/Adobe";
import EbayLogo from "@/utils/SvgIcons/CommonSvg/EbayLogo";
import HarryLogo from "@/utils/SvgIcons/CommonSvg/HarryLogo";
import HashicropIcon from "@/utils/SvgIcons/CommonSvg/HashicropIcon";
import Loom from "@/utils/SvgIcons/CommonSvg/Loom";
import Netflix from "@/utils/SvgIcons/CommonSvg/Netflix";
import RightArrow from "@/utils/SvgIcons/CommonSvg/RightArrow";
import ScaleIcon from "@/utils/SvgIcons/CommonSvg/ScaleIcon";
import UnderArmour from "@/utils/SvgIcons/CommonSvg/UnderArmour";
import Vercel2 from "@/utils/SvgIcons/CommonSvg/Vercel2";
import VercelIcon from "@/utils/SvgIcons/CommonSvg/VercelIcon";
import WashingtonIcon from "@/utils/SvgIcons/CommonSvg/WashingtonIcon";
import Zapier from "@/utils/SvgIcons/CommonSvg/Zapier";
import { Scale } from "lucide-react";

const EnterPriseHeroSection = () => {
  return (
    <section className="heroSection relative min-h-[800px] flex justify-center items-center ">
    <div className="geist-wrapper max-w-[1235px] m-auto py-[24px]">
        <div className="hero_section grid px-[24px]">
            <div className="hero_section_left relative z-[9] lg:pt-[150px] drop-shadow-[0_0_50px_rgba(255,255,255,1)] dark_workflow_deployment">
                <h1 className="text-[64px] font-bold   bg-clip-text text-transparent inline leading-[78px] dark-white-color">The complete platform for building the Web</h1>
                <p className="hero_subtext mt-[24px] text-[22px] font-normal leading-[36px] font-['Space_Grotesk']">Give your team the toolkit to stop configuring and start innovating.
                    Securely build, deploy, and scale the best web experiences with Vercel.</p>
                <div className="hero_sec_buttons flex gap-[16px] mt-[80px]">
                    <button type="submit" className="contact_sale bg-[#171717] px-[34px] py-[14px] text-white text-[16px] border border-[rgba(0, 0, 0, .1)] font-medium cursor-pointer rounded-[8px] hover:bg-[#413f3f]">Contact Sales</button>
                    <button type="submit" className="tour_product bg-[#171717] px-[34px] py-[14px] text-white text-[16px] border border-[rgba(0, 0, 0, .1)] font-medium cursor-pointer rounded-[8px]">Tour the Product</button>
                </div>
            </div>
            <div className="hero_section_right overflow-hidden">

                <div className="hero_section_images absolute right-[3px] top-[120px]">
                    <ul className="list-none grid grid-cols-3 gap-[16px] p-0">
                        <div className="logo_showcase_gradient absolute z-[5] w-full h-full dark_dark_background_color"></div>
                        <li className="logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg border border-[#fafafa]">
                            <div className="logo-showcase-card w-[115px]">
                              <EbayLogo/>
                            </div>
                        </li>
                        <li className=" logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card w-[204px]">
                            <HarryLogo/>
                            </div>
                        </li>
                        <li className="logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card">
                           <Netflix/>
                            </div>
                        </li>
                        <li className="logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card w-[144px]">
                            <Zapier />
                            </div>
                        </li>
                        <li className=" logo-sowcase logo_feature_card h-[126px] w-[254px] flex items-center justify-center rounded-lg shadow-[0_12px_20px_4px_rgba(0,0,0,.05)] border border-[#a5a5a5] bg-white relative z-[99]">
                              <div className="logo_showcase_animation"></div>
                            <div>
                                <a href=""  className="mt-[10px] block text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-69%]">
                                    <div className="logo-showcase-card w-[152px]">
                                   <Loom/>
                                    </div>
                                </a>
                                <div className="read_customer_story flex justify-center items-center gap-[10px] mt-[60px] opacity-0">
                                    <h6 className="text-[16px] font-medium m-0 text-[#666] font-['Space_Grotesk']">Read customer story</h6>
                                    <RightArrow/>
                                </div>
                            </div>
                        </li>
                        <li className=" logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card w-[186x]">
                            <HashicropIcon/>
                            </div>
                        </li>
                        <li className=" logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card w-[93px]">
                            <UnderArmour/>
                            </div>
                        </li>
                        <li className=" logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card w-[30%]">
                             <Vercel2/>
                            </div>
                        </li>
                        <li className="logo-sowcase logo_feature_card h-[126px] w-[254px] flex items-center justify-center rounded-lg  shadow-[0_12px_20px_4px_rgba(0,0,0,.05)] border border-[#a5a5a5] bg-white relative z-[99]">
                        <div className="logo_showcase_animation"></div>
                            <div>
                                <a href="" className="mt-[10px] block text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-69%]">
                                    <div className="logo-showcase-card w-[206px]">
                                    <WashingtonIcon/>
                                    </div>
                                </a>
                                <div className="read_customer_story flex justify-center items-center gap-[10px] mt-[60px] opacity-0">
                                    <h6 className="text-[16px] font-medium m-0 text-[#666] font-['Space_Grotesk']">Read customer story</h6>
                                    <RightArrow/>
                                </div>
                            </div>
                        </li>
                        <li className="logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card ">
                            <Adobe/>
                            </div>
                        </li>
                        <li className="logo-sowcase logo_feature_card h-[126px] w-[254px] flex items-center justify-center rounded-lg  shadow-[0_12px_20px_4px_rgba(0,0,0,.05)] border border-[#a5a5a5] bg-white relative z-[99]">
                        <div className="logo_showcase_animation"></div>
                            <div>
                                <a href=""  className="mt-[10px] block text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-69%]">
                                    <div className="logo-showcase-card">
                                  <ScaleIcon/>
                                    </div>
                                </a>
                                <div className="read_customer_story flex justify-center items-center gap-[10px] mt-[60px] opacity-0 ">
                                    <h6 className="text-[16px] font-medium m-0 text-[#666] font-['Space_Grotesk']">Read customer story</h6>
                                    <RightArrow/>
                                </div>
                            </div>
                        </li>
                        <li className="logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card">
                            <img src="/assets/svg/okta.svg" className="invertlogo w-[112px]" />
                            </div>
                        </li>
                        <li className="logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card">
                            <img src="/assets/svg/patreon.svg" className="invertlogo" />
                            </div>
                        </li>
                        <li className="logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card">
                            <img src="/assets/svg/NZXT.svg" className="invertlogo" />
                            </div>
                        </li>
                        <li className="logo-sowcase h-[126px] w-[254px] flex items-center justify-center rounded-lg  border border-[#fafafa]">
                            <div className="logo-showcase-card">
                            <img src="/assets/svg/meta.svg" className="invertlogo" />
                            </div>
                        </li>
                    </ul>
                    </div>
            </div>
        </div>
    </div>
</section>
  );
};
export default EnterPriseHeroSection;
