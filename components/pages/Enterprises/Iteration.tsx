

"use client"




import CardVisual1 from "@/utils/SvgIcons/CommonSvg/CardVisual1";
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
        <div className="stack_stack_outer">
            <div className="workflow_cardsgrid grid gap-6 grid-cols-[repeat(2,calc(50%-24px)+24px /2)]">
             <a className="workflow_workflowCardLinkWrapper no-underline text-black">
                <div className="workflow_workflow_workflowCard__B_JoN border border-[rgba(0,0,0,0.1)] rounded-[20px] p-6 grid gap-4">
                    <div className="workflow_workflow_card_deatils grid gap-8 ">
                        <div className="card_visual p-4 h-56 flex relative item-center justify-center">
                           <div className="cardvisual_comment_wrapper">
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
                            <span>Previews</span>
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
