

"use client"




import CardVisual1 from "@/utils/SvgIcons/CommonSvg/CardVisual1";
import Main from "@/utils/SvgIcons/CommonSvg/Main";
import RightArrow from "@/utils/SvgIcons/CommonSvg/RightArrow";

const EnterpriseIteration = () => {
  return (
    <div className="iteration_outer_section">
    <div className="workflow_section flex-col flex pt-4 gap-16">
      <div className="stack_header_headersection flex flex-col items-center gap-6 ">
        <span className="inline-flex items-center rounded-full bg-[#000] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">Collaboration</span>
        <div className="text-[50px] font-bold tracking-[-.04em]  text-[#272727]">
        Faster iteration. More innovation.
        </div>
        <span className="w-82 text-[20px]   break-words text-center text-gray-700  font-normal font-['Space_Grotesk']">
        The platform for rapid progress. Let your team focus on shipping features instead of <br/> managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
        </span>
      </div>
      <div className="iteration-animation_carousel flex h-[480px] justify-center items-center relative overflow-hidden "></div>
      <div className="giest_wrapper">
        <div className="stack_stack_outer grid gap-6">
            <div className="workflow_cardsgrid grid gap-6 grid-cols-[repeat(2,calc(50%-24px)+24px /2)] grid-cols-2">
             <a className="workflow_workflowCardLinkWrapper no-underline text-black">
                <div className="workflow_workflow_workflowCard__B_JoN border border-[rgba(0,0,0,0.1)] rounded-[20px] p-6 grid gap-4">
                    <div className="workflow_workflow_card_deatils grid gap-8 ">
                        <div className="card_visual p-4 h-56 flex relative item-center justify-center">
                           <div className="cardvisual_comment_wrapper w-[500px]">
                            <CardVisual1/>
                           </div>
                        </div>

                    </div>
                    <div className="workflow_card_content flex flex-col gap-0">
                        <h3 className="lg:text-2xl font-semibold leading-8">Make collaboration seamless</h3>
                        <p className="leading-6 text-[#666] my-2.5">Give your team and stakeholders the tools to share feedback and iterate faster. Instantly deploy collaborative staging environments with every update.</p>
                    </div>
                    <div className="workflow_card_footer">
                        <div className="workflow_card_footerlink flex items-center">
                            <span className="font-medium text-gray-700">Previews</span>
                            <RightArrow />
                        </div>
                    </div>
                </div>
             </a>
             <a className="workflow_workflowCardLinkWrapper no-underline text-black">
                <div className="workflow_workflow_workflowCard__B_JoN border border-[rgba(0,0,0,0.1)] rounded-[20px] p-6 grid gap-4">
                    <div className="workflow_workflow_card_details grid gap-8 ">
                        <div className="card_visual p-4 h-56 flex relative item-center justify-center">




                        <div className=" workflow_deployments py-4 px-8 border border-[#eaeaea] bg-[#fafafa] relative max-w-[500px] rounded-lg">
   <div className="workflow_visuallyHidden w-px h-px absolute overflow-hidden">An image of 2 deployments on Vercel. One is labeled as production on the main branch and it is deployed and ready. The other is labeled as a preview deployment on a feature branch and it is currently building.</div>
   <div className="stack_stack_workflow_deployment  py-4 relative border-b-1 border-[#eaeaea] ">
      <div className="stack_stack__iZkUS stack flex gap-4 items-end ">
         <div className="stack_stack__iZkUS stack workflow_deploymentNameType__qzET9 w-24 grid gap-1">
            <p className="font-semibold text-[#222]">m55uezf9h</p>
            <p className="font-semibold text-[#666]">Production</p>
         </div>
         <div className="stack_stack__iZkUS stack workflow_deploymentStatus flex gap-[13px] w-24 items-center ">
            <div className="stack_stack__iZkUS stack workflow_statusIndicator__nNDGi w-px">
               <div className="workflow_readyDot__lTIDL w-3 h-3 bg-[#50e3c2] rounded-full relative flex z-[2] shadow-[0_0_0_0_rgba(80,227,194,0.1)] scale-[1]"></div>
            </div>
            <p className="font-semibold text-[#222]">Ready</p>
         </div>
         <div className="workflow_deploymentBranch flex gap-2">
           <Main/>
            <p className="font-semibold text-[#666]">main</p>
         </div>
      </div>
   </div>
   <div className="workflow_deployment__2uYVi py-4 flex justify-start ">
      <div className="stack_stack__iZkUS stack flex gap-4 items-end">
         <div className=" workflow_deploymentNameType grid gap-1">
            <p className="font-semibold text-[#222]" >wq3r4t5y6</p>
            <p className="font-semibold text-[#666]"> Preview</p>
         </div>
         <div className="workflow_deploymentStatus__wbAU4 flex gap-2 w-24 " >
            <div className="stack_stack__iZkUS stack workflow_statusIndicator__nNDGi w-px" data-version="v1">
               <div className="spinner_wrapper__zbFtL gap-4" data-geist-spinner="" data-version="v1">
                  <div className="spinner_spinner__fqUfx relative top-[50%] left-[50%]">
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                     <div className="spinner_bar__VysK5"></div>
                  </div>
               </div>
            </div>
            <p>Building</p>
         </div>
         <div className=" stack workflow_deploymentBranch__qZR8x gap-2 flex ">
         <Main/>
            <p className="font-semibold text-[#666]">feature-branch</p>
         </div>
      </div>
   </div>
</div>





                        </div>

                    </div>
                    <div className="workflow_card_content flex flex-col gap-0">
                        <h3 className="lg:text-2xl font-semibold leading-8">Get to production faster</h3>
                        <p className="leading-6 text-[#666] my-2.5">With zero-configuration pre-production environments that integrate with your git workflow and builds that happen in minutes, Vercel removes the barriers that often slow teams down.</p>
                    </div>
                    <div className="workflow_card_footer">
                        <div className="workflow_card_footerlink flex items-center">
                            <span>Infrastructure</span>
                            <RightArrow />
                        </div>
                    </div>
                </div>
             </a>
            </div>





            <div className="testimonial_testimonialwrapper">
            <a className="testimonial_link no-underline text-black">
                <div className="testimonial_testimonial_stack grid gap-8 p-8 border border-[rgba(0,0,0,0.1)] rounded-2xl relative ">
                  <q className="testimonial_quote font-medium text-2xl text-center break-normal">All of our results pages were developed and deployed on Vercel, and it was the smoothest election night anyone could remember.</q>
                <div className="testimonial_stack_link grid gap-4 relative right-0 left-0 mx-auto ">
                    <p className="testimonial_position font-['Space_Grotesk'] text-black font-medium">Director of Newsroom Engineering</p>
                    <div className="testimonial_logo">
                    <img className="w-52 invertlogo" src="/assets/svg/washingtonpost.svg"></img>
                </div>
                </div>
                <div className="testimonial_link_arrow absolute right-8 bottom-8">
                   <div className="testimonial_linkwrapper rounded-full w-10 h-10 flex items-center justify-center relative border border-[#eaeaea] ">
                   <RightArrow />
                   </div>
                </div>
                </div>
            </a>
        </div>

        </div>
       
      </div>
      </div>
    </div>
  );
};
export default EnterpriseIteration;
