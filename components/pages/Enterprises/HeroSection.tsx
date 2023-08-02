import EbayLogo from "@/utils/SvgIcons/CommonSvg/EbayLogo";
import HarryLogo from "@/utils/SvgIcons/CommonSvg/HarryLogo";
import Netflix from "@/utils/SvgIcons/CommonSvg/Netflix";
import Vercel2 from "@/utils/SvgIcons/CommonSvg/Vercel2";
import VercelIcon from "@/utils/SvgIcons/CommonSvg/VercelIcon";
import Zapier from "@/utils/SvgIcons/CommonSvg/Zapier";

const EnterPriseHeroSection = () => {
  return (
    <div className="hero_section min-h-[800px] flex justify-center items-center relative max-h-[900px] overflow-hidden">
      <div className="giest_wrapper">


        
         <div className="hero_hero_outer grid grid-cols-[1.4fr_1fr] grid-rows-1 relative ">
          <div className="hero_Content mt-9 pointer-events-none relative h-100% grid gap-[72px]">
            <div className="hero_hero_content grid gap-6">
              <h1 className="hero_heading sm:text-[52px] xl:text-[64px] font-bold tracking-tighter text-[#232323] leading-[1.2] dark-white-color">
                The complete platform for building the Web
              </h1>
              <p className="hero_subject font-normal xl:text-[22px] leading-9 m-0  text-[#444] tracking-[-.01em] font-['Space_Grotesk']">
                Give your team the toolkit to stop configuring and start
                innovating. Securely build, deploy, and scale the best web
                experiences with Vercel.
              </p>
            </div>
            <div className="hero_hero_buttons flex gap-4 ">
              <a className="sales_link" href="#">
                <button
                  type="button"
                  className="text-white bg-black h-12 text-[16px] hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Contact Sales
                </button>
              </a>
              <a className="product_link" href="#">
                <button
                  type="button"
                  className="h-12 text-gray-900 text-[16px] bg-[#f1f1f1] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5   dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Tour the Product
                </button>
              </a>
            </div>
          </div>

          <div className="hero_visual_logo relative mt-16 ">
            <div className="logo_showcase_outer absolute grid grid-cols-3 grid-rows-3 gap-8 list-none">
            <div className="logo_showcase_gradient"></div>
                <li className=" logo_showcase flex items-center justify-center h-32">
                  
                  <div className="logo_showcase_img">
                    <EbayLogo />
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                    <HarryLogo />
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                    <Netflix />
                  </div>
                </li>
                <li className=" items-center justify-center">
                  <div className="logo_showcase">
                    <Zapier />
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/loom.svg" className="invertlogo"></img>
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/hashicorp.svg" className="invertlogo"></img>
                  </div>
                </li>
                <li className=" items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/under-armour.svg" className="invertlogo"></img>
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                    <Vercel2 />
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                  <img className="w-52 invertlogo" src="/assets/svg/washingtonpost.svg"></img>
                  </div>
                </li>
               
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/logo1.svg" className="invertlogo"></img>
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/scale_.svg" className="invertlogo"></img>
                  </div>
                </li>
                <li className="flex items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/okta.svg" className="invertlogo"></img>
                  </div>
                </li>
                <li className=" items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/patreon.svg" className="invertlogo"></img>
                  </div>
                </li>
                <li className=" items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/NZXT.svg" className="invertlogo"></img>
                  </div>
                </li>
                <li className=" items-center justify-center">
                  <div className="logo_showcase">
                  <img src="/assets/svg/meta.svg" className="invertlogo"></img>
                  </div>
                </li>

              
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};
export default EnterPriseHeroSection;
