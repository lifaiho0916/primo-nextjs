import DevelopIcon from "@/utils/SvgIcons/CommonSvg/DevelopIcon";
import Backened from "@/utils/SvgIcons/CommonSvg/Backened";
import Testing from "@/utils/SvgIcons/CommonSvg/Testing";
import JsxWindow from "@/utils/SvgIcons/CommonSvg/JsxWindow";
import Reverse from "@/utils/SvgIcons/CommonSvg/Reverse";
import Typewriter from "typewriter-effect";
import CodeTypewriter from "./CodeTypewriter";

const ExploreVercel = () => {
  return (
    <div className="build_inspiration">
      <div className="build_inspiration_heading">
        <span className="mb-8 lg:mb-12  leading-tight text-center text-xs tracking-[0.2rem] uppercase text-grey font-semibold flex justify-center">
          EXPLORE THE VERCEL WAY
        </span>
        <span className="w-px flex  bg-gradient-to-b from-[#fff] to-[#019ae9] h-28 text-center m-auto"></span>
        <span className="bg-gradient-to-r from-[#007cf0] to-[#00dfd8] w-10 h-10 rounded-full flex m-auto text-white items-center justify-center">
          1
        </span>
        <h4 className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#007cf0] to-[#00dfd8] text-4xl font-bold text-center pt-4">
          Develop
        </h4>
        <h2 className="font-bold text-black text-6xl text-center mb-6">
          Build when inspiration strikes
        </h2>
        <p className="text-center text-[#666]  text-[20px] w-[53%] font-normal m-auto mb-24">
          Free developers from time-consuming, unnecessary processes that slow
          your work, so you and your team can focus on creating.
        </p>
      </div>

      <div>
        <div className="develop_demo flex flex-wrap">
          <div className="div1 w-full sm:w-full md:w-full  lg:w-1/2 xl:w-1/2 mb-4 mx-auto">
            <div className="develop_demos_window relative sm:">
              <div className="code_editor w-9/12 relative">
                <div className="window_screen shadow-[0_8px_30px_rgba(0,0,0,.12)]  border-[#eaeaea] h-60  ">
                  <div className="window_top_bar flex items-center relative border-b-[1px] p-1.5 ">
                    <div className="window_traffic flex p-1 ">
                      <span className="bg-[#ff5f56] w-3 h-3 rounded-full"></span>
                      <span className="bg-[#ffbd2e] w-3 h-3 rounded-full ml-2"></span>
                      <span className="bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2"></span>
                    </div>

                    <div className="window_with_tabs ">
                      <span className="color-[#666] text-xs font-light p-2.5 border-r-[1px] border-l-[1px] absolute bottom-[-1px] bg-[#fff] ">
                        index.js
                      </span>
                    </div>
                  </div>
                <CodeTypewriter />
                </div>
                <div className="commerce_website shadow-[0_8px_30px_rgba(0,0,0,.12)]  border-[#eaeaea] bg-[#fff] w-full absolute left-[10%] top-40">
                  <div className="window_top_bar flex items-center border-b-2 p-1.5 ">
                    <div className="window_traffic flex p-1 ">
                      <span className="bg-[#ff5f56] w-3 h-3 rounded-full"></span>
                      <span className="bg-[#ffbd2e] w-3 h-3 rounded-full ml-2"></span>
                      <span className="bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2"></span>
                    </div>

                    <div className="window_with_tabs flex bg-[#fafafa] p-0.5 items-center gap-5 ml-16 px-6 ">
                      <span className="color-[#666] text-xs font-light">
                        localhost:3000
                      </span>
                      <span className=" ">
                        {" "}
                        <Reverse />
                      </span>
                    </div>
                  </div>

                  <div className="jsx_window_body p-6 ">
                    <JsxWindow />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div1 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mb-4">
            <div className=" develop_demo_benefits px-0">
              <div className="develop_demo_benefits_item mb-16">
                <div className="icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
                  <DevelopIcon />
                </div>
                <h5 className="text-black text-[22px] font-semibold mt-2">
                  The complete toolkit for the Web
                </h5>
                <p className="text-[#666] leading-7 font-normal text-[15px]">
                  <span>
                    Everything you need to build your site exactly how you
                    imagine, from automatic API handling to built-in image and
                    performance optimizations.
                  </span>
                </p>
              </div>

              <div className="develop_demo_benefits_item mb-16">
                <div className="icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
                  <Backened />
                </div>
                <h5 className="text-black text-[22px] font-semibold mt-2">
                  <span>Easy integration with your backend</span>
                </h5>
                <p className="text-[#666] leading-7 font-normal text-[15px]">
                  <span>
                    Connect your pages to any data source, headless CMS, or API
                    and make it work in everyone’s dev environment
                  </span>
                </p>
              </div>

              <div className="develop_demo_benefits_item mb-16">
                <div className="icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
                  <Testing />
                </div>
                <h5 className="text-black text-[22px] font-semibold mt-2">
                  <span>End-to-end testing on Localhost</span>
                </h5>
                <p className="text-[#666] leading-7 font-normal text-[15px]">
                  <span>
                    From caching to Serverless Functions, all our cloud
                    primitives work perfectly on localhost.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExploreVercel;
