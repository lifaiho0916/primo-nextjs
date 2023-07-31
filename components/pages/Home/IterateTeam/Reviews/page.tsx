import BrowserLock from "@/utils/SvgIcons/CommonSvg/BrowserLock";
import Reverse from "@/utils/SvgIcons/CommonSvg/Reverse";

const page = () => {
  return (
    <div className="preview-item_wrapper flex">
      <div className="graphic_review mt-20 w-full sm:w-full md:w-full lg:w-1/2 xl:w-[45%] relative mr-1.5 ">
        <div className="shadow-[0_0_33px_0px_rgba(0,0,0,0.3)] relative">
          <div className="window_top_bar flex items-center border-b-2 p-1.5 ">
            <div className="window_traffic flex p-1 ">
              <span className="bg-[#ff5f56] w-3 h-3 rounded-full"></span>
              <span className="bg-[#ffbd2e] w-3 h-3 rounded-full ml-2"></span>
              <span className="bg-[#27c93f] w-3 h-3 rounded-full ml-2 mr-2"></span>
            </div>

            <div className="window_with_tabs flex bg-[#fafafa] p-0.5 items-center dark_background gap-2.5 ml-16 px-6 ">
              <span className="browser_lock_icon">
                <BrowserLock />
              </span>
              <span className="color-[#666] text-xs font-light tabs_section dark_background">
                site-git-commerce.vercel.app
              </span>
              <span className=" ">
                <Reverse />
              </span>
            </div>
          </div>
          <div className="graphic_image">
            <img src="https://vercel.com/_next/image?url=%2Fstatic%2Fhome%2Fui-reviews-light.png&w=640&q=100&dpl=dpl_HDoqfPVmxXxTpdKfeV1sLsy7enfg"></img>
          </div>
          <img
            className="m-auto mt-[-70px] absolute bottom-[-41px] mx-auto left-0 right-0 "
            src="https://vercel.com/_next/image?url=%2Fstatic%2Fhome%2Fui-toolbar.png&w=384&q=100&dpl=dpl_HDoqfPVmxXxTpdKfeV1sLsy7enfg"
          ></img>
        </div>
        <div className="outer_preview_message grid grid-cols-9 gap-0 mt-6 items-end">
          <div className="preview_messages_content px- w-[94%] col-span-8  text-white mb-3 ml-[30px] ">
            <p className="text-[13px] text-black text-right">
              Greta —
              <span className="text-[#666] dark_content_color">Product Marketing Team </span>
            </p>
          </div>
          <div className="preview_comment_name flex items-center justify-end col-span-1">
            <img
              className="ml-3"
              src="https://vercel.com/_next/image?url=%2Fstatic%2Fhome%2Favatar-greta.png&w=48&q=100&dpl=dpl_HDoqfPVmxXxTpdKfeV1sLsy7enfg"
            ></img>
          </div>
        </div>
      </div>

      <div className="center_path_lines relative w-[10%] flex  justify-center">
        <div className="div_circle border-2 rounded-full w-3 h-3 border-[#666] mx-auto absolute top-[184px] "></div>
        <div className="div_line w-px flex  bg-gradient-to-b from-[#999] to-[#f9cb28]  text-center m-auto absolute h-[577px] top-[202px]"></div>
      </div>

      <div className="develop_demo_benefits_item review_ui pb-0 pt-32 w-full sm:w-full md:w-full lg:w-1/2 xl:w-[45%] px-8">
        <div className="line_path hidden">
          <div className="div_gradient w-px flex  bg-gradient-to-b from-[#fff] to-[rgb(102,102,102)] h-28  "></div>
          <div className="div_circle border-2 rounded-full w-3 h-3 border-[#666] mx-auto absolute left-[-6px] "></div>
        </div>
        <div className="svgtransparent icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
          <svg
            className="with-icon_icon__MHUeb"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
            <path d="M16 3.13a4 4 0 010 7.75"></path>
          </svg>
        </div>
        <h5 className="text-black text-[22px] font-semibold mt-2 darktext">
          Collaborative reviews on UI
        </h5>
        <p className="text-[#666] leading-7 font-normal text-[23px] mb-7 lg:text-[15px] dark-text-color">
          Comment directly on components, layouts, copy, and more in real
          context and real time, integrated seamlessly with GitHub and Slack.
        </p>
        <a className="dark_border_background dark-border-bg text-[#666] text-[14px] dark-text-color border border-[#ccc] rounded-3xl p-1.5 bg-[#fafafa] hover:border-[#222] ">
          {" "}
          <span className="bg-[#eb367f] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-2xl :hover border-[#222]">
            New
          </span>
          Commenting <span className="text_hide">on Preview Deployments</span>{" "}
          is now available →
        </a>
      </div>
    </div>
  );
};
export default page;
