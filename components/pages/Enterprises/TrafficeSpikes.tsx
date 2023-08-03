import AnalysticIconbg from "@/utils/SvgIcons/CommonSvg/AnalysticIconbg";
import AnalysticInner from "@/utils/SvgIcons/CommonSvg/AnalysticInner";
import Clock from "@/utils/SvgIcons/CommonSvg/Clock";
import GlobeIcon from "@/utils/SvgIcons/CommonSvg/GlobeIcon";

const EnterpriseTrafficSpikes = () => {
  return (
    <div className="performance_section mt-32">
      <div className="analytics_analyticsSection flex flex-wrap gap-[72px]">
        <div className="geist_wrapper">
          <div className="analytics_analyticsSection_header">
            <div className="stack_header_analytics flex flex-col items-center gap-6 justify-center">
              <span className="inline-flex items-center rounded-full bg-[#000] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                Performance
              </span>
              <div className="text-[50px] font-bold tracking-[-.04em]  text-[#272727] analytics_heading darktext text-center ">
                Traffic spikes should be exciting, not scary
              </div>
              <span className="w-82 text-[20px]   break-words text-center text-gray-700  font-normal font-['Space_Grotesk']">
                Fully managed infrastructure designed to scale dynamically with
                your traffic, a global edge to <br /> ensure your site is fast
                for every customer, and the tools to monitor every aspect of
                your app.
              </span>
            </div>
            <div className="iteration-animation_carousel flex h-[480px] justify-center items-center relative overflow-hidden ">
                <img src="assets/trafficspike_img.png" className="invertlogo"></img>
            </div>
          
          </div>
        </div>
     

      <div className="geist_wrapper">
        <div className="analytics_cards__JUp2e grid grid-cols-[1fr_1fr_1fr] border border-[rgba(0_0_0_0.1)] rounded-2xl">
            <div className="analytics_cards_content p-8 grid gap-6 border-r-[1px] border-[rgba(0_0_0_0.1)]">
               <div className="infinite_img relative flex justify-center items-center">
                <AnalysticIconbg/>
                <div className="icon_inner absolute">
                     <AnalysticInner/>
                </div>
               </div>
               <div className="features_card_description grid gap-3 text-center">
                   <h3 className="font-semibold text-xl tracking-[-0.01em]">Infinite scalability, zero config</h3>
                   <p className="text-[#666] text-base leading-[26px]">Enable code to run on-demand without needing to manage your own infrastructure, provision servers, or upgrade hardware.</p>
               </div>

            </div>

            <div className="analytics_cards_content p-8 grid gap-6 border-r-[1px] border-[rgba(0_0_0_0.1)]">
               <div className="infinite_img relative flex justify-center items-center">
                <AnalysticIconbg/>
                <div className="icon_inner absolute w-[20px]">
                     <Clock/>
                </div>
               </div>
               <div className="features_card_description grid gap-3 text-center">
                   <h3 className="font-semibold text-xl tracking-[-0.01em]">Real-time insights and controls</h3>
                   <p className="text-[#666] text-base leading-[26px]">Get granular, first-party, real-user metrics on site performance per deployment, and controls to instantly update or revert.</p>
               </div>

            </div>

            <div className="analytics_cards_content p-8 grid gap-6">
               <div className="infinite_img relative flex justify-center items-center">
                <AnalysticIconbg/>
                <div className="icon_inner absolute">
                     <GlobeIcon/>
                </div>
               </div>
               <div className="features_card_description grid gap-3 text-center">
                   <h3 className="font-semibold text-xl tracking-[-0.01em]">Personalization at the edge</h3>
                   <p className="text-[#666] text-base leading-[26px]">Deliver dynamic, personalized content, while ensuring users only see the best version of your site.</p>
               </div>

            </div>

        </div>
        <div className="analystics_cards_amri mt-6">
        <div className="analysticswrapper_link ">
                <div className="analysticswrapper_stack grid gap-8 p-8 border border-[rgba(0,0,0,0.1)] rounded-2xl relative ">
                  <q className="testimonial_quote font-medium text-2xl text-center break-normal">
                  Last Black Friday and Cyber Monday was the first in NZXT's 20-year history with zero downtime. That literally translates to millions of dollars.
                  </q>
                  <div className="testimonial_stack_link grid gap-4 relative right-0 left-0 mx-auto justify-center">
                    <p className="testimonial_position font-['Space_Grotesk'] text-black font-normal">
                      Director of  Engineering
                    </p>
                    <div className="testimonial_logo">
                      <img
                        className="w-52 invertlogo"
                        src="/assets/svg/NZXT.svg"
                      ></img>
                    </div>
                  </div>
                  
                </div>
             
        </div>
      </div>





      </div>
    </div>
    </div>
  );
};
export default EnterpriseTrafficSpikes;
