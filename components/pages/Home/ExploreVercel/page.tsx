import DevelopIcon from "@/utils/SvgIcons/CommonSvg/DevelopIcon";
import Backened from "@/utils/SvgIcons/CommonSvg/Backened";
import Testing from "@/utils/SvgIcons/CommonSvg/Testing";
import JsxWindow from "@/utils/SvgIcons/CommonSvg/JsxWindow";
import Reverse from "@/utils/SvgIcons/CommonSvg/Reverse";
import Typewriter from "typewriter-effect";
import CodeTypewriter from "../CodeTypewriter";
import Heading from "./Heading";

const page = () => {
  return (
    <div className="build_inspiration">
      <Heading />

      <div>
        <div className="develop_demo flex flex-wrap">
          <div className="div1 w-full sm:w-full md:w-full  lg:w-1/2 xl:w-1/2 mb-4 mx-auto">
            <div className="develop_demos_window relative sm:">
              <div className="code_editor w-9/12 relative">
                <div className="window_screen shadow-[0_8px_30px_rgba(0,0,0,.12)]  border-[#eaeaea] h-60  svgtransparent">
                  <div className="window_top_bar flex items-center relative border-b-[1px] p-1.5 ">
                    <div className="window_traffic flex p-1 ">
                      <span className="bg-[#ff5f56] w-3 h-3 rounded-full"></span>
                      <span className="bg-[#ffbd2e] w-3 h-3 rounded-full ml-2"></span>
                      <span className="bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2"></span>
                    </div>

                    <div className="window_with_tabs ">
                      <span className="indexdark color-[#666] text-xs font-light p-2.5 border-r-[1px] border-l-[1px] absolute bottom-[-1px] bg-[#fff] ">
                        index.js
                      </span>
                    </div>
                  </div>
                  <CodeTypewriter />
                </div>
                <div className="svgtransparent commerce_website shadow-[0_8px_30px_rgba(0,0,0,.12)]  border-[#eaeaea] bg-[#fff] w-full absolute left-[10%] top-40">
                  <div className="window_top_bar flex items-center border-b-2 p-1.5 ">
                    <div className="window_traffic flex p-1 ">
                      <span className="bg-[#ff5f56] w-3 h-3 rounded-full"></span>
                      <span className="bg-[#ffbd2e] w-3 h-3 rounded-full ml-2"></span>
                      <span className="bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2"></span>
                    </div>

                    <div className="window_with_tabs flex bg-[#fafafa] p-0.5 items-center gap-5 ml-16 px-6 darkbackground">
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
                <div className="svgtransparent icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
                  <DevelopIcon />
                </div>
                <h5 className="text-black text-[22px] font-semibold mt-2 dark-text-color">
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
                <div className="svgtransparent icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
                  <Backened />
                </div>
                <h5 className="text-black text-[22px] font-semibold mt-2 dark-text-color">
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
                <div className="svgtransparent icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
                  <Testing />
                </div>
                <h5 className="text-black text-[22px] font-semibold mt-2 dark-text-color">
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
export default page;
