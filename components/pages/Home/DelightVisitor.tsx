import Monitoring from "@/utils/SvgIcons/CommonSvg/Monitoring"
import Globe from "./Globe"
import GlobeIcon from "@/utils/SvgIcons/CommonSvg/GlobeIcon"

const DelightVisitor =()=>{
    return(

<div className="outer_delight_visitor_section  mb-20 flex px-[20px] overflow-hidden py-5">
<div className="section_content w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-[51%]">
  <div className="ship_section_heading grid">
    <h5 className="text-[22px] font-semibold mb-3">
      Speed is critical to customers — and SEO
    </h5>
    <p className="text-xl font-normal mb-3">
      Next.js and Vercel work together to deliver the best performance
      for your end users, while maintaining best-in-class SEO practices.
    </p>
    <p className="text-base font-light pt-2">
      Built on cutting-edge serverless technology, Vercel can <br />
      withstand any traffic spike, with automatic failover and global{" "}
      <br />
      replication of assets.
    </p>
  </div>

  <div className="ship_section_item mt-9">
    <div className="icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
      <GlobeIcon />
    </div>
    <h5 className="text-black text-[22px] font-semibold mt-2">
      Global Edge Network
    </h5>
    <p className="text-[#666] leading-7 font-normal text-[15px]">
      Your site, fast everywhere. Deploy content around the world and
      update it in 300ms.
    </p>
  </div>

  <div className="ship_section_item mt-9 mb-9">
    <div className="icon_demo_benefits?_item bg-[#fafafa] border-[1px] rounded-md w-10 h-10 justify-center flex items-center">
      <Monitoring />
    </div>
    <h5 className="text-black text-[22px] font-semibold mt-2">
      First-party monitoring and observability
    </h5>
    <p className="text-[#666] leading-7 font-normal text-[15px]">
      Analyze logs, understand traffic and usage, and easily optimize
      your applications, without extra tooling or code.
    </p>
  </div>

  <a className="text-[#666] text-[14px] border border-[#ccc] rounded-3xl p-1.5 bg-[#fafafa] hover:border-[#222] ship_anchor items-center ">
    {" "}
    <span className="h-[20px] bg-[#fc6d26] text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-2xl :hover border-[#222]">
      New
    </span>
    <span><span className="text_hide">Monitoring is </span> now available for Pro and Enterprise customers →</span>
  </a>
</div>
<div className="section_content w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-[49%]">
  <Globe />
</div>
</div>
    )
}
export default DelightVisitor